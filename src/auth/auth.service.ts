import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';

import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register({ name, lastName, email, password }: RegisterDto) {
    const user = await this.userService.findOneByEmail(email);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    await this.userService.create({
      name,
      lastName,
      email,
      password: await bcryptjs.hash(password, 10),
    });

    return {
      name,
      lastName,
      email,
    };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.userService.findByEmailWithPassword(email);
    if (!user) {
      throw new UnauthorizedException('email is wrong');
    }

    if(user.estado != 'HA'){
      throw new UnauthorizedException('bloqued user');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      user.cantidad_intentos_login++

        if(user.cantidad_intentos_login >= 5){
          user.estado = 'BL';
          await this.userService.update(user);
          throw new UnauthorizedException('bloqued user');
        }

        await this.userService.update(user);
        throw new UnauthorizedException('password is wrong');
    }

    const payload = { email: user.email, role: user.role };
    const token = await this.jwtService.signAsync(payload);

    user.cantidad_intentos_login = 0
    await this.userService.update(user);
    
    return {
      token,
    };
  }

  async profile({ email }: { email: string }) {
    return await this.userService.findOneByEmail(email);
  }
}

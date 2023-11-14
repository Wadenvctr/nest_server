import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

// @Module({
//   controllers: [AuthController],
//   providers: [AuthService],
//   imports: [
//     // UsersService,
//     // JwtModule.register({
//     //   secret: process.env.PRIVATE_KEY || 'SECRET',
//     //   signOptions: {
//     //     expiresIn: '24h'
//     //   }
//     // })
//   ]
// })
export class AuthModule {}

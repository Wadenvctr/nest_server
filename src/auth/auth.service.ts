import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import {JwtService} from "@nestjs/jwt"

@Injectable()
export class AuthService {
    constructor(private UserService,
                private jwtService: JwtService)  {}

  async login(userDto: CreateUserDto) {

  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.UserService
  }

  
}

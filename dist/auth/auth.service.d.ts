import { CreateUserDto } from "src/users/dto/create-user.dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private UserService;
    private jwtService;
    constructor(UserService: any, jwtService: JwtService);
    login(userDto: CreateUserDto): Promise<void>;
    registration(userDto: CreateUserDto): Promise<void>;
}

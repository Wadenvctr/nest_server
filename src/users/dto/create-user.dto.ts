import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    
    @ApiProperty({
        example:'user@mail.ru',
        description:'User email'
    })
    readonly email: string;

    @ApiProperty({
        example:'userPassword',
        description:'User password'
    })
    readonly password: string;
}
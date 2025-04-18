import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsArray, IsEmail, IsEmpty, IsEnum, IsInt, IsIP, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsPositive, IsString } from "class-validator";


export class CreateUserDto {
    @ApiProperty({ example: "Ali", description: "Foydalanuvchining ismi" })
    @IsNotEmpty()
    @IsString()
    name: string;

    
    @ApiProperty({ example: "ali@example.com", description: "Foydalanuvchining elektron pochtasi" })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ example: "+998901234567", description: "Foydalanuvchining telefon raqami" })
    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;

    @ApiProperty({ example: "1234", description: "Foydalanuvchining paroli" })
    @IsNotEmpty()
    password: string;

    @ApiProperty({ example: ["image"], description: "Profil rasmi URL manzili" })
    @IsOptional()
    @IsArray()
    image?: string[];

    
    @ApiProperty({ example: 1, description: "Hudud ID raqami" })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    region_id?: number;

    @ApiProperty({ example: Role.ADMIN, description: "Foydalanuvchi roli" })
    @IsNotEmpty()
    @IsEnum(Role)
    role: Role;

  
}


export class loginUserDto {
    @ApiProperty({ example: "ali@example.com", description: "Foydalanuvchi email manzili" })
    @IsEmail({}, { message: "Invalid email format" })
    @IsNotEmpty({ message: "Email is required" })
    email: string;

    @ApiProperty({ example: "1234", description: "Foydalanuvchi paroli" })
    @IsString()
    @IsNotEmpty({ message: "Password is required" })
    password: string;

    @ApiProperty({ example: '222.666.22' })
    ip: string;

    }



    
export class SessionDto {
    @IsString()
    @IsNotEmpty()
    @IsIP()
    ip: string;
}


export class SendOtpDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
  }
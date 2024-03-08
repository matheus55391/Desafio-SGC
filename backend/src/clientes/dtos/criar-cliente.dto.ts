import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CriarClienteDto {
  @ApiProperty({ example: 'João da Silva' })
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: '3MlYh@example.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '11999999999' })
  @IsNotEmpty()
  telefone: string;

  @ApiProperty({ example: 10.0 })
  @IsNotEmpty()
  @IsNumber()
  coordenada_x: number;

  @ApiProperty({ example: 5.0 })
  @IsNotEmpty()
  @IsNumber()
  coordenada_y: number;
}

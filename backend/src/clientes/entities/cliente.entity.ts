import { IsEmail, IsNotEmpty, IsPhoneNumber, IsNumber } from 'class-validator';
import { ICliente } from '../../interfaces/cliente.interface';
import { ApiProperty } from '@nestjs/swagger';

export class ClienteEntity implements ICliente {
  @ApiProperty({ example: 1 })
  public id: number;

  @ApiProperty({ example: 'João da Silva' })
  @IsNotEmpty()
  public nome: string;

  @ApiProperty({ example: '3MlYh@example.com' })
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @ApiProperty({ example: '11999999999' })
  @IsNotEmpty()
  @IsPhoneNumber()
  public telefone: string;

  @ApiProperty({ example: 10.0 })
  @IsNotEmpty()
  @IsNumber()
  public coordenada_x: number;

  @ApiProperty({ example: 5.0 })
  @IsNotEmpty()
  @IsNumber()
  public coordenada_y: number;
}

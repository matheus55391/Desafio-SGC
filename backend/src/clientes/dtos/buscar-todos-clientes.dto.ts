import { ApiProperty } from '@nestjs/swagger';

export class BuscarTodosClientesDto {
  @ApiProperty({ example: 'João da Silva', required: false })
  nome?: string;

  @ApiProperty({ example: '3MlYh@example.com', required: false })
  email?: string;

  @ApiProperty({ example: '11 99999-9999', required: false })
  telefone?: string;
}

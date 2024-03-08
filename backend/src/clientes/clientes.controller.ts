// src/clientes/clientes.controller.ts
import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CriarClienteDto } from './dtos/criar-cliente.dto';
import { BuscarTodosClientesDto } from './dtos/buscar-todos-clientes.dto';
import { ClientesService } from './clientes.service';
import { ICliente } from 'src/interfaces/cliente.interface';

@ApiTags('Clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna todos os clientes',
    isArray: true,
  })
  async getAll(@Query() params: BuscarTodosClientesDto): Promise<ICliente[]> {
    return await this.clientesService.buscarTodosClientes(params);
  }

  @Get('/ordem-visita')
  @ApiResponse({
    status: 200,
    description: 'Retorna a ordem de visita dos clientes',
    isArray: true,
  })
  async getOrdemVisita(): Promise<ICliente[]> {
    return await this.clientesService.calcularOrdemVisita();
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Cliente criado com sucesso',
    type: CriarClienteDto,
  })
  async create(@Body() clienteDto: CriarClienteDto): Promise<ICliente> {
    console.log(clienteDto);
    return await this.clientesService.criarCliente(clienteDto);
  }
}

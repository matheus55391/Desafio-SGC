// src/clientes/clientes.service.ts
import { Injectable } from '@nestjs/common';
import { CriarClienteDto } from './dtos/criar-cliente.dto';
import { BuscarTodosClientesDto } from './dtos/buscar-todos-clientes.dto';
import { ICliente } from 'src/interfaces/cliente.interface';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ClientesService {
  constructor(private readonly databaseService: DatabaseService) {}
  async criarCliente(clienteDto: CriarClienteDto): Promise<ICliente> {
    const result = await this.databaseService.executeQuery<ICliente>(
      `INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [
        clienteDto.nome.trim(),
        clienteDto.email.trim(),
        clienteDto.telefone.trim(),
        clienteDto.coordenada_x,
        clienteDto.coordenada_y,
      ],
    );

    return result[0];
  }

  async buscarTodosClientes(
    params: BuscarTodosClientesDto,
  ): Promise<ICliente[]> {
    let query = 'SELECT * FROM clientes';

    if (params.nome || params.email || params.telefone) {
      query += ' WHERE';

      if (params.nome) {
        query += ` LOWER(nome) ILIKE LOWER('%${params.nome.trim()}%')`;
      }

      if (params.email) {
        if (params.nome) {
          query += ' OR';
        }
        query += ` LOWER(email) ILIKE LOWER('%${params.email.trim()}%')`;
      }

      if (params.telefone) {
        if (params.nome || params.email) {
          query += ' OR';
        }
        query += ` LOWER(telefone) ILIKE LOWER('%${params.telefone.trim()}%')`;
      }
    }
    query += ' ORDER BY nome';
    return await this.databaseService.executeQuery<ICliente>(query);
  }

  async calcularOrdemVisita(): Promise<ICliente[]> {
    const resultado = await this.databaseService.executeQuery<ICliente>(
      'SELECT * FROM clientes',
    );

    const clientesOrdenados = resultado.sort((a, b) => {
      const somaA = a.coordenada_x + a.coordenada_y;
      const somaB = b.coordenada_x + b.coordenada_y;

      return somaA - somaB;
    });

    return clientesOrdenados;
  }
}

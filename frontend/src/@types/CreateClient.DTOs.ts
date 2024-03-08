export interface CreateClientRequestDTO {
    nome: string;
    email: string;
    telefone: string;
    coordenada_x: number;
    coordenada_y: number;
}

export interface CreateClientResponseDTO extends CreateClientRequestDTO {
    id: number;
}

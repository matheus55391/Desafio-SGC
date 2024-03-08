export interface CreateClientRequestDTO {
    nome: string;
    email: string;
    telefone: string;
    coordenada_x: string;
    coordenada_y: string;
}

export interface CreateClientResponseDTO extends CreateClientRequestDTO {
    id: number;
}

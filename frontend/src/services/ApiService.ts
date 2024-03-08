import { IClient } from "@/@types/Client.interface";
import { CreateClientRequestDTO, CreateClientResponseDTO } from "@/@types/CreateClient.DTOs";
import { GetClientsRequestDTO } from "@/@types/GetClients.DTOs";
import axios, { AxiosResponse } from "axios";


class ApiService {
    private static readonly instance: ApiService = new ApiService();
    private static readonly BASE_URL: string = process.env.REACT_APP_BASE_URL ?? 'http://localhost:5000';

    public static getInstance(): ApiService {
        return ApiService.instance;
    }

    public async createClient(cliente: CreateClientRequestDTO): Promise<CreateClientResponseDTO> {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const response = await axios.post(`${ApiService.BASE_URL}/clientes`, cliente);
        return response.data;
    }

    public async getClients(params?: GetClientsRequestDTO): Promise<IClient[]> {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const response = await axios.get<IClient[]>(`${ApiService.BASE_URL}/clientes`, {
            params,
        });
        return response.data;
    }

    public async getClientsByOrdemVisita(): Promise<IClient[]> {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const response = await axios.get<IClient[]>(`${ApiService.BASE_URL}/clientes/ordem-visita`);
        return response.data;
    }

}
export const apiService = new ApiService();

export default ApiService;
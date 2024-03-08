import { useQuery } from "@tanstack/react-query"
import { GetClientsRequestDTO } from "@/@types/GetClients.DTOs"
import { apiService } from "@/services/ApiService"

export function useGetClients(params?: GetClientsRequestDTO) {
    return useQuery({
        queryKey: ['getClients', params],
        queryFn: () => apiService.getClients(params),
        refetchOnWindowFocus: true,
    })
}

import { useQuery } from "@tanstack/react-query"
import { GetClientsRequestDTO } from "@/@types/GetClients.DTOs"
import { apiService } from "@/services/ApiService"
import QueryKeys from "@/config/QueryKeys"

export function useGetClients(params?: GetClientsRequestDTO) {
    return useQuery({
        queryKey: [QueryKeys.GET_CLIENTS, params],
        queryFn: () => apiService.getClients(params),
        refetchOnWindowFocus: true,
    })
}

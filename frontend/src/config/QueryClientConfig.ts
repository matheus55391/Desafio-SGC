import {
    QueryClient,
} from '@tanstack/react-query'

export const queryClientConfig = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 5,
            retryDelay: 2000,
        }
    }
})

'use client'

import { queryClientConfig as queryClient } from '@/config/QueryClientConfig';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider>
                <NextThemesProvider attribute="class">
                    {children}
                    <ToastContainer />
                </NextThemesProvider>
            </NextUIProvider>
        </QueryClientProvider>
    )
}
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useGetClients } from "@/hooks/useGetClients";
import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { TbRoute } from "react-icons/tb";

interface TableTopContentProps {
    onAddMoreButtonClick: () => void
    onCalculateRouteButtonClick: () => void
    rowsPerPage: number
    changeRowsPerPage: (value: number) => void

}

const TableTopContent: React.FC<TableTopContentProps> = ({ onAddMoreButtonClick, onCalculateRouteButtonClick, rowsPerPage, changeRowsPerPage }) => {
    const [filter, setFilter] = useState<string>("")
    const { data, isPending, isRefetching, ...query } = useGetClients({
        email: filter,
        nome: filter,
        telefone: filter
    })

    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        const newTimeoutId = setTimeout(() => {
            query.refetch();
        }, 1500);
        setTimeoutId(newTimeoutId);
        return () => {
            if (newTimeoutId) {
                clearTimeout(newTimeoutId);
            }
        };
    }, [filter]);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between gap-3 items-end">
                <div className="flex flex-row items-end justify-normal w-full">
                    <Input

                        classNames={{
                            base: "w-[400px] mr-2",
                        }}
                        labelPlacement="outside"
                        label="Pesquisar"
                        placeholder="Filtros"
                        size="lg"
                        fullWidth
                        disabled={isPending || isRefetching}
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}

                    />
                </div>
                <div className="flex w-full sm:max-w-[40%] justify-end sm:justify-between sm:gap-3 items-baseline ">
                    <span className="text-default-400 text-small flex sm:hidden">Total {data?.length} clientes </span>

                    <Input className="w-6 ml-3 flex sm:hidden" size="sm" variant="underlined" value={rowsPerPage?.toString()}
                        onChange={(e) => changeRowsPerPage(Number(e.target.value))}
                    />
                    <Button
                        className="bg-foreground text-background  ml-auto"
                        size="md"
                        onClick={onAddMoreButtonClick}
                        aria-label="Criar novo cliente"
                    >
                        <span className="font-semibold text-sm hidden sm:flex">Novo Cliente</span>
                        <IoPersonAddOutline size={20} />
                    </Button>
                    <Button
                        className="bg-foreground text-background  ml-auto"
                        size="md"
                        onClick={onCalculateRouteButtonClick}
                        aria-label="Calcular Trajeto"
                    >
                        <span className="font-semibold text-sm hidden sm:flex">Calcular Trajeto</span>
                        <TbRoute size={20} />
                    </Button>

                </div>
            </div>
            <div className="hidden sm:flex sm:flex-row justify-between items-center ">
                <span className="text-default-400 text-small">Total {data?.length}  clientes</span>
                <Input className="w-16" size="sm" variant="underlined" labelPlacement="outside-left" label="Rows" value={rowsPerPage?.toString()}
                    onChange={(e) => changeRowsPerPage(Number(e.target.value))}
                />
            </div>
        </div>
    )
}

export default TableTopContent
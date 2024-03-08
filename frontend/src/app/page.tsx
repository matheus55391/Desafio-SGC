'use client'
import { TableTopContent } from "@/components/TableTopContent";
import { Modal, ModalBody, ModalContent, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User, useDisclosure } from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";

import CreateClientModal from "@/components/CreateClientModal/CreateClientModal";
import TableBottomContent from "@/components/TableBottomContent/TableBottomContent";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { useGetClients } from "@/hooks/useGetClients";
import RouteTraceModal from "@/components/RouteTraceModal/RouteTraceModal";

export interface Customer {
    name: string;
    email: string;
    telefone: string;
}

export default function Home() {
    const { data, isPending, ...query } = useGetClients()
    const createClientModal = useDisclosure();
    const routeTraceModal = useDisclosure();
    const [page, setPage] = useState<number>(1);
    const [rowsPerPage, changeRowsPerPage] = useState(5)
    const pages = Math.ceil(data ? data.length / rowsPerPage : 0);

    const topContent = useMemo(() =>
        <TableTopContent
            onCalculateRouteButtonClick={routeTraceModal.onOpen}
            onAddMoreButtonClick={createClientModal.onOpen}
            rowsPerPage={rowsPerPage}
            changeRowsPerPage={changeRowsPerPage}
        />, [createClientModal.onOpen, rowsPerPage, changeRowsPerPage, routeTraceModal.onOpen]);

    const bottomContent = useMemo(() =>
        <TableBottomContent
            isDisabled={isPending || query.isRefetching}
            page={page}
            total={pages}
            onChange={setPage}
        />,
        [isPending, page, pages, query.isRefetching]);

    function phoneNumberMask(telefone: string) {
        // Remover caracteres não numéricos
        const numeroLimpo = telefone.replace(/\D/g, '');

        // Verificar o tamanho do número
        if (numeroLimpo.length === 11) {
            // Formatar para (XX) XXXXX-XXXX
            return `(${numeroLimpo.substring(0, 2)}) ${numeroLimpo.substring(2, 7)}-${numeroLimpo.substring(7, 11)}`;
        } else if (numeroLimpo.length === 10) {
            // Formatar para (XX) XXXX-XXXX
            return `(${numeroLimpo.substring(0, 2)}) ${numeroLimpo.substring(2, 6)}-${numeroLimpo.substring(6, 10)}`;
        } else {
            // Retornar o número original se não estiver nos formatos esperados
            return telefone;
        }
    }


    return (
        <div className="flex flex-col min-h-[100dvh] max-h-[100dvh] text-foreground bg-background item ">
            <Navbar position="static">
                <NavbarBrand>
                    <h1 className="font-bold  text-4xl text-purple-500">SGC</h1>
                </NavbarBrand>

                <NavbarContent justify="end">
                    <NavbarItem className="flex">
                        <ThemeToggleButton />
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <div className="flex flex-1 flex-col bg-background p-2 dark:bg-background sm:p-4 items-center">
                <div className="w-full p-2 sm:w-[80%] h-full   sm:p-4 rounded-sm space-y-10 flex flex-col ">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-3xl font-bold ">Buscar Clientes</h1>
                    </div>

                    <Table
                        topContent={topContent}
                        topContentPlacement="outside"
                        bottomContent={bottomContent}
                        bottomContentPlacement="outside"
                        fullWidth
                    >
                        <TableHeader>
                            <TableColumn key="name">Name</TableColumn>
                            <TableColumn key="email">Email</TableColumn>
                            <TableColumn key="telefone">Telefone</TableColumn>
                            <TableColumn key="cordenadas">Cordendadas</TableColumn>
                        </TableHeader>
                        <TableBody isLoading={isPending || query.isRefetching} loadingContent={<Spinner label="Carregando..." />} emptyContent="Nenhum cliente encontrado." >
                            {
                                (data || [])
                                    .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                                    .map((client, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <User
                                                    name={client.nome}
                                                    description="Cliente"
                                                    avatarProps={{
                                                        className: "min-w-10 hidden sm:flex",
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell>{client.email}</TableCell>
                                            <TableCell>{phoneNumberMask(client.telefone)}</TableCell>
                                            <TableCell>(x{client.coordenada_x}:y{client.coordenada_y})</TableCell>
                                        </TableRow>
                                    ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
            <CreateClientModal isOpen={createClientModal.isOpen} onOpenChange={createClientModal.onOpenChange} />
            <RouteTraceModal isOpen={routeTraceModal.isOpen} onOpenChange={routeTraceModal.onOpenChange} />
        </div>
    );
}

'use client'
import { apiService } from "@/services/ApiService"
import { Modal, ModalContent, ModalHeader, ModalBody, Spinner, User, Accordion, AccordionItem, Avatar } from "@nextui-org/react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect } from "react"

interface RouteTraceModalProps {
    isOpen: boolean,
    onOpenChange: (isOpen: boolean) => void
}
const RouteTraceModal: React.FC<RouteTraceModalProps> = ({ isOpen, onOpenChange }) => {
    // const ordemVisitaMutation = useMutation({
    //     mutationFn: apiService.getClientsByOrdemVisita,
    // })
    const { data: clients, isLoading } = useQuery({
        queryKey: ['getClientsByOrdemVisita'],
        queryFn: apiService.getClientsByOrdemVisita
    })

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} closeButton={false}>
            <ModalContent >
                {(onClose) => (
                    <>
                        {
                            isLoading ?
                                <ModalBody>
                                    <div className="flex flex-col items-center justify-center h-60 space-y-2">
                                        <Spinner />
                                        <span>Buscando a melhor rota</span>

                                    </div>
                                </ModalBody>
                                :
                                <div className="flex flex-col max-h-96 overflow-y-scroll scrollbar-hide">
                                    <ModalHeader className="flex flex-row gap-1 space-x-2 ">
                                        <span>A Melhor Rota foi Encontrada</span>
                                    </ModalHeader>
                                    <ModalBody>
                                        <div>

                                            <Accordion selectionMode="multiple">
                                                {
                                                    clients ? clients?.map((client, index) => {
                                                        return (
                                                            <AccordionItem
                                                                key={index}
                                                                aria-label={client.nome}
                                                                startContent={
                                                                    <Avatar
                                                                        name={client.nome}
                                                                        radius="full"
                                                                        alt="Avatar"
                                                                    // src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                                                    />
                                                                }
                                                                title={client.nome}
                                                            >
                                                                <div>
                                                                    Telefone: {client.telefone}
                                                                </div>
                                                                <div>
                                                                    E-mail: {client.email}
                                                                </div>
                                                                <div>
                                                                    Coordenadas: x{client.coordenada_x}:y{client.coordenada_y}
                                                                </div>
                                                            </AccordionItem>
                                                        )
                                                    }) : <></>

                                                }

                                            </Accordion>
                                        </div>
                                    </ModalBody>
                                </div>
                        }
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default RouteTraceModal

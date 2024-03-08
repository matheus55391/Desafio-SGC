'use client'
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { BsPersonVcard } from "react-icons/bs";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// import { toast } from 'react-toastify';
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { apiService } from "@/services/ApiService";
import { IoPersonAddOutline } from "react-icons/io5";

interface CreateClientModalProps {
    isOpen: boolean
    onOpenChange: (isOpen: boolean) => void
}

const schema = z.object({
    nome: z.string().min(2, 'Nome muito curto').max(50, 'Nome muito longo'),
    email: z.string().email('Email inválido'),
    telefone: z.string().min(8, 'Telefone inválido').max(11, 'Telefone inválido'),
    coordenada_x: z.string().regex(/^\d+$/, 'Digite apenas números').min(1, 'Coordenada inválida').max(10, 'Coordenada inválida'),
    coordenada_y: z.string().regex(/^\d+$/, 'Digite apenas números').min(1, 'Coordenada inválida').max(10, 'Coordenada inválida'),
});

export type FormInputs = {
    nome: string;
    email: string;
    telefone: string;
    coordenada_x: string;
    coordenada_y: string;
}

const CreateClientModal: React.FC<CreateClientModalProps> = ({ isOpen, onOpenChange }) => {

    const methods = useForm<FormInputs>({
        reValidateMode: 'onChange',
        criteriaMode: "firstError",
        shouldFocusError: true,
        resolver: zodResolver(schema),
    });

    useEffect(() => {
        methods.reset()
    }, [, methods])

    const mutation = useMutation({
        mutationFn: apiService.createClient,

        onSuccess: async () => {
            methods.reset()
            onOpenChange(false)
        }
    })

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        await toast.promise(
            mutation.mutateAsync(data),
            {
                pending: 'Aguarde um momento. 🤖',
                success: 'Cliente criado com sucesso! 🎉',
                error: 'Ops! Houve um erro ao criar o cliente. Por favor, tente novamente. 🤯'
            }
        );
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={!mutation.isPending} isKeyboardDismissDisabled={mutation.isPending}>
            <ModalContent >
                {(onClose) => (
                    <FormProvider {...methods} >

                        <ModalHeader className="flex flex-row gap-1 space-x-2">
                            <IoPersonAddOutline className="text-2xl" />
                            <span>Novo Cliente</span>
                        </ModalHeader>
                        <ModalBody>
                            <form className="flex flex-col gap-4" onSubmit={methods.handleSubmit(onSubmit)} >
                                <Input
                                    isClearable
                                    label="Nome"
                                    labelPlacement="outside"
                                    placeholder="Digite o nome..."
                                    size="lg"
                                    isInvalid={!!methods.formState.errors.nome}
                                    errorMessage={methods.formState.errors.nome?.message}
                                    isReadOnly={mutation.isPending}
                                    {...methods.register('nome')}
                                    fullWidth

                                />
                                <Input
                                    isClearable
                                    labelPlacement="outside"
                                    label="Email"
                                    placeholder="Digite o email..."
                                    size="lg"
                                    {...methods.register('email')}
                                    isInvalid={!!methods.formState.errors.email}
                                    errorMessage={methods.formState.errors.email?.message}
                                    isReadOnly={mutation.isPending}
                                    fullWidth

                                />
                                <Input
                                    isClearable
                                    labelPlacement="outside"
                                    label="Telefone"
                                    placeholder="Digite o telefone..."
                                    size="lg"
                                    {...methods.register('telefone')}
                                    isInvalid={!!methods.formState.errors.telefone}
                                    errorMessage={methods.formState.errors.telefone?.message}
                                    isReadOnly={mutation.isPending}
                                    fullWidth
                                    maxLength={11}
                                />
                                <h1 className="text-lg">Cordenadas</h1>
                                <div className="flex flex-row space-x-2">
                                    <Input
                                        isClearable
                                        placeholder="Coordenada X..."
                                        size="lg"
                                        {...methods.register('coordenada_x')}
                                        isInvalid={!!methods.formState.errors.coordenada_x}
                                        errorMessage={methods.formState.errors.coordenada_x?.message}
                                        isReadOnly={mutation.isPending}
                                        fullWidth
                                    />

                                    <Input
                                        isClearable
                                        placeholder="Coordenada Y..."
                                        size="lg"
                                        {...methods.register('coordenada_y')}
                                        isInvalid={!!methods.formState.errors.coordenada_y}
                                        errorMessage={methods.formState.errors.coordenada_y?.message}
                                        isReadOnly={mutation.isPending}
                                        fullWidth
                                    />
                                </div>
                                <Button color="secondary" variant="shadow" className="w-full my-4" type="submit" isLoading={mutation.isPending}>
                                    <span className="font-extrabold text-white text-sm">Confirmar</span>
                                </Button>
                            </form>
                        </ModalBody>
                    </FormProvider>
                )}
            </ModalContent>
        </Modal>
    )
}

export default CreateClientModal
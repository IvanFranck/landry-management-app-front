import { SERVICES_QUERY_KEY } from "@/common/constants/query-keys";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { deleteService } from "@/lib/api/services";
import { ServicesEntity } from "@/lib/types/entities";
import { TGenericResponse } from "@/lib/types/responses";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MoreHorizontal, SquarePen, Trash2 } from "lucide-react";



export function ServiceListItem({ service }: { service: ServicesEntity }) {

    const queryClient = useQueryClient()
    const { toast } = useToast()

    const { mutateAsync, isPending } = useMutation({
        mutationFn: deleteService,
        onSuccess: (resp: TGenericResponse<ServicesEntity>) => {
            toast({ description: resp.message })
            queryClient.invalidateQueries({ queryKey: SERVICES_QUERY_KEY })
        },
        onError: () => {
            toast({ variant: 'destructive', title: 'Error', description: 'Une erreur est survenue lors de la suppression du service' })
        }
    })

    return (
        <Card className="bg-inherit rounded-none shadow-none border-b-slate-300">
            <CardHeader className="px-2 py-5">
                <CardTitle className=" flex justify-between items-start">
                    <div className="w-full">
                        <h2 className="text-lg font-medium mb-2">{service.label}</h2>
                        {service.description && <p className="text-gray-500 font-normal mb-1">{service.description}</p>}
                        <span className="text-sm font-medium">{service.price} Fcfa</span>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger disabled={isPending} className=" shadow-none bg-slate-200 w-18 h-18 flex justify-center items-center p-1">
                            <MoreHorizontal color="#384A61" size={18} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="font-normal text-sm mr-3 bg-gray-100 border border-gray-300 rounded-sm text-gray-600">
                            <DropdownMenuItem className="flex flex-row items-center">
                                <Button onClick={async () => await mutateAsync(service.id)} variant='ghost' className="space-x-2">
                                    <Trash2 size={14} /><span>Supprimer</span>
                                </Button>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex flex-row items-center space-x-2">
                                <Button variant='ghost' className="space-x-2">
                                    <SquarePen size={14} /><span>Modifier</span>
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardTitle>
            </CardHeader>
        </Card>
    )
}
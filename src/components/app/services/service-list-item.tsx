import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ServicesEntity } from "@/lib/types/entities";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal, SquarePen, Trash2 } from "lucide-react";



export function ServiceListItem({ service }: { service: ServicesEntity }) {
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
                        <DropdownMenuTrigger>
                            <Button variant='outline' className=" shadow-none bg-slate-200 w-18 h-18 flex justify-center items-center p-1">
                                <MoreHorizontal color="#384A61" size={18} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="font-normal text-sm mr-3 bg-gray-100 border border-gray-300 rounded-sm text-gray-600">
                            <DropdownMenuItem className="flex flex-row items-center">
                                <Button variant='ghost' className="space-x-2">
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
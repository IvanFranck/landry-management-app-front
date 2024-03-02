import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomersEntity } from "@/lib/types/entities";
import React from "react";

type CustomerListItemProps = {
    customer: CustomersEntity
    customerSelectedId: number
}

export default function CustomerListItem({ customer, customerSelectedId, ...props }: CustomerListItemProps & React.HTMLProps<HTMLDivElement>) {

    return (
        <Card
            onClick={props.onClick}
            className={`
                cursor-pointer bg-inherit rounded-none shadow-none border-x-0 border-t-0 border-b-slate-300 transition-all duration-300
                ${customerSelectedId === customer.id ? 'shadow-lg' : ''}
            `}
        >
            <CardHeader className="p-2 py-4">
                <CardTitle
                    className={`
                        font-normal text-gray-600 mb-2 transition-all duration-300
                        ${customerSelectedId === customer.id ? 'font-medium text-black pl-2' : ''}
                    `}
                >
                    {customer.name}
                </CardTitle>
            </CardHeader>
        </Card>
    )
}
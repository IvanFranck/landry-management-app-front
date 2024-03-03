import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomersEntity } from "@/lib/types/entities";
import React from "react";

type CustomerListItemProps = {
    customer: CustomersEntity
}

export default function CustomerListItem({ customer, ...props }: CustomerListItemProps & React.HTMLProps<HTMLDivElement>) {

    return (
        <Card
            onClick={props.onClick}
            className={`cursor-pointer bg-inherit rounded-none shadow-none ${props.className}`}
        >
            <CardHeader className="p-2 py-4">
                <CardTitle className="font-normal text-gray-600 mb-2">
                    {customer.name}
                </CardTitle>
            </CardHeader>
        </Card>
    )
}
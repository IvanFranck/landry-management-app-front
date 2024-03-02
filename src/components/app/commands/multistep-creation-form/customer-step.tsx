import { CUSTOMERS_QUERY_KEY } from "@/common/constants/query-keys";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchAllCustomersQuery, searchCustomerByName } from "@/lib/api/customers";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import CustomerListItemSkeleton from "../../customers/customer-list-item-skeleton";
import CustomerListItem from "../../customers/customer-list-item";
import { useCallback, useMemo, useState } from "react";
import { debounce } from "lodash"
import { CustomersEntity } from "@/lib/types/entities";

// const debouncedSearchCustomers = debounce((searchCustomer: string) => searchCustomerByName(searchCustomer), 1000)

export function CustomerStep() {

    const [selectedCustomerId, setSelectedCustomerId] = useState<number>(-1);
    const [findedCustomers, setFindedCustomers] = useState<CustomersEntity>();
    console.log("🚀 ~ CustomerStep ~ findedCustomers:", findedCustomers)

    const { data: customers } = useQuery({
        queryKey: CUSTOMERS_QUERY_KEY,
        queryFn: fetchAllCustomersQuery,
        staleTime: 12000
    })


    const handleSearch = useCallback(async (seachText: string) => {
        if (!seachText) return
        try {
            const result = await searchCustomerByName(seachText.trim())
            setFindedCustomers(result.details)
        } catch (error) {
            console.error('catched error', error)
        }
    }, [])

    const debounceSearch = useMemo(() => {
        return debounce(handleSearch, 1000);
    }, [handleSearch])

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        await debounceSearch(e.target.value)
    }

    return (

        <div className="w-full px-4 mt-4 flex flex-col">
            <h1 className="text-lg font-medium">Client</h1>

            {/* search and new */}
            <div className="w-full flex items-center space-x-2 mt-4">
                <Input onChange={handleChange} className="bg-white" type="search" placeholder="Rechercher un client par son nom" />
                <Button className="flex items-center space-x-1" type="submit">
                    <span>Nouveau</span>
                    <Plus size={16} strokeWidth={3} />
                </Button>
            </div>

            {/* customers list */}
            <div className="w-full grid mt-6">
                {
                    customers ?
                        customers.details.map((customer) => <CustomerListItem onClick={() => setSelectedCustomerId(customer.id)} key={customer.id} customer={customer} customerSelectedId={selectedCustomerId} />)
                        : <CustomerListItemSkeleton />
                }
            </div>
        </div>
    )
}
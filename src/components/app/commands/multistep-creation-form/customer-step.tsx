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
import { NoDataIllustration } from "@/components/illustrations/no-data-illustration";

// const debouncedSearchCustomers = debounce((searchCustomer: string) => searchCustomerByName(searchCustomer), 1000)

export function CustomerStep() {

    const [selectedCustomer, setSelectedCustomer] = useState<CustomersEntity | undefined>();
    const [findedCustomers, setFindedCustomers] = useState<CustomersEntity[] | undefined>();
    const [searchloading, setSearchLoading] = useState(false)

    const { data: customers } = useQuery({
        queryKey: CUSTOMERS_QUERY_KEY,
        queryFn: fetchAllCustomersQuery,
        staleTime: 12000
    })


    const handleSearch = useCallback(async (seachText: string) => {
        if (!seachText) {
            setFindedCustomers(undefined)
            setSearchLoading(false)
            return
        }
        try {
            const result = await searchCustomerByName(seachText.trim())
            setFindedCustomers(result.details)
        } catch (error) {
            console.error('catched error', error)
        } finally {
            setSearchLoading(false)
        }
    }, [])

    const debounceSearch = useMemo(() => {
        return debounce(handleSearch, 1000);
    }, [handleSearch])

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchLoading(true)
        await debounceSearch(e.target.value)
    }

    return (

        <div className="w-full px-4 mt-4 flex flex-col">
            <h1 className="text-lg font-medium">Client</h1>

            {
                selectedCustomer ? (
                    <div className="w-full mt-4 flex flex-row justify-between items-center">
                        <CustomerListItem customer={selectedCustomer} className=" border-0 px-0" />
                        <h3 className="text-blue-700 cursor-pointer font-semibold mb-2" onClick={() => setSelectedCustomer(undefined)}>Changer</h3>
                    </div>
                ) :
                    <>
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

                            {/* customers list */}
                            {
                                searchloading ?
                                    <CustomerListItemSkeleton />
                                    : findedCustomers ? findedCustomers.length === 0 ? <NoDataIllustration text="Aucun client correspondant" /> :
                                        findedCustomers.map((customer) => <CustomerListItem onClick={() => setSelectedCustomer(customer)} key={customer.id} customer={customer} className=" border-x-0 border-t-0 border-b-slate-300" />)
                                        : customers ?
                                            customers.details.map((customer) => <CustomerListItem onClick={() => setSelectedCustomer(customer)} key={customer.id} customer={customer} className=" border-x-0 border-t-0 border-b-slate-300" />)
                                            : <CustomerListItemSkeleton />
                            }
                        </div>
                    </>
            }

        </div>
    )
}
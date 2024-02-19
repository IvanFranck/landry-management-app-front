import { ServiceListItem } from "@/components/app/services/service-list-item"
import { ServiceListItemSkeleton } from "@/components/app/services/service-list-item-skeloton"
import { fetchAllServicesQuery } from "@/lib/api/services"
import { useQuery } from "@tanstack/react-query"

export default function ServicesListView() {

    const queryKey = ["services_key"]
    const { data: services } = useQuery({
        queryKey,
        queryFn: fetchAllServicesQuery,
        staleTime: 12000
    })
    return (
        <div className="px-2">
            {
                services ?
                    services.map((service) => <ServiceListItem service={service} key={service.id} />)
                    : <ServiceListItemSkeleton />
            }
        </div>
    )
}
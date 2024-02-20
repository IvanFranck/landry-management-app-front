import { SERVICES_QUERY_KEY } from "@/common/constants/query-keys"
import { ServiceListItem } from "@/components/app/services/service-list-item"
import { ServiceListItemSkeleton } from "@/components/app/services/service-list-item-skeloton"
import { fetchAllServicesQuery } from "@/lib/api/services"
import { useQuery } from "@tanstack/react-query"

export default function ServicesListView() {

    const { data: services } = useQuery({
        queryKey: SERVICES_QUERY_KEY,
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
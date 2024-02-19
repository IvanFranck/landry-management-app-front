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
        <>
            {
                services && services.map((service) => <div key={service.id}>{service.label}</div>)
            }
            <div> This is the services view</div>
        </>
    )
}
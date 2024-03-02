import { Skeleton } from "@/components/ui/skeleton";

export default function CustomerListItemSkeleton() {
    return (
        <div className="mt-4">
            {
                Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton key={index} className="h-4 w-[250px]" />
                ))
            }
        </div>
    )
}
import { ServiceOnCommandEntity } from "@/lib/types/entities";
// import ServiceCreationDrawer from "../../services/service-creation-drawer";
import ServiceFindDrawer from "../../services/service-find-drawer";
import SelectedServiceItem from "../selected-service-card-item";
import DiscountStep, { DiscountStepProps } from "./discount-step";
import { useEffect } from "react";

type ServiceStepProps = DiscountStepProps & {
    selectedServices: ServiceOnCommandEntity[] | []
    setSelectedServices: React.Dispatch<React.SetStateAction<ServiceOnCommandEntity[] | []>>
}

export function ServiceStep({ selectedServices, setSelectedServices, billingPrice, discount, setDiscount }: ServiceStepProps) {

    useEffect(() => {
        if (selectedServices.length === 0) {
            setDiscount(0)
        }
    })

    return (
        <div className="px-4 w-full space-y-6 mt-4">
            {/* services section*/}
            <section className="w-full">
                <div className={`w-full flex ${selectedServices.length > 0 ? 'flex-row justify-between items-center' : 'flex-col'}`}>
                    <h3 className="text-lg font-medium">Services</h3>
                    <div className="grow-0">
                        {/* search and new */}
                        <div className={`w-full flex items-center  ${selectedServices.length > 0 ? 'space-x-4' : 'space-x-2 mt-4'}`}>
                            <ServiceFindDrawer selectedServices={selectedServices} setSelectedServices={setSelectedServices} />
                            {/* <ServiceCreationDrawer /> */}
                        </div>
                    </div>
                </div>
                <div className="mt-4 space-y-4">
                    {
                        selectedServices.map((item) => (
                            <SelectedServiceItem className="bg-slate-200" key={item.service.id} selectedService={item} />
                        ))
                    }
                </div>
            </section>

            {/*  discount section */}
            {
                selectedServices.length > 0 &&

                <section className="w-full space-y-4">
                    <DiscountStep billingPrice={billingPrice} discount={discount} setDiscount={setDiscount} />
                </section>
            }
        </div>
    )
}
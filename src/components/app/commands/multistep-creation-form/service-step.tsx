import ServiceCreationDrawer from "../../services/service-creation-drawer";
import ServiceFindDrawer from "../../services/service-find-drawer";


export function ServiceStep() {
    return (
        <div className="w-full px-4 mt-4 flex flex-col">
            <h3 className="text-lg font-medium">Services</h3>
            <>
                {/* search and new */}
                <div className="w-full flex items-center space-x-2 mt-4">
                    <ServiceFindDrawer />
                    <ServiceCreationDrawer />
                </div>
            </>
        </div>
    )
}
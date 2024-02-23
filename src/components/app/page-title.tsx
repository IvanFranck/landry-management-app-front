import { MoveLeft } from "lucide-react"
import { NavLink } from "react-router-dom"
import ServiceCreationDrawer from "./services/service-creation-drawer"

export default function PageTitle({ pageName, to }: { pageName: string, to?: string }) {

    return (
        <>
            {to ?
                <div className="w-full flex items-center space-x-2 p-2 text-lg font-medium" >
                    <NavLink className="" to={to}>
                        <MoveLeft size={20} />
                    </NavLink>
                    <span>{pageName}</span>
                </div>
                :
                <div className="w-full flex flex-row items-center px-2">
                    <span className="text-lg font-medium grow text-center">{pageName}</span>
                    <ServiceCreationDrawer />
                </div>
            }
        </>
    )
}
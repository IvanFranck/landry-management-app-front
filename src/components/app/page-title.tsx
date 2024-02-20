import { MoveLeft } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function PageTitle({ pageName, to }: { pageName: string, to?: string }) {

    return (
        <>
            {to ?
                <div className="w-full flex items-center space-x-2 p-2 text-lg font-medium" >
                    <NavLink to={to}>
                        <MoveLeft size={20} />
                    </NavLink>
                    <span>{pageName}</span>
                </div>
                :
                <div className="w-full flex justify-center p-2 text-lg font-medium">{pageName}</div>
            }
        </>
    )
}
import { MoveLeft } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function PageTitle({ pageName, to }: { pageName: string, to: string }) {

    return (
        <NavLink className="w-full flex items-center space-x-1 p-2 text-lg font-medium" to={to}>
            <MoveLeft size={18} />
            <span>{pageName}</span>
        </NavLink>
    )
}
import { NavMobile } from "@/components/NavMobile";
import { Outlet } from "react-router-dom"

export default function PageLayout() {
    return (
        <div className="w-full min-h-screen bg-slate-200 relative">
            <NavMobile />
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    )
}
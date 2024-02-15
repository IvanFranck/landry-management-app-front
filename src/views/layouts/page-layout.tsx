import { Outlet } from "react-router-dom"
import { PagetitleLayout } from "./page-title-layout"

export default function PageLayout() {
    return (
        <div className="w-full min-h-screen bg-slate-200 relative">
            <PagetitleLayout />
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    )
}
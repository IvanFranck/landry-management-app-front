import { Outlet } from "react-router-dom"
import { PagetitleLayout } from "./page-title-layout"
import MobileNavLayout from "./mobile-nav-layout"
import { ScrollArea } from "@radix-ui/react-scroll-area"

export default function PageLayout() {
    return (
        <ScrollArea className="w-full min-h-screen bg-slate-200">
            <PagetitleLayout />
            <div className="w-full">
                <Outlet />
            </div>
            <MobileNavLayout />
        </ScrollArea>
    )
}
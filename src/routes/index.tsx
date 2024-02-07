import { RouteObject } from "react-router-dom"
import { Root } from "@/views/Root.tsx"
import { CommandsListView } from "@/views/commands/CommandsListView"
import { CommandDetailView } from "@/views/commands/CommandDetailsView"
import ErrorPage from "@/views/error-view"
import PageLayout from "@/views/page-layout"


export const routes: RouteObject[] = [
    {
        id: 'Root',
        path: '/',
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Root />
            }
        ]
    },

    {
        element: <PageLayout />,
        children: [
            {
                id: 'Commandes',
                path: '/commands',
                children: [
                    {
                        index: true,
                        element: <CommandsListView />
                    },
                    {
                        id: 'commande view',
                        path: ':commandId',
                        element: <CommandDetailView />
                    }
                ]
            }
        ]
    }



]
import { RouteObject } from "react-router-dom"
import { Root } from "@/views/Root.tsx"
import { CommandsListView } from "@/views/commands/CommandsListView"
import { CommandDetailView } from "@/views/commands/CommandDetailsView"


export const routes: RouteObject[] = [
    {
        id: 'Root',
        path: '/',
        element: <Root />
    },

    {
        id: 'Commandes',
        path: '/commands',
        element: <CommandsListView />,
        children: [
            {
                id: 'commande view',
                path: 'commands/:commandId',
                element: <CommandDetailView />
            }
        ]
    }
]
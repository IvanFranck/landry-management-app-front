import { Params, RouteObject } from "react-router-dom"
import { Root } from "@/views/Root.tsx"
import { CommandsListView } from "@/views/commands/CommandsListView"
import { CommandDetailView } from "@/views/commands/CommandDetailsView"
import ErrorPage from "@/views/error-view"
import PageLayout from "@/views/layouts/page-layout"
import PageTitle from "@/components/app/page-title"


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
                        element: <CommandsListView />,
                        handle: {
                            pageTitle: () => <PageTitle pageName="Commandes" to='/' />
                        }
                    },
                    {
                        id: 'commande view',
                        path: ':commandId',
                        element: <CommandDetailView />,
                        handle: {
                            pageTitle: (params: Params) => {
                                console.log('data routes', params)
                                return <PageTitle pageName={`Commande ${params.commandId}`} to='/commands' />
                            }
                        }
                    }
                ]
            }
        ]
    }



]
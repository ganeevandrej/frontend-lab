import { useRoutes } from 'react-router'
import App from '../../App'
import { routeCategories, routeSubCategories } from './configRouter'

export const AppRouter = () => {
    const routes = [
        {
            path: '/',
            element: <App />,
            children: [...routeCategories, ...routeSubCategories],
        },
    ]

    return useRoutes(routes)
}

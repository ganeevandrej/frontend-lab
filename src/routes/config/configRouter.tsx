import { AccessibilityPage } from '../AccessibilityPage'
import { ArchitecturePage } from '../ArchitecturePage'
import { BrowserApisPage } from '../BrowserApisPage'
import { DeliveryPage } from '../DeliveryPage'
import { FilteringPage } from '../FilteringPage'
import { FormsPage } from '../FormsPage'
import { NetworkingPage } from '../NetworkingPage'
import { PerformancePage } from '../PerformancePage'
import { RenderingPage } from '../RenderingPage'
import { SecurityPage } from '../SecurityPage'
import { StateManagementPage, PropsDrillingPage } from '../StateManage'
import { StoragePage } from '../StoragePage'
import { TestingPage } from '../TestingPage'
import { UiComplexityPage } from '../UiComplexityPage'

const routeCategories = [
    {
        id: '1',
        path: '/accessibility',
        label: 'Доступность',
        element: <AccessibilityPage />,
    },
    {
        id: '2',
        path: '/architecture',
        label: 'Архитектура',
        element: <ArchitecturePage />,
    },
    {
        id: '3',
        path: '/browser-apis',
        label: 'Браузерное API',
        element: <BrowserApisPage />,
    },
    {
        id: '4',
        path: '/delivery',
        label: 'Сборка & Делпой',
        element: <DeliveryPage />,
    },
    {
        id: '5',
        path: '/filtering',
        label: 'Фильтры & поиск',
        element: <FilteringPage />,
    },
    { id: '6', path: '/forms', label: 'Формы', element: <FormsPage /> },
    {
        id: '7',
        path: '/networking',
        label: 'Асинхронность',
        element: <NetworkingPage />,
    },
    {
        id: '8',
        path: '/performance',
        label: 'Производительность',
        element: <PerformancePage />,
    },
    {
        id: '9',
        path: '/rendering',
        label: 'Рендеринг',
        element: <RenderingPage />,
    },
    {
        id: '10',
        path: '/security',
        label: 'Безопасность',
        element: <SecurityPage />,
    },
    {
        id: '11',
        path: '/state-management',
        label: 'Управление состоянием',
        element: <StateManagementPage />,
    },
    {
        id: '12',
        path: '/storage',
        label: 'Хранилище',
        element: <StoragePage />,
    },
    {
        id: '13',
        path: '/testing',
        label: 'Тестирование',
        element: <TestingPage />,
    },
    {
        id: '14',
        path: '/ui-complexity',
        label: 'Сложность UI',
        element: <UiComplexityPage />,
    },
]

const routeSubCategories = [
    {
        id: String(routeCategories.length + 1),
        categoryId: '11',
        path: '/state-management/props-drilling',
        label: 'Проброс пропсов',
        element: <PropsDrillingPage />,
    },
]

const mapToLink = (route: { path: string; label: string }) => ({
    to: route.path,
    label: route.label,
})

const getAppNavigation = () => {
    return routeCategories.map((category) => {
        const subcategories = routeSubCategories.filter(
            (subcategory) => subcategory.categoryId === category.id
        )

        return {
            ...mapToLink(category),
            ...(subcategories.length > 0 && {
                childs: subcategories.map(mapToLink),
            }),
        }
    })
}

export { routeCategories, routeSubCategories, getAppNavigation }

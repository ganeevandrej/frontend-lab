import { Link, Outlet } from 'react-router'

import './App.css'
import { getAppNavigation } from './routes'

function App() {
    const navItems = getAppNavigation()

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '20% 1fr',
                height: '100vh',
            }}
        >
            <nav>
                <ul
                    style={{
                        display: 'flex',
                        gap: '10px',
                        flexDirection: 'column',
                        listStyle: 'none',
                        borderRight: '1px solid white',
                        padding: '0',
                        margin: '0',
                        justifyContent: 'space-between',
                        height: '100%',
                    }}
                >
                    {navItems.map((item) => (
                        <li style={{ padding: '10px' }} key={item.to}>
                            <Link to={item.to}>{item.label}</Link>
                            {item.childs?.length > 0 &&
                                item.childs.map((child) => (
                                    <Link key={child.to} to={child.to}>
                                        {child.label}
                                    </Link>
                                ))}
                        </li>
                    ))}
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default App

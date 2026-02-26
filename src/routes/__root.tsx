import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { TanStackRouterDevtoolsInProd  } from '@tanstack/react-router-devtools'

const RootLayout = () => (
    <>
    <div>
        <Link to="/" className="[&.active]:font-bold">Home</Link>
        <Link to="/about" className="[&.active]:font-bold">About</Link>
    </div>
        <Outlet />
        <TanStackRouterDevtoolsInProd />
    </>
)

export const Route = createRootRoute({ component: RootLayout })

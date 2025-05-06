import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to="/" className="p-1 [&.active]:font-bold">
          Home
        </Link>
        <Link to="/books" className="p-1 [&.active]:font-bold">
          Books
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

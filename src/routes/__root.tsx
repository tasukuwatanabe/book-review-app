import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Route as indexRoute } from "./index";
import { Route as bookNewRoute } from "./books.new";
import { Route as bookIdRoute } from "./books.$bookId";
import { Route as bookEditRoute } from "./books_.$bookId.edit";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Link
          to={indexRoute.to}
          className="p-1 [&.active]:font-bold"
          activeOptions={{
            includeSearch: false,
          }}
        >
          Home
        </Link>
        <Link
          to={bookNewRoute.to}
          className="p-1 [&.active]:font-bold"
          activeOptions={{
            includeSearch: false,
          }}
        >
          New
        </Link>
        <Link
          to={bookIdRoute.to}
          params={{ bookId: "1" }}
          className="p-1 [&.active]:font-bold"
          activeOptions={{
            exact: true,
            includeSearch: false,
          }}
        >
          Book
        </Link>
        <Link
          to={bookEditRoute.to}
          params={{ bookId: "1" }}
          className="p-1 [&.active]:font-bold"
          activeOptions={{
            includeSearch: false,
          }}
        >
          Edit
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

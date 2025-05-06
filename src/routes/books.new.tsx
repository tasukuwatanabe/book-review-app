import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/books/new")({
  component: BooksNew,
});

function BooksNew() {
  return <div>Hello "/books/new"</div>;
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/books_/$bookId/edit")({
  component: BooksEdit,
});

function BooksEdit() {
  return <div>Edit page</div>;
}

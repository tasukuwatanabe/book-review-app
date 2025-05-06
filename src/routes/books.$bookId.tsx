import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/books/$bookId")({
  component: BooksDetail,
});

function BooksDetail() {
  return <div>Detail page</div>;
}

import React from "react";
import { Header } from "../components/Header";
import { ReviewCard } from "../components/ReviewCard";
import { Button } from "../components/Button";
import { Review } from "../types/review";

const dummyReviews: Review[] = [
  {
    id: "1",
    title: "React入門",
    author: "山田 太郎",
    rating: 4,
    content: "非常にわかりやすく、Reactの基礎が身につきました。",
    createdAt: "2025-05-01",
  },
  {
    id: "2",
    title: "TypeScript完全ガイド",
    author: "佐藤 花子",
    rating: 5,
    content: "型安全の重要性を理解できました。おすすめです！",
    createdAt: "2025-05-03",
  },
];

export const Home: React.FC = () => (
  <div>
    <Header />
    <main className="p-6 space-y-4">
      <Button>レビューを書く</Button>
      {dummyReviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </main>
  </div>
);

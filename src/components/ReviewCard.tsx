import React from "react";
import { Review } from "../types/review";

type Props = {
  review: Review;
};

export const ReviewCard: React.FC<Props> = ({ review }) => (
  <div className="border rounded p-4 shadow-sm">
    <h2 className="text-lg font-bold">{review.title}</h2>
    <p className="text-sm text-gray-600 mb-2">著者: {review.author}</p>
    <p className="text-yellow-500 mb-2">評価: {"★".repeat(review.rating)}</p>
    <p className="text-gray-700">{review.content}</p>
    <p className="text-xs text-right text-gray-500 mt-2">
      投稿日: {review.createdAt}
    </p>
  </div>
);

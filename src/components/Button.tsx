import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
  >
    {children}
  </button>
);

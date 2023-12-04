"use client";

import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => {
  // スピナーのサイズや色をカスタマイズできます
  const size = 50;
  const color = "#123abc";

  return (
    <div className="spinner-container flex items-center justify-center min-h-screen">
      <ClipLoader size={size} color={color} />

      {/* スタイル */}
      <style jsx>{`
        .spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;

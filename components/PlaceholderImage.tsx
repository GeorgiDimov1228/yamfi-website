import React from 'react';

interface PlaceholderImageProps {
  text: string;
  color: string;
  className?: string;
}

export default function PlaceholderImage({ text, color, className = '' }: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center w-full h-full ${className}`}
      style={{ backgroundColor: color }}
    >
      <span className="text-white text-2xl font-bold text-center px-4">
        {text}
      </span>
    </div>
  );
}
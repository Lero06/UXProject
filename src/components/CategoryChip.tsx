import React from 'react';

export default function CategoryChip({ label }: { label: string }) {
  return (
    <div className="inline-block bg-white border px-3 py-1 rounded-full mr-2 shadow-sm text-sm">
      {label}
    </div>
  );
}

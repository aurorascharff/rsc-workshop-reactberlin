'use client';

import React from 'react';

export default function ClientComponent() {
  return (
    <div className="rounded border border-red-500 p-4">
      <button
        onClick={() => {
          alert('Hello!');
        }}
      >
        Click me
      </button>
    </div>
  );
}

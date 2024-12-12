'use client';

import React from 'react';

type Props = {
  content: React.ReactNode;
  children: React.ReactNode;
  mutateData: () => Promise<string>;
};

export default function ClientComponent({ content, children, mutateData }: Props) {
  console.log('ClientComponent');
  // If we need browser stuff like onClick, useEffect, useState, alert, window.location, we need to create a client component
  return (
    <div className="rounded border border-red-500 p-4">
      <button
        // Without "use server" mutateData will fail
        onClick={async () => {
          const data = await mutateData();
          alert(data);
        }}
      >
        Click me
      </button>
      {content}
      {children}
    </div>
  );
}

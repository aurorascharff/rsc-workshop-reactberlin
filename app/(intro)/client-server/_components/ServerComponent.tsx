import React from 'react';
import { prisma } from '@/db';

export default async function ServerComponent() {
  // Since we are on the server, we can access our db
  const data = await prisma.contact.findMany();

  return (
    <div className="rounded border border-blue-500 p-4">
      ServerComponent
      {data[0].first}
    </div>
  );
}

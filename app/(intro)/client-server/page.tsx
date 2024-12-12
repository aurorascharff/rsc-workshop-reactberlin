import React from 'react';
import { prisma } from '@/db';
import ClientComponent from './_components/ClientComponent';
import ServerComponent from './_components/ServerComponent';

export default function Page() {
  async function mutateData() {
    'use server';

    const data = await prisma.contact.findMany();
    return data[0].first as string;
  }

  return (
    <div>
      <ClientComponent mutateData={mutateData} content={<ServerComponent />}>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}

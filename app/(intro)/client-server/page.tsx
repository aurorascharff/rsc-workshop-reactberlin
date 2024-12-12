import React from 'react';
import ClientComponent from './_components/ClientComponent';
import ServerComponent from './_components/ServerComponent';

export default function Page() {
  return (
    <div>
      <ServerComponent />
      <ClientComponent />
    </div>
  );
}

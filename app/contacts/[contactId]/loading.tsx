import React from 'react';
import Skeleton from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="h-48 w-48 rounded-3xl bg-gray" />
      <Skeleton />
    </div>
  );
}

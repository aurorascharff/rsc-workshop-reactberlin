import React from 'react';
import { cn } from '@/utils/cn';
import type { Contact } from '@prisma/client';

export default function Favorite({ contact }: { contact: Contact }) {
  const favorite = contact.favorite;

  return (
    <button
      className={cn(
        favorite ? 'text-yellow-500' : 'text-gray-dark',
        'flex text-2xl font-normal shadow-none hover:text-yellow-400 hover:shadow-none',
      )}
      aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {favorite ? '★' : '☆'}
    </button>
  );
}

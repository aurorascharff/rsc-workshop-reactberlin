import 'server-only';

import { notFound } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export async function getContact(contactId: string) {
  await slow();

  const contact = await prisma.contact.findUnique({
    where: {
      id: contactId,
    },
  });

  if (!contact) {
    notFound();
  }

  return contact;
}

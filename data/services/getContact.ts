import 'server-only';

import { prisma } from '@/db';

export async function getContact(contactId: string) {
  return prisma.contact.findUnique({
    where: {
      id: contactId,
    },
  });
}

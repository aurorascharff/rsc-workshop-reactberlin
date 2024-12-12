'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import { routes } from '@/validations/routeSchema';

export async function createEmptyContact() {
  await slow();

  const contact = await prisma.contact.create({
    data: {},
  });

  // // Automatically called with redirect
  //   revalidatePath('/');
  redirect(
    routes.contactIdEdit({
      contactId: contact.id,
    }),
  );
}

'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { contactSchema } from '@/validations/contactSchema';
import { routes } from '@/validations/routeSchema';

export async function updateContact(contactId: string, formData: FormData) {
  const data = Object.fromEntries(formData);
  const result = contactSchema.parse(data);

  await prisma.contact.update({
    data: result,
    where: {
      id: contactId,
    },
  });

  redirect(routes.contactId({ contactId }));
}

import React from 'react';

import { getContacts } from '@/data/services/getContacts';
import ContactButton from './ContactButton';

export default async function ContactList() {
  const contacts = await getContacts();

  return (
    <nav className="flex-1 overflow-auto px-8 py-4">
      {contacts.length ? (
        <ul>
          {contacts.map(contact => {
            return (
              <li key={contact.id} className="mx-1">
                <ContactButton contact={contact} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </nav>
  );
}

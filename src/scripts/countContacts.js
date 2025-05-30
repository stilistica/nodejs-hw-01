import { getAllContacts } from './getAllContacts.js';
// import { PATH_DB } from '../constants/contacts.js';
// import fs from 'node:fs/promises';

export const countContacts = async () => {
  // variant 1
  const contact = await getAllContacts();
  return contact.length;
  // variant 2
  // const contact = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
  // return contact.length;
};

console.log(await countContacts());

import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
// import { PATH_DB } from '../constants/contacts.js';
// import { readContacts } from '../utils/readContacts.js';


const generateContacts = async (number) => {
  const prevContacts = await readContacts();
  for (let i=0; i<number; i++) {
    prevContacts.push(createFakeContact());
  }
  await writeContacts(JSON.stringify(prevContacts , null, 2));
};
await generateContacts(5);

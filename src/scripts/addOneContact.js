import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const prevContacts = await readContacts();
  const data = createFakeContact();
  try {
    prevContacts.push(data);
    await writeContacts(JSON.stringify(prevContacts , null, 2));
  } catch (err) {
    console.log(err);
  }
};

await addOneContact();

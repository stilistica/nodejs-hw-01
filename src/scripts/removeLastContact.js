import { countContacts } from './countContacts.js';
import { getAllContacts } from './getAllContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const lengthContacts = await countContacts();
  const allContacts = await getAllContacts();
  if (lengthContacts > 0) {
    allContacts.pop();
    await writeContacts(JSON.stringify(allContacts , null, 2));
  }
};

await removeLastContact();

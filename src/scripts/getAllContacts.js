import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    return JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
  } catch(err) {
    console.log(err);
  }
};

console.log(await getAllContacts());

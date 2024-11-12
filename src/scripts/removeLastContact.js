import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const updatedContacts = contacts.slice(0, -1); //pop() или //splice(-1, 1)
    contacts.length > 0 ? await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8'): null;
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();

import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    data ? await fs.writeFile(PATH_DB, '[]', 'utf-8') : null;
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();

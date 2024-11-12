import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const getContacts = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(getContacts);
  } catch (error) {
    console.error(error);
  }
};

console.log(await getAllContacts());

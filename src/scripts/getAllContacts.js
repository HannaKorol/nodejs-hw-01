import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
         const getContacts = await fs.readFile(PATH_DB, 'utf-8');
        return JSON.parse(getContacts);
};

console.log(await getAllContacts());

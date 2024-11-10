import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    try {
         const getData = await fs.readFile(PATH_DB, 'utf-8');
         return JSON.parse(getData);
    } catch (error) {
        console.error(error);
    }
};

/* readContacts();
 */

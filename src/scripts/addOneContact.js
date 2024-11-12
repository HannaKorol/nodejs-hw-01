import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';


export const addOneContact = async () => {
try {
  const data = await fs.readFile(PATH_DB);
  const contacts = data ? JSON.parse(data) : [];

  //Додавання нового контакту
  contacts.push(createFakeContact());

  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
} catch (error) {
    console.log(error);
}
 };

addOneContact();



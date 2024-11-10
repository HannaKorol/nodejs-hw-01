import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from "../utils/createFakeContact.js"

const generateContacts = async (number) => { 
    try {
      // Читання наявних контактів з файлу
      const data = await fs.readFile(PATH_DB);
      const contacts = data ? JSON.parse(data) : []; // Якщо файл порожній, ініціалізуємо порожнім масивом

      // Генерація нових контактів
      for (let i = 0; i < number; i++) {
        const newContact = createFakeContact();
        contacts.push(newContact);
      }
      // Запис оновлених контактів у файл
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

    } catch (error) {
    console.error(error);
}
};


generateContacts(5);

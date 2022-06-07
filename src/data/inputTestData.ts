import { MimeType } from 'easy-template-x'

export const inputTestData = {
  editableContent: {
    contractNumber: '0123456789',
    contractOwner: 'Благонравова Анна Валерьевна',
    attorneyDate: '23.03.2021',
    notary: 'Хамидуллиной Айгуль Амировной',
    attorneyNumber: '26/214-н/77-2021-1-772'
  },
  staticContent: {
    repeating: [
      { repeatingText: 'Повторяющийся текст' },
      { repeatingText: 'Повторяющийся текст' },
      { repeatingText: 'Повторяющийся текст' }
    ],
    table: [
      { column1Text: 'Текст 1 в первой колонке', column2Text: 1 },
      { column1Text: 'Текст 2 в первой колонке', column2Text: 2 },
      { column1Text: 'Текст 3 в первой колонке', column2Text: 3 },
      { column1Text: 'Текст 4 в первой колонке', column2Text: 4 },
      { column1Text: 'Текст 5 в первой колонке', column2Text: 5 },
      { column1Text: 'Текст 6 в первой колонке', column2Text: 6 }
    ],
    clients: [
      {
        clientTitle: 'Васильев Василий Васильевич',
        birthYear: 1900,
        birthLocation: 'Москва',
        passportNumber: '9999999',
        passportIssuer: 'УФМС № 9',
        passportIssuerCode: '999-999',
        clientAdress: 'Васильевская, 9',
        clientSNILS: '9999999999999999'
      },
      {
        clientTitle: 'Петров Петр Петрович',
        birthYear: 1910,
        birthLocation: 'Рязань',
        passportNumber: '8888888',
        passportIssuer: 'УФМС № 8',
        passportIssuerCode: '888-888',
        clientAdress: 'Петровская, 8',
        clientSNILS: '8888888888888888'
      },
      {
        clientTitle: 'Иванов Иван Иванович',
        birthYear: 1920,
        birthLocation: 'Иваново',
        passportNumber: '7777777',
        passportIssuer: 'УФМС № 7',
        passportIssuerCode: '777-777',
        clientAdress: 'Ивановская, 7',
        clientSNILS: '7777777777777777'
      }
    ],
    image: {
      _type: 'image',
      source: await fetch(
        'https://github.com/alonrbar/easy-template-x/raw/master/docs/assets/image-plugin-out.png?raw=true'
      ).then((r) => r.blob()),
      format: MimeType.Png,
      width: 200,
      height: 200
    }
  }
}

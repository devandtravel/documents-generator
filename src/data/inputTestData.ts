import { MimeType } from 'easy-template-x'

export const inputTestData = {
  editableContent: {
    contractNumber: '0123456789',
    contractOwner: 'Благонравова Анна Валерьевна',
    attorneyDate: '23.03.2021',
    notary: 'Хамидуллина Айгуль Амировна',
    attorneyNumber: '26/214-н/77-2021-1-772'
  },
  staticContent: {
    repeating: [
      { repeatingText: 'Повторяющийся текст' },
      { repeatingText: 'Повторяющийся текст' },
      { repeatingText: 'Повторяющийся текст' }
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
    objectTable: [
      {
        objectPropertyName: 'Квартал',
        objectPropertyValue: '1'
      },
      { objectPropertyName: 'Номер корпуса', objectPropertyValue: 'В10' },
      { objectPropertyName: 'Номер секции', objectPropertyValue: '8' },
      { objectPropertyName: 'Этаж', objectPropertyValue: '22' },
      {
        objectPropertyName:
          'Номер квартиры на площадке (считая слева направо по часовой стрелке от выхода из лифтового холла)',
        objectPropertyValue: '285'
      },
      { objectPropertyName: 'Назначение', objectPropertyValue: 'жилое' },
      { objectPropertyName: 'Количество комнат', objectPropertyValue: '4' },
      { objectPropertyName: 'Условный номер', objectPropertyValue: '15165' },
      {
        objectPropertyName: 'Проектная общая площадь, кв.м, в т.ч.:',
        objectPropertyValue: '118'
      },
      {
        objectPropertyName: '         - площадь жилых помещений, кв.м;',
        objectPropertyValue: '85'
      },
      {
        objectPropertyName:
          '         - площадь помещений вспомогательного использования, кв.м;',
        objectPropertyValue: '15'
      },
      {
        objectPropertyName:
          '         - площадь летних помещений (лоджий, балконов, террас), кв.м.',
        objectPropertyValue: '18'
      },
      {
        objectPropertyName: 'Проектная общая приведенная площадь, кв.м',
        objectPropertyValue: '118'
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

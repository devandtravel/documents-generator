import petrovich from 'petrovich'
const personKeys = ['last', 'first', 'middle']
export const declinePerson = (fio: string) =>
  Object.values(
    petrovich(
      Object.fromEntries(
        fio
          .split(' ')
          .map((namePart: string, index: number) => [
            personKeys[index],
            namePart
          ])
      ),
      'genitive'
    )
  )
    .slice(1)
    .map((element, index, array) =>
      index === 0
        ? array[2]
        : index === 1
        ? array[0]
        : index === 2
        ? array[1]
        : element
    )
    .join(' ')

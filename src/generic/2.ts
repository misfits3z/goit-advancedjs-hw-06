/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<K extends keyof AllType>(
  top: Pick<AllType, K>,
  bottom: Pick<AllType, K>
): AllType {
  return {
    name: (top as AllType).name ?? (bottom as AllType).name ?? '',
    position: (top as AllType).position ?? (bottom as AllType).position ?? 0,
    color: (top as AllType).color ?? (bottom as AllType).color ?? '',
    weight: (top as AllType).weight ?? (bottom as AllType).weight ?? 0,
  };
}

export {};
import fetchData, { httpGet } from './http';
import sum from './basic';
import { loadUser } from './user';

export default function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  // TODO: логика обработки
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
}

console.log('worked'); //eslint-disable-line

console.log(sum([1, 2])); //eslint-disable-line

import {BASE_URL, Difficulty, Type} from '../Constants';
import {Category} from '../Models/Category';
import {DropDown} from '../Models/Dropdown';

/**
 * @description Get questions list.
 * @param {number} amount - Number of Questions
 * @param {number} category - Id of the category
 * @param {string} difficulty - difficulty can be easy | medium | hard | any (default)
 * @param {string} type - difficulty can be multiple (default) | boolean
 */
export const getQuestions = async (
  amount: number = 10,
  category: number = -1,
  difficulty: string = Difficulty.any,
  type: string = Type.any,
) => {
  const url =
    `${BASE_URL}/api.php?amount=${amount}` +
    (category !== -1 ? `&category=${category}` : '') +
    (difficulty !== Difficulty.any ? `&difficulty=${difficulty}` : '') +
    (type !== Type.any ? `&type=${type}` : '');

  console.log('url', url);
  return fetch(url)
    .then(res => {
      if (res.status !== 200) {
        return res;
      }
      return res.json();
    })
    .then(data => {
      console.log('category', data);
      // Only happen if status is 200
      if (data.results) {
        return data.results;
      }
      // Return the object with with http status (error code)
      return {errorCode: data.status};
    });
};

/**
 * @description Get all available categories.
 */
export const getCategories = async () => {
  return fetch(BASE_URL + '/api_category.php')
    .then(res => {
      if (res.status !== 200) {
        return res;
      }
      return res.json();
    })
    .then(data => {
      if (data.trivia_categories) {
        const category: Category[] = data.trivia_categories;
        category.unshift({
          name: 'Any',
          id: -1,
        });

        return category.map(item => {
          return {id: item.id, value: item.name, label: item.name};
        });
      }
      return [];
    });
};

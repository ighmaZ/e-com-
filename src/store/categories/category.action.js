import CATEGORIES_ACTION_TYPES from './category.types';
import { createAction } from '../../utilities/reducers/reducer.util';

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray); 
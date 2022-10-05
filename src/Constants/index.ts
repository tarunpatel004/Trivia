export const BASE_URL = 'https://opentdb.com';
import {DropDown} from '../Models/Dropdown';

export enum Difficulty {
  any = 'any',
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}

export enum Type {
  any = 'any',
  multiple_choice = 'multiple',
  true_false = 'boolean',
}

export const difficultiesData: DropDown[] = [
  {
    id: 0,
    label: 'Any',
    value: Difficulty.any,
  },
  {
    id: 1,
    label: 'Easy',
    value: Difficulty.easy,
  },
  {
    id: 2,
    label: 'Medium',
    value: Difficulty.medium,
  },
  {
    id: 3,
    label: 'Hard',
    value: Difficulty.hard,
  },
];

export const questionTypeData: DropDown[] = [
  {
    id: 0,
    label: 'Any',
    value: Type.any,
  },
  {
    id: 1,
    label: 'Multiple Choice',
    value: Type.multiple_choice,
  },
  {
    id: 2,
    label: 'True/False',
    value: Type.true_false,
  },
];

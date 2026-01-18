import {atom} from 'recoil';

export const sortByAtom = atom<string>({
  key: 'sortByAtom',
  default: 'relevance', // default sorting option
});
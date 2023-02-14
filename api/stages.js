import {
  initialStage,
  stageOne,
  stageTwo,
} from './stages/index.js';

import { storage } from './storage.js';

export const stages = [
  {
    descricao: 'Welcome',
    stage: initialStage,
  },
  {
    descricao: 'Restart',
    stage: stageOne,
  },
  {
    descricao: 'SetLanguage',
    stage: stageTwo,
  },
];

export function getStage({ from }) {
  if (storage[from]) {
    return storage[from].stage;
  }
  storage[from] = {
    stage: 0,
    itens: [],
    address: '',
    language: 'en',
  };

  return storage[from].stage;
}

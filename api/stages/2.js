import { storage } from '../storage.js';

export const stageTwo = {
  
  exec({ from, message,client }) {
    message = message.toLowerCase();
    if (message === 'es') { //spanish
      storage[from].stage = 1;
      storage[from].language = 'es';
      client.sendText(from, 'Pronto, agora você está em espanhol! Digite qualquer texto para traduzir!');
    } else if (message === 'en') { //english
      storage[from].stage = 1;
      storage[from].language = 'en';
      client.sendText(from, 'Pronto, agora você está em inglês! Digite qualquer texto para traduzir!');
    } else if (message === 'pt') { //portuguese
      storage[from].stage = 1;
      storage[from].language = 'pt';
      client.sendText(from, 'Pronto, agora você está em português! Digite qualquer texto para traduzir!');
    } else if (message === 'ch') { //chinese
      storage[from].stage = 1;
      storage[from].language = 'zh-hans';
      client.sendText(from, 'Pronto, agora você está em chinês! Digite qualquer texto para traduzir!');
    }
    else {
      client.sendText(from, 'Idioma não encontrado, tente novamente!');
    }    
  },

};

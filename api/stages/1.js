import { storage } from '../storage.js';

export const stageOne = {
  exec({ from, message, client }) {

    if (message != '1') {
    return message;
    }
    else {
      storage[from].stage = 0;
      client.sendText(from, `🔴 BOT-TRADUTOR *REINICIADO* com sucesso.\n\nVolte Sempre!`)
    }
  },
};

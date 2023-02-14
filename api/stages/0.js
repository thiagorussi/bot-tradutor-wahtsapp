import { storage } from '../storage.js';

export const initialStage = {
  exec({ from, client }) {

    storage[from].stage = 1;
    client.sendText(from, `👋 Olá, como vai? \n\nEu sou o BOT-TRADUTOR\nIdioma default: 🇺🇸\n*Posso traduzir para você agora!*\n\nLET'S GO!\n\n1️⃣ - *SAIR*\n2️⃣ - *CONTATO DEV*\n3️⃣ - *DEFINIR IDIOMA*`)
  },
};

import { create } from 'venom-bot';
import { stages, getStage } from './stages.js';
import axios from 'axios';
import dotenv from 'dotenv';
import { storage } from './storage.js';

dotenv.config();

create({
  session: 'translate', //name of session
  multidevice: true, // for version not multidevice use false.(default: true)
  headless: false, // Headless chrome (default: true)
})
  .then((client) => start(client))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

function start(client) { //função inicial do bot
  client.onMessage((message) => {

    async function translateText(text, to) { //função para traduzir o texto
      let response = await axios.post(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${to}`,
        [{ 'Text': `${text}` }],
        {
          headers: {
            'Ocp-Apim-Subscription-Key': process.env.API_KEY,
            'Content-Type': 'application/json'
          },
        });
      return response.data[0].translations[0].text;
    }

    if (!message.isGroupMsg) {
      const currentStage = getStage({ from: message.from });

      const messageResponse = stages[currentStage].stage.exec({
        from: message.from,
        message: message.body,
        client,
      });

      if (messageResponse) {

        if (messageResponse === '2') {
          client.sendText(message.from, `*Linkedin* 😀\n\nhttps://www.linkedin.com/in/thiago-russi-79aa3b163/\n\nSinta-se a vontade para me mandar uma mensagem 😉`).then(() => {
            console.log('Message sent.');
            storage[message.from].stage = 0;
          }).catch(error => console.error('Error when sending message', error));
        }

        else if (messageResponse === '3') {
          client.sendText(message.from, `*DEFINIR IDIOMA*\n\nDigite o código do idioma que deseja traduzir:
          \n\nPORTUGUÊS 🇧🇷 : *pt*\nINGLÊS 🇺🇸 : *en*\nCHINÊS 🇨🇳 : *ch*\nESPANHOL 🇪🇸 : *es*`).then(() => {
            storage[message.from].stage = 2;
          }).catch(error => console.error('Error when sending message', error));
        }

        else {
          const getMessage = async () => { // função assíncrona para pegar a mensagem do usuário e enviar para o translate text
            let response = await translateText(messageResponse, storage[message.from].language);
            client.sendText(message.from, response).then((res) => {
              console.log('Result: ', res); //return object success
              console.log(message.body)
            }).catch(error => console.error('Error when sending message', error));
          }
          getMessage();
        }
      }
    }
  });
};

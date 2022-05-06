import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  "en-US": {
    translation: {
      ABOUT_TIME:"About what time is it?",
      CURRENT_DAY:"What is the day of the week?",
      CURRENT_MONTH: "What is the month?",
      CURRENT_SEASON:"What season is this?",
      CURRENT_YEAR:"What is the year?",
      GO: "Go",
      INSTRUCTION: "You will see a short sequence of pictures appear in the gray boxes. Please remember the pictures and their locations in order.",
      LEARN_THE_SEQUENCE:
      "Learn the sequence",
      LEVEL: "Level",
      MEMORY_GAME: "Memory Game",
      NEXT: "Next",
      PLACE_THE_1st_PICTURE: "Place the 1st picture",
      PLACE_THE_2nd_PICTURE: "Place the 2nd picture",
      PLACE_THE_3rd_PICTURE:"Place the 3rd picture",
      PLACE_THE_4th_PICTURE:"Place the 4th picture",
      SELECT_DATE:"Select date",
      SELECT_DAY:"Select day",
      SELECT_MONTH:"Select month",
      SELECT_SEASON:"Select season",
      SELECT_YEAR:"Select year",
      SUBMIT: "Submit",
      TAP_THE_1st_PICTURE: "Tap the 1st picture",
      TAP_THE_2nd_PICTURE: "Tap the 2nd picture",
      TAP_THE_3rd_PICTURE: "Tap the 3rd picture",
      TAP_THE_4th_PICTURE: "Tap the 4th picture",
      TIME_OUT: "Time Out",
      TODAY:"What is today’s date?",
      TRIAL: "Trial",
    },
  },
  "es-ES": {
    translation: {
      ABOUT_TIME:"¿Qué hora es?",
      CURRENT_DAY:"¿Cuál es el día de la semana?",
      CURRENT_MONTH:"¿Cuál es el mes?",
      CURRENT_SEASON:"¿Qué temporada es esta?",
      CURRENT_YEAR:"¿Cuál es el año?",
      GO: "Go",
      INSTRUCTION:"Verá aparecer una breve secuencia de imágenes en los cuadros grises. Recuerde las imágenes y sus ubicaciones en orden.",
      LEARN_THE_SEQUENCE:
      "Aprende la secuencia",
      LEVEL: "Level",
      MEMORY_GAME: "JUEGO DE MEMORIA",
      NEXT: "Next",
      PLACE_THE_1st_PICTURE: "Coloca la 1ra foto",
      PLACE_THE_2nd_PICTURE: "Coloca la 2da foto",
      PLACE_THE_3rd_PICTURE:"Coloca la 3ra foto",
      PLACE_THE_4th_PICTURE: "coloca la 4ta foto",
      SELECT_DATE: "Seleccione fecha",
      SELECT_DAY:"Seleccione día",
      SELECT_MONTH:"Seleccione mes",
      SELECT_SEASON:"Seleccione temporada",
      SELECT_YEAR:"Seleccione año",
      SUBMIT:"Entregar",
      TAP_THE_1st_PICTURE: "Toca la primera imagen",
      TAP_THE_2nd_PICTURE: "Toca la segunda imagen",
      TAP_THE_3rd_PICTURE: "Toca la tercera imagen",
      TAP_THE_4th_PICTURE:"Toca la cuarta imagen",
      TIME_OUT: "Se acabó el tiempo",
      TODAY:"¿Cuál es la fecha de hoy?",
      TRIAL: "Ensayo"
    },
  },
  "hi-IN": {
    translation: {
      ABOUT_TIME:"यह किस समय के बारे में है?",
      CURRENT_DAY:"सप्ताह का दिन क्या है?",

      CURRENT_MONTH:"महीना क्या है?",
      CURRENT_SEASON:"यह कौन सा मौसम है?",

      CURRENT_YEAR:"वर्ष क्या है?",
      GO: "Go",
      INSTRUCTION: "आप ग्रे बॉक्स में चित्रों का एक छोटा क्रम देखेंगे। कृपया चित्रों और उनके स्थानों को क्रम से याद रखें",
      LEARN_THE_SEQUENCE:
      "क्रम जाने",
      LEVEL: "Level",
      MEMORY_GAME: "स्मृति खेल",
      NEXT: "Next",
      PLACE_THE_1st_PICTURE: "पहली तस्वीर लगाए",
      PLACE_THE_2nd_PICTURE: "दूसरा तस्वीर लगाए",
      PLACE_THE_3rd_PICTURE: "तीसरा तस्वीर लगाए",
      PLACE_THE_4th_PICTURE: "चौथा चित्र लगाएं",
      SELECT_DATE:"तारीख़ चुनिए",
      SELECT_DAY:"दिन चुनिए",
      SELECT_MONTH:"महीना चुनिए",
      SELECT_SEASON:"मौसम चुनिए",
      SELECT_YEAR:"वर्ष चुनिए",
      SUBMIT: "प्रस्तुत",
      TAP_THE_1st_PICTURE: "पहली तस्वीर पर टैप करे",
      TAP_THE_2nd_PICTURE: "दूसरी तस्वीर पर टैप करे",
      TAP_THE_3rd_PICTURE: "तीसरी तस्वीर पर टैप करे",
      TAP_THE_4th_PICTURE:"चौथी तस्वीर टैप करे",
      TODAY:"आज की तारीख क्या है?",
      TRIAL: "परीक्षण",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    interpolation: {
      escapeValue: false,
    },
    keySeparator: false,
    resources,
  });

export default i18n;

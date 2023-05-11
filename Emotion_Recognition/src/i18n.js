import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  "da-DK":{
    translation: {
      "ANGER" : "Vrede",
      "DO_YOU_WANT_TO_SAVE_YOUR_GAME_RESULTS_BEFORE_PROCEEDING" : "Vil du gemme dine spilresultater, før du fortsætter",
      "EMOTIONS": "Følelser", 
      "FEAR" : "Frygt",
      "GAME_OVER": "Spillet er slut",
      "HAPPINESS" : "Lykke",  
      "NEUTRAL" : "Neutralt",
      "NO":"Nej",
      "OF":"af",
      "SADNESS" : "Sorg",
      "SAVE":"Gemme",
      "SELECT AN OPTION BEFORE PROCEEDING" : "Vælg en mulighed, før du fortsætter",
      "WHAT EMOTION IS THIS" : "Hvilken følelse er dette",
      "YES": "Ja",
    }
  },
  "de-DE":{
    translation: {        
      "ANGER" : "Wut",
      "DO_YOU_WANT_TO_SAVE_YOUR_GAME_RESULTS_BEFORE_PROCEEDING" : "Möchten Sie Ihre Spielergebnisse speichern, bevor Sie fortfahren",
      "EMOTIONS": "Emotionen",      
      "FEAR" : "Furcht",
      "GAME_OVER": "Spiel ist aus", 
      "HAPPINESS" : "Glück",  
      "NEUTRAL" : "Glück",
      "NO":"Nein",
      "OF":"von",
      "SADNESS" : "Traurigkeit",
      "SAVE":"Speichern",
      "SELECT AN OPTION BEFORE PROCEEDING" : "Wählen Sie eine Option aus, bevor Sie fortfahren",
      "WHAT EMOTION IS THIS" : "Welche Emotion ist das",
      "YES": "Ja",       
    }
  },
  "en-US": {
    translation: {      
      "ANGER" : "Anger",
      "DO_YOU_WANT_TO_SAVE_YOUR_GAME_RESULTS_BEFORE_PROCEEDING" : "Do you want to save your game results before proceeding?",
      "EMOTIONS": "Emotions", 
      "FEAR" : "Fear",
      "GAME_OVER": "Game Over", 
      "HAPPINESS" : "Happiness",  
      "NEUTRAL" : "Neutral",
      "NO":"No" ,  
      "OF":"of",  
      "SADNESS" : "Sadness",
      "SAVE":"Save",
      "SELECT AN OPTION BEFORE PROCEEDING" : "Select an option before proceeding",   
      "WHAT EMOTION IS THIS" : "What emotion is this",
      "YES": "Yes",  
    },
  },
  "es-ES": {
    translation: {      
      "ANGER" : "Enojo",
      "DO_YOU_WANT_TO_SAVE_YOUR_GAME_RESULTS_BEFORE_PROCEEDING": "¿Quieres guardar los resultados de tu juego antes de continuar?",
      "EMOTIONS": "Emociones",      
      "FEAR" : "Miedo",
      "GAME_OVER": "Juego Terminado", 
      "HAPPINESS" : "Felicidad",  
      "NEUTRAL" : "Neutral",
      "NO": "No",
      "OF":"de",
      "SADNESS" : "Tristeza",
      "SAVE":"Ahorrar", 
      "SELECT AN OPTION BEFORE PROCEEDING" : "Seleccione una opción antes de continuar",  
      "WHAT EMOTION IS THIS" : "que emocion es esta",   
      "YES": "Sí",
    },
  },
  "fr-FR":{
      translation: {        
        "ANGER" : "Colère",
        "DO_YOU_WANT_TO_SAVE_YOUR_GAME_RESULTS_BEFORE_PROCEEDING": "Souhaitez-vous enregistrer les résultats de votre jeu avant de continuer",
        "EMOTIONS": "Émotions",     
        "FEAR" : "Craindre",
        "GAME_OVER": "Jeu terminé", 
        "HAPPINESS" : "Bonheur",  
        "NEUTRAL" : "Neutre",
        "NO": "Non",
        "OF":"de",
        "SADNESS" : "Tristesse",
        "SAVE":"Sauvegarder",  
        "SELECT AN OPTION BEFORE PROCEEDING" : "Sélectionnez une option avant de continuer",
        "WHAT EMOTION IS THIS" : "que emocion es esta",  
        "YES": " Oui" ,
    }
  },
  "hi-IN": {
    translation: {        
      "ANGER" : "गुस्सा",
      "DO_YOU_WANT_TO_SAVE_YOUR_GAME_RESULTS_BEFORE_PROCEEDING": "क्या आप आगे बढ़ने से पहले अपने गेम के परिणाम सहेजना चाहते हैं?",
      "EMOTIONS": "भावनाएँ",  
      "FEAR" : "डर",
      "GAME_OVER": "खेल खत्म",   
      "HAPPINESS" : "ख़ुशी",  
      "NEUTRAL" : "तटस्थ",
      "NO": "नहीं",
      "OF":"का",
      "SADNESS" : "उदासी",
      "SAVE":"बचाना", 
      "SELECT AN OPTION BEFORE PROCEEDING" : "आगे बढ़ने से पहले एक विकल्प चुनें",   
      "WHAT EMOTION IS THIS" : "",  
      "YES":"हाँ",
    },
  },
  "it-IT":{
    translation: {
      "ANGER" : "बचाना",
      "DO_YOU_WANT_TO_SAVE_YOUR_GAME_RESULTS_BEFORE_PROCEEDING": "Vuoi salvare i risultati del tuo gioco prima di procedere",
      "EMOTIONS": "Emozioni",   
      "FEAR" : "Paura",
      "GAME_OVER": "Gioco finito",  
      "HAPPINESS" : "Felicità",  
      "NEUTRAL" : "Neutro",
      "NO": "NO",
      "OF":"di",
      "SADNESS" : "Tristezza",
      "SAVE":"Salva",  
      "SELECT AN OPTION BEFORE PROCEEDING" : "Seleziona un'opzione prima di procedere",  
      "WHAT EMOTION IS THIS" : "Che emozione è questa",  
      "YES": "Si",
      
    },
  },
  "ko-KR":{
    translation: {         
      "ANGER" : "분노",
      "DO_YOU_WANT_TO_SAVE_YOUR_GAME_RESULTS_BEFORE_PROCEEDING": "진행하기 전에 게임 결과를 저장하시겠습니까",
      "EMOTIONS": "감정",  
      "FEAR" : "두려움",
      "GAME_OVER": "게임 끝",  
      "HAPPINESS" : "행복",  
      "NEUTRAL" : "행복",
      "NO": "아니",
      "OF":"~의",
      "SADNESS" : "슬픔",
      "SAVE":"구하다", 
      "SELECT AN OPTION BEFORE PROCEEDING" : "계속하기 전에 옵션을 선택하십시오",  
      "WHAT EMOTION IS THIS" : "이게 무슨 감정이야",   
      "YES": "예",   
    },
  },
  "zh-CN":{
    translation: {      
      "ANGER" : "Anger",
      "DO_YOU_WANT_TO_SAVE_YOUR_GAME_RESULTS_BEFORE_PROCEEDING": "Do you want to save your game results before proceeding?",
      "EMOTIONS": "情绪", 
      "FEAR" : "Fear",
      "GAME_OVER": "游戏结束", 
      "HAPPINESS" : "Happiness",  
      "NEUTRAL" : "Neutral",
      "NO":"否",
      "OF":"of",
      "SADNESS" : "Sadness",
      "SAVE":"保存",   
      "SELECT AN OPTION BEFORE PROCEEDING" : "Select an option before proceeding", 
      "WHAT EMOTION IS THIS" : "What emotion is this",  
      "YES": "是",
    },
  },
  "zh-HK":{
    translation: { 
      "ANGER" : "Anger",     
      "DO_YOU_WANT_TO_SAVE_YOUR_GAME_RESULTS_BEFORE_PROCEEDING": "Do you want to save your game results before proceeding?",
      "EMOTIONS": "情緒", 
      "FEAR" : "Fear",
      "GAME_OVER": "遊戲結束",
      "HAPPINESS" : "Happiness",  
      "NEUTRAL" : "Neutral",
      "NO":"否",
      "OF":"of",
      "SADNESS" : "Sadness",
      "SAVE":"保存", 
      "SELECT AN OPTION BEFORE PROCEEDING" : "Select an option before proceeding",    
      "WHAT EMOTION IS THIS" : "What emotion is this",  
      "YES": "是",
    },
  }
  
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
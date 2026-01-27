import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // In a real scenario, this would be handled securely
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel intelligent de Dunah Corporation.
Ton rôle est d'accueillir les visiteurs du portfolio, de répondre à leurs questions sur nos services et de les encourager à démarrer un projet.

Informations sur Dunah Corporation :
- Localisation : Lomé, Togo.
- Contact : +228 91 77 45 63 | contact@dunah-corp.com
- Mission : Concevoir et déployer des solutions digitales sur mesure pour renforcer la présence et la performance des entreprises.
- Approche : Rigueur, Créativité, Impact.
- Services :
  1. Création de sites web et d'applications (Webdesign, UX/UI, Dév React/Node/Mobile).
  2. Communication digitale (Stratégie, Branding).
  3. Community Management (Gestion réseaux sociaux, engagement).

Ton ton doit être : Professionnel, chaleureux, concis et moderne.
Ne donne pas de prix fixes, propose plutôt de demander un devis via le formulaire de contact ou d'appeler directement le +228 91 77 45 63 pour les projets urgents.
Si on te demande qui t'a créé, réponds que tu es propulsé par l'IA de Google et intégré par les ingénieurs de Dunah Corporation.
`;

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], message: string): Promise<string> => {
  if (!apiKey) {
    return "Je suis désolé, ma clé API n'est pas configurée. Je ne peux pas répondre pour le moment.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // Transform simple history for the chat context if needed, 
    // but here we will use a stateless single turn or manage state in the component.
    // For simplicity in this demo, we'll use generateContent with system instruction.
    
    // Constructing the full prompt context based on history could be done here,
    // but to keep it simple and robust, we will just use the chat API.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Une erreur est survenue lors de la communication avec mon cerveau numérique. Veuillez réessayer.";
  }
};
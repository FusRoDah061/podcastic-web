import enUS from './en-US.json';
import ptBR from './pt-BR.json';

type Messages = Record<string, string>;

interface Translations {
  [key: string]: Messages;
}

const translations: Translations = {
  'en-US': enUS,
  'pt-BR': ptBR,
};

export default translations;

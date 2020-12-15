interface Languages {
  [key: string]: string;
}

interface LanguagesConfig {
  languages: Languages;
  default: string;
}

export const LANGUAGES: LanguagesConfig = {
  languages: {
    pt: 'pt-BR',
    en: 'en-US',
  },
  default: 'en',
};

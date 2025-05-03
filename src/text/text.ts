export type Lang = 'ru' | 'az' | 'en';

export const translationsH1FirstPage: Record<Lang, string> = {
  ru: "Сайт тест знаний",
  en: "Knowledge Test Website",
  az: "Bilik Testi Vebsaytı",
};

export const textForLinkDefault: Record<Lang, string> = {
  ru: "Главная",
  az: "Əsas səhifə",
  en: "Home",
};

export interface Button {
  id: number;
  buttonText: string;
  lang: Lang;
}

export const textForButton: Button[] = [
  { id: 1, buttonText: 'Rus', lang: 'ru' },
  { id: 2, buttonText: 'Aze', lang: 'az' },
  { id: 3, buttonText: 'Eng', lang: 'en' },
];

export interface TranslationItem {
  id: number;
  label: string;
  path: string;
}

export const translationsForLi: Record<Lang, TranslationItem[]> = {
  ru: [
    { id: 1, label: 'Главная', path: '/' },
    { id: 2, label: 'HTML', path: '/html' },
    { id: 3, label: 'CSS', path: '/css' },
    { id: 4, label: 'JavaScript', path: '/javascript' },
    { id: 5, label: 'React', path: '/react' },
    { id: 6, label: 'TypeScript', path: '/typescript' },
  ],
  en: [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'HTML', path: '/html' },
    { id: 3, label: 'CSS', path: '/css' },
    { id: 4, label: 'JavaScript', path: '/javascript' },
    { id: 5, label: 'React', path: '/react' },
    { id: 6, label: 'TypeScript', path: '/typescript' },
  ],
  az: [
    { id: 1, label: 'Əsas', path: '/' },
    { id: 2, label: 'HTML', path: '/html' },
    { id: 3, label: 'CSS', path: '/css' },
    { id: 4, label: 'JavaScript', path: '/javascript' },
    { id: 5, label: 'React', path: '/react' },
    { id: 6, label: 'TypeScript', path: '/typescript' },
  ],
};


export const textForH2: Record<string,string> = {
  ru: "Добро пожаловать на наш сайт проверки знаний",
  az: "Bilik yoxlama saytımıza xoş gəlmisiniz",
  en: "Welcome to our knowledge testing website",
};

export const textForP: Record<string, string> = {
  ru: "На этом сайте вы можете проверить свои знания по основным технологиям фронтенда.",
  az: "Bu saytda frontend üzrə əsas texnologiyalar üzrə biliklərinizi yoxlaya bilərsiniz.",
  en: "On this website, you can test your knowledge of core frontend technologies.",
};

export const h3Text: Record<string, string> = {
  ru: "Тест по HTML",
  en: "HTML Test",
  az: "HTML Testi"
};


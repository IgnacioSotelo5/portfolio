import en from './en.json'
import es from './es.json'

export function getLocaleUrl(url: URL): 'en' | 'es' {
    const path = url.pathname.split('/')[1]
    if(path === 'es') return 'es'
    return 'en'
}

const translations = {
    en, es
}

export function t(locale: keyof typeof translations, key:string): string {
    return key.split('.').reduce((obj: any, k) => obj[k],  translations[locale]) ?? key
}
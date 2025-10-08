import { getLocaleUrl } from "./index"

export function useLocale(Astro: any): 'en' | 'es' {
    const locale = getLocaleUrl(Astro.url)
    return locale
}
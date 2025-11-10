
// Usamos targetElement para en transiciones aplicar el tema al body del nuevo documento.
export const applyTheme = (theme: string, targetElement = document.body) => {
    const systemPref = window.matchMedia('(prefers-color-scheme: dark')
    
    targetElement.classList.remove('light', 'dark', 'system')
    if(theme === 'dark'){
        targetElement.classList.add('dark')
    } else if(theme === 'system') {
        if(systemPref.matches) {
            targetElement.classList.add('dark')
        } else {
            targetElement.classList.add('light')
        }
    } else {
        targetElement.classList.add('light')
    }
}
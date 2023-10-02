import { Theme } from "@react-navigation/native"

type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: '#4DA0E0',
        background: 'white',
        card: 'green',
        text: 'rgba(83,39,193,0.9)',
        border: 'orange',
        notification: 'teal',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: '#A8F0E8',
        background: 'black',
        card: 'green',
        text: '#E218F2',
        border: 'orange',
        notification: 'teal',
    }
}


export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
            return {...lightTheme}

        case 'set_dark_theme':
            return {...darkTheme}

        default:
            return state
    }
}
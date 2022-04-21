import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

export const theme = extendTheme({
    config,
    colors: {
        pink: {
            "900": '#521B41',
            "800": '#702459',
            "700": '#97266D',
            "600": '#B83280',
            "500": '#D53F8C',
            "400": '#ED64A6',
            "300": '#F687B3',
            "200": '#FBB6CE',
            "100": '#FED7E2',
            "50": '#FFF5F7',
        }
    },
    styles: {
        global: {
            body: {
                bg: 'pink.700',
                color: 'purple.50'
            }
        }
    }
});
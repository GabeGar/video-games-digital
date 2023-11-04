import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    future: {
        hoverOnlyWhenSupported: true,
    },
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary-purple': 'hsl(var(--primary-purple) /<alpha-value>)',
                'primary-light-purple':
                    'hsl(var(--primary-light-purple) /<alpha-value>)',
            },
            backgroundImage: {
                heroDesktop: 'url("/src/assets/gamer-zone-desktop.png")',
                heroMobile: 'url("/src/assets/gamer-zone-mobile.png")',
            },
            gridTemplateColumns: {
                gamesGrid: 'repeat(auto-fit, minmax(300px, 1fr))',
                storeLayoutGrid: '1fr 4fr',
                storeItemGrid: '2fr 1fr',
            },
        },
    },
    plugins: [],
} satisfies Config;

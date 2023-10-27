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
            },
        },
    },
    plugins: [],
} satisfies Config;

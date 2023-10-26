import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/video-games-digital',
    plugins: [react()],
    css: {
        postcss: {
            plugins: [autoprefixer, tailwindcss],
        },
    },
});

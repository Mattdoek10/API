// @ts-nocheck
import { defineConfig } from 'astro/config';
import Node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({

    output: 'server',
    adapter: Node({ mode: 'standalone' }),    

    vite: {
        server: {
            hmr: false
        }
    }
});

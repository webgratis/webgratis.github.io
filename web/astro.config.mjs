import { defineConfig } from 'astro/config';
import { getAllJSDocTags } from 'typescript';

// https://astro.build/config
export default defineConfig({
    prefetch: true,
});

import { defineConfig } from 'vite';

export default defineConfig({
  base: '/SputnikPro_test/', 
  build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				index: resolve(__dirname, "index.html"),
				action: resolve(__dirname, "src/html/action.html"),
				parameters: resolve(__dirname, "src/html/parameters.html"),
			}
		}
	}
});

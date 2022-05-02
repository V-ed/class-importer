import VitePluginTsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const vitestBaseConfig = defineConfig({
	plugins: [VitePluginTsConfigPaths({ loose: true })],
	test: {
		// globals: true,
		testTimeout: 30000,
		coverage: {
			reportsDirectory: `./coverage`,
			reporter: 'lcov',
			include: ['**/*.ts'],
			exclude: ['**/*.d.ts', '.graphqlrc.ts', 'gulpfile.ts', '**/_generated/**', '**/prisma/**', '**/dist/**', '**/fixtures/**'],
		},
		deps: {
			inline: [''],
		},
	},
});

export default vitestBaseConfig;

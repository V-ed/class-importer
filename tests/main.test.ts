import { importClasses } from '$/index';
import { describe, expect, it } from 'vitest';
import AbstractClass1 from './components/AbstractClass1';
import SubClass1 from './components/SubClass1';

describe('class importer', () => {
	describe('good usage', () => {
		it('should import classes', async () => {
			const container = importClasses(AbstractClass1, `${__dirname}/data/good`);

			const instances = await container.getInstances();

			expect(Array.isArray(instances)).toBe(true);
			expect(instances.length).toBe(3);
		});

		it('should import classes within subfolders as well', async () => {
			const container = importClasses(AbstractClass1, `${__dirname}/data/subfolders`);

			const instances = await container.getInstances();

			expect(Array.isArray(instances)).toBe(true);
			expect(instances.length).toBe(3);
		});

		it('should import only specified parent type', async () => {
			const container = importClasses(AbstractClass1, `${__dirname}/data/multiple-types`);

			const instances = await container.getInstances();

			expect(Array.isArray(instances)).toBe(true);
			expect(instances.length).toBe(2);
		});

		it('should import from extended subclass type', async () => {
			const container = importClasses(SubClass1, `${__dirname}/data/subclasses`);

			const instances = await container.getInstances();

			expect(Array.isArray(instances)).toBe(true);
			expect(instances.length).toBe(3);
		});
	});

	describe('bad usage', () => {
		it('should not import missing default exports', async () => {
			const container = importClasses(AbstractClass1, `${__dirname}/data/no-default`);

			const instances = await container.getInstances();

			expect(Array.isArray(instances)).toBe(true);
			expect(instances.length).toBe(0);
		});
	});
});

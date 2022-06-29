import { ClassContainer } from './class-container';
import type { ClassDescriptor } from './types';

/**
 * Creates a ClassContainer instance containing the default classes matching the provided type.
 *
 * @param type Class type (could be classes extending from this type) to fetch from.
 * @param dirPaths The path of the folders to look through.
 * Subdirectories of those folders will be crawled through as well.
 *
 * @returns A `ClassContainer` instance containing the loaded classes, as well as few utility
 * methods to help getting the classes or the instances of those classes.
 */
export function importClasses<T extends ClassDescriptor>(type: T, ...dirPaths: string[]) {
	return new ClassContainer(type, ...dirPaths);
}

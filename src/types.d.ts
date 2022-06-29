// eslint-disable-next-line @typescript-eslint/ban-types
export type ClassDescriptor = Function & { prototype: Function['prototype'] };

export type Ctor<T> = { new (): T };

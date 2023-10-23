export const isString = (a: any) => typeof a === 'string';
export const isOnlyLetters = (a: string) => /^[a-zA-Z]+$/.test(a);
export const isOnlyNumbers = (a: string) => /^[0-9]+$/.test(a);
export const isOnlyNumbersAndLetters = (a: string) => /^[a-zA-Z0-9]+$/.test(a);

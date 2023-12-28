export const isEmail = (value: string): boolean => {
  return value.includes('@');
}

export const isNotEmpty = (value: string): boolean => {
  return value.trim() !== '';
}

export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
}

export const isEqualsToOtherValue = (value: any, otherValue: any): boolean => {
  return value === otherValue;
}

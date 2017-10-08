// @flow

export type ValidatorFunction = (value: any, label: string) => string | null;
export type ValidatorTypes = "required" | "email";

/**
 * Map of Validator functions
 */
export const Validators: { [key: string]: ValidatorFunction } = {
  required: (value, label) => {
    if (!value) return `${label} is required.`;
    return null;
  },
  email: (value: string, label) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!value.match(emailRegex)) {
      return `${label} is invalid`;
    }
    return null;
  }
};

// @flow

export type ValidatorFunction = (value: any, label: string) => string | null;
export type ValidatorTypes = "required";

/**
 * Map of Validator functions
 */
export const Validators: { [key: string]: ValidatorFunction } = {
  required: (value, label) => {
    if (!value) return `${label} is required.`;
    return null;
  }
};

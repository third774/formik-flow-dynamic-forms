// @flow

import type { ValidatorTypes } from "./Validators";

export interface FieldComponent<TFieldTypeConfiguration>
  extends FieldConfiguration<TFieldTypeConfiguration> {
  onChange?: () => any;
  onBlur?: () => any;
}

export interface FieldConfiguration<TFieldTypeConfiguration> {
  label: string;
  name: string;
  fieldType: FieldType;
  value?: any;
  validators?: ValidatorTypes[];
  fieldTypeConfiguration?: TFieldTypeConfiguration;
}

type FieldType = "input" | "checkbox"; // | "dropdown";

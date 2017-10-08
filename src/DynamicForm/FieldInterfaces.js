// @flow

import type { ValidatorTypes } from "./Validators";

export interface FieldComponentProps<TFieldTypeConfiguration> {
  name: string;
  value: any;
  className: string;
  onChange?: () => any;
  onBlur?: () => any;
  fieldTypeConfiguration: TFieldTypeConfiguration;
}

export interface FieldConfiguration<TFieldTypeConfiguration> {
  label: string;
  name: string;
  fieldType: FieldType;
  value: any;
  validators?: ValidatorTypes[];
  fieldTypeConfiguration?: TFieldTypeConfiguration;
}

type FieldType = "input" | "checkbox" | "select" | "radio";

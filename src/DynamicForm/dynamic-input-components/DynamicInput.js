// @flow

import React from "react";

import { FieldComponent } from "../FieldInterfaces";

export const DynamicInput = ({
  name,
  value,
  fieldTypeConfiguration,
  onChange,
  onBlur
}: FieldComponent<any>) => (
  <input
    value={value}
    name={name}
    placeholder={fieldTypeConfiguration && fieldTypeConfiguration.placeholder}
    type={fieldTypeConfiguration && fieldTypeConfiguration.type}
    onChange={onChange}
    onBlur={onBlur}
  />
);

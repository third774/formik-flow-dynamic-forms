// @flow

import React from "react";

import { FieldComponentProps } from "../FieldInterfaces";

type InputFieldTypeConfiguration = {
  placeholder: string,
  inputType: string
};

export const DynamicInput = (
  props: FieldComponentProps<InputFieldTypeConfiguration>
) => {
  const { name, value, fieldTypeConfiguration, onChange, onBlur } = props;
  return (
    <input
      value={value}
      name={name}
      placeholder={fieldTypeConfiguration.placeholder}
      type={fieldTypeConfiguration.inputType}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

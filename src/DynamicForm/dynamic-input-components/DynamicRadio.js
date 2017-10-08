// @flow

import React from "react";

import { FieldComponentProps } from "../FieldInterfaces";

type RadioFieldTypeConfiguration = {
  options: string[]
};

export const DynamicRadio = (
  props: FieldComponentProps<RadioFieldTypeConfiguration>
) => {
  const {
    name,
    value,
    fieldTypeConfiguration,
    onChange,
    onBlur,
    className
  } = props;
  return (
    <div>
      {fieldTypeConfiguration.options.map((option, index) => (
        <label key={index}>
          {option}
          <input
            type="radio"
            name={name}
            value={option}
            onChange={onChange}
            onBlur={onBlur}
          />
        </label>
      ))}
    </div>
  );
};

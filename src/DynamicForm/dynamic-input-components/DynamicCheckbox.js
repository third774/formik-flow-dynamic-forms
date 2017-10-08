// @flow

import React from "react";

import { FieldComponent } from "../FieldInterfaces";

export const DynamicCheckbox = ({
  name,
  value,
  onChange,
  onBlur
}: FieldComponent<any>) => (
  <input
    type="checkbox"
    name={name}
    checked={!!value}
    onChange={onChange}
    onBlur={onBlur}
  />
);

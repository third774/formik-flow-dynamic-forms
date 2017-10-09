// @flow

import React from "react"

import {FieldComponentProps} from "../FieldInterfaces"

type TextAreaFieldTypeConfiguration = {
  placeholder: string
}

export const DynamicTextArea = (
  props: FieldComponentProps<TextAreaFieldTypeConfiguration>
) => {
  const {name, value, fieldTypeConfiguration, onChange, onBlur, className} = props
  return (
    <textarea
      className={className}
      name={name}
      value={value}
      placeholder={fieldTypeConfiguration.placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

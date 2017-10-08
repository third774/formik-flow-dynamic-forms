// @flow

import { FieldConfiguration } from "./DynamicForm/FieldInterfaces";

export const FIELD_CONFIG: FieldConfiguration<any>[] = [
  {
    label: "Email",
    name: "email",
    fieldType: "input",
    validators: ["required"],
    fieldTypeConfiguration: {
      placeholder: "jane.doe@email.com",
      type: "email"
    }
  },
  {
    label: "Password",
    name: "password",
    fieldType: "input",
    validators: ["required"],
    fieldTypeConfiguration: {
      placeholder: "Password",
      type: "password"
    }
  },
  {
    label: "Remember Me",
    name: "rememberMe",
    fieldType: "checkbox",
    value: false,
    // validators: ["required"],
    fieldTypeConfiguration: {
      // placeholder: "What's your first name?",
      // type: "text"
    }
  }
];

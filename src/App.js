// @flow

import React, { Component } from "react";
import "./App.css";

import { DynamicForm } from "./DynamicForm/DynamicForm";
import { FIELD_CONFIG } from "./FieldConfig";

class App extends Component<any, any> {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <fieldset>
              <legend>Login</legend>
              <DynamicForm config={FIELD_CONFIG} />
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

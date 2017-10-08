// @flow

import React, { Component } from "react";
import "./App.css";

import { DynamicForm } from "./DynamicForm/DynamicForm";
import { FIELD_CONFIG } from "./FieldConfig";

import ReactJson from "react-json-view";

class App extends Component<any, any> {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <fieldset>
              <legend>Login</legend>
              <DynamicForm config={FIELD_CONFIG} />
            </fieldset>
          </div>
          <div className="col-md-6">
            <ReactJson src={FIELD_CONFIG} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

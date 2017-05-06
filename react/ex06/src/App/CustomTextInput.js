import React from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={input => this.textInput = input}
        />
        &nbsp;&nbsp;
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}
export default CustomTextInput;

import React, { Component } from "react";
import styles from "./SubmitForm.module.scss";

class SubmitForm extends Component {
  state = {
    newTask: ''
  }

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state.newTask);
    this.setState({newTask: ''})
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleUpdate}>
        <input
          onChange={(e)=> this.setState({newTask: e.target.value })}
          value={this.state.newTask}
          type="text"
          placeholder='Enter Task'
          className={styles.form__input}
        />
        <button type='submit'>Add</button>
      </form>
      </>
    );
  }
}

export default SubmitForm;

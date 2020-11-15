import React, { Component } from "react";
import styles from "./TodoList.module.scss";
import Todo from '../Todo';

class TodoList extends Component {

  render() {
    return (
      <div className={styles.formItems}>
        {this.props.tasks.map((task, index) => {
          return <Todo
                    onDelete={this.props.handleDelete}
                    id={index}
                    content = {task}
                    key={index}
                  />})
        }
      </div>
    );
  }
}

export default TodoList;

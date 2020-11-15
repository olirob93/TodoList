import React, { Component } from 'react'
import styles from './todo.module.scss';

class Todo extends Component {
    render() {
        return (
            <div className={styles.todo}>
                <p>{this.props.content}</p>
                <a onClick={this.props.onDelete} className={styles.close} href="#"></a>
            </div>
        )
    }
}

export default Todo;
//<button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
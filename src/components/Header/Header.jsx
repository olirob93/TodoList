import React, { Component } from 'react'
import styles from './header.module.scss';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <h1>Hi, {this.props.data}  this is your Todo list</h1>
                <p>{this.props.tasks} Todos left todo</p>
            </div>
        )
    }
}

export default Header;

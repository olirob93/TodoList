import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList/TodoList';
import Todo from './components/Todo/Todo';
import SubmitForm from './components/SubmitForm/';

class App extends Component {

  state = {
    tasks: [],
    user: ''
  }

  async componentDidMount() {
    const url = 'https://randomuser.me/api/'
    const response = await fetch(url)
    const data = await response.json()

    this.setState({user: data.results[0].name.first})
  }

  handleDelete = (index) => {
    const newTasks = [...this.state.tasks]
    newTasks.splice(index, 1);
    this.setState({tasks: newTasks})
  }

  handleUpdate = (task) => {
    this.setState({tasks: [...this.state.tasks, task]})
  }


render() {
  return(
    <div class='container'>
      <Header data={this.state.user} tasks={this.state.tasks.length}/>
      <TodoList 
        tasks={this.state.tasks}
        handleDelete={this.handleDelete}
      />
      <SubmitForm handleUpdate={this.handleUpdate}/>
    </div>

  ) 
}

}

export default App;

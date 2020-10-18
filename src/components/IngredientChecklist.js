import React, { Component } from "react";
import shortid from 'shortid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

class IngredientList extends Component {

  input = React.createRef()

  state = {
    todos: [],
  }

  componentDidMount() {
    const todos = window.localStorage.getItem("todos");
    const parsedList = JSON.parse(todos);
    if (todos === null) {
      return false
    } else {
      this.setState({ todos: parsedList })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.refs.form.reset();
  }

  addTodo = () => {
    // ****** set to go to db instead of local storage *******
    const todoItems = {
      id: shortid.generate(),
      value: this.input.current.value,
      complete: false,
    };
    if (localStorage.getItem("todos") === null) {
      const todos = []
      todos.push(todoItems);
      localStorage.setItem("todos", JSON.stringify(todos))
    } else {
      const todos = JSON.parse(localStorage.getItem("todos"))
      todos.push(todoItems)
      localStorage.setItem("todos", JSON.stringify(todos))
    }
    this.setState({
      todos: JSON.parse(localStorage.getItem("todos")),
    })
  }

  updateTodo = (event, index) => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    const updatedTodo = event
    todos[index].value = updatedTodo
    localStorage.setItem("todos", JSON.stringify(todos))
    this.setState({
      todos: JSON.parse(localStorage.getItem("todos"))
    })
  }

  deleteTodo = (event) => {
    const index = event.target.getAttribute("data-key")
    const todoValue = JSON.parse(localStorage.getItem("todos"));
    todoValue.splice(index, 1)
    this.setState({
      todos: todoValue
    });
    localStorage.setItem("todos", JSON.stringify(todoValue))
  }

  taskCompleted = (complete, index) => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    todos[index].complete = !complete;
    localStorage.setItem("todos", JSON.stringify(todos))
    this.setState({
      todos: JSON.parse(localStorage.getItem("todos"))
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="main-container">
        <h1>Ingredient Checklist</h1>
        <div className="todo-container">
          <form onSubmit={this.handleSubmit} ref="form">
            <button onClick={this.addTodo} className="add-button" >+</button>
            <input className="input-box" type="text" placeholder="Add Ingredient" ref={this.input}></input>
          </form>
          <div>
            {this.state.todos.map((item, index) => {
              return (
                <div className="items" key={item.id}>
                  <input type="checkbox" id="checked" checked={item.complete} className="checkbox" onChange={() => this.taskCompleted(item.complete, index)} />
                  <input style={{ textDecoration: item.complete ? "line-through" : "" }} className="current-value" name="text" id={item.id} onBlur={event => this.updateTodo(event.target.value, index)} defaultValue={item.value} />
                  <button onClick={this.deleteTodo} className="delete-button" value="delete" data-key={index}>DELETE</button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default IngredientList;
import React from 'react';
import style from './App.css';
import uuid from 'uuid';
import Title from '../components/Title';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                    text: "jeden",
                    id: 128
                },
                {
                    text: "dwa",
                    id: 819
                },
                {
                    text: "trzy",
                    id: 545
                }
            ],
            title: 'Webpack-loaders , number of tasks in the list '
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({
            data
        });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({
            data: remainder
        });
    }

    render() {
        return ( < div className = {
                style.TodoApp
            } >
            <
            Title title = {
                this.state.title
            }
            numberTasks = {
                this.state.data.length
            }
            /></div >
        );
    }
}

export default App;
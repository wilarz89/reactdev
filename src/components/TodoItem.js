import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
    render() {
        return (
            <div>
              <h3>{this.props.todo.title}</h3>  
            </div>
        )
    }
}


TodoItem.propTypes={
    todo : PropTypes.object.isRequired
}

export default TodoItem

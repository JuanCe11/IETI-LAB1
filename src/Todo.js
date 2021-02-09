import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        const { task} = this.props;
        return (  
            <h2>{this.props.text} - {this.props.priority} - {this.props.dueDate}   </h2> 
        );
    }

}

export default Todo;
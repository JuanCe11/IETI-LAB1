import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        const { task} = this.props;
        return (  
            <p>{this.props.text} / {this.props.priority} / {this.props.dueDate}   </p> 
        );
    }

}

export default Todo;
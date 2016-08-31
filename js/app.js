import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorld extends Component{
    render() {
        return (
            <h3>Hello World</h3>
        );
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('container'));
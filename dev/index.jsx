import React from "react"
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
    render: function(){
        return (
            <p>Hello, {this.props.greetTarget}!</p>
        );
    }
});

ReactDOM.render(
    <div>
        <HelloWorld greetTarget="Lucas" />
        <HelloWorld greetTarget="Kumatora" />
        <HelloWorld greetTarget="Duster" />
        <HelloWorld greetTarget="Boney" />
        <HelloWorld greetTarget="Claus" />
        <HelloWorld greetTarget="Salsa" />
    </div>,
    document.querySelector("#container")
)
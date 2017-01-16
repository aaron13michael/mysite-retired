import React from "react"
import ReactDOM from "react-dom";

var NavBar = React.createClass({
    render: function(){
        return(
            <div className="ui stackable menu">
                <div className="header item">Aaron Stadler Software</div>
                <a className="item">About Me</a>
                <a className="item">Soundcloud</a>
                <a className="item">Gallery</a>
                <a className="item">Contact</a>
            </div>
        );
    }
});

var Banner = React.createClass({
    render: function(){
        return (
        <div className = "ui clearing segment">
            <img className="ui medium circular image" src="img/smiley.jpg" width="500px" height="auto"></img>
            <h1 className="ui right floated header">
                WELCOME TO MY WORLD!
            </h1>
        </div>
        );
    }
});

var Segments = React.createClass({
    render: function(){
        return (
        <div className = "ui segments">
            <Banner/>
        </div>
        );
    }
});

var Main = React.createClass({
    render: function(){
        return(
            <div>
                <NavBar/>
                <Segments/>
            </div>
        );
    }
});

ReactDOM.render(
    <Main/>,
    document.querySelector("#container")
);
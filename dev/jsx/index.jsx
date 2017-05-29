import React from "react"
import ReactDOM from "react-dom";

var NavBar = React.createClass({
    render: function(){
        return(
            <div className="ui stackable menu">
                <div className="header item">Aaron Stadler Software</div>
                <a className="item">About Me</a>
                <a className="item">About Site</a>
                <a className="item">Gallery</a>
                <a className="item">EDM Explorer</a>
            </div>
        );
    }
});

var Banner = React.createClass({
    render: function(){
        return (
        <div className = "ui segment banner">
            <img className="ui centered aligned medium circular image" src="img/smiley.jpg" width="500px" height="auto" />
            <h1 className="ui center aligned header">
                WELCOME TO MY WORLD!
            </h1>
        </div>
        );
    }
});

var NavCircle = React.createClass({
    render: function(){
        return (
            <div className ="column">
                <div id={this.props.identity} className="ui circular segment">
                    <h2 className="ui header">
                        {this.props.title}
                    </h2>
                </div>
            </div>
        );
    }
});

var NavCircles = React.createClass({
    render: function(){
        return (
            <div className = "ui segment">
                <div className="ui stackable four column grid">
                    <NavCircle identity="aboutCircle" title="About Me" />
                    <NavCircle identity="siteCircle" title="About This Site" />
                    <NavCircle identity="scCircle" title="EDM Explorer Project" />
                    <NavCircle identity="photoCircle" title="Photo Gallery" />
                </div>
            </div>
        );
    }
});

var Copyright = React.createClass({
  render: function(){
    return (
      <div className = "ui center aligned segment">
        <h3>&#169; Aaron Michael Stadler 2017 all rights reserved</h3>
      </div>
    );
  }
});

var Segments = React.createClass({
    render: function(){
        return (
        <div className = "ui segments">
            <Banner/>
            <NavCircles />
            <Copyright />
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

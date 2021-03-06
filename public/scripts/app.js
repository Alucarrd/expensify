"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }
  //after DOM rendered


  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        console.log('fetching data');
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);
        if (options) this.setState(function () {
          return { options: options };
        });
      } catch (e) {
        //catch exception
        //if invalid, do nothing

      }
    }
    //componentDidMount(previousProps, previousState)

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(previousProps, previousState) {
      if (previousState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
        console.log("saved options");
      }
      //this one fires after teh state value change or prop value change
      console.log('saving data');
      //we have access to this.state and this.props (new values)
      //and it can access previousState and previousProps
    }
  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {
      //fires when component goes away
      console.log('component will unmount');
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      console.log("Removing " + optionToRemove);
      // this.setState((previousState) => ({
      //   options: previousState.options.filter((option) => {
      //     return optionToRemove !== option;
      //   })
      // }));
      this.setState(function (previousState) {
        return {
          options: previousState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {

      // this.setState(() => {
      //   return {
      //     options: []
      //   }
      // });
      //to use easier syntax with oneline return (inexplicitly return object)
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        //if option exists already
        return 'This item already exists';
      }
      this.setState(function (previousState) {
        return { options: previousState.options.concat(option) };
      });
      // this.setState((previousState) => {
      //   return {
      //     options: previousState.options.concat(option)
      //   }
      // });
    }
    //handlepick
    //pass down to Action
    //bind Here
    //onclick
    //random pick option and alert

  }, {
    key: "handlePick",
    value: function handlePick() {
      var options = this.state.options;
      var randomNum = Math.floor(Math.random() * options.length);
      var option = options[randomNum];
      console.log(option);
    }
  }, {
    key: "render",
    value: function render() {
      var title = 'Indecision';
      var subtitle = "Put your life in the hands of a computer";

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Title"
        ),
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, { handlePick: this.handlePick, hasOptions: this.state.options.length > 0 }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};
Header.defaultProps = {
  title: 'Indecision'
  // class Header extends React.Component {
  //   //render returns some jsx
  //   render() {
  //     console.log(this.props);
  //     return (
  //       <div>
  //         <h1>{this.props.title}</h1>
  //         <h2>{this.props.subtitle}</h2>
  //       </div>
  //     );
  //   }
  // }

  //option -> static text
};var Option = function Option(props) {

  return React.createElement(
    "div",
    null,
    "Option: ",
    props.optionText,
    React.createElement(
      "button",
      {
        //onClick={props.handleDeleteOption}
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      "remove"
    )
  );
};
// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//       Option: {this.props.optionText}
//       </div>
//     );
//   }
// }


var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All"
    ),
    props.options.length === 0 && React.createElement(
      "p",
      null,
      "Please add some option(s)"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption
      });
    })
  );
};
// class Options extends React.Component{
//
//
//   //I wnat to make sure the this binding for handleRemoveButton is the same as
//   //this binding for render()
//
//   render(){
//     return (
//       <div>
//       <p>Options component here</p>
//       <p>Options length is {this.props.options.length}</p>
//         <ol>
//           {
//             this.props.options.map((option) => {
//               return <Option key={option} optionText={option} />
//             })
//           }
//         </ol>
//         <button onClick={this.props.handleDeleteOption} >Remove All</button>
//       </div>
//     );
//   }
// }


//Add Option -> Add option component Here

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.newOption.value.trim();
      var error = this.props.handleAddOption(option);
      if (!error) e.target.elements.newOption.value = '';
      this.setState(function () {
        return { error: error };
      });
      // this.setState(() => {
      //   return { error }
      // });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", id: "newOption" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);
//stateless component


var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      "What should I do"
    )
  );
};

//class based component
// class Action extends React.Component {
//
//
//   render() {
//
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >What should I do</button>
//       </div>
//     );
//   }
// }

//1. setup form with text input and submit button
//2. wire up onsubmit
//3. define method to wire up

// //stateless functional comoponent
// IndecisionApp.defaultProps = {
//   options: []
// }
var User = function User() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Name: "
    ),
    React.createElement(
      "p",
      null,
      "Age: "
    )
  );
};
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

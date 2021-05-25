import './App.css';
import { Component } from 'react';
import { fun } from 'my_console.log_module'
import { connect } from 'react-redux'


window.handleTxt = (s) => {
  this.props.ChangeTxt(s);
}

class App extends Component {

  state = {
    //txt: 'Your Message From Android will appear here!',
    msg: '',
  }

  handleMsg = (e) => {
    this.setState({
      msg: e.target.value,
    })
  }
  sendMsg = (e) => {
    e.preventDefault();
    var msg = this.state.msg;
    console.log(msg);
    // this.setState({
    //   msg: "",
    // });
    //window.AndroidFunction.getMessage(msg);
    //window.handleTxt(msg);
    this.props.ChangeTxt(msg);
  }
  showToast = (e) => {
    e.preventDefault();
    window.AndroidFunction.showToast("Toast from Webview");
  }

  simpleClick = (e) => {
    fun();
  }

  render() {
    return (
      <div className="App">
        <p>{this.props.txt}</p>
        <input id="msg" onChange={this.handleMsg} type="text"></input>
        <button onClick={this.sendMsg}>Click</button>
        <div>
          <button onClick={this.simpleClick}>Console.log</button>
          <button onClick={this.showToast}>Show Toast in Android</button>
        </div>
        
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    txt: state.txt,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      ChangeTxt: (s) => dispatch({type: 'CHANGE', newTxt: s}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

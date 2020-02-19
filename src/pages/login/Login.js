import React, { Component } from 'react';
import logo from '../../logo_text.png';
import './Login.css';

// app.js -> 인스타그램 html 넣기

class Login extends Component {

  constructor(props) {

    super(props);

    this.state = {
      id:'',
      pwd:''
    }
  }

  handleChange = (e) => {

    this.setState({
      [e.target.name] : e.target.value,
      [e.target.name] : e.target.value
    });
  
  }

  bntClass = (e) => {
    return this.state.id.length > 0 && this.state.pwd ? 'cursorOn': '';
  }


  render(){
    return (
      <div className="loginWrap">
        <h1 className="loginLogo"><img src={logo} alt="인스타그램 로고"/></h1>
        <ul className="loginList">
          <li><input className="loginId" name="id" value={this.state.id} onChange={this.handleChange.bind(this)} placeholder="전화번호, 사용자 이름 또는 이메일" type="text"/></li>
          <li><input className="loginPassword" name="pwd" value={this.state.pwd} onChange={this.handleChange.bind(this)} placeholder="비밀번호" type="password"/></li>
        </ul>
        <button className={`loginBtn ${ this.bntClass() }`} type="button" name="button">로그인</button>
        <a className="pwdLink" href="https://www.instagram.com/accounts/password/reset/">비밀번호를 잊으셨나요?</a>
    </div>
    )
  }
}


export default Login;
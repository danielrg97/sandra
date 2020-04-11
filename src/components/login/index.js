import React from 'react';
import {Segment} from 'semantic-ui-react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {setUserInSession} from './actions';
import FormLogin from './form';
import "./styles.css";


const LoginComponent = ({ loginReducer, history, dispatchUser }) => {
  const submitForm = (values) => {
    const result = loginReducer.get("users").filter(user =>user.username === values.email);
    if(result.length > 0){
      dispatchUser(result);
      history.push("/home");
    }else{
      alert("intenta de nuevo");
    }
    console.log(result.length);
  };
  return (
    <div className="loginPage">
      <Segment className="loginSegment">
        <div className="titleCont">
          <h1>
            Sandra <h3>Software contable</h3>
          </h1>
          <h3>Inicio de sesión</h3>
        </div>
        <FormLogin submit={submitForm} />
        <span>
          ¿No tienes cuenta?
          <a onClick={()=>history.push("/login/register")}>Registrate</a>
        </span>
      </Segment>
      <footer className="footerCont">
        {JSON.stringify(loginReducer.get("users"))}
      </footer>
    </div>
  );
};

function mapStateToProps({loginReducer}){
    return{
        loginReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        dispatchUser: setUserInSession
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
import React from 'react';
import {Segment} from 'semantic-ui-react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {setUser} from './actions';
import { redirectTo } from './../../routes/actions';
import FormLogin from './form';
import "./styles.css";


const LoginComponent = ({ loginReducer }) => {
  const submitForm = () => {
    console.log(loginReducer.get("users"));
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
          <a onClick={redirectTo("/login/register")}>Registrate</a>
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
        dispatchUser: setUser
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
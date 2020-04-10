import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormUserRegistry from './form';
import { setUser } from "./../actions";
import {redirectTo} from './../../../routes/actions';
import './styles.css';


const UserRegistryComponent = ({ dispatchUser, loginReducer }) => {
  const submitUserRegistry = ( values ) => {
    console.log(values);
    dispatchUser(values);
  };
  return (
    <div className="userRegistryPage">
      <Segment className="userRegistrySegment">
        <h1>Llene los campos</h1>
        <FormUserRegistry submit={submitUserRegistry} />
        <span>
          ¿Ya tienes a cuenta? 
          <a onClick={redirectTo("/login")}>Inicia sesión</a>
        </span>
      </Segment>
    </div>
  );
};
function mapStateToProps({ loginReducer }) {
  return {
    loginReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      dispatchUser: setUser,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(UserRegistryComponent);
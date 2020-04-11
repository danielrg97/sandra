import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormUserRegistry from './form';
import { setUser } from "./../actions";
import './styles.css';


const UserRegistryComponent = ({ dispatchUser, loginReducer, history }) => {
  const submitUserRegistry = ( values ) => {
    dispatchUser(values);
    alert("Hemos creado tu usuario. Por favor inicia sesión.");
    history.push("/login");
  };
  return (
    <div className="userRegistryPage">
      <Segment className="userRegistrySegment">
        <h1>Llene los campos</h1>
        <FormUserRegistry submit={submitUserRegistry} />
        <span>
          ¿Ya tienes a cuenta?
          <a onClick={()=>history.push("/login")}>Inicia sesión</a>
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
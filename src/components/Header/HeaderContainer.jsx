import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-redux';
import Header from './Header';



class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }



  render () {
    return ( <Header {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.isAuth,
});

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
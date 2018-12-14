import * as React from 'react';

import { AuthService } from '../services/Auth';

interface IAuth {
  user: any;
  isLoggedIn: boolean;
  formLoginError: boolean;
  login: Function;
  logout: Function;
}

let authDefault: IAuth = JSON.parse(localStorage.getItem('auth'));
if (!authDefault) {
  authDefault = {
    user: null,
    isLoggedIn: false,
    formLoginError: false,
    login: () => {},
    logout: () => {}
  };
}

export const AuthContext = React.createContext(authDefault);

export class AuthProvider extends React.Component {
  state = authDefault;
  authService = new AuthService();

  constructor(props: any) {
    super(props);

    this.state.login = async (username: string, password: string) => {
      const data = await this.authService.login(username, password);

      if (data) {
        this.setState({
          user: data,
          isLoggedIn: true
        });
        localStorage.setItem('auth', JSON.stringify(this.state));
      }
    };

    this.state.logout = () => {
      this.authService.logout();
      this.setState({
        user: null,
        isLoggedIn: false
      });
      localStorage.removeItem('auth');
    };
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

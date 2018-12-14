import { MyFetchJSON } from './MyFetch';

export class AuthService {
  login(username: string, password: string) {
    return MyFetchJSON('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
  }

  logout() {
    fetch('/api/auth/logout');
  }
}

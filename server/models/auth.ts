import * as ldap from 'ldapjs';

export class AuthModelClass {
  loginActiveDirectory(username: string, password: string, done: Function) {
    const client = ldap.createClient({
      url: 'ldap://ctproddc02.surveysampling.com'
    });

    username = username.toLowerCase();
    username = username.replace('@surveysampling.com', '');
    username = username.replace(/\./g, '_');
    const adUsername = username + '@surveysampling.com';

    client.bind(adUsername, password, err => {
      if (err) {
        return done(null, false);
      }

      return done(null, username);
    });
  }
}

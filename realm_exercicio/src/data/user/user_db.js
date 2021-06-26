import Realm from 'realm';

class UserSchema extends Realm.Object { }
UserSchema.schema = {
  name: 'User',
  properties: {
    user_id: { type: 'int', default: 0 },
    user_name: 'string',
    user_email: 'string',
    user_login: 'string',
    user_password: 'string',
  }
};

// Create realm
let realm_user = new Realm({ schema: [UserSchema], schemaVersion: 1 });

// Export the realm
export default realm_user;

let listUsers = () => {
  return realm_user.objects('User');
}

let addUser = (_name, _email, _login, _password) => {
  console.log(_name, _email, _login, _password);
  realm_user.write(() => {
    const user = realm_user.create('User', {
      user_name: _name.user_name,
      user_email: _email.user_email,
      user_login: _login.user_login,
      user_password: _password.user_password,
    });
  });
}

export {
  listUsers,
  addUser
}
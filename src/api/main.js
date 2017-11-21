import HTTP from '@/packages/http';
import Auth from '@/packages/auth/Auth';

export default {

  //login
  login(email, password) {
    return HTTP.post('/login', {
      email: email,
      password: password
    });
  },

  //register or signup
  register(name, email, password, password_confirmation) {
    return HTTP.post('/register', {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    });
  },

  //home
  userProfile() {
    return HTTP.get('/userProfile');
  },

  //home
  userTemplates() {
    return HTTP.get('/userTemplates');
  },

  //selectTemplate
  selectTemplate() {
    return HTTP.get('/templates');
  },

  //etc
  dummyGET() {
    return HTTP.get('https://jsonplaceholder.typicode.com/posts');
  }

}

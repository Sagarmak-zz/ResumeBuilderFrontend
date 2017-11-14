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
  //etc
  dummyGET() {
    return HTTP.get('https://jsonplaceholder.typicode.com/posts');
  }

}

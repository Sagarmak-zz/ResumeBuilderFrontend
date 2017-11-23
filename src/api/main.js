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

   //one time user data creation
   insert() {
     return HTTP.post('/insert', {

     });
   },


  //home
  userProfile() {
    return HTTP.get('/userProfile');
  },

  //home, dashboard
  userTemplates() {
    return HTTP.get('/userTemplates');
  },

  //selectTemplate
  selectTemplate() {
    return HTTP.get('/templates');
  },

  //dashboard
  display() {
    return HTTP.get('/display');
  },

  //dashboard
  update(data) {
    console.log("API", data);
    return HTTP.patch('/update', {
      data: data
    })
  },

  //profile
  changePassword(email, new_password, password_confirmation) {
    return HTTP.post('/changePassword', {
      email: email,
      new_password: new_password,
      password_confirmation: password_confirmation
    });
  },

  //etc
  dummyGET() {
    return HTTP.get('https://jsonplaceholder.typicode.com/posts');
  }

}

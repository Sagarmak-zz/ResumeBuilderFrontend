<template lang="html">
  <div class="profile">
    <div class="box inside-box-profile">
      <div class="top">
        <div class="box a">
          <p class="title is-2">Name:</p>
          <div class="name-icon">
            <p class="button subtitle is-4" @click="changeName = !changeName">{{name}}</p>
            <span class="icon has-text-info" title="Click to Edit.">
              <i class="fa fa-info-circle"></i>
            </span>
          </div>
          <div class="field" v-if="changeName">
            <div class="control">
              <input name="signupName" v-model="name" type="text" data-vv-delay="1000"
              :class="{'input': true, 'is-danger': errors.has('signupName') }"
              v-validate="'required|alpha_spaces'" placeholder="Name" @keyup.enter="changeNameMethod">
            </div>
          </div>
        </div>
        <div class="box b">
          <p class="title is-2">Email:</p>
          <p class="subtitle is-4">{{email}}</p>
        </div>
      </div>
      <div class="bottom">
        <div class="box c">
          <p class="title is-2">Password:</p>
          <div class="name-icon">
            <p class="button subtitle is-4" @click="changePassword = !changePassword">********</p>
            <span class="icon has-text-info" title="Click to Edit.">
              <i class="fa fa-info-circle"></i>
            </span>
          </div>
          <div class="field" v-if="changePassword">
            <div class="control">
              <input name="password" v-model="password" type="password" data-vv-delay="1000"
              :class="{'input': true, 'is-danger': errors.has('password') }"
              @keyup.enter="changePasswordMethod" v-validate="'required|min:8'" placeholder="********">
            </div>
          </div>
        </div>
        <div class="box d">
          <div class="large-icon" v-if="!changePassword" @click="logout">
            <span class="icon is-large">
              <i class="fa fa-3x fa-sign-out"></i>
            </span>
            <p class="subtitle is-4">Logout</p>
          </div>
          <div v-if="changePassword">
            <div class="field">
              <label class="label">Confirm Password</label>
              <div class="control">
                <input name="password_confirmation" v-model="password_confirmation" type="password"
                :class="{'input': true, 'is-danger': errors.has('password_confirmation') }"
                @keyup.enter="changePasswordMethod"
                v-validate="'required|confirmed:password'" placeholder="********" data-vv-delay="1000">
              </div>
            </div>
            <div class="logout">
              <span class="icon is-medium">
                <i class="fa fa-lg fa-sign-out"></i>
              </span>
              <p class="subtitle is-4">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/main';
export default {
  name: 'profile',

  created() {
    this.userProfile();
  },

  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      changeName: false,
      changePassword: false,
    }
  },

  methods: {
    userProfile() {
      api.userProfile()
      .then(response => {
        this.name = response.data.user.name;
        this.email = response.data.user.email;
      })
      .catch(error => {
        console.log(error);
      })
    },
    changeNameMethod() {
      this.changeName = false;
      this.$toasted.success('Name Updated Successfully', {
        theme: "outline",
        position: "top-center",
        duration : 3000
      });
    },
    changePasswordMethod() {
      this.$validator.validateAll({
        'password': this.password,
        'password_confirmation': this.password_confirmation
      })
      .then((result) => {
        // console.log(result);  //true or false
        if (result) {
          //go ahead.
          console.log('Password Changed');
        }
        else {
          this.$toasted.error('Please fill in the necessary details!', {
            theme: "outline",
            position: "bottom-center",
            duration : 3000
          });
        }
      });
    },

    logout() {
      this.$bus.$emit('logout');
    }

  }
}
</script>

<style lang="scss">
.profile {

  .box.inside-box-profile {
    padding: 0;
    margin: 0 auto;
    max-width: 50%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    .top {
      flex: 1 100%;
      display: flex;
      .box {
        border-radius: 2px;
        width: 50%;
        margin: 0;
        .button {
          padding: 0;
          border: none;
          margin: 0;
        }
        .subtitle.is-4 {
          cursor: default;
        }
      }
    }
    .bottom {
      flex: 1 100%;
      display: flex;
      .box {
        border-radius: 2px;
        width: 50%;
        margin: 0;
      }
    }
  }
  .box.a {
    .title {
      margin: 0;
    }
    .subtitle.is-4 {
      margin-bottom: 1rem;
    }
  }
  .name-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box.c {
    .title {
      margin: 0;
    }
    .subtitle.is-4 {
      margin-bottom: 0;
    }
    .button {
      padding: 0;
      border: none;
      margin: 0;
    }
    .subtitle.is-4 {
      cursor: default;
    }
  }

  .box.d {
    .large-icon {
      cursor: pointer;
    }
  }

  .logout {
    margin-left: 25%;
    margin-top: 7%;
    display: flex;
    align-items: center;
    .icon {
      margin-top: 6px;
    }
  }
}
</style>

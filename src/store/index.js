import { createStore } from 'vuex'
import axios from 'axios';
import router from '@/router/index.js'

export default createStore({

  state: () => ({
    users: [],

    loginUsername: '',
    loginPassword: '',

    userUrl: 'https://test-assignment.emphasoft.com/api/v1/users/',

    username: '',
    password: '',
    is_active: false
  }),
  
  actions: {
    GET_USERS({commit}) {
      return axios.get(this.state.userUrl, {
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`
        }
      }).then(res => {
        commit('SET_USERS_TO_VUEX', res.data)
      })
    },

    LOGIN_USER() {
      return axios.post('https://test-assignment.emphasoft.com/api/v1/login/', {
        username: this.state.loginUsername,
        password: this.state.loginPassword
      }). then(res => {
        const status = res.request.status
        const token = res.data.token
        if(status == '200') {
          localStorage.setItem('token', token)
          router.push('/userlist')
        }
      }).catch(err => {
        if(err) {
          console.log(err)
            router.push('/error')
        }
      })
    },

    ADD_USER() {
      const data = {
        username: this.state.username,
        password: this.state.password,
        is_active: this.state.is_active
      }
      const config = {
          headers: {
              Authorization: `Token ${localStorage.getItem('token')}`
          }
      }
      return axios.post(this.state.userUrl, data, config).then((res) => {
        const status = res.request.status
        if( status == '201') {
          this.state.username = ''
          this.state.password = ''
          router.push('/userlist')
        }
      }).catch((err) => {
          if(err) {
              router.push('/error')
          }
      })
    },
  },
    
  mutations: {
    SET_USERS_TO_VUEX: (state, users) => {
      state.users = users
    },

    UPDATE_LOGIN_USERNAME: (state, loginUsername) => {
      state.loginUsername = loginUsername
    }, 

    UPDATE_LOGIN_PASSWORD: (state, loginPassword) => {
      state.loginPassword = loginPassword
    },
    
    UPDATE_USERNAME: (state, username) => {
      state.username = username
    },

    UPDATE_PASSWORD: (state, password) => {
      state.password = password
    }
  },
  
  getters: {
    USERS(state) {
      return state.users;
    }
  },

})

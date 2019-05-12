export const user = {
  state: {
    token: null
  },
  reducers: {
    setToken(state, payload) {
      return {
        ...state,
        token: payload
      }
    }
  },
  effects: (dispatch) => ({
    async login(payload, rootState) {
      const token = 'dfdfkldshafdsoahgfoddsfgh4353rtytytiuoypsgdsgh';
      if (payload.username === 'demo' && payload.password === 'password') {
        return dispatch.user.setToken(token);
      }
      return Promise.reject("Username or password not found")
    },
    async logout(payload, rootState) {
      dispatch.user.setToken(null);
    }
  }),
  selectors: {
    isAuthenticated() {
      return (rootState, props) => rootState.user.token !== null;
    }
  }
}
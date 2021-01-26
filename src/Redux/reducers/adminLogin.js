import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    loginRequest: false,
    isAdmin: true,
  },
  reducers: {
    isAdmin: {
      reducer(state, action) {
        const { isAdmin } = action.payload;
        state.isAdmin = isAdmin;
      },
      prepare(isAdmin) {
        return { payload: { isAdmin } };
      },
    },
  },
});

export const { isAdmin } = adminSlice.actions;

// Не получилось сделать авторизацию из-за того, что не до конца разобрался с бэкендом

// export const adminLogin = createAsyncThunk('login/adminLogin', async (email, password) => {
//   const { data } = await API.post('/admin', email, password);
//   return data;
// });

// export const adminSlice = createSlice({
//   name: 'admin',
//   initialState: {
//     loginRequest: false,
//     isAdminLogged: false,
//   },
//   extraReducers: {
//     [adminLogin.pending]: state => {
//       state.loginRequest = true;
//     },
//     [adminLogin.fulfilled]: state => {
//       state.loginRequest = false;
//       state.isAdminLogged = true;
//     },
//   },
// });

export default adminSlice.reducer;

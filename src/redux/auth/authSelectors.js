export const selectLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectEmailUser = state => state.auth.user.email;
export const selectCurrent = state => state.auth.isCurrent;

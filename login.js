/**
 * This is a simple login form js code which will listen to the form submit event
 * and perform the login action through calling an external JSON API.
 * After logged in, it will set the result `userInfo` in the `user` object,
 * and also storing the info in localStorage.
 * The user can click on logout button to logout and clear the state and storage.
 */

const user = {
  userInfo: {},
  login(account, password) {
    fetch(`https://example.com/api/login?account=${account}&password=${password}`)
      .then(userInfo => {
        this.userInfo = userInfo;
      });

    window.localStorage.setItem('login', this.userInfo);
  },
  logout: () => {
    this.userInfo = {};

    window.localStorage.removeItem('login');
  },
};

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const { account, password } = e.target;
  const { login } = user;

  login(account, password);
});

document.getElementById('logout-button').addEventListener('click', user.logout);

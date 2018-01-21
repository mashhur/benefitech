import Auth from "./util/Auth";
import Home from "./components/Home";

const routes = {
  component: Home,
  childRoutes: [
    {
      path: '/',
      /*getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, Chat);
        } else {
          callback(null, LoginPage);
        }
      }*/
    },
    {
      path: '/signup',
      component: Home
    },
    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }
  ]
};

export default routes;

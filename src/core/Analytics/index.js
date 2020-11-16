import ReactGA from "react-ga";
import _get from "lodash/get";
const location = window.location;

export const RegisterPage = () => {
  const email = localStorage.getItem("permissions")
  const path = location && location.pathname ? location.pathname : "/";
  const page = `${path}${_get(location, "hash", "")}`;
  ReactGA.initialize("G-5XS5EEM8SD", {
    debug: false,
    titleCase: false,
    gaOptions: {
      name: "tracker1",
      userId: `${email}`,
    },
  });

  ReactGA.pageview(page);
  ReactGA.set({ userId: `${email}` }, ["tracker1"]);
  return ReactGA;
};
export default RegisterPage;

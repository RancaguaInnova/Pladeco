import { fetchUtils } from "react-admin";
import moleculerDataProvider from "moleculer-data-provider";
import url from "./url";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({
      Accept: "application/json"
    });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", `Bearer ${token}`);
  options.headers.set("X-Origin", "backoffice");
  // add your own headers here
  try {
    var response = fetchUtils.fetchJson(url, options);
    return response;
  } catch (error) {
    throw new Error({
      message: error.message_,
      status: 401
    });
  }
};

const dataProvider = moleculerDataProvider(url, httpClient);
export default dataProvider;

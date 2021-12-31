import axios from "axios";

const fetchToken = () =>
  Array.from(document.getElementsByTagName("meta")).find(
    (e) => e.name === "csrf-token"
  ).content;

const instance = axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "X-CSRF-Token": fetchToken(),
  },
});

export default instance;

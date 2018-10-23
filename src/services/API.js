import axios from "axios";
import config from "../config/config";
let { server } = config;
let serverRoot = `${server.protocol}://${server.host}:${server.port}`;

const API = {
  createRoom: body =>
    axios.post(serverRoot + "/rooms", body).then(response => response.data),
  loadRoom: id =>
    axios.get(serverRoot + "/rooms/" + id).then(response => response.data),
  newUUID: body =>
    axios.post(serverRoot + "/uuid", body).then(response => response.data),
  newUUIDS: body =>
    axios.post(serverRoot + "/uuid_bulk", body).then(response => response.data)
};

export default API;

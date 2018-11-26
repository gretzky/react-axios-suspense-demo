import axios from "axios";
import { unstable_createResource as createResource } from "react-cache";

const fetcher = createResource(async path => {
  return await axios
    .get(path)
    .then(response => response.data)
    .then(data => data);
});

export default fetcher;

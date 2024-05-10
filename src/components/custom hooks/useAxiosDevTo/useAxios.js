import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  console.log(axiosParams);

  const fetchData = async (params) => {
    try {
      //   const response = await axios.get("/posts");
      // use axios.request and pass params - will automatically use the passed http params object
      // from use axios invocation
      // instead of manually passing url method headers etc. params takes all and uses them in request
      const response = await axios.request(params);
      setResponse(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, loading };
};

export default useAxios;

// better version above using axios.request

// const fetchData = async () => {
//     try {
//       //   const response = await axios.get("/posts");
//       const response = await axios[method](
//         url,
//         JSON.parse(headers),
//         JSON.parse(body)
//       );
//       setResponse(response);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setloading(false);
//     }
//   };

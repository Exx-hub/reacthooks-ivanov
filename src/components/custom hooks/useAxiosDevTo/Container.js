import { useState, useEffect } from "react";
// import axios from "axios";

import useAxios from "./useAxios";

// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const Container = () => {
  //   const [response, setResponse] = useState(null);
  //   const [error, setError] = useState("");
  //   const [loading, setloading] = useState(true);

  //   console.log({
  //     response,
  //     error,
  //     loading,
  //   });

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/posts");
  //       setResponse(response);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setloading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  // sample get request for users instead of posts

  const { response, error, loading } = useAxios({
    url: "/users",
    method: "get",
  });

  // sample post request to /posts
  //   const { response, error, loading } = useAxios({
  //     url: "/posts",
  //     method: "post",
  //     headers: { accept: "*/*" },
  //     body: {
  //       userId: 1,
  //       id: 19392,
  //       title: "title",
  //       body: "Sample text",
  //     },
  //   });

  //   console.log({
  //     response,
  //     error,
  //     loading,
  //   });

  return (
    <div className="App">
      <h1>Users</h1>

      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {error ? (
            <div>
              <p>{error.message}</p>
            </div>
          ) : (
            <div>
              {response.length > 0 && (
                <ul>
                  {response.map((item, i) => (
                    <li key={i}>{item.name}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Container;

// logic above related to fetching data, saving fetched data to state, useEffect to invoke fetchData
// are all moved to a different function (useAxios) which is a custom hook.
// that returns the values you previously needed - response,loading and error.
// basically custom hook is just a component or a function that returns values instead of jsx

import React, { useEffect, useState } from "react";
import useAxios from "./useAxios";

const Container2 = () => {
  const { response, error, loading } = useAxios({
    url: "/posts",
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log({
    response,
    error,
    loading,
  });
  return (
    <div>
      <h2>Posts</h2>
      {loading ? (
        <div>Loading..</div>
      ) : (
        <div>
          {error ? (
            <div>{error.message}</div>
          ) : (
            <div>
              <ul>
                {response.map((item, i) => (
                  <li key={i}>{item.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Container2;

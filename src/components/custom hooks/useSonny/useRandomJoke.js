import { useEffect, useState } from "react";

const useRandomJoke = () => {
  const [joke, setJoke] = useState(null);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const fetchJoke = async () => {
    const fn = input1 || "alvin";
    const ln = input2 || "acosta";

    const response = await fetch(
      `http://api.icndb.com/jokes/random?firstName=${fn}&lastName=${ln}`
    );
    const data = await response.json();
    setJoke(data.value.joke);
    console.log(data);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return { joke, fetchJoke, input1, input2, setInput1, setInput2 };
};

export default useRandomJoke;

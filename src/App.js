import logo from "./logo.svg";
import "./App.css";
import Container from "./components/custom hooks/useAxiosDevTo/Container";
import Container2 from "./components/custom hooks/useAxiosDevTo/Container2";
import GoodExample from "./components/hooks/useCallback/GoodExample";
import MemoCounter from "./components/hooks/useMemo/MemoCounter";
import AppPerformanceLag from "./components/hooks/useMemo/AppPerformanceLag";
import ReducerCounter from "./components/hooks/useReducer/ReducerCounter";
import Container3 from "./components/custom hooks/useLoginExample/Container3";
import JokeContainer from "./components/custom hooks/useSonny/JokeContainer";
import Counter from "./components/invanov custom hooks/customState/Counter";
import Mouse from "./components/invanov custom hooks/useMousePosition/Mouse";

function App() {
  return (
    <div className="App">
      {/* useAxiosHook custom hook  */}
      {/* <Container /> */}
      {/* <Container2 /> */}
      {/* <Container3 /> */}

      {/* useCallback example  */}
      {/* <GoodExample /> */}

      {/* useMemo Examples */}
      {/* <MemoCounter /> */}
      {/* <AppPerformanceLag /> */}

      {/* useReducer  */}
      {/* <ReducerCounter /> */}

      {/* basic custom hook  */}
      {/* <JokeContainer /> */}

      <Counter />
      {/* <Mouse /> */}
    </div>
  );
}

export default App;

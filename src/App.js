import Input from "./components/input/Input";
import Media from "./components/Media";
import { loadItems } from "./store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Redux</h1>
      <Input />
      <Media />
    </div>
  );
};

export default App;

import Input from "./components/input/Input";
import Media from "./components/Media";
import { loadItems } from "./store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import List from "./List";
import AddInput from "./components/input/AddInput";

// function App() {
//   return (
//           <div className="App">
//             <Input />
//             <Media></Media>
//           </div>
//   );
// }

// export default App;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Redux</h1>
      <AddInput />
      <List/>
      <Input />
      <Media />
    </div>
  );
};

export default App;

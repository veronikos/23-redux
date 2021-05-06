import { useSelector } from "react-redux";

const List = () => {
  const items = useSelector((state) => state.items);

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default List;

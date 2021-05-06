import { useDispatch } from "react-redux";
import { addItems } from "../../store";
import classNames from 'classnames';
import { button, input } from "./Input.module.css";

const AddInput = () => {
  const dispatch = useDispatch();
  let addText = null

  return (
    <div>
      <input className={classNames(input)} onChange={(event) => addText = event.target.value} />
      <button className={classNames(button)} onClick={(event) => dispatch(addItems(addText))}>Add item</button>
    </div>
  );
};

export default AddInput;

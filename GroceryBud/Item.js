import { FaEdit, FaTrash } from "react-icons/fa";
import "./Item.css";

let Item = ({ item, removeHandler, editHandler }) => {
  return (
    <div>
      <p className="para">{item.value}&nbsp;&nbsp;</p>
      <button
        onClick={(e) => {
          return editHandler(item.id);
        }}
        className="btn1"
      >
        <FaEdit />
      </button>
      <button
        className="btn1"
        onClick={(e) => {
          return removeHandler(item.id);
        }}
      >
        <FaTrash />
      </button>
    </div>
  );
};
export default Item;

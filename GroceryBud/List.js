import Item from "./Item";

let List = ({ list, removeHandler, editHandler }) => {
  return (
    <div>
      {list.map((val) => {
        return (
          <Item
            key={val.id}
            item={val}
            removeHandler={removeHandler}
            editHandler={editHandler}
          />
        );
      })}

      {/* {JSON.parse(localStorage.getItem("list")).map((val) => {
        return (
          <Item
            key={val.id}
            item={val}
            removeHandler={removeHandler}
            editHandler={editHandler}
          />
        );
      })} */}
    </div>
  );
};

export default List;

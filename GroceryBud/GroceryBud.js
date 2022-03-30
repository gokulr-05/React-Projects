import { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import "./GroceryBud.css";
// import "./index.css";

let GroceryBud = () => {
  let localStore = () => {
    let store = JSON.parse(localStorage.getItem("list"));

    console.log(store);
    if (store) {
      return store;
    } else return [];
  };

  let [alert, setAlert] = useState({ show: false, msg: "" });
  let [clearAll, setClearAll] = useState(false);
  let [indexx, setIndexx] = useState(null);
  let [edit, setEdit] = useState(false);
  let [value, setValue] = useState("");
  let [list, setList] = useState(localStore());
  //console.log(list);

  useEffect(() => {
    if (list.length > 0) {
      setClearAll(true);
    } else {
      setClearAll(false);
    }
  }, [list]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  let clearAllHandler = (e) => {
    setList([]);
    setAlert({ show: true, msg: "Empty List" });
  };

  let removeHandler = (id) => {
    let arr = list.filter((val) => {
      return val.id !== id;
    });
    setList(arr);
    setAlert({ show: true, msg: "Item Removed" });
  };

  let editChangeHandler = (e) => {
    let arr = [...list];
    arr[indexx].value = value;
    setList(arr);
    setEdit(false);
    setIndexx(null);
    setValue("");
    setAlert({ show: true, msg: "Value Changed" });
  };

  let editHandler = (id) => {
    setEdit(true);
    console.log("edit handler", id);
    let ind = list.findIndex((val) => {
      return val.id === id;
    });

    setIndexx(ind);
    setValue(list[ind].value);
  };

  let submitHandler = (event) => {
    event.preventDefault();
    //console.log(value);
    setList((prev) => {
      return [...prev, { id: Math.random(), value: value }];
    });
    setValue("");
    setAlert({ show: true, msg: "Item Added" });
    // localStorage.setItem("list", JSON.stringify(list));
  };

  return (
    <div className="grocery">
      {alert.show && <Alert setAlert={setAlert} alert={alert} list={list} />}
      <h2>TO DO LIST</h2>
      <form>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="input"
        />
        {!edit && (
          <button type="button" className="btn" onClick={submitHandler}>
            Submit
          </button>
        )}
        {edit && (
          <button type="button" className="btn" onClick={editChangeHandler}>
            Edit
          </button>
        )}
      </form>
      <List
        list={list}
        removeHandler={removeHandler}
        editHandler={editHandler}
      />
      <br />

      {clearAll && (
        <button onClick={clearAllHandler} className="btn">
          Clear All
        </button>
      )}
    </div>
  );
};
export default GroceryBud;

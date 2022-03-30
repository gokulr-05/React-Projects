import { useEffect } from "react";

let Alert = ({ alert, setAlert, list }) => {
  console.log(alert.msg);

  useEffect(() => {
    let t = setTimeout(() => {
      setAlert({ show: false, msg: "" });
    }, 3000);

    return () => {
      clearTimeout(t);
    };
  }, [list]);

  return <p>{alert.msg}</p>;
};

export default Alert;

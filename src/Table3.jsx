import React, { useContext } from "react";
import { UserContext } from "./Table";
const Table3 = () => {
  const user = useContext(UserContext);
  return (
    <div className="absolute pl-48 top-32 box">
      <h1>TABLES 3 useContext passed value from table 1</h1>
      <h2 className="text-dark-green bg-black">{`bye${user}`}</h2>
    </div>
  );
};

export default Table3;

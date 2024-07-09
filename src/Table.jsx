import React, { useState, createContext } from "react";
import Table2 from "./Table2";

export const UserContext = createContext();
const Table = () => {
  const [user, setUser] = useState("wanpyn");

  return (
    <div className="absolute pl-48 top-32 box">
      <h1>TABbles 1 useContext</h1>
      <h2 className="text-dark-green bg-black">{`helo ${user}`}</h2>
      <UserContext.Provider value={user}>
        <Table2 user={user} />
      </UserContext.Provider>
    </div>
  );
};

export default Table;

import { useState } from "react";
import { createContext } from "react";

const userContext = createContext();

export const UserProvider = ({ children }) => {
 const [token, setToken] = useState(() => {
  return localStorage.getItem("session_token") || null;
});
 const [user, setUser] = useState(() => {
  return JSON.parse(localStorage.getItem("currUser")) || null;
});

  return (
    <userContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;

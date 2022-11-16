import { createContext, useContext, useMemo, useState } from "react";

export const UserContext = createContext({ email: "" });

export const useUserContext = () => {
  return useContext(UserContext);
};

export default function UserContextProvider({ children }) {
  const value = useMemo(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      return { email: user.email };
    } catch (e) {
      return { email: "" };
    }
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export function useUser() {
  const value = useContext(UserContext);

  return value;
}
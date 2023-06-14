import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../../api/firebase";

const AuthContext = createContext();
// const LOADING_STATE = "loading";

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  //   const [user, setUser] = useState(LOADING_STATE)  // Loading 처리할 떄
  // 이전에 로그인한 세션 저장
  useEffect(() => {
    // onUserStateChange((user) => {
    //   setUser(user);
    // });

    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    }); // 인자값이 같으면 참조값만 전달해도 됨!
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: login,
        logout: logout,
        // loading: user === LOADING_STATE,     // 로딩처리 할 때
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

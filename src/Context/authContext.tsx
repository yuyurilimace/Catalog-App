import { createContext, useState } from "react";

const AuthContext = createContext<{
  userToken: string;
  setUserToken: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userToken, setUserToken] = useState<string>("");
  return (
    <AuthContext value={{ userToken: userToken, setUserToken: setUserToken }}>
      {children}
    </AuthContext>
  );
};

export { AuthProvider, AuthContext };

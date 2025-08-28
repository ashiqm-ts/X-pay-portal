"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ChildrenProps } from "../helper-function/PropTypes";

type AuthProps = {
  token: string | null;
  refreshToken: string | null;
  instnId: number;
  sidebar: boolean;
  updateToken: (token: string, refreshToken: string) => void;
  setSidebar: (value: boolean) => void;
  setInstnId: (value: number) => void;
};

const AuthContext = createContext<AuthProps | undefined>(undefined);

const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [sidebar, setSidebar] = useState<boolean>(true);
  const [instnId, setInstnId] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(sessionStorage.getItem("token"));
      setRefreshToken(sessionStorage.getItem("refreshToken"));
      setInstnId(Number(sessionStorage.getItem("instnId")) || 0);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (token) {
      sessionStorage.setItem("token", token);
    } else {
      sessionStorage.removeItem("token");
    }

    if (refreshToken) {
      sessionStorage.setItem("refreshToken", refreshToken);
    } else {
      sessionStorage.removeItem("refreshToken");
    }

    if (instnId) {
      sessionStorage.setItem("instnId", instnId.toString());
    } else {
      sessionStorage.removeItem("instnId");
    }
  }, [token, refreshToken, instnId]);

  const updateToken = (newToken: string, newRefreshToken: string) => {
    setToken(newToken);
    setRefreshToken(newRefreshToken);
  };

  const contextValue: AuthProps = useMemo(
    () => ({
      token,
      refreshToken,
      updateToken,
      sidebar,
      setSidebar,
      instnId,
      setInstnId,
    }),
    [token, refreshToken, sidebar, instnId]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export default AuthProvider;

import React, { ReactNode, useEffect } from "react";

import { Loader } from "components/Loader";
import { useLocation } from "react-router-dom";

type LoaderContextProps = {
  setIsVisible: (isVisible: boolean) => void;
  isVisible: boolean;
};

const LoaderContext = React.createContext<LoaderContextProps | undefined>(
  undefined
);

export const LoaderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [isNavigating, setIsNavigating] = React.useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    setIsNavigating(true);
    setTimeout(() => {
      setIsNavigating(false);
    }, 500);
  }, [location.pathname]);

  return (
    <LoaderContext.Provider value={{ setIsVisible, isVisible }}>
      {<Loader isVisible={isNavigating || isVisible} />}
      {children}
    </LoaderContext.Provider>
  );
};
export function useLoaderContext() {
  const context = React.useContext(LoaderContext);

  if (typeof context === "undefined") {
    throw new Error(
      "useLoaderContext must be used within a LoaderMessageProvider"
    );
  }
  return context;
}

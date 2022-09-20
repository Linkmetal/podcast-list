import React, { ReactNode } from "react";

import { Loader } from "components/Loader";

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

  return (
    <LoaderContext.Provider value={{ setIsVisible, isVisible }}>
      {isVisible && <Loader isVisible={isVisible} />}
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

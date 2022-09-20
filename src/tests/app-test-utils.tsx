import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactElement, ReactNode } from "react";
import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { LoaderProvider } from "contexts/LoaderContext/LoaderContext";
import { MemoryRouter } from "react-router-dom";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      useErrorBoundary: false,
    },
  },
});

export const render = (
  component: ReactElement,
  route?: string,
  { ...renderOptions }: any = {}
) => {
  const Wrapper = ({ children }: { children: ReactNode; route: string }) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route || "/"]}>
        <LoaderProvider>{children}</LoaderProvider>
      </MemoryRouter>
    </QueryClientProvider>
  );

  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
};

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(() => [...screen.queryAllByRole("progressbar")], {
    timeout: 4000,
  });

// re-export everything
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

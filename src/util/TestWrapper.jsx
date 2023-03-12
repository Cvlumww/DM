import { AppProvider } from "../AppContext";

const TestWrapper = (children) => {
  return <AppProvider>{children}</AppProvider>;
};

export default TestWrapper;

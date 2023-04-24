import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/errorBoundary";
import { router } from "./pages/router";

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;

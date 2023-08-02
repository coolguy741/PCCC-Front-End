import { isMobile } from "react-device-detect";
import { RouterProvider } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import ErrorBoundary from "./components/ErrorBoundary/errorBoundary";
import { MobilePage } from "./pages/MobilePage";
import { router } from "./pages/router";

function App() {
  return isMobile ? (
    <MobilePage />
  ) : (
    <ErrorBoundary>
      <Tooltip id="my-tooltip" />
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;

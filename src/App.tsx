import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import WebRouter from "./Router/WebRouter";
import AppLayout from "./Components/Layout/AppLayout";

const App: FC = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <WebRouter />
      </BrowserRouter>
    </AppLayout>
  );
};
export default App;

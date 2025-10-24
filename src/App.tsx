import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import WebRouter from "./Router/WebRouter";
import AppLayout from "./Components/Layout/AppLayout";

const App: FC = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <WebRouter />
      </AppLayout>
    </BrowserRouter>
  );
};
export default App;

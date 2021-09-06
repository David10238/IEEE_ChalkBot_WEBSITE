
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DiagnosticsGUI from "./components/DiagnosticsGUI";
import MainGUI from "./components/MainGUI";
import Error404 from "./Error404";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainGUI} />
        <Route path="/more" exact component={DiagnosticsGUI} />
        <Route path="/" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

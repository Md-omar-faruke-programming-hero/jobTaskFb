import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Component/HomePage/Homepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

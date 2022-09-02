import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Component/HomePage/Homepage";
import RightSideContent from "./Component/RightSideContent/RightSideContent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>

          <Route exact path="/right">
            <RightSideContent></RightSideContent>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Component/HomePage/Homepage";
import LeftSideContent from "./Component/LeftSideContent/LeftSideContent";
import MiddleContent from "./Component/MiddleContent/MiddleContent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route exact path="/leftside">
            <LeftSideContent></LeftSideContent>
          </Route>
          <Route exact path="/middle">
            <MiddleContent></MiddleContent>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

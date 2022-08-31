import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Component/HomePage/Homepage";
import LeftSideContent from "./Component/LeftSideContent/LeftSideContent";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

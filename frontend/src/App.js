import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Chart from "./components/Chart";
import MyLayout from './components/common/MyLayout';
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <Router>
          <Switch>
          <MyLayout>
            <Route exact path="/" component={Chart} />
            <Route path="/summary" component={Summary} />
            </MyLayout>
          </Switch>
        </Router>
    </>
  );
}

export default App;

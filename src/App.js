import { BrowserRouter as Router, Route } from "react-router-dom";
import CheckOut from "./components/checkout/CheckOut";
import Shop from "./components/Shop";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Shop} />
      <Route path="/checkout" component={CheckOut} />
    </Router>
  );
}

export default App;

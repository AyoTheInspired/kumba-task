import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/orders" component={Orders} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

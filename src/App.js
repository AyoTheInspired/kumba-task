import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<div className="app">
				<Header />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

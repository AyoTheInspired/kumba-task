import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import { useStateValue } from "./data-layer/StateProvider";

function App() {
	const [{}, dispatch] = useStateValue();
	const fetchData = async () => {
		const response = await axios
			.get("https://indapi.kumba.io/webdev/assignment")
			.catch((err) => {
				alert(err);
			});
		dispatch({ type: "GET_DATA", payload: response?.data });
	};
	useEffect(() => {
		fetchData();
	}, []);

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

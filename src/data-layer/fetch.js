import { useStateValue } from "./StateProvider";

export const useFetchData = async () => {
	const [{}, dispatch] = useStateValue();

	return await fetch("https://indapi.kumba.io/webdev/assignment")
		.then((res) => res.json())
		.then((data) => {
			dispatch({
				type: "GET_DATA",
				payload: data,
			});

			// console.log(data);
		})
		.catch((err) =>
			dispatch({
				type: "IS_ERROR",
				payload: err,
			})
		);
};

// useEffect(() => {
// 	fetchData();
// }, []);

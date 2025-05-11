import "./App.css";
import TicketPage from "./page/TicketPage";
import AddPage from "./page/AddPage/AddPage";
import MainPage from "./page/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router basename="/sdanyil-test-app">
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/add" element={<AddPage />} />
				<Route path="/ticket" element={<TicketPage />} />
			</Routes>
		</Router>
	);
}

export default App;

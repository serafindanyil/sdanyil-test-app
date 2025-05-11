import { useNavigate } from "react-router-dom";
import clases from "./MainPage.module.scss";
import Button from "~/components/Button/Button";

const MainPage = () => {
	const navigate = useNavigate();
	return (
		<div className={clases.container}>
			<h1>Main Page</h1>
			<p>Welcome to the main page!</p>
			<div className="align-button__bottom">
				<div className={clases.wrapper__button}>
					<Button onClick={() => navigate("/add")} className={clases.button}>
						Додати квитка
					</Button>
					<Button onClick={() => navigate("/ticket")} className={clases.button}>
						Перейти до квитків
					</Button>
				</div>
			</div>
		</div>
	);
};
export default MainPage;
// import React from "react"

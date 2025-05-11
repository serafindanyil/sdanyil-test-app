import { useDispatch } from "react-redux";
import type { FormEvent } from "react";
import { cardActions } from "~/store/card/cardSlice";
import type { TCard } from "~/types/Card";
import Button from "~/components/Button/Button";
import classes from "./AddPage.module.scss";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;

		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}

		const formData = new FormData(form);

		const сard: TCard = {
			serialNumber: Number(formData.get("serialNumber")),
			vagonNumber: Number(formData.get("vagonNumber")),
			passagers: Number(formData.get("passagers")),
		};

		dispatch(cardActions.addCard(сard));
		navigate("/ticket");
	};

	return (
		<div className={classes.container}>
			<h1 className="mb-2_8">Add ticket</h1>
			<form onSubmit={handleSubmit} className={classes.form}>
				<input
					name="serialNumber"
					type="text"
					placeholder="Serial Number"
					pattern="\d{8}"
					title="Має бути рівно 8 цифр"
					defaultValue="23821503"
					required
				/>
				<input
					name="vagonNumber"
					type="text"
					placeholder="Vagon Number"
					pattern="\d{4}"
					title="Має бути рівно 4 цифри"
					required
				/>
				<input
					name="passagers"
					type="text"
					placeholder="Passenges"
					pattern="\d"
					title="Має бути лише 1 цифра"
					defaultValue="1"
					required
				/>
				{/* важливо: переконайся, що Button передає type у <button> */}
				<Button type="submit" className="align-button__bottom">
					Далі
				</Button>
			</form>
		</div>
	);
};

export default AddPage;

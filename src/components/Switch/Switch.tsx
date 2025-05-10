import { useState } from "react";
import classes from "./Switch.module.scss";

interface SwitchProps {
	firstButton: string;
	secondButton: string;
	className?: string;
}

const Switch = ({ firstButton, secondButton, className }: SwitchProps) => {
	const [active, setActive] = useState(firstButton);

	const isFirstActive = active === firstButton;
	const isSecondActive = active === secondButton;

	return (
		<div className={`${classes.switch} ${className}`}>
			<div
				className={`${classes.indicator} ${
					isSecondActive ? classes.second : ""
				}`}
			/>
			<button
				className={`${classes.button} ${
					isFirstActive ? classes.button__active : ""
				}`}
				onClick={() => setActive(firstButton)}>
				{firstButton}
			</button>
			<button
				className={`${classes.button} ${
					isSecondActive ? classes.button__active : ""
				}`}
				onClick={() => setActive(secondButton)}>
				{secondButton}
			</button>
		</div>
	);
};

export default Switch;

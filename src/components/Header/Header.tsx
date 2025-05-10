import Arrow from "../../assets/arrow-back.svg?react";
import classes from "./Header.module.css";

type HeaderProps = {
	currentPage: string;
	className?: string;
};

const Header = ({ currentPage }: HeaderProps) => {
	return (
		<div className={classes.header}>
			<Arrow className={classes.icon} height={24} width={24} />
			<h3 className={classes.title}>{currentPage}</h3>
		</div>
	);
};

export default Header;

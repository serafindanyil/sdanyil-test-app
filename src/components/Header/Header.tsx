import Arrow from "../../assets/arrow-back.svg?react";
import classes from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
	currentPage: string;
	className?: string;
}

const Header = ({ currentPage, className }: HeaderProps) => {
	const navigate = useNavigate();
	return (
		<div className={`${classes.header} ${className}`}>
			<Arrow height={24} width={24} className={classes.icon__left} />
			<h3 className={classes.title}>{currentPage}</h3>
			<Arrow
				height={24}
				width={24}
				className={classes.icon__right}
				onClick={() => navigate("/")}
			/>
		</div>
	);
};

export default Header;

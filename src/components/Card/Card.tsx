import classes from "./Card.module.scss";
import LvivLogo from "../../assets/lviv-logo.svg?react";
import TicketLogo from "../../assets/ticket-logo.svg?react";

interface CardProps {
	className?: string;
}

const Card = ({ className }: CardProps) => {
	return (
		<div className={`${classes.card} ${className}`}>
			<div className={classes.info}>
				<div className={classes.icon__small}>
					<LvivLogo height={68} width={68} />
				</div>
				<div className={classes.wrapper__info}>
					<span className={classes.lviv__title}>Львів</span>
					<span className={classes.lvivavto__title}>ЛЬВІВЕЛЕКТРОТРАНС</span>
					<span className={classes.seriya__title}>
						Серія <b>23821503</b>
					</span>
				</div>
			</div>
			<div className={classes.icon__big}>
				<TicketLogo height={142} width={142} />
			</div>
			<div className={classes.descripton}>
				<div className={classes.wrapper__vagon}>
					<span className={classes.tram_number}>№1178</span>
					<span className={classes.label__vagon}>Вагон</span>
				</div>
				<div className={classes.wrapper__description}>
					<div className={classes.wrapper__block}>
						<span className={classes.label}>Дата</span>
						<span className={classes.text}>08.05.2025</span>
					</div>
					<div className={classes.wrapper__block}>
						<span className={classes.label}>Час</span>
						<span className={classes.text}>14:19:43</span>
					</div>
					<div className={classes.wrapper__block}>
						<span className={classes.label}>Пасажири</span>
						<span className={classes.text}>1</span>
					</div>
				</div>
				<span className={classes.title}>Квиток разового використання</span>
				<span className={classes.time}>59:50</span>
			</div>
		</div>
	);
};

export default Card;

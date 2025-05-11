import classes from "./Card.module.scss";
import LvivLogo from "../../assets/lviv-logo.svg?react";
import TicketLogo from "../../assets/ticket-logo.svg?react";
import type { TCard } from "~/types/Card";

const Card = ({
	serialNumber,
	vagonNumber,
	date,
	time,
	passagers,
	isActive,
	className,
}: TCard) => {
	return (
		<div className={className}>
			<div
				className={`${classes.card} ${
					!isActive ? classes.card__disabled : null
				} `}>
				<div className={classes.info}>
					<div className={classes.icon__small}>
						<LvivLogo height={68} width={68} />
					</div>
					<div className={classes.wrapper__info}>
						<span className={classes.lviv__title}>Львів</span>
						<span className={classes.lvivavto__title}>ЛЬВІВЕЛЕКТРОТРАНС</span>
						<span className={classes.seriya__title}>
							Серія <b className={classes.seriya__bold}>{serialNumber}</b>
						</span>
					</div>
				</div>
				<div className={classes.icon__big}>
					<TicketLogo height={142} width={142} />
				</div>
				<div className={classes.descripton}>
					<div className={classes.wrapper__vagon}>
						<span className={classes.tram_number}>{`№${vagonNumber}`}</span>
						<span className={classes.label__vagon}>Вагон</span>
					</div>
					<div className={classes.wrapper__description}>
						<div className={classes.wrapper__block}>
							<span className={classes.label}>Дата</span>
							<span className={classes.text}>{date}</span>
						</div>
						<div className={classes.wrapper__block}>
							<span className={classes.label}>Час</span>
							<span className={classes.text}>{time}</span>
						</div>
						<div className={classes.wrapper__block}>
							<span className={classes.label}>Пасажири</span>
							<span className={classes.text}>{passagers}</span>
						</div>
					</div>
					<span className={classes.title}>Квиток разового використання</span>
					{isActive && <span className={classes.time}>59:50</span>}
				</div>
			</div>
		</div>
	);
};

export default Card;

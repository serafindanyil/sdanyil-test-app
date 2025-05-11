import Header from "../components/Header/Header";
import Switch from "../components/Switch/Switch";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import { useSelector } from "react-redux";
import type { RootState } from "~/store/store.ts";
import type { TCard } from "~/types/Card";

const TicketPage = () => {
	const items = useSelector((state: RootState) => state.card.items as TCard[]);

	return (
		<>
			<div className="padding-mobile">
				<Header currentPage="Архів" />
			</div>
			<div className="padding-mobile">
				<Switch
					firstButton="Квиток"
					secondButton="Проїзний"
					className="mb-_5 padding-mobile"
				/>
			</div>
			<article className="overflow-y">
				{items.map((card, index) => (
					<Card
						{...card}
						key={index}
						className="padding-mobile mb-2_8 mt-1_4"
					/>
				))}
			</article>
			<Button className="align-button__bottom">Відсканувати QR-код</Button>
		</>
	);
};

export default TicketPage;

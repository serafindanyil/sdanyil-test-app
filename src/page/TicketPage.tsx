import Header from "../components/Header/Header";
import Switch from "../components/Switch/Switch";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";

const TicketPage = () => {
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
				<Card className="padding-mobile mt-1_4" />
				<Card isActive={false} className="padding-mobile mb-2_8 " />
			</article>
			<Button className="align-button__bottom">Відсканувати QR-код</Button>
		</>
	);
};

export default TicketPage;

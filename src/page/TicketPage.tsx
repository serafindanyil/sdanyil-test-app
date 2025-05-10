import Header from "../components/Header/Header";
import Switch from "../components/Switch/Switch";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";

const TicketPage = () => {
	return (
		<>
			<Header currentPage="Архів" />
			<Switch firstButton="Квиток" secondButton="Проїзний" className="mb-1_9" />
			<Card />
			<Button className="align-button__bottom">Відсканувати QR-код</Button>
		</>
	);
};

export default TicketPage;

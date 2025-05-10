import clases from "./Button.module.scss";

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
	return (
		<div className={className}>
			<button className={`${clases.button}`}>{children}</button>
		</div>
	);
};

export default Button;

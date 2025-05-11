import clases from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
	return (
		<div className={className}>
			<button className={`${clases.button}`} {...rest}>
				{children}
			</button>
		</div>
	);
};

export default Button;

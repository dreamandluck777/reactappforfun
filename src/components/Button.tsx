interface ButtonProps {
  buttonText: string;
    onClick?: () => void;
    className?: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ buttonText, onClick, className}) => <button className = {className} onClick={onClick}>{buttonText}</button>;
  
  export default Button;
import { styled } from "styled-components";

const Button = styled.button`
  min-width: 296px;
  padding: 14px 4px;
  text-align: center;

  font-size: 18px;
  line-height: 26px;
  color: ${(props) => props.theme.colors.white};
  background: linear-gradient(33deg, #ffcc21 0%, #ff963c 100%);
  border-radius: 4px;
`;

type ButtonProps = {
  buttonContent: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
  buttonType?: "button" | "reset" | "submit";
};

const ButtonComponent: React.FC<ButtonProps> = ({
  buttonContent,
  buttonType = "button",
  className = "",
  onClick = () => null,
}) => (
  <Button type={buttonType} className={className} onClick={onClick}>
    {buttonContent}
  </Button>
);

export default ButtonComponent;

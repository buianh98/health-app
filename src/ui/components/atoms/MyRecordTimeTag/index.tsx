import { styled } from "styled-components";

const MyRecordTimeTag = styled.span`
  padding: 2px 21px;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary300};
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.075px;
  border-radius: 11px;
  cursor: pointer;

  &.active {
    background: ${(props) => props.theme.colors.primary300};
    color: ${(props) => props.theme.colors.white};
  }
`;

type MyRecordTimeTagType = {
  title: string;
  className?: string;
};

export const MyRecordTimeTagComponent: React.FC<MyRecordTimeTagType> = ({
  title,
  className = "",
}) => <MyRecordTimeTag className={className}>{title}</MyRecordTimeTag>;

export default MyRecordTimeTagComponent;

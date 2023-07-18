import { styled } from "styled-components";
import Typography from "../../atoms/Typography";
import theme from "../../../../utils/styles/theme";

const MyRecordCard = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.theme.colors.primary300};
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .content-box {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .description {
    padding: 2px 12px;
    background: ${(props) => props.theme.colors.primary400};
    margin-bottom: 0;
  }

  .image-wrapper {
    background: ${(props) => props.theme.colors.black};
    width: 100%;
    height: 100%;
  }

  .image {
    opacity: 0.25;
    width: 100%;
    padding-top: 100%;

    mix-blend-mode: luminosity;
  }
`;

type MyRecordCardProps = {
  title: string;
  image: string;
  description: string;
  onClick?: () => void;
  className?: string;
};

const MyRecordCardComponent: React.FC<MyRecordCardProps> = ({
  title,
  description,
  image,
  className = "",
  onClick = () => null,
}) => {
  return (
    <MyRecordCard className={className} onClick={onClick}>
      <div className="image-wrapper">
        <div
          className="image"
          style={{
            background: `url(${image}) lightgray 0px 0px / 100% 100% no-repeat`,
            backgroundImage: image,
          }}
        />
      </div>

      <div className="content">
        <div className="content-box">
          <Typography
            fontSize="25px"
            lineHeight="30px"
            fontWeight={400}
            letterSpacing="0.125px"
            component="h3"
            color={theme.colors.primary300}
            className="font-inter"
          >
            {title}
          </Typography>

          <Typography
            fontSize="14px"
            lineHeight="20px"
            component="p"
            color={theme.colors.white}
            className="description"
          >
            {description}
          </Typography>
        </div>
      </div>
    </MyRecordCard>
  );
};

export default MyRecordCardComponent;

import { styled } from "styled-components";

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

  .title {
    color: ${(props) => props.theme.colors.primary300};
    font-family: Inter;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.125px;
    font-weight: 400;
  }

  .description {
    padding: 2px 12px;
    background: ${(props) => props.theme.colors.primary400};
    color: ${(props) => props.theme.colors.white};
    font-size: 14px;
    line-height: 20px;
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
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
      </div>
    </MyRecordCard>
  );
};

export default MyRecordCardComponent;

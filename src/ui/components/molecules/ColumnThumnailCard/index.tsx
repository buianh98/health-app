import { styled } from "styled-components";

const ColumnThumnailCard = styled.div`
  width: 100%;

  .image-wrapper {
    width: 100%;
    aspect-ratio: 3/2;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__tag {
      bottom: 0;
      left: 0;
      position: absolute;
      padding: 0 8px;
      background: ${(props) => props.theme.colors.primary300};
      color: ${(props) => props.theme.colors.white};
      font-size: 15px;
      line-height: 22px;
      margin-bottom: 0;

      span {
        &:last-child {
          margin-left: 6px;
        }
      }
    }
  }

  .content {
    width: 100%;
    height: 100%;
  }

  .title,
  .description {
    text-align: center;
  }

  .title {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 0;
    margin-top: 8px;
    letter-spacing: 0.075px;
    color: ${(props) => props.theme.colors.drak500};
    font-weight: 300;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tags {
    margin-top: 4px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    flex-wrap: wrap;
    color: ${(props) => props.theme.colors.primary400};
    font-size: 12px;
    line-height: 22px;
  }
`;

type ColumnThumnailCardProps = {
  title: string;
  image: string;
  dateTime: string;
  hoursTime: string;
  tags: string[];
  onClick?: () => void;
  className?: string;
};

const ColumnThumnailCardComponent: React.FC<ColumnThumnailCardProps> = ({
  title,
  image,
  dateTime,
  hoursTime,
  tags,
  className = "",
  onClick = () => null,
}) => {
  return (
    <ColumnThumnailCard className={className} onClick={onClick}>
      <div className="image-wrapper">
        <img src={image} alt="" />
        <div className="image-wrapper__tag font-inter">
          <span>{dateTime}</span>
          <span>{hoursTime}</span>
        </div>
      </div>
      <div className="content">
        <h3 className="title ">{title}</h3>

        {tags.length && (
          <div className="tags">
            {tags.map((item, index) => (
              <span key={index.toString()}>#{item}</span>
            ))}
          </div>
        )}
      </div>
    </ColumnThumnailCard>
  );
};

export default ColumnThumnailCardComponent;

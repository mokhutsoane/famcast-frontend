import styled from "styled-components";

const CardContainer = styled.div`
  align-items: center;
  padding: 1rem;
  border: 0.1px solid #f8f8ff;
  border-radius: 5px;
  background-color: #fefefa;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: row;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  @media (max-width: 768px) {
    display: flex;

    width: 100px;
    height: 100px;
  }
`;

const CardImage = styled.img`
  margin-right: 1rem;
  border-radius: 5px;

  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardSubtitle = styled.p`
  margin: 3;
  font-size: 0.9rem;
  color: #777;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Content = styled.div`
  padding: 16px;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const PodcastCard = ({ imageSrc, title, subtitle, children }) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <CardImage src={imageSrc} />
      </ImageWrapper>
      <div>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>

        {children}
      </div>
    </CardContainer>
  );
};

export default PodcastCard;

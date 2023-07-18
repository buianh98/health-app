import { styled } from "styled-components";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";

const MainLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;

  .page-wrapper {
    flex: 1;
  }

  .footer {
    margin-top: auto;
  }
`;

type MainLayoutComponentProps = {
  children: React.ReactNode;
};

const MainLayoutComponent: React.FC<MainLayoutComponentProps> = ({
  children,
}) => (
  <MainLayout>
    <Header />
    <div className="page-wrapper">{children}</div>
    <Footer />
  </MainLayout>
);

export default MainLayoutComponent;

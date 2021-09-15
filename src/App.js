import styled from "styled-components";
import CardSection from "./components/CardSection";
import ChartSection from "./components/ChartSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MessagingSection from "./components/MessagingSection";
import PaymentSection from "./components/PaymentSection";
import { OuterLayout } from "./styles/Layouts";
import { Fade } from "react-reveal";

const MainStyled = styled.main``;

function App() {
  return (
    <div>
      <Header />
      <OuterLayout>
        <MainStyled>
          <Fade left>
            <CardSection />
          </Fade>
          <Fade right>
            <ChartSection />
          </Fade>
          <Fade left>
            <MessagingSection />
          </Fade>
          <Fade right>
            <PaymentSection />
          </Fade>
          <Fade left>
            <FAQSection />
          </Fade>
          <Fade bottom>
          <Footer />
          </Fade>
        </MainStyled>
      </OuterLayout>
    </div>
  );
}

export default App;

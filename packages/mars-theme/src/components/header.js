import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import Logo from "../Assets/img/logo-wp.png";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <MainHeader>
        <StyledLink link="/">
          {/* <Title>{state.frontity.title}</Title> */}
          <img src={Logo} />
        </StyledLink>
        {/* <Description>{state.frontity.description}</Description> */}
        <Nav />
        </MainHeader>
        <MobileMenu />
      </Container>
  
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);


const MainHeader = styled.div`

    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      padding: 20px 15px;
    }

`;

const Container = styled.div`
  width: 1150px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 0px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  img {
    max-width: 200px;
  }
`;

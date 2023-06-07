import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <FooterBg>

        <Container>
          <FooterMain>
            <FooterText>
              © 2023 Marketer&nbsp;• Built with&nbsp;<a href="https://generatepress.com/">GeneratePress</a>
            </FooterText>
            <FooterMenu>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </FooterMenu>
          </FooterMain>
        </Container>
      </FooterBg>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #242226;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  background:#fafafa;
  );
`;

const FooterBg = styled.footerMain`
  background: #fafafa;
  width: 97%;
  float: left;
  padding: 10px 10px;
`;

const FooterMain = styled.footerMain`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  );

  @media(min-width:320px) and (max-width: 767px){
    display: block;
  }
`;

const FooterText = styled.footerText`

a{
  color:#212121;  
}
  );
`;
const FooterMenu = styled.footerMenu`

ul{
  list-style: none;
    display: flex;
}

li{
  margin-right:15px;
}

a {
  color: #2f4468;
}
  );
`;

const Container = styled.section`
width: 1220px;
margin: 0;
padding: 0px 50px;
margin: auto;

@media(min-width:768px) and (max-width: 992px){
  width: 100%;
  padding: 0px;
}



@media(min-width:320px) and (max-width: 767px){
  width: 100%;
  padding: 0px;
}


`;

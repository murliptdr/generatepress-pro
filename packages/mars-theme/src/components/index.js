import { Global, css, connect, styled, Head, useConnect } from "frontity";
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
  // const { actions } = useConnect();

  // actions.theme.ads_api();
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
  
.dropdown, .dropup {
  position: relative;
}

header#site-header a{
  position: relative;
  display: block;
  font-weight: 500;
  font-size:20px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
}

.dropdown:hover>.dropdown-menu {
  display: block !important;
}


.dropdown-submenu>.dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -6px;
  margin-left: -1px;
  -webkit-border-radius: 0 6px 6px 6px;
  -moz-border-radius: 0 6px 6px;
  border-radius: 0 6px 6px 6px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none !important;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);

}

ul.dropdown-menu.multi-level li a {
  font-weight: 600 !important;
  font-size:15px !important;
}

ul.dropdown-menu.multi-level li {
  padding: 4px 0px;
}
header#site-header .dropdown-menu li {
  margin-left: 1px !important;
  padding: 4px 4px;
}


.dropdown-submenu:hover>.dropdown-menu {
  display: block;
}
.dropdown-submenu {
  position: relative;
}


.dropdown-submenu:hover>.dropdown-menu {
  display: block !important;
  margin: 0 !important;
}


header#site-header .SubMenu ul {
  display: initial !important;
  margin:0px !important;
}

header#site-header .SubMenu ul li{
  margin:0px !important; 
}

li.submenu-main-item .SubMenu a {
  font-weight: 300 !important;
  font-size: 15px;
}
.SubMenu h6 {
  margin: 0 !important;
  text-transform: capitalize;
}

.rt_header_main.is-sticky {
  position: fixed;
  width: 15%;
  right: 370px;
  top: 76px;
  padding: 0px 15px;
}
.is-sticky .sidebar_ad_none{
  display:none;
}
#site-header.hd_fixed {
  position: fixed !important;
  top: 0px !important;
  width: 100%;
  z-index: 9999;
  background: #fff !important;
  transition:all 0.2s ease-in-out 0s;
  box-shadow: rgb(149 157 165 / 18%) 0px 8px 24px;
}
.hd_fixed div{padding:6px 0px !important;}


header#site-header.inner_header{
  background: #084523 !important;
  position: inherit;
}

#site-header.inner_header .dropdown > a {
  color: white !important;
}
.dropdown .dropdown-menu li a{color:#000 !important;}


.submenu-main-item:hover .SubMenu {
  display: block;
  transition: all 0.5s;
}
header#site-header .SubMenu ul li {
  margin: 6px 0px!important;
  padding: 0px 10px;
}

.SubMenu {
  display: none;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  position: absolute;
  width: max-content;
  background: white;
  padding: 0px 0px;
  margin-left: 5px;
  border-radius: 3px;
}

@media (min-width:1600px) and (max-width:1800px){
  .rt_header_main.is-sticky {
    position: fixed;
    width: 18%;
    right: 231px;
    top: 41px;
}
}

@media (min-width:1400px) and (max-width:1600px){
  .rt_header_main.is-sticky {
    width: 21%;
    right: 126px;
    top: 0px;
    padding: 0px 15px;
  }
}

@media (min-width:1250px) and (max-width:1300px){
  .rt_header_main.is-sticky {
    width: 21%;
    right: 39px;
    top: 0px;
    padding: 0px 15px;
  }
}

@media (max-width:1249px){
  .rt_header_main.is-sticky {
    width: 90%;
    position:sticky;
    padding: 0px 15px;
  }
}




@media (min-width:768px) and (max-width:1024px){
.rt_header_main.is-sticky {
  width: 29%;
  right: 0px;
}

}
@media (min-width:992px){

  .header_ad_790{
  width:788px;
  margin: 0 auto;
  }
  
}

@media (min-width:320px) and (max-width:767px){
.rt_header_main.is-sticky {
  position: inherit;
  right: 0;
  top: 0px;
  width:100%;
  padding: inherit;
}
header#site-header a {
  color: black ;
  padding: 20px 0px 10px 0px;
  font-size: 16px;
  font-weight: 500;
}
header#site-header.inner_header {
  background: #084523;
}

header#site-header li {
  margin: 0.8rem 0 0 0rem!important;

}
#site-header.inner_header a {
  color: black!important;
}
header#site-header.inner_header span {
  color: #fff !important;
}
header#site-header.inner_header button svg {
  fill: #fff;
}

header#site-header.inner_header {
  position: relative;
}
header#site-header.inner_header svg {
  fill: white;
}
header#site-header.inner_header span {
  color: white;
}

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

@media(min-width:1024px) and (max-width: 1199px){
  width: 100%;
  padding: 0px;
}

@media(min-width:768px) and (max-width: 992px){
  width: 100%;
  padding: 0px;
}

@media(min-width:320px) and (max-width: 767px){
  width: 100%;
  padding: 0px;
}


`;

import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Iterate over the items of the list. */}
      <ListMain>

        <PostMain>
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <Item key={item.id} item={item} />;
          })}

        </PostMain>

        <SideBar>
          <SideOne>
            <h2 >Product Highlight</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet rhoncus arcu non aliquet. Sed tempor mauris a purus porttitor</p>
            <a href="#">Learn more</a>
          </SideOne>

          <SideTwo>
            <h2>Recent Posts</h2>
            <ul>
              <li>
                <RecentPostMain>

                  <RecentPostImg>
                    <img src="https://gpsites.co/marketer/wp-content/uploads/sites/26/2018/09/fastest-150x150.png" />
                  </RecentPostImg>


                  <a href=""> The Fastest WordPress Theme </a>

                </RecentPostMain>
              </li>

              <li>
                <RecentPostMain>

                  <RecentPostImg>
                    <img src="https://gpsites.co/marketer/wp-content/uploads/sites/26/2018/09/contact-form-150x150.png" />
                  </RecentPostImg>


                  <a href=""> The Fastest WordPress Theme </a>

                </RecentPostMain>
              </li>

              <li>
                <RecentPostMain>

                  <RecentPostImg>
                    <img src="https://gpsites.co/marketer/wp-content/uploads/sites/26/2018/09/security-150x150.png" />
                  </RecentPostImg>


                  <a href=""> The Fastest WordPress Theme </a>

                </RecentPostMain>
              </li>
            </ul>
          </SideTwo>
        </SideBar>


      </ListMain>

      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
width: 1220px;
margin: 0;
padding: 0px 50px;

@media(min-width:768px) and (max-width: 992px){
  width: 100%;
  padding: 0px;
}



@media(min-width:320px) and (max-width: 767px){
  width: 100%;
  padding: 0px;
}


`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;

const ListMain = styled.div`
    width: 100%;
    margin-top: 20px;
    display:flex;

    @media(min-width:320px) and (max-width: 992px){
      display:block;
    }
`;

const SideBar = styled.div`
    width: 30%;
    height: max-content;
    margin-right: 20px;

    h2{
      font-size: 20px;
      color: white;
      font-weight: 500;
      font-family: Open Sans, sans-serif;
    }

    p{
      font-family: revert;
      font-size: 17px;
      color: white;
      margin-bottom: 40px;
    }
    a{
      background: black;
    max-width: -webkit-max-content;
    max-width: -moz-max-content;
    max-width: max-content;
    color: white;
    padding: 13px 20px;
    }

`;


const PostMain = styled.div`
    width: 70%;
    margin-right:20px;

    @media(min-width:320px) and (max-width: 992px){
      width: 100%;
    }

`;

const SideOne = styled.div`
    background: #83b0de;
    padding: 50px;
    @media(min-width:320px) and (max-width: 992px)
    {
      width: fit-content;
      padding: 20px;
      padding-bottom: 40px;
    }
`;

const SideTwo = styled.div`
background: #ffffff;
height:max-content;
margin-top:30px;
padding: 40px 50px 40px 50px;
float: left;
box-shadow: 0 0 10px rgba(232, 234, 237, 0.5);

@media(min-width:320px) and (max-width: 992px)
{
  width: fit-content;
  padding: 20px;
}



h2{
  color: #000000;
  font-size: 20px;
  margin: 0;
}

h3{
  width:100%;
margin-top:0px;
}

ul{
  padding: 0;
  list-style: none;
}

li{
  float: left;
  width: 100%;
}

`;

const RecentPostMain = styled.div`
float: left;
    width: 100%;
    margin-bottom: 20px;
    
a{
  color: #1b78e2;
  background: none;
  padding: 0px;
  font-size: 17px;
  font-weight: 400;
}

`;


const RecentPostImg = styled.div`
    width: 67px;
    height: 67px;
    float: left;
    margin-right: 10px;

    img{
      max-width:100%;
      max-height: 100%;
    }

`;



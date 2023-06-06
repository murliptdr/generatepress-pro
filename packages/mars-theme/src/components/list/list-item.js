import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
      <ListSection>
          <ContentItem>
          <article>
      <BoxMain>
        <div>
          <Link link={item.link}>
            <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
          </Link>

          <div>
            {/* If the post has an author, we render a clickable author text. */}
            {author && (
              <StyledLink link={author.link}>
                <AuthorName>
                  By <b>{author.name}</b>
                </AuthorName>
              </StyledLink>
            )}
            <PublishDate>
              {" "}
              on <b>{date.toDateString()}</b>
            </PublishDate>
          </div>

          {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}

          {/* If the post has an excerpt (short summary text), we render it */}
          {item.excerpt && (
            <PostItemText>
              {state.theme.featured.showOnList && (
                <FeaturedMedia id={item.featured_media} />
              )}

              <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />


            </PostItemText>
          )}
        </div>
      </BoxMain>
    </article>
          </ContentItem>

    <SideBarMain>
      <div>

      </div>
    </SideBarMain>
      </ListSection>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;
const PostItemText = styled.div`
  display:flex;
  width: 100%;
`;
const BoxMain = styled.div`
background: white;
padding: 10px 50px 50px 50px;
border-right: 2px solid rgba(0, 0, 0, 0.07);
border-bottom: 2px solid rgba(0, 0, 0, 0.07);
box-shadow: 0 0 10px rgba(232, 234, 237, 0.5);
margin-top: 20px;
`;

const PostImg = styled.span`
    width: 485px;
    height: 160px;
    background: grey;
    margin-top: 20px;
    margin-right: 20px;
`;
const ListSection = styled.div`
    width: 100%;
    background: grey;
    margin-top: 20px;
    margin-right: 20px;
`;
const ContentItem = styled.div`
    width: 75%;
    height: 160px;
    background: grey;
    margin-top: 20px;
    margin-right: 20px;
`;

const SideBarMain = styled.div`
    width: 24%;
    height: 160px;
    background: grey;
    margin-top: 20px;
    margin-right: 20px;
`;
const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;



const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  width:100%;
`;

import React, { useEffect } from "react";
import { Media, Alert, Carousel, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getPosts, searchPostsRequest } from "../../redux/actions/blog/posts";
import SideBar from "./sidebar/sideBar";
import ScrollTop from "../ScrollTop";
import "./styles.scss";
import "../scss/styles.scss";
import Paginate from "./Pagination";
import { scrollTop } from "../../utils/functions";

const SearchPosts = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.error);
 
  const searchPosts = useSelector((state) => state.searchPosts.posts);
  const searchTerm = useSelector((state) => state.searchPosts.term);
  const searchError = useSelector((state) => state.searchPosts.error);

  const searchIsLoading = useSelector((state) => state.searchPosts.isLoading);
  const postsPerPage = useSelector((state) => state.searchPosts.postsPerPage);
  const prevPage = useSelector((state) => state.searchPosts.prevPage);
  const nextPage = useSelector((state) => state.searchPosts.nextPage);
  const maxPages = useSelector((state) => state.searchPosts.maxPages);

  const { search } = useLocation();
  const page = new URLSearchParams(search).get("page") || 1;
  const term = new URLSearchParams(search).get("term") || "";

  useEffect(() => {
    dispatch(getPosts(page));
  }, [page]);
  useEffect(() => {
    dispatch(searchPostsRequest(term, page, 5));
  }, [term, page]);

  const loader =
    isLoading || (searchIsLoading && !searchError) ? (
      <div style={{ textAlign: "center" }}>
        <Spinner animation="border" size="lg" role="status" />
      </div>
    ) : null;
  const postsSlider = posts.length
    ? posts.slice(-5).map((post) => {
        return (
          <Carousel.Item style={{ maxHeight: "400px" }} interval={3000}>
            <img className="d-block w-100" src={post.imageUrl} />
            <Carousel.Caption>
              <Link
                to={"/blog/post/" + post._id}
                style={{
                  color: "rgb(0, 123, 255)",
                  background: "white",
                  textDecoration: "none",
                  paddingLeft: "2px",
                  marginRight: "2px",
                }}
              >
                {post.title}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })
    : null;

  const err = error ? (
    <Alert variant="danger" style={{ textAlign: "center" }}>
      {error}
    </Alert>
  ) : null;

  const searchResults =
    postsPerPage.length && !searchIsLoading
      ? postsPerPage.map((post) => {
          return (
            <>
              <Media as="li" key={post._id} className="media">
                <div className="image_wrapper">
                  <Link
                    to={`/blog/post/${post._id}/${post.slug}`}
                    className="text-decoration-none"
                    onClick={scrollTop}
                  >
                    <img
                      width={384}
                      height={256}
                      className="image"
                      src={post.imageUrl}
                      dpr="auto"
                    />
                  </Link>
                </div>
                <br />
                &nbsp;&nbsp;&nbsp;
                <Media.Body className="media-body">
                  <h4 className="title">
                    <Link
                      to={`/blog/post/${post._id}/${post.slug}`}
                      className="text-decoration-none "
                      style={{ color: "#000" }}
                      onClick={scrollTop}
                    >
                      {post.title}
                    </Link>
                  </h4>
                  <p className="description">
                    {post.description
                      .replace(/(<([^>]+)>)/gi, "")
                      .substr(0, 250) + "..."}
                  </p>
                  <h6 style={{ marginTop: "10px" }}>
                    <Link
                      to={`/blog/post/${post._id}/${post.slug}`}
                      className="text-decoration-none link"
                      onClick={scrollTop}
                    >
                      Read More
                    </Link>
                  </h6>
                </Media.Body>
              </Media>
              <br />
            </>
          );
        })
      : null;

  return (
    <div className="Blog">
      <br />
      <ScrollTop />
      <div className="blog-wrapper">
        <div className="content-wrapper col-md-auto">
          <ul className="list-unstyled">
            {err}

            <Carousel>{postsSlider}</Carousel>
            <br />
            {loader}
            <br />
            <br />
            {postsPerPage.length && searchTerm && !searchIsLoading ? (
              <h2 style={{ fontWeight: "light", textAlign: "center" }}>
                Showing {searchPosts.length}{" "}
                {searchPosts.length > 1 ? "results" : "result"} for "
                {searchTerm}"
              </h2>
            ) : null}
            {!searchIsLoading &&
            !postsPerPage.length &&
            !searchError &&
            searchTerm ? (
              <h2
                style={{
                  fontWeight: "light",
                  color: "#dc3545",
                  textAlign: "center",
                }}
              >
                Ooops! No results found for "{searchTerm}"
                <span style={{ fontWeight: "bold" }}></span>
              </h2>
            ) : null}

            {searchError ? (
              <Alert variant="danger" style={{ textAlign: "center" }}>
                {searchError}
              </Alert>
            ) : null}
            <br />
            {searchResults}
            <br />
            {searchPosts.length && !searchIsLoading ? (
              <div style={{ textAlign: "center" }}>
                {postsPerPage.length ? (
                  <div style={{ textAlign: "center" }}>
                    <Paginate
                      path={`search?term=${searchTerm}&page=`}
                      items={{
                        prevPage: prevPage,
                        nextPage: nextPage,
                        maxPages: maxPages,
                        error: searchError,
                      }}
                    />
                  </div>
                ) : null}
              </div>
            ) : null}
            <br />
          </ul>
        </div>

        <div className="side-nav">
          <ul className="list-unstyled">
            <br />

            <SideBar />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SearchPosts;

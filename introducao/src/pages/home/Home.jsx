import { Component } from "react";
// import "../../styles/App.css";
import "./Home.css";
import { loadPosts } from "../../api/load-posts";
import { Posts } from "../../components/Posts/index";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page:0,
    postsPerPage: 2,
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(0,2),
      allPosts: postsAndPhotos,
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <section className="Container">
        <Posts posts={posts} />
      </section>
    );
  }
}
export default Home;

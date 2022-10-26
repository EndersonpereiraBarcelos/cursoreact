import {Component} from "react";
// import "../../styles/App.css";
import "./Home.css";
import {loadPosts} from "../../api/load-posts";
import {Posts} from "../../components/Posts/Posts.jsx";
import {Button} from "../../components/button/Button";


class Home extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 2,
    };

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {

        const {page, postsPerPage} = this.state;
        const postsAndPhotos = await loadPosts();
        this.setState({
            posts: postsAndPhotos.slice(page, postsPerPage),
            allPosts: postsAndPhotos,
        });
    };

    loadMorePosts = () => {
        const {
            page,
            postsPerPage,
            allPosts,
            posts
        } = this.state
        const nextPage = page + postsPerPage
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
        posts.push(...nextPosts)

        this.setState({ posts, page: nextPage })
    }

    render() {
        const {posts} = this.state;
        return (
            <section className="Container">
                <Posts posts={posts}/>
                <Button
                    text="text more"
                    onClick={this.loadMorePosts}
                />
            </section>
        );
    }
}

export default Home;

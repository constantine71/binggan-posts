import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "wired-card";
import "wired-link";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    // const colors = ["darkred", "darkgreen", ""];
    const randomCardFill = () => (Math.random() > 0.5 ? "darkred" : "");
    const randomElev = () => `${Math.round(Math.random() * 5)}`;

    const { posts } = this.props;
    const postCards = posts.length ? (
      <wired-card>
        <wired-card>
          <h4>All the posts</h4>
        </wired-card>
        <div className="card-grid">
          {posts.map(post => {
            const cardFill = randomCardFill();
            const cardElev = randomElev();
            const fontColor =
              cardFill === "darkred" ? { color: "lightyellow" } : {};
            return (
              <div key={post.id}>
                <wired-card
                  fill={cardFill}
                  elevation={cardElev}
                  style={fontColor}
                >
                  <NavLink to={"/posts/" + post.id}>
                    <h4>
                      <span className="textlink">{post.title}</span>
                    </h4>
                  </NavLink>
                  <p>{post.body}</p>
                </wired-card>
              </div>
            );
          })}
        </div>
      </wired-card>
    ) : (
      <div className="no-result">No Post Yet</div>
    );

    //return method is here
    return (
      <div>
        <h2>Home page</h2>
        {postCards}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(Home);

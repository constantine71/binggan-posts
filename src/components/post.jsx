import React, { Component } from "react";
import "wired-card";
import "wired-image";
import "wired-button";
import BingGan from "../img/IMG_1978.JPG";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  render() {
    const { post: mypost, deletePost, history } = this.props;

    const handleDelete = () => {
      deletePost(mypost.id);
      history.push("/");
    };

    const showPost = mypost ? (
      <wired-card>
        <wired-image
          elevation="4"
          src={BingGan}
          style={{ width: "30%" }}
        ></wired-image>
        <h4>{mypost.title}</h4>
        <p>{mypost.body}</p>
        <wired-button id="delete-button" onClick={handleDelete}>
          Delete
        </wired-button>
      </wired-card>
    ) : (
      <wired-card>Loading post...</wired-card>
    );
    return <div className="container">{showPost}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  const exactPost = state.posts.find(p => p.id === id);
  return {
    post: exactPost
  };
};

const mapDispatchToProps = dispatch => {
  const DeleteDispatch = id_passed => {
    dispatch(deletePost(id_passed));
  };
  return {
    deletePost: DeleteDispatch
  };
};
// store.dispatch({type:"ADD_POST",post:"sss"});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

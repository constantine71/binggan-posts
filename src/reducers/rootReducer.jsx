const initState = {
  posts: [
    {
      id: "1",
      title: "asohdiu oasidw asoinb",
      body:
        "In vero nulla placeat voluptate magnam voluptas corrupti maxime similique. Facere odit distinctio doloribus nihil excepturi quidem nesciunt reprehenderit impedit aspernatur sunt!"
    },
    {
      id: "2",
      title: "boasidoi sdao8 sabc",
      body:
        "Asperiores modi temporibus molestias, ducimus labore et. Minus, ab magnam perferendis distinctio beatae dicta eius ipsam facilis tenetur et nulla quis delectus."
    },
    {
      id: "3",
      title: "coa asdhiuwahid soahfn",
      body:
        "Ut cum eaque doloribus qui ratione iusto adipisci magni obcaecati soluta repellat maiores eligendi possimus rerum in doloremque, libero sequi deserunt debitis!"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      console.log(state, action);
      const newPosts = state.posts.filter(p => p.id !== action.id);
      return { ...state, posts: newPosts };
    default:
      console.log(state, action);
      return state;
  }
};

export default rootReducer;

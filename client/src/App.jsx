import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import PostsList1 from "./PostsList1";
import PostsList2 from "./PostsList2";
import { CreatePost } from "./createPost";
import { PostListPaginated } from "./PostListPaginated";
import Post from "./Post";
import { PostListInfinite } from "./PostListInfinite";
import { getPost } from "./api/posts";
function App() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);
  const queryClient = useQueryClient();
  function onHoverPostOneLink() {
    queryClient.prefetchQuery({
      queryKey: ["posts", 1],
      queryFn: () => getPost(1),
      placeholderData: [{ id: 1, title: "Initial Data" }],
      // initialData: [{ id: 1, title: "Initial Data" }],
    });
  }

  return (
    <div className="App">
      <button onClick={() => setCurrentPage(<PostsList1 />)}>
        Posts LIst 1
      </button>
      <button onClick={() => setCurrentPage(<PostsList2 />)}>
        Posts LIst 2
      </button>
      <button
        onMouseEnter={onHoverPostOneLink}
        onClick={() => setCurrentPage(<Post id={1} />)}
      >
        First Post
      </button>
      <button
        onClick={() =>
          setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)
        }
      >
        New Post
      </button>
      <button onClick={() => setCurrentPage(<PostListPaginated />)}>
        Post List Paginated
      </button>
      <button onClick={() => setCurrentPage(<PostListInfinite />)}>
        Post List Infinite
      </button>
      <br />
      {currentPage}
    </div>
  );
}

export default App;

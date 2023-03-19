import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 1" },
];

function App() {
  const queryClient = useQueryClient();
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  return (
    <div className="App">
      {postsQuery.data && postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
export default App;

import { addPost, deletePost } from "@/lib/actions";

function ServerActions() {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="Enter your post title" name="title" />
        <input
          type="text"
          placeholder="Enter your post description"
          name="description"
        />
        <input type="text" placeholder="Enter your post image" name="image" />
        <input type="text" placeholder="Enter your post slug" name="slug" />
        <input type="text" placeholder="Enter your userId" name="userId" />
        <button>Create</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="Enter post id" name="_id" />
        <button>Delete</button>
      </form>
    </div>
  );
}

export default ServerActions;

import React from "react";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import UserList from "./features/users/UserList";
import UserPage from "./features/users/UserPage";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";

function App() {
  return (
     <>
     <Layout />
    <Routes>
        <Route index element={<PostsList />} />

        <Route path="/post">
            <Route index element={<AddPostForm />} />
            <Route path=":postId" element={<SinglePostPage />} />
            <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
            <Route index element={<UserList />} />
            <Route path=":userId" element={<UserPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}

export default App;

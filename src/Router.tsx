import { Login, PostCheck, PostView, SignUp, Writing, Mypage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/postcheck" element={<PostCheck />} />
        <Route path="/postview" element={<PostView />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

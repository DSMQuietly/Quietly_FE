import { Login, SignUp, Writing } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
    </BrowserRouter>
  );
};

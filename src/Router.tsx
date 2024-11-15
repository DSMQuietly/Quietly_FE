import { Login } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

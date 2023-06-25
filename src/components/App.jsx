import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import LogInRegPage from 'pages/LogInRegPage/LogInRegPage';
import ReportPage from 'pages/ReportPage/ReportPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/authorization" element={<LogInRegPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

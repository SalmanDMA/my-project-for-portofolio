import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import { linkAskMe, linkErrorPage, linkHome, linkPlaneFigures, linkPlaneFiguresDetail, linkThankYouPage } from './helper/linkData';
import ErrorPage from './components/Global/ErrorPage/ErrorPage';
import ThankYouPage from './components/Global/ThankYouPage/ThankYouPage';
import AskMe from './components/AskMe/AskMe';
import PlaneFigures from './components/PlaneFigures/PlaneFigures';
import PlaneFiguresDetail from './components/PlaneFigures/PlaneFiguresDetail/PlaneFiguresDetail';

const router = createBrowserRouter([
 {
  path: linkHome,
  element: <Home />,
 },
 {
  path: linkPlaneFigures,
  element: <PlaneFigures />,
 },
 {
  path: `${linkPlaneFiguresDetail}/:id`,
  element: <PlaneFiguresDetail />,
 },
 {
  path: linkAskMe,
  element: <AskMe />,
 },
 {
  path: linkThankYouPage,
  element: <ThankYouPage />,
 },
 {
  path: linkErrorPage,
  element: <ErrorPage />,
 },
]);

function App() {
 return (
  <RouterProvider router={router}>
   <Routes>
    <Route path={linkHome} element={<Home />} />
    <Route path={linkPlaneFigures} element={<PlaneFigures />} />
    <Route path={linkPlaneFiguresDetail} element={<PlaneFiguresDetail />} />
    <Route path={linkAskMe} element={<AskMe />} />
    <Route path={linkThankYouPage} element={<ThankYouPage />} />
    <Route path={linkErrorPage} element={<ErrorPage />} />
   </Routes>
  </RouterProvider>
 );
}

export default App;

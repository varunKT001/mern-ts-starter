import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, SharedLayout } from './pages';

export function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      {/* Route publique : Login */}
      <Route path="/" element={<Login />} />

      {/* Routes protégées (on ajoute /app devant) */}
      <Route path="/app" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<Students />} />
      </Route>
    </Routes>
  );
}

export default App;
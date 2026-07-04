import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Transporters from './pages/Transporters';
import Vehicles from './pages/Vehicles';
import Missions from './pages/Missions';
import Payments from './pages/Payments';
import Litigations from './pages/Litigations';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

// Initialize TanStack Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/utilisateurs" element={<Users />} />
            <Route path="/transporteurs" element={<Transporters />} />
            <Route path="/vehicules" element={<Vehicles />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/paiements" element={<Payments />} />
            <Route path="/litiges" element={<Litigations />} />
            <Route path="/rapports" element={<Reports />} />
            <Route path="/parametres" element={<Settings />} />
            
            {/* Catch-all redirection */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

import { Navigate, Route, Routes } from 'react-router-dom';
import { useCheckAuth } from '../hooks';
import { AuthRoutes } from '../auth';
import { EcommerceRoutes } from '../ecommerce';

export const AppRouter = () => {
  const { status } = useCheckAuth();

  return (
    <Routes>
      {
        status === 'authenticated'
          ? <Route path="/*" element={<EcommerceRoutes />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
      }
      
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}

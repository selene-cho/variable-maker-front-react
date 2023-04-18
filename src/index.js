import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './scss/index.scss';
import DarkModeProvider from './components/context/DarkModeContext';
/**
 * DarkModeProvide
 * DarkMode context 사용 범위 지정(우산 씌워주기)
 * 우산 안에 있는 자식Node 안에서 useDarkMode 사용가능 (darkModeContext)
 */

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </QueryClientProvider>
  // </React.StrictMode>
);

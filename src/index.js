import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { AdminFlagProvider } from './components/providers/AdminFlagProvider';

const root = createRoot(document.getElementById('root'));

root.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>
);

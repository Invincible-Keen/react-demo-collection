import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthProvider.tsx';

async function prepare() {
    console.log('base url:', import.meta.env.VITE_CONFIG_TEST);
    if (['development', 'dev', 'qa', 'pi'].includes(import.meta.env.MODE)) {
        const { worker } = await import('./mocks/browser');
        await worker.start({
            onUnhandledRequest: 'bypass',
            serviceWorker: {
                url: '/mockServiceWorker.js',
            },
        });
    }
}
prepare().then(() => {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </BrowserRouter>
        </StrictMode >,
    );
});

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// )

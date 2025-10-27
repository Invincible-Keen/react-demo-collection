import { Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About';
import BtnTrick from './pages/BtnTrick';
import Login from './pages/Login';
import Todo from './pages/Todo';
import BtnTrickReducer from './pages/BtnTrickReducer';

function PublicRoute() {
    const isLogin = !!localStorage.getItem('userId'); // !! convert to boolean

    if (isLogin) {
        // already logged in: redirect to home page
        return <Navigate to="/" replace />;

    } else {
        // Not logged in: render child routes
        return <Outlet />;
    }
}

function PrivateRoute() {
    const isLogin = !!localStorage.getItem('userId'); // !! convert to boolean

    if (isLogin) {
        // already logged in: render child routes
        return <Outlet />;
    } else {
        // Not logged in: redirect to login page (replace: true to avoid going back to original page)
        return <Navigate to="/login" replace />;
    }
}

function Layout() {
    const handleLogout = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('password');
        window.location.href = '/login';
    }

    return (
        <div>
            {/* embeded routing entry: child routes will be rendered here */}
            <Outlet />

            <nav className='foot'>
                <Link to="/" style={{ marginRight: '10px' }}>HomePage</Link>
                <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
                <Link to="/btn/3" style={{ marginRight: '10px' }}>Button Trick</Link>
                <Link to="/btntrickreducer" style={{ marginLeft: '10px' }}>Btn Trick Reducer</Link>
                <Link to="/todo" style={{ marginLeft: '10px' }}>To-Do List</Link>                
                <button onClick={handleLogout} style={{ marginTop: '20px' }}>
                    Logout
                </button>
            </nav>
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path="login" element={<Login />} />
            </Route>

            <Route element={<PrivateRoute />}>
                {/* 根路由：使用 Layout 组件作为布局，所有子路由共享导航栏 */}
                <Route path="/" element={<Layout />}>
                    {/* 默认子路由（访问 / 时显示） */}
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<About />} />
                    <Route path="btn" element={<BtnTrick />} />
                    <Route path="btn/:num" element={<BtnTrick />} />
                    <Route path="btnr" element={<BtnTrickReducer />} />
                    <Route path="todo" element={<Todo />} />
                </Route>
            </Route>
        </Routes>);
}

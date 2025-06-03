import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/layout/Main';
import MainLayout from './components/layout';
import Fragment from 'react';
import Detail from './components/page/Detail';
AOS.init();

const router = [
    { path: '/', component: Main },
    {
        path: 'project/:id',
        component: Detail,
    },
];

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Thời gian hiệu ứng (ms)
            once: false,
        });
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {router.map((item, index) => {
                        const Layout = item.layout === null ? Fragment : MainLayout;
                        const Page = item.component;

                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

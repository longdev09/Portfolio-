import AnimateBg from '../common/AnimateBg';
import Footer from './Footer';
import Header from './Hearder';
function MainLayout({ children }) {
    return (
        <>
            <AnimateBg />
            {children}
            <Footer />
        </>
    );
}
export default MainLayout;

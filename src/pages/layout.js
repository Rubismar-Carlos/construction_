// Components
import Footer from "<prefix>/components/Footer/Footer";
import Navbar from "<prefix>/components/Navbar/Navbar";

export default function Layout({ children }) {
    return (
        <>
            < Navbar />
            {children}
            < Footer />
        </>
    )
}
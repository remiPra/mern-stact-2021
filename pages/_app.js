import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../components/TopNav";
import "../public/css/main.css"
function myApp({ Component, pageProps }) {
    return (
        <>
            <TopNav />
            <Component {...pageProps} />
        </>
    );
}

export default myApp;
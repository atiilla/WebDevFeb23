import Categories from "./categories";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <>
            <Header/>
            <div className="container py-3">
                <div className="row gx-5">
                    <div className="col-md-9">
                    {children}
                    </div>
                    <div className="col-md-3 bg-secondary py-2 text-light">
                        <p className="lead fw-normal">Blueberry CMS v0.0.1</p>
                        <Categories/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
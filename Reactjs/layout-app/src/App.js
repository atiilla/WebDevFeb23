import Content from "./components/layout/content";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";

export default function App(){
    const webInfo = {
        appName:"CoffeeShop",
        version:"0.0.1",
        email:"info@coffeeshophigh.nl"
    }

    return(
        <div className="container">
           <Header id={{id:1}} {...webInfo}/>
           <Content>
            <h1>adsaidaisjdioajdoiajsd</h1>
           </Content>
           <Footer/>
        </div>
    )
}
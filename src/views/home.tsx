import Header from "../components/header";
import Footer from "../components/footer";
import Body from "../components/body";
import '../App.css';

const Home = () => {
    return (
      <>
        <div>
          <h1 className="App-title">ESTA ES MI CARIPELA:</h1>
        </div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </>
    );
  }

  export default Home;
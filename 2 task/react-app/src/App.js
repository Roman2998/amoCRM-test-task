import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {Body} from "./components/Body/Body";

function App() {
    return (
        <div className="App">
            <div className="purple"></div>
            <div className="purple-ball"></div>
            <div className="red-ball"></div>
            <div className="small-red-ball"></div>
            <header>
                <Navbar />
            </header>
            <div className="body">
                <Body />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;

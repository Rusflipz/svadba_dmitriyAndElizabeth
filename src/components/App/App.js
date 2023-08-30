import './App.css';
import NameBlock from "../NameBlock/NameBlock";
import WelcomeBlock from "../WelcomeBlock/WelcomeBlock";
import Program from "../Programm/Program";
import CountDown from "../CountDown/CountDown";
import Wishes from "../Wishes/Wishes";

function App() {
    return (
        <div className="App">
            <NameBlock/>
            <WelcomeBlock/>
            <Program/>
            <Wishes/>
            <CountDown/>
        </div>
    );
}

export default App;

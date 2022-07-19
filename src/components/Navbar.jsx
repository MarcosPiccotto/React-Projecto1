import reactLogo from "../assets/react.svg";
export default function Navbar() {
    return (
        <nav>
            <div>
                <img src={reactLogo} alt="React logo" />
                <h2>ReactFacts</h2>
            </div>
            <span>React Course - Project 1</span>
        </nav>
    );
}

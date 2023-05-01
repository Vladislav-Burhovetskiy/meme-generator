import Slider from "./Slider";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-container">
        <img src="./troll-face.png" className="header--image" />
        <h2 className="header--title">Meme Generator</h2>
        <Slider darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
      </div>
    </header>
  );
}

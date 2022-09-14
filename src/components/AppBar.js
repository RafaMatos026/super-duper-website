import "../styles/navbar.style.css";

export default function AppBar() {
  return (
    <nav>
      <div className="links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#myexperience">My Experience</a>
          </li>
          <li>
            <a href="#demos">Demos</a>
          </li>
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#contactme">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img alt="Logo" src="/images/logo.png" />
      </div>
      <div className="socials">
        <ul>
          <li>
            <a href="#twitter">Twitter</a>
          </li>
          <li>
            <a href="#twitter">Instagram</a>
          </li>
          <li>
            <a href="#twitter">Spotify</a>
          </li>
          <li>
            <a href="#twitter">Facebook</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

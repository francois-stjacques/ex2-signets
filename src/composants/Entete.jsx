import avatar from '../images/buzz.png';
import './Entete.scss';


export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Buzz Lightyear <img src={avatar} alt="Buzz Lightyear" /></div>
    </header>
  );
}
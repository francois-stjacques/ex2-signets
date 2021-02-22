import './Dossier.scss';
import SortIcon from "@material-ui/icons/Sort";
import MoreVertIcon from "@material-ui/icons/MoreVert";


export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier">
      <div className="couverture">
        {/* <span className="deplacer">Déplacer</span> */}
        <SortIcon id="triage"></SortIcon>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>{dateModif}</p>
      </div>
      <MoreVertIcon id="opt"></MoreVertIcon>
      {/* <button>Modifier</button> */}
    </article>
  );
}
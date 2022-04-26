import { useEffect, useState } from "react"
import Card from "../components/Card";

const Portfolio = () => {
    // on déclare la variable joke et sa méthode (fonction) et en même temps
    //  et ça grâce au hook qui s'appelle usState()

    let [joke, setJoke] = useState('');

    // on redéclare une variable comme pour la variable Joke
    let [gallery, setGallery] = useState([]);

    // on refait un fonction

    const loadPics = () => {
        // fonction fléché
        fetch("https://picsum.photos/v2/list?page=2&limit=8")
        .then(response => response.json())
        .then(data => {
            setGallery(data);
            console.log(data);
        })
    }


    const loadJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data =>{
            setJoke(data.value);
            console.log(data);
        })
    }

    useEffect( ()=> loadJoke,[]);
    useEffect( () => loadPics,[]);

    return (
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col"><h1>Portfolio</h1></div>
          </div>
          <div className="row">
           
            {gallery.map(
                pic =>{
                    let source =  `https://picsum.photos/id/${pic.id}/1080/920`;
                    let id = pic.id;
                    let author = pic.author;
                    let chuck = joke;
                    return (<Card  key={id} source={source} joke={chuck} />)
                    
                }
            )}
          </div>

          <div className="row">
            <div className="col">
              <p>
                Justinien Ier ou Justinien le Grand (latin : Imperator Caesar
                Flavius Petrus Justinianus Sabbatius Augustus, grec ancien :
                Φλάβιος Πέτρος Σαββάτιος Ἰουστινιανός), né vers 482 à Tauresium,
                près de Justiniana Prima en Illyrie, et mort le 15 novembre 565
                à Constantinople, est un empereur romain d'OrientN 1 ayant régné
                de 527 jusqu'à sa mort. Il est l'une des principales figures de
                l'Antiquité tardive. Que ce soit sur le plan du régime
                législatif, de l'expansion des frontières de l'Empire ou de la
                politique religieuse, il a laissé une œuvre
                considérable.D'origine modeste, il parvient au faîte du pouvoir
                grâce à l'action de son oncle et empereur Justin Ier dont il est
                l'un des principaux conseillers avant de devenir son successeur.
                Si son arrivée au pouvoir n'est pas sans troubles, puisqu'il
                doit faire face à la sédition Nika, il impose progressivement
                son autorité sur un Empire qui, depuis sa fondation, est
                constamment sur la défensive face aux assauts de nombreux
                adversaires et tente de faire perdurer l'héritage de Rome, au
                travers du projet de la renovatio imperii (« restauration de
                l'Empire »).Surnommé « le bon empereur » (ad optimam) à cause de
                son érudition, de son sens du devoir et de la sagesse de ses
                décisions, il restaure le prestige de l'Empire en multipliant
                les conquêtes territoriales et en tentant de réduire les foyers
                de résistance. Il se distingue également par ses grandes
                réformes, notamment en matière juridique. Justinien se montre
                également bon diplomate et accorde aux peuples barbares
                l'autonomie locale ainsi qu'un accès à la prêtrise. Son règne
                est marqué par de nombreuses guerres contre les Perses, les
                Byzantins se lançant même dans une croisade en 532, et par
                plusieurs interventions militaires en Afrique du Nord et au
                Proche-Orient.À l'âge de sept ans, Justinien reçoit son
                éducation à Constantinople, dans la maison de son oncle
                l'empereur Justin Ier. Il se distingue rapidement par son
                intelligence, grâce notamment à son goût pour l'étude de la
                poésie, de la philosophie et de la rhétorique. Au début de son
                règne, il demeure un conseiller discret qui ne se montre qu'aux
                côtés de son oncle.
              </p>
            </div>
          </div>
          <button onClick={loadJoke}>Chuck Norris ?</button>
        </div>
      </section>
    );
}

export default Portfolio
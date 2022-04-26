import { useEffect, useState } from "react"
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Portfolio = () => {
    // on déclare la variable joke et sa méthode (fonction) et en même temps
    //  et ça grâce au hook qui s'appelle usState()
    let [page, setPage] = useState(1)
    let [joke, setJoke] = useState('');

    // on redéclare une variable comme pour la variable Joke
    let [gallery, setGallery] = useState([]);

    const nextPage = (page) => {
        setPage(page)
        console.log('page', page)
    }

    const actuPage = (nextPage) => {
        actuPage(nextPage)
        console.log('page', page)
    }

    // on refait un fonction

    const loadPics = () => {
        // fonction fléché
        fetch("https://picsum.photos/v2/list?page="+page+"&limit=3")
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
    useEffect( () => loadPics,[page]);

    return (
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col"><h1>Portfolio</h1></div>
          </div>

          <div>
            <Pagination page={page} nextPage={nextPage}/>
        </div>
          <div className="row">
           
            {gallery.map(
                pic =>{
                    let source =  `https://picsum.photos/id/${pic.id}/1080/920`;
                    let id = pic.id;
                    let author = pic.author;
                    let chuck = joke;
                    return (<Card  key={id} id={id} source={source} joke={chuck} />)
                    
                }
            )}
          </div>
          <button onClick={loadJoke}>Chuck Norris ?</button>
        </div>

        <div>
            <Pagination page={page} nextPage={nextPage}/>
            
        </div>
      </section>
    );
}

export default Portfolio
import { useParams } from "react-router-dom"
// import { Card} from "components/Card"

const Details = () => {
    const {id} = useParams();
    return(
    <div>
        <h1>Détails de l'image ... {id}</h1>
    </div>
)}

export default Details
import Love from '../components/Love';
import Button from '../components/Button';
const Home = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <h1>Home</h1>
                </div>

                <div className="row">
                    <div className="col">
                        <Love name='Coding'/>
                        <p>
                        Justinien est souvent considéré comme le plus grand empereur de l'histoire de l'Empire byzantin ou encore comme le dernier grand empereur romain, avant que l'Empire byzantin (Empire romain d'Orient) ne commence à se différencier de l'Empire romain dont il est le continuateur direct. Il est le dernier empereur à chercher à rétablir l'unité et l'universalité de l'Empire romain, ce qui l'amène à mener des guerres expansionnistes, principalement en Italie et en Afrique, tout en défendant victorieusement les frontières contre les Perses ou les Slaves. Au-delà de ses succès militaires, il entreprend une œuvre de codification législative de grande ampleur qui influence profondément l'évolution du droit en Europe pour les siècles à venir. Très pieux, il intervient fortement dans les affaires religieuses. Son ambition de reconstituer un Empire romain universel se confond avec sa volonté d'une foi chrétienne unique et universelle. De ce fait, il est très actif dans la lutte contre les dissidences religieuses, usant parfois de l'oppression et parfois du dialogue, notamment avec les monophysites, même si ses résultats en la matière sont contrastés. En outre, il contribue à l'épanouissement de l'art byzantin, représenté par la construction de la basilique Sainte-Sophie à Constantinople, mais aussi par de multiples autres édifices. Enfin, le règne de Justinien ne peut se concevoir sans le rôle des multiples personnages dont il a su s'entourer et qui lui ont permis de concrétiser ses ambitions, à l'image de sa femme, l'impératrice Théodora, de ses généraux, dont Bélisaire est le plus célèbre, du juriste Tribonien ou du préfet du prétoire Jean de Cappadoce.
                        </p>
                    </div>
                    <Button/>
                </div>
            </div>
        </section>)
}

export default Home
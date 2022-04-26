import React from "react";

class Contact extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {
      console.log("componentWillMount !!!")
  }

  componentDidMount() {
    console.log("componentDidMount !!!")
}
  render() {
    return (
      <section>
        <div className="container-fluid">
          <div className="row">
            <h1>Contact</h1>
          </div>

          <div className="row">
            <div className="col">
              <p>
                Arma uirumque cano, Troiae qui primus ab oris Italiam, fato
                profugus, Lauiniaque uenit litora, multum ille et terris
                iactatus et alto ui superum saeuae memorem Iunonis ob iram ; Je
                chante les combats du héros prédestiné qui, le premier, fuyant
                les rivages de Troie, aborda en Italie, près de Lavinium ;
                longtemps sur terre et sur mer les dieux puissants le
                malmenèrent, à cause de la colère tenace de la cruelle Junon ;
                1, 1 multa quoque et bello passus, dum conderet urbem,
                inferretque deos Latio, genus unde Latinum, Albanique patres,
                atque altae moenia Romae. Musa, mihi causas memora, quo numine
                laeso, quidue dolens, regina deum tot uoluere casus il endura
                aussi bien des maux à la guerre, avant de fonder sa ville et
                d'introduire ses dieux au Latium, le berceau de la race latine,
                des Albains nos pères et de Rome aux altières murailles. Muse,
                rappelle-moi quelle cause, quelle offense à sa volonté, quel
                chagrin poussa la reine des dieux à imposer à un héros d'une
                piété si insigne 1, 5 insignem pietate uirum, tot adire labores
                impulerit. Tantaene animis caelestibus irae ? {this.props.name}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

import React from 'react';

const PlacePage = () => {
  return (
    <main className="place">
    <div className="place__title-wrapper">
      <h1 className="place__title">
        The Colosseum - symbol of Imperial Rome.
      </h1>
    </div>
    <section className="place__info info">
      <div className="info__wrapper">
        <ul className="info__facts">
          <li className="info__fact">Location:	Regio III Isis et Serapis, Rome, Italy</li>
          <li className="info__fact">Built in	70–80 AD</li>
          <li className="info__fact">Built by	Vespasian</li>
          <li className="info__fact">One of the New7Wonders of the World</li>
        </ul>
        <p className="info__wiki">
          The Colosseum (/ˌkɒləˈsiːəm/ KOL-ə-SEE-əm; Italian: Colosseo [kolosˈsɛːo]), is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum and is the largest ancient amphitheatre ever built, and is still the largest standing amphitheater in the world today, despite its age. Construction began under the emperor Vespasian (r. 69–79 AD) in 72and was completed in AD 80 under his successor and heir, Titus (r. 79–81). Further modifications were made during the reign of Domitian (r. 81–96). The three emperors that were patrons of the work are known as the Flavian dynasty, and the amphitheatre was named the Flavian Amphitheatre (Latin: Amphitheatrum Flavium; Italian: Anfiteatro Flavio [aɱfiteˈaːtro ˈflaːvjo]) by later classNameicists and archaeologists for its association with their family name (Flavius).
        </p>
      </div>
    </section>
    <section className="place__pictures">
      <h2 className="place__pictures-title">Selected photos</h2>
      <div className="place__pictures-line">
      </div>
      <ul className="place__pictures-list">
        <li className="place__picture-wrapper">
          <a href="#" className="place__picture-link">
            <picture>
              <img className="place__picture" src="./img/rome/places/colosseum/colosseum-1.jpg" alt="colosseum" width="605" height="607" object-position="500" />
            </picture>
            <h3 className="place__picture-name">Colosseum  in the dawn</h3>
          </a>
        </li>
        <li className="place__picture-wrapper">
          <a href="#" className="place__picture-link">
            <picture>
              <img className="place__picture" src="./img/rome/places/colosseum/colosseum-2.jpg" alt="colosseum" width="605" height="607" />
            </picture>
            <h3 className="place__picture-name">Inside of Colosseum</h3>
          </a>
        </li>
        <li className="place__picture-wrapper">
          <a href="#" className="place__picture-link">
            <picture>
              <img className="place__picture" src="./img/rome/places/colosseum/colosseum-3.jpg" alt="colosseum" width="605" height="607" />
            </picture>
            <h3 className="place__picture-name">Inside of Colosseum</h3>
          </a>
        </li>
        <li className="place__picture-wrapper">
          <a href="#" className="place__picture-link">
            <picture>
              <img className="place__picture" src="./img/rome/places/colosseum/colosseum-4.jpg" alt="colosseum" width="605" height="607" />
            </picture>
            <h3 className="place__picture-name">Coliseum in the dawn</h3>
          </a>
        </li>
        <li className="place__picture-wrapper">
          <a href="#" className="place__picture-link">
            <picture>
              <img className="place__picture" src="./img/rome/places/colosseum/colosseum-5.jpg" alt="colosseum" width="605" height="607" />
            </picture>
            <h3 className="place__picture-name">Coliseum in the dawn</h3>
          </a>
        </li>
        <li className="place__picture-wrapper">
          <a href="#" className="place__picture-link">
            <picture>
              <img className="place__picture" src="./img/rome/places/colosseum/colosseum-6.jpg" alt="colosseum" width="605" height="607" />
            </picture>
            <h3 className="place__picture-name">Coliseum in the dawn</h3>
          </a>
        </li>
      </ul>
    </section>
  </main>
  )
}

export default PlacePage;

import React from 'react'
import homeimage from '../assets/images/homeimage.jpg'

const Accueil = () => {
  return (
    <div className='container'>
      <h1 className='abc-title'>Bienvenue chez Aliment Bou Casa</h1>
      <br></br>
      <div>
        <div>
          <img src={homeimage} alt="homeimage" className="abc-homeimage" />
        </div>
        <div>
          <h1 className='abc-title1'>À propos : </h1>
          <p1 className = 'abc-paragraphe'>Aliment Bou’Casa est une entreprise spécialisée dans la production et la commercialisation d'aliments pour bétail et porcs, basée à Kolda, Sénégal. <br></br>
          Nous utilisons des ressources locales, notamment la gousse du piliostigma reticulatum, pour fabriquer des aliments de haute qualité. <br></br>
          Nos produits comprennent des aliments en granulés pour porcelets, des aliments de croissance pour porcs, des aliments pour tous ruminants et des aliments pour vaches laitières. <br></br>
          En valorisant les ressources locales et en collaborant avec les communautés rurales, nous visons à soutenir l'autonomie financière des femmes rurales et à promouvoir une agriculture durable.
          </p1>
        </div>
      </div>
    </div>
  )
}
export default Accueil

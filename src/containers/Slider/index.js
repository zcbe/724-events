import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {  // Définition du composant Slider
  const { data } = useData();  // Extraction des données depuis le contexte DataContext
  const [index, setIndex] = useState(0); // Déclaration de l'état local index avec la valeur initiale 0
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    /* 
      Changement de l'opérateur logique pour trier dans le bon sens les images
      De la plus ancienne à la plus récente
    */
      new Date(evtA.date) < new Date(evtB.date) ? 1 : -1 
       );
  const nextCard = () => {
    setTimeout(
      /*
        Suppression de l'élément "undefined" en ajoutant +1 à index
        Ajout de "?" pour vérifier que byDateDesc existe
      */
        () => setIndex(index + 1 < byDateDesc?.length ? index + 1 : 0),
        5000
    );
  };
    
  // Effet pour appeler la fonction nextCard à chaque changement d'index ou au montage du composant
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">   {/* Conteneur de la liste de diapositives */}
      {/* Suppresion des <></> qui encapsulait 2 éléments différents */}   
            {byDateDesc?.map((event, idx) => ( 
           // Changement de la key pour qu'elle soit unique pour chaque slide
           <div key={event.date}>
           <div 
              className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
              {/* Attribut alt modifié pour avoir les renseignements correspondants à l'image */}
              <img src={event.cover} alt={event.title} />
              <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  // Changement de la key pour qu'elle corresponde à la slide en cours
                  key={_.date}
                  type="radio"
                  name="radio-button"
                 /* Remplacement de idx par index pour indiquer sur quelle image on se trouve  */
                  checked={index === radioIdx}      // Vérification si le bouton radio correspond à l'index actuel   
                // Ajout de readOnly pour retirer erreur console
                readOnly  // Lecture seule pour éviter les erreurs de console
                />
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;

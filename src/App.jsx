import React, { useState } from "react"; // Importation de React et du hook useState
import Child from "./components/Child"; // Importation du composant enfant

function Parent() {
  const [count, setCount] = useState(0); // Déclaration d'un état local 'count' avec une valeur initiale de 0

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Conteneur principal centré avec un fond gris clair */}
      <div className="p-6 bg-white shadow-lg rounded-lg">
        {/* Conteneur interne avec un fond blanc, des ombres et des coins arrondis */}
        <h1 className="my-5 font-bold text-3xl text-gray-800">
          {/* Titre avec une taille de police plus grande et une couleur grise */}
          Compteur: {count}
        </h1>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {/* Bouton avec des marges internes, une couleur de texte blanche, et un effet de survol */}
          Incrémenter
        </button>
        <Child message="Ceci est un message d'accessoire" />
        {/* Inclusion du composant enfant */}
      </div>
    </div>
  );
}

export default Parent; // Exportation du composant Parent


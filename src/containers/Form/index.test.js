import { fireEvent, render, screen, } from "@testing-library/react";
import Form from "./index";

describe("When Form is created", () => {
// Test : "une liste de champs de saisie est affichée"
  it("a list of input is displayed", async () => {
    // Rendu du composant Form
    render(<Form />);
    // Recherche du texte "Email, nomn prénom, personnel/entreprise" dans le DOM
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success action is called", async () => {
      // Création d'une fonction simulée onSuccess à l'aide de jest.fn()
      const onSuccess = jest.fn();
      // Rendu du composant Form avec onSuccess passé en tant que prop
      render(<Form onSuccess={onSuccess} />);
      // Déclenchement d'un événement sur le bouton de soumission
      fireEvent(
        // Attente de la résolution de la promesse pour trouver le bouton par son attribut data-testid
        await screen.findByTestId("button-test-id"),
         // Création d'un nouvel événement de clic
        new MouseEvent("click", {
          // Permettre l'annulation de l'événement
          cancelable: true,
          // Permettre la propagation de l'événement
          bubbles: true,
        })
      );
       // Attente que le texte "En cours" soit affiché dans le DOM
      await screen.findByText("En cours");
      // Attente que le texte "Envoyer" soit affiché dans le DOM
      await screen.findByText("Envoyer");
      // Vérification que la fonction onSuccess a été appelée
      expect(onSuccess).toHaveBeenCalled();
    });
  });
});
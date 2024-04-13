import { render, screen } from "@testing-library/react";
import ServiceCard from "./index";

describe("When a service card is created", () => {
  it("an image is display with alt value", () => {
      // Rendu du composant ServiceCard avec l'image source et le texte alternatif
    render(
      <ServiceCard imageSrc="http://src-image" imageAlt="image-alt-text">{" "}</ServiceCard> 
    );
      // Recherche de l'élément image dans le DOM à l'aide de son attribut data-testid
    const imageElement = screen.getByTestId("card-image-testid");
      // Assertion pour vérifier que l'élément image est présent dans le DOM
    expect(imageElement).toBeInTheDocument();
      // Assertion pour vérifier que la valeur de l'attribut alt de l'image correspond à celle spécifiée
    expect(imageElement.alt).toEqual("image-alt-text");
  });
  it("a content is displayed", () => {
      // Rendu du composant ServiceCard avec du contenu
    render(
      <ServiceCard imageSrc="http://src-image" imageAlt="image-alt-text">
        This is the card content
      </ServiceCard>
    );
      // Recherche du contenu dans le DOM à l'aide d'une expression régulière
    const contentElement = screen.getByText(/This is the card content/);
      // Assertion pour vérifier que le contenu est présent dans le DOM

    expect(contentElement).toBeInTheDocument();
  });
});

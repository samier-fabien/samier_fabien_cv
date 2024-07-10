import React from "react";
import HeaderTransition from "../components/HeaderTransition";
import FooterTransition from "../components/FooterTransition";
import SingleColContainer from "../components/SingleColContainer";
import TitleOneObserved from "../components/TitleOneObserved";
import ParagraphObserved from "../components/ParagraphObserved";
import TitleTwoObserved from "../components/TitleTwoObserved";
import "../css/about.css";

export default function About() {
  return (
    <>
      <HeaderTransition title="Présentation" />
      <SingleColContainer>
        <TitleOneObserved
          classToAdd="translate-from-left"
          classToRemove="translate-init"
          borderColor="var(--bs-primary)"
        >
          De manière succinte
        </TitleOneObserved>
        <ParagraphObserved
          classToAdd="translate-from-right"
          classToRemove="translate-init"
          cssClasses="lead p-4"
        >
          <i className="bi bi-quote me-2"></i>Logique et curieux, je suis soucieux de la bonne
          exécution de mon travail et de sa qualité.
          <i className="bi bi-quote ms-2"></i>
        </ParagraphObserved>
        <ParagraphObserved
          classToAdd="translate-from-left"
          classToRemove="translate-init"
          cssClasses="pb-5"
        >
          Je conçois et développe principalement des projets web. J'utilise pour cela html, css,
          react et symfony entre autres. Je travaille sur linux et windows avec git et docker. J'ai
          un an d'expérience et beaucoup de logique et de motivation.
        </ParagraphObserved>
        <TitleOneObserved
          classToAdd="translate-from-right"
          classToRemove="translate-init"
          borderColor="var(--bs-primary)"
        >
          Plus exhaustivement
        </TitleOneObserved>
        <TitleTwoObserved classToAdd="translate-from-left" classToRemove="translate-init">
          La découverte.
        </TitleTwoObserved>
        <ParagraphObserved classToAdd="translate-from-right" classToRemove="translate-init">
          C'est avec <strong>PHP 5.3</strong> que je me suis mis au développement. J'avais découvert{" "}
          <strong>HTML et CSS</strong> précédemment au fil de ma curiosité et je trouvais tout ça
          passionnant mais il me manquait de l'interactivité.{" "}
          <strong>J'ai étudié l'algorithmie et les bases de données</strong> et après quelques
          essais de forums je me suis mis à l'<strong>orienté objet</strong>, puis aux{" "}
          <strong>design patterns</strong>.
        </ParagraphObserved>
        <TitleTwoObserved classToAdd="translate-from-left" classToRemove="translate-init">
          Le développement dans mon métier d'alors.
        </TitleTwoObserved>
        <ParagraphObserved classToAdd="translate-from-right" classToRemove="translate-init">
          <strong>C'était une passion</strong> quand je suis devenu usineur. Je me suis aperçu que
          j'avais de très bonnes bases lorsque j'ai programmé pour les premières fois des machines à
          commande numérique. Le langage n'avait rien en commun avec PHP, Javascript ou SQL mais
          l'algorithmie en procédurale avec des boucles, des variables et des conditions, ça je
          connaissais.
        </ParagraphObserved>
        <ParagraphObserved classToAdd="translate-from-left" classToRemove="translate-init">
          <strong>Ma passion est devenu une force</strong> dans ce cadre professionnelle. Quand j'ai
          évolué pour devenir contrôleur non-destructif, j'ai fais{" "}
          <strong>quelques incursions en C++ et en Java</strong> pour faire notamment un programme
          de calcul de balourd.
        </ParagraphObserved>
        <TitleTwoObserved classToAdd="translate-from-right" classToRemove="translate-init">
          Développeur.
        </TitleTwoObserved>
        <ParagraphObserved classToAdd="translate-from-left" classToRemove="translate-init">
          Lorsque <strong>j'ai eu l'opportunité de faire de mon violon d'Ingres mon métier</strong>,
          je l'ai saisie: remise à niveau puis{" "}
          <strong>formation de Concepteur/Développeur d'Applications</strong> durant 10 mois. Une
          fois le titre acquis j'ai pu faire mes armes.
        </ParagraphObserved>
        <ParagraphObserved classToAdd="translate-from-right" classToRemove="translate-init">
          Ma <strong>soif de connaissances</strong> et ma <strong>curiosité</strong> naturelles sont
          ma grande force. Elles m'ont permis d'en apprendre toujours plus sur diverses technologies
          et langages. <strong>Logique et curieux</strong>, je suis soucieux de la bonne exécution
          de mon travail ainsi que de sa qualité.
        </ParagraphObserved>
      </SingleColContainer>
      <FooterTransition />
    </>
  );
}

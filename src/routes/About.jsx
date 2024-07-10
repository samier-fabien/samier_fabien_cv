import React from "react";
import HeaderTransition from "../components/HeaderTransition";
import FooterTransition from "../components/FooterTransition";
import TitleOne from "../components/TitleOne";

export default function About() {
  return (
    <>
      <HeaderTransition title="Présentation" />
      <section className="container bg-white text-dark">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-8 col-lg-10">
            <TitleOne title="De manière succinte" titleBorderColor="var(--bs-primary)" />
            <p className="lead anim-fade-in p-4">
              <i className="bi bi-quote me-2"></i>Logique et curieux, je suis soucieux de la bonne
              exécution de mon travail et de sa qualité.
              <i className="bi bi-quote ms-2"></i>
            </p>
            <p className="pb-5">
              Je conçois et développe principalement des projets web. J'utilise pour cela html, css,
              react et symfony entre autres. Je travaille sur linux et windows avec git et docker.
              J'ai un an d'expérience et beaucoup de logique et de motivation.
            </p>
            <TitleOne title="Plus exhaustivement" titleBorderColor="var(--bs-primary)" />
            <h4 className="h4">La découverte.</h4>
            <p>
              C'est avec <strong>PHP 5.3</strong> que je me suis mis au développement. J'avais
              découvert <strong>HTML et CSS</strong> précédemment au fil de ma curiosité et je
              trouvais tout ça passionnant mais il me manquait de l'interactivité.{" "}
              <strong>J'ai étudié l'algorithmie et les bases de données</strong> et après quelques
              essais de forums je me suis mis à l'<strong>orienté objet</strong>, puis aux{" "}
              <strong>design patterns</strong>.
            </p>
            <h4 className="h4 pt-4">Le développement dans mon métier d'alors.</h4>
            <p>
              <strong>C'était une passion</strong> quand je suis devenu usineur. Je me suis aperçu
              que j'avais de très bonnes bases lorsque j'ai programmé pour les premières fois des
              machines à commande numérique. Le langage n'avait rien en commun avec PHP, Javascript
              ou SQL mais l'algorithmie en procédurale avec des boucles, des variables et des
              conditions, ça je connaissais.
            </p>
            <p>
              <strong>Ma passion est devenu une force</strong> dans ce cadre professionnelle. Quand
              j'ai évolué pour devenir contrôleur non-destructif, j'ai fais{" "}
              <strong>quelques incursions en C++ et en Java</strong> pour faire notamment un
              programme de calcul de balourd.
            </p>
            <h4 className="h4 pt-4">Développeur.</h4>
            <p>
              Lorsque{" "}
              <strong>j'ai eu l'opportunité de faire de mon violon d'Ingres mon métier</strong>, je
              l'ai saisie: remise à niveau puis{" "}
              <strong>formation de Concepteur/Développeur d'Applications</strong> durant 10 mois.
              Une fois le titre acquis j'ai pu faire mes armes.
            </p>
            <p>
              Ma <strong>soif de connaissances</strong> et ma <strong>curiosité</strong> naturelles
              sont ma grande force. Elles m'ont permis d'en apprendre toujours plus sur diverses
              technologies et langages. <strong>Logique et curieux</strong>, je suis soucieux de la
              bonne exécution de mon travail ainsi que de sa qualité.
            </p>
          </div>
        </div>
      </section>
      <FooterTransition />
    </>
  );
}

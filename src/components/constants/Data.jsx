// DOC Architect Services
import docHero from "../../assets/dave-architect/HeroPage.png";
import docAbout from "../../assets/dave-architect/AboutUs.png";
import docDesign from "../../assets/dave-architect/Design.png";
import docLandscape from "../../assets/dave-architect/Landscape.png";
import docWorks from "../../assets/dave-architect/Works.png";
import docContact from "../../assets/dave-architect/Contact.png";
// ARShop Stainlesss and Installation Services
import ariesHero from "../../assets/aries_stainless/HeroPage.png";
import ariesChoose from "../../assets/aries_stainless/ChooseUsPage.png";
import ariesChooseContent from "../../assets/aries_stainless/ChooseUsContent.png";
import ariesServiceContent from "../../assets/aries_stainless/ServicesContent.png";
import ariesContact from "../../assets/aries_stainless/ContactUs.png";
// RSVP Online wedding
import rsvpHero from "../../assets/RSVP/HeroPage.png";
import rsvpHero2 from "../../assets/RSVP/HeroPage2.png";
import rsvpEntourage from "../../assets/RSVP/EntouragePage.png";
import rsvpEntourage2 from "../../assets/RSVP/EntouragePage2.png";
import rsvpDetails from "../../assets/RSVP/DetailsPage.png";
import rsvpDetails2 from "../../assets/RSVP/DetailsPage2.png";
import rsvpTimeline from "../../assets/RSVP/TimelinePage.png";
import rsvpChurchLocation from "../../assets/RSVP/ChurchLocationPage.png";
import rsvpReceptionLocation from "../../assets/RSVP/ReceptionLocationPage.png";

const Data = [
  // DOC Architect Services
  [docHero, docLandscape, docDesign, docAbout, docWorks, docContact],
  [docWorks, docAbout, docHero, docLandscape, docContact, docDesign],
  // ARShop Stainlesss and Installation Services
  [
    ariesChooseContent,
    ariesChoose,
    ariesHero,
    ariesServiceContent,
    ariesContact,
  ],
  [
    ariesContact,
    ariesServiceContent,
    ariesChooseContent,
    ariesChoose,
    ariesHero,
  ],
  // RSVP ONLINE WEDDING
  [rsvpHero, rsvpHero2, rsvpEntourage, rsvpEntourage2, rsvpTimeline],
  [
    rsvpDetails2,
    rsvpDetails,
    rsvpChurchLocation,
    rsvpReceptionLocation,
    rsvpHero,
  ],
];

export const Info = {
  Arshop: {
    title: "ARSHOP",
    firstSubtitle: "STAINLESS &",
    secondSubtitle: "INSTALLATION SERVICES",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    github: "https://github.com/Magnum0310",
    web: "https://arshop-ph.online",
  },
  DOC: {
    title: "DOC",
    firstSubtitle: "ARCHITECTURAL",
    secondSubtitle: "SERVICES",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    github: "https://github.com/Magnum0310",
    web: "https://dave-architect.online",
  },

  RSVP: {
    title: "RSVP",
    firstSubtitle: "CUSTOMIZED ONLINE",
    secondSubtitle: "WEDDING RSVP",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    github: "https://github.com/Magnum0310",
    web: "https://google.com",
  },
};

export default Data;

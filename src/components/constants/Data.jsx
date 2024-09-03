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
  [docDesign, docAbout, docWorks, docContact, docHero, docLandscape],
  // ARShop Stainlesss and Installation Services
  [
    ariesChooseContent,
    ariesChoose,
    ariesHero,
    ariesServiceContent,
    ariesContact,
  ],
  [
    ariesHero,
    ariesServiceContent,

    ariesContact,
    ariesChoose,
    ariesChooseContent,
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
      "A clean and modern static business website designed for simplicity and ease of use.The site offers visitors a clear overview of the business’s offerings, highlighting key products and detailing the services available.",
    github: "https://github.com/Magnum0310",
    web: "https://arshop-ph.online",
  },
  DOC: {
    title: "DOC",
    firstSubtitle: "ARCHITECTURAL",
    secondSubtitle: "SERVICES",
    description:
      "A professional static website developed for DOC, a architectural firm providing specialized business solutions. The website outlines the firm's key services, expertise, and approach. With a minimalist design and straightforward navigation, it allows potential clients to quickly understand what DOC offers and encourages them to get in touch for consultations.",
    github: "https://github.com/Magnum0310",
    web: "https://dave-architect.online",
  },

  RSVP: {
    title: "RSVP",
    firstSubtitle: "CUSTOMIZED ONLINE",
    secondSubtitle: "WEDDING RSVP",
    description:
      "A personalized online RSVP platform created for a wedding event. The website includes details about the event, such as the date, venue, schedule, and special instructions.It has a responsive design that ensures a smooth experience across all devices",
    github: "https://github.com/Magnum0310",
    web: "https://google.com",
  },
};

export default Data;

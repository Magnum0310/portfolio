import docFirst from "../../assets/dave-architect/HeroPage.png";
import docSecond from "../../assets/dave-architect/AboutUs.png";
import docThird from "../../assets/dave-architect/Design.png";
import docFourth from "../../assets/dave-architect/Landscape.png";
import docFifth from "../../assets/dave-architect/Works.png";
import docSixth from "../../assets/dave-architect/Contact.png";
import ariesFirst from "../../assets/aries_stainless/HeroPage.png";
import ariesSecond from "../../assets/aries_stainless/ChooseUsPage.png";
import ariesThird from "../../assets/aries_stainless/ChooseUsContent.png";
import ariesFourth from "../../assets/aries_stainless/ServicesContent.png";
import ariesFifth from "../../assets/aries_stainless/ContactUs.png";

const Data = [
  [docFirst, docFourth, docThird, docSecond, docFifth, docSixth],
  [docFifth, docSecond, docFirst, docFourth, docSixth, docThird],
  [ariesThird, ariesSecond, ariesFirst, ariesFourth, ariesFifth],
  [ariesFifth, ariesFourth, ariesThird, ariesSecond, ariesFirst],
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
};

export default Data;

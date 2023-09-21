import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import * as bootstrap from "bootstrap";

import "./style.scss";
import { createApp } from "vue";
import App from "./App.vue";
import WebFontLoader from "webfontloader";

WebFontLoader.load({
  google: {
    families: ["Raleway:200,300", "Libre Baskerville:400", "Roboto:400"],
  },
  active: function () {},
});

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
// brands
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

// solid
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// regular
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
  faTwitter,
  faCopyright,
  faLocationDot,
  faLinkedinIn,
  faFacebookF,
  faPhone,
  faEnvelope,
  faPlay,
  faTag,
  faClock,
  faMagnifyingGlass,
  faBars,
  faUser
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

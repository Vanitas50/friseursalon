import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Leistungen } from "./pages/Leistungen";
import { Preise } from "./pages/Preise";
import { Galerie } from "./pages/Galerie";
import { UeberUns } from "./pages/UeberUns";
import { Kontakt } from "./pages/Kontakt";
import { TerminBuchen } from "./pages/TerminBuchen";
import { Datenschutz } from "./pages/Datenschutz";
import { Impressum } from "./pages/Impressum";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "leistungen", Component: Leistungen },
      { path: "preise", Component: Preise },
      { path: "galerie", Component: Galerie },
      { path: "ueber-uns", Component: UeberUns },
      { path: "kontakt", Component: Kontakt },
      { path: "termin-buchen", Component: TerminBuchen },
      { path: "datenschutz", Component: Datenschutz },
      { path: "impressum", Component: Impressum },
    ],
  },
]);

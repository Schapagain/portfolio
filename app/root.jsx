import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";

/* Font awesome config --> */
import {
  faCode,
  faCheckCircle,
  faMoneyCheckAlt,
  faMugHot,
  faCloudSunRain,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Navigation from "./components/Navigation";

library.add(
  faCode,
  faCheckCircle,
  faMoneyCheckAlt,
  faMugHot,
  faLinkedin,
  faGithub,
  faCloudSunRain
);
/* <-- Font awesome config */

export const meta = () => ({
  charset: "utf-8",
  title: "Sandesh's Wall",
  description: `You've landed on a perfect place if you want to know more about Sandesh Chapagain. 
  Sandesh works as a software developer and is particularly interested in frontend engineering.
  He has experience in developing custom full-stack applications, and also has dabbled into the Salesforce and Adobe ecosystems to build applications`,
  viewport: "width=device-width,initial-scale=1",
});
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="w-full max-w-screen-xl mx-auto min-h-screen flex flex-col justify-center items-center bg-turq text-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

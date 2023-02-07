import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
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
import { json } from "@remix-run/node";
import { useEffect } from "react";
import { pageView } from "./utils/gtags.client";

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

// Load the GA tracking id from the .env
export const loader = async () => {
  return json({ gaTrackingId: process.env.GA_TRACKING_ID });
};

function AnalyticsScript({ trackingId }) {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      ></script>
      <script
        async
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${trackingId}', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
    </>
  );
}

export default function App() {
  const location = useLocation();
  const { gaTrackingId } = useLoaderData();

  useEffect(() => {
    if (gaTrackingId?.length) {
      pageView(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="w-full max-w-screen-xl mx-auto min-h-screen flex flex-col bg-turq text-white">
        <AnalyticsScript trackingId={gaTrackingId} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

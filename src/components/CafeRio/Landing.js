import NavBar from "./NavBar";
import Button from "../Button";
import Overlay from "../Overlay";

const webLink = "https://cafe-rio.netlify.app/";
const IntroText = () => {
  return (
    <div className="z-50 text-center text-white">
      <p className="text-3xl mb-4">A place to recharge yourself</p>
      <div className="text-xl">
        <p>Drink some coffee.</p>
        <p>Grab a snack.</p>
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <div className="relative rounded-xl w-full h-full p-4 bg-cover bg-coffee-on-desk justify-between flex flex-col">
      <Overlay color="black" opacity="20" />
      <NavBar className="z-50" webLink={webLink} />
      <div className="md:flex-row flex flex-col h-2/3 my-auto justify-center">
        <div className="flex my-auto m-3 w-full lg:w-1/2 flex-col">
          <IntroText />
          <Button
            href={webLink}
            className="rounded-full hover:bg-green-600"
            text="See menu"
          />
        </div>
        <div className="m-2 hidden lg:flex w-1/2 flex-col"></div>
      </div>
    </div>
  );
};

export default Landing;

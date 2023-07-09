import React from "react";
import SocialLinks from "./social-links";
import Subscribe from "./subscribe";
import Image from "next/image";
import Ad2 from "../../public/assets/ad-2.png";
import AboutProfile from "../../public/assets/about-profile.jpg";

const Sidebar = () => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-center text-xs font-bold">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-500 my-8">
        <Image
          className="hidden md:block my-8 w-full"
          src={Ad2}
          alt="advert-2"
          placeholder="blur"
          width={500}
          height={1000}
        />
      </div>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-center text-xs font-bold">
        About the Blog
      </h4>
      <div className="flex justify-center my-3">
        <Image
          style={{ width: "500px", height: "250px", objectFit: "cover" }}
          src={AboutProfile}
          alt="Image"
          placeholder="blur"
          sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 text-center font-bold">
        Geoffry Epstein
      </h4>
      <p className="text-wh-500 text-center text-sm">
        De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless
        mortuis soulless creaturas, imo evil stalking monstra adventus resi
        dentevil vultus comedat cerebella viventium.
      </p>
    </section>
  );
};

export default Sidebar;

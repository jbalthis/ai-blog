import React from "react";
import SocialLinks from "./social-links";
import Subscribe from "./subscribe";

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
      <div className="bg-wh-500 my-8">advert image</div>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-center text-xs font-bold">
        About the Blog
      </h4>
      <div className="bg-wh-500 my-8">profile image</div>
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

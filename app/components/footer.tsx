import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem Ipsum is the single greatest threat. We are not - we are not
            keeping up with other websites. Lorem Ipsum best not make any more
            threats to your website. It will be met with fire and fury like the
            world has never seen.
          </p>
          <p className="font-thin text-xs">
            <i>&copy; BarelyJason.Online, All Rights Reserved</i>
          </p>
        </div>
  
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="mt-5 mb-2">Cupcake ipsum dolor</p>
          <p className="my-2">Mortuis soulless creaturas</p>
          <p>Evil stalking monstra</p>
        </div>

        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5 mb-2">Bacon ipsum dolor amet short ribs</p>
          <p>(555)768-5858</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

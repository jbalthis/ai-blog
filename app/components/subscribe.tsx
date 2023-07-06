"use client";
import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="text-center bg-wh-10 px-5 py-10">
      <h4 className="font-bold text-base">Subscribe To Our Newsletter</h4>
      <p className="my-3 w-5/6 mx-auto text-wh-500">
        Enter email address to get top news and great deals!
      </p>
      <input
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Enter Email Address"
        type="email"
        value={email}
        onChange={handleChange}
      />
      <button
        className="bg-accent-red text-wh-10 font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3"
        onClick={(e) => console.log(`Event => ${e}\n Email => ${email}`)}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Subscribe;

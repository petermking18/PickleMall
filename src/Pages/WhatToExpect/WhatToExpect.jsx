import React from "react";

export default function WhatToExpect() {
  const steps = [
    {
      title: "FIND A LOCATION",
      text: "When you arrive at the Picklemall location, simply check in at the front desk. Our friendly staff will guide you through the check-in process and point you in the direction of your court. *** add in (If you don’t have a paddle, you can rent one of our Joola x Picklemall paddles!)",
      image: "https://placehold.jp/550x250.png",
    },
    {
      title: "FIND A BOOKING",
      text: "Once you've selected your preferred location, you can book a court hour on the app or sign up for one of our leagues or clinics. Our app is easy to use and allows you to quickly book a court at a time that works best for you.",
      image: "https://placehold.jp/550x250.png",
    },
  ];

  return (
    <div className="what-to-expect">
      <div className="container">
        <h1 className="about-header font-barlow-condensed text-deep-blue">
          WHAT TO EXPECT<span className="text-pickle-green">.</span>
        </h1>
        <p className="w-50">
          Welcome to Picklemall, the one-stop destination for all your
          pickleball needs. Whether you're a seasoned player or a beginner,
          we've got you covered with our state-of-the-art facilities, equipment,
          and expert coaching.
        </p>
        <div>
          {steps.map((step, index) => (
            <div key={step.title}>
              <h1 className="font-barlow-condensed text-deep-blue">
                STEP {index + 1}: {step.title}
              </h1>
              <div className="d-flex align-items-center shadow">
                {index % 2 === 0 ? (
                  <>
                    <img src={step.image} />
                    <p className="px-5">{step.text}</p>
                  </>
                ) : (
                  <>
                    <p className="px-5">{step.text}</p>
                    <img src={step.image} />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-2"></div>
    </div>
  );
}

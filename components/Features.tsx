"use client";
import Image from "next/image";
import featuresImage1 from "@/public/illustration-features-tab-1.svg";
import featuresImage2 from "@/public/illustration-features-tab-2.svg";
import featuresImage3 from "@/public/illustration-features-tab-3.svg";
import FeatureItem from "./FeatureItem";
import { useState } from "react";
import TabItem from "./TabItem";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButton = (index: number) => {
    setActiveIndex(index);
  };

  let activeClass = "";

  switch (activeIndex) {
    case 0:
      activeClass = "";
      break;
    case 1:
      activeClass = "md:ml-[225px] lg:ml-[300px]";
      break;
    case 2:
      activeClass = "md:ml-[450px] lg:ml-[600px]";
      break;
  }

  return (
    <section className="container p-12 mx-auto mt-14 mb-12">
      <div>
        <div className="flex flex-col items-center text-center space-y-6">
          <h3 className="text-3xl font-semibold text-veryDarkBlue">Features</h3>
          <p className="text-lg text-gray-400 max-w-md lg:max-w-lg lg:text-xl">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div className="mt-24 mx-auto max-w-4xl border-t pt-3 md:pt-0 md:border-t-0 md:border-b">
          <div className="flex flex-col space-y-3 mb-4 md:justify-between md:flex-row md:space-y-0 md:px-8">
            <div className="w-full border-b md:border-b-0">
              <FeatureItem
                handleButton={() => handleButton(0)}
                active={activeIndex === 0}
              >
                Simple Bookmarking
              </FeatureItem>
            </div>
            <div className="w-full border-b md:border-b-0">
              <FeatureItem
                handleButton={() => handleButton(1)}
                active={activeIndex === 1}
              >
                Speedy Searching
              </FeatureItem>
            </div>
            <div className="w-full border-b md:border-b-0">
              <FeatureItem
                handleButton={() => handleButton(2)}
                active={activeIndex === 2}
              >
                Easy Sharing
              </FeatureItem>
            </div>
          </div>
          <div
            className={`hidden md:block border-b-4 border-b-red-400 w-1/3 ${activeClass}`}
          ></div>
        </div>
        <div className="flex flex-col items-center mt-24 space-y-12 lg:space-x-16 xl:space-x-8 lg:space-y-0 lg:flex-row">
          <div className="w-5/6 flex items-center justify-center lg:w-1/2 xl:ml-24">
            <Image
              src={
                activeIndex === 0
                  ? featuresImage1
                  : activeIndex === 1
                  ? featuresImage2
                  : activeIndex === 2
                  ? featuresImage3
                  : ""
              }
              alt="features image"
            />
          </div>
          {activeIndex === 0 ? (
            <TabItem
              title="Bookmark in one click"
              description="Organize your bookmarks however you like. Our simple drag-and-drop
      interface gives you complete control over how you manage your favourite
      sites."
            />
          ) : activeIndex === 1 ? (
            <TabItem
              title="Intelligent search"
              description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
            />
          ) : activeIndex === 2 ? (
            <TabItem
              title="Share your bookmarks"
              description="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;

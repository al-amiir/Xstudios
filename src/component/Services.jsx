import React, { useEffect } from "react";
import { animateLoading, animateLoadingBackground } from "../globalFunctions/globalAnimation";
import productionIcon from "../material/icons/production.png";
import animationIcon from "../material/icons/animation.png";
import webIcon from "../material/icons/web.png";
import brandIcon from "../material/icons/branding.png";
import socialIcon from "../material/icons/socialMedia.png";
import videoIcon from "../material/icons/videoGraphy.png";

const Services = () => {
  let text1 = "Branding  media production  websites  applications  motion graphics  social media  marketing  photography  videography  media coverage  media production  printing";
  useEffect(() => {
    return () => {
      animateLoadingBackground("normal");
      setTimeout(() => {
        animateLoading(".loading span", "normal");
        setTimeout(() => {
          animateLoadingBackground("reverse");
          animateLoading(".loading span", "reverse");
        }, 1000);
      }, 1000);
    };
  }, []);

  return (
    <div>
      <section className="services">
        <div className="services_text">
          <p className="services_text-header">our services</p>
          <span className="services_text-header-line"></span>
          <div className="services_text-words">
            <div>
              <img src={brandIcon} alt="" />
              <p>Branding</p>
              <span>We believe that strong branding is at the heart of strong businesses. We translate your story into a brand, creating things that are simple, inspirational and dynamic in order to trigger positive impression of your business.</span>
            </div>
            <div>
              <img src={webIcon} alt="" />
              <p>Website</p>
              <span>We provide professional service, quality web design and development, and trustworthy results. With careful audience targeting, we create highly functional user interfaces with the perfect mixture of simplicity, elegance, and innovation for each of our clients.</span>
            </div>{" "}
            <div>
              <img src={socialIcon} alt="" />
              <p>Social Media</p>
              <span>We offer on going artistic designs, social media campaigns and promotions and paid social advertising ads. No matter the platform, we understand how to best use social media for business.</span>
            </div>
            <div>
              <img src={animationIcon} alt="" />
              <p>animation</p>
              <span>Videos are the most effective way to communicate the benefits of your products or services, whether on your website, in an email or social media. We create creative storyboards and engaging videos to help you communicate your message in a couple of minutes.</span>
            </div>{" "}
            <div>
              <img src={videoIcon} alt="" />

              <p>videography</p>
              <span>We combine technical expertise with a deep aesthetic sense to produce high quality videos. Our philosophy is to be creative and enjoy the work, via creating well-crafted, informative and interesting videos for clients in all sectors worldwide.</span>
            </div>{" "}
            <div>
              <img src={productionIcon} alt="" />
              <p>production</p>
              We produce professionally finished print materials, whether it is a business card, brochure, billboard, multipage magazine or events related stuff.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

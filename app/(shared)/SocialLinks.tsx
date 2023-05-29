import React from "react";
import Image from "next/image";
import Twitter from "public/assets/social_twitter.png";
import Facebook from "public/assets/social_facebook.png";
import Instagram from "public/assets/social_instagram.png";
import Discord from "public/assets/social_discord.png";
import Google from "public/assets/social_google.png";
import Pinterest from "public/assets/social_pinterest.png";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a
        href="https://twitter.com/frisco11ward"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          src={Twitter}
          alt="Twitter"
          width={20}
          height={20}
        />
      </a>
      <a
        href="https://www.facebook.com/frisco11ward"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          src={Facebook}
          alt="Facebook"
          width={20}
          height={20}
        />
      </a>
      <a
        href="https://www.instagram.com/frisco11ward"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          src={Instagram}
          alt="Instagram"
          width={20}
          height={20}
        />
      </a>
      <a
        href="https://discord.gg/5Q3q9XZ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          src={Discord}
          alt="Discord"
          width={20}
          height={20}
        />
      </a>
      <a
        href="https://www.google.com/maps/place/11000+Frisco+Rd,+Frisco,+TX+75035"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          src={Google}
          alt="Google"
          width={20}
          height={20}
        />
      </a>
      <a
        href="https://www.pinterest.com/frisco11ward"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          src={Pinterest}
          alt="Pinterest"
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;

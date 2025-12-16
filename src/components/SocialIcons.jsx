import React from "react";

const socialLinks = [
  { href: "#", icon: "bi bi-meta" },
  { href: "#", icon: "bi bi-twitter-x" },
  { href: "#", icon: "bi bi-youtube" },
  { href: "#", icon: "bi bi-share", className: "share" },
];

const SocialIcons = () => {
  return (
    <ul className="social">
        {socialLinks.map((link, index) => (
        <li key={index}>
          <a href={link.href} className={link.className || ""}>
            <i className={link.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
"use client";
import React from "react";
import "./SocialIcons.css";

interface IconProps {
  size?: number;
  color?: string;
}

export const LinkedInIcon: React.FC<IconProps> = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="2" y="9" width="4" height="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="4" cy="4" r="2" stroke={color} strokeWidth="1.5"/>
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.5"/>
    <circle cx="17.5" cy="6.5" r="0.75" fill={color}/>
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5m0 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SOCIALS = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/eqbmilano", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com/eqbmilano/",       Icon: InstagramIcon },
  { label: "WhatsApp",  href: "https://wa.me/message/ZDLNL4HKLOF6H1",       Icon: WhatsAppIcon },
];

export type SocialStyle = "minimal" | "circle" | "label" | "pill";

interface SocialLinksProps {
  variant?: "light" | "dark";
  size?: number;
  direction?: "row" | "column";
  iconStyle?: SocialStyle;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = "light",
  size = 20,
  direction = "row",
  iconStyle = "minimal",
}) => (
  <div className={`social-links social-links--${variant} social-links--${direction} social-links--${iconStyle}`}>
    {SOCIALS.map(({ label, href, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`social-links__item social-links__item--${iconStyle}`}
        aria-label={label}
      >
        <Icon size={size} />
        {(iconStyle === "label" || iconStyle === "pill") && (
          <span className="social-links__label">{label}</span>
        )}
      </a>
    ))}
  </div>
);

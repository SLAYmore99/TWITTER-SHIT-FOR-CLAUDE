import React from "react";

// X dark-mode palette
export const C = {
  bg: "#000000",
  text: "#E7E9EA",
  sub: "#71767B",
  line: "#2F3336",
  blue: "#1D9BF0",
  claude: "#D97757",
};

type P = { size?: number; color?: string };

export const XLogo: React.FC<P> = ({ size = 24, color = C.text }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Verified: React.FC<P> = ({ size = 18, color = C.blue }) => (
  <svg width={size} height={size} viewBox="0 0 22 22">
    <path
      fill={color}
      d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816z"
    />
    <path fill="#fff" d="M9.585 14.929l-3.28-3.28 1.168-1.169 2.112 2.106 5.134-5.134 1.168 1.168z" />
  </svg>
);

const stroke = (d: string) =>
  function Icon({ size = 18.75, color = C.sub }: P) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
      </svg>
    );
  };

export const Reply = stroke("M4 11.5a7.5 7 0 0 1 7.5-7h1A7.5 7 0 0 1 20 11.5a7.5 7 0 0 1-7.5 7H11l-4.5 3v-3.6A7 7 0 0 1 4 11.5z");
export const Repost = stroke("M4.5 9.5 7.5 6.5l3 3M7.5 7v8.5a2 2 0 0 0 2 2h4.5M19.5 14.5l-3 3-3-3M16.5 17V8.5a2 2 0 0 0-2-2H10");
export const Like = stroke("M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z");
export const Views = stroke("M5 20V12M10 20V5M15 20v-9M20 20V8");
export const Bookmark = stroke("M6.5 4h11v16.5l-5.5-4-5.5 4z");
export const Share = stroke("M12 3.5v11M7.5 8 12 3.5 16.5 8M4.5 14.5v4a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4");
export const More = ({ color = C.sub }: P) => (
  <svg width={18.75} height={18.75} viewBox="0 0 24 24" fill={color}>
    <circle cx="5" cy="12" r="1.7" />
    <circle cx="12" cy="12" r="1.7" />
    <circle cx="19" cy="12" r="1.7" />
  </svg>
);
export const Muted = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="#fff">
    <path d="M3 9h4l5-4v14l-5-4H3zM16 9l5 6M21 9l-5 6" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

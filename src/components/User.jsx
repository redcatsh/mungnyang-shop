import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex items-center">
      <img
        className="w-5 h-5 rounded-full mr-2 md:w-10 md:h-10"
        src={photoURL}
        alt={displayName}
      />
      <span className="hidden md:block font-[SCDream]">{displayName}</span>
    </div>
  );
}

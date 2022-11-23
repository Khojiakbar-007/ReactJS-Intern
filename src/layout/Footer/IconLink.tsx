import React from "react";

function IconLink({ children }: { children: React.ReactElement }) {
  return (
    <a href="#" className="icon-social-link">
      {children}
    </a>
  );
}

export default IconLink;

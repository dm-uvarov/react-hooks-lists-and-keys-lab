import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a key = {github} href={github}>{github}</a>
      <a key = { linkedin} href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;

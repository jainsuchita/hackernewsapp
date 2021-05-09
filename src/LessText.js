import React, { useState } from "react";

function LessText({ text, maxLength }) {
  const [hidden, setHidden] = useState(true);

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  if (hidden) {
    let newSubText = text.substr(0, maxLength).trim();
    return (
      <>
        <p>{newSubText}...</p>
        <a onClick={() => setHidden(false)}>read more</a>
      </>
    );
  } else {
    return (
      <>
        <p>{text}</p>
        <a onClick={() => setHidden(true)}>read less</a>
      </>
    );
  }
}

export default LessText;

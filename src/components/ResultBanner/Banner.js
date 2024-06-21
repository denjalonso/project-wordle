import React from "react";

function SadBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

function HappyBanner({ intents }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{intents === 1 ? "1 guess" : `${intents} guesses`}</strong>.
      </p>
    </Banner>
  );
}

function Banner({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner;
export { SadBanner, HappyBanner };

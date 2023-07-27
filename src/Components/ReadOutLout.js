import { useState } from "react";
import React from "react";

const ReadOutLout = ({ product }) => {
  const { title, product_price, description } = product;
  const [speechSynthesis] = useState(window.speechSynthesis);
  const handleReadAloud = () => {
    const utterance = new SpeechSynthesisUtterance(
      `${title}. The price is ${product_price}. Description: ${description}`
    );
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <button onClick={handleReadAloud}>Read Out Loud</button>
    </div>
  );
};

export default ReadOutLout;

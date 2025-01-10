/** @format */

import React, { useState } from "react";

const Text = ({ setCharacterCount }) => {
  const [text, setText] = useState("");
  const MAX_CHARACTERS = 100000;

  const handleTextChange = (e) => {
    const newText = e.target.value;

    // Only update text if it doesn't exceed the maximum character count
    if (newText.length <= MAX_CHARACTERS) {
      setText(newText);
      setCharacterCount(newText.length); // Update the character count in the parent component
    }
  };

  return (
    <div className="mt-10">
      <div>
        <p className="text-[16px] text-black2">
          Write here any extra text that you consider relevant for your audience
        </p>
        <textarea
          value={text}
          onChange={handleTextChange}
          rows={12}
          className="bg-transparent border-2 p-4 text-black1 border-gray4 rounded-md w-full resize-none"
          placeholder="Write your text here..."
        />
        <p className="mt-2 text-black2">
          Total Characters: {text.length}/{MAX_CHARACTERS}
        </p>
      </div>
    </div>
  );
};

export default Text;

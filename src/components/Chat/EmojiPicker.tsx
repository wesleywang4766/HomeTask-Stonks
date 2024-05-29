import React from "react";
import Image from "next/image";
import useVisibility from "../../hooks/useVisibility";

const emojis = ["smile", "wink", "laugh", "cry"]; // Add more emoji names

interface EmojiPickerProps {
  clickHandle: (emoji: string) => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ clickHandle }) => {
  const { visible, toggle } = useVisibility(false);

  return (
    <div>
      <button onClick={toggle}>😀</button>
      {visible && (
        <div>
          {emojis.map((emoji) => (
            <div
              key={emoji}
              className="w-6 h-6 inline-block cursor-pointer"
              onClick={() => clickHandle(":" + emoji + ":")}
            >
              <Image
                src={`/emoji/${emoji}.png`}
                alt={emoji}
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;

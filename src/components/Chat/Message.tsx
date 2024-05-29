import React from "react";

type MessageProps = {
  message: {
    id: number;
    text: string;
    user: string;
  };
};

const Message: React.FC<MessageProps> = ({ message }) => {
  const processMessage = (text: string) => {
    const emojiRegex = /:([a-zA-Z0-9_]+):/g;
    const tagRegex = /@([\w.]+)/g;
    let processedText = text
      .replace(
        emojiRegex,
        (match, p1) =>
          `<Image
                src="/emoji/${p1}.png"
                alt={p1}
                width=24
                height=24
              />`
      )
      .replace(tagRegex, '<span class="text-blue-500 font-bold">@$1</span>');
    return processedText;
  };

  return (
    <div>
      <span>{message.user}: </span>
      <span
        dangerouslySetInnerHTML={{ __html: processMessage(message.text) }}
      />
    </div>
  );
};

export default Message;

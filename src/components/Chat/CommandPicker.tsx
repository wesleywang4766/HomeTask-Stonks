import React from "react";
import useVisibility from "../../hooks/useVisibility";

const commands = ["/mute", "/ban", "/title", "/description"];

interface CommandPickerProps {
  clickHandle: (command: string) => void;
}

const CommandPicker: React.FC<CommandPickerProps> = ({ clickHandle }) => {
  const { visible, show, hide } = useVisibility(false);

  return (
    <div>
      <input type="text" onFocus={show} placeholder="Type / for commands" />
      {visible && (
        <div>
          {commands.map((command) => (
            <div
              key={command}
              onClick={() => {
                clickHandle(command);
                hide();
              }}
            >
              {command}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommandPicker;

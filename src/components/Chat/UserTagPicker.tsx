import React from "react";
import useVisibility from "../../hooks/useVisibility";
import useFetch from "../../hooks/useFetch";

interface UserTagPickerProps {
  clickHandle: (usertag: string) => void;
}

const UserTagPicker: React.FC<UserTagPickerProps> = ({ clickHandle }) => {
  const { data, loading, error } = useFetch("/users");
  const { visible, show, hide } = useVisibility(false);

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">Error loading data.</p>;

  return (
    <div>
      <input type="text" onFocus={show} placeholder="Type @ to tag" />
      {visible && (
        <div>
          {data.map((user) => (
            <div
              key={user.username}
              onClick={() => {
                clickHandle("@" + user.username);
                hide();
              }}
            >
              @{user.username}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserTagPicker;

import React from "react";

type User = {
  id: string;
  username: string;
  email: string;
};

type TableRowProps = {
  user: User;
};

const TableRow: React.FC<TableRowProps> = ({ user }) => {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
  );
};

export default TableRow;

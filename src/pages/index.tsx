import { GetServerSideProps } from "next";
import DataTable, { User } from "../components/DataTable/DataTable";

const Home = ({ users }: { users: User[] }) => {
  return (
    <div>
      <h1>SSR Data Table</h1>
      <DataTable initialData={users} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("https://665621609f970b3b36c4625e.mockapi.io/users");
  const users = await res.json();
  return {
    props: { users },
  };
};

export default Home;

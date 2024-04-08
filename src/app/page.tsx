import Datatable from "@/components/datatable";
import { getUsers } from "./users";
import { columns } from "./columns";

export default async function Home() {
  const users = await getUsers();

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="mb-16 text-2xl font-medium">React Datatable</h1>
        <Datatable
          data={users}
          columns={columns}
          globalFilterColumn="name"
          caption="List of users."
        />
      </div>
    </section>
  );
}

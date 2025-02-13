import { useEffect, useState } from "react";
import "./config/i18n";
import ToggleTheme from "./components/ToggleTheme";
import Language from "./components/Language";
import { getAllItem } from "./api/item";
import CreateItem from "./components/CreateItem";
import TableItem from "./components/TableItem";

export interface Item {
  id?: number;
  content: string;
  updatedAt?: string;
}

function App() {
  const [send, setSend] = useState<boolean>(false);
  const [data, setData] = useState<Item[]>([]);
  const [form, setForm] = useState<Item>({ content: "" });

  useEffect(() => {
    allItems();
  }, []);

  const allItems = async () => {
    try {
      setSend(true);
      const res = await getAllItem();
      if (res?.data && Array.isArray(res.data)) {
        setData(res.data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setSend(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 bg-gray-100 dark:bg-gray-700 h-screen w-full p-10 text">
      <div className="flex gap-2">
        <ToggleTheme />
        <Language />
      </div>

      <div className="text-black dark:text-white flex flex-col gap-2">
        <CreateItem form={form} setForm={setForm} setData={setData} setSend={setSend} />
        <TableItem data={data} send={send} setSend={setSend} setData={setData} setForm={setForm} />
      </div>
    </div>
  );
}

export default App;

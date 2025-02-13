import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { Item } from "../App";
import { deleteItem } from "../api/item";

interface TableProps {
  data: Item[];
  send: boolean;
  setSend: (status: boolean) => void;
  setData: (items: Item[]) => void;
  setForm: (item: Item) => void;
}

function TableItem({ data, send, setSend, setData, setForm }: TableProps) {
  const { t } = useTranslation();

  const handleDelete = async (id?: number) => {
    if (!id) return;
    const isConfirmed = window.confirm(t("sureTodelete"));
    if (!isConfirmed) return;

    setSend(true);
    try {
      const res = await deleteItem(id);
      if (res?.data && Array.isArray(res.data)) {
        setData(res.data);
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    } finally {
      setSend(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center bg-gray-200 dark:bg-gray-800 w-full p-5 rounded-lg">
      <p className="text-[20px]">{t("registerTable")}</p>
      <table className="w-full p-3 bg-gray-300 dark:bg-gray-900 rounded-lg text-center">
        <thead>
          <tr className="uppercase">
            <th>ID</th>
            <th>{t("message")}</th>
            <th>{t("updatedAt")}</th>
            <th>{t("action")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.content}</td>
              <td>{d.updatedAt ? format(new Date(d.updatedAt), "MM/dd/yyyy pp") : "N/A"}</td>
              <td className="flex gap-1 justify-center">
                <button onClick={() => handleDelete(d.id)} className="px-1 text-[20px] rounded-br-lg rounded">
                  🗑️
                </button>
                <button onClick={() => setForm(d)} className="px-1 text-[20px] rounded-br-lg rounded">
                  ✏️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {data.length === 0 && !send && <p className="text-center">{t("nothingToShow")}</p>}

      {send && (
        <div className="flex gap-2 bg-gray-300 dark:bg-gray-900 p-4 rounded animate-pulse">
          <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
          <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
          <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
        </div>
      )}
    </div>
  );
}

export default TableItem;

import { FormEvent, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { newItem, updateItem } from "../api/item";
import { Item } from "../App";

interface Props {
  form: Item;
  setForm: (item: Item) => void;
  setSend: (status: boolean) => void;
  setData: (items: Item[]) => void;
}

function CreateItem({ form, setForm, setSend, setData }: Props) {
  const { t } = useTranslation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSend(true);

    try {
      const res = form.id ? await updateItem(form.id, form.content) : await newItem(form.content);
      if (res?.data && Array.isArray(res.data)) {
        setData(res.data);
      }
      setForm({ content: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setSend(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, content: event.target.value });
  };

  return (
    <div className="flex flex-col gap-2 items-center bg-gray-200 dark:bg-gray-800 w-full p-5 rounded-lg">
      <p className="text-[20px]">{form.id ? `${t("writeMessage")} ${form.id}` : t("createRegister")}</p>

      <form className="flex w-full" onSubmit={handleSubmit}>
        <textarea
          required
          className="w-full p-3 bg-gray-300 dark:bg-gray-900 rounded-lg"
          placeholder={t("writeMessage")}
          onChange={handleChange}
          value={form.content}
        />
        <button className="px-5 bg-white text-[22px] rounded-lg">✈️</button>
      </form>
    </div>
  );
}

export default CreateItem;
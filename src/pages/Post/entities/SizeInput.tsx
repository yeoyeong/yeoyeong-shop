import useInput from "@src/shared/hooks/useInput";

interface Props {
  sizeList: string[];
  setSizeList: React.Dispatch<React.SetStateAction<string[]>>;
}

const SizeInput = ({ sizeList, setSizeList }: Props) => {
  const size = useInput("");

  const handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSizeList((prev) => [...new Set([...[...prev, size.value]])]);
    size.setValue("");
  };

  const sizeDeleteHandler = (currentSize: string) => {
    setSizeList(sizeList.filter((size) => size !== currentSize));
  };
  return (
    <div>
      <p>사이즈 추가 : 입력 후 엔터</p>
      <form onSubmit={handler}>
        <input
          type="text"
          onChange={size.onChange}
          value={size.value}
          placeholder="ex) free"
        />
      </form>
      <ul>
        {sizeList.map((size, index) => (
          <li key={index}>
            <span>{size}</span>
            <button onClick={() => sizeDeleteHandler(size)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SizeInput;

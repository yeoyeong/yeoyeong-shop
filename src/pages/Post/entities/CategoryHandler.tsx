interface Props {
  category: "outer" | "skirt" | "top" | "bottom";
  setCategory: React.Dispatch<
    React.SetStateAction<"outer" | "skirt" | "top" | "bottom">
  >;
}
const CategoryHandler = ({ category, setCategory }: Props) => {
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as "outer" | "skirt" | "top" | "bottom");
  };
  return (
    <>
      <p>카테고리 선택 : </p>
      <select name="amount" onChange={selectHandler} value={category}>
        <option value="outer">outer</option>
        <option value="skirt">skirt</option>
        <option value="top">top</option>
        <option value="bottom">bottom</option>
      </select>
    </>
  );
};

export default CategoryHandler;

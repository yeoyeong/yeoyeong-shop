import { CartProduct } from "@src/shared/store/products.store-type";

interface Props {
  id: string;
  title?: string;
  checkItemList: CartProduct[];
  defaultDataLength: number | undefined;
  handleAllCheck: (checked: boolean) => void;
  CustomCheckBox?: JSX.Element;
}
const InputAllCheckBox = ({
  id,
  title,
  checkItemList,
  defaultDataLength,
  handleAllCheck,
  CustomCheckBox,
}: Props) => {
  return (
    <>
      <input
        type="checkbox"
        name={`select-${id}`}
        id={`select-${id}`}
        onChange={(e) => handleAllCheck(e.target.checked)}
        // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
        checked={checkItemList.length === defaultDataLength ? true : false}
      />
      {CustomCheckBox && (
        <label className="custom_box" htmlFor={`select-${id}`}>
          {CustomCheckBox}
        </label>
      )}
      {title && (
        <label className="value" htmlFor={`select-${id}`}>
          {title}
        </label>
      )}
    </>
  );
};

export default InputAllCheckBox;

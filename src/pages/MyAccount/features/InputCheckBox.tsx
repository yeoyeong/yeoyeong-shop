import { CartProduct } from "@src/shared/store/products.store-type";

interface Props {
  id: string;
  title?: string;
  value: CartProduct;
  checkItemList: CartProduct[];
  handleSingleCheck: (checked: boolean, value: CartProduct) => void;
  CustomCheckBox?: JSX.Element;
}

const InputCheckBox = ({
  id,
  title,
  value,
  checkItemList,
  handleSingleCheck,
  CustomCheckBox,
}: Props) => {
  return (
    <>
      <input
        type="checkbox"
        name={`select-${id}`}
        id={`select-${id}`}
        onChange={(e) => {
          handleSingleCheck(e.target.checked, value);
        }}
        // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
        checked={checkItemList.includes(value) ? true : false}
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

export default InputCheckBox;

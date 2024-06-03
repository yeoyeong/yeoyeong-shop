import useInput from "@src/shared/hooks/useInput";
import { useRef } from "react";
import styles from "@src/pages/Post/post-page.module.scss";
interface Props {
  colorList: { colorName: string; colorCode: string }[];
  setColorList: React.Dispatch<
    React.SetStateAction<{ colorName: string; colorCode: string }[]>
  >;
}

const ColorInput = ({ colorList, setColorList }: Props) => {
  const inputRef = useRef<any>(null);
  const colorName = useInput("");
  const colorCode = useInput("");

  const handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!colorName.value && !colorCode.value)
      return alert("빈칸을 입력해주세요.");

    setColorList(
      (prev) => [
        ...prev,
        {
          colorName: colorName.value,
          colorCode: colorCode.value,
        },
      ]
      // ,
    );
    colorName.setValue("");
    colorCode.setValue("");
    inputRef.current.focus();
  };

  const sizeDeleteHandler = (currentColor: string) => {
    setColorList(colorList.filter((color) => color.colorName !== currentColor));
  };

  // color_list: [
  //   {
  //     colorName:"olive",
  //     colorCode:"#808000"
  //   }
  // ]

  return (
    <div>
      <p>색상 추가 : 입력 후 엔터</p>
      <form onSubmit={handler}>
        <input
          type="text"
          ref={inputRef}
          onChange={colorName.onChange}
          placeholder="ex)노랑"
          value={colorName.value}
        />
        <input
          type="text"
          onChange={colorCode.onChange}
          value={colorCode.value}
          placeholder="ex)#000000"
        />
        <button type="submit">추가</button>
      </form>
      <ul className={styles.color}>
        {colorList.map((color, index) => (
          <li key={index}>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                backgroundColor: color.colorCode,
              }}
            ></div>
            <span>{color.colorName}</span>
            <span>{color.colorCode}</span>

            <button onClick={() => sizeDeleteHandler(color.colorName)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorInput;

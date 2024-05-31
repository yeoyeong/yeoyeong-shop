import { colorList } from "@src/shared/store/products.store-type";
import styles from "./detail-form.module.scss";

interface Props {
  colorOnchange: (event: any) => void;
  sizeOnchange: (event: any) => void;
  colorList: colorList[];
  sizeList: string[];
}
const Option = (props: Props) => {
  return (
    <div className={styles.detail_option_wrap}>
      {props.sizeList.length > 1 ? (
        <select onChange={props.sizeOnchange}>
          {props.sizeList.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      ) : (
        <div className={styles.single_size}>
          <div>{props.sizeList[0]}</div>
        </div>
      )}
      {props.colorList.length > 1 ? (
        <select onChange={props.colorOnchange}>
          {props.colorList.map(({ colorCode, colorName }) => (
            <option key={colorName} value={`${colorName},${colorCode}`}>
              {colorName}
            </option>
          ))}
        </select>
      ) : (
        <div className={styles.single_color}>
          <div style={{ backgroundColor: props.colorList[0].colorCode }}></div>
          <p>{props.colorList[0].colorName}</p>
        </div>
      )}
    </div>
  );
};

export default Option;

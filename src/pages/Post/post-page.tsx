import useInput from "@src/shared/hooks/useInput";
import Layout from "@src/widgets/layout/Layout";
import { useState } from "react";
import CategoryHandler from "./entities/CategoryHandler";
import SizeInput from "./entities/SizeInput";
import ColorInput from "./entities/ColorInput";
import useNumberInput from "@src/shared/hooks/useNumberInput";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@src/shared/libs/firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const PostPage = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [detailFile, setDetailFile] = useState<File | null>(null);
  const title = useInput("");
  const content = useInput("");
  const price = useNumberInput("");
  const [category, setCategory] = useState<
    "outer" | "skirt" | "top" | "bottom"
  >("outer");
  const [colorList, setColorList] = useState<
    { colorName: string; colorCode: string }[]
  >([]);
  const [sizeList, setSizeList] = useState<string[]>([]);

  const SubmitHandler = async () => {
    const thumbnail = await upLoadFBHandler();
    const detailImg = await upLoadFBHandler();
    if (
      !title.value ||
      !content.value ||
      !price.value ||
      !thumbnail ||
      sizeList.length === 0 ||
      colorList.length === 0
    )
      return alert("빈칸을 다 입력해주세요.");
    console.log(sizeList.length);
    const formData = {
      title: title.value,
      content: content.value,
      price: price.value,
      category,
      colorList,
      sizeList,
      thumbnail,
      detailImg,
      createdAt: serverTimestamp(), // 현재 서버 시간을 기록
      rating: 0,
      order_quantity: 0,
    };
    try {
      await addDoc(collection(db, "products"), formData);
      alert("상품 올리기 성공");
    } catch (error) {
      alert("오류가 발생하였습니다.");
    }
  };

  //이미지 체인지 함수
  const onImageChange = (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    e.preventDefault();
    if (!e.target.files) return;
    const file = e.target.files[0];
    setImageFile(file);
  };

  //디테일 이미지 체인지 함수
  const onDetailChange = (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    e.preventDefault();
    if (!e.target.files) return;
    const file = e.target.files[0];
    setDetailFile(file);
  };

  //사진
  const upLoadFBHandler = async () => {
    if (!imageFile) return;
    const file = imageFile;

    const uploded_file = await uploadBytes(
      ref(storage, `products/${file.name}`), //경로
      file //어떤파일 올릴지
    );
    const file_url = await getDownloadURL(uploded_file.ref);

    return file_url;
  };
  return (
    <Layout>
      <input type="text" placeholder="제목" onChange={title.onChange} />
      <input type="text" placeholder="소개" onChange={content.onChange} />
      <ColorInput colorList={colorList} setColorList={setColorList} />
      <SizeInput sizeList={sizeList} setSizeList={setSizeList} />
      <input
        type="text"
        placeholder="가격"
        onChange={price.onChange}
        value={price.value}
      />
      <input type="file" placeholder="썸네일 사진" onChange={onImageChange} />
      <input type="file" placeholder="상세 설명" onChange={onDetailChange} />
      <CategoryHandler category={category} setCategory={setCategory} />
      <button onClick={SubmitHandler}>상품 올리기</button>
    </Layout>
  );
};

export default PostPage;

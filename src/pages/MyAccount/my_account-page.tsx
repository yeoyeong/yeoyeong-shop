import { auth, storage } from "@src/shared/libs/firebase-config";
import Layout from "@src/widgets/layout/Layout";
import { signOut, updateProfile } from "firebase/auth";
import user_icon from "@src/shared/assets/user_icon_L.png";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import authStore from "@src/shared/store/auth-store";
import styles from "./my_account-page.module.scss";
import { Link } from "react-router-dom";

const MyAccountPage = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePath, setImagePath] = useState("");
  const { userInfo, setUserInfo } = authStore();

  //로그아웃 함수
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserInfo(() => ({
        userType: 0,
        accessToken: null,
        uid: null,
        email: null,
        photoURL: null,
      }));
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  //이미지 업로드 함수
  const onImageChange = (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    e.preventDefault();
    if (!e.target.files) return;
    const file = e.target.files[0];
    setImageFile(file);
  };

  const upLoadFBHandler = async () => {
    if (!imageFile) return;
    const uploded_file = await uploadBytes(
      ref(storage, `images/${imageFile.name}`), //경로
      imageFile //어떤파일 올릴지
    );

    const file_url = await getDownloadURL(uploded_file.ref);

    if (!auth.currentUser) return;
    //프로필 수정
    updateProfile(auth.currentUser, { photoURL: file_url })
      .then(() => {
        setUserInfo((prev) => ({ ...prev, photoURL: file_url }));
        setImagePath("");
        setImageFile(null);
      })
      .catch(() => {});
  };

  const encodeFileToBase64 = () => {
    if (!imageFile) return;
    //이미지 미리보기 기능
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      setImagePath(reader.result as string);
    };
  };

  useEffect(() => {
    if (!imageFile) return;
    encodeFileToBase64();
  }, [imageFile]);

  return (
    <Layout>
      <div className={styles.my_account_wrap}>
        <div className={styles.logout_button_wrap}>
          <Link to="/admin">관리자 페이지</Link>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
        <figure className={styles.profile_img_wrap}>
          <label htmlFor="profile_change">
            {imagePath ? (
              <img src={imagePath} alt="변경한 프로필 사진" />
            ) : (
              <img
                src={userInfo.photoURL ? userInfo.photoURL : user_icon}
                alt="프로필 사진"
              />
            )}
          </label>
        </figure>
        <div className={styles.profile_img_input_wrap}>
          <input type="file" id="profile_change" onChange={onImageChange} />
          {!imageFile ? (
            <label htmlFor="profile_change">프로필 수정</label>
          ) : (
            <button onClick={upLoadFBHandler}>수정 완료</button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MyAccountPage;

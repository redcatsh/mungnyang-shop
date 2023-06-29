import React, { useState } from "react";
import { addNewProduct } from "../api/firebase";
import { uploadImage } from "../api/uploader";
import Button from "../components/ui/Button";
import { Modal } from "antd";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  // const [success, setSuccess] = useState();

  const onClickSuccess = () => {
    Modal.success({
      content: "게시물이 등록되었습니다!",
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      // console.log(files);
      return; // return 해주면 아래 setProduct가 실행되지 않음!
    }
    setProduct((product) => ({ ...product, [name]: value })); // key값이 동적으로 할당될때는 [key]:value 형식으로 써주어야 함
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    // 제품의 사진을 Cloudinary에 업로드 하고 URL을 획득
    uploadImage(file)
      .then((url) => {
        console.log(url);
        // Firebase에 새로운 제품을 추가함
        addNewProduct(product, url).then(() => {
          // setSuccess("성공적으로 제품이 추가되었습니다.");
          // setTimeout(() => {
          //   setSuccess(null);
          // }, 4000);
          onClickSuccess();
        });
      })

      .finally(() => setIsUploading(false));
  };
  return (
    <section className="wrapper w-full text-center h-auto pb-10">
      <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
      {/* {success && <p>✅ {success}</p>} */}

      {/* 아래 코드는 preview 이미지를 띄울 수 있는 URL 메소드! */}
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}
      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""} // ??는 Nullish Coalescing Operator, A가 null이거나 undefined이면 B로 해라!
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ""}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="제품 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="option"
          value={product.option ?? ""}
          placeholder="옵션(콤마(,)로 구분"
          required
          onChange={handleChange}
        />
        <Button
          text={isUploading ? "업로드 중..." : "제품 등록하기"}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}

import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import {publicRequest} from '../pages/index' 

const Edit = ({ setClose, data }) => {
  const [file, setFile] = useState(data.img);
  const [title, setTitle] = useState(data.title);
  const [desc, setDesc] = useState(data.desc);
  const [price, setPrice] = useState(data.price);

    console.log(data)
    const id = data._id;

  const handleEdit = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.put(
        "https://api.cloudinary.com/v1_1/dw449vwzc/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const product = {
        title,
        desc,
        price,
        img: url,
      };

      await publicRequest.put(`products/${id}`, product);
      console.log(product)
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Edit product</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Price</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <button className={styles.addButton} onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Edit;
import { useState } from "react";
import axios from "axios";
const Home = () => {
  const [file, setFile] = useState();
  const image = new FormData();
  image.append("file", file);

  const handleSubmit = async () => {
    await axios
      .post("http://localhost:5000/upload", image)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Home;

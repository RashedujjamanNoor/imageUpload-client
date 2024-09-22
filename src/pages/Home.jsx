import { useState } from "react";

const Home = () => {
  const [file, setFile] = useState();
  const image = new FormData();
  image.append("file", file);

  const handleSubmit = () => {};
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

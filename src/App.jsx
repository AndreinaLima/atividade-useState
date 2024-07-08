import ConversorTemperatura from "./components/ConversorTemperatura";
import Post from "./components/Post";

function App() {
  return (
    <>
      <div className="app">
        <Post
          titulo="POST 1"
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        magni consequatur. Ex aliquid veritatis vel quasi repudiandae! Quas
        laudantium ducimus libero dignissimos nam? Minus laboriosam repellendus,
        commodi eum odio doloribus."
        />
        <Post
          titulo="POST 2"
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        magni consequatur. Ex aliquid veritatis vel quasi repudiandae! Quas
        laudantium ducimus libero dignissimos nam? Minus laboriosam repellendus,
        commodi eum odio doloribus."
        />
        <Post
          titulo="POST 3"
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        magni consequatur. Ex aliquid veritatis vel quasi repudiandae! Quas
        laudantium ducimus libero dignissimos nam? Minus laboriosam repellendus,
        commodi eum odio doloribus."
        />
      </div>
      <div>
        <ConversorTemperatura />
      </div>
    </>
  )
}

export default App;
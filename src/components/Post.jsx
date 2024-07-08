/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Post.css"

function Post(props) {
  const [curtido, setCurtido] = useState(false);
  const [descurtido, setDescurtido] = useState(false);

  //Função para o botão de curtida
  function handleCurtida () {
    setCurtido(!curtido)
  }

  //Função para o botão de descurtida
  function handleDescurtida() {
    setDescurtido(!descurtido)
  }

  return (
    <section className="post">
      <h2>{props.titulo}</h2>
      <p>{props.descricao}</p>
      <div className="botoes">
        <button onClick={handleCurtida}>
          {curtido ? "Curtido 👍" : "Curtir"}
        </button>
        <button onClick={handleDescurtida}>
          {descurtido ? "Descurtido 👎" : "Descurtir"}
        </button>
      </div>
    </section>
  )
}

export default Post;
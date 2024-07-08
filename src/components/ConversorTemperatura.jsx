import "./ConversorTemperatura.css"
import { useState } from "react"

function ConversorTemperatura() {
   const [C, setC] = useState(0)
   const [F, setF] = useState(0)
   
   function handleC(evento) {
     const input = evento.target
     const valor = input.value

     setC(valor)
   }

   function handleCalcularConversao() {
     const resultado = C * 1.8 + 32
     setF(resultado)
   }
   
  return (
    <section className="conversor">
      <h2>Conversor de temperatura</h2>
      <input
        type="number"
        placeholder="Digite a temperatura em ℃"
        onChange={handleC}
      />
      <button onClick={handleCalcularConversao}>Calcular</button>
      <hr />
      <h4>A temperatura ℃ em ℉ é: {F.toFixed(2)} ℉</h4>
    </section>
  )
}

export default ConversorTemperatura;
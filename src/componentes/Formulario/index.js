import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = () => {
  
  return (
    <section className="formulario">
      <form>
        <CampoTexto label="nome" placeholder="Digite seu nome" />
      </form>
    </section>
  );
};

export default Formulario;

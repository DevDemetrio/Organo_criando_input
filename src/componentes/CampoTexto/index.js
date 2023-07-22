import "./CampoTexto.css";

const CampoTexto = ({ label, placeholder, obrigatorio, aoModificar }) => {
  const aoDigitar = (evento) => {
    aoModificar = evento.target.value;
  };
  return (
    <div>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        required={obrigatorio}
        onChang={aoDigitar}
      />
    </div>
  );
};

export default CampoTexto;

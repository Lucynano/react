import "../styles/button.css";

function Button({ text, width = "auto", height = "50px", color = "#2c9caf" }) {
  return (
    <button
      className="button"
      style={{
        width,
        height,
        "--btn-color": color, // Définition de la couleur dynamique en variable CSS
      }}
    >
      {text}
    </button>
  );
}

export default Button;

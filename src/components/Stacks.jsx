import stacks from "../data/stacks.json";

function Stacks() {
  return (
    <div className="stacks-icon">
      {stacks.map((icon, i) => (
        <img
          className="stacks-icon__icon"
          key={i}
          src={`svg/${icon.icon}`}
          alt={icon.name}
        />
      ))}
    </div>
  );
}

export default Stacks;

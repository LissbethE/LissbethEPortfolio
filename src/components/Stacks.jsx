import stacks from "../data/stacks.json";

function Stacks() {
  const { frontend, backend, others } = stacks;

  const renderStackList = (stackItems, title) => (
    <div className="stacks">
      <h3 className="heading-3 heading-3--stacks stacks__title">{title}</h3>

      <ul className="stacks__list">
        {stackItems.map((icon) => (
          <li key={icon.name} className="stacks__item">
            <img
              className="stacks__icon"
              src={`svg/${icon.icon}`}
              alt={icon.name}
            />
            <p className="stacks__name paragraph">{icon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {renderStackList(frontend, "Front-End")}
      {renderStackList(backend, "Back-End")}
      {renderStackList(others, "Otras tecnologías")}
    </>
  );
}

export default Stacks;

import { Link } from "react-router-dom";

function Button({ children, onClick, disabled, type, to }) {
  const styles = {
    primary: "button button--primary",
    primaryWithIcon: "button button--primary button--primary--icon",
    secundary: "button button--secundary",
    secundaryWithIcon: "button button--secundary button--secundary--icon",
  };

  if (to)
    return (
      <Link to={to} disabled={disabled} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

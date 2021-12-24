import './Column.css';

const Column = props => {
  const {
    icon,
    title,
    backgroundColor = 'blue',
    textColor = 'white',
    children,
  } = props;
  return (
    <section
      className={`column column__background__${backgroundColor} column__text__${textColor}`}
    >
      <header className="column-header">
        {icon} <span className="column-header-title">{title}</span>
      </header>
      <div className="column-cards-group">{children}</div>
    </section>
  );
};

export default Column;

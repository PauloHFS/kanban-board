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
      className={`column column__background__${backgroundColor} column__text_${textColor}`}
    >
      <header className="column-title">
        {icon} {title}
      </header>
      <div className="column-cards-group">{children}</div>
    </section>
  );
};

export default Column;

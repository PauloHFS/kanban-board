import './Column.css';

const Column = props => {
  const { iconSvg, title, columnColor = 'blue' } = props;
  return (
    <section className={`column column__${columnColor}`}>
      <header className="column-title">
        {iconSvg} {title}
      </header>
      <div className="column-cards-group"></div>
    </section>
  );
};

export default Column;

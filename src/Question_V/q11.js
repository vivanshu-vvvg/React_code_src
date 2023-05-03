import './q11.css';

function List() {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return (
    <div className="list-container">
      <h2>List of Items</h2>
      <ul className="item-list">
        {items.map(item => (
          <li key={item.id} className="item">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;

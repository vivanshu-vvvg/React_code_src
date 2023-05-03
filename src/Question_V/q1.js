import React from 'react';

const data = [
  { column1: 'Value 1A', column2: 'Value 1B', column3: 'Value 1C' },
  { column1: 'Value 2A', column2: 'Value 2B', column3: 'Value 2C' },
  { column1: 'Value 3A', column2: 'Value 3B', column3: 'Value 3C' },
];

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>
            <td>{item.column3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

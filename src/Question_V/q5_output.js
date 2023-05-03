//Search from the content of the table

import React from 'react';
import Table from './q5_data';

function Search() {
  const data = [
    { id: 1, name: 'Alice', age: 25, occupation: 'Engineer' },
    { id: 2, name: 'Bob', age: 30, occupation: 'Designer' },
    { id: 3, name: 'Charlie', age: 35, occupation: 'Manager' },
    { id: 4, name: 'David', age: 40, occupation: 'Developer' },
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default Search;

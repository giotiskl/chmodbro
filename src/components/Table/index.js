import React from 'react'
import styled from 'styled-components';

const Table = styled.table`
  th {
    font-size: 16px;
    font-weight: bold;
  }
  th, td {
    padding: 15px;
  }
  tbody th {
    text-align: right;
  }
`;

export default Table;
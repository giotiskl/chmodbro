import React from 'react'
import styled from 'styled-components';

const Table = styled.table`
  th {
    font-size: 20px;
    font-weight: bold;
  }
  th, td {
    padding: 15px;
  }
  tbody th {
    text-align: right;
  }
  tbody svg {
    display: inline-block;
    margin-left: 5px;
  }
  .others-icon-wrapper {
    position: relative;
  }
  .others-icon-1 {
    color: #7d7d7d;
    width: 1em;
    left: 22px;
    top: 10px;
    position: absolute;
    z-index: 0;
  }
  .others-icon-2 {
    position: relative;
    z-index: 1;
  }
`;

export default Table;
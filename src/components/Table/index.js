import styled from 'styled-components';

const Table = styled.table`
  margin: 0 auto;
  th {
    font-size: 20px;
    font-weight: bold;
  }
  th, td {
    padding: 20px;
  }
  tbody th {
    text-align: right;
  }
  tbody svg {
    display: inline-block;
    margin-left: 5px;
  }
  .user-icon {
    font-size: .75em;
  }
  .others-icon-wrapper {
    position: relative;
  }
  .others-icon-1 {
    color: #7d7d7d;
    width: 1em;
    left: 17px;
    top: 17px;
    position: absolute;
    z-index: 0;
  }
  .others-icon-2 {
    position: relative;
    z-index: 1;
  }
`;

export default Table;
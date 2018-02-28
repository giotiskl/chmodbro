import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #0f0f0f;
  border-radius: 8px;
  box-shadow: 0 5px 30px rgba(0,0,0,.25);
  color: white;
  font-size: 28px;
  letter-spacing: 2px;
  padding: 20px 10px 22px 10px;
  strong {
    color: #4cd137;
    font-size: 32px;
    letter-spacing: ${props => props.mode === 'code' ? '6px' : '0'};
  }
`;

const ChmodCode = ({ mode, code }) => {
  return (
    <Wrapper mode={mode}>
      <span className="dollar">$</span> chmod <strong>{code}</strong> file
    </Wrapper>
  )
}

ChmodCode.propTypes = {
  code: PropTypes.string,
  mode: PropTypes.string,
};

export default ChmodCode;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle';
import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle';
import { palette } from '../../cssResources';

const Wrapper = styled.section`
  background-color: ${({ ugo }) => ugo.includes('g') && !ugo.includes('o') ? palette.orange : palette.lightRed};
  border: 1px solid ${({ ugo }) => ugo.includes('g') && !ugo.includes('o') ? palette.darkOrange : palette.darkRed};
  border-radius: 5px;
  color: ${({ ugo }) => ugo.includes('g') && !ugo.includes('o') ? palette.darkOrange : palette.darkRed};
  font-size: 16px;
  margin: 20px 0 -20px 0;
  padding: 15px;
  text-align: left;
`;

const Alert = ({ code }) => {
  const userTypesWithWritePermissions = whoCanWriteToFile(code);
  return userTypesWithWritePermissions.includes('g') || userTypesWithWritePermissions.includes('o')
    ? (
      <Wrapper code={code} ugo={userTypesWithWritePermissions}>
        {
          userTypesWithWritePermissions.includes('g') && !userTypesWithWritePermissions.includes('o')
          ? (<div><FontAwesomeIcon icon={faExclamationCircle}/> Users in your user group can overwrite the file/directory!</div>)
          : (<div><FontAwesomeIcon icon={faTimesCircle}/> All users have permission to overwrite the file/directory!</div>)
        }
      </Wrapper>
    )
    : null;
};

/**
 * Returns a string representing which users can write to a file
 * based on permissions code (e.g. 'go' for group + others).
 * 
 * @param {string} code - permissions code (e.g. 644)
 * @returns {string} users who can write file in ugo form
 */
const whoCanWriteToFile = (code) => {
  const ugo = ['u', 'g', 'o'];
  const writeBits = [2 /* -w- */, 3 /* -wx */, 6 /* rw- */, 7 /* rwx */];
  return Array.from(code).map((userType,  index) => {
    return writeBits.includes(+userType)
      ? ugo[index]
      : '';
  });
}

Alert.propTypes = {
  code: PropTypes.string.isRequired,
};

export default Alert;

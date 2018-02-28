import React from 'react'
import PropTypes from 'prop-types'
import Table from '../Table';
import Checkbox from '../Checkbox';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';

const bits = [4, 2, 1];
const modes = ['Read', 'Write', 'Execute'];
const icons = [faSearch, faPencilAlt, faCog];
const userTypes = ['user', 'group', 'others'];

const PermissionsTable = ({ handleCheckboxChange }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th><FontAwesomeIcon icon={faUser} /> User</th>
          <th><FontAwesomeIcon icon={faUsers} /> Group</th>
          <th className="others-icon-wrapper"><FontAwesomeIcon icon={faUsers} className="others-icon-1" /><FontAwesomeIcon icon={faUsers} className="others-icon-2" /> Others</th>
        </tr>
      </thead>
      <tbody>
        {
          bits.map((bit, index) => (
            <tr key={index}>
              <th>{modes[index]} ({bit}) <FontAwesomeIcon icon={icons[index]}/></th>
              { [1,2,3].map((index) => (
                <td key={index}>
                  <Checkbox
                    userType={userTypes[index-1]}
                    bits={bit}
                    handleChange={handleCheckboxChange} />
                </td>
              ))}
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

PermissionsTable.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
}

export default PermissionsTable;
import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PermissionsTable from './components/PermissionsTable';
import ChmodCode from './components/ChmodCode'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bits: {
        user: 0,
        group: 0,
        others: 0,
      },
    };
  }

  /**
   * Toggle bits in the state for u-g-o
   * @param {string} userType - one of "user"/"group"/"others"
   * @param {number} bits - rwx to toggle
   * @return {undefined}
   */
  handleCheckboxChange = (userType, bits) => {
    let newState = {};
    newState[userType] = this.state.bits[userType] + bits;
    this.setState({
      bits: {
        ...this.state.bits,
        ...newState,
      },
    });
  }

  render() {
    const { user, group, others } = this.state.bits;

    return (
      <main className="App">
        <Grid fluid>
          <Row center="xs">
            <Col>
              <PermissionsTable handleCheckboxChange={this.handleCheckboxChange}/>
              <ChmodCode code={`${user}${group}${others}`}/>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }
}

export default App;

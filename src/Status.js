import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import $ from 'jquery';

export default class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = { _status: [] };
    this.createStatusList = this.createStatusList.bind(this);
  }

  componentWillMount() {
    $.getJSON('./json/status.json', function (data) {
      this.setState({ _status: data });
    }.bind(this));
  }

  createStatusList(data) {
    if (!data || data.length === 0) {
      return;
    }
    
    return data.map( (row, index) => (
      <TableRow key={index}>
        <TableRowColumn>{row.skill}</TableRowColumn>
        <TableRowColumn>{row.years}</TableRowColumn>
      </TableRow>
      )
    );
  }
  
  render() {
    const style = {
      height: 500,
      width: 500,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block'
    };

    return (
      <div className="status">
        <Card style={style}>
          <CardTitle title="Skills" />
          <CardText>
          </CardText>
          <Table>
            <TableHeader displaySelectAll={false}>
              <TableHeaderColumn>Skill</TableHeaderColumn>
              <TableHeaderColumn>Year</TableHeaderColumn>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              { this.createStatusList(this.state._status) }
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

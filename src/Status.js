import React from 'react';
import { Card, CardHeader } from 'material-ui';
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
        <TableRowColumn style={{width: '20%'}}>{row.skill}</TableRowColumn>
        <TableRowColumn style={{width: '20%'}}>{row.years}</TableRowColumn>
        <TableRowColumn style={{width: '60%', fontSize: '70%', whiteSpace: 'normal'}}>{row.detail}</TableRowColumn>
      </TableRow>
      )
    );
  }
  
  render() {
    const style = {
      maxWidth: '680px',
      margin: '20px auto',
    };

    return (
      <div className="status">
        <Card style={style}>
          <CardHeader title="業務経験" subtitle="業務経験一覧です。下に行くほど新しいです。短期のものは省いています。" />
          <Table>
            <TableHeader displaySelectAll={false}>
              <TableHeaderColumn style={{width: '20%'}}></TableHeaderColumn>
              <TableHeaderColumn style={{width: '20%'}}>Period</TableHeaderColumn>
              <TableHeaderColumn style={{width: '60%', textAlign: 'center'}}>Detail</TableHeaderColumn>
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

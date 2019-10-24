import React from "react";
import { Button, Table } from 'reactstrap';

class ActorCard extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        
        <Table dark>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={this.props.pictureUrl} width="150px" alt="Card cap"></img></td>
              <td>{this.props.name}</td>
              <td>{this.props.popularity}</td>
            </tr>
          </tbody>
        </Table>
        <Button className="dark mb-3" onClick={this.props.clickToDelete}>Delete</Button>
      </div>
    )
  }
}
export default ActorCard;
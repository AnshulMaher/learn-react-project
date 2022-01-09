import { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <h3>{item.name}</h3>
        <p>
          UserName: {item.username} Email: {item.email}
        </p>
      </div>
    );
  }
}

export default Card;

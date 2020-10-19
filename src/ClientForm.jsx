import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    nouveauClient: ""
  };

  handleChange = (event) => {
    // console.log(event.currentTarget.value);
    this.setState({ nouveauClient: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.clientInput.current.value);
    const id = new Date().getTime();
    const name = this.state.nouveauClient;

    this.props.onClientAdd({ id, name });
    this.setState({ nouveauClient: ''});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.nouveauClient}
          onChange={this.handleChange}
          type="text"
          placeholder="Ajouter un client"
        />
        <button>Confirmer</button>
      </form>
    );
  }
}

export default ClientForm;

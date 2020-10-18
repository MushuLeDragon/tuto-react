import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// import App from "./App";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, name: "Lior Chamla" },
      { id: 2, name: "Magali Pernin" },
      { id: 3, name: "Joseph Durand" }
    ],
    nouveauClient: ""
    // compteur: 0
  };

  // handleClick = () => {
  //   // // Re-affiche le contenue de l'objet state.compteur
  //   // this.setState({ compteur: this.state.compteur + 1 });
  //   // console.log(this.state);

  //   const clientsBis = this.state.clients.slice();
  //   clientsBis.push({id: 4, name: "Anne Dupont"});

  //   this.setState({clients: clientsBis})
  // };

  handleDelete = (id) => {
    console.log(id);
    const clientsTer = this.state.clients.slice();
    const index = clientsTer.findIndex((client) => client.id === id);

    clientsTer.splice(index, 1);
    this.setState({ clients: clientsTer });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.clientInput.current.value);

    const newId = new Date().getTime;
    const newName = this.state.nouveauClient;

    const newClient = { id: newId, name: newName };
    const clientsQuatro = this.state.clients.slice();

    clientsQuatro.push(newClient);

    this.setState({ clients: clientsQuatro, nouveauClient: "" });
  };

  handleChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ nouveauClient: value });
    // console.log(event.currentTarget.value);
  };

  render() {
    const title = "Liste des clients de mon magasin";

    return (
      <div>
        <h1>{title}</h1>

        {/* {this.state.compteur} */}

        {/* <button onClick={this.handleClick}>Click me</button> */}

        <ul>
          {this.state.clients.map((client) => (
            <li key={client.id}>
              {client.name}{" "}
              <button onClick={() => this.handleDelete(client.id)}>X</button>
            </li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.nouveauClient}
            onChange={this.handleChange}
            type="text"
            placeholder="Ajouter un client"
          />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

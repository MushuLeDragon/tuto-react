import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// import App from "./App";
import Client from "./Client";
import ClientForm from "./ClientForm";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, name: "Lior Chamla" },
      { id: 2, name: "Magali Pernin" },
      { id: 3, name: "Joseph Durand" }
    ]
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
    // console.log(id);
    const clients = [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);

    clients.splice(index, 1);
    this.setState({ clients });
  };

  handleAdd = (client) => {
    const clients = [...this.state.clients];

    clients.push(client);
    this.setState({ clients });
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
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>

        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

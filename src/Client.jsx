import React, { Component } from "react";

const Client = ({ details, onDelete }) => (
  <li key={details.id}>
    {details.name} <button onClick={() => onDelete(details.id)}>X</button>
  </li>
);

export default Client;

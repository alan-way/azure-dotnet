import React from "react";
import { Link } from "react-router-dom";

type Props = {}
type State = {}

export class Home extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <Link to="/about">Abount</Link>
      </div>
    )
  }
}
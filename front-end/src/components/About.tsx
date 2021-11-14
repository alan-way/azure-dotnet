import React from 'react';
import { Link } from "react-router-dom";

type HelloWorldProps = {}
type HelloWorldState = {
  text: string
}

export class About extends React.Component<HelloWorldProps, HelloWorldState> {

  constructor(props: HelloWorldProps) {
    super(props);
    this.state = {
      text: ""
    }
  }

  componentDidMount() {
    this.setState({
      text: "loading..."
    });
    fetch("/api/hello").then(res => res.json())
      .then(val => {
        this.setState({
          text: JSON.stringify(JSON.parse(val), null, "  ")
        })
      })
      .catch(err => {
        this.setState({
          text: "fail"
        })
      })
  }

  render() {
    const { text } = this.state;
    return (
      <>
      <div>返回首页: <Link to="/">Home</Link> </div>
        <div>Result: </div>
        <pre>
          {text}
        </pre>
      </>
    );
  }

}
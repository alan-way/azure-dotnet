import React from 'react';

type HelloWorldProps = {}
type HelloWorldState = {
  text: string
}

export class HelloWorld extends React.Component<HelloWorldProps, HelloWorldState> {

  constructor(props: HelloWorldProps) {
    super(props);
    this.state = {
      text: ""
    }
  }

  componentDidMount() {
    fetch("/api/hello").then(res => res.text()).then(val => {
      this.setState({
        text: val
      })
    })
  }

  render() {
    const { text } = this.state;
    return (
      <div>Result: {text}</div>
    );
  }

}
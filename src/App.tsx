import React from 'react';

type State = {
  lastPressedKey: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    lastPressedKey: '',
  };

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${lastPressedKey}]`}
        </p>
      </div>
    );
  }
}

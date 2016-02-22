import React from 'react';
import ReactDOM from 'react-dom';

export default class Autocomplete extends React.Component {
  static propTypes = {
    wrapperClassName: React.PropTypes.string,
    inputClassName: React.PropTypes.string,
    dropdownClassName: React.PropTypes.string,
    dropdownOpenClassName: React.PropTypes.string,
    dictionary: React.PropTypes.array.isRequired,
    defaultValue: React.PropTypes.string,
    onInputChange: React.PropTypes.func,
    onSelect: React.PropTypes.func,
  };

  static defaultProps = {
    wrapperClassName: 'dropdown',
    inputClassName: 'form-control',
    dropdownClassName: 'dropdown-menu',
    dropdownOpenClassName: 'open',
  };

  state = {
    input: this.props.defaultValue,
    open: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick);
  }

  handleClick = e => {
    const clickedOutside = !ReactDOM.findDOMNode(this).contains(e.target);
    if (clickedOutside) {
      this.setState({ open: false });
    }
  };

  handleInputChange = e => {
    const input = e.target.value;
    this.setState({ input, open: true });
    if (this.props.onInputChange) {
      this.props.onInputChange(input);
    }
  };

  handleCandidateClick = e => {
    const selectedText = e.target.innerText;
    this.setState({ input: selectedText, open: false });
    if (this.props.onSelect) {
      this.props.onSelect(selectedText);
    }
  };

  render() {
    let candidates = [];

    if (this.state.open) {
      const input = this.state.input.toLowerCase();
      if (input.length > 0) {
        candidates = this.props.dictionary.filter(v => v.toLowerCase().startsWith(input));
      }
    }

    const className = [this.props.wrapperClassName];
    if (candidates.length > 0) {
      className.push(this.props.dropdownOpenClassName);
    }

    return (
      <div className={className.join(' ')}>
        <input
          type="text"
          className={this.props.inputClassName}
          value={this.state.input}
          onChange={this.handleInputChange}
        />
        <ul className={this.props.dropdownClassName}>
          {candidates.map(c => (
            <li key={c}>
              <a
                href="#"
                onClick={this.handleCandidateClick}
              >
                {c}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';

import searchbarStyles from './Searchbar.module.css';
import { ReactComponent as SearchIcon } from 'assets/images/search.svg';
class Searchbar extends React.Component {
  state = {
    name: '',
  };

  static defaultProps = {
    name: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSelectName(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    const { name } = this.state;

    return (
      <header className={searchbarStyles.searchbar}>
        <form className={searchbarStyles.searchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={searchbarStyles.searchFormBtn}>
            <span className={searchbarStyles.searchFormBtnLabel}>Search</span>
            <SearchIcon />
          </button>

          <input
            className={searchbarStyles.searchFormInput}
            type="text"
            name="name"
            value={name}
            onChange={this.onChange}
            autoComplete="off"
            autoFocus
            required
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

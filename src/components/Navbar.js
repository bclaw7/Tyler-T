import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    var urlArray = window.location.href.split('/');
    this.setState({ url: urlArray[urlArray.length - 1] });
  }

  setUrl = (newUrl) => {
    this.setState({ url: newUrl });
    console.log(this.state);
  };
  componentDidMount() {
    var urlArray = window.location.href.split('/');
    this.state.url = urlArray[urlArray.length - 1];
  }
  render() {
    return (
      <nav className='navbar sticky-top navbar-expand-sm navbar-light bg-primary bg-gradient px-sm-2'>
        <div className='container-fluid'>
          <a className='navbar-brand nav-name' href='/'>
            Tyler T.
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav mx-auto nav-menu'>
              <Link
                to='/productlist'
                className={`nav-link ${
                  this.state.url === 'productList' ? 'text-warning' : ''
                }`}
                onClick={() => this.setUrl('productlist')}>
                Merch
              </Link>
              <a
                className={`nav-link ${
                  this.state.url === 'tour' ? 'text-warning' : ''
                }`}
                href='#tour'
                onClick={() => this.setUrl('tour')}>
                Tour
              </a>
              <a
                className={`nav-link ${
                  this.state.url === 'music' ? 'text-warning' : ''
                }`}
                href='#music'
                onClick={() => this.setUrl('music')}>
                Music
              </a>
              <a
                className={`nav-link ${
                  this.state.url === 'photos' ? 'text-warning' : ''
                }`}
                href='#photos'
                onClick={() => this.setUrl('photos')}>
                Photos
              </a>
              <a
                className={`nav-link ${
                  this.state.url === 'videos' ? 'text-warning' : ''
                }`}
                href='#videos'
                onClick={() => this.setUrl('videos')}>
                Videos
              </a>
              <a
                className={`nav-link ${
                  this.state.url === 'bio' ? 'text-warning' : ''
                }`}
                href='#bio'
                onClick={() => this.setUrl('bio')}>
                About
              </a>
              <a
                href='#contact'
                className={`nav-link ${
                  this.state.url === 'contact' ? 'text-warning' : ''
                }`}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

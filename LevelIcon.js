/**
 * <LevelIcon />
 * 
 * Takes a single prop `level` to asynchronously load a image file
 * via webpack's dynamic import.
 */

import React from 'react';
import defaultImage from '../assets/default-image.svg';

class LevelIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: defaultImage,
    };
  }

  componentDidMount() {
    const { level } = this.props;

    import(`../assets/${level}.svg`)
      .then(mod => {
        this.setState({
          src: mod.default
        })
      });
  }

  render() {
    const { src } = this.state;

    return (
      <img src={src} />
    );
  }
}

export default LevelIcon;

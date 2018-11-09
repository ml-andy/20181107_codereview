/**
 * <LevelIcon />
 * 
 * Takes a single prop `level` to asynchronously load a image file
 * via webpack's dynamic import.
 */

 /**
  * Feedback:
  * We can add .catch after .then to handle error status
  * Add componentDidUpdate to update while props change
  * and add isMount to avoid setState on component unmount
 */

import React from 'react';
import defaultImage from '../assets/default-image.svg';

class LevelIcon extends React.Component {
  constructor(props) {
    super(props);
    this.isMount = true;
    this.state = {
      src: defaultImage,
    };
  }

  componentDidMount() {
    this._loadImage();
  }

  componentDidUpdate(prevProps) {
    this._loadImage(prevProps);
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  render() {
    const { src } = this.state;

    return (
      <img src={src} />
    );
  }

  _loadImage(prevProps) {
    const { level: preLevel } = prevProps || '';
    const { level } = this.props || '';
    
    if (preLevel === level) return;
    import(`../assets/${level}.svg`)
      .then(mod => {
        this.isMount && this.setState({
          src: mod.default
        })
      })
      .catch(err => {
        // do something
      });
  }
}

export default LevelIcon;

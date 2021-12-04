import React, { Component } from "react";
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";

import '../css/ImageRotator.css';

const propTypes = {
  images: PropTypes.arrayOf({
    src: PropTypes.string.isRequired,
    shadow: PropTypes.string,
    roundedCircle: PropTypes.bool,
    rounded: PropTypes.string,
  }).isRequired,
  backgroundColor: PropTypes.string,
}

class ImageRotator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstImageIndex: 0,
      renderImages: false,
    }

    window.addEventListener('resize', () => { this.setState({}) });
  }

  calculateImagesToShow() {
    const { firstImageIndex, renderImages } = this.state;
    const { images } = this.props;
    
    if (renderImages) {
      // TODO: Implement a better way of calculating the number of images by adding each image width separately until they go over the width of the component
      const widthOfComponent = this.outerRef?.offsetWidth - (2 * this.buttonRef?.offsetWidth) - 50; // The width of the outer component
      const aveImageWidth = 400; // Average of all of the image widths
      const numberOfImages = Math.max(Math.floor(widthOfComponent / aveImageWidth), 1);
      
      const imagesToShow = [];
      for (let i = 0, j = firstImageIndex; i < numberOfImages; i++, j++) {
        if (j >= images.length) j = 0;
        imagesToShow.push(images[j]);
      }
      return imagesToShow;
    }
    return [];
  }

  incrementImageIndex() {
    const { firstImageIndex } = this.state;
    const { images } = this.props;
    if (firstImageIndex + 1 >= images.length) {
      this.setState({ firstImageIndex: 0 });
    }
    else {
      this.setState({ firstImageIndex: firstImageIndex + 1});
    }
  }

  decrementImageIndex() {
    const { firstImageIndex } = this.state;
    const { images } = this.props;
    if (firstImageIndex - 1 < 0) this.setState({ firstImageIndex: images.length - 1 });
    else this.setState({ firstImageIndex: firstImageIndex - 1 });
  }

  setOuterRef(ref) {
    this.outerRef = ref;
    if (!this.state.renderImages && this.buttonRef) this.setState({ renderImages: true });
  }

  setButtonRef(ref) {
    this.buttonRef = ref;
    if (!this.state.renderImages && this.outerRef) this.setState({ renderImages: true });
  }

  render() {
    const { images, backgroundColor } = this.props;

    const imagesToShow = this.calculateImagesToShow(images);

    // There's only one image showing so put the arrow buttons below the image
    if (imagesToShow.length === 1) {
      return (
        <div ref={(ref) => this.setOuterRef(ref)} className="d-flex flex-column justify-content-center flex-nowrap">
          <div className="d-flex justify-content-center flex-nowrap">
            {
              this.state.renderImages &&
              imagesToShow.map((image, index) => {
                return (
                  <Image
                    id={`image-${index}`}
                    className={`image-rotator-image bg-light mb-4 ${image.shadow ? image.shadow : 'shadow-image'} ${image.rounded ? image.rounded : 'rounded-3'}`}
                    roundedCircle={image.roundedCircle !== undefined ? image.roundedCircle : true}
                    src={image.src}
                  />
                );
              })
            }
          </div>
          <div className="d-flex justify-content-around flex-nowrap">
            <Button
              ref={(ref) => this.setButtonRef(ref)}
              className={`bg-light border-${backgroundColor} my-auto py-2 px-5`}
              variant="light"
              onClick={() => this.decrementImageIndex()}
            >
              {"<"}
            </Button>
            <Button
              className={`bg-light border-${backgroundColor} my-auto py-2 px-5`}
              variant="light"
              onClick={() => this.incrementImageIndex()}
            >
              {">"}
            </Button>
          </div>
        </div>
      );
    }

    // More than one image so put the arrow buttons on each side
    return (
      <div ref={(ref) => this.setOuterRef(ref)} className="d-flex justify-content-between flex-nowrap">
        <Button
          ref={(ref) => this.setButtonRef(ref)}
          className={`bg-light border-${backgroundColor} my-auto p-3 pt-4 pb-4`}
          variant="light"
          onClick={() => this.decrementImageIndex()}
        >
          {"<"}
        </Button>
        <div className="wrapper">
          {
            this.state.renderImages &&
            imagesToShow.map((image, index) => {
              return (
                <Image
                  id={`image-${index}`}
                  className={`image-rotator-image bg-light m-5 ${image.shadow ? image.shadow : 'shadow-image'} ${image.rounded ? image.rounded : 'rounded-3'}`}
                  roundedCircle={image.roundedCircle !== undefined ? image.roundedCircle : true}
                  src={image.src}
                />
              );
            })
          }
        </div>
        <Button
          className={`bg-light border-${backgroundColor} my-auto p-3 pt-4 pb-4`}
          variant="light"
          onClick={() => this.incrementImageIndex()}
        >
          {">"}
        </Button>
      </div>
    )
  }
}

ImageRotator.protoTypes = propTypes;
export default ImageRotator;

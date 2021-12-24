import React, { Component } from "react";
import { Image, Spinner } from 'react-bootstrap';
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
  maxWidth: PropTypes.number,
  imageScrollTimeout: PropTypes.number,
  maxImagesOnScreen: PropTypes.number,
}

class ImageRotator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstImageIndex: 0,
      renderImages: false,
      imagesShowing: [],
      imageInterval: null,
    }
  }

  componentDidMount() {
    const imagesShowing = this.calculateImagesToShow(this.state.firstImageIndex);

    const windowResizeEvent = window.addEventListener('resize', () => {
      this.resetImageInterval();
      const imagesToShow = this.calculateImagesToShow(this.state.firstImageIndex);
      this.setState({ imagesShowing: imagesToShow });
    });

    this.setState({ imagesShowing, windowResizeEvent });
  }

  componentWillUnmount() {
    this.setState({ windowResizeEvent: null });
  }

  calculateImagesToShow(firstImageIndex) {
    const { renderImages } = this.state;
    const { images, maxWidth, maxImagesOnScreen } = this.props;
    
    const imagesToShow = [];
    let outerRef, buttonRef;
    if (!renderImages) {
      outerRef = { offsetWidth: window.innerWidth - 36};
      buttonRef = { offsetWidth: 44.25 }
    } else {
      outerRef = this.outerRef;
      buttonRef = this.buttonRef;
    }

    // Calculate the width of the outer component
    const widthOfOuterComponent = (outerRef?.offsetWidth - 100) - (2 * (buttonRef?.offsetWidth + 48));
    // Set an average image width of 400px which is the max width an image can be
    const aveImageWidth = maxWidth ? maxWidth : 400;
    // Get the max number of components that fit across the page
    const maxNumberOfImages = Math.floor(widthOfOuterComponent / aveImageWidth);
    // Calculate the number of images to dispay
    let numberOfImages;
    if (maxImagesOnScreen) {
      numberOfImages =
        Math.max(
          1,
          Math.min(
            Math.floor(widthOfOuterComponent / aveImageWidth),
            maxNumberOfImages,
            images.length,
            maxNumberOfImages,
          )
        );
    } else {
      numberOfImages =
        Math.max(
          1,
          Math.min(
            Math.floor(widthOfOuterComponent / aveImageWidth),
            maxNumberOfImages,
            images.length,
          )
        );
    }

    // Get the images showing based on what the first image index
    for (let i = 0, j = firstImageIndex; i < numberOfImages; i++, j++) {
      if (j >= images.length) j = 0;
      imagesToShow.push(images[j]);
    }

    this.resetImageInterval();

    return imagesToShow;
  }

  resetImageInterval() {
    const { imageScrollTimeout } = this.props;
    clearTimeout(this.state.imageInterval);
    this.setState({ imageInterval: setTimeout(() => this.incrementImageIndex(), imageScrollTimeout ? imageScrollTimeout : 5000) });
  }

  incrementImageIndex() {
    const { firstImageIndex } = this.state;
    const { images } = this.props;

    let imageIndex = 0;
    if (firstImageIndex + 1 >= images.length) imageIndex = 0; // this.setState({ firstImageIndex: 0 });
    else imageIndex = firstImageIndex + 1; // this.setState({ firstImageIndex: firstImageIndex + 1});

    const imagesShowing = this.calculateImagesToShow(imageIndex);
    this.setState({ firstImageIndex: imageIndex, imagesShowing: imagesShowing });
  }

  decrementImageIndex() {
    const { firstImageIndex } = this.state;
    const { images } = this.props;

    let imageIndex = 0;
    if (firstImageIndex - 1 < 0) imageIndex = images.length -1; // this.setState({ firstImageIndex: images.length - 1 });
    else imageIndex = firstImageIndex  - 1; // this.setState({ firstImageIndex: firstImageIndex - 1 });

    const imagesShowing = this.calculateImagesToShow(imageIndex);
    this.setState({ firstImageIndex: imageIndex, imagesShowing: imagesShowing });
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
    const { backgroundColor } = this.props;
    const { imagesShowing } = this.state;

    return (
      <div
        ref={(ref) => this.setOuterRef(ref)}
        className="d-flex justify-content-between align-items-center align-items-stretch flex-nowrap"
        style={{
          'marginLeft': '-1.5rem',
          'marginRight': '-1.5rem',
          'paddingLeft': '-2rem',
          'paddingRight': '-2rem',
          'minHeight': '475px',
        }}
      >
        <Button
          ref={(ref) => this.setButtonRef(ref)}
          className="image-rotator-button border-0 arrow-button align-self-stretch"
          variant="light"
          onClick={() => this.decrementImageIndex()}
        >
          <h2>{"<"}</h2>
        </Button>
        {
          this.state.renderImages
          ? imagesShowing.map((image) => {
            return (
              <div className="d-flex flex-column text-center align-items-center mb-4">
                <Image
                  key={`image-0`}
                  id={`image-0`}
                  className={
                    `my-auto\
                    image-rotator-image\
                    align-items-center\
                    bg-light\
                    mx-auto\
                    align-content-center\
                    ${image.shadow === undefined || image.shadow === true ? 'shadow-image' : ''}\
                    ${image?.rounded ? image.rounded : 'rounded-3'}`
                  }
                  roundedCircle={image?.roundedCircle !== undefined ? image.roundedCircle : true}
                  src={image?.src}
                />
              </div>
            );
          }) : (
            <Spinner animation="grow" variant={backgroundColor} />
          )
        }
        <Button
          className={`image-rotator-button border-0 arrow-button align-self-stretch`}
          variant="light"
          onClick={() => this.incrementImageIndex()}
        >
          <h2>{">"}</h2>
        </Button>
      </div>
    );
  }
}

ImageRotator.protoTypes = propTypes;
export default ImageRotator;

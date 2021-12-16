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
    this.setState({ imagesShowing: imagesShowing });
    console.log("Image Rotator CDM")

    window.addEventListener('resize', () => {
      this.resetImageInterval();
      const imagesToShow = this.calculateImagesToShow(this.state.firstImageIndex);
      this.setState({ imagesShowing: imagesToShow });
    });
  }

  calculateImagesToShow(firstImageIndex) {
    const { renderImages } = this.state;
    const { images, maxWidth, maxImagesOnScreen } = this.props;
    
    const imagesToShow = [];
    if (!renderImages) {
      this.resetImageInterval();
      return [images[0]];
    }

    // Calculate the width of the outer component
    const widthOfOuterComponent = (this.outerRef?.offsetWidth - 100) - (2 * (this.buttonRef?.offsetWidth + 48));
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
    const { backgroundColor, maxWidth } = this.props;
    const { imagesShowing } = this.state;

    // There's only one image showing so put the arrow buttons below the image
    if (imagesShowing.length === 1) {
      return (
        <div ref={(ref) => this.setOuterRef(ref)} className="d-flex justify-content-between align-items-center flex-nowrap mb-5">
          <Button
            ref={(ref) => this.setButtonRef(ref)}
            className={`image-rotator-button border-0 my-auto px-0 mx-0 arrow-button`}
            variant="light"
            onClick={() => this.decrementImageIndex()}
          >
            <h2 className="py-5 my-5 px-2">{"<"}</h2>
          </Button>
          {
            this.state.renderImages
            ? imagesShowing.map((image) => {
              return (
                <div className="d-flex-columns text-center">
                  <Image
                    key={`image-0`}
                    id={`image-0`}
                    className={
                      `image-rotator-image
                      bg-light
                      mx-auto
                      ${image.shadow === true ? 'shadow-image' : ''}
                      ${image?.rounded ? image.rounded : 'rounded-3'}`
                    }
                    roundedCircle={image?.roundedCircle !== undefined ? image.roundedCircle : true}
                    style={{ width: maxWidth }}
                    src={image?.src}
                  />
                  <h3 className="mt-5 mx-2 d-flex-columns">
                    <div>{image?.description}</div>
                    <a href={image?.link} target="_blank" rel="noreferrer">{image?.link}</a>
                  </h3>
                </div>
              );
            }) : (
              <Spinner animation="grow" variant={backgroundColor} />
            )
          }
          <Button
            className={`image-rotator-button border-0 my-auto px-0 mx-0 arrow-button`}
            variant="light"
            onClick={() => this.incrementImageIndex()}
          >
            <h2 className="py-5 my-5 px-2">{">"}</h2>
          </Button>
        </div>
      );
    }

    // More than one image so put the arrow buttons on each side
    return (
      <div ref={(ref) => this.setOuterRef(ref)} className="d-flex justify-content-between flex-nowrap">
        <Button
          ref={(ref) => this.setButtonRef(ref)}
          className={`image-rotator-button border-0 my-auto px-0 mx-0 arrow-button`}
          variant="light"
          onClick={() => this.decrementImageIndex()}
        >
          <h2 className="py-5 my-5 px-2">{"<"}</h2>
        </Button>
        <div className="wrapper d-flex">
          {
            this.state.renderImages
            ? imagesShowing.map((image, index) => {
              return (
                <div className="d-flex-columns text-center">
                  <Image
                    key={`image-${index}`}
                    id={`image-${index}`}
                    className={`image-rotator-image bg-light ${image.shadow === true ? 'shadow-image' : ''} m-5 ${image.rounded ? image.rounded : 'rounded-3'}`}
                    roundedCircle={image.roundedCircle !== undefined ? image.roundedCircle : true}
                    style={{ width: maxWidth }}
                    src={image.src}
                  />
                  <h3 className="mt-5 mx-2">
                    {image?.description}
                  </h3>
                </div>
              );
            }) : (
              <Spinner animation="grow" variant={backgroundColor} />
            )
          }
        </div>
        <Button
          className={`image-rotator-button border-0 my-auto px-0 mx-0 arrow-button`}
          variant="light"
          onClick={() => this.incrementImageIndex()}
        >
          <h2 className="py-5 my-5 px-2">{">"}</h2>
        </Button>
      </div>
    )
  }
}

ImageRotator.protoTypes = propTypes;
export default ImageRotator;

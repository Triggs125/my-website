import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";

import { setImagesShowing } from "../actions/imageRotatorActions";

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

    window.addEventListener('resize', () => this.calculateImagesToShow());
    setInterval(() => this.incrementImageIndex(), 5000);
  }

  calculateImagesToShow() {
    const { firstImageIndex, renderImages } = this.state;
    const { images, dispatch } = this.props;
    
    const imagesToShow = [];
    if (renderImages) {
      // Calculate the width of the outer component
      const widthOfOuterComponent = this.outerRef?.offsetWidth - (2 * this.buttonRef?.offsetWidth + 200);
      // Set an average image width of 400px which is the max width an image can be
      const aveImageWidth = 400;
      // Calculate the number of images to dispay
      const numberOfImages = Math.max(Math.floor(widthOfOuterComponent / aveImageWidth), 1);

      // Get the images showing based on what the first image index
      for (let i = 0, j = firstImageIndex; i < numberOfImages; i++, j++) {
        if (j >= images.length) j = 0;
        imagesToShow.push(images[j]);
      }

      dispatch(setImagesShowing(imagesToShow));
    }

    return imagesToShow;
  }

  incrementImageIndex() {
    const { firstImageIndex } = this.state;
    const { images } = this.props;

    if (firstImageIndex + 1 >= images.length) this.setState({ firstImageIndex: 0 });
    else this.setState({ firstImageIndex: firstImageIndex + 1});

    this.calculateImagesToShow();
  }

  decrementImageIndex() {
    const { firstImageIndex } = this.state;
    const { images } = this.props;

    if (firstImageIndex - 1 < 0) this.setState({ firstImageIndex: images.length - 1 });
    else this.setState({ firstImageIndex: firstImageIndex - 1 });

    this.calculateImagesToShow();
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
    const { backgroundColor, imagesShowing } = this.props;

    // If calculateImagesToShow has been called before then imagesShowing will have a length of at least 1 so this will only be called once
    if (imagesShowing.length === 0) this.calculateImagesToShow();

    // There's only one image showing so put the arrow buttons below the image
    if (imagesShowing.length === 1) {
      return (
        <div ref={(ref) => this.setOuterRef(ref)} className="d-flex flex-column justify-content-center flex-nowrap">
          <div className="d-flex justify-content-center flex-nowrap">
            {
              this.state.renderImages
              ? imagesShowing.map((image, index) => {
                return (
                  <Image
                    key={`image-${index}`}
                    id={`image-${index}`}
                    className={`image-rotator-image bg-light mb-4 ${image.shadow ? image.shadow : 'shadow-image'} ${image.rounded ? image.rounded : 'rounded-3'}`}
                    roundedCircle={image.roundedCircle !== undefined ? image.roundedCircle : true}
                    src={image.src}
                  />
                );
              }) : (
                <Spinner animation="grow" variant={backgroundColor} />
              )
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
            this.state.renderImages
            ? imagesShowing.map((image, index) => {
              return (
                <Image
                  key={`image-${index}`}
                  id={`image-${index}`}
                  className={`image-rotator-image bg-light m-5 ${image.shadow ? image.shadow : 'shadow-image'} ${image.rounded ? image.rounded : 'rounded-3'}`}
                  roundedCircle={image.roundedCircle !== undefined ? image.roundedCircle : true}
                  src={image.src}
                />
              );
            }) : (
              <Spinner animation="grow" variant={backgroundColor} />
            )
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

const mapStateToProps = state => ({
  imagesShowing: state.imageRotator.imagesShowing,
});

ImageRotator.protoTypes = propTypes;
export default connect(mapStateToProps)(ImageRotator);

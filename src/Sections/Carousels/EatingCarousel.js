import '../../App.css';
import React, {Component} from "react";
import curry from '../../images/curry.jpg';
import fish_and_chips from '../../images/fish_and_chips.jpg';
import ramsay from '../../images/ramsay.jpg';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";


export class EatingCarousel extends Component {
    render(){
        return (
            <MDBContainer>
                <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                    <MDBView>
                        <div className="outer-image">
                            <img className="d-block w-100 h-100" src={curry} alt="First slide" />
                        </div>
                        <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">British Indian Food</h3>
                    </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                    <MDBView>
                        <div className="outer-image">
                            <img className="d-block w-100" src={fish_and_chips} alt="Second slide" />
                        </div>
                        <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">Pub Food</h3>
                    </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                    <MDBView>
                        <div className="outer-image">
                            <img className="d-block w-100" src={ramsay} alt="Third slide" />
                        </div>
                        <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">Fine Dining</h3>
                    </MDBCarouselCaption>
                    </MDBCarouselItem>            
                </MDBCarouselInner>
                </MDBCarousel>        
            </MDBContainer>
        );
    }
}
  
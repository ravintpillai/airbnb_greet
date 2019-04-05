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
                        <img className="d-block w-100" src={curry} height={620} alt="First slide" />
                        <MDBMask overlay="black-strong" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">British Indian Food</h3>
                        <p>A legacy of colonical times, Britain has some of the best south asian food in the world, but also with a unique British twist. </p>
                    </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                    <MDBView>
                        <img className="d-block w-100" src={fish_and_chips} height={620} alt="Second slide" />
                        <MDBMask overlay="black-strong" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">Pub Food</h3>
                        <p>From Fish and Chips to Steak and Ale pie, many of Britain's most famous culinary delights originated in Pubs</p>
                    </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                    <MDBView>
                        <img className="d-block w-100" src={ramsay} height={620} alt="Third slide" />
                        <MDBMask overlay="black-strong" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">Fine Dining</h3>
                        <p>London is home to some of the most impressive restauraunts and chefs in the world, and if you're really into your food, you can enjoy some unique restaurants here.</p>
                    </MDBCarouselCaption>
                    </MDBCarouselItem>            
                </MDBCarouselInner>
                </MDBCarousel>        
            </MDBContainer>
        );
    }
}
  
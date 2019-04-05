import '../../App.css';
import React, {Component} from "react";
import clubbing from '../../images/clubbing.jpg';
import outdoors from '../../images/outdoors.jpg';
import around_apartment from '../../images/around_apartment.jpg';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";


export class ToDoCarousel extends Component {
    render(){
        return (
        <MDBContainer>
            <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src={clubbing} height={620} alt="First slide" />
                    <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                    <h3 className="h3-responsive">Partying & Clubbing</h3>
                </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src={outdoors} height={620} alt="Second slide" />
                    <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                    <h3 className="h3-responsive">The Great Outdoors</h3>
                </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                <MDBView>
                    <img className="d-block w-100" src={around_apartment} height={620} alt="Third slide" />
                    <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                    <h3 className="h3-responsive">Around The Apartment</h3>
                </MDBCarouselCaption>
                </MDBCarouselItem>            
            </MDBCarouselInner>
            </MDBCarousel>        
        </MDBContainer>
        );
    }
}
import React, {Component} from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import ToDoCarousel from './Carousels/ToDoCarousel';

export class ToDo extends Component {
    render(){
        return (
            <div>
                <ToDoCarousel />
                <MDBContainer>
                    <p className="headline-text">There are many things to do in London!</p>
                    <div>
                        <h1>Partying / Clubbing</h1>
                        <p>London is famous for its night-life, and there are many different areas you can go out in - each with its own distinct vibe and experience to offer. Here are some of my personal recommendations:
                            <ul>
                                <li>SoHo: G-A-Y, Thirst Bar</li>
                                <li>Shoreditch: The BookClub, Underground at the Ace Hotel</li>
                                <li>Camden: Egg</li>
                                <li>South London: Clapham Grand, Hootanannny's</li>
                                <li>Classic London Clubs: Fabric, Ministry of Sound</li>
                            </ul>
                        </p>
                    </div>
                </MDBContainer>
                <MDBContainer>
                <div>
                    <h1>The Great Outdoors</h1>
                    <p>For a city of its size, London is one of the Greenest cities in the world, with several gorgeous parks, ideal for Picnics and Pimms in the Summer or just a nice leisurely walk any time of year: a few of my favourites:
                        <ul>
                            <li>Hampsted Heath & Belsize Park (outdoor freshwater swimming and incredible views of London on Primrose Hill)</li>
                            <li>Regent's Park (The most beautiful, well curated park)</li>
                            <li>Hyde Park & St James' Park (The biggest)</li>
                            <li>Richmond Park (A bit far, but teeming with wild deer)</li>
                            <li>Battersea Park (right by the flat, don't miss the Buddha)</li>
                        </ul>
                    </p>
                </div>  
                </MDBContainer>      
                <MDBContainer>
                <div>
                    <h1>Around The Apartment</h1>
                        <p>The apartment, as you could probably tell from your research or just your trip here from the airport, is incredibly well located.
                            Within walking distance, you have many of London's most famous landmarks - Big Ben, Parliament, Westminster Abbey, Trafalgar Square,
                            10 Downing Street, Buckingham Palace, Shakespeare's Globe Theatre, and many others. For those who love seeing a city on foot (or by bike), I drew up my
                            favourite 'Day in London', centred around the apartment. When I have friends or family visiting from far afield - this is the day that
                            I like to give them. Here are a few of things you'll get to see/do:
                                <ul>
                                    <li>Big Ben, Parliament, Westminster Abbey</li>
                                    <li>Trafalgar Square, The National Gallery & The National Portrait Gallery (Free!)</li>
                                    <li>Covent Garden (the most beautiful of all London's central square's, and home to the Royal Opera House and Ballet</li>
                                    <li>Somerset House (a former Royal Palace)</li>
                                    <li>Ye Olde Cheshire Cheese (Charles Dickens' favourite Pub</li>
                                    <li>The Royal Courts of Justice</li>
                                    <li>St Paul's Cathedral</li>
                                    <li>The Tower of London / Tower Bridge</li>
                                    <li>St Katherine's Docks (one of London's hidden gems)</li>
                                    <li>Borough Market (a famous London street market)</li>
                                    <li>The Shard (the tallest skyscraper in Europe</li>
                                    <li>Shakespeare's Globe Theatre</li>
                                    <li>The Tate Modern - one of the world's pre-eminent galleries and free!</li>
                                    <li>The National Theatre</li>
                                </ul>
                        </p>

                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m70!1m8!1m3!1d19869.78443240324!2d-0.1204245!3d51.4999495!3m2!1i1024!2i768!4f13.1!4m59!3e2!4m3!3m2!1d51.5026237!2d-0.11701289999999999!4m5!1s0x487604c359914745%3A0x700da0b0ccd9ee00!2sWestminster+Abbey+Deans+Yd!3m2!1d51.499424499999996!2d-0.1275639!4m5!1s0x487604ce3941eb1f%3A0x1a5342fdf089c627!2sTrafalgar+Square!3m2!1d51.508039!2d-0.128069!4m5!1s0x487604d2e75b4baf%3A0x20d4436b141de6bf!2sHoppers%2C+Frith+Street%2C+London%2C+UK!3m2!1d51.513606499999995!2d-0.1316802!4m5!1s0x487604cb878e81b3%3A0x91f10fa364452046!2sCovent+Garden%2C+London%2C+UK!3m2!1d51.5116571!2d-0.12404359999999999!4m5!1s0x487604b5f3c46771%3A0x439ecc438a580a1!2sSomerset+House%2C+Strand%2C+London%2C+UK!3m2!1d51.511058999999996!2d-0.11714799999999999!4m5!1s0x487604b2c7fd4933%3A0x84453ae77f4e5966!2sYe+Olde+Cheshire+Cheese!3m2!1d51.5143141!2d-0.107164!4m5!1s0x487604aca207bc87%3A0x3a1d3501a9af5fde!2sSt.+Paul&#39;s+Cathedral%2C+London%2C+UK!3m2!1d51.5138453!2d-0.0983506!4m5!1s0x487603483823269b%3A0xc146c1d84b628edf!2sSt+Katharine+Docks+Marina!3m2!1d51.506429999999995!2d-0.0710647!4m5!1s0x487604b876b69fd9%3A0xf0128a3cb6334745!2sCounty+Hall+Apartments%2C+5+Chicheley+St%2C+London+SE1+7PY%2C+UK!3m2!1d51.5027627!2d-0.11747039999999999!5e0!3m2!1sen!2sus!4v1554412416328!5m2!1sen!2sus" 
                        width="600" 
                        height="450" 
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>
                </div>
                </MDBContainer>
            </div>
        )
    }
}
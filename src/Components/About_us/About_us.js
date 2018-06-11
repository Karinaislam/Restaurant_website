import React, { Component } from 'react';
import Header from '../Header/Header';
import './About_us.css';

class About_us extends Component {
    render() {
        return (
            <div className="about">
                <Header/>
                <article >
                    <h1 className="about_heading">About us</h1>
                    <section>
                    Cozy was opened in summer 2003. Cozy is a Thai restaurant that is simply yet uniquely decorated. 
                Blended using a combination of both Thai and American cultures, the restaurant's atmosphere is different from your usual traditional Thai restautant. Tee M., Designer and co-owner of the restaurant, "feels that other than having food that is delicious, the atmosphere is very important and must be consistent with today's modern times."
                Beside of having a pleasantly decorated interior, this restaurant provides you with warm and friendly service that makes you feel right at home. 
                For further information and reservations, call 773.327.0100 or u2us@CozyChicago.com <br/><br/>

                Cozy Noodles & Rice offers delicious dining, takeout and delivery to Evanston, IL.
                Cozy Noodles & Rice is a cornerstone in the Evanston community and has been recognized for its outstanding Chinese cuisine, excellent service and friendly staff.
            Our Chinese restaurant is known for its modern interpretation of classic dishes and its insistence on only using high quality fresh ingredients.
                    </section>
               
                </article>

                <aside>
                    <div>
                        <h1>Location</h1>
                        <p> 1018 Davis st., Evanston, IL 60201</p>

                    </div>

                    <div>
                        <h1>Hours</h1>
                        <p> Mon - Thus	11.30AM - 9.30PM
                            Fri - Sat	11.30AM - 10.00PM
                            Sun	4PM - 9.30PM</p>


                    </div>
               
                    
                </aside>

                
            </div>
        );
    }
}

export default About_us;
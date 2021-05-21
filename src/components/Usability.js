import React from 'react';
import './Components.css';
import Image1 from '../images/bram-van-oost-4xM5cytsdMo-unsplash.jpg';
import Image2 from '../images/tech-nick-kPUQOsfThag-unsplash.jpg';

function Usability() {
    return (
        <div>
            <p>
            At the moment, the Tesla Model 3 is one of the most iconic electric vehicles on the market. Not only does it accelerate from 0 to 60 miles per hour in 3.1 seconds, it also features AutoPilot, allowing for autonomous driving, and a 15 inch touchscreen display used to control the car's interior and exterior features and functionalities. <br></br><br></br>
            <center>
            <img className="image-container" src={Image1} alt=""></img>
            </center>
            <br></br>
            The Model 3 possesses a rich set of affordances that allows for a user experience that sets the product apart from its competitors. The main affordance present in the product is the 15 inch touchscreen display in the center of the console, which allows the user to control everything in their Model 3. This is a perceived affordance acting as a signifier, where the user already knows to use the touchscreen display to modify the product without being told to do so, simply because the user experience is tailored to consumers in the digital era. Another affordance of the Model 3 is how customizable all of the vehicle's features are; some users will change the horn on the vehicle to play their favorite songs instead of the traditional car horn. While the designer’s may not have intended the horn to be used the way it is, the user’s were able to identify the perceived affordance as a signifier and take advantage of how easy it is to use. Such affordances and signifiers add to the usability of the product/experience and makes it easier to connect with users and prevent human error. <br></br>
            <br></br>
            The user is constrained by the electric vehicle aspect of the Model 3 as Tesla’s worldwide fleet of superchargers limit the interactions that take place while charging their vehicle. Tesla vehicles can either be charged at home or by using the display to locate the nearest Tesla supercharger. Don Norman in “The Design of Everyday Things” mentions that “constraints simplify memory” and the Tesla Model 3 gives the user just two simple options for charging their vehicle: at home or on the road. This is an example of a physical constraint. Another constraint of the design of the Model 3 is the touchscreen display, which has all the possible sets of actions that one can perform within the vehicle. This is a logical constraint as well as a physical constraint that aims to guide human behavior. 
            <br></br><br></br>
            <center>
            <img className="image-container" src={Image2} alt=""></img>
            </center>
            <br></br>
            My approval of the Model 3 stems from the desirability, feasibility and viability of the product/experience, which is a luxury electric vehicle with autonomous technology that appeals to the consumer and seamlessly fits into their lives. With advancements in artificial intelligence and robotics, the product is feasible as they are a market leader in self-driving cars. However, I am still concerned about the viability of the product; despite aligning well with the mission of Tesla, other EV manufacturers are slowly gaining market share with similar products. When designing the Model 3, engineers at Tesla “were thinking” about creating a luxury electric vehicle built around the driver; the product and experience Tesla creates for their end user is intended to build a relationship between the business and the customer and to bridge the gap between autonomous driving, intelligent systems and electric vehicles. Such thought-process influences the user experience by allowing users to customize their preferences when using the Model 3 while “feeling good” about driving electric vehicles. Lastly, the product demonstrates human-centered design by focusing on building a feasible, desirable and viable product while building empathy for the people they are designing for. The users of Tesla products want a sleek, luxurious and powerful EV and it’s safe to say that they delivered with the Model 3. 
            <br></br><br></br>
            </p>
        </div>
    );
}

export default Usability;
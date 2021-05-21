import React from 'react';
import './Components.css';
import PersonaImage from '../images/persona.png';

function Persona() {
    return (
        <div>
            <img className="persona-container" src={PersonaImage} alt=""></img>
            <br></br><br></br>
            <p>
            Mohit, the general dentist, is a realistic, viable and targetable persona for the Tesla Model 3. As a technologist and advocate of science and research, he seems like a likely candidate who would be open to adopting an autonomous electric-vehicle as he is aware of the impact he will have on lowering carbon emissions while making his life easier by taking advantage of autonomous self-driving cars.
            <br></br><br></br>
            As a technologist, he will be impressed by how seamlessly his smartphone connects to the Model 3’s 15 inch touchscreen display as well as how user-friendly the UI is on the display as it relates to controlling the features and functionalities of the vehicle. 
            <br></br><br></br>
            Due to the persona’s income, he can afford the Tesla Model 3, which is currently priced at $37,990, while still being fiscally responsible about how he spends his money. The Tesla Model 3 is a very durable electric vehicle and he can expect the product to last much longer than a traditional motor vehicle while avoiding depreciation (because of how technologically advanced the Model 3 is compared to other vehicles on the market). 
            <br></br><br></br>
            The persona’s habit of being pro-recycling and pro-Green energy makes them an ideal customer for the Model 3, as it is one of the most well known electric vehicles on the market while maintaining a sleek and clean product that appeals to consumers in the 25-35 age demographic. The only drawback of the persona is that it may be too well catered to the Model 3, but the persona Mohit is a small fish in a large pond of young professionals who are environmentally conscious and appreciate the look and performance of the Model 3. 
            </p>
        </div>
    );
}

export default Persona;
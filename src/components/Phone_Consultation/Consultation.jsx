import './Consultation.css'
import React, { useState } from 'react';
const Consultation = () => {
     
    const [expandedRow, setExpandedRow] = useState(null);

    const handleRowClick = (rowId) => {
        setExpandedRow(expandedRow === rowId ? null : rowId);
    };

    return (
      <div className='phone-consultation' id='phone-consultation'>
            <h1>Phone Consultation</h1>
            <p>Consultation details are as follows (The medium of consultation will be Phone-Call / Whatsapp-Call). Please read the following details very carefully.</p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Consultation Type</th>
                        <th>Price (INR / USD)</th>
                        <th>Consultation Time</th>
                    </tr>
                </thead>
                <tbody>
                    {consultations.map((consultation, index) => (
                        <React.Fragment key={index}>
                            <tr onClick={() => handleRowClick(index)}>
                                <td className="expandable">{consultation.type}</td>
                                <td>{consultation.price}</td>
                                <td>{consultation.time}</td>
                            </tr>
                            {expandedRow === index && (
                                <tr className="hidden-row">
                                    <td colSpan="3">
                                        <div className="extra-info">
                                            {consultation.details}
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        <div className='booking'>
            <p>
            For booking consultation please share the required information at <b>contact.jsootram@gmail.com. </b> <br/> 
After reviewing your email we will send you other details (including payment) in the response of the email.<br/>
Here it is to mention that, Foreigners means, <strong>"people who are currently living out of India".</strong>
            </p>
            <p className='booking1'><strong>Note:</strong> ASTROLOGY CAN'T CHANGE YOUR LIFE, IT HELPS YOU TO MAKE CHANGES IN YOUR LIFE TO LIVE HAPPILY.</p>
        </div>
        </div>
    );
};

const consultations = [
    {
        type: "Single Domain Consultation",
        price: "INR 1300 (Indian) OR 22 USD (Foreigners*)",
        time: "30 Minutes",
        details: (
            <table className="table table-bordered">
                <tbody>
                    <tr className='row2'>
                        <td>
                            <p><b>(A) Love & Marriage</b></p>
                            <p>Accurate Birth Details<br />
                                Name:<br />
                                Date of Birth:<br />
                                Time of Birth:<br />
                                Place of Birth:<br />
                                Questions:<br />
                                One Horoscope, Time: 30 Minutes
                            </p>
                        </td>
                        <td>
                            <p><b>(B) Business & Profession</b></p>
                            <p>Accurate Birth Details<br />
                                Name:<br />
                                Date of Birth:<br />
                                Time of Birth:<br />
                                Place of Birth:<br />
                                Questions:<br />
                                One Horoscope, Time: 30 Minutes
                            </p>
                        </td>
                        <td>
                            <p><b>(C) Service & Job</b></p>
                            <p>Accurate Birth Details<br />
                                Name:<br />
                                Date of Birth:<br />
                                Time of Birth:<br />
                                Place of Birth:<br />
                                Questions:<br />
                                One Horoscope, Time: 30 Minutes
                            </p>
                        </td>
                        <td>
                            <p><b>(D) Income & Wealth</b></p>
                            <p>Accurate Birth Details<br />
                                Name:<br />
                                Date of Birth:<br />
                                Time of Birth:<br />
                                Place of Birth:<br />
                                Questions:<br />
                                One Horoscope, Time: 30 Minutes
                            </p>
                        </td>
                        {/* Add more columns as needed */}
                    </tr>
                </tbody>
                
            </table>
        ),
    },
    

    {
        type: "Birth Time Rectification (BTR)",
        price: "INR 1300 (Indian) OR 22 USD (Foreigners*)",
        time: "15 Minutes",
        details: (
            <table className="table table-bordered">
                <tbody>
                    <tr className='row1'>
 
                            Birth Details<br />
                                Name:<br />
                                Date of Birth:<br />
                                Approximate Time of Birth:<br />
                                Place of Birth:<br />
                                One Horoscope, Time: 15 Minutes
                        
                        
                        {/* Add more columns as needed */}
                    </tr>
                </tbody>
                
            </table>
        ),
    },
    {
        type: "Current Year Lal Kitab Warshfal",
        price: "INR 1300 (Indian) OR 22 USD (Foreigners*)",
        time: "30 Minutes",
        details: (
            <table className="table table-bordered">
                <tbody>
                    <tr className='row1'>
 
                    Accurate Birth Details<br />
                                Name:<br />
                                Date of Birth:<br />
                                Time of Birth:<br />
                                Place of Birth:<br />
                                One Horoscope, Time: 30 Minutes
                        
                        
                        {/* Add more columns as needed */}
                    </tr>
                </tbody>
                
            </table>
        ),
    },
    {
        type: "BTR + Any 1 Domain + Basic Consultation",
        price: "INR 3100 (Indian) OR 49 USD (Foreigners*)",
        time: "40 Minutes",
        details: (
            <table className="table table-bordered">
                <tbody>
                    <tr className='row1'>
 
                   Birth Details<br />
                                Name:<br />
                                Date of Birth:<br />
                                Approximate Time of Birth:<br />
                                Place of Birth:<br />
                                Domain Name:<br/>
                                Questions:<br/>
                                One Horoscope, Time: 40 Minutes
                        
                        
                        {/* Add more columns as needed */}
                    </tr>
                </tbody>
                
            </table>
        ),
    },
    {
        type: "Any 2 Domains + Basic Consultation",
        price: "INR 3100 (Indian) OR 49 USD (Foreigners*)",
        time: "40 Minutes",
        details: (
            <table className="table table-bordered">
                <tbody>
                    <tr className='row1'>
 
                    Accurate  Birth Details<br />
                                Name:<br />
                                Date of Birth:<br />
                                Time of Birth:<br />
                                Place of Birth:<br />
                                Domain Name:<br/>
                                Questions:<br/>
                                One Horoscope, Time: 40 Minutes
                        
                        
                        {/* Add more columns as needed */}
                    </tr>
                </tbody>
                
            </table>
        ),
    },
    {
        type: "BTR + Any 4 Domains + Basic Consultation + Lal Kitab Warshfal",
        price: "INR 6600 (Indian) OR 83 USD (Foreigners*)",
        time: "60 Minutes",
        details: (
            <table className="table table-bordered">
                <tbody>
                    <tr className='row1'>
 
                                Birth Details<br />
                                Name:<br />
                                Date of Birth:<br />
                                Approximate Time of Birth:<br />
                                Place of Birth:<br />
                                Scale Plan of House:<br/>
                                Domain Name:<br/>
                                Questions:<br/>
                                One Horoscope, Time: 60 Minutes
                        
                        
                        {/* Add more columns as needed */}
                    </tr>
                </tbody>  
            </table>

         
    
        ),
    },
    
    
    
];

export default Consultation

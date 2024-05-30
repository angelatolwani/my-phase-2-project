import { Box, Container } from "@mui/material";

function About () {
    return (
        <>
            <Container maxWidth="sm">
                <Box>
                    <h1 align="center">Virtual Consult Guidelines</h1>
                    <p>Our innovative approach offers the convenience of expert 
                        veterinary input potentially avoiding a physical visit to 
                        the veterinary hospital.</p>
                    <p>Veterinarians are able to establish a veterinarian-client-patient 
                        relationship (VCPR) through remote methods.</p>
                    <h4>Benefits of Joining the Network</h4>
                    <ol>
                        <li>
                            Flexible Scheduling
                            <ul>
                                <li>Set your own hours to balance professional and personal life with ease.</li>
                            </ul>
                        </li>
                        <li>
                            Own Your Business
                            <ul>
                                <li>Run a turn-key veterinary consulting business.</li>
                            </ul>
                        </li>
                        <li>
                            Earn More
                            <ul>
                                <li>Grow your earnings beyond typical associate veterinarian salaries.</li>
                            </ul>
                        </li>
                        <li>
                            Expand Your Client Base
                            <ul>
                                <li>Connect with pet owners at their convenience, anytime, anywhere.</li>
                            </ul>
                        </li>
                        <li>
                            AI-Powered Efficiency
                            <ul>
                                <li>Focus on caring for pets while we handle documentation.</li>
                            </ul>
                        </li>
                    </ol>
                    <h4>Key Guidelines</h4>
                    <ul>
                        <li>A pet parent authorizes the veterinarian to assume 
                            responsibility for medical care.</li>
                        <li>The veterinarian is responsible for making medical 
                            judgements and developing a treatment plan.</li>
                        <li>The veterinarian must have sufficient info of the animal patient.</li>
                        <li>The pet parent agrees to have a virtual consult and is aware of 
                            the potential limitations of virtual consults.  </li>
                        <li>The VCPR relationship must be reestablished every 6 months to allow the 
                            veterinarian to diagnose, treat and prescribe medications. </li>
                    </ul>
                </Box>
            </Container>            
        </>
    )
};

export default About;
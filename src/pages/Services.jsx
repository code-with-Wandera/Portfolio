
import Navbar from "../components/navbar/navbar.jsx";
import front from "../assets/icons/front.png"
import back from "../assets/icons/Back.png"
import database from "../assets/icons/database.png"
import design from "../assets/icons/ui-ux.png"



function Services (){

    const InfoServices=(
        <div className="container">
            <h1> Services</h1>
        
            <div className="Service1">
            <p>
            With my current expertise in programming and web development, I offer comprehensive solutions for both front-end and back-end development, ensuring that your website or web application is functional, user-friendly, and visually appealing
            </p>

            </div>
            <div className="Grid1">
            <div className="Service2">
            <img className="Icon1"src={front} alt="Front-end icon" />
                <h3> <strong>Front-End Web Developer</strong></h3>
            
            <p>
            I create dynamic and responsive user interfaces using the latest web technologies like HTML5, CSS3, JavaScript, and popular frameworks like React. My designs are mobile-friendly, intuitive, and optimized for seamless user experiences across all devices
            </p>
            </div>

            <div className="Service3">
            <img className="Icon2"src={back} alt="backend icon" />
                <h3> <strong>Back-End Developer </strong></h3>
            
            <p>
            I specialize in building robust and scalable back-end systems using server-side technologies like Node.js. I ensure your applications' logic, databases, and APIs are secure, efficient, and capable of handling large volumes of traffic while maintaining high performance
            </p>
            </div>


            <div className="Service4">
            <img className="Icon3"src={database} alt="database icon" />
                <h3> <strong>Database Management </strong> </h3>
            
            <p>
            I use NoSQL solutions like MongoDB, to provide custom database solutions that efficiently manage your data while ensuring quick retrieval and secure storage
            </p>
            </div>

            <div className="Service5">
        <img className="Icon4"src={design} alt="ui-ux icon" />
                <h3>  <strong>UI/UX Designer </strong></h3>
            <p>
            As a UI/UX designer, I specialize in creating intuitive and engaging user freindly designs. I focus on both the functionality and aesthetics of your product, ensuring that users have a seamless and enjoyable interaction. I craft user-centered solutions that are not only visually appealing but also easy to navigate. My goal is to bring your vision to life with designs that enhance usability and leave a lasting impression on your audience.
            </p>
            </div>
            </div>

        </div>
    )

    return(

        <>
         <Navbar />
        
         <p>
            {InfoServices}
         </p>
        </>
    )
}
export default Services
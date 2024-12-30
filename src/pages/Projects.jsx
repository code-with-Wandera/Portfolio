
import Navbar from "../components/navbar/navbar.jsx";
import LMS from "../assets/icons/LMS.webp/"
import SMS from "../assets/icons/SMS.webp"
import Lipia from "../assets/icons/Lipia.webp"
import RMS from "../assets/icons/RMS.webp"

function Project (){

const Projects = (
  
  <div className="Container1">
    <h1>Notable Projects</h1>
    <div className="Container2">
    <div className="Pro1">

    <img  className="lms1"src={LMS} alt="Learning management system" />
    <h2>
        Learning Management System
      </h2>
  
            <p>
            "Our LMS allows educators to create and deliver courses, assess learner progress, and foster collaboration in real time. It offers personalized learning paths, interactive features, and detailed analytics to track student performance, making it easy to manage and scale educational experiences
            </p>

            </div>

            <div className="Pro2">
            <img className="sms1"src={SMS} alt="School management system" />
    <h2>
        School Management System
      </h2>
  
            <p>
            Our school management system streamlines administrative tasks by managing student enrollment, attendance, grades, and schedules. It enables communication between teachers, students, and parents, while also providing tools for reporting, fee management, and performance tracking, ensuring smooth and efficient school operations
            </p>

            </div>
            <div className="Pro3">
            <img className="rms1"src={RMS} alt="Rent management system" />
    <h2>
        Rent Management System
      </h2>
            <p>
            Our school management system streamlines administrative tasks by managing student enrollment, attendance, grades, and schedules. It enables communication between teachers, students, and parents, while also providing tools for reporting, fee management, and performance tracking, ensuring smooth and efficient
             school operations
            </p>

            </div>

            <div className="Pro4">
            <img className="lipia"src={Lipia} alt="Lipia online" />
    <h2>
        Lipia Online
      </h2>
            <p>
            Lipia Online System is a secure and user-friendly platform that simplifies online transactions. It provides efficient payment processing, real-time transaction tracking, and seamless account management. With advanced encryption, Lipia ensures safe and reliable transactions for both individuals and businesses, enhancing the online payment experience with ease and convenience.
            </p>

            </div>
            </div>


  </div>

)


    return(
        <>
      <Navbar />
      <p>
        {Projects}
      </p>

        </>
    )
}
export default Project
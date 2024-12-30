import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
function Navbar(){

return(
  
  //Linking pages
<> 
<header className={styles.header}>
<nav>

<ul>
<li> <Link to="/">Home</Link></li>
<li> <Link to="/About">About</Link></li>
<li> <Link to="/Services">Services</Link></li>
<li> <Link to="/Project">Projects</Link></li>
<li> <Link to="/Contact">Contact Us</Link></li>

</ul>
</nav>
</header>



</>



)
}
export default Navbar
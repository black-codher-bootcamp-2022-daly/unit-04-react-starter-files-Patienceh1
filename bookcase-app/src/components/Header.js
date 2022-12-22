import { Link } from "react-router-dom";
import Book from "./Book";

export default function Header (props) {
 
    return <>
        <h1 style={{ backgroundColor: "pink" }}>Patience's Book Case</h1>
        <div>
        <Link to="/" className="bookLink">Home{props.Book}</Link>
        </div>
        <div>
        <Link to="/Bookcase" >Bookcase</Link>
        </div>
        <div>
        <Link to="/About">About</Link>
        </div>
        </>
}
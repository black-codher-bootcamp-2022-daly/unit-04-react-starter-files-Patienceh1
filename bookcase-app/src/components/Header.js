import { Link } from "react-router-dom";
import Book from "./Book";

export default function Header (props) {
 
    return <>
        <h1 style={{ backgroundColor: "pink" }}>Patience's Book Case</h1>
        <div>
        <Link to="/">Home</Link>
        </div>
        <div>
        <Link to="/bookcase" className="bookLink">Bookcase {props.Book}</Link>
        </div>
        <div>
            <Link to="/about">About</Link>
        </div>
        </>
}
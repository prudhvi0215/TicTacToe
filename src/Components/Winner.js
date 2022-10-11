import {Link} from "react-router-dom";

import Homepage from "./Homepage";

function Winner(props)
{
    return(
        <div>
            The Winner is {props.name};
            <button><Link to="/">New Game</Link></button>
        </div>
        
    );
}

export default Winner;
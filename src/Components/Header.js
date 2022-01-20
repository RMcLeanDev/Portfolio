import react from 'react';

function Header(props){

    console.log(props);

    return (
        <div className='header'>
            <div>
                <h1>Ryan McLean</h1>
            </div>
            <div className="rightHeader">
                <h1 onClick={() => props.yeScroll("about")}>About Me</h1>
                <h1 onClick={() => props.yeScroll("skills")}>Skills</h1>
                <h1 onClick={() => props.yeScroll("projects")}>Projects</h1>
                <h1 onClick={() => props.yeScroll("contact")}>Contact</h1>
            </div>
        </div>
    )
}

export default Header;
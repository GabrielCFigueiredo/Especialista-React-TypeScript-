import styled from "styled-components";
import { NavLink } from "react-router-dom";



export default function NavBar() {

    /*const history = createBrowserHistory();

    function hendleAnchorClick(e: MouseEvent<HTMLAnchorElement>) {
       console.log('clicou');
        e.preventDefault()

        const newRoute = e.currentTarget.getAttribute('href')

        if(newRoute) {
            
            history.push(newRoute)
        }*/

    return (
        <nav>
            <List>
                <Item><NavLink to='/'>Home</NavLink></Item>
                <Item><NavLink to='/editores'>Editores</NavLink></Item> 
                <Item><NavLink to='/posts/criar'>Novo Post</NavLink></Item>
            </List>
        </nav>
    )
}

const List = styled.ul`
    
display: flex;
flex-direction: column;
list-style: none;
`

const Item = styled.li`
    
text-transform: lowercase;
font-size: 18px;

a {
    text-decoration: none;
    color: #274060;
    
    &.active {
        color: #0099ff
    }
}
`
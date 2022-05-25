import MainNavigation from "./MainNavigation9";

function Layout(props) {
    return (  
        <div>
            <MainNavigation/>
            <div>
                {props.children}
            </div>
        </div>
    );
}
 
export default Layout;
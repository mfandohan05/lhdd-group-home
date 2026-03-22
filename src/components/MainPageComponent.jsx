import HomePageComponent from "./home-page/HomePageComponent";
import { useEffect } from 'react';

function MainPageComponent() {
    useEffect(() => {
                document.title = "LHDD | Residential Care for Adults with Developmental Disabilities"
    }, []);
    return (
        <HomePageComponent />
    )
}

export default MainPageComponent;
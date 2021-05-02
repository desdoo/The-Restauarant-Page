export const addNavigation = (() => {

    const header = document.getElementById("header")
    header.innerHTML = `<nav id="nav"> 
    <button class="button-nav" data-section="home">Home</button>
    <button class="button-nav" data-section="menu">Menu</button>
    <button class="button-nav" data-section="about-us">About Us</button>
    </nav>`
    

    
})()

export default addNavigation;
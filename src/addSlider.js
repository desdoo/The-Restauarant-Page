export const addSlider = () => {

    document.querySelectorAll('[data-section="home"]')[0].style.fontWeight = "bold"
    const main = document.getElementById("main")
    main.innerHTML = `<div class="heroWrapper">
        <div class="heroContent">
            <h1>Sharktank</h1>
            <p>Enjoy fresh fish from the Mediterranean Sea. Lemon and Raki will keep you happy. </p>
        </div>
        <div class="heroImage">
            <img class="heroImageFile" src="https://images.unsplash.com/photo-1559329007-40df8a9345d8"></img>
        </div> </div>`
    
    
}

export default addSlider;
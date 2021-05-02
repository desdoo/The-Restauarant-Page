export const addMenu = () => {
    document.querySelectorAll('[data-section="menu"]')[0].style.fontWeight = "bold"
    const main = document.getElementById("main")
    main.innerHTML = `<section>
    <div class="menuWrapper">
    <div class="menuItem">
        <div class="menuItemName">Fish1</div>
        <div class="menuItemImage">
            <img class="img-fish" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bluefin-big.jpg/200px-Bluefin-big.jpg"></img>
        </div>
        <div class="menuItemPrice">23,99€</div>
    </div>
    <div class="menuItem">
        <div class="menuItemName">Fish2</div>
        <div class="menuItemImage">
            <img class="img-fish" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Salmo_salar_GLERL_1.jpg/200px-Salmo_salar_GLERL_1.jpg"></img>
        </div>
        <div class="menuItemPrice">33,99€</div>
    </div>
    <div class="menuItem">
        <div class="menuItemName">Fish3</div>
        <div class="menuItemImage">
            <img class="img-fish" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tilapia_cabrae.jpg/200px-Tilapia_cabrae.jpg"></img>
        </div>
        <div class="menuItemPrice">53,99€</div>
    </div>
    </div>`
    
}

export default addMenu;
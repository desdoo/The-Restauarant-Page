import addSlider from "./addSlider"
import addNavigation from "./addNavigation"
import addMenu from "./addMenu"
import addAboutUs from "./addAboutUs"

addSlider()

const button = document.getElementsByClassName("button-nav")
    Array.from(button).forEach(btn => {
        btn.addEventListener('click', () => {
            switch(btn.dataset.section) {
            case "home": 
                addSlider() 
            break

            case "menu": 
                addMenu()
            break

            case "about-us": 
                addAboutUs()
            break
        
        }
    })
});
export const addAboutUs = () => {
    document.querySelectorAll('[data-section="about-us"]')[0].style.fontWeight = "bold"
    const main = document.getElementById("main")
    main.innerHTML =`<section>
    <p>
        Seafood is any form of sea life regarded as food by humans, prominently including fish and shellfish. Shellfish include various species of molluscs (e.g. bivalve molluscs such as clams, oysters, and mussels and cephalopods such as octopus and squid), crustaceans (e.g. shrimp, crabs, and lobster), and echinoderms (e.g. sea cucumbers and sea urchins). Historically, marine mammals such as cetaceans (whales and dolphins) as well as seals have been eaten as food, though that happens to a lesser extent in modern times. Edible sea plants such as some seaweeds and microalgae are widely eaten as sea vegetables around the world, especially in Asia. In the United States, although not generally in the United Kingdom, the term "seafood" is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as "seafood".[citation needed]
        The harvesting of wild seafood is usually known as fishing or hunting, while the cultivation and farming of seafood is known as aquaculture or fish farming (in the case of fish). Seafood is often colloquially distinguished from meat; vegetarians who consume seafood as the only source of meat are said to adhere to pescetarianism. Seafood is an important source of (animal) protein in many diets around the world, especially in coastal areas.
        Most of the seafood harvest is consumed by humans, but a significant proportion is used as fish food to farm other fish or rear farm animals. Some seafoods (i.e. kelp) are used as food for other plants (a fertilizer). In these ways, seafoods are used to produce further food for human consumption. Also, products such as fish oil and spirulina tablets are extracted from seafoods. Some seafood is fed to aquarium fish, or used to feed domestic pets such as cats. A small proportion is used in medicine, or is used industrially for nonfood purposes (e.g. leather).     
    </p>
    </section>`
    
}

export default addAboutUs;
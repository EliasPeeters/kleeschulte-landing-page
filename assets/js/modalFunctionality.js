function toggleModal(recipe) {
    let modal = document.getElementById("recipeModalWrapper");
    if (recipe) {
        document.getElementById('recipe_heading').innerHTML = recipe.heading;
        document.getElementById('recipe_image').src = recipe.image;
        document.getElementById('recipe_ingredients_ul').innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
    }
    modal.classList.toggle("visible");
}

document.getElementById("blackBox").onclick = (() => {
    toggleModal();
})

document.getElementById("recipe_close").onclick = (() => {
    toggleModal();
})

document.getElementById("recipe_spagehetti").onclick = (() => {
    toggleModal({
        heading: "Gemüsespaghetti mit Petersilien-Pesto 2",
        ingredients: [
            "125g glatte Petersilie",
            "1 Knoblauchzehe",
            "60g geriebener Parmesan"
        ],
        image: "assets/img/Gemüsespaghetti.png"
    });
})

document.getElementById("recipe_rucola").onclick = (() => {
    toggleModal({
        heading: "Kartoffelsalat mit Tomaten und Rucola",
        ingredients: [
            "1kg festkochende Kartoffeln",
            "1/4 l Gemüsebrühe",
            "8 EL Weißweinessig",
            "1 Knoblauchzehe",
            "Salz, Pfeffer",
            "400g Kirschtomaten",
            "50g Rucola",
            "9 EL kaltgepresstes Rapsöl",
            "30g Pinienkerne",
            "1 Bund Basilikum"
        ],
        image: "assets/img/Gemüsespaghetti.png"
    });
})
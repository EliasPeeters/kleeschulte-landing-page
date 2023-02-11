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
        heading: "Vegetable spaghetti with parsley pesto",
        ingredients: [
            "125g flat leaf parsley",
            "1 clove of garlic",
            "60g grated parmesan",
            "1/8 l of extra virgin canola oil",
            "salt, pepper",
            "200g carrots",
            "1 zucchini",
            "300g spaghetti"
        ],
        image: "assets/img/Gemüsespaghetti.png"
    });
})

document.getElementById("recipe_rucola").onclick = (() => {
    toggleModal({
        heading: "Potato salad with tomatoes and arugula",
        ingredients: [
            "1kg waxy potatoes",
            "1/4 l vegetable broth",
            "8 tablespoons white wine vinegar",
            "1 clove of garlic",
            "salt, pepper",
            "400g cherry tomatoes",
            "50g arugula",
            "9 tbsp extra virgin canola oil",
            "30g pine nuts",
            "1 bunch basil"
        ],
        image: "assets/img/Gemüsespaghetti.png"
    });
})

document.getElementById("recipe_lachs").onclick = (() => {
    toggleModal({
        heading: "Marinated potatoes with smoked salmon trout",
        ingredients: [
            "10 very small potatoes",
            "1/2 bunch flat leaf parsley",
            "juice of 1/2 lime",
            "Tabasco",
            "salt",
            "4 tablespoons cold-pressed canola oil",
            "1 smoked salmon trout",
            "100ml whipping cream",
            "2-3 tsp grated horseradish"
        ],
        image: "assets/img/lachs.png"
    });
})

document.getElementById("recipe_toertchen").onclick = (() => {
    toggleModal({
        heading: "Apple tartlet with vanilla cream",
        ingredients: [
            "150g flour",
            "1/2 packet baking powder",
            "75g low-fat curd",
            "3-4 tbsp milk",
            "3 tbsp. fine canola oil",
            "1 pinch of salt",
            "30g sugar",
            "1 packet vanilla sugar",
            "50g marzipan paste",
            "2 tablespoons brandy",
            "2 small apples",
            "40g butter",
            "1/4 tsp cinnamon",
            "1 packet vanilla sugar",
            "2 tbsp sugar",
            "250g whipped cream",
            "1 tbsp sugar"
        ],
        image: "assets/img/toertchen.png"
    });
})
let searchInput = document.querySelector(".searchInput");
let selectInput = document.querySelector(".selectInput");
let row = document.querySelector(".row");


(function() {
      const recipesList = ["carrot", "broccoli", "asparagus",
            "cauliflower", "corn", "cucumber",
            "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin",
            "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini",
            "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili",
            "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano",
            "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple",
            "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry",
            "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit",
            "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange",
            "papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate",
            "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta",
            "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake",
            "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala",
            "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup",
            "hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna",
            "poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts",
            "rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb",
            "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"]
      
      let selectOptions = "";
      for (let option of recipesList) {
            selectOptions += `
            <option value="${option}"> ${option} </option>
            `
      }
      selectInput.innerHTML = selectOptions;
})()

function displayRecipes(arrayOfRecipes) {
      let contentContainer = "";
      for (let recipe of arrayOfRecipes) {
            contentContainer += `
            <div class="inner col-md-3 col-sm-6">
            <div class="card">
            <div class="card-body">
            <img  src="${recipe.image_url}"  alt="">
            <h5 class="card-title">${recipe.title}</h5>
            <p class="publisher">${recipe.publisher}</p>
      </div>
      </div>
      </div>`
            row.innerHTML = contentContainer;
      }
}
async function getRecipes(searchTerm = "Pizza") {
try {
      let result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchTerm}`);
      result = await result.json();
      displayRecipes(result.recipes);
} catch {
      console.log("There's an error");
}
}
getRecipes();



searchInput.addEventListener("input", function (e) {
      getRecipes(e.target.value.toLowerCase());
})

selectInput.addEventListener("change", function (e) {
      getRecipes(e.target.value.toLowerCase())
})
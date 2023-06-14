const foodCategoryContainer = document.querySelector('.food-container.container')

function makeFoodCategoryCard(obj) {
    return document.createRange().createContextualFragment(`<div class="food-type fruite">
    <div class="img-container">
      <img src="${obj.strCategoryThumb}" alt="error" />
      <div class="img-content">
        <h3>${obj.strCategory}</h3>
        <a
          class="btn btn-primary"
          data-bs-toggle="modal"
          href="#exampleModal"
          category-id="${obj.strCategory}"
          role="button"
          >get menu</a
        >
      </div>
    </div>
  </div>`)
}

function makeMenuItem(obj){
    return document.createRange().createContextualFragment(`<div class="food-menu-item">
    <div class="food-img">
        <a href="${obj.youtube_video}" target="_blank"><img src="${obj.strMealThumb}" alt="" /></a>
    </div>
    <div class="food-description">
        <p>
            ${obj.strMeal}
        </p>
        <p class="food-price">Price: &#8377; 250</p>
    </div>
</div>`)
}

async function getVideoOfMealById(id){
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let data = await res.json()
    return data.meals[0].strYoutube
}

async function getFoodByCategory(category){
    // https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    let data = await res.json();
    return data.meals
}

async function getFoodCategories() {
    let res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let data = await res.json();
    return data.categories
}

document.addEventListener('DOMContentLoaded', () => {
    getFoodCategories()
        .then(categories => {
            console.log(categories)
           // console.log(makeFoodCategoryCard({a:1}))
           categories.forEach(category=>{
         //   console.log(makeFoodCategoryCard(category))
            foodCategoryContainer.append(makeFoodCategoryCard(category))
           })
        })
})

// modal elements
const modalTitle = document.querySelector('.modal-title')
const FoodMenuContainer = document.querySelector('.food-menu-container');
foodCategoryContainer.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.classList.contains('btn-primary')){
      //  console.log(e.target.getAttribute('category-id'))
        modalTitle.innerText=`${e.target.getAttribute('category-id')} Menu`
        getFoodByCategory(e.target.getAttribute('category-id'))
        .then(meals=>{
            console.log(meals)
            FoodMenuContainer.innerHTML=""
            meals.forEach(meal=>{
                getVideoOfMealById(meal.idMeal)
                .then(video=>{
                  //  console.log(video)
                    meal.youtube_video = video // created youtube_video property in meal object
                    FoodMenuContainer.append(makeMenuItem(meal))
                    console.log(meal)
                })
                
            })
        })
    }
})
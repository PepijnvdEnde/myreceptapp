package nl.pep.receptbackend.infrastructure

import java.time.LocalDate
import java.util.UUID
import nl.pep.receptbackend.domain.Ingredient
import nl.pep.receptbackend.domain.RecipeDetails
import nl.pep.receptbackend.domain.Tags
import org.springframework.stereotype.Repository

@Repository
class RecipeRepository {
    private val recipes: List<RecipeDetails> = listOf(
        RecipeDetails(
            id = UUID.randomUUID(),
            name = "Burger",
            rating = 4f,
            time = 30,
            image = "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
            tags = listOf(Tags.gluten, Tags.dairy),
            ingredients = listOf(
                Ingredient(
                    name = "Broodjes",
                    amount = 2,
                    unit = "stukken"
                ),
                Ingredient(
                    name = "steak",
                    amount = 100,
                    unit = "gram"
                ),
                Ingredient(
                    name = "kaas",
                    amount = 100,
                    unit = "gram",
                    tags = listOf(Tags.dairy)
                )
            ),
            steps = listOf(
                "Grill het stuk steak",
                "Voeg kaas toe",
                "Maak de burger"
            ),
            shortDescription = "Een heerlijke burger",
            description = "Een burger is een populair gerecht bestaande uit een gegrild of gebakken vleespatty, meestal gemaakt van rundvlees, geserveerd tussen twee helften van een zacht broodje. Het broodje wordt vaak belegd met diverse ingrediënten zoals sla, tomaat, ui, augurk, kaas en sauzen zoals ketchup, mayonaise of mosterd. Burgers kunnen ook worden aangepast aan persoonlijke voorkeuren, met opties zoals kip, vis, plantaardige of veganistische patties. Het gerecht wordt vaak geserveerd met bijgerechten zoals frietjes, salade of een drankje, en is een geliefde keuze in fastfoodrestaurants en barbecue-omgevingen.",
            author = "John Doe",
            date = LocalDate.now()
        ),
        RecipeDetails(
            id = UUID.randomUUID(),
            name = "Taco",
            rating = 4.5f,
            time = 60,
            image = "https://www.onceuponachef.com/images/2023/08/Beef-Tacos-760x570.jpg",
            tags = listOf(Tags.gluten, Tags.dairy, Tags.spicy),
            ingredients = listOf(
                Ingredient(
                    name = "Tortilla",
                    amount = 1,
                    unit = "piece"
                ),
                Ingredient(
                    name = "Beef",
                    amount = 100,
                    unit = "gram"
                )
            ),
            steps = listOf(
                "Grill the beef",
                "Add cheese",
                "Assemble the taco"
            ),
            shortDescription = "A delicious taco",
            description = "A taco is a traditional Mexican dish consisting of a folded or rolled tortilla filled with a variety of savory ingredients. The tortilla, which can be made from corn or flour, serves as a versatile base. Common fillings include seasoned meats such as beef, chicken, or pork, as well as beans, fish, or grilled vegetables for a vegetarian option.\n" +
                    "\n" +
                    "Tacos are typically garnished with fresh toppings like shredded lettuce, diced tomatoes, onions, cilantro, and cheese. They are often complemented by salsa, guacamole, sour cream, or a squeeze of lime for added flavor. The dish is highly customizable, making it a popular choice for both casual meals and festive gatherings.",
            author = "Jane Doe",
            date = LocalDate.now()
        ),
        RecipeDetails(
            id = UUID.randomUUID(),
            name = "Tomato",
            rating = 0.5f,
            time = 1,
            image = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg",
            tags = listOf(Tags.vegan, Tags.vegetarian),
            ingredients = listOf(
                Ingredient("Potato", 2, "pcs"),
                Ingredient("Carrot", 1, "pcs"),
                Ingredient("Onion", 1, "pcs"),
                Ingredient("Garlic", 2, "cloves"),
                Ingredient("Beef", 500, "g"),
                Ingredient("Tomato", 2, "pcs"),
                Ingredient("Paprika", 1, "pcs"),
                Ingredient("Pepper", 1, "pcs"),
                Ingredient("Salt", 1, "tsp"),
                Ingredient("Pepper", 1, "tsp"),
                Ingredient("Paprika powder", 1, "tsp"),
                Ingredient("Tomato paste", 1, "tbsp"),
                Ingredient("Beef stock", 1, "cube"),
                Ingredient("Water", 500, "ml")
            ),
            steps = listOf(
                "Peel and chop the potato, carrot, onion, and garlic.",
                "Cut the beef into cubes.",
                "Heat oil in a large pot and add the beef. Cook until browned.",
                "Add the onion and garlic and cook until softened.",
                "Add the potato, carrot, tomato, paprika, pepper, salt, pepper, and paprika powder.",
                "Add the tomato paste, beef stock, and water.",
                "Bring to a boil and simmer for 1 hour or until the beef is tender.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter.",
                "add butter."
            ),
            description = "A tomato is a round, smug little fruit that pretends to be a vegetable just to annoy you. Its skin is deceptively smooth and shiny, but as soon as you cut into it, you're greeted with an explosion of slimy, seed-filled goo that clings to everything like it’s out for revenge. The flavor? A watery, tangy mix that can’t decide if it wants to be sweet or sour—so it just ends up being gross.\n" +
                    "\n" +
                    "Whether it's ruining a sandwich with its soggy presence or sneaking into a salad where it’s absolutely not welcome, the tomato excels at being an overachieving nuisance. Even its supposed \"better forms\"—ketchup, tomato sauce—are just lies dressed up in sugar and spices. A tomato is the ultimate culinary impostor, a fruit with no redeeming qualities other than reminding you why you hate it so much.",
            shortDescription = "Een tomaat is fucking vies ik eet liever een steen.",
            author = "John Doe",
            date = LocalDate.of(2021, 10, 1)
        ),
        RecipeDetails(
            id = UUID.randomUUID(),
            name = "Stew",
            rating = 5f,
            time = 99,
            image = "https://www.allrecipes.com/thmb/XkapTqFUR4U_fMMZQwgikkuoL-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RM-281995-ClassicHeartyBeefStew-ddmfs-3x4-6957-660344f4e4c8417fa6d1cf3175e0202c.jpg",
            tags = listOf(Tags.vegetarian, Tags.spicy, Tags.vegan, Tags.fish, Tags.gluten, Tags.dairy, Tags.peanuts),
            ingredients = listOf(
                Ingredient("Pasta", 200, "g", listOf(Tags.gluten, Tags.dairy)),
                Ingredient("Tomato", 2, "pcs", listOf(Tags.spicy)),
                Ingredient("Onion", 1, "pcs", listOf(Tags.vegetarian, Tags.spicy, Tags.vegan, Tags.fish, Tags.gluten, Tags.dairy, Tags.peanuts)),
                Ingredient("Garlic", 2, "cloves"),
                Ingredient("Olive oil", 2, "tbsp"),
                Ingredient("Salt", 1, "tsp"),
                Ingredient("Pepper", 1, "tsp"),
                Ingredient("Basil", 1, "tsp")
            ),
            steps = listOf(
                "Cook the pasta according to the instructions on the package",
                "Chop the onion and garlic",
                "Heat the olive oil in a pan and fry the onion and garlic until soft",
                "Chop the tomato and add to the pan",
                "Add the salt, pepper and basil",
                "Let it simmer for 10 minutes",
                "Serve the sauce over the pasta"
            ),
            description = "A stew is a hearty and comforting dish made by simmering a combination of ingredients in a flavorful liquid over low heat. It typically includes chunks of meat, such as beef, lamb, chicken, or pork, which are often browned beforehand to enhance their flavor. Vegetables like potatoes, carrots, onions, celery, and root vegetables are commonly added to the pot, along with herbs and spices to build depth and aroma.\n" +
                    "\n" +
                    "The liquid base of a stew can vary, ranging from broth or stock to wine, beer, or tomato-based sauces, often thickened with flour, cornstarch, or mashed vegetables. The slow cooking process allows the ingredients to meld together, creating tender textures and a rich, savory taste.\n" +
                    "\n" +
                    "Stews are versatile and enjoyed in cuisines around the world, from Irish beef stew to Moroccan tagines and spicy Caribbean stews. They are typically served hot, often accompanied by crusty bread, rice, or noodles.",
            shortDescription = "A classic minecraft food.",
            author = "John Doe",
            date = LocalDate.of(2021, 5, 1)
        ))
    
    fun getRecipes(): List<RecipeDetails> {
        return recipes
    }
    
    fun getRecipe(id: UUID): RecipeDetails {
        return recipes.find { it.id == id } ?: throw IllegalArgumentException("Recipe not found")
    }
    
}
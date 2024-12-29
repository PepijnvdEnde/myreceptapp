package nl.pep.receptbackend.service

import nl.pep.receptbackend.domain.Recipe
import nl.pep.receptbackend.domain.toRecipe
import nl.pep.receptbackend.infrastructure.RecipeRepository
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/recipes")
@CrossOrigin(
    origins = ["*"],
    allowedHeaders = ["*"],
    methods = [RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS]
)
class RecipesController(
    private val recipeRepository: RecipeRepository
) {

    @GetMapping
    fun getRecipes(): List<Recipe> {
        return recipeRepository.getRecipes().map { it.toRecipe() }

    }
}
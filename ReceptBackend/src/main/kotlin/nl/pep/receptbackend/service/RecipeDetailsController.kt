package nl.pep.receptbackend.service

import java.util.UUID
import nl.pep.receptbackend.domain.RecipeDetails
import nl.pep.receptbackend.infrastructure.RecipeRepository
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/recipe")
@CrossOrigin(
    origins = ["*"],
    allowedHeaders = ["*"],
    methods = [RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS]
)
class RecipeDetailsController(
    private val recipeRepository: RecipeRepository
) {
    
    @GetMapping
    fun getRecipe(@RequestParam id: UUID): RecipeDetails {
        return recipeRepository.getRecipe(id)
    }
}
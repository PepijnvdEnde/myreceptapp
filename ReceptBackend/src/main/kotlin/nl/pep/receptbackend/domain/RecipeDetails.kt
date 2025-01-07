package nl.pep.receptbackend.domain

import java.time.LocalDate
import java.util.UUID

data class RecipeDetails(
    val id: UUID,
    val name: String,
    val rating: Float,
    val time: Int,
    val image: String,
    val tags: List<Tags>,
    val ingredients: List<Ingredient>,
    val steps: List<String>,
    val shortDescription: String,
    val description: String,
    val author: String,
    val date: LocalDate,
)

fun RecipeDetails.toRecipe(): Recipe {
    return Recipe(
        id = this.id,
        name = this.name,
        rating = this.rating,
        time = this.time,
        image = this.image,
        tags = this.tags,
        description = this.shortDescription
    )
}

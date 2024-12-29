package nl.pep.receptbackend.domain

import java.util.UUID

data class Recipe(
    val id: UUID,
    val name: String,
    val rating: Float,
    val time: Int,
    val image: String,
    val tags: List<Tags>
) 
enum class Tags{
    vegetarian,
    spicy,
    vegan,
    fish,
    gluten,
    dairy,
    peanuts
}
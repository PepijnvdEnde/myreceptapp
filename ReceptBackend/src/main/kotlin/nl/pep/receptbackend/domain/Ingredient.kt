package nl.pep.receptbackend.domain

data class Ingredient(
    val name: String,
    val amount: Int,
    val unit: String,
    val tags: List<Tags>? = listOf(),
)

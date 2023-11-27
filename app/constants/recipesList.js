const recipesList = [
	{
		name: "Scrambled Egg",
		ingredients: ["Egg", "Oil", "Salt", "Pepper"],
		cookingInstructions: [
			"1. Heat oil in a pan.",
			"2. Crack and whisk the egg in a bowl.",
			"3. Put the egg in the pan.",
			"4. Mix and sprinkle with salt and pepper.",
			"5. Serve.",
		],
		servingSize: 1,
		estimatedCost: 15,
		mealType: "Breakfast",
		imageUrl: "/scrambled-egg.jpg",
	},
	{
		name: "Fried Fish w/ spicy toyomansi sauce",
		ingredients: ["Fish", "Oil", "Salt, soy sauce, vinegar, calamansi, chili"],
		cookingInstructions: [
			"1. Rub salt to the fish",
			"2. Heat oil in a pan.",
			"3. Fry the fish in the pan around 5-10mins each side depending on fish size.",
			"4. Mix soy sauce, calamansi, vinegar, and chilis",
			"5. Serve.",
		],
		servingSize: 1 - 2,
		estimatedCost: 60,
		mealType: "Lunch",
		imageUrl: "/fried-fish-toyomansi.png",
	},
];

export default recipesList;

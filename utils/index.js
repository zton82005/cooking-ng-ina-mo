export async function fetchRecipes(recipe) {
	try {
		const url = `https://worldwide-recipes1.p.rapidapi.com/api/suggestions?q=${recipe}`;
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "adc6e7c071msh34fdd1393e39701p132d18jsnf38879881c1b",
				"X-RapidAPI-Host": "worldwide-recipes1.p.rapidapi.com",
			},
		};

		const response = await fetch(url, options);
		const result = await response.json();

		return result;
	} catch (error) {
		console.error(error);
	}
}

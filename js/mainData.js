const mainData = () => {
	fetch('https://anime-2e860-default-rtdb.firebaseio.com/anime.json')
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			console.log(data)
		})
}

mainData()
const mainData = () => {
	fetch('https://anime-2e860-default-rtdb.firebaseio.com/anime.json')
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			for (let i = 0; i < data.length; i++) {
			console.log(data[i].title) //печатает все 36 названий аниме
			}
		})
}

mainData()

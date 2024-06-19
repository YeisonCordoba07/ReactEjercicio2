const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

export default function getGifs(search = "cat") {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=25&offset=0&rating=g&lang=es&bundle=messaging_non_clips`;


    return (fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response;
            return data;
        })
    );
}
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        for (let d of data) {
            console.log(d.title)
        }
    });


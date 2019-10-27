//Console.log out elements in JSON file
var json = `{
    "video": [{
        "id": 12312412312,
        "name": "Ecuaciones Diferenciales",
        "url": "/video/math/edo/12312412312",
        "author": {
            "data": [{
                "name_author": "Alejandro Morales",
                "url": "/author/alejandro-morales",
                "type": "master"
            }]
        }
    }]
}`

console.log(JSON.parse(json));




var form = document.getElementById("github-form")

form.addEventListener('submit', function(event){
    event.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(' ').join('')

    // clear previous serach result
    document.getElementById("user-list").innerHTML = ""
    


    fetch("https://api.github.com/users/"+originalName)
    .then(response => response.json())
    .then(data => {
        console.log(data)


        document.getElementById("user-list").innerHTML =  `
        <a target="_blank" href="https://www.github.com/${originalName}"><img src="${data.avatar_url}"></a>
    `;
    
        
    })



});







var form = document.getElementById("github-form")

form.addEventListener('submit', function(event){
    event.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(' ').join('')

    alert(originalName)
    


    fetch("https://api.github.com/users/"+originalName)
    .then(response => response.json())
    .then(data => {
        console.log(data)


        
    })



});







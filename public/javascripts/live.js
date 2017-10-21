axios.get('https://api.github.com/users/nathfreder')
    .then(function(response) {
      /*
        document.getElementById('repos').innerText = "@repos " + response.data.public_repos;
        document.getElementById('followers').innerText = "@followers " + response.data.followers;
        document.getElementById('gists').innerText = "@gists " + response.data.public_gists;
        document.getElementById('website').innerHTML = "@blog " + "<a href=\"" + response.data.blog + "\">" + response.data.blog + "</a>";
      */
    })
    .catch(function(error) {
        console.log(error);
    });

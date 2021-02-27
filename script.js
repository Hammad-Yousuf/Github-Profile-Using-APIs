
// URL of GitHub's Users Data Api

var url = 'https://api.github.com/users/hammad-yousuf';

// Fetching Avatar

fetch(url).then(Response => Response.json()).then(img =>  image = document.getElementById('avatar').src = img.avatar_url);

// Fetching User's Name

fetch(url).then(Response => Response.json()).then(user => userName = document.getElementById('name').innerHTML = user.name)

// Fetching Login Name

fetch(url).then(Response => Response.json()).then(login => userLogin = document.getElementById('login').innerHTML = login.login)

// Fetching number of Followers

fetch(url).then(Response => Response.json()).then(followers => follwersNumber = document.getElementById('followers').innerHTML = followers.followers)

// Fetching number of Following

fetch(url).then(Response => Response.json()).then(following => follwingNumber = document.getElementById('following').innerHTML = following.following)

// Increasing Stars on Click
var star = 0;

    document.getElementById('staricon').addEventListener('click', ()=>{
        star++;
        document.getElementById('star').innerHTML = star;
    })

// Fetching Location

fetch(url).then(Response => Response.json()).then(location => userLocation = document.getElementById('location').innerHTML = location.location)

// Fetching WebAdress

fetch(url).then(Response => Response.json()).then(web => webaddress = document.getElementById('link').innerHTML = web.blog)
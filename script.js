
// URL of GitHub's Users Data Api

var url = fetch('https://api.github.com/users/hammad-yousuf').then(Response => Response.json())

// Fetching Avatar

url.then(img =>  image = document.getElementById('avatar').src = img.avatar_url);

// Fetching User's Name

url.then(user => userName = document.getElementById('name').innerHTML = user.name)

// Fetching Login Name

url.then(login => userLogin = document.getElementById('login').innerHTML = login.login)

// Fetching number of Followers

url.then(followers => follwersNumber = document.getElementById('followers').innerHTML = followers.followers)

// Fetching number of Following

url.then(following => follwingNumber = document.getElementById('following').innerHTML = following.following)

// Increasing Stars on Click
var star = 0;

    document.getElementById('staricon').addEventListener('click', ()=>{
        star++;
        document.getElementById('star').innerHTML = star;
    })

// Fetching Location

url.then(location => userLocation = document.getElementById('location').innerHTML = location.location)

// Fetching WebAdress

url.then(linkAddress => document.getElementById('link-address').href = linkAddress.blog)

url.then(web => webaddress = document.getElementById('link').innerHTML = web.blog)
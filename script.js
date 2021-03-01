
// Getting User Profile

function getUserProfile() {
    // Disable visibility of button
    document.getElementById('inputContainer').style.visibility = 'hidden';
    
    // Enable Visibility of Reset Button
    document.getElementById('reset').style.display = 'block'

    // Enable visibility of Main Container
    document.getElementById('container').style.display = 'block';
    // Getting Input
    var userInput = document.getElementById('user').value;

    // URL of GitHub's Users Data Api

    var getUrl = 'https://api.github.com/users/' + userInput;
    var url = fetch(getUrl).then(Response => Response.json())

    // Fetching Avatar

    url.then(img => image = document.getElementById('avatar').src = img.avatar_url);

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

    document.getElementById('staricon').addEventListener('click', () => {
        star++;
        document.getElementById('star').innerHTML = star;
    })

    // Fetching Location

    url.then(location => userLocation = document.getElementById('location').innerHTML = location.location)

    // Fetching WebAdress

    url.then(linkAddress => document.getElementById('link-address').href = linkAddress.blog)

    url.then(web => webaddress = document.getElementById('link').innerHTML = web.blog)
}

// Reset Function

function reset(){
     // Enable visibility of button
     document.getElementById('inputContainer').style.visibility = 'visible';
    
     // Disable Visibility of Reset Button
     document.getElementById('reset').style.display = 'none'
 
     // Disable visibility of Main Container
     document.getElementById('container').style.display = 'none';
}
fetch('https://rest.bandsintown.com/artists/sting/?app_id=jshp').then(function (res) {
        res.json().then(function (data) {
            console.log(data);
            const div = document.getElementById('exercise1');
            div.innerHTML = data.image_url;
            var myImage = new Image(720, 720);
            myImage.src = data.image_url;
            document.body.appendChild(myImage);

        });
    })
    .catch(function (err) {
        console.log('Error: ', err)
    });


//exercise 2

fetch('https://rest.bandsintown.com/artists/sting/events?app_id=jshp').then(
        res => {
            res.json().then(data => {
                const rootElem = document.getElementById('exercise2');
                if (rootElem.childNodes.length) {
                    const elem = document.getElementById('events');
                    elem.parentNode.removeChild(elem);
                }
                const ul = document.createElement('ul');
                ul.setAttribute('id', 'events');
                data.map(elem => {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(elem.venue.name));
                    ul.appendChild(li);

                });
                rootElem.appendChild(ul);

            });
        })
    .catch(err => {
        console.log('Error: ', err);
    });

//exercise3
// Make a list where country === Germany




fetch('https://rest.bandsintown.com/artists/ed sheeran/events?app_id=jshp')
    .then(res => {
        res.json().then(data => {
            console.log(data);
            const rootElem = document.getElementById('exercise3');
            const ul = document.createElement('ul');
            data.map(elem => {
                if (elem.venue.country === 'Germany') {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(elem.venue.name));
                    ul.appendChild(li);
                }
            });
            rootElem.appendChild(ul);
        });
    })
    .catch(err => {
        console.log('Error: ', err);
    });


function changeColor(color) {
    console.log('clicked button 2')
}

function logOut() {
    console.log('clicked button 1')

}

var btn2 = document.getElementById('color');
btn2.addEventListener('click', changeColor, false);

var btn1 = document.getElementById('activate');
btn1.addEventListener('click', logOut, false);




//do something here so it all works


// In the part1.js file, write a function changeColor that when invoked will first check if the body background color is rgb(221, 238, 255).You can refer to the index.css file to inspect the css, but do not edit the file.

// If the body background color is rgb(221, 238, 255) changeColor should change it to rgb(255, 238, 221).Ifit isn't, changeColor should change the color back to rgb(221,238,255).

// Add an event listener to button #1. IT has an ID of "activate".On click, the button should log to the console 'clicked #1'.It should also set- up a click event listener on button #2 with ID of color.The listener should log to console 'clicked #2' and then call the changeColor function you just created.
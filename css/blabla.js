// @Good Luck!

// @TODO
// 1) Choose the elemets of the row by click
// 2) Selected Row From Css onClick

// ALL DATA FROM EVENT
// SASHA PUSH THIS CODE THE GIT REPO

// table constructor


// update loaders
document.getElementById('loader').style.display = "block";

  class ListManager {
    constructor(name, theList, propertyCounter) {
        // List Of Table
        this.name = name;
        // Array of objects
        this.theList = theList;
        // Amount of object key names
        this.propertyCounter = propertyCounter;
    }

    // check if our list is array
    isArray() {
        if (!Array.isArray(this.theList)) 
            return;
    }

    // Show the list of properties by object key
    showListByProperty(property) {
        // check if our list is array
        // this === ListManager
        this.isArray();

            for (var i = 0; i < this.theList.length;i++) {
                // check if property exist
               if (this.theList[i].hasOwnProperty(property)) {
                    console.log(this.theList[i][property]);
               } else {
                   // if current object has no property
                   console.log(`${this.theList[i].name} hasNoProperty ${property}`)
               }
            }
    }

    // get value of clicked elelemt
    clickItem(item) {
        console.log(item)

        var itemInfo = document.getElementById('itemInfo');
        itemInfo.innerHTML = item.title;
    }

    // Render the the list of items to the HTML Table
    displayItems() {
        var table = document.getElementById('table');
        var trHEAD = document.createElement('tr');

        table.appendChild(trHEAD);
        // array of object keys names
        let arrayOfKeys = [];
        // property Counter of list object
        let propertyCounter = 0;

        // check object length by property 
        Object.size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    size++;
                    arrayOfKeys.push(key);

                    // create category by property name
                    var th = document.createElement('th');
                    th.id = key;
                    th.innerHTML = key.toUpperCase();
                    trHEAD.appendChild(th);

                } 
            }
          
            propertyCounter = size;
            return size;
        };
        
        var size = Object.size(this.theList[0]);

        // build rows of our table
        for (var i = 0; i < this.theList.length; i++) {
            var trBODY = document.createElement('tr');
            trBODY.onclick = this.clickItem.bind(this, this.theList[i]);
            table.appendChild(trBODY);
            // build columns of our table
            for (var j = 0; j < propertyCounter; j++) {
                var td = document.createElement('td');

                td.innerHTML = this.theList[i][arrayOfKeys[j]];
                trBODY.appendChild(td);
            }
        }
    }
}


var httpRequest;
// AJAX call by method and url
// MDN LINK: https://developer.mozilla.org/ru/docs/Web/Guide/AJAX

  function makeRequest(method, url) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open(method, url);
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        // check status of our request
      if (httpRequest.status === 200) {
        
        // parse string to javascript plain object
        var RESPONSE = JSON.parse(httpRequest.responseText);

        // remove loader if data recieved 
        document.getElementById('loader').style.display = "none";

        // update our list manager with the new value
        var userTable = new ListManager('Table', RESPONSE);

        // render items to the table
        userTable.displayItems();
  
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

  // Run our query to the server
   setTimeout(
    () => makeRequest('GET', "https://jsonplaceholder.typicode.com/todos"),
    1000
  );


 // Simple Promise Example
 // check this link: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
  var myPromise = new Promise(function(resolve, reject) {
     setTimeout(function() {
         reject("error")
     }, 1000);

    setTimeout(function(){
        resolve("Success!"); // Ура! Всё прошло хорошо!

      }, 2500);
  });

  var result = myPromise.then(function(data) {
      console.log(data);
  }).catch(function(error) {
        console.log(error);
  });



// interview example with setTimeout
var i = 0;

function test() {
    i++;
    console.log(i)
}

test();
setTimeout(test, 0); 
test();
setTimeout(test, 0); 
test();

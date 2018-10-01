const users = [
    {
        name: "Michael",
        age: 27
    },
    {
        name: "Vasya",
        age: 20,
        date: new Date()
    },
    {
        name: "Kolya",
        age: null
    },

];

const OVOCHI = [
    {
        name: "ogurec",
        price: 27
    },
    {
        name: "pomidor",
        price: 20
    },
    {
        name: "arbuz",
        price: 10
    },

];

const provodov = [
    {
        name: "kabel",
        price: 27
    },
    {
        name: "usb",
        price: 20
    },
    {
        name: "jack-33x",
        price: 10
    },

];

const error = {
    type: 0
}

class ListManager {
    constructor(name, theList = []) {
        this.name = name;
        this.theList = theList;
    }

    isArray() {
        if (!Array.isArray(this.theList)) 
            return;
    }

    showList() {
        this.isArray();

            for(var i = 0; i < this.theList.length;i++) {
                console.log(this.theList[i].name);
            }
    }


    showListByProperty(property) {
        this.isArray();

            for (var i = 0; i < this.theList.length;i++) {
               if (this.theList[i].hasOwnProperty(property)) {
                    console.log(this.theList[i][property]);
               } else {
                   console.log(`${this.theList[i].name} hasNoProperty ${property}`)
               }
            }
    }

    clickItem(item) {
        // console.log(arguments);
        // console.log(event.srcElement.innerHTML);
        console.log(item)

        var itemInfo = document.getElementById('itemInfo');
        itemInfo.innerHTML = item.name;
    }

    displayItems() {
        var globalList = document.getElementById('theList');
        var ul = document.createElement('ul');
        ul.id = this.name;
        globalList.appendChild(ul);

        for (var i = 0; i < this.theList.length; i++) {

            var li = document.createElement('li');

            li.id = `${this.theList[i].name}`;

            li.onclick = this.clickItem.bind(this, this.theList[i]);

            li.innerHTML = this.theList[i].name;

            ul.appendChild(li);
        }
    }
}

const usersList = new ListManager("Users", users);
const LISTOVOCHEI = new ListManager("Ovochi",OVOCHI);
const provoda = new ListManager('Provoda', provodov);

usersList.displayItems();
LISTOVOCHEI.displayItems();
provoda.displayItems();

 










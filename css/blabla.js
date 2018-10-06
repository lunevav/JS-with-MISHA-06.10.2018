document.getElementById('cup').style.display = 'none';


class DrinkTypes {
    constructor(types = []) {
        this.types = types;
    }
}
class Drink {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }
    
}

class Cup {
    constructor(drinkType = "", isEmpty = true) {
        this.drinkType = drinkType;
        this.isEmpty = isEmpty;
    }

    toFillCup(type) {
        this.isEmpty = false; 
        this.drinkType = type;
    }

    toEmpty() {
        this.drinkType = "";
        this.isEmpty = true;
    }
    dooEmpty(){
        return this.isEmpty;
    }
    
}

class CoffeMachine {
    constructor(amountOfCups = 0, drinks = [], cupExist = false, inMakeingProcess = false, activeDrink = null, cup = null, animation = null, height=0) {
        this.amountOfCups = amountOfCups;
        this.drinks = drinks;
        this.cupExist = cupExist;
        this.inMakeingProcess = inMakeingProcess;
        this.activeDrink = activeDrink;
        this.cup = cup;
        this.animation = animation;
        this.height = height;
    }

    addCup() { 
        this.cupExist = true; 
        this.cup = new Cup();
        this.height = 0;
        document.getElementById('cup').style.height = 0;
        if (this.cup.dooEmpty()) {
            document.getElementById('cup').style.display = 'block';
            document.getElementById('cup').style.background = 'blue';
        }
    }
    removeCup() { 
        this.cupExist = false;
        this.cup = null;
        document.getElementById('cup').style.display = 'none';
    }

    setTypeOfDrink(button) {
        for (var i=0; i<this.drinks.length; i++){
            if (this.drinks[i].name === button.innerHTML) {
                this.activeDrink=this.drinks[i];
                document.getElementById('drinkType').innerHTML = this.drinks[i].name;
            }
        }
    }

    updateCupHeight() {
        this.height += 1;
        console.log(this.height);
        document.getElementById('cup').style.height = this.height + "px";
        console.log(document.getElementById('cup').style.height);
    }

    makeDrinkByType() {
        if (this.cupExist && this.cup.dooEmpty()) {
           this.inMakeingProcess = true;
           
           for (var i = 0; i < document.getElementsByTagName('button').length; i++) {
            document.getElementsByTagName('button')[i].disabled = true;
           }
           this.animation = window.setInterval(this.updateCupHeight.bind(this), 100);
           window.setTimeout(this.startMakingCoffe.bind(this), 5000);
        } 
    }

    startMakingCoffe() {
        clearInterval(this.animation);
        this.amountOfCups = this.amountOfCups - 1;
        this.inMakeingProcess = false;
        this.cup.toFillCup(this.activeType);
        document.getElementById('cup').style.background=this.activeDrink.color;
        for (var i = 0; i < document.getElementsByTagName('button').length; i++) {
            document.getElementsByTagName('button')[i].disabled = false;
           }
        
        // cup.toFillCup(this.activeType)
    }
}





var drinkTypesForMonday = new DrinkTypes(
    [
        new Drink("Tea", "red", "6"),
        new Drink("Coffe", "brown", "8"),
        new Drink("Green Tea", "green", "7"),
        new Drink("Milk","white", "11")
    ]
);



var machine1 = new CoffeMachine(
    10,
    drinkTypesForMonday.types
);



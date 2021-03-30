const colors = ["yellow", "blue", "red", "orange"];

// while loop

let i = 0;
while(i < colors.length) {
    console.log(colors[i]);
    i++;
};

// for loop

for (var n = 0; n < colors.length; n++) {
    console.log(colors[n]);
};

// forEach

colors.forEach(color => console.log(color));

// for loop: 3 regels
// while loop: 4 of 5 regels, afhankelijk van of je die let-regel wel of niet meetelt

// forEach: 1 regel

// mijn mening is niet zo relevant. jullie willen horen dat de forEach beter is. 

var woman = {hair: "yellow", eyes: "blue", dress: "red", favoriteFood: "orange", cup: "DD"};

for (preference in woman) {
    console.log(woman[preference]);
};

// ik ben systematisch langs vanalles in het objec woman gegaan. geen idee of dat onder de definitie valt. 

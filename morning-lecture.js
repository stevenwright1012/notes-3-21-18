//[1,2,3] === [1,2,3] evaluates to false, you cant compare string literals

// .unshift() return the length of the new array.



//Which of the following uses a return statement and a for loop correctly?
function genericFunk1(array){
    let nuArray = [];
    
    // for (let i = 0; i<array.length; i++){
    //   nuArray.push(array[i]);
    //   return nuArray;
    // }
        
  }
  
  function genericFunk2(){
    let nuArray = [];
    
    for (let i = 0; i<array.length; i++){
      nuArray.push(array[i]);
    }
    
    return nuArray;
  }
  
  //Will the following return true or false:
  (7=="7"); //true
  (7==="7"); //false, this evaluates valur and type;
  //Why?
  
  var a = [1,2,3];
  var b = a;
   
  b === a; //true
  [1,2,3]===[1,2,3]; //false
  
  //What does this return:
//   8 + "6"
//   =>"86"
  
  //Why?   all numbers can be turned to strings, but not all numbers can be turned to numbers
  
  //What is the difference between a method and a function?
  //methods are functions inside an object
  
  //How do I create an object called character that has properties "name", "intelligence", "gold", and "fortitude"?
  
  var character = {
    name: "name",
    intelligence: 12,
    gold: 34,
    fortitude: 15
  };
  
  //How can I access my character's gold?
  character.gold
  character["gold"];
  
  //How can I now add the property "dexterity"? (use either dot or bracket notation)
  character.dexterity = 9;
  var boring = "dexterity";
  
  character[boring] = 9;
  
  character[2]
  
  
  //There's an array called "loot". How can I take something off of the array loot? There are several methods I can use (I want the methods that alter the original array.)
  
  var loot = ['25 gold', 'comb', 'the one ring' ,'lint'];
  
  loot.pop();
  loot.shift();
  loot.splice(0, 4);
  
  //How can I add an item to loot? There are severals ways to do this.
  
  loot.push(item);
  loot.unshift();
  loot.splice(index, 0, item);
  
  // Bonus: What does .unshift return?  returns the length of the new array.
  
  //What if I just want a copy of loot?
  loot.slice()
  
  //How can I pull the gold from loot?
  loot[0];
  
  //Now I want to go through loot and push the items onto a new array called mine. How do I do this?
   var mine = [];
   function ( array){
   for(i = 0; i < array.length; i++){
     mine.push(array[i])
   }
}
  
  //Now I'm going to combine two concepts into one - using a ternary and a callback. I have the following function pickPocket. I want to write another function that checks to see if a person's loot array has something in it, and if so, run the callback function pickPocket. 
  
  function pickPocket(array){
    array.splice();
  }
  
  function victim(arr){
    (arr.length > 0) ? pickPocket(arr): null;
  }
  
  //if time: what is the difference between a for loop and the .forEach method?
  
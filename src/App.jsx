import { useState } from 'react'
import './App.css'

function App() {

  // What i want ?

  

  const itemGame = [

    {
      item: {
        name: "Moteur",
        quantity: 5
      },
      craft: [
        {
          name: "Rotor",
          quantity: 10
        },
        {
          name: "Stator",
          quantity: 10
        }
      ],
      machine: {
        name: "Assembleur"
      }
    },

    {
      item: {
        name: "Stator",
        quantity: 5,
      },
      craft: [
        {
          name: "Tuyau en acier",
          quantity: 15
        },
        {
          name: "Fil électrique",
          quantity: 40
        }
      ],
      machine: {
        name: "Assembleur"
      }
    },

    {
      item: {
        name: "Tuyau en acier",
        quantity: 20
      },
      craft: [
        {
          name: "Lingot d'acier",
          quantity: 30
        }
      ],
      machine: {
        name: "Constructeur"
      }
    },

    {
      item: {
        name: "Fil électrique",
        quantity: 30
      },
      craft: [
        {
          name: "Lingot de cuivre",
          quantity: 15
        }
      ],
      machine: {
        name: "Constructeur"
      }
    },

    {
      item: {
        name: "Lingot d'acier",
        quantity: 45,
      },
      craft: [
        {
          name: "Minerai de fer",
          quantity: 45
        },
        {
          name: "Minerai de charbon",
          quantity: 45
        }
      ],
      machine: {
        name: "Fonderie avancée"
      }
    },

    {
      item: {
        name: "Lingot de cuivre",
        quantity: 30
      },
      craft: [
        {
          name: "Minerai de cuivre",
          quantity: 30
        }
      ],
      machine: {
        name: "Fonderie"
      }
    },



    {
      item: {
        name: "Placage intelligent",
        quantity: 2
      },
      craft: [
        {
          name: "Plaque de fer renforcée",
          quantity: 2
        },
        {
          name: "Rotor",
          quantity: 2
        }
      ],
      machine: {
        name: "Assembleur"
      }

    },
    {
      item: {
        name: "Plaque de fer renforcée",
        quantity: 5
      },
      craft: [
        {
          name: "Plaque de fer",
          quantity: 30
        },
        {
          name: "Vis",
          quantity: 60
        }
      ],
      machine: {
        name: "Assembleur"
      }
    },
    {
      item: {
        name: "Rotor",
        quantity: 4
      },
      craft: [
        {
          name: "Barre de fer",
          quantity: 20
        },
        {
          name: "Vis",
          quantity: 100
        }
      ],
      machine: {
        name: "Assembleur"
      }
    },


    {
      item: {
        name: "Vis",
        quantity: 40
      },
      craft: [
        {
          name: "Barre de fer",
          quantity: 10
        }
      ],
      machine: {
        name: "Constructeur"
      }
    },

    {
      item: {
        name: "Barre de fer",
        quantity: 15
      },
      craft: [
        {
          name: "Lingot de fer",
          quantity: 15
        }
      ],
      machine: {
        name: "Constructeur"
      }
    },

    {
      item: {
        name: "Plaque de fer",
        quantity: 20
      },
      craft: [
        {
          name: "Lingot de fer",
          quantity: 30
        }
      ],
      machine: {
        name: "Constructeur"
      }
    },


    {
      item: {
        name: "Lingot de fer",
        quantity: 30
      },
      craft: [
        {
          name: "Minerai de fer",
          quantity: 30
        }
      ],
      machine: {
        name: "Fonderie"
      }
    }


  ]

  // const listMinerai = [
  //   {
  //     name: "Minerai de fer",
  //     quantity: 30
  //   }
  // ]
  let findMachine = false;

  function getCraft(itemForCraft) {

    let temp = [];
    let addMachine = false;
    itemGame.filter((item) => {
      if (item.item.name === itemForCraft.name) {

        for (let i = 0; i < item.craft.length; i++) {

          temp.push({ name: item.craft[i].name, quantity: ( itemForCraft.quantity * item.craft[i].quantity ) / item.item.quantity});


          //listeMachine.push({name: item.machine.name, craft: item.item.name, quantity: Math.ceil(itemForCraft.quantity / item.item.quantity)});

          if (i == 0) { // cela signifie que il y a plusieur item pour craft l'object et donc je ne compte pas plusieur fois la meme machine

            for (let j = 0; j < Math.ceil(itemForCraft.quantity / item.item.quantity); j++) {

              if (j != Math.ceil(itemForCraft.quantity / item.item.quantity) - 1) {
                listeMachine.push({name: item.machine.name, itemCraft: item.item.name, quantity: item.item.quantity, test: "a"});

              } else {
                listeMachine.push({name: item.machine.name, itemCraft: item.item.name, quantity: item.item.quantity * ((itemForCraft.quantity / item.item.quantity)-j), test: "b"});
              }

              
            }

          }


        }
      }
    });

    if (temp.length === 0) {

      findMachine = false;

      for (let i = 0; i < listeMinerai.length; i++) {
        if (listeMinerai[i].name == itemForCraft.name) {
          listeMinerai[i].quantity += itemForCraft.quantity;
          findMachine = true;
        }
        
      }

      if (!findMachine) {
        listeMinerai.push({name: itemForCraft.name, quantity: itemForCraft.quantity});
      }

      return [];

      
    }

    return temp;
  }

  
  let listeMinerai = [];
  let listeMachine = [];
  function findItem(listItemWant) { // listItemWant = "string" !

   
    let findCraft = true;
    let tempGetCraft = [];
    while (findCraft) {

      tempGetCraft = getCraft(listItemWant[0]);
      listItemWant.push(...tempGetCraft);

      listItemWant.shift();

      if (listItemWant.length === 0) {
        findCraft = false;
      }

    }
    
    console.log("VOICI LES MINERAIS: ");
    console.log(listeMinerai);
    console.log("VOICI LES MACHINES: ");
    console.log(listeMachine);
    //return listeMinerai, listeMachine;

  }

  /*
  Plaque de fer renforcée
  Rotor
  Stator
  Placage intelligent
  */

  return (
    <>
      <h1>{"regarde dans la console ;)"}</h1>

      {
        findItem([{name: "Moteur", quantity: 15}])
      }

    </>
  )
}

export default App

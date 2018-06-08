var recip = function(state, active){
  if( active.type === "addState") {
    var newState = [...state, {
      'veg': active.veg,
      'fruit': active.fruit
      }
    ]

    return newState
  } else if ( active.type == "removeState" ){
  
  } else {
    return state
  }
}

var state = [{
	'veg': 'haha',
	'fruit': 'lala'
	}]

console.log(recip(state, {'type': 'addState', 'veg': 'wow', 'fruit': 'awsome'} ))


//[ { veg: 'haha', fruit: 'lala' },
//{ veg: 'wow', fruit: 'awsome' } ]

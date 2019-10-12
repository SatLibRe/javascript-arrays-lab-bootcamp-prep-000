var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  const newKittens = [];
  newKittens.push()
  return newKittens
}

function destructivelyPrependKitten(name){
  kittens.shift()
  return kittens
}

console.log(destructivelyPrependKitten("miles"))
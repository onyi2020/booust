var name = ["Crocodile", "Brown Bear","Koala","Tiger","Chipmunks","Bear","Swan","rabbit","Whale","Platypus","Goat","Duck",
"Octopus","Sheep","Zebra","Anaconda","Cow", "Goose", "Eagle","Pig","Donkey" ,"Osprey","Parrot","Panda" ,"Poodle","Bear" ,"Elephant",
"kunk","Bull","Dolphin","Jaguar","Salamander","Tortoise","Chicken" ,"Raccoon" ,"Hedgehog","Piranha" ,"Penguin" ,"Iguana",
"Turkey" ,"Polar Bear","Flamingo","Crow","Walrus","Worms","Ape","Jellyﬁsh","Frog", "Monkey" ,"Giraffe" ,"Sloth","Pigeon","Ostrich",
"Lobster","Wolf","Swordﬁsh","Cod","Deer","Gecko","Antelope","Spider","Catﬁsh","Trout","Cobra","Whale","Falcon","Hamster","Fox","Chimpanzee","Seal","Lama","Kangaroo","Leopard","Camel","Porcupine",
"Cheetah","Gorilla","Hyena","Toad","Hippopotamus","Quail","Rhino","Rat","Mouse","Crab"]

var x = name.length
document.getElementsByTagName('button').innerHTML = myAnimal


function myAnimal() {
	 prompt("Insert your animal name")
if (prompt==name) alert('you picked' + name + 'as your animal') else {
	'you have not chosen a name on my list'
}
}



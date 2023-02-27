// No 1
function InstagramPost(handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes){
 this.handleOfAuthor = handleOfAuthor;
 this.content = content;
 this.imageLink = imageLink;
 this.numberOfViews = numberOfViews;
 this.numberOfLikes = numberOfLikes;
}
// No 2
// 2a
var post1 = new InstagramPost("Wizkid", "Music is life", "www.google.com", 200, 100)
// 2b
var post2 = new InstagramPost("Burnaboy", "Come to my show", "www.facebook.com", 2000, 1000)

// No 3a
function CreatePerson(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location; 
}
var musa = new CreatePerson( "Musa", 19, "Lagos")
 
// 3b
function CreateJambScore(eng, govt, lit, crk) {
    this.eng = eng;
    this.govt = govt;
    this.lit = lit;
    this.crk = crk;
}
var musaScore = new CreateJambScore(70, 85, 82, 94)

// 4
const data = { name: "Alice", age: 2}
// The spread operator method
const copy1 = {...data}
// Calling the Object.assign() function
const copy2 = Object.assign({}, data)
// JSON parsing
const copy3 =JSOn.parse(JSON.stringify(data))


// No 5
    const presidentialCandidates = Object.freeze({
    AAC: "Omoyele Sowore",
    ACCORD: "Christopher Imumolen",
    APC: "Bola Ahmed Tinubu",
    LP: "Peter Obi",
    NNPP: "Rabiu Kwankwaso",
    PDP: "Atiku Abubakar"
 
});
Object.keys(presidentialCandidates).forEach((candidates)=>
console.log("The presidential candidate is", candidate)
);
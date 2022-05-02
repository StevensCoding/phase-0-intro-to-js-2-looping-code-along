const array = [];

function writeCards(people, eventName){
    for(let i = 0; i < people.length; i++){
        array.push (`Thank you, ${people[i]}, for the wonderful ${eventName} gift!`)
        debugger;
    }
    return array
}
function countDown(){
    let count = 10
    while (count >= 0){
        console.log(count)
        count--
    }
}
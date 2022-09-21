export{}  

interface Person{
    firstName: string;
    lastName: string;
}
function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

fullName(p);
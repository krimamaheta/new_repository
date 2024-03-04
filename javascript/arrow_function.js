
const f = function (a, b) {
    return a + b;
}
console.log(f(1, 2));


//arroe function (remove function keyword and add =>)
const f1 = (a1, b1) => {
    return a1 + b1;
}
console.log(f1(3, 2));

const f2 = (a, b) => a + b
console.log(f2(4, 2));

//

const s = (number) => 2 * number;

console.log(s(5));

const number = [1, 2, 3];

number.map(function (n) {
    return 2 * n;
});
console.log(number);

//exp 

const team = {
    members: ['ram', 'sita'],
    teamname: 'mca squad',
    teamsummerry: function () {
        return this.members.map(function (member) {
            return `${member} is on team name ${this.teamname}`;
        }.bind(this));
    }
};
console.log(team.teamsummerry());

//object literals

function savefile(url, data) {
    const a = ({ url, data, method: 'post' });
    return a;
}
const url = "http://learn.com";
const data = { color: 'red' };

console.log(savefile(url, data));

//function default arguments exp

function ajaxrequest(url, method = 'get') {
    // if(!method)
    // method='get';
    return method;
}
console.log(ajaxrequest(`www.com`));
console.log(ajaxrequest(`amazon.com`, 'post'));

//exp

function user(id) {
    this.id = id;
}

function generateid() {
    return Math.random() * 9999;
}
function createuser(user) {
    user.admin = true;
    return user;
}
const use = new user(generateid());
console.log(createuser(use));


//rest operator

function addnum(...num) {
    return num.reduce(function (sum, num) {
        return sum + num;
    }, 0);
}

console.log(addnum(1, 2, 3, 4, 5, 6, 7));

//concat  same as spread operators

const defaultc = ['red', 'pink'];
const purec = ['darkpink', 'darkviolet'];
const fallc = ['light pink', 'light yellow'];

const c = defaultc.concat(purec);
console.log(c);

console.log(['broun', 'yellow', ...defaultc, ...purec, ...fallc]);

//function 

function food(...items) {
    //milk is not in item
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }

    return items;
}
console.log(food('orange', 'bread', 'cakes'));

//destructing

var v = {
    name: 'ram',
    surname: 'raghuvanshi',
}

// var name=v.name;
// var surname=v.surname;
// console.log(name,surname);

const { name, surname } = v;
console.log(name, surname);


//classes

function car(options) {
    this.title = options.title;
}

car.prototype.drive = function () {
    return 'vroom';
}

function toyota(optiions) {
    car.call(this,optiions);
    this.color = optiions.color;
}

toyota.prototype=Object.create(car.prototype);
toyota.prototype.constructor=toyota;


toyota.prototype.honk=function()
{
    return "jay siyaram";
}

const t = new toyota({ color: 'red', title: 'drive well' })
console.log(t);


//this 2 line unfdefined
console.log(toyota.drive());
console.log(toyota.honk());

// const car1=new car({title:'focus'});
// console.log(car1.drive());
// console.log(car1);
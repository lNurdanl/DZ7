class worker {
    constructor (name,surname,rate,days) {
        this.name= name;
        this.surname= surname;
        this.rate=rate;
        this.days=days;
    }
    getSalary ()  {return  this.rate * this.days;}
}
Nurdan = new worker ("Nurdan","Manapbaev",1,2);
alert (Nurdan.name);
alert (Nurdan.surname);
alert (Nurdan.rate);
alert (Nurdan.days);
alert (Nurdan.getSalary());

class Worker2{
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#surname;
    }
    getRate() {
        return this.#rate;
    }
        getDays() {
        return this.#days;
    }
    getSalary(rate, days) {
        let salary = this.#rate * this.#days;
        return salary;
    }
}
let Nurdan2 = new Worker2('Nurdan', 'Manapabev', 1, 2);
console.log(Nurdan2.getName());
console.log(Nurdan2.getSurname());
console.log(Nurdan2.getRate());
console.log(Nurdan2.getDays());
console.log(Nurdan2.getSalary());
// import decode from "jwt-decode";

class AuthFunction {
    login(idToken: string) {
        localStorage.setItem("id_token", idToken);
        window.location.assign("/dashboard");
    }
}

export default new AuthFunction();

// class Person {
//     private name: string;

//     public constructor(name: string) {
//         this.name = name;
//     }

//     public getName(): string {
//         return this.name;
//     }
// }

// const person = new Person("Jane");
// console.log(person.getName()); // person.name isn't accessible from outside the class since it's private

// _________________

// class Person {
//     // name is a private member variable
//     public constructor(private name: string) {}

//     public getName(): string {
//       return this.name;
//     }
//   }

//   const person = new Person("Jane");
//   console.log(person.getName());

// _________________

// class Person {
//     private readonly name: string;

//     public constructor(name: string) {
//         // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
//         this.name = name;
//     }

//     public getName(): string {
//         return this.name;
//     }
// }

// const person = new Person("Jane");
// console.log(person.getName());

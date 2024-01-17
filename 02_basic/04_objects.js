// singleton objects
// const tinderUser = new Object()

// normal object
const tinderUser = {}

// adding value to the object
tinderUser.id = "01"
tinderUser.name = "Kunal"
tinderUser.isLoggin = false

// console.log(tinderUser);

// object nesting

const appUser = {
    email: "aniket@gmail.com",
    fullname:{
        firstname: "Aniket",
        lastname: "Banerjee"
    }
}
// console.log(appUser.fullname.firstname);


// Merging the objects.
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// it will not merge them it will became a big object and this two object is their.
// const obj3 = {obj1 , obj2}
// o/p- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// this is the right way to merge but in this case also after merging obj1 is changing with the merge. and the value became like obj3
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj1);
// console.log(obj3);

// to tackle previous situation we do. here {}- target, rest of is source.
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj1);
// console.log(obj3);

//but for merging most of the cases we use spread oparetor
const obj3 = {...obj1 , ...obj2}
// console.log(obj3);


// extra examples

const values = [
    {
        id: "1",
        name: "a"
    },
    {
        id: "2",
        name: "b"
    }
]

// if we want to access some value we used
// console.log(values[1].id)


//different methods
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


//---------------------------------------------------------------------------------------

//Object de-structure
const course = {
    name: "Js in hindi",
    price: "Free",
    courseInstructor: "Hitesh"
}

// normally what we do if we want to extract something
// console.log(course.courseInstructor);

// for de-structure we do
// 2 ways
// const {here we put what we want to de-structure} = from where we want to de-structure/ object name
const {courseInstructor} = course
// console.log(courseInstructor); // here you can see we dont have to write course.courseInstructor 

// const {here we put what we want to de-structure: de-structure name} = from where we want to de-structure/ object name
const {courseInstructor: teacher} = course
// console.log(teacher);
// here we de-structure the name courseInstructor to teacher so we directly call the teacher.




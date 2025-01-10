class User {
    constructor({ name, age, followers }) {
      this.name = name;
      this.age = age;
      this.followers = followers;
    }
  
    getInfo() {
      console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
  }
  
  const ananas = new User({  // Я переназвав змінну щоб не було пробем в консолі тому що вже є така змінна в першому завданні
    name: 'Ananas',
    age: 2,
    followers: 20,
  });
  
  ananas.getInfo(); // User Ananas is 2 years old and has 20 followers
  
  const fakeAnanas = new User({ // Я переназвав змінну щоб не було пробем в консолі тому що вже є така змінна в першому завданні
    name: 'fakeAnanas',
    age: 3,
    followers: 17,
  });
  
  fakeAnanas.getInfo(); // User fakeAnanas is 3 years old and has 17 followers
  
  // <script type="module"></script>

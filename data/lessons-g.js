/* Lessons 18–21: Inheritance, Polymorphism, Abstraction, Interfaces */
window.JAVA_LESSONS = window.JAVA_LESSONS || [];

window.JAVA_LESSONS.push({
  id: "inheritance",
  num: 18,
  part: 12,
  partTitle: "Object-Oriented Programming",
  title: "Inheritance",
  titleKh: "Inheritance (ការទទួលមរតក)",
  time: "៨០ នាទី",
  level: 4,
  intro: "Inheritance អនុញ្ញាតឱ្យ Class ថ្មីទទួល Field និង Method ពី Class ដើមដោយប្រើ <code>extends</code>។ វាជួយកាត់បន្ថយការចម្លងកូដ និងបង្កើតទំនាក់ទំនង <strong>IS-A</strong>។ អ្នកនឹងរៀន <code>super</code>, Method Overriding, Constructor Chaining, <code>protected</code> និង <code>final</code>។",
  objectives: [
    "ប្រើ <code>extends</code> ដើម្បីបង្កើត Subclass។",
    "យល់ពី <code>super</code> និងការហៅ Constructor របស់ Superclass។",
    "Override Method ដើម្បីផ្លាស់ប្តូរអាកប្បកិរិយា។",
    "យល់ពី <code>protected</code> និង <code>final</code>។",
    "ស្គាល់ប្រភេទ Inheritance និងពេលគួរប្រើ។"
  ],
  sections: [
    {
      title: "Inheritance គឺជាអ្វី?",
      html: `<p><strong>Inheritance</strong> គឺពេល Class មួយ (Subclass ឬ Child) ទទួល Field និង Method ពី Class មួយទៀត (Superclass ឬ Parent) ដោយប្រើ <code>extends</code>។</p>
<pre><code>class Animal {
    String name;

    void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println(name + " says Woof");
    }
}</code></pre>
<pre><code>Dog d = new Dog();
d.name = "Lucky";     // inherited field
d.eat();              // inherited method
d.bark();             // own method</code></pre>
<p>Dog ទទួល <code>name</code> និង <code>eat()</code> ពី Animal ហើយបន្ថែម <code>bark()</code> ផ្ទាល់ខ្លួន។</p>
<div class="callout info"><div class="callout-title">IS-A Relationship</div><p>Dog <strong>IS-A</strong> Animal។ នេះមានន័យថា Dog អាចប្រើបានគ្រប់កន្លែងដែល Animal ត្រូវការ។ នេះជាមូលដ្ឋាននៃ Polymorphism។</p></div>`
    },
    {
      title: "super និង Constructor",
      html: `<p><strong>super</strong> យោងទៅ Superclass។ អ្នកអាចប្រើវាដើម្បីហៅ Constructor ឬ Method របស់ Superclass។</p>
<pre><code>class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {
    String breed;

    Dog(String name, String breed) {
        super(name);        // call Animal constructor
        this.breed = breed;
    }

    @Override
    void eat() {
        super.eat();        // call parent version
        System.out.println(name + " eats dog food");
    }
}</code></pre>
<div class="callout warn"><div class="callout-title">super() ត្រូវនៅដំបូង</div><p>ប្រសិនបើអ្នកហៅ <code>super(...)</code> វាត្រូវជា Statement ដំបូងក្នុង Constructor របស់ Subclass។ បើមិនហៅ Java នឹងហៅ <code>super()</code> ដោយស្វ័យប្រវត្តិ (បើ Superclass មាន Constructor គ្មាន Parameter)។</p></div>
<p>ប្រសិនបើ Superclass គ្មាន Constructor គ្មាន Parameter ហើយ Subclass មិនហៅ <code>super(...)</code> នោះ Compile Error នឹងកើតឡើង។</p>`
    },
    {
      title: "Method Overriding",
      html: `<p><strong>Overriding</strong> គឺពេល Subclass ផ្តល់ Implementation ថ្មីសម្រាប់ Method ដែលទទួលមកពី Superclass។ Signature ត្រូវដូចគ្នា។</p>
<pre><code>class Animal {
    void speak() {
        System.out.println("Some sound");
    }
}

class Cat extends Animal {
    @Override
    void speak() {
        System.out.println("Meow");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Woof");
    }
}</code></pre>
<div class="callout info"><div class="callout-title">Overriding vs Overloading</div><p>Overriding៖ Subclass ផ្លាស់ប្តូរ Method របស់ Superclass ដោយ Signature ដូចគ្នា។ Overloading៖ Method ឈ្មោះដូចគ្នាក្នុង Class តែមួយដោយ Parameter ខុសគ្នា។</p></div>
<h3>ច្បាប់ Overriding</h3>
<ul>
<li>Method ត្រូវមានឈ្មោះ, Return Type និង Parameter ដូចគ្នា (ឬ Covariant Return Type)។</li>
<li>Access Modifier មិនអាចចង្អៀតជាង Superclass បានទេ។</li>
<li><code>final</code>, <code>static</code> និង <code>private</code> Method មិនអាច Override បានទេ។</li>
</ul>`
    },
    {
      title: "protected និង final",
      html: `<p><strong>protected</strong> អនុញ្ញាតឱ្យ Subclass និង Class ក្នុង Package តែមួយចូលប្រើ។ វាមានប្រយោជន៍ពេលអ្នកចង់ឱ្យ Subclass ចូលប្រើ Field ដោយផ្ទាល់៖</p>
<pre><code>class Animal {
    protected String name;

    protected void sleep() {
        System.out.println(name + " is sleeping");
    }
}

class Dog extends Animal {
    void rest() {
        sleep();   // accessible because protected
    }
}</code></pre>
<p><strong>final</strong> ការពារការ Override ឬ Inheritance៖</p>
<ul>
<li><code>final</code> Method — Subclass មិនអាច Override បានទេ។</li>
<li><code>final</code> Class — មិនអាចមាន Subclass បានទេ (ឧ. <code>String</code>)។</li>
<li><code>final</code> Variable — តម្លៃមិនអាចផ្លាស់ប្តូរបានទេ។</li>
</ul>
<pre><code>class Base {
    final void show() {
        System.out.println("Cannot override");
    }
}

// class Child extends Base {
//     void show() { }   // ERROR
// }</code></pre>`
    },
    {
      title: "ប្រភេទ Inheritance",
      html: `<p>Java គាំទ្រ Inheritance ដូចខាងក្រោម៖</p>
<ul>
<li><strong>Single</strong>៖ Class មួយស្នងពី Class មួយ (A → B)។</li>
<li><strong>Multilevel</strong>៖ A → B → C។</li>
<li><strong>Hierarchical</strong>៖ Class មួយមាន Subclass ច្រើន (A → B, A → C)។</li>
</ul>
<div class="callout warn"><div class="callout-title">គ្មាន Multiple Inheritance សម្រាប់ Class</div><p>Java មិនអនុញ្ញាតឱ្យ Class មួយ <code>extends</code> Class ច្រើនក្នុងពេលតែមួយទេ ដើម្បីជៀសវាង Diamond Problem។ ប្រើ Interface ជំនួស (នឹងរៀនក្នុងមេរៀន Interfaces)។</p></div>
<h3>ពេលគួរប្រើ Inheritance</h3>
<p>ប្រើពេលមានទំនាក់ទំនង IS-A ពិតប្រាកដ។ ឧ. <code>Manager IS-A Employee</code>។ កុំប្រើ Inheritance គ្រាន់តែដើម្បីប្រើកូដឡើងវិញ — ពេលនោះ Composition អាចប្រសើរជាង។</p>`
    }
  ],
  terms: [
    { en: "Inheritance", kh: "មរតក", text: "Class ថ្មីទទួលលក្ខណៈពី Class ដើម។" },
    { en: "Superclass", kh: "ថ្នាក់មេ", text: "Class ដែលត្រូវស្នង។" },
    { en: "Subclass", kh: "ថ្នាក់កូន", text: "Class ដែលស្នងពី Superclass។" },
    { en: "Override", kh: "សរសេរជំនួស", text: "Subclass ផ្តល់ Implementation ថ្មីឱ្យ Method របស់ Superclass។" },
    { en: "super", kh: "មេ", text: "Keyword យោងទៅ Superclass។" },
    { en: "final", kh: "ចុងក្រោយ", text: "ការពារការផ្លាស់ប្តូរ ឬការស្នង។" }
  ],
  syntax: [
    { label: "extends", code: "class Dog extends Animal {\n    // extra members\n}" },
    { label: "super constructor", code: "Dog(String name) {\n    super(name);\n}" },
    { label: "super method", code: "super.eat();" },
    { label: "Override", code: "@Override\nvoid speak() {\n    System.out.println(\"Meow\");\n}" },
    { label: "final class", code: "final class Constants { }" }
  ],
  examples: [
    {
      title: "Animal និង Dog",
      desc: "បង្ហាញ Field និង Method ដែលទទួលមរតក ព្រមទាំង Method ថ្មីរបស់ Subclass។",
      file: "AnimalDemo.java",
      code: `class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {
    Dog(String name) {
        super(name);
    }

    void bark() {
        System.out.println(name + " says Woof");
    }
}

public class AnimalDemo {
    public static void main(String[] args) {
        Dog d = new Dog("Lucky");
        d.eat();
        d.bark();
    }
}`,
      output: "Lucky is eating\nLucky says Woof",
      lines: [
        "Dog ទទួល Field name និង Method eat ពី Animal។",
        "Constructor របស់ Dog ហៅ <code>super(name)</code>។",
        "bark ជា Method ថ្មីដែល Animal មិនមាន។",
        "Object Dog អាចហៅ Method ទាំងពីរ។"
      ]
    },
    {
      title: "Method Overriding",
      desc: "Subclass ផ្លាស់ប្តូរ Method speak តាមប្រភេទសត្វ។",
      file: "SpeakDemo.java",
      code: `class Animal {
    void speak() {
        System.out.println("Some sound");
    }
}

class Cat extends Animal {
    @Override
    void speak() {
        System.out.println("Meow");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Woof");
    }
}

public class SpeakDemo {
    public static void main(String[] args) {
        new Animal().speak();
        new Cat().speak();
        new Dog().speak();
    }
}`,
      output: "Some sound\nMeow\nWoof",
      lines: [
        "Animal កំណត់ Behavior មូលដ្ឋាន។",
        "Cat និង Dog ផ្តល់ Implementation ផ្ទាល់ខ្លួន។",
        "<code>@Override</code> ជួយ Compiler ពិនិត្យ Signature។",
        "ពេលហៅលើ Object នីមួយៗ វាប្រើ Method របស់ Class នោះ។"
      ]
    },
    {
      title: "Employee និង Manager",
      desc: "បង្ហាញ Multilevel Inheritance និងការហៅ super Method។",
      file: "EmployeeDemo.java",
      code: `class Employee {
    String name;

    Employee(String name) {
        this.name = name;
    }

    void work() {
        System.out.println(name + " is working");
    }
}

class Manager extends Employee {
    Manager(String name) {
        super(name);
    }

    @Override
    void work() {
        super.work();
        System.out.println(name + " is managing the team");
    }
}

public class EmployeeDemo {
    public static void main(String[] args) {
        Manager m = new Manager("Dara");
        m.work();
    }
}`,
      output: "Dara is working\nDara is managing the team",
      lines: [
        "Manager ស្នងពី Employee។",
        "<code>super.work()</code> ហៅ Logic ដើមរបស់ Employee។",
        "បន្ទាប់មក Manager បន្ថែម Behavior ផ្ទាល់ខ្លួន។",
        "នេះជាការពង្រីក Behavior ដោយមិនចម្លងកូដ។"
      ]
    },
    {
      title: "final ការពារ Override",
      desc: "បង្ហាញថា final Method មិនអាច Override បាន (កូដខាងក្រោមបាន Comment ព្រោះនឹង Error)។",
      file: "FinalDemo.java",
      code: `class Base {
    final void show() {
        System.out.println("Base show");
    }
}

class Child extends Base {
    // void show() { }   // Compile error: cannot override final method
}

public class FinalDemo {
    public static void main(String[] args) {
        new Child().show();
    }
}`,
      output: "Base show",
      lines: [
        "<code>final</code> Method មិនអាច Override បាន។",
        "Child អាចប្រើ Method show ដែលទទួលមរតក។",
        "បើព្យាយាម Override នោះ Compiler នឹងបដិសេធ។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ មិនហៅ super()</span><br>Superclass មាន Constructor ដែលទាមទារ Argument។', fix: "ហៅ <code>super(...)</code> ជា Statement ដំបូងក្នុង Subclass Constructor។" },
    { text: '<span class="bad-code">❌ Override ខុស Signature</span><br>ប្តូរ Parameter នោះក្លាយជា Overload មិនមែន Override។', fix: "រក្សា Signature ដូច Superclass និងប្រើ <code>@Override</code>។" },
    { text: '<span class="bad-code">❌ ប្រើ private Field ពី Subclass</span><br>private មិនអាចចូលប្រើបានពី Subclass។', fix: "ប្រើ protected ឬ Getter/Setter។" },
    { text: '<span class="bad-code">❌ Inheritance ដើម្បី Reuse គ្រាន់ៗ</span><br>Subclass មិនមានទំនាក់ទំនង IS-A ពិត។', fix: "ប្រើ Composition (មាន Object ជា Field) ជំនួស។" }
  ],
  tips: [
    "ប្រើ <code>@Override</code> ជានិច្ចពេល Override។",
    "Inheritance គួរតំណាង IS-A ពិតប្រាកដ។",
    "កុំធ្វើ Inheritance ជ្រៅពេក — ពិបាកយល់ និងថែទាំ។",
    "សម្រាប់ Field ដែល Subclass ត្រូវការ សូមពិចារណា protected ឬ Getter។"
  ],
  exercises: [
    {
      level: 1,
      title: "Animal និង Cat",
      desc: "បង្កើត Superclass <code>Animal</code> និង Subclass <code>Cat</code> ដែលបន្ថែម Method meow។",
      requirements: ["ប្រើ extends", "Subclass បន្ថែម Method", "ហៅ Method ទាំងពីរ"],
      outputSample: "Cat is eating\nMeow",
      hint: "Animal មាន eat; Cat មាន meow។",
      solutionCode: `class Animal {
    void eat() {
        System.out.println("Cat is eating");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("Meow");
    }
}

public class CatDemo {
    public static void main(String[] args) {
        Cat c = new Cat();
        c.eat();
        c.meow();
    }
}`
    },
    {
      level: 2,
      title: "Override speak",
      desc: "Override Method <code>speak()</code> ក្នុង Subclass <code>Dog</code> ដើម្បីបង្ហាញ “Woof”។",
      requirements: ["ប្រើ @Override", "Signature ដូចគ្នា", "បង្ហាញ Woof"],
      outputSample: "Woof",
      hint: "សរសេរ <code>@Override void speak()</code> ក្នុង Dog។",
      solutionCode: `class Animal {
    void speak() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Woof");
    }
}

public class DogOverride {
    public static void main(String[] args) {
        new Dog().speak();
    }
}`
    },
    {
      level: 2,
      title: "super Constructor",
      desc: "បង្កើត Class <code>Person</code> និង <code>Student</code> ដែល Student ហៅ super ដើម្បីកំណត់ name។",
      requirements: ["Superclass មាន Constructor", "Subclass ហៅ super(...)", "បង្ហាញ name"],
      inputSample: "Dara",
      outputSample: "Student: Dara",
      hint: "Person(String name) និង Student(String name) { super(name); }។",
      solutionCode: `class Person {
    String name;

    Person(String name) {
        this.name = name;
    }
}

class Student extends Person {
    Student(String name) {
        super(name);
    }

    void show() {
        System.out.println("Student: " + name);
    }
}

public class SuperConstructor {
    public static void main(String[] args) {
        new Student("Dara").show();
    }
}`
    },
    {
      level: 3,
      title: "Shape និង Rectangle",
      desc: "បង្កើត Superclass <code>Shape</code> មាន Method area និង Subclass <code>Rectangle</code> Override។",
      requirements: ["extends", "Override area", "បង្ហាញផ្ទៃ"],
      inputSample: "4 x 5",
      outputSample: "Area: 20.0",
      hint: "Shape មាន <code>double area() { return 0; }</code>។",
      solutionCode: `class Shape {
    double area() {
        return 0;
    }
}

class Rectangle extends Shape {
    double width;
    double height;

    Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    double area() {
        return width * height;
    }
}

public class ShapeDemo {
    public static void main(String[] args) {
        Rectangle r = new Rectangle(4, 5);
        System.out.println("Area: " + r.area());
    }
}`
    },
    {
      level: 1,
      title: "Animal និង Dog",
      desc: "បង្កើត Class <code>Animal</code> មាន Method <code>eat()</code> និង Class <code>Dog</code> extends Animal មាន Method <code>bark()</code>។",
      requirements: ["Class Animal", "Class Dog extends Animal", "បង្កើត Object Dog និងហៅ Method ទាំងពីរ"],
      outputSample: "Buddy is eating\nBuddy says Woof",
      hint: "Dog ទទួល Method eat() ពី Animal ដោយស្វ័យប្រវត្តិ។",
      solutionCode: `class Animal {
    String name;

    void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println(name + " says Woof");
    }
}

public class AnimalDemo {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.name = "Buddy";
        d.eat();
        d.bark();
    }
}`
    },
    {
      level: 2,
      title: "Vehicle និង Car",
      desc: "បង្កើត Class <code>Vehicle</code> មាន wheels និង Method <code>describe()</code>; Class <code>Car</code> extends និង Override ដោយប្រើ super។",
      requirements: ["Class Vehicle", "Class Car extends Vehicle", "Override describe និងហៅ super.describe()"],
      outputSample: "Vehicle: Toyota\nWheels: 4",
      hint: "ហៅ <code>super.describe()</code> ដើម្បីបង្ហាញព័ត៌មានរបស់ Class មេ។",
      solutionCode: `class Vehicle {
    String name;
    int wheels;

    void describe() {
        System.out.println("Vehicle: " + name);
    }
}

class Car extends Vehicle {
    @Override
    void describe() {
        super.describe();
        System.out.println("Wheels: " + wheels);
    }
}

public class CarDemo {
    public static void main(String[] args) {
        Car c = new Car();
        c.name = "Toyota";
        c.wheels = 4;
        c.describe();
    }
}`
    },
    {
      level: 3,
      title: "Person និង Student",
      desc: "បង្កើត Class <code>Person</code> មាន Method <code>introduce()</code> និង Class <code>Student</code> extends ដោយ Override។",
      requirements: ["Class Person", "Class Student extends Person", "Override introduce", "ប្រើ super"],
      outputSample: "I am Dara\nI am Dara, a student",
      hint: "Student អាចហៅ <code>super.introduce()</code> រួចបន្ថែមអត្ថបទផ្ទាល់ខ្លួន។",
      solutionCode: `class Person {
    String name;

    void introduce() {
        System.out.println("I am " + name);
    }
}

class Student extends Person {
    @Override
    void introduce() {
        super.introduce();
        System.out.println("I am " + name + ", a student");
    }
}

public class PersonDemo {
    public static void main(String[] args) {
        Student s = new Student();
        s.name = "Dara";
        s.introduce();
    }
}`
    },
    {
      level: 3,
      title: "BankAccount និង SavingsAccount",
      desc: "បង្កើត Class <code>BankAccount</code> មាន deposit/withdraw និង Class <code>SavingsAccount</code> បន្ថែម <code>addInterest(rate)</code>។",
      requirements: ["Class BankAccount", "Class SavingsAccount extends", "Method addInterest", "បង្ហាញ balance"],
      inputSample: "deposit 1000, interest 10%",
      outputSample: "Balance after interest: 1100.0",
      hint: "addInterest អាចហៅ <code>deposit(balance * rate / 100)</code>។",
      solutionCode: `class BankAccount {
    double balance;

    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) balance -= amount;
    }
}

class SavingsAccount extends BankAccount {
    void addInterest(double rate) {
        deposit(balance * rate / 100);
    }
}

public class SavingsDemo {
    public static void main(String[] args) {
        SavingsAccount acc = new SavingsAccount();
        acc.deposit(1000);
        acc.addInterest(10);
        System.out.println("Balance after interest: " + acc.balance);
    }
}`
    },
    {
      level: 2,
      title: "Person និង Teacher",
      desc: "បង្កើត Class <code>Person</code> មាន <code>show()</code> និង Subclass <code>Teacher</code> បន្ថែម Field subject រួច Override show()។",
      requirements: ["ប្រើ extends", "Override show()", "ហៅពី Object Teacher"],
      outputSample: "Dara teaches Java",
      hint: "ក្នុង Teacher អាចហៅ <code>super.show()</code> ឬបង្ហាញព័ត៌មានខ្លួនឯង។",
      solutionCode: `class Person {
    String name;

    void show() {
        System.out.println("Name: " + name);
    }
}

class Teacher extends Person {
    String subject;

    @Override
    void show() {
        System.out.println(name + " teaches " + subject);
    }
}

public class TeacherDemo {
    public static void main(String[] args) {
        Teacher t = new Teacher();
        t.name = "Dara";
        t.subject = "Java";
        t.show();
    }
}`,
      solution: "Teacher ស្នង Field name ពី Person និង Override show() ដើម្បីបង្ហាញព័ត៌មានបន្ថែម។"
    },
    {
      level: 3,
      title: "Employee និង Manager",
      desc: "បង្កើត <code>Employee</code> មាន salary និង <code>Manager extends Employee</code> មាន bonus។ Override <code>totalPay()</code> ដើម្បីបូក bonus។",
      requirements: ["ប្រើ super(...)", "Override totalPay()", "បង្ហាញចំណូលសរុប"],
      outputSample: "Total pay: 1300.0",
      hint: "Manager Constructor ហៅ <code>super(salary)</code> រួច totalPay ត្រឡប់ <code>super.totalPay() + bonus</code>។",
      solutionCode: `class Employee {
    double salary;

    Employee(double salary) {
        this.salary = salary;
    }

    double totalPay() {
        return salary;
    }
}

class Manager extends Employee {
    double bonus;

    Manager(double salary, double bonus) {
        super(salary);
        this.bonus = bonus;
    }

    @Override
    double totalPay() {
        return super.totalPay() + bonus;
    }
}

public class ManagerDemo {
    public static void main(String[] args) {
        Manager m = new Manager(1000, 300);
        System.out.println("Total pay: " + m.totalPay());
    }
}`,
      solution: "Manager ប្រើ super ដើម្បីផ្ទេរ salary ទៅ Employee និងហៅ Method របស់ Superclass បន្ថែម bonus។"
    }
  ],
  quiz: [
    { q: "តើ Keyword ណាប្រើសម្រាប់ Inheritance?", options: ["implements", "extends", "inherits", "super"], answer: 1, explain: "Class ប្រើ extends ដើម្បីស្នងពី Superclass។" },
    { q: "តើ super យោងទៅអ្វី?", options: ["Object បច្ចុប្បន្ន", "Superclass", "Subclass", "Package"], answer: 1, explain: "super យោងទៅ Superclass។" },
    { q: "តើ Method ណាមិនអាច Override បាន?", options: ["public", "protected", "final", "default"], answer: 2, explain: "final Method មិនអាច Override បាន។" },
    { q: "តើ Java គាំទ្រ Multiple Class Inheritance ទេ?", options: ["គាំទ្រ", "មិនគាំទ្រ", "គាំទ្រតែ ២", "គាំទ្រតែ abstract"], answer: 1, explain: "Java មិនគាំទ្រ Multiple Class Inheritance ទេ ប៉ុន្តែគាំទ្រ Multiple Interface។" },
    { q: "តើ Overriding ខុសពី Overloading យ៉ាងដូចម្តេច?", options: ["Overriding មាន Signature ដូចគ្នា", "Overloading មាន Signature ដូចគ្នា", "ដូចគ្នា", "Overriding គ្មាន Return Type"], answer: 0, explain: "Overriding មាន Signature ដូចគ្នារវាង Subclass និង Superclass។" }
  ],
  summary: [
    "Inheritance អនុញ្ញាតឱ្យ Subclass ទទួល Field និង Method ពី Superclass។",
    "ប្រើ <code>extends</code> និង <code>super</code>។",
    "Method Overriding ផ្លាស់ប្តូរ Behavior ដោយរក្សា Signature។",
    "protected អនុញ្ញាតឱ្យ Subclass ចូលប្រើ។",
    "final ការពារការ Override ឬ Inheritance។",
    "Java គាំទ្រ Single, Multilevel និង Hierarchical Inheritance ប៉ុន្តែមិនគាំទ្រ Multiple Class Inheritance។"
  ],
  takeaways: [
    "Inheritance តំណាងទំនាក់ទំនង IS-A។",
    "ប្រើ @Override ដើម្បីធានាភាពត្រឹមត្រូវ។",
    "ហៅ super(...) ពេល Superclass ត្រូវការ Argument។",
    "កុំប្រើ Inheritance គ្រាន់តែដើម្បី Reuse — ពិចារណា Composition។"
  ],
  sources: [
    { label: "Oracle — Inheritance", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/inheritance.html" },
    { label: "W3Schools — Java Inheritance", url: "https://www.w3schools.com/java/java_inheritance.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "polymorphism",
  num: 19,
  part: 12,
  partTitle: "Object-Oriented Programming",
  title: "Polymorphism",
  titleKh: "Polymorphism (ពហុរូបភាព)",
  time: "៨០ នាទី",
  level: 4,
  intro: "Polymorphism មានន័យថា “រូបភាពច្រើន”។ Object តែមួយអាចបង្ហាញអាកប្បកិរិយាខុសគ្នាអាស្រ័យលើ Type ពិតរបស់វា។ អ្នកនឹងរៀន Compile-time Polymorphism (Overloading), Runtime Polymorphism (Overriding), Upcasting, Dynamic Method Dispatch និង <code>instanceof</code>។",
  objectives: [
    "យល់ពី Polymorphism ពីរប្រភេទ។",
    "ប្រើ Upcasting និង Reference របស់ Superclass។",
    "យល់ពី Dynamic Method Dispatch។",
    "ប្រើ <code>instanceof</code> និង Pattern Matching។",
    "រចនា API ដែលប្រើ Polymorphism។"
  ],
  sections: [
    {
      title: "Polymorphism គឺជាអ្វី?",
      html: `<p><strong>Polymorphism</strong> អនុញ្ញាតឱ្យយើងហៅ Method ដូចគ្នាលើ Object ផ្សេងៗ ហើយទទួលបានអាកប្បកិរិយាខុសគ្នា។</p>
<pre><code>class Animal {
    void speak() {
        System.out.println("Some sound");
    }
}

class Cat extends Animal {
    @Override
    void speak() {
        System.out.println("Meow");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Woof");
    }
}</code></pre>
<pre><code>Animal a1 = new Cat();
Animal a2 = new Dog();
a1.speak();   // Meow
a2.speak();   // Woof</code></pre>
<p>ទោះបី Variable ជា Type <code>Animal</code> ក៏ដោយ Method ដែលដំណើរការគឺជា Method របស់ Object ពិត (Cat ឬ Dog)។</p>
<div class="callout info"><div class="callout-title">គោលគំនិតសំខាន់</div><p>Reference Type កំណត់ Method ណាដែលអ្នកអាចហៅបាន ប៉ុន្តែ Object Type ពិតកំណត់ Method ណាដែលដំណើរការ។</p></div>`
    },
    {
      title: "Compile-time vs Runtime",
      html: `<h3>Compile-time Polymorphism (Overloading)</h3>
<p>Java ជ្រើស Method នៅ Compile Time ដោយផ្អែកលើ Parameter៖</p>
<pre><code>class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}</code></pre>
<h3>Runtime Polymorphism (Overriding)</h3>
<p>Java ជ្រើស Method នៅ Runtime តាម Object ពិត៖</p>
<pre><code>Animal a = new Dog();
a.speak();   // Dog's speak() runs at runtime</code></pre>
<div class="table-wrap"><table><thead><tr><th>ចំណុច</th><th>Overloading</th><th>Overriding</th></tr></thead><tbody>
<tr><td>ពេលជ្រើស</td><td>Compile Time</td><td>Runtime</td></tr>
<tr><td>ទីតាំង</td><td>Class តែមួយ</td><td>Subclass</td></tr>
<tr><td>Signature</td><td>ខុសគ្នា</td><td>ដូចគ្នា</td></tr>
<tr><td>ឈ្មោះផ្សេង</td><td>Static Polymorphism</td><td>Dynamic Polymorphism</td></tr>
</tbody></table></div>`
    },
    {
      title: "Upcasting និង Dynamic Dispatch",
      html: `<p><strong>Upcasting</strong> គឺការកំណត់ Object របស់ Subclass ទៅ Reference របស់ Superclass។ វាធ្វើដោយស្វ័យប្រវត្តិ និងមានសុវត្ថិភាព៖</p>
<pre><code>Animal a = new Dog();   // upcasting</code></pre>
<p>អ្នកអាចហៅបានតែ Method ដែល Superclass ប្រកាស៖</p>
<pre><code>a.speak();      // OK
// a.bark();    // ERROR: Animal has no bark()</code></pre>
<p><strong>Dynamic Method Dispatch</strong> គឺយន្តការដែល Java ជ្រើស Method ពិតនៅ Runtime។ វាជាមូលដ្ឋាននៃ Runtime Polymorphism។</p>
<h3>Downcasting</h3>
<p>ដើម្បីហៅ Method ពិសេសរបស់ Subclass ត្រូវ Downcast ដោយប្រុងប្រយ័ត្ន៖</p>
<pre><code>if (a instanceof Dog) {
    Dog d = (Dog) a;
    d.bark();
}</code></pre>
<div class="callout warn"><div class="callout-title">ClassCastException</div><p>បើ Downcast ខុស Type នោះ Java បោះ <code>ClassCastException</code>។ ត្រូវពិនិត្យ <code>instanceof</code> មុន។</p></div>`
    },
    {
      title: "instanceof និង Pattern Matching",
      html: `<p><code>instanceof</code> ពិនិត្យថា Object ជា Instance របស់ Class ណាមួយ៖</p>
<pre><code>Animal a = new Cat();

if (a instanceof Cat) {
    System.out.println("It is a cat");
}</code></pre>
<p>ចាប់ពី Java 16 មក អ្នកអាចប្រើ <strong>Pattern Matching</strong> ដើម្បី Cast ក្នុងពេលតែមួយ៖</p>
<pre><code>if (a instanceof Cat c) {
    c.meow();   // c is already Cat
}</code></pre>
<p>នេះខ្លីជាង និងមានសុវត្ថិភាពជាងការ Cast ដោយដៃ។</p>
<div class="callout tip"><div class="callout-title">ការប្រើជាមួយ Polymorphism</div><p>ជាធម្មតាអ្នកមិនចាំបាច់ instanceof ទេ បើ Design ត្រឹមត្រូវដោយឱ្យ Superclass មាន Method ដែលត្រូវការ។ instanceof គួរប្រើពេលចាំបាច់បែងចែក Type ពិសេស។</p></div>`
    },
    {
      title: "រចនាដោយ Polymorphism",
      html: `<p>Polymorphism ជួយឱ្យកូដមិនចាំបាច់ដឹង Type ជាក់លាក់។ ឧទាហរណ៍ ការគណនាផ្ទៃសម្រាប់ Shape ជាច្រើន៖</p>
<pre><code>abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    double area() { return Math.PI * r * r; }
}

class Rectangle extends Shape {
    double w, h;
    Rectangle(double w, double h) { this.w = w; this.h = h; }
    double area() { return w * h; }
}</code></pre>
<pre><code>Shape[] shapes = {
    new Circle(2),
    new Rectangle(3, 4)
};

for (Shape s : shapes) {
    System.out.println(s.area());
}</code></pre>
<p>Loop មិនចាំបាច់ដឹងថា Shape ជា Circle ឬ Rectangle ទេ — វាហៅ <code>area()</code> ហើយ Java ជ្រើស Implementation ត្រឹមត្រូវ។ នេះជាអត្ថប្រយោជន៍ដ៏ធំនៃ Polymorphism។</p>
<div class="callout info"><div class="callout-title">Open/Closed Principle</div><p>អ្នកអាចបន្ថែម Shape ថ្មីដោយមិនកែ Loop ដើម។ កូដបើកសម្រាប់ការពង្រីក ប៉ុន្តែបិទសម្រាប់ការកែប្រែ (តាម OCP)។</p></div>`
    }
  ],
  terms: [
    { en: "Polymorphism", kh: "ពហុរូបភាព", text: "Object តែមួយបង្ហាញអាកប្បកិរិយាច្រើនបែប។" },
    { en: "Upcasting", kh: "ការបំលែងឡើង", text: "ការកំណត់ Object របស់ Subclass ទៅ Reference របស់ Superclass។" },
    { en: "Downcasting", kh: "ការបំលែងចុះ", text: "ការបំលែង Reference ត្រឡប់ទៅ Subclass។" },
    { en: "Dynamic Dispatch", kh: "ការជ្រើសថាមវន្ត", text: "ការជ្រើស Method នៅ Runtime។" },
    { en: "instanceof", kh: "ជាកម្មវិធី", text: "Operator ពិនិត្យ Type របស់ Object។" }
  ],
  syntax: [
    { label: "Upcasting", code: "Animal a = new Dog();" },
    { label: "Dynamic call", code: "a.speak();" },
    { label: "instanceof", code: "if (a instanceof Dog) { ... }" },
    { label: "Pattern matching", code: "if (a instanceof Dog d) {\n    d.bark();\n}" }
  ],
  examples: [
    {
      title: "Animal Sounds",
      desc: "ប្រើ Reference របស់ Animal ដើម្បីហៅ speak លើ Cat និង Dog។",
      file: "PolymorphismDemo.java",
      code: `class Animal {
    void speak() {
        System.out.println("Some sound");
    }
}

class Cat extends Animal {
    @Override
    void speak() {
        System.out.println("Meow");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Woof");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Animal[] animals = {new Cat(), new Dog(), new Animal()};
        for (Animal a : animals) {
            a.speak();
        }
    }
}`,
      output: "Meow\nWoof\nSome sound",
      lines: [
        "Array មាន Type Animal ប៉ុន្តែផ្ទុក Object ផ្សេងៗ។",
        "Loop ហៅ <code>a.speak()</code> ដោយមិនដឹង Type ពិត។",
        "Java ជ្រើស Method តាម Object ពិតនៅ Runtime។"
      ]
    },
    {
      title: "Shape Areas",
      desc: "គណនាផ្ទៃនៃ Circle និង Rectangle ដោយប្រើ Polymorphism។",
      file: "ShapePolymorphism.java",
      code: `abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double width;
    double height;

    Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    double area() {
        return width * height;
    }
}

public class ShapePolymorphism {
    public static void main(String[] args) {
        Shape[] shapes = {new Circle(2), new Rectangle(3, 4)};
        for (Shape s : shapes) {
            System.out.printf("%.2f%n", s.area());
        }
    }
}`,
      output: "12.57\n12.00",
      lines: [
        "Shape កំណត់ Method area ដែល Subclass ត្រូវអនុវត្ត។",
        "Array Shape ផ្ទុក Circle និង Rectangle។",
        "ការហៅ <code>s.area()</code> ដំណើរការ Method ត្រឹមត្រូវតាម Object។",
        "<code>%.2f</code> បង្ហាញទសភាគ ២ ខ្ទង់។"
      ]
    },
    {
      title: "instanceof និង Downcasting",
      desc: "បង្ហាញការពិនិត្យ Type មុនហៅ Method ពិសេសរបស់ Subclass។",
      file: "InstanceofDemo.java",
      code: `class Animal {
    void speak() { }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Woof");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("Meow");
    }
}

public class InstanceofDemo {
    public static void main(String[] args) {
        Animal[] animals = {new Dog(), new Cat()};
        for (Animal a : animals) {
            if (a instanceof Dog d) {
                d.bark();
            } else if (a instanceof Cat c) {
                c.meow();
            }
        }
    }
}`,
      output: "Woof\nMeow",
      lines: [
        "<code>instanceof Dog d</code> ពិនិត្យ និង Cast ក្នុងពេលតែមួយ។",
        "បើជា Dog ហៅ bark; បើជា Cat ហៅ meow។",
        "Pattern Matching កាត់បន្ថយការ Cast ដោយដៃ។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ហៅ Method របស់ Subclass លើ Reference Superclass</span><br><code>Animal a = new Dog(); a.bark();</code> មិនអាច Compile។', fix: "Downcast បន្ទាប់ពីពិនិត្យ instanceof។" },
    { text: '<span class="bad-code">❌ Downcast ខុស Type</span><br>បំលែង Animal ទៅ Cat ពេលវាជា Dog។', fix: "ពិនិត្យ <code>instanceof</code> មុន Cast។" },
    { text: '<span class="bad-code">❌ គិតថា Overloading ជា Runtime</span><br>Overloading ត្រូវបានដោះស្រាយនៅ Compile Time។', fix: "យល់ថា Runtime Polymorphism កើតពី Overriding។" }
  ],
  tips: [
    "រចនា Superclass ឱ្យមាន Method ដែលគ្រប់ Subclass ត្រូវការ។",
    "ប្រើ Polymorphism ដើម្បីកាត់បន្ថយ if-else តាម Type។",
    "ប្រើ <code>@Override</code> ជានិច្ច។",
    "កុំ Downcast ញឹកញាប់ — វាបង្ហាញថា Design មិនសូវល្អ។"
  ],
  exercises: [
    {
      level: 1,
      title: "Animal Array",
      desc: "បង្កើត Array Animal ដែលមាន Cat និង Dog រួចហៅ speak លើគ្រប់ធាតុ។",
      requirements: ["Upcasting", "Enhanced for", "Override speak"],
      outputSample: "Meow\nWoof",
      hint: "ប្រើ <code>Animal[] a = {new Cat(), new Dog()};</code>។",
      solutionCode: `class Animal {
    void speak() { }
}

class Cat extends Animal {
    @Override
    void speak() { System.out.println("Meow"); }
}

class Dog extends Animal {
    @Override
    void speak() { System.out.println("Woof"); }
}

public class AnimalArray {
    public static void main(String[] args) {
        Animal[] animals = {new Cat(), new Dog()};
        for (Animal a : animals) {
            a.speak();
        }
    }
}`
    },
    {
      level: 2,
      title: "Shape Area",
      desc: "បង្កើត Shape, Circle និង Rectangle ហើយគណនាផ្ទៃដោយ Polymorphism។",
      requirements: ["abstract Shape", "Override area", "Array Shape"],
      outputSample: "12.566370614359172\n12.0",
      hint: "ប្រើ <code>Shape[] shapes</code> និង Loop។",
      solutionCode: `abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    double area() { return Math.PI * r * r; }
}

class Rectangle extends Shape {
    double w, h;
    Rectangle(double w, double h) { this.w = w; this.h = h; }
    double area() { return w * h; }
}

public class ShapeExercise {
    public static void main(String[] args) {
        Shape[] shapes = {new Circle(2), new Rectangle(3, 4)};
        for (Shape s : shapes) {
            System.out.println(s.area());
        }
    }
}`
    },
    {
      level: 2,
      title: "Payments",
      desc: "បង្កើត Payment និង Subclass CardPayment, CashPayment ដែល Override pay។",
      requirements: ["Superclass Payment", "Override pay", "ហៅតាម Polymorphism"],
      outputSample: "Paid by card\nPaid by cash",
      hint: "ប្រើ Array Payment ផ្ទុក Subclass។",
      solutionCode: `class Payment {
    void pay() { }
}

class CardPayment extends Payment {
    @Override
    void pay() { System.out.println("Paid by card"); }
}

class CashPayment extends Payment {
    @Override
    void pay() { System.out.println("Paid by cash"); }
}

public class PaymentDemo {
    public static void main(String[] args) {
        Payment[] payments = {new CardPayment(), new CashPayment()};
        for (Payment p : payments) {
            p.pay();
        }
    }
}`
    },
    {
      level: 3,
      title: "instanceof សម្រាប់ Shape",
      desc: "បន្ថែម Method ពិសេស <code>getRadius()</code> ក្នុង Circle ហើយហៅវាបន្ទាប់ពី instanceof។",
      requirements: ["instanceof pattern", "Downcast", "បង្ហាញ radius"],
      outputSample: "Radius: 2.0",
      hint: "ប្រើ <code>if (s instanceof Circle c)</code>។",
      solutionCode: `abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    double area() {
        return Math.PI * radius * radius;
    }

    double getRadius() {
        return radius;
    }
}

public class ShapeInstanceof {
    public static void main(String[] args) {
        Shape s = new Circle(2);
        if (s instanceof Circle c) {
            System.out.println("Radius: " + c.getRadius());
        }
    }
}`
    },
    {
      level: 1,
      title: "Method Overloading",
      desc: "បង្កើត Method <code>add</code> ពីរកំណែ៖ សម្រាប់ int និងសម្រាប់ double ដើម្បីបង្ហាញ Compile-time Polymorphism។",
      requirements: ["add(int, int)", "add(double, double)", "បង្ហាញលទ្ធផលទាំងពីរ"],
      outputSample: "3\n4.5",
      hint: "Method ឈ្មោះដូចគ្នា ប៉ុន្តែ Parameter ខុសគ្នា។",
      solutionCode: `public class MathDemo {
    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(1, 2));
        System.out.println(add(2.0, 2.5));
    }
}`
    },
    {
      level: 2,
      title: "Animal Array",
      desc: "បង្កើត Class <code>Animal</code> មាន <code>speak()</code> និង Subclass Dog, Cat Override។ ប្រើ Array នៃ Animal។",
      requirements: ["Class Animal", "Dog និង Cat Override speak", "Loop លើ Animal[]"],
      outputSample: "Dog: Woof\nCat: Meow",
      hint: "Java ជ្រើស Method តាម Object ពិត (Runtime Polymorphism)។",
      solutionCode: `class Animal {
    void speak() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Dog: Woof");
    }
}

class Cat extends Animal {
    @Override
    void speak() {
        System.out.println("Cat: Meow");
    }
}

public class AnimalArrayDemo {
    public static void main(String[] args) {
        Animal[] animals = {new Dog(), new Cat()};
        for (Animal a : animals) {
            a.speak();
        }
    }
}`
    },
    {
      level: 3,
      title: "Payment Polymorphism",
      desc: "បង្កើត Class <code>Payment</code> មាន <code>pay(amount)</code> និង Subclass CardPayment, CashPayment Override។",
      requirements: ["Class Payment", "Subclass ពីរ Override pay", "ហៅតាម Reference Payment"],
      outputSample: "Paid by card: 100.0\nPaid by cash: 50.0",
      hint: "ប្រើ <code>Payment p = new CardPayment();</code> រួចហៅ <code>p.pay(100);</code>។",
      solutionCode: `class Payment {
    void pay(double amount) {
        System.out.println("Paid: " + amount);
    }
}

class CardPayment extends Payment {
    @Override
    void pay(double amount) {
        System.out.println("Paid by card: " + amount);
    }
}

class CashPayment extends Payment {
    @Override
    void pay(double amount) {
        System.out.println("Paid by cash: " + amount);
    }
}

public class PaymentDemo {
    public static void main(String[] args) {
        Payment p1 = new CardPayment();
        Payment p2 = new CashPayment();
        p1.pay(100);
        p2.pay(50);
    }
}`
    },
    {
      level: 3,
      title: "Upcasting និង Downcasting",
      desc: "បង្កើត Reference <code>Shape</code> ចង្អុល <code>Circle</code> រួច Downcast ដោយ <code>instanceof</code> ដើម្បីហៅ Method ពិសេស។",
      requirements: ["Upcasting", "instanceof pattern", "ហៅ Method របស់ Circle"],
      outputSample: "Circle radius: 2.0",
      hint: "ប្រើ <code>if (s instanceof Circle c) { ... }</code>។",
      solutionCode: `class Shape {
    double area() {
        return 0;
    }
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    double getRadius() {
        return radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

public class CastingDemo {
    public static void main(String[] args) {
        Shape s = new Circle(2);
        if (s instanceof Circle c) {
            System.out.println("Circle radius: " + c.getRadius());
        }
    }
}`
    }
  ],
  quiz: [
    { q: "តើ Polymorphism មានន័យដូចម្តេច?", options: ["រូបភាពច្រើន", "ការលាក់ទិន្នន័យ", "ការស្នង", "ការវេចខ្ចប់"], answer: 0, explain: "Polymorphism មានន័យថា Object អាចបង្ហាញអាកប្បកិរិយាច្រើនបែប។" },
    { q: "តើ Overriding ជា Polymorphism ប្រភេទណា?", options: ["Compile-time", "Runtime", "Static", "Link-time"], answer: 1, explain: "Overriding ត្រូវបានជ្រើសនៅ Runtime ដោយ Dynamic Dispatch។" },
    { q: "តើ <code>Animal a = new Dog();</code> ហៅថាអ្វី?", options: ["Downcasting", "Upcasting", "Overloading", "Encapsulation"], answer: 1, explain: "ការកំណត់ Object របស់ Subclass ទៅ Reference របស់ Superclass ជា Upcasting។" },
    { q: "តើ <code>instanceof</code> ធ្វើអ្វី?", options: ["Cast Object", "ពិនិត្យ Type", "បង្កើត Object", "លុប Object"], answer: 1, explain: "instanceof ពិនិត្យថា Object ជា Instance របស់ Type ណាមួយ។" },
    { q: "តើការហៅ Method របស់ Subclass លើ Reference Superclass ត្រូវធ្វើដោយរបៀបណា?", options: ["ដោយផ្ទាល់", "Downcast បន្ទាប់ពី instanceof", "ដោយប្រើ static", "មិនអាចធ្វើបាន"], answer: 1, explain: "ត្រូវ Downcast ដោយសុវត្ថិភាព បន្ទាប់ពីពិនិត្យ instanceof។" }
  ],
  summary: [
    "Polymorphism អនុញ្ញាតឱ្យ Object បង្ហាញអាកប្បកិរិយាខុសគ្នា។",
    "Overloading ជា Compile-time; Overriding ជា Runtime Polymorphism។",
    "Upcasting គឺការកំណត់ Subclass ទៅ Reference Superclass។",
    "Dynamic Dispatch ជ្រើស Method នៅ Runtime។",
    "instanceof និង Pattern Matching ជួយពិនិត្យ និង Cast ដោយសុវត្ថិភាព។"
  ],
  takeaways: [
    "ប្រើ Polymorphism ដើម្បីកាត់បន្ថយការត្រួតពិនិត្យ Type។",
    "Design Superclass ឱ្យមាន Behavior រួម។",
    "Upcasting មានសុវត្ថិភាព; Downcasting ត្រូវពិនិត្យ instanceof។",
    "Polymorphism ជួយឱ្យកូដអាចពង្រីកបានដោយមិនកែច្រើន។"
  ],
  sources: [
    { label: "Oracle — Polymorphism", url: "https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html" },
    { label: "W3Schools — Java Polymorphism", url: "https://www.w3schools.com/java/java_polymorphism.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "abstraction",
  num: 20,
  part: 12,
  partTitle: "Object-Oriented Programming",
  title: "Abstraction",
  titleKh: "Abstraction (ការអរូបី)",
  time: "៦៥ នាទី",
  level: 4,
  intro: "Abstraction គឺការលាក់ភាពស្មុគស្មាញ ហើយបង្ហាញតែអ្វីដែលចាំបាច់។ ក្នុង Java យើងធ្វើវាដោយ <strong>abstract class</strong> និង <strong>abstract method</strong>។ អ្នកនឹងរៀនពេលគួរប្រើ Abstraction, ការបង្ខំឱ្យ Subclass អនុវត្ត Method និងភាពខុសគ្នារវាង Abstract Class និង Interface។",
  objectives: [
    "យល់ពីគោលគំនិត Abstraction។",
    "បង្កើត abstract class និង abstract method។",
    "យល់ថា abstract class មិនអាចបង្កើត Object បាន។",
    "សរសេរ Subclass ដែលអនុវត្ត abstract method។",
    "ប្រៀបធៀប Abstract Class និង Interface។"
  ],
  sections: [
    {
      title: "Abstraction គឺជាអ្វី?",
      html: `<p><strong>Abstraction</strong> គឺការបង្ហាញតែអ្វីដែលចាំបាច់ ហើយលាក់ព័ត៌មានលម្អិតខាងក្នុង។ ឧទាហរណ៍ ពេលអ្នកបើករថយន្ត អ្នកប្រើ Steering និងឈ្នាន់ ដោយមិនចាំបាច់ដឹងពីដំណើរការម៉ាស៊ីនលម្អិត។</p>
<p>ក្នុង Java Abstraction សម្រេចបានតាម៖</p>
<ul>
<li><strong>Abstract Class</strong> — Class ដែលមិនអាចបង្កើត Object ដោយផ្ទាល់។</li>
<li><strong>Abstract Method</strong> — Method ដែលគ្មាន Body ហើយ Subclass ត្រូវអនុវត្ត។</li>
<li><strong>Interface</strong> — កិច្ចសន្យានៃ Method (នឹងរៀនបន្ទាប់)។</li>
</ul>
<pre><code>abstract class Shape {
    abstract double area();
}</code></pre>
<div class="callout info"><div class="callout-title">គ្មាន Body</div><p>Abstract Method បញ្ចប់ដោយ <code>;</code> មិនមាន <code>{ }</code> ទេ។ Subclass ត្រូវផ្តល់ Body។</p></div>`
    },
    {
      title: "Abstract Class និង Abstract Method",
      html: `<p>Abstract Class អាចមានទាំង Abstract Method និង Concrete Method ធម្មតា៖</p>
<pre><code>abstract class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    abstract void speak();       // must be implemented

    void sleep() {               // concrete method
        System.out.println(name + " is sleeping");
    }
}</code></pre>
<p>Subclass ត្រូវអនុវត្ត Abstract Method ទាំងអស់ ឬប្រកាសខ្លួនឯងជា abstract៖</p>
<pre><code>class Dog extends Animal {
    Dog(String name) {
        super(name);
    }

    @Override
    void speak() {
        System.out.println(name + " says Woof");
    }
}</code></pre>
<div class="callout warn"><div class="callout-title">បង្កើត Object មិនបាន</div><p><code>new Animal()</code> បណ្តាលឱ្យ Compile Error។ អ្នកត្រូវបង្កើត Object ពី Subclass ដែល Concrete។</p></div>`
    },
    {
      title: "ហេតុអ្វីត្រូវប្រើ Abstraction?",
      html: `<p>Abstraction ជួយឱ្យកូដពឹងផ្អែកលើ <strong>Contract</strong> ជាង Implementation៖</p>
<ul>
<li>កំណត់ Behavior រួមសម្រាប់ Group នៃ Class។</li>
<li>បង្ខំឱ្យ Subclass អនុវត្ត Method ចាំបាច់។</li>
<li>អនុញ្ញាតឱ្យផ្លាស់ប្តូរ Implementation ដោយមិនប៉ះពាល់កូដអ្នកប្រើ។</li>
<li>កាត់បន្ថយភាពស្មុគស្មាញក្នុងកូដធំ។</li>
</ul>
<pre><code>abstract class Employee {
    String name;

    Employee(String name) {
        this.name = name;
    }

    abstract double salary();
}

class FullTime extends Employee {
    double monthly;

    FullTime(String name, double monthly) {
        super(name);
        this.monthly = monthly;
    }

    double salary() {
        return monthly;
    }
}

class PartTime extends Employee {
    double rate;
    int hours;

    PartTime(String name, double rate, int hours) {
        super(name);
        this.rate = rate;
        this.hours = hours;
    }

    double salary() {
        return rate * hours;
    }
}</code></pre>
<p>កូដអ្នកប្រើអាចគណនាប្រាក់ខែដោយមិនដឹងថាជា FullTime ឬ PartTime។</p>`
    },
    {
      title: "Abstract Class vs Interface",
      html: `<div class="table-wrap"><table><thead><tr><th>ចំណុច</th><th>Abstract Class</th><th>Interface</th></tr></thead><tbody>
<tr><td>Keyword</td><td><code>abstract class</code></td><td><code>interface</code></td></tr>
<tr><td>Multiple Inheritance</td><td>មិនបាន (extends តែមួយ)</td><td>បាន (implements ច្រើន)</td></tr>
<tr><td>Field</td><td>មាន Instance Field បាន</td><td>មានតែ Constant</td></tr>
<tr><td>Constructor</td><td>មាន</td><td>គ្មាន</td></tr>
<tr><td>Method</td><td>Abstract និង Concrete</td><td>Abstract, default, static</td></tr>
<tr><td>ពេលប្រើ</td><td>មានកូដរួមខ្លះ</td><td>កំណត់ Contract សម្រាប់ Class ផ្សេងៗ</td></tr>
</tbody></table></div>
<div class="callout tip"><div class="callout-title">គោលការណ៍</div><p>ប្រើ Abstract Class ពេល Class ទាក់ទងគ្នាខ្លាំង និងមានកូដរួម។ ប្រើ Interface ពេលចង់កំណត់ Behavior ដែល Class ផ្សេងៗអាចអនុវត្តបាន។</p></div>`
    }
  ],
  terms: [
    { en: "Abstraction", kh: "ការអរូបី", text: "ការលាក់ភាពស្មុគស្មាញ និងបង្ហាញតែអ្វីចាំបាច់។" },
    { en: "Abstract Class", kh: "ថ្នាក់អរូបី", text: "Class ដែលមិនអាចបង្កើត Object ដោយផ្ទាល់។" },
    { en: "Abstract Method", kh: "អនុគមន៍អរូបី", text: "Method គ្មាន Body ដែល Subclass ត្រូវអនុវត្ត។" },
    { en: "Concrete", kh: "ជាក់ស្តែង", text: "Class ឬ Method ដែលមាន Implementation ពេញលេញ។" },
    { en: "Contract", kh: "កិច្ចសន្យា", text: "ការកំណត់ Method ដែលត្រូវអនុវត្ត។" }
  ],
  syntax: [
    { label: "Abstract class", code: "abstract class Shape {\n    abstract double area();\n}" },
    { label: "Subclass", code: "class Circle extends Shape {\n    double area() { return 0; }\n}" },
    { label: "Concrete method in abstract class", code: "void show() {\n    System.out.println(\"Shape\");\n}" },
    { label: "Cannot instantiate", code: "// Shape s = new Shape();  // error" }
  ],
  examples: [
    {
      title: "Shape Abstraction",
      desc: "Abstract Class Shape និង Subclass Circle, Rectangle ដែលអនុវត្ត area។",
      file: "ShapeAbstract.java",
      code: `abstract class Shape {
    abstract double area();

    void describe() {
        System.out.println("Area is " + area());
    }
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double w, h;

    Rectangle(double w, double h) {
        this.w = w;
        this.h = h;
    }

    @Override
    double area() {
        return w * h;
    }
}

public class ShapeAbstract {
    public static void main(String[] args) {
        Shape s1 = new Circle(2);
        Shape s2 = new Rectangle(3, 4);
        s1.describe();
        s2.describe();
    }
}`,
      output: "Area is 12.566370614359172\nArea is 12.0",
      lines: [
        "Shape កំណត់ Contract <code>area()</code>។",
        "Circle និង Rectangle ត្រូវអនុវត្ត area។",
        "<code>describe()</code> ជា Concrete Method ដែលប្រើ area ខាងក្នុង។",
        "Reference Shape អាចចង្អុលទៅ Subclass ណាមួយ។"
      ]
    },
    {
      title: "Employee Abstraction",
      desc: "គណនាប្រាក់ខែរបស់ FullTime និង PartTime តាម Abstract Method។",
      file: "EmployeeAbstract.java",
      code: `abstract class Employee {
    String name;

    Employee(String name) {
        this.name = name;
    }

    abstract double salary();

    void printSalary() {
        System.out.println(name + ": $" + salary());
    }
}

class FullTime extends Employee {
    double monthly;

    FullTime(String name, double monthly) {
        super(name);
        this.monthly = monthly;
    }

    double salary() {
        return monthly;
    }
}

class PartTime extends Employee {
    double rate;
    int hours;

    PartTime(String name, double rate, int hours) {
        super(name);
        this.rate = rate;
        this.hours = hours;
    }

    double salary() {
        return rate * hours;
    }
}

public class EmployeeAbstract {
    public static void main(String[] args) {
        Employee[] staff = {
            new FullTime("Dara", 500),
            new PartTime("Sok", 10, 40)
        };
        for (Employee e : staff) {
            e.printSalary();
        }
    }
}`,
      output: "Dara: $500.0\nSok: $400.0",
      lines: [
        "Employee កំណត់ abstract salary។",
        "FullTime និង PartTime គណនាខុសគ្នា។",
        "printSalary ជា Concrete Method ដែលហៅ salary តាម Polymorphism។"
      ]
    },
    {
      title: "Abstract Vehicle",
      desc: "Abstract Class Vehicle មាន Method ធម្មតា describe() និង Abstract Method maxSpeed() ដែល Car និង Bike អនុវត្តខុសគ្នា។",
      file: "VehicleDemo.java",
      code: `abstract class Vehicle {
    String name;

    Vehicle(String name) {
        this.name = name;
    }

    abstract int maxSpeed();

    void describe() {
        System.out.println(name + " max speed: " + maxSpeed() + " km/h");
    }
}

class Car extends Vehicle {
    Car(String name) {
        super(name);
    }

    @Override
    int maxSpeed() {
        return 180;
    }
}

class Bike extends Vehicle {
    Bike(String name) {
        super(name);
    }

    @Override
    int maxSpeed() {
        return 40;
    }
}

public class VehicleDemo {
    public static void main(String[] args) {
        Vehicle[] vehicles = {new Car("Toyota"), new Bike("Honda")};
        for (Vehicle v : vehicles) {
            v.describe();
        }
    }
}`,
      output: "Toyota max speed: 180 km/h\nHonda max speed: 40 km/h",
      lines: [
        "Vehicle កំណត់ abstract maxSpeed() ដែល Subclass ត្រូវអនុវត្ត។",
        "describe() ជា Method ធម្មតាដែលអាចហៅ abstract method បាន។",
        "Array ប្រភេទ Vehicle បង្ហាញ Polymorphism ពេលហៅ describe()។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ បង្កើត Object ពី Abstract Class</span><br><code>new Shape()</code> បណ្តាលឱ្យ Compile Error។', fix: "បង្កើត Object ពី Subclass ដែល Concrete។" },
    { text: '<span class="bad-code">❌ មិនអនុវត្ត Abstract Method ទាំងអស់</span><br>Subclass នៅតែមាន Abstract Method ដែលមិនបានអនុវត្ត។', fix: "អនុវត្តគ្រប់ Abstract Method ឬប្រកាស Subclass ជា abstract។" },
    { text: '<span class="bad-code">❌ Abstract Method មាន Body</span><br>សរសេរ <code>abstract void show() { }</code>។', fix: "Abstract Method ត្រូវបញ្ចប់ដោយ <code>;</code> គ្មាន Body។" }
  ],
  tips: [
    "ប្រើ Abstract Class ពេលមាន Behavior រួមខ្លះ។",
    "កំណត់ Contract តូច និងច្បាស់លាស់។",
    "កុំបង្កើត Abstract Class សម្រាប់គ្រប់អ្វី — ប្រើពេលមានហេតុផល។",
    "ឈ្មោះ Abstract Method គួរបញ្ជាក់ Behavior។"
  ],
  exercises: [
    {
      level: 1,
      title: "Abstract Animal",
      desc: "បង្កើត abstract class Animal មាន abstract speak និង Subclass Dog។",
      requirements: ["abstract class", "abstract method", "Subclass អនុវត្ត"],
      outputSample: "Woof",
      hint: "ប្រើ <code>abstract void speak();</code>។",
      solutionCode: `abstract class Animal {
    abstract void speak();
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Woof");
    }
}

public class AbstractAnimal {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.speak();
    }
}`
    },
    {
      level: 2,
      title: "Abstract Shape",
      desc: "បង្កើត abstract Shape មាន area និង Subclass Square។",
      requirements: ["abstract class", "Subclass", "បង្ហាញផ្ទៃ"],
      inputSample: "side=4",
      outputSample: "16.0",
      hint: "Square មាន Field side និង area = side * side។",
      solutionCode: `abstract class Shape {
    abstract double area();
}

class Square extends Shape {
    double side;

    Square(double side) {
        this.side = side;
    }

    double area() {
        return side * side;
    }
}

public class AbstractShape {
    public static void main(String[] args) {
        Shape s = new Square(4);
        System.out.println(s.area());
    }
}`
    },
    {
      level: 2,
      title: "Abstract Account",
      desc: "បង្កើត abstract Account មាន abstract withdraw និង Subclass SavingsAccount ។",
      requirements: ["abstract method", "Concrete Method", "Subclass អនុវត្ត"],
      inputSample: "balance=100, withdraw 30",
      outputSample: "Balance: 70.0",
      hint: "SavingsAccount មាន balance និង withdraw។",
      solutionCode: `abstract class Account {
    double balance;

    abstract void withdraw(double amount);

    void show() {
        System.out.println("Balance: " + balance);
    }
}

class SavingsAccount extends Account {
    SavingsAccount(double balance) {
        this.balance = balance;
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}

public class AbstractAccount {
    public static void main(String[] args) {
        SavingsAccount a = new SavingsAccount(100);
        a.withdraw(30);
        a.show();
    }
}`
    },
    {
      level: 3,
      title: "Abstract Employee",
      desc: "បង្កើត abstract Employee និង Subclass Intern ដែលគណនាប្រាក់ខែតាមថ្ងៃ។",
      requirements: ["abstract salary", "Subclass Intern", "បង្ហាញប្រាក់ខែ"],
      inputSample: "rate=20, days=5",
      outputSample: "Dara: $100.0",
      hint: "Intern salary = rate * days។",
      solutionCode: `abstract class Employee {
    String name;

    Employee(String name) {
        this.name = name;
    }

    abstract double salary();

    void show() {
        System.out.println(name + ": $" + salary());
    }
}

class Intern extends Employee {
    double rate;
    int days;

    Intern(String name, double rate, int days) {
        super(name);
        this.rate = rate;
        this.days = days;
    }

    double salary() {
        return rate * days;
    }
}

public class AbstractEmployee {
    public static void main(String[] args) {
        new Intern("Dara", 20, 5).show();
    }
}`
    },
    {
      level: 1,
      title: "Abstract Appliance",
      desc: "បង្កើត Abstract Class <code>Appliance</code> មាន Abstract Method <code>turnOn()</code> និង Method <code>info()</code>។ Class <code>Fan</code> អនុវត្ត។",
      requirements: ["abstract class", "abstract turnOn()", "Subclass Fan អនុវត្ត turnOn"],
      outputSample: "Appliance: Fan\nFan is on",
      hint: "Subclass ត្រូវ Override Abstract Method ទាំងអស់។",
      solutionCode: `abstract class Appliance {
    String name;

    abstract void turnOn();

    void info() {
        System.out.println("Appliance: " + name);
    }
}

class Fan extends Appliance {
    @Override
    void turnOn() {
        System.out.println("Fan is on");
    }
}

public class ApplianceDemo {
    public static void main(String[] args) {
        Fan f = new Fan();
        f.name = "Fan";
        f.info();
        f.turnOn();
    }
}`
    },
    {
      level: 2,
      title: "Abstract Shape",
      desc: "បង្កើត Abstract Class <code>Shape</code> មាន Abstract Method <code>area()</code> និង Class <code>Square</code>។",
      requirements: ["abstract class Shape", "abstract area()", "Square គណនាផ្ទៃក្រឡា"],
      inputSample: "side=4",
      outputSample: "Square area: 16.0",
      hint: "<code>return side * side;</code>។",
      solutionCode: `abstract class Shape {
    abstract double area();
}

class Square extends Shape {
    double side;

    Square(double side) {
        this.side = side;
    }

    @Override
    double area() {
        return side * side;
    }
}

public class SquareDemo {
    public static void main(String[] args) {
        Square s = new Square(4);
        System.out.println("Square area: " + s.area());
    }
}`
    },
    {
      level: 3,
      title: "Abstract BankAccount",
      desc: "បង្កើត Abstract Class <code>BankAccount</code> មាន Abstract Method <code>withdraw(amount)</code> និង Class <code>SavingsAccount</code>។",
      requirements: ["abstract withdraw", "SavingsAccount អនុវត្ត", "បង្ហាញ balance"],
      inputSample: "deposit 500, withdraw 200",
      outputSample: "Withdrew: 200.0\nBalance: 300.0",
      hint: "Abstract Class អាចមាន Method ធម្មតាដូចជា deposit។",
      solutionCode: `abstract class BankAccount {
    double balance;

    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    abstract void withdraw(double amount);
}

class SavingsAccount extends BankAccount {
    @Override
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew: " + amount);
        }
    }
}

public class BankDemo {
    public static void main(String[] args) {
        SavingsAccount acc = new SavingsAccount();
        acc.deposit(500);
        acc.withdraw(200);
        System.out.println("Balance: " + acc.balance);
    }
}`
    },
    {
      level: 3,
      title: "Abstract Employee",
      desc: "បង្កើត Abstract Class <code>Employee</code> មាន Abstract Method <code>salary()</code> និង Class <code>Manager</code>។",
      requirements: ["abstract salary", "Manager អនុវត្ត", "បង្ហាញប្រាក់ខែ"],
      inputSample: "base=1000, bonus=200",
      outputSample: "Manager salary: 1200.0",
      hint: "salary() ត្រឡប់ <code>base + bonus</code>។",
      solutionCode: `abstract class Employee {
    String name;

    abstract double salary();
}

class Manager extends Employee {
    double base;
    double bonus;

    Manager(double base, double bonus) {
        this.base = base;
        this.bonus = bonus;
    }

    @Override
    double salary() {
        return base + bonus;
    }
}

public class EmployeeDemo {
    public static void main(String[] args) {
        Manager m = new Manager(1000, 200);
        System.out.println("Manager salary: " + m.salary());
    }
}`
    }
  ],
  quiz: [
    { q: "តើ Abstract Class អាចបង្កើត Object បានទេ?", options: ["បាន", "មិនបាន", "បានតែ static", "បានតែក្នុង main"], answer: 1, explain: "Abstract Class មិនអាច Instantiate ដោយផ្ទាល់បានទេ។" },
    { q: "តើ Abstract Method មាន Body ទេ?", options: ["មាន", "គ្មាន", "មានតែ return", "មានតែ static"], answer: 1, explain: "Abstract Method គ្មាន Body ហើយ Subclass ត្រូវអនុវត្ត។" },
    { q: "តើ Abstract Class អាចមាន Concrete Method ទេ?", options: ["មិនបាន", "បាន", "បានតែ static", "បានតែ private"], answer: 1, explain: "Abstract Class អាចមានទាំង Abstract និង Concrete Method។" },
    { q: "តើ Subclass ត្រូវធ្វើអ្វីជាមួយ Abstract Method?", options: ["លុបវា", "អនុវត្តវា", "ធ្វើវា private", "មិនត្រូវធ្វើអ្វី"], answer: 1, explain: "Subclass ត្រូវ Override និងអនុវត្ត Abstract Method ទាំងអស់។" },
    { q: "តើ Abstraction ជួយអ្វី?", options: ["លាក់ភាពស្មុគស្មាញ", "បង្កើត Loop", "គណនាលេខ", "បង្កើត Array"], answer: 0, explain: "Abstraction លាក់ភាពស្មុគស្មាញ និងបង្ហាញតែអ្វីចាំបាច់។" }
  ],
  summary: [
    "Abstraction លាក់ភាពស្មុគស្មាញ និងបង្ហាញតែ Contract។",
    "Abstract Class មិនអាចបង្កើត Object ដោយផ្ទាល់។",
    "Abstract Method គ្មាន Body ហើយ Subclass ត្រូវអនុវត្ត។",
    "Abstract Class អាចមាន Concrete Method និង Field។",
    "Abstract Class ផ្តល់កូដរួម; Interface ផ្តល់ Contract សម្រាប់ Class ផ្សេងៗ។"
  ],
  takeaways: [
    "ប្រើ Abstraction ដើម្បីកំណត់ Behavior រួម។",
    "Subclass ត្រូវអនុវត្ត Abstract Method ទាំងអស់។",
    "Abstract Class សមស្របពេលមានកូដរួម។",
    "Interface សមស្របពេលចង់ Multiple Inheritance នៃ Type។"
  ],
  sources: [
    { label: "Oracle — Abstract Methods and Classes", url: "https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html" },
    { label: "W3Schools — Java Abstraction", url: "https://www.w3schools.com/java/java_abstract.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "interfaces",
  num: 21,
  part: 12,
  partTitle: "Object-Oriented Programming",
  title: "Interfaces",
  titleKh: "Interface (កិច្ចសន្យា)",
  time: "៨៥ នាទី",
  level: 4,
  intro: "Interface កំណត់ <strong>Contract</strong> នៃ Method ដែល Class ត្រូវអនុវត្ត។ Class មួយអាច <code>implements</code> Interface ច្រើនបាន ដែលជំនួស Multiple Inheritance នៃ Class។ អ្នកនឹងរៀន Interface Method, Default Method, Static Method, Constant, Functional Interface និងភាពខុសគ្នាពី Abstract Class។",
  objectives: [
    "ប្រកាស និងប្រើ Interface។",
    "អនុវត្ត Interface ក្នុង Class។",
    "ប្រើ Multiple Interfaces។",
    "ប្រើ default និង static Method ក្នុង Interface។",
    "យល់ពី Functional Interface និង Lambda មូលដ្ឋាន។"
  ],
  sections: [
    {
      title: "Interface គឺជាអ្វី?",
      html: `<p><strong>Interface</strong> គឺជាកិច្ចសន្យា (Contract) ដែលកំណត់ Method ដែល Class ត្រូវអនុវត្ត។ Interface មិនមាន Constructor និងមិនអាចបង្កើត Object បានទេ។</p>
<pre><code>interface Drawable {
    void draw();
}</code></pre>
<p>Class អនុវត្តដោយ <code>implements</code>៖</p>
<pre><code>class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing circle");
    }
}</code></pre>
<div class="callout info"><div class="callout-title">public ដោយស្វ័យប្រវត្តិ</div><p>Method ក្នុង Interface ជា <code>public abstract</code> ដោយស្វ័យប្រវត្តិ។ ពេលអនុវត្ត អ្នកត្រូវប្រកាស <code>public</code> ជានិច្ច។</p></div>`
    },
    {
      title: "Multiple Interfaces",
      html: `<p>Class មួយអាចអនុវត្ត Interface ច្រើនបាន ដោយបំបែកដោយ Comma៖</p>
<pre><code>interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck flies");
    }

    @Override
    public void swim() {
        System.out.println("Duck swims");
    }
}</code></pre>
<p>នេះជាអត្ថប្រយោជន៍ធំ ព្រោះ Java មិនអនុញ្ញាត Multiple Class Inheritance។</p>
<div class="callout tip"><div class="callout-title">Interface ជា Type</div><p>អ្នកអាចប្រើ Interface ជា Reference Type៖ <code>Flyable f = new Duck();</code> ហើយហៅ <code>f.fly()</code>។</p></div>`
    },
    {
      title: "Default, Static និង Private Method",
      html: `<p>ចាប់ពី Java 8 មក Interface អាចមាន Method ដែលមាន Body៖</p>
<h3>default Method</h3>
<pre><code>interface Greeting {
    void greet();

    default void greetTwice() {
        greet();
        greet();
    }
}</code></pre>
<p>Class មិនចាំបាច់អនុវត្ត <code>greetTwice</code> ទេ — វាទទួល Implementation ពី Interface។</p>
<h3>static Method</h3>
<pre><code>interface MathUtils {
    static int square(int n) {
        return n * n;
    }
}

// call: MathUtils.square(5)</code></pre>
<h3>private Method (Java 9+)</h3>
<pre><code>interface Helper {
    private void log(String msg) {
        System.out.println(msg);
    }

    default void run() {
        log("Running");
    }
}</code></pre>
<div class="callout info"><div class="callout-title">Constant</div><p>Field ក្នុង Interface ជា <code>public static final</code> ដោយស្វ័យប្រវត្តិ។ ឧ. <code>int MAX = 100;</code>។</p></div>`
    },
    {
      title: "Functional Interface និង Lambda",
      html: `<p><strong>Functional Interface</strong> គឺ Interface ដែលមាន Abstract Method តែមួយ។ វាអាចប្រើជាមួយ Lambda Expression៖</p>
<pre><code>@FunctionalInterface
interface Calculator {
    int operate(int a, int b);
}

public class Main {
    public static void main(String[] args) {
        Calculator add = (a, b) -> a + b;
        Calculator multiply = (a, b) -> a * b;

        System.out.println(add.operate(2, 3));       // 5
        System.out.println(multiply.operate(2, 3));  // 6
    }
}</code></pre>
<p>Java មាន Functional Interface ស្តង់ដារដូចជា <code>Runnable</code>, <code>Comparator</code>, <code>Function</code>, <code>Predicate</code> និង <code>Supplier</code>។</p>
<div class="callout warn"><div class="callout-title">@FunctionalInterface</div><p>Annotation នេះជាជម្រើស ប៉ុន្តែវាជួយ Compiler ពិនិត្យថា Interface មាន Abstract Method តែមួយ។</p></div>`
    },
    {
      title: "Interface vs Abstract Class",
      html: `<div class="table-wrap"><table><thead><tr><th>ចំណុច</th><th>Interface</th><th>Abstract Class</th></tr></thead><tbody>
<tr><td>Keyword</td><td><code>implements</code></td><td><code>extends</code></td></tr>
<tr><td>ចំនួន</td><td>ច្រើនបាន</td><td>តែមួយ</td></tr>
<tr><td>Constructor</td><td>គ្មាន</td><td>មាន</td></tr>
<tr><td>Field</td><td>Constant ប៉ុណ្ណោះ</td><td>Instance Field បាន</td></tr>
<tr><td>Method</td><td>Abstract, default, static</td><td>Abstract និង Concrete</td></tr>
<tr><td>Access</td><td>ជាធម្មតា public</td><td>គ្រប់កម្រិត</td></tr>
</tbody></table></div>
<div class="callout tip"><div class="callout-title">ជ្រើសរើសបែបណា?</div><p>ប្រើ Interface ពេលចង់កំណត់ “អ្វីដែល Class ត្រូវធ្វើ” ដោយមិនខ្វល់ “ធ្វើដូចម្តេច”។ ប្រើ Abstract Class ពេលចង់ផ្តល់កូដរួម និងទិន្នន័យរួម។</p></div>`
    }
  ],
  terms: [
    { en: "Interface", kh: "ចំណុចប្រទាក់", text: "Contract នៃ Method ដែល Class ត្រូវអនុវត្ត។" },
    { en: "implements", kh: "អនុវត្ត", text: "Keyword សម្រាប់ Class ដើម្បីអនុវត្ត Interface។" },
    { en: "default method", kh: "អនុគមន៍លំនាំដើម", text: "Method ក្នុង Interface ដែលមាន Body។" },
    { en: "Functional Interface", kh: "ចំណុចប្រទាក់មុខងារ", text: "Interface ដែលមាន Abstract Method តែមួយ។" },
    { en: "Lambda", kh: "ឡាំបដា", text: "Expression ខ្លីសម្រាប់អនុវត្ត Functional Interface។" }
  ],
  syntax: [
    { label: "Declare", code: "interface Drawable {\n    void draw();\n}" },
    { label: "Implement", code: "class Circle implements Drawable {\n    public void draw() { }\n}" },
    { label: "Multiple", code: "class Duck implements Flyable, Swimmable { }" },
    { label: "Default", code: "default void show() {\n    System.out.println(\"Hi\");\n}" },
    { label: "Functional", code: "@FunctionalInterface\ninterface Calc {\n    int apply(int a, int b);\n}" }
  ],
  examples: [
    {
      title: "Drawable Interface",
      desc: "Interface Drawable និង Class Circle, Rectangle ដែលអនុវត្ត។",
      file: "DrawableDemo.java",
      code: `interface Drawable {
    void draw();
}

class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing circle");
    }
}

class Rectangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing rectangle");
    }
}

public class DrawableDemo {
    public static void main(String[] args) {
        Drawable[] shapes = {new Circle(), new Rectangle()};
        for (Drawable d : shapes) {
            d.draw();
        }
    }
}`,
      output: "Drawing circle\nDrawing rectangle",
      lines: [
        "Interface កំណត់ Method draw ដោយគ្មាន Body។",
        "Circle និង Rectangle អនុវត្តដោយ <code>public</code>។",
        "Array Drawable ផ្ទុក Class ផ្សេងៗដែលអនុវត្ត Interface។",
        "ការហៅ draw ជា Polymorphism។"
      ]
    },
    {
      title: "Multiple Interfaces",
      desc: "Duck អនុវត្ត Flyable និង Swimmable ក្នុងពេលតែមួយ។",
      file: "DuckDemo.java",
      code: `interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck flies");
    }

    @Override
    public void swim() {
        System.out.println("Duck swims");
    }
}

public class DuckDemo {
    public static void main(String[] args) {
        Duck d = new Duck();
        d.fly();
        d.swim();

        Flyable f = d;
        f.fly();
    }
}`,
      output: "Duck flies\nDuck swims\nDuck flies",
      lines: [
        "Duck អនុវត្ត Interface ពីរ។",
        "វាត្រូវអនុវត្ត Method ទាំងអស់ពី Interface ទាំងពីរ។",
        "Reference Flyable អាចចង្អុល Duck បាន។"
      ]
    },
    {
      title: "Default Method",
      desc: "Interface Greeting ដែលមាន default Method ហៅ Method ផ្សេង។",
      file: "GreetingDemo.java",
      code: `interface Greeting {
    void greet();

    default void greetTwice() {
        greet();
        greet();
    }
}

class EnglishGreeting implements Greeting {
    @Override
    public void greet() {
        System.out.println("Hello");
    }
}

public class GreetingDemo {
    public static void main(String[] args) {
        EnglishGreeting g = new EnglishGreeting();
        g.greetTwice();
    }
}`,
      output: "Hello\nHello",
      lines: [
        "greetTwice ជា default Method ដែលមាន Body។",
        "EnglishGreeting មិនចាំបាច់អនុវត្ត greetTwice ទេ។",
        "ការហៅ greetTwice ហៅ greet ពីរដង។"
      ]
    },
    {
      title: "Functional Interface",
      desc: "ប្រើ Lambda ជាមួយ Functional Interface Calculator។",
      file: "CalculatorLambda.java",
      code: `@FunctionalInterface
interface Calculator {
    int operate(int a, int b);
}

public class CalculatorLambda {
    public static void main(String[] args) {
        Calculator add = (a, b) -> a + b;
        Calculator multiply = (a, b) -> a * b;

        System.out.println(add.operate(2, 3));
        System.out.println(multiply.operate(2, 3));
    }
}`,
      output: "5\n6",
      lines: [
        "Calculator មាន Abstract Method តែមួយ។",
        "Lambda <code>(a, b) -&gt; a + b</code> អនុវត្ត Method នោះ។",
        "Lambda អាចរក្សាទុកក្នុង Variable Type Interface។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ភ្លេច public</span><br>Method ក្នុង Class អនុវត្ត Interface ដោយគ្មាន public។', fix: "ប្រកាស <code>public void draw()</code>។" },
    { text: '<span class="bad-code">❌ បង្កើត Object ពី Interface</span><br><code>new Drawable()</code> មិនអាចធ្វើបាន។', fix: "បង្កើត Object ពី Class ដែលអនុវត្ត Interface។" },
    { text: '<span class="bad-code">❌ មិនអនុវត្ត Method ទាំងអស់</span><br>Class ខ្វះ Method ពី Interface។', fix: "អនុវត្តគ្រប់ Abstract Method ឬប្រកាស Class ជា abstract។" },
    { text: '<span class="bad-code">❌ Functional Interface មាន Method ច្រើន</span><br>បន្ថែម Abstract Method ទីពីរ។', fix: "Functional Interface ត្រូវមាន Abstract Method តែមួយ។" }
  ],
  tips: [
    "ដាក់ឈ្មោះ Interface ជាគុណនាម ឬសកម្មភាព ដូចជា <code>Comparable</code>, <code>Runnable</code>។",
    "រចនា Interface តូច និងផ្តោតលើ Behavior តែមួយ។",
    "ប្រើ default Method ដើម្បីបន្ថែម Method ដោយមិនបំបែក Class ចាស់។",
    "ប្រើ Functional Interface និង Lambda សម្រាប់ Callback និង Behavior Parameter។"
  ],
  exercises: [
    {
      level: 1,
      title: "Interface Shape",
      desc: "បង្កើត Interface <code>Shape</code> មាន Method <code>area()</code> និង Class Square។",
      requirements: ["Interface", "implements", "public Method"],
      inputSample: "side=4",
      outputSample: "16.0",
      hint: "Interface Shape { double area(); }។",
      solutionCode: `interface Shape {
    double area();
}

class Square implements Shape {
    double side;

    Square(double side) {
        this.side = side;
    }

    public double area() {
        return side * side;
    }
}

public class ShapeInterface {
    public static void main(String[] args) {
        Shape s = new Square(4);
        System.out.println(s.area());
    }
}`
    },
    {
      level: 2,
      title: "Multiple Interfaces",
      desc: "បង្កើត Interface <code>Printable</code> និង <code>Scannable</code> រួច Class <code>Printer</code> អនុវត្តទាំងពីរ។",
      requirements: ["Interface ពីរ", "implements ទាំងពីរ", "អនុវត្ត Method"],
      outputSample: "Printing\nScanning",
      hint: "ប្រើ <code>implements Printable, Scannable</code>។",
      solutionCode: `interface Printable {
    void print();
}

interface Scannable {
    void scan();
}

class Printer implements Printable, Scannable {
    public void print() {
        System.out.println("Printing");
    }

    public void scan() {
        System.out.println("Scanning");
    }
}

public class PrinterDemo {
    public static void main(String[] args) {
        Printer p = new Printer();
        p.print();
        p.scan();
    }
}`
    },
    {
      level: 2,
      title: "Default Method",
      desc: "បន្ថែម default Method <code>showTwice()</code> ក្នុង Interface Message ដែលហៅ show ពីរដង។",
      requirements: ["default Method", "Class អនុវត្ត", "ហៅ default Method"],
      outputSample: "Hi\nHi",
      hint: "default void showTwice() { show(); show(); }",
      solutionCode: `interface Message {
    void show();

    default void showTwice() {
        show();
        show();
    }
}

class Hello implements Message {
    public void show() {
        System.out.println("Hi");
    }
}

public class DefaultMethod {
    public static void main(String[] args) {
        new Hello().showTwice();
    }
}`
    },
    {
      level: 3,
      title: "Functional Interface",
      desc: "បង្កើត Functional Interface <code>MathOp</code> មាន Method <code>apply(int,int)</code> និងប្រើ Lambda សម្រាប់បូក និងដក។",
      requirements: ["@FunctionalInterface", "Lambda ពីរ", "បង្ហាញលទ្ធផល"],
      outputSample: "5\n-1",
      hint: "MathOp add = (a, b) -> a + b;",
      solutionCode: `@FunctionalInterface
interface MathOp {
    int apply(int a, int b);
}

public class MathOpDemo {
    public static void main(String[] args) {
        MathOp add = (a, b) -> a + b;
        MathOp sub = (a, b) -> a - b;

        System.out.println(add.apply(2, 3));
        System.out.println(sub.apply(2, 3));
    }
}`
    },
    {
      level: 1,
      title: "Interface Animal",
      desc: "បង្កើត Interface <code>Animal</code> មាន Method <code>sound()</code> និង Class <code>Dog</code> implements។",
      requirements: ["Interface Animal", "Dog implements Animal", "អនុវត្ត sound()"],
      outputSample: "Dog says Woof",
      hint: "Class ត្រូវអនុវត្ត Method ទាំងអស់ក្នុង Interface។",
      solutionCode: `interface Animal {
    void sound();
}

class Dog implements Animal {
    @Override
    public void sound() {
        System.out.println("Dog says Woof");
    }
}

public class AnimalDemo {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();
    }
}`
    },
    {
      level: 2,
      title: "Interface Shape",
      desc: "បង្កើត Interface <code>Shape</code> មាន Method <code>area()</code> និង Class <code>Circle</code> implements។",
      requirements: ["Interface Shape", "Circle implements Shape", "គណនាផ្ទៃក្រឡា"],
      inputSample: "radius=3",
      outputSample: "Circle area: 28.274333882308138",
      hint: "<code>Math.PI * radius * radius</code>។",
      solutionCode: `interface Shape {
    double area();
}

class Circle implements Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}

public class CircleDemo {
    public static void main(String[] args) {
        Circle c = new Circle(3);
        System.out.println("Circle area: " + c.area());
    }
}`
    },
    {
      level: 3,
      title: "Multiple Interfaces",
      desc: "បង្កើត Interface <code>Flyable</code> និង <code>Swimmable</code> រួច Class <code>Duck</code> implements ទាំងពីរ។",
      requirements: ["Interface ពីរ", "Duck implements ទាំងពីរ", "ហៅ Method ទាំងពីរ"],
      outputSample: "Duck is flying\nDuck is swimming",
      hint: "ប្រើ <code>implements Flyable, Swimmable</code>។",
      solutionCode: `interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck is flying");
    }

    @Override
    public void swim() {
        System.out.println("Duck is swimming");
    }
}

public class DuckDemo {
    public static void main(String[] args) {
        Duck d = new Duck();
        d.fly();
        d.swim();
    }
}`
    },
    {
      level: 3,
      title: "Default Method",
      desc: "បង្កើត Interface <code>Greeter</code> មាន Default Method <code>greet(name)</code> រួច Class <code>EnglishGreeter</code> ប្រើវា។",
      requirements: ["Default Method", "Class មិនចាំបាច់ Override", "ហៅ greet"],
      outputSample: "Hello, Dara\nHello, guest",
      hint: "Default Method មាន <code>default</code> និង Body ក្នុង Interface។",
      solutionCode: `interface Greeter {
    default void greet(String name) {
        System.out.println("Hello, " + name);
    }
}

class EnglishGreeter implements Greeter {
}

public class GreeterDemo {
    public static void main(String[] args) {
        EnglishGreeter g = new EnglishGreeter();
        g.greet("Dara");
        g.greet("guest");
    }
}`
    }
  ],
  quiz: [
    { q: "តើ Class ប្រើ Keyword ណាដើម្បីអនុវត្ត Interface?", options: ["extends", "implements", "inherits", "uses"], answer: 1, explain: "Class ប្រើ implements សម្រាប់ Interface។" },
    { q: "តើ Class អាចអនុវត្ត Interface ប៉ុន្មាន?", options: ["តែមួយ", "ពីរ", "ច្រើន", "គ្មាន"], answer: 2, explain: "Class អាច implements Interface ច្រើនបាន។" },
    { q: "តើ Interface មាន Constructor ទេ?", options: ["មាន", "គ្មាន", "មានតែ default", "មានតែ private"], answer: 1, explain: "Interface គ្មាន Constructor និងមិនអាចបង្កើត Object បាន។" },
    { q: "តើ default Method មាន Body ទេ?", options: ["មាន", "គ្មាន", "មានតែ return", "មានតែ static"], answer: 0, explain: "default Method មាន Body ក្នុង Interface។" },
    { q: "តើ Functional Interface មាន Abstract Method ប៉ុន្មាន?", options: ["0", "1", "2", "ច្រើន"], answer: 1, explain: "Functional Interface មាន Abstract Method តែមួយ ដើម្បីប្រើ Lambda។" }
  ],
  summary: [
    "Interface កំណត់ Contract នៃ Method ដែល Class ត្រូវអនុវត្ត។",
    "Class អាច implements Interface ច្រើន។",
    "Interface អាចមាន default, static និង private Method។",
    "Field ក្នុង Interface ជា Constant។",
    "Functional Interface មាន Abstract Method តែមួយ ហើយប្រើជាមួយ Lambda បាន។"
  ],
  takeaways: [
    "Interface ជាមធ្យោបាយកំណត់ Behavior ដោយមិនខ្វល់ Implementation។",
    "ប្រើ Multiple Interfaces ជំនួស Multiple Class Inheritance។",
    "default Method ជួយបន្ថែម Method ដោយមិនបំបែក Class ចាស់។",
    "Functional Interface និង Lambda ធ្វើឱ្យកូដសម័យទំនើបខ្លី និងអានងាយ។"
  ],
  sources: [
    { label: "Oracle — Interfaces", url: "https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html" },
    { label: "W3Schools — Java Interface", url: "https://www.w3schools.com/java/java_interface.asp" }
  ]
});
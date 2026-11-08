/* Lessons 14–17: OOP, Classes & Objects, Constructors, Encapsulation */
window.JAVA_LESSONS = window.JAVA_LESSONS || [];

window.JAVA_LESSONS.push({
  id: "oop",
  num: 14,
  part: 12,
  partTitle: "Object-Oriented Programming",
  title: "OOP Concepts",
  titleKh: "គោលគំនិត OOP",
  time: "៥០ នាទី",
  level: 3,
  intro: "Object-Oriented Programming (OOP) គឺជាវិធីសាស្ត្ររៀបចំកូដជុំវិញ <strong>Object</strong> ដែលរួមបញ្ចូលទាំងទិន្នន័យ និងអាកប្បកិរិយា។ Java ជាភាសា OOP ពេញលេញ។ មេរៀននេះណែនាំគោលគំនិត Class, Object និងសសរស្តម្ភទាំងបួន៖ Encapsulation, Inheritance, Polymorphism និង Abstraction។",
  objectives: [
    "យល់ពីភាពខុសគ្នារវាង Class និង Object។",
    "ស្គាល់សសរស្តម្ភទាំងបួននៃ OOP។",
    "យល់ពីអត្ថប្រយោជន៍នៃ OOP។",
    "មើលឃើញរបៀប OOP ឆ្លុះបញ្ចាំងពីពិភពពិត។",
    "ត្រៀមខ្លួនសម្រាប់ Class, Constructor និង Inheritance។"
  ],
  sections: [
    {
      title: "Class និង Object",
      html: `<p><strong>Class</strong> គឺជា Blueprint ឬគំរូ។ <strong>Object</strong> គឺជាវត្ថុពិតដែលបង្កើតចេញពី Class។ ឧបមាថា Class <code>Car</code> ជាគំរូរថយន្ត ហើយ Object គឺរថយន្តពិតមួយដែលមានពណ៌ និងម៉ាកជាក់លាក់។</p>
<pre><code>class Car {
    String brand;
    String color;
    int speed;

    void drive() {
        System.out.println(brand + " is driving");
    }
}</code></pre>
<pre><code>Car myCar = new Car();
myCar.brand = "Toyota";
myCar.color = "White";
myCar.drive();</code></pre>
<p>Object <code>myCar</code> មាន Attribute ផ្ទាល់ខ្លួន (brand, color, speed) និង Method (drive)។ អ្នកអាចបង្កើត Object ច្រើនពី Class តែមួយ ដោយម្នាក់ៗមានទិន្នន័យខុសគ្នា។</p>
<div class="callout info"><div class="callout-title">Class vs Object</div><p>Class មិនប្រើ Memory សម្រាប់ Instance ទេ។ Memory ត្រូវប្រើពេលបង្កើត Object ដោយ <code>new</code>។</p></div>`
    },
    {
      title: "សសរស្តម្ភទាំងបួននៃ OOP",
      html: `<p>OOP មានសសរស្តម្ភសំខាន់បួន៖</p>
<h3>1. Encapsulation (ការវេចខ្ចប់)</h3>
<p>រួមបញ្ចូលទិន្នន័យ និង Method ក្នុង Class តែមួយ ហើយលាក់ទិន្នន័យខាងក្នុងដោយ <code>private</code>។ ចូលប្រើបានតាម Getter/Setter។</p>
<h3>2. Inheritance (ការទទួលមរតក)</h3>
<p>Class ថ្មីអាចទទួល Attribute និង Method ពី Class ដើម ដោយប្រើ <code>extends</code>។ នេះកាត់បន្ថយការចម្លងកូដ។</p>
<h3>3. Polymorphism (ពហុរូបភាព)</h3>
<p>Object តែមួយអាចបង្ហាញអាកប្បកិរិយាខុសគ្នាតាម Context។ ឧ. Method ឈ្មោះ <code>draw()</code> អាចធ្វើការខុសគ្នាលើ Circle និង Rectangle។</p>
<h3>4. Abstraction (ការអរូបី)</h3>
<p>លាក់ភាពស្មុគស្មាញ ហើយបង្ហាញតែអ្វីដែលចាំបាច់។ ប្រើ <code>abstract class</code> ឬ <code>interface</code>។</p>
<div class="callout tip"><div class="callout-title">ចងចាំងាយ</div><p><strong>E</strong>ncapsulation, <strong>I</strong>nheritance, <strong>P</strong>olymorphism, <strong>A</strong>bstract — ហៅកាត់ថា EIPA។</p></div>`
    },
    {
      title: "ហេតុអ្វីត្រូវប្រើ OOP?",
      html: `<p>OOP ជួយឱ្យកូដធំៗអាចគ្រប់គ្រងបាន៖</p>
<ul>
<li><strong>Modularity</strong>៖ បែងចែកកម្មវិធីជាផ្នែកតូចៗ (Class)។</li>
<li><strong>Reusability</strong>៖ Inheritance និង Composition ជួយប្រើកូដឡើងវិញ។</li>
<li><strong>Maintainability</strong>៖ កែ Class មួយដោយមិនប៉ះពាល់ផ្នែកផ្សេង។</li>
<li><strong>Security</strong>៖ Encapsulation លាក់ទិន្នន័យសំខាន់។</li>
<li><strong>Real-world modeling</strong>៖ Object តំណាងវត្ថុពិត ដូចជា User, Order, Product។</li>
</ul>
<p>ឧទាហរណ៍កម្មវិធីហាងលក់ទំនិញអាចមាន Class <code>Product</code>, <code>Customer</code>, <code>Order</code> និង <code>Payment</code>។ ម្នាក់ៗទទួលខុសត្រូវការងាររបស់ខ្លួន។</p>
<div class="callout info"><div class="callout-title">OOP មិនមែនសម្រាប់គ្រប់ករណី</div><p>សម្រាប់ Script តូច ឬការគណនាសាមញ្ញ OOP អាចធ្វើឱ្យស្មុគស្មាញលើស។ ប៉ុន្តែសម្រាប់កម្មវិធីធំ OOP មានប្រយោជន៍ខ្លាំង។</p></div>`
    },
    {
      title: "ឧទាហរណ៍ OOP សាមញ្ញ",
      html: `<p>សូមមើល Class <code>Student</code> ដែលរួមបញ្ចូលទិន្នន័យ និងអាកប្បកិរិយា៖</p>
<pre><code>class Student {
    String name;
    int score;

    void introduce() {
        System.out.println("My name is " + name);
    }

    String getGrade() {
        if (score &gt;= 90) return "A";
        if (score &gt;= 80) return "B";
        return "C";
    }
}</code></pre>
<p>ការប្រើ៖</p>
<pre><code>Student s1 = new Student();
s1.name = "Dara";
s1.score = 85;
s1.introduce();
System.out.println(s1.getGrade());</code></pre>
<p>Object <code>s1</code> មានទិន្នន័យ (name, score) និងអាចធ្វើសកម្មភាព (introduce, getGrade)។ នេះជាមូលដ្ឋាននៃ OOP។</p>`
    }
  ],
  terms: [
    { en: "Class", kh: "ថ្នាក់", text: "គំរូសម្រាប់បង្កើត Object។" },
    { en: "Object", kh: "វត្ថុ", text: "Instance ពិតដែលបង្កើតពី Class។" },
    { en: "Attribute", kh: "លក្ខណៈ", text: "ទិន្នន័យ ឬ Field របស់ Object។" },
    { en: "Method", kh: "អនុគមន៍", text: "អាកប្បកិរិយា ឬសកម្មភាពរបស់ Object។" },
    { en: "Encapsulation", kh: "ការវេចខ្ចប់", text: "ការលាក់ទិន្នន័យ និងផ្តល់ Access តាម Method។" },
    { en: "Inheritance", kh: "មរតក", text: "Class ថ្មីទទួលលក្ខណៈពី Class ដើម។" },
    { en: "Polymorphism", kh: "ពហុរូបភាព", text: "Object តែមួយបង្ហាញអាកប្បកិរិយាច្រើនបែប។" }
  ],
  syntax: [
    { label: "Class", code: "class Car {\n    String brand;\n    void drive() { }\n}" },
    { label: "Object", code: "Car car = new Car();\ncar.brand = \"Toyota\";\ncar.drive();" },
    { label: "Inheritance", code: "class Dog extends Animal { }" },
    { label: "Encapsulation", code: "private int age;\npublic int getAge() { return age; }" }
  ],
  examples: [
    {
      title: "Class Car",
      desc: "បង្កើត Class Car និង Object ពីរដែលមានទិន្នន័យខុសគ្នា។",
      file: "CarDemo.java",
      code: `class Car {
    String brand;
    int speed;

    void drive() {
        System.out.println(brand + " is driving at " + speed + " km/h");
    }
}

public class CarDemo {
    public static void main(String[] args) {
        Car car1 = new Car();
        car1.brand = "Toyota";
        car1.speed = 80;

        Car car2 = new Car();
        car2.brand = "Honda";
        car2.speed = 60;

        car1.drive();
        car2.drive();
    }
}`,
      output: "Toyota is driving at 80 km/h\nHonda is driving at 60 km/h",
      lines: [
        "Class <code>Car</code> កំណត់ Attribute និង Method រួម។",
        "<code>new Car()</code> បង្កើត Object ថ្មីដាច់ដោយឡែក។",
        "car1 និង car2 មានទិន្នន័យរៀងៗខ្លួន។",
        "ការហៅ <code>drive()</code> ប្រើទិន្នន័យរបស់ Object នោះ។"
      ]
    },
    {
      title: "Class Student",
      desc: "Class Student ដែលមានទាំងទិន្នន័យ និង Method គណនានិទស្សន្ត។",
      file: "StudentDemo.java",
      code: `class Student {
    String name;
    int score;

    void introduce() {
        System.out.println("I am " + name);
    }

    String grade() {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        return "F";
    }
}

public class StudentDemo {
    public static void main(String[] args) {
        Student s = new Student();
        s.name = "Dara";
        s.score = 85;

        s.introduce();
        System.out.println("Grade: " + s.grade());
    }
}`,
      output: "I am Dara\nGrade: B",
      lines: [
        "Class រួមបញ្ចូល Field និង Method ដែលទាក់ទងគ្នា។",
        "<code>introduce()</code> បង្ហាញឈ្មោះរបស់ Object។",
        "<code>grade()</code> ប្រើ score ដើម្បីគណនានិទស្សន្ត។",
        "Method អាចចូលប្រើ Field របស់ Object បានដោយផ្ទាល់។"
      ]
    },
    {
      title: "Class Rectangle",
      desc: "ឧទាហរណ៍បន្ថែមដែលរួមបញ្ចូលទិន្នន័យ (width, height) និងអាកប្បកិរិយា (area) ក្នុង Class តែមួយ។",
      file: "RectangleDemo.java",
      code: `class Rectangle {
    double width;
    double height;

    double area() {
        return width * height;
    }

    double perimeter() {
        return 2 * (width + height);
    }
}

public class RectangleDemo {
    public static void main(String[] args) {
        Rectangle r = new Rectangle();
        r.width = 4;
        r.height = 5;

        System.out.println("Area: " + r.area());
        System.out.println("Perimeter: " + r.perimeter());
    }
}`,
      output: "Area: 20.0\nPerimeter: 18.0",
      lines: [
        "Rectangle រួមបញ្ចូលទិន្នន័យ និង Method គណនាដែលពាក់ព័ន្ធ។",
        "<code>area()</code> និង <code>perimeter()</code> ប្រើ Field របស់ Object ខ្លួនឯង។",
        "Object ថ្មីនីមួយៗមាន width និង height ដាច់ដោយឡែក។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ភ្លេច new</span><br><code>Car car;</code> ហើយហៅ <code>car.drive()</code> បណ្តាលឱ្យ NullPointerException។', fix: "បង្កើត Object ដោយ <code>Car car = new Car();</code>។" },
    { text: '<span class="bad-code">❌ ប្រើ Class ដោយផ្ទាល់</span><br>ហៅ <code>Car.drive()</code> ពេល drive មិនមែន static។', fix: "ហៅលើ Object៖ <code>car.drive()</code>។" }
  ],
  tips: [
    "ឈ្មោះ Class គួរជា Noun និងចាប់ផ្តើមដោយអក្សរធំ (PascalCase)។",
    "ឈ្មោះ Field និង Method ចាប់ផ្តើមដោយអក្សរតូច (camelCase)។",
    "Class គួរទទួលខុសត្រូវតែមួយ (Single Responsibility)។"
  ],
  exercises: [
    {
      level: 1,
      title: "Class Book",
      desc: "បង្កើត Class <code>Book</code> មាន title និង author ព្រមទាំង Method <code>show()</code>។",
      requirements: ["មាន Field ពីរ", "មាន Method show", "បង្កើត Object និងហៅ"],
      outputSample: "Title: Java Basics\nAuthor: Dara",
      hint: "ប្រើ <code>class Book { String title; String author; void show() {...} }</code>។",
      solutionCode: `class Book {
    String title;
    String author;

    void show() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
    }
}

public class BookDemo {
    public static void main(String[] args) {
        Book b = new Book();
        b.title = "Java Basics";
        b.author = "Dara";
        b.show();
    }
}`
    },
    {
      level: 2,
      title: "Class Rectangle",
      desc: "បង្កើត Class <code>Rectangle</code> ដែលគណនាផ្ទៃក្រឡា។",
      requirements: ["Field width និង height", "Method area()", "បង្ហាញលទ្ធផល"],
      inputSample: "width=4, height=5",
      outputSample: "Area: 20",
      hint: "Method return <code>width * height</code>។",
      solutionCode: `class Rectangle {
    int width;
    int height;

    int area() {
        return width * height;
    }
}

public class RectangleDemo {
    public static void main(String[] args) {
        Rectangle r = new Rectangle();
        r.width = 4;
        r.height = 5;
        System.out.println("Area: " + r.area());
    }
}`
    },
    {
      level: 2,
      title: "Class Product",
      desc: "បង្កើត Class <code>Product</code> មាន name, price និង quantity ព្រមទាំង Method <code>total()</code> ដែលគុណ price នឹង quantity។",
      requirements: ["Field name, price, quantity", "Method total() ត្រឡប់តម្លៃសរុប", "បង្កើត Object និងបង្ហាញលទ្ធផល"],
      inputSample: "price=2500, quantity=6",
      outputSample: "Product: Notebook\nTotal: 15000.0",
      hint: "Method <code>total()</code> ត្រឡប់ <code>price * quantity</code>; កំណត់ price ជា <code>double</code>។",
      solutionCode: `class Product {
    String name;
    double price;
    int quantity;

    double total() {
        return price * quantity;
    }
}

public class ProductDemo {
    public static void main(String[] args) {
        Product p = new Product();
        p.name = "Notebook";
        p.price = 2500;
        p.quantity = 6;
        System.out.println("Product: " + p.name);
        System.out.println("Total: " + p.total());
    }
}`
    },
    {
      level: 3,
      title: "Class BankAccount",
      desc: "បង្កើត Class <code>BankAccount</code> មាន balance និង Method deposit និង withdraw (មិនទាន់ប្រើ private)។",
      requirements: ["Field balance", "Method deposit", "Method withdraw", "បង្ហាញ balance"],
      inputSample: "deposit 100, withdraw 40",
      outputSample: "Balance: 60.0",
      hint: "ប្រើ <code>balance += amount;</code> និង <code>balance -= amount;</code>។",
      solutionCode: `class BankAccount {
    double balance;

    void deposit(double amount) {
        balance += amount;
    }

    void withdraw(double amount) {
        balance -= amount;
    }
}

public class BankDemo {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();
        acc.deposit(100);
        acc.withdraw(40);
        System.out.println("Balance: " + acc.balance);
    }
}`
    },
    {
      level: 1,
      title: "Class Laptop",
      desc: "បង្កើត Class <code>Laptop</code> មាន brand និង price ព្រមទាំង Method <code>show()</code> បង្ហាញព័ត៌មាន។",
      requirements: ["Field brand និង price", "Method show", "បង្កើត Object មួយ"],
      outputSample: "Brand: Dell\nPrice: 750.0",
      hint: "ប្រើ <code>class Laptop { String brand; double price; void show() {...} }</code>។",
      solutionCode: `class Laptop {
    String brand;
    double price;

    void show() {
        System.out.println("Brand: " + brand);
        System.out.println("Price: " + price);
    }
}

public class LaptopDemo {
    public static void main(String[] args) {
        Laptop l = new Laptop();
        l.brand = "Dell";
        l.price = 750.0;
        l.show();
    }
}`
    },
    {
      level: 2,
      title: "Class Temperature",
      desc: "បង្កើត Class <code>Temperature</code> មាន Field celsius និង Method <code>toFahrenheit()</code>។",
      requirements: ["Field celsius", "Method toFahrenheit", "បង្ហាញលទ្ធផល"],
      inputSample: "celsius=25",
      outputSample: "Fahrenheit: 77.0",
      hint: "រូបមន្ត <code>celsius * 9 / 5 + 32</code>។",
      solutionCode: `class Temperature {
    double celsius;

    double toFahrenheit() {
        return celsius * 9 / 5 + 32;
    }
}

public class TemperatureDemo {
    public static void main(String[] args) {
        Temperature t = new Temperature();
        t.celsius = 25;
        System.out.println("Fahrenheit: " + t.toFahrenheit());
    }
}`
    },
    {
      level: 3,
      title: "Class ShoppingCart",
      desc: "បង្កើត Class <code>ShoppingCart</code> ដែលបូកបញ្ចូលតម្លៃទំនិញ និងរាប់ចំនួនទំនិញ។",
      requirements: ["Field itemCount និង total", "Method addItem(double price)", "Method show"],
      inputSample: "add 10, add 15.5",
      outputSample: "Items: 2\nTotal: 25.5",
      hint: "បង្កើន <code>itemCount++</code> និង <code>total += price</code> ក្នុង addItem។",
      solutionCode: `class ShoppingCart {
    int itemCount;
    double total;

    void addItem(double price) {
        itemCount++;
        total += price;
    }

    void show() {
        System.out.println("Items: " + itemCount);
        System.out.println("Total: " + total);
    }
}

public class CartDemo {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem(10);
        cart.addItem(15.5);
        cart.show();
    }
}`
    },
    {
      level: 3,
      title: "Class Employee",
      desc: "បង្កើត Class <code>Employee</code> មាន name និង salary ព្រមទាំង Method <code>raise(percent)</code> បង្កើនប្រាក់ខែ។",
      requirements: ["Field name និង salary", "Method raise(double percent)", "Method show"],
      inputSample: "salary=500, raise 10",
      outputSample: "Name: Sokha\nNew salary: 550.0",
      hint: "ប្រើ <code>salary += salary * percent / 100;</code>។",
      solutionCode: `class Employee {
    String name;
    double salary;

    void raise(double percent) {
        salary += salary * percent / 100;
    }

    void show() {
        System.out.println("Name: " + name);
        System.out.println("New salary: " + salary);
    }
}

public class EmployeeDemo {
    public static void main(String[] args) {
        Employee e = new Employee();
        e.name = "Sokha";
        e.salary = 500;
        e.raise(10);
        e.show();
    }
}`
    },
    {
      level: 2,
      title: "Class Laptop",
      desc: "បង្កើត Class <code>Laptop</code> មាន Field brand, ram និង Method <code>info()</code> ដែលបង្ហាញព័ត៌មាន។",
      requirements: ["Field ពីរ", "Method info()", "បង្កើត Object និងហៅ Method"],
      outputSample: "Asus, 16GB RAM",
      hint: "បង្កើត Object ដោយ <code>new Laptop()</code> រួចកំណត់ Field មុនហៅ info()។",
      solutionCode: `class Laptop {
    String brand;
    int ram;

    void info() {
        System.out.println(brand + ", " + ram + "GB RAM");
    }
}

public class LaptopDemo {
    public static void main(String[] args) {
        Laptop laptop = new Laptop();
        laptop.brand = "Asus";
        laptop.ram = 16;
        laptop.info();
    }
}`,
      solution: "Class កំណត់ Field និង Method។ Object ដែលបង្កើតដោយ new មានទិន្នន័យផ្ទាល់ខ្លួន។"
    },
    {
      level: 3,
      title: "Array នៃ Object",
      desc: "បង្កើត Array នៃ Object <code>Student</code> រួចគណនាមធ្យមភាគពិន្ទុរបស់សិស្សទាំងអស់។",
      requirements: ["Class Student មាន name, score", "បង្កើត Student[]", "គណនា Average"],
      outputSample: "Dara: 80\nSok: 90\nAverage: 85.0",
      hint: "ប្រើ For-each លើ <code>Student[]</code> ដើម្បីបូកពិន្ទុ រួចចែកនឹង <code>students.length</code>។",
      solutionCode: `class Student {
    String name;
    int score;
}

public class StudentArrayDemo {
    public static void main(String[] args) {
        Student[] students = new Student[2];
        students[0] = new Student();
        students[0].name = "Dara";
        students[0].score = 80;
        students[1] = new Student();
        students[1].name = "Sok";
        students[1].score = 90;

        int total = 0;
        for (Student s : students) {
            System.out.println(s.name + ": " + s.score);
            total += s.score;
        }
        System.out.println("Average: " + (double) total / students.length);
    }
}`,
      solution: "Array ផ្ទុក Reference ទៅ Object។ For-each ចូលប្រើ Field របស់ Object នីមួយៗ ហើយគណនាមធ្យមភាគ។"
    }
  ],
  quiz: [
    { q: "តើ Class គឺជាអ្វី?", options: ["Object ពិត", "Blueprint សម្រាប់ Object", "Method", "Variable"], answer: 1, explain: "Class ជាគំរូ; Object ជា Instance ពិតដែលបង្កើតពី Class។" },
    { q: "តើ <code>new</code> ធ្វើអ្វី?", options: ["បង្កើត Class", "បង្កើត Object", "ហៅ Method", "លុប Object"], answer: 1, explain: "new បម្រុង Memory និងបង្កើត Object ថ្មី។" },
    { q: "តើសសរស្តម្ភណាមិនមែនជារបស់ OOP?", options: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"], answer: 2, explain: "Compilation ជាដំណើរការរបស់ Compiler មិនមែនសសរស្តម្ភ OOP។" },
    { q: "តើ Encapsulation ជួយអ្វី?", options: ["លាក់ទិន្នន័យ", "បង្កើត Loop", "បង្កើត Array", "គណនាលេខ"], answer: 0, explain: "Encapsulation លាក់ទិន្នន័យខាងក្នុង និងផ្តល់ Access តាម Method។" },
    { q: "តើ Object ពីរពី Class តែមួយអាចមានទិន្នន័យខុសគ្នាទេ?", options: ["មិនបាន", "បាន", "បានតែ static", "បានតែ Class ដូចគ្នា"], answer: 1, explain: "Object នីមួយៗមាន Instance Field រៀងៗខ្លួន។" }
  ],
  summary: [
    "OOP រៀបចំកូដជុំវិញ Class និង Object។",
    "Class ជា Blueprint; Object ជា Instance ពិត។",
    "សសរស្តម្ភទាំងបួន៖ Encapsulation, Inheritance, Polymorphism, Abstraction។",
    "OOP ជួយ Modularity, Reusability និង Maintainability។",
    "Object មានទិន្នន័យ (Field) និងអាកប្បកិរិយា (Method)។"
  ],
  takeaways: [
    "Class គឺជាគំរូ មិនមែនវត្ថុពិតទេ។",
    "Object ត្រូវបង្កើតដោយ new មុនប្រើ។",
    "OOP ជួយឱ្យកូដធំអាចគ្រប់គ្រងបាន។",
    "សសរស្តម្ភទាំងបួនជាមូលដ្ឋានសម្រាប់មេរៀនបន្ទាប់។"
  ],
  sources: [
    { label: "Oracle — Object-Oriented Programming Concepts", url: "https://docs.oracle.com/javase/tutorial/java/concepts/" },
    { label: "W3Schools — Java OOP", url: "https://www.w3schools.com/java/java_oop.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "classes-objects",
  num: 15,
  part: 12,
  partTitle: "Object-Oriented Programming",
  title: "Classes and Objects",
  titleKh: "Class និង Object",
  time: "៧៥ នាទី",
  level: 3,
  intro: "មេរៀននេះអនុវត្តការបង្កើត Class និង Object លម្អិត៖ Field, Method, Access ពី Object, Reference, Object ច្រើន, NullPointerException និង <code>toString()</code>។ អ្នកនឹងសរសេរ Class ពិតប្រាកដ និងយល់ពីរបៀប Object រស់នៅក្នុង Memory។",
  objectives: [
    "ប្រកាស Class ជាមួយ Field និង Method។",
    "បង្កើត និងប្រើ Object ច្រើន។",
    "យល់ពី Object Reference និង NullPointerException។",
    "Override <code>toString()</code> ដើម្បីបង្ហាញ Object។",
    "យល់ពីភាពខុសគ្នារវាង Field និង Local Variable។"
  ],
  sections: [
    {
      title: "ប្រកាស Class ពេញលេញ",
      html: `<p>Class ធម្មតាមាន Field, Constructor និង Method។ ខាងក្រោមនេះជាឧទាហរណ៍៖</p>
<pre><code>public class Student {
    // fields
    String name;
    int age;
    double score;

    // method
    void display() {
        System.out.println(name + " (" + age + ") - " + score);
    }

    boolean isPassed() {
        return score &gt;= 50;
    }
}</code></pre>
<p>Field គឺ Variable កម្រិត Class ដែល Object នីមួយៗមានចម្លងផ្ទាល់ខ្លួន (លុះត្រាតែជា <code>static</code>)។ Method គឺសកម្មភាពដែល Object អាចធ្វើ។</p>
<div class="callout info"><div class="callout-title">Default Values</div><p>Field ដែលមិនបានកំណត់តម្លៃមាន Default ដូចជា 0, 0.0, false ឬ null។ ផ្ទុយពី Local Variable ក្នុង Method ដែលត្រូវ Initialize មុនប្រើ។</p></div>`
    },
    {
      title: "បង្កើត និងប្រើ Object",
      html: `<p>Object ត្រូវបង្កើតដោយ <code>new</code> ហើយរក្សាទុកក្នុង Variable ជា Reference៖</p>
<pre><code>Student s1 = new Student();
s1.name = "Dara";
s1.age = 20;
s1.score = 85.5;
s1.display();

Student s2 = new Student();
s2.name = "Sok";
s2.score = 45;
System.out.println(s2.isPassed());   // false</code></pre>
<p><code>s1</code> មិនមែនផ្ទុក Object ដោយផ្ទាល់ទេ — វាផ្ទុក <strong>Reference</strong> ដែលចង្អុលទៅ Object ក្នុង Heap Memory។</p>
<h3>Object ច្រើនចង្អុល Object តែមួយ</h3>
<pre><code>Student a = new Student();
a.name = "Mona";

Student b = a;          // copies the reference
b.name = "Vichea";

System.out.println(a.name);   // Vichea</code></pre>
<div class="callout warn"><div class="callout-title">Reference Copy</div><p><code>Student b = a;</code> មិនចម្លង Object ទេ — វាចម្លង Reference។ ដូច្នេះ a និង b ចង្អុល Object តែមួយ។ បើចង់ចម្លងពិត ត្រូវសរសេរ Copy Constructor ឬ Method ដោយឡែក។</p></div>`
    },
    {
      title: "NullPointerException",
      html: `<p>ប្រសិនបើ Reference មិនចង្អុលទៅ Object ណាមួយ (null) ហើយអ្នកព្យាយាមចូលប្រើ Field ឬ Method នោះ Java បោះ <strong>NullPointerException</strong>។</p>
<pre><code>Student s = null;
// s.name = "Dara";      // NullPointerException</code></pre>
<p>ត្រូវពិនិត្យ null មុនប្រើ ឬធានាថា Object ត្រូវបានបង្កើត៖</p>
<pre><code>if (s != null) {
    System.out.println(s.name);
} else {
    System.out.println("Student is null");
}</code></pre>
<div class="callout tip"><div class="callout-title">ការជៀសវាង</div><p>កុំកំណត់ Object ជា null ដោយមិនចាំបាច់។ ពេលទទួល Parameter ជា Object សូមពិនិត្យ null បើចាំបាច់។</p></div>`
    },
    {
      title: "toString()",
      html: `<p>ពេលអ្នក <code>System.out.println(object)</code> Java ហៅ Method <code>toString()</code> របស់ Object។ បើមិន Override វានឹងបង្ហាញដូច <code>Student@1b6d3586</code> ដែលមិនមានប្រយោជន៍។</p>
<pre><code>@Override
public String toString() {
    return "Student{name='" + name + "', score=" + score + "}";
}</code></pre>
<p>បន្ទាប់មក៖</p>
<pre><code>Student s = new Student();
s.name = "Dara";
s.score = 85;
System.out.println(s);   // Student{name='Dara', score=85.0}</code></pre>
<div class="callout info"><div class="callout-title">@Override</div><p><code>@Override</code> ជា Annotation ដែលបញ្ជាក់ថាអ្នកកំពុង Override Method ពី Superclass។ វាជួយឱ្យ Compiler ពិនិត្យថាឈ្មោះ និង Signature ត្រឹមត្រូវ។</p></div>`
    },
    {
      title: "Field និង Local Variable",
      html: `<p><strong>Field</strong> ប្រកាសក្នុង Class ខាងក្រៅ Method។ <strong>Local Variable</strong> ប្រកាសក្នុង Method ឬ Block។</p>
<div class="table-wrap"><table><thead><tr><th>ចំណុច</th><th>Field</th><th>Local Variable</th></tr></thead><tbody>
<tr><td>ទីតាំងប្រកាស</td><td>ក្នុង Class</td><td>ក្នុង Method/Block</td></tr>
<tr><td>Default Value</td><td>មាន</td><td>គ្មាន (ត្រូវ Initialize)</td></tr>
<tr><td>Scope</td><td>ពេញ Class</td><td>ត្រឹម Block</td></tr>
<tr><td>Memory</td><td>Heap (តាម Object)</td><td>Stack</td></tr>
</tbody></table></div>
<pre><code>public class Counter {
    int count = 0;              // field

    void increment() {
        int step = 1;           // local variable
        count += step;
    }
}</code></pre>
<div class="callout warn"><div class="callout-title">Shadowing</div><p>ប្រសិនបើ Local Variable មានឈ្មោះដូច Field នោះវានឹង “បិទបាំង” Field ក្នុង Scope នោះ។ ប្រើ <code>this.name</code> ដើម្បីយោង Field ឱ្យច្បាស់។</p></div>`
    }
  ],
  terms: [
    { en: "Instance", kh: "ធាតុពិត", text: "Object ដែលបង្កើតពី Class។" },
    { en: "Field", kh: "ដែនទិន្នន័យ", text: "Variable កម្រិត Class។" },
    { en: "Reference", kh: "ការយោង", text: "អាសយដ្ឋានដែលចង្អុលទៅ Object។" },
    { en: "Null", kh: "ទទេ", text: "Reference ដែលមិនចង្អុលទៅ Object ណាមួយ។" },
    { en: "Heap", kh: "ជង់ទិន្នន័យ", text: "តំបន់ Memory សម្រាប់ Object។" }
  ],
  syntax: [
    { label: "Class with fields", code: "public class Student {\n    String name;\n    int age;\n}" },
    { label: "Create object", code: "Student s = new Student();" },
    { label: "Access field", code: "s.name = \"Dara\";\nSystem.out.println(s.name);" },
    { label: "Call method", code: "s.display();" },
    { label: "toString", code: "public String toString() {\n    return name + \": \" + score;\n}" }
  ],
  examples: [
    {
      title: "Class Product",
      desc: "បង្កើត Class Product ជាមួយ Field និង Method គណនាតម្លៃសរុប។",
      file: "ProductDemo.java",
      code: `class Product {
    String name;
    double price;
    int quantity;

    double total() {
        return price * quantity;
    }

    @Override
    public String toString() {
        return name + " x" + quantity + " = $" + total();
    }
}

public class ProductDemo {
    public static void main(String[] args) {
        Product p = new Product();
        p.name = "Notebook";
        p.price = 2.5;
        p.quantity = 4;

        System.out.println(p);
    }
}`,
      output: "Notebook x4 = $10.0",
      lines: [
        "Field ទាំងបីរក្សាទិន្នន័យរបស់ Product។",
        "<code>total()</code> គណនាតម្លៃសរុប។",
        "<code>toString()</code> កំណត់អ្វីដែលបង្ហាញពេល println។",
        "បើគ្មាន toString នោះ println នឹងបង្ហាញ Reference។"
      ]
    },
    {
      title: "Object ច្រើន",
      desc: "បង្កើត Object ច្រើនពី Class តែមួយ ហើយគណនាផលបូក។",
      file: "MultipleObjects.java",
      code: `class Item {
    String name;
    int price;
}

public class MultipleObjects {
    public static void main(String[] args) {
        Item i1 = new Item();
        i1.name = "Pen";
        i1.price = 2;

        Item i2 = new Item();
        i2.name = "Book";
        i2.price = 10;

        int total = i1.price + i2.price;
        System.out.println(i1.name + " + " + i2.name + " = $" + total);
    }
}`,
      output: "Pen + Book = $12",
      lines: [
        "i1 និង i2 ជា Object ដាច់ដោយឡែក។",
        "ការកែ i1 មិនប៉ះពាល់ i2។",
        "Field របស់ Object អាចប្រើក្នុងការគណនា។"
      ]
    },
    {
      title: "Reference Copy",
      desc: "បង្ហាញថាការចម្លង Reference ធ្វើឱ្យ Object ពីរចង្អុលទៅទីតាំងតែមួយ។",
      file: "ReferenceDemo.java",
      code: `class Box {
    int value;
}

public class ReferenceDemo {
    public static void main(String[] args) {
        Box a = new Box();
        a.value = 10;

        Box b = a;
        b.value = 99;

        System.out.println("a.value = " + a.value);
        System.out.println("b.value = " + b.value);
    }
}`,
      output: "a.value = 99\nb.value = 99",
      lines: [
        "<code>Box b = a;</code> ចម្លង Reference មិនមែន Object។",
        "a និង b ចង្អូល Object តែមួយក្នុង Heap។",
        "ការកែតាម b ក៏ឃើញតាម a ដែរ។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ NullPointerException</span><br>ហៅ Method លើ Object ដែលជា null។', fix: "បង្កើត Object ដោយ new ឬពិនិត្យ null មុនប្រើ។" },
    { text: '<span class="bad-code">❌ គិតថា = ចម្លង Object</span><br><code>Box b = a;</code> គ្រាន់តែចម្លង Reference។', fix: "សរសេរ Copy Constructor បើត្រូវការចម្លងពិត។" },
    { text: '<span class="bad-code">❌ ភ្លេច Initialize Local Variable</span><br>ប្រើ Local Variable មុនកំណត់តម្លៃ។', fix: "កំណត់តម្លៃមុនប្រើ។ Field មាន Default តែ Local មិនមានទេ។" }
  ],
  tips: [
    "ប្រើ <code>toString()</code> សម្រាប់ Debug និងបង្ហាញ Object។",
    "ប្រយ័ត្នការចម្លង Reference។",
    "ដាក់ Field ជា private ពេលអាចធ្វើបាន (នឹងរៀនក្នុង Encapsulation)។",
    "ឈ្មោះ Field គួរបញ្ជាក់អត្ថន័យ។"
  ],
  exercises: [
    {
      level: 1,
      title: "Class Person",
      desc: "បង្កើត Class <code>Person</code> មាន name និង age ព្រមទាំង Method <code>introduce()</code>។",
      requirements: ["Field ពីរ", "Method introduce", "បង្កើត Object"],
      outputSample: "I am Dara, 20 years old",
      hint: "បង្ហាញដោយ <code>System.out.println(\"I am \" + name + \", \" + age + \" years old\");</code>។",
      solutionCode: `class Person {
    String name;
    int age;

    void introduce() {
        System.out.println("I am " + name + ", " + age + " years old");
    }
}

public class PersonDemo {
    public static void main(String[] args) {
        Person p = new Person();
        p.name = "Dara";
        p.age = 20;
        p.introduce();
    }
}`
    },
    {
      level: 2,
      title: "Class Circle",
      desc: "បង្កើត Class <code>Circle</code> មាន radius និង Method <code>area()</code> និង <code>circumference()</code>។",
      requirements: ["Field radius", "Method ពីរ", "ប្រើ Math.PI"],
      inputSample: "radius=3",
      outputSample: "Area: 28.274333882308138",
      hint: "<code>Math.PI * radius * radius</code>។",
      solutionCode: `class Circle {
    double radius;

    double area() {
        return Math.PI * radius * radius;
    }

    double circumference() {
        return 2 * Math.PI * radius;
    }
}

public class CircleDemo {
    public static void main(String[] args) {
        Circle c = new Circle();
        c.radius = 3;
        System.out.println("Area: " + c.area());
    }
}`
    },
    {
      level: 2,
      title: "toString សម្រាប់ Book",
      desc: "បង្កើត Class <code>Book</code> និង Override <code>toString()</code> ដើម្បីបង្ហាញ title និង price។",
      requirements: ["Override toString", "បង្ហាញដោយ println(object)", "មាន Field ពីរ"],
      outputSample: "Book{title='Java', price=25.0}",
      hint: "ប្រើ <code>@Override public String toString()</code>។",
      solutionCode: `class Book {
    String title;
    double price;

    @Override
    public String toString() {
        return "Book{title='" + title + "', price=" + price + "}";
    }
}

public class BookToString {
    public static void main(String[] args) {
        Book b = new Book();
        b.title = "Java";
        b.price = 25.0;
        System.out.println(b);
    }
}`
    },
    {
      level: 3,
      title: "Class Wallet",
      desc: "បង្កើត Class <code>Wallet</code> មាន Method add និង spend ដែលគ្រប់គ្រង balance។",
      requirements: ["Field balance", "Method add", "Method spend", "Method show"],
      inputSample: "add 50, spend 20",
      outputSample: "Balance: 30.0",
      hint: "ប្រើ <code>balance -= amount</code> ក្នុង spend។",
      solutionCode: `class Wallet {
    double balance;

    void add(double amount) {
        balance += amount;
    }

    void spend(double amount) {
        balance -= amount;
    }

    void show() {
        System.out.println("Balance: " + balance);
    }
}

public class WalletDemo {
    public static void main(String[] args) {
        Wallet w = new Wallet();
        w.add(50);
        w.spend(20);
        w.show();
    }
}`
    },
    {
      level: 1,
      title: "Class Dog",
      desc: "បង្កើត Class <code>Dog</code> មាន name និង Method <code>bark()</code> ដែលបង្ហាញសំឡេង។",
      requirements: ["Field name", "Method bark", "បង្កើត Object"],
      outputSample: "Dara says Woof!",
      hint: "ប្រើ <code>System.out.println(name + \" says Woof!\");</code>។",
      solutionCode: `class Dog {
    String name;

    void bark() {
        System.out.println(name + " says Woof!");
    }
}

public class DogDemo {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.name = "Dara";
        d.bark();
    }
}`
    },
    {
      level: 2,
      title: "Class Counter",
      desc: "បង្កើត Class <code>Counter</code> ដែលអាចបង្កើន និងកំណត់ឡើងវិញតម្លៃរាប់។",
      requirements: ["Field count", "Method increment", "Method reset", "Method show"],
      outputSample: "Count: 2\nCount: 0",
      hint: "ប្រើ <code>count++</code> និង <code>count = 0</code>។",
      solutionCode: `class Counter {
    int count;

    void increment() {
        count++;
    }

    void reset() {
        count = 0;
    }

    void show() {
        System.out.println("Count: " + count);
    }
}

public class CounterDemo {
    public static void main(String[] args) {
        Counter c = new Counter();
        c.increment();
        c.increment();
        c.show();
        c.reset();
        c.show();
    }
}`
    },
    {
      level: 3,
      title: "Class Inventory",
      desc: "បង្កើត Class <code>Inventory</code> សម្រាប់បន្ថែម និងដកចំនួនទំនិញ ដោយមិនឱ្យចំនួនតិចជាងសូន្យ។",
      requirements: ["Field quantity", "Method add(int n)", "Method remove(int n)", "Method show"],
      inputSample: "add 10, remove 3, remove 20",
      outputSample: "Quantity: 7",
      hint: "ក្នុង remove ពិនិត្យ <code>if (n &lt;= quantity)</code> មុនដក។",
      solutionCode: `class Inventory {
    int quantity;

    void add(int n) {
        if (n > 0) quantity += n;
    }

    void remove(int n) {
        if (n > 0 && n <= quantity) quantity -= n;
    }

    void show() {
        System.out.println("Quantity: " + quantity);
    }
}

public class InventoryDemo {
    public static void main(String[] args) {
        Inventory inv = new Inventory();
        inv.add(10);
        inv.remove(3);
        inv.remove(20);
        inv.show();
    }
}`
    },
    {
      level: 3,
      title: "Class Course",
      desc: "បង្កើត Class <code>Course</code> ដែលគណនាពិន្ទុមធ្យម និងរាប់ចំនួនសិស្សជាប់។",
      requirements: ["Field scores (array)", "Method average()", "Method passed(passMark)"],
      inputSample: "scores = 70, 90, 80; passMark = 80",
      outputSample: "Average: 80.0\nPassed: 2",
      hint: "ប្រើ for-each loop ដើម្បីបូកពិន្ទុ និងរាប់អ្នកដែល <code>s &gt;= passMark</code>។",
      solutionCode: `class Course {
    String title;
    double[] scores;

    double average() {
        double sum = 0;
        for (double s : scores) sum += s;
        return scores.length == 0 ? 0 : sum / scores.length;
    }

    int passed(double passMark) {
        int count = 0;
        for (double s : scores) {
            if (s >= passMark) count++;
        }
        return count;
    }
}

public class CourseDemo {
    public static void main(String[] args) {
        Course c = new Course();
        c.title = "Java";
        c.scores = new double[]{70, 90, 80};
        System.out.println("Average: " + c.average());
        System.out.println("Passed: " + c.passed(80));
    }
}`
    }
  ],
  quiz: [
    { q: "តើ Field ខុសពី Local Variable យ៉ាងដូចម្តេច?", options: ["គ្មានភាពខុសគ្នា", "Field មាន Default Value និង Scope ពេញ Class", "Local Variable មាន Default Value", "Field មិនអាចប្រើក្នុង Method"], answer: 1, explain: "Field មាន Default Value និង Scope ពេញ Class; Local Variable ត្រូវ Initialize។" },
    { q: "តើ <code>Student b = a;</code> ធ្វើអ្វី?", options: ["ចម្លង Object", "ចម្លង Reference", "បង្កើត Object ថ្មី", "លុប a"], answer: 1, explain: "វាចម្លង Reference ដូច្នេះ b និង a ចង្អុល Object តែមួយ។" },
    { q: "តើ NullPointerException កើតឡើងពេលណា?", options: ["ប្រើ Object ជា null", "ប្រើ int", "ប្រើ String", "ប្រើ Array"], answer: 0, explain: "កើតឡើងពេលចូលប្រើ Field ឬ Method លើ Reference ដែលជា null។" },
    { q: "តើ Method ណាត្រូវ Override ដើម្បីបង្ហាញ Object អានងាយ?", options: ["equals()", "toString()", "hashCode()", "main()"], answer: 1, explain: "toString() កំណត់អត្ថបទដែលបង្ហាញពេល println(object)។" },
    { q: "តើ Object ត្រូវរក្សាទុកនៅ Memory តំបន់ណា?", options: ["Stack", "Heap", "Register", "Cache"], answer: 1, explain: "Object រស់នៅ Heap; Reference Variable នៅ Stack។" }
  ],
  summary: [
    "Class មាន Field និង Method ដែលកំណត់ទិន្នន័យ និងអាកប្បកិរិយា។",
    "Object ត្រូវបង្កើតដោយ new និងរក្សាទុកជា Reference។",
    "ការចម្លង Reference មិនចម្លង Object ទេ។",
    "NullPointerException កើតឡើងពេលប្រើ null។",
    "toString() ជួយបង្ហាញ Object ឱ្យអានងាយ។"
  ],
  takeaways: [
    "Object នីមួយៗមាន Field រៀងៗខ្លួន។",
    "Reference ចង្អុលទៅ Object; ការចម្លង Reference មិនបង្កើត Object ថ្មី។",
    "Override toString() សម្រាប់ Debug និងការបង្ហាញ។",
    "ពិនិត្យ null មុនប្រើ Object ដែលអាចជា null។"
  ],
  sources: [
    { label: "Oracle — Classes and Objects", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html" },
    { label: "W3Schools — Java Classes/Objects", url: "https://www.w3schools.com/java/java_classes.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "constructors",
  num: 16,
  part: 12,
  partTitle: "Object-Oriented Programming",
  title: "Constructors",
  titleKh: "Constructor (អ្នកបង្កើត Object)",
  time: "៦៥ នាទី",
  level: 3,
  intro: "Constructor គឺជា Method ពិសេសដែលដំណើរការដោយស្វ័យប្រវត្តិពេលបង្កើត Object។ វាប្រើដើម្បីកំណត់តម្លៃដំបូងដល់ Field។ អ្នកនឹងរៀន Default Constructor, Parameterized Constructor, Constructor Overloading, <code>this</code> និងការតភ្ជាប់ Constructor។",
  objectives: [
    "យល់ពីមុខងាររបស់ Constructor។",
    "សរសេរ Default និង Parameterized Constructor។",
    "ប្រើ <code>this</code> ដើម្បីយោង Field និង Constructor ផ្សេង។",
    "ធ្វើ Constructor Overloading បាន។",
    "យល់ពីលំដាប់ Initialization មូលដ្ឋាន។"
  ],
  sections: [
    {
      title: "Constructor គឺជាអ្វី?",
      html: `<p><strong>Constructor</strong> គឺជា Method ពិសេសដែលមានឈ្មោះដូច Class និងគ្មាន Return Type។ វាត្រូវហៅដោយស្វ័យប្រវត្តិពេលប្រើ <code>new</code>។</p>
<pre><code>public class Student {
    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}</code></pre>
<pre><code>Student s = new Student("Dara", 20);</code></pre>
<p>នៅពេល <code>new Student("Dara", 20)</code> ត្រូវហៅ Constructor ហើយ Field ត្រូវកំណត់តម្លៃភ្លាម។</p>
<div class="callout warn"><div class="callout-title">គ្មាន Return Type</div><p>ប្រសិនបើអ្នកសរសេរ <code>void Student()</code> នោះវាក្លាយជា Method ធម្មតា មិនមែន Constructor ទេ។</p></div>`
    },
    {
      title: "Default Constructor",
      html: `<p>ប្រសិនបើ Class គ្មាន Constructor សោះ Java ផ្តល់ <strong>Default Constructor</strong> ដែលគ្មាន Parameter និងគ្មានកូដ៖</p>
<pre><code>public class Dog {
    String name;
}

// Java adds: public Dog() { }
</code></pre>
<p>ដូច្នេះអ្នកអាចសរសេរ <code>new Dog()</code> បាន។ ប៉ុន្តែប្រសិនបើអ្នកសរសេរ Constructor ណាមួយដោយខ្លួនឯង Default Constructor នឹងលែងមានដោយស្វ័យប្រវត្តិ៖</p>
<pre><code>public class Dog {
    String name;

    public Dog(String name) {
        this.name = name;
    }
}

// new Dog() is now a compile error
</code></pre>
<div class="callout tip"><div class="callout-title">ដំណោះស្រាយ</div><p>បើអ្នកចង់រក្សា <code>new Dog()</code> សូមសរសេរ <code>public Dog() { }</code> ដោយខ្លួនឯងបន្ថែម។</p></div>`
    },
    {
      title: "Parameterized Constructor និង this",
      html: `<p>Parameterized Constructor ទទួល Argument ដើម្បីកំណត់តម្លៃដំបូង៖</p>
<pre><code>public class Student {
    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}</code></pre>
<p><strong>this</strong> យោងទៅ Object បច្ចុប្បន្ន។ នៅទីនេះ <code>this.name</code> គឺ Field របស់ Object ចំណែក <code>name</code> គឺ Parameter។ បើគ្មាន <code>this</code> នោះ <code>name = name</code> នឹងកំណត់ Parameter ទៅខ្លួនវា ហើយ Field នៅតែ null។</p>
<h3>ហៅ Constructor ផ្សេងដោយ this()</h3>
<pre><code>public Student(String name) {
    this(name, 0);   // calls the two-argument constructor
}

public Student(String name, int age) {
    this.name = name;
    this.age = age;
}</code></pre>
<div class="callout warn"><div class="callout-title">this() ត្រូវនៅដំបូង</div><p><code>this(...)</code> ត្រូវជា Statement ដំបូងក្នុង Constructor។</p></div>`
    },
    {
      title: "Constructor Overloading",
      html: `<p>ដូច Method ធម្មតា Constructor ក៏អាច Overload បានដែរ ដោយប្តូរចំនួន ឬ Type Parameter៖</p>
<pre><code>public class Book {
    String title;
    double price;
    int pages;

    public Book() {
        this("Unknown", 0.0, 0);
    }

    public Book(String title) {
        this(title, 0.0, 0);
    }

    public Book(String title, double price, int pages) {
        this.title = title;
        this.price = price;
        this.pages = pages;
    }
}</code></pre>
<p>ការប្រើ៖</p>
<pre><code>Book b1 = new Book();
Book b2 = new Book("Java");
Book b3 = new Book("Java", 25.0, 300);</code></pre>
<div class="callout info"><div class="callout-title">Constructor Chaining</div><p>ការហៅ Constructor មួយពី Constructor មួយទៀតដោយ <code>this(...)</code> ហៅថា Constructor Chaining។ វាកាត់បន្ថយការចម្លង Logic។</p></div>`
    },
    {
      title: "លំដាប់ Initialization",
      html: `<p>ពេលបង្កើត Object លំដាប់មូលដ្ឋានគឺ៖</p>
<ol>
<li>Field ទទួល Default Value (0, null, false)។</li>
<li>Field Initializer ដំណើរការ (ឧ. <code>int count = 5;</code>)។</li>
<li>Constructor Body ដំណើរការ។</li>
</ol>
<pre><code>public class Demo {
    int a = 10;
    int b;

    public Demo() {
        b = 20;
        System.out.println(a + ", " + b);
    }
}</code></pre>
<p>លទ្ធផលគឺ <code>10, 20</code>។ ការយល់ពីលំដាប់នេះជួយពេល Field មាន Initializer ស្មុគស្មាញ។</p>
<div class="callout tip"><div class="callout-title">Constructor មិន Inherit</div><p>Constructor មិនត្រូវ Inherit ដោយ Subclass ទេ។ Subclass ត្រូវហៅ <code>super(...)</code> ដើម្បីហៅ Constructor របស់ Superclass។</p></div>`
    }
  ],
  terms: [
    { en: "Constructor", kh: "អ្នកបង្កើត", text: "Method ពិសេសដែលដំណើរការពេលបង្កើត Object។" },
    { en: "Default Constructor", kh: "Constructor លំនាំដើម", text: "Constructor គ្មាន Parameter ដែល Java បង្កើតឱ្យ។" },
    { en: "Parameterized", kh: "មានប៉ារ៉ាម៉ែត្រ", text: "Constructor ដែលទទួល Argument។" },
    { en: "this", kh: "នេះ", text: "Keyword យោងទៅ Object បច្ចុប្បន្ន។" },
    { en: "Chaining", kh: "ការតភ្ជាប់", text: "ការហៅ Constructor មួយពី Constructor មួយទៀត។" }
  ],
  syntax: [
    { label: "Default", code: "public Student() {\n    name = \"Unknown\";\n}" },
    { label: "Parameterized", code: "public Student(String name, int age) {\n    this.name = name;\n    this.age = age;\n}" },
    { label: "Chaining", code: "public Student(String name) {\n    this(name, 0);\n}" },
    { label: "Create", code: "Student s = new Student(\"Dara\", 20);" }
  ],
  examples: [
    {
      title: "Constructor មូលដ្ឋាន",
      desc: "Class Student ដែលមាន Parameterized Constructor និង Method បង្ហាញព័ត៌មាន។",
      file: "StudentConstructor.java",
      code: `class Student {
    String name;
    int age;

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void show() {
        System.out.println(name + " - " + age);
    }
}

public class StudentConstructor {
    public static void main(String[] args) {
        Student s1 = new Student("Dara", 20);
        Student s2 = new Student("Sok", 22);
        s1.show();
        s2.show();
    }
}`,
      output: "Dara - 20\nSok - 22",
      lines: [
        "Constructor កំណត់ name និង age ភ្លាមពេលបង្កើត Object។",
        "<code>this.name</code> យោង Field; <code>name</code> យោង Parameter។",
        "Object នីមួយៗទទួលតម្លៃផ្សេងគ្នាតាម Argument។"
      ]
    },
    {
      title: "Constructor Overloading",
      desc: "Class Book ដែលមាន Constructor បីកំណែ និង Constructor Chaining។",
      file: "BookConstructor.java",
      code: `class Book {
    String title;
    double price;

    Book() {
        this("Unknown", 0.0);
    }

    Book(String title) {
        this(title, 0.0);
    }

    Book(String title, double price) {
        this.title = title;
        this.price = price;
    }

    void show() {
        System.out.println(title + " - $" + price);
    }
}

public class BookConstructor {
    public static void main(String[] args) {
        new Book().show();
        new Book("Java").show();
        new Book("OOP", 25.5).show();
    }
}`,
      output: "Unknown - $0.0\nJava - $0.0\nOOP - $25.5",
      lines: [
        "Constructor ទទេហៅ <code>this(\"Unknown\", 0.0)</code>។",
        "Constructor មួយ Parameter ហៅ Constructor ពីរ Parameter។",
        "Constructor ចុងក្រោយកំណត់ Field ដោយផ្ទាល់។",
        "Java ជ្រើស Constructor តាម Argument ពេល new។"
      ]
    },
    {
      title: "Constructor ជាមួយ Validation",
      desc: "Constructor ពិនិត្យទិន្នន័យមុនកំណត់ ដើម្បីធានាថា Object មានស្ថានភាពត្រឹមត្រូវ។",
      file: "BankAccountConstructor.java",
      code: `class BankAccount {
    String owner;
    double balance;

    BankAccount(String owner, double balance) {
        this.owner = owner;
        if (balance < 0) {
            this.balance = 0;
        } else {
            this.balance = balance;
        }
    }

    void show() {
        System.out.println(owner + ": $" + balance);
    }
}

public class BankAccountConstructor {
    public static void main(String[] args) {
        BankAccount a = new BankAccount("Dara", -50);
        BankAccount b = new BankAccount("Sok", 120);
        a.show();
        b.show();
    }
}`,
      output: "Dara: $0.0\nSok: $120.0",
      lines: [
        "Constructor ពិនិត្យ <code>balance &lt; 0</code> មុនកំណត់។",
        "បើតម្លៃអវិជ្ជមាន វាកំណត់ជា 0 ជំនួស។",
        "នេះធានាថា Object មិនចាប់ផ្តើមដោយស្ថានភាពមិនត្រឹមត្រូវ។"
      ]
    },
    {
      title: "this() Chaining",
      desc: "បង្ហាញការហៅ Constructor មួយពីមួយទៀត ដើម្បីកាត់បន្ថយកូដដដែលៗ។",
      file: "ChainingDemo.java",
      code: `class Employee {
    String name;
    String department;
    double salary;

    Employee(String name) {
        this(name, "General", 300.0);
    }

    Employee(String name, String department, double salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    void show() {
        System.out.println(name + " - " + department + " - $" + salary);
    }
}

public class ChainingDemo {
    public static void main(String[] args) {
        Employee e = new Employee("Dara");
        e.show();
    }
}`,
      output: "Dara - General - $300.0",
      lines: [
        "Constructor មួយ Parameter ហៅ Constructor បី Parameter ដោយ <code>this(...)</code>។",
        "<code>this(...)</code> ត្រូវជា Statement ដំបូង។",
        "Logic កំណត់ Field មានតែកន្លែងតែមួយ ដូច្នេះងាយកែ។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ដាក់ Return Type</span><br><code>public void Student()</code> ក្លាយជា Method ធម្មតា។', fix: "លុប Return Type ចេញ៖ <code>public Student()</code>។" },
    { text: '<span class="bad-code">❌ ភ្លេច this</span><br><code>name = name;</code> ក្នុង Constructor មិនកំណត់ Field។', fix: "ប្រើ <code>this.name = name;</code>។" },
    { text: '<span class="bad-code">❌ គិតថា Default Constructor នៅមាន</span><br>សរសេរ Constructor ផ្សេងរួចហើយ new ដោយគ្មាន Argument។', fix: "សរសេរ <code>public ClassName() { }</code> បន្ថែម។" },
    { text: '<span class="bad-code">❌ this() មិននៅដំបូង</span><br>ដាក់ Statement ផ្សេងមុន this(...)។', fix: "ដាក់ <code>this(...)</code> ជា Statement ដំបូង។" }
  ],
  tips: [
    "ប្រើ Constructor ដើម្បីធានាថា Object ចាប់ផ្តើមដោយស្ថានភាពត្រឹមត្រូវ។",
    "ប្រើ <code>this(...)</code> ដើម្បីកាត់បន្ថយការចម្លង Logic។",
    "កុំធ្វើការងារស្មុគស្មាញពេកក្នុង Constructor។",
    "ពិនិត្យ Argument មិនត្រឹមត្រូវក្នុង Constructor។"
  ],
  exercises: [
    {
      level: 1,
      title: "Constructor សាមញ្ញ",
      desc: "បង្កើត Class <code>Person</code> ដែលមាន Constructor ទទួល name និង age។",
      requirements: ["Parameterized Constructor", "ប្រើ this", "បង្ហាញព័ត៌មាន"],
      inputSample: "Dara, 20",
      outputSample: "Dara - 20",
      hint: "សរសេរ <code>Person(String name, int age) { this.name = name; this.age = age; }</code>។",
      solutionCode: `class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void show() {
        System.out.println(name + " - " + age);
    }
}

public class PersonConstructor {
    public static void main(String[] args) {
        new Person("Dara", 20).show();
    }
}`
    },
    {
      level: 2,
      title: "Constructor Overloading",
      desc: "បង្កើត Class <code>Point</code> ដែលមាន Constructor ទទេ និង Constructor ទទួល x, y។",
      requirements: ["Constructor ពីរ", "this() chaining", "Method show"],
      outputSample: "(0, 0)\n(3, 4)",
      hint: "Constructor ទទេហៅ <code>this(0, 0)</code>។",
      solutionCode: `class Point {
    int x;
    int y;

    Point() {
        this(0, 0);
    }

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    void show() {
        System.out.println("(" + x + ", " + y + ")");
    }
}

public class PointDemo {
    public static void main(String[] args) {
        new Point().show();
        new Point(3, 4).show();
    }
}`
    },
    {
      level: 2,
      title: "Validation ក្នុង Constructor",
      desc: "បង្កើត Class <code>Account</code> ដែលមិនអនុញ្ញាត balance អវិជ្ជមាន។",
      requirements: ["Constructor ពិនិត្យ balance", "កំណត់ 0 បើអវិជ្ជមាន", "បង្ហាញ balance"],
      inputSample: "-100",
      outputSample: "Balance: 0.0",
      hint: "ប្រើ if ក្នុង Constructor។",
      solutionCode: `class Account {
    double balance;

    Account(double balance) {
        this.balance = balance < 0 ? 0 : balance;
    }

    void show() {
        System.out.println("Balance: " + balance);
    }
}

public class AccountDemo {
    public static void main(String[] args) {
        new Account(-100).show();
    }
}`
    },
    {
      level: 3,
      title: "Constructor សម្រាប់ Array",
      desc: "បង្កើត Class <code>Team</code> ដែលទទួល Array ឈ្មោះក្នុង Constructor និង Method រាប់សមាជិក។",
      requirements: ["Constructor ទទួល String[]", "Method count", "Method show"],
      inputSample: "{\"Dara\",\"Sok\",\"Mona\"}",
      outputSample: "Members: 3",
      hint: "រក្សា Array ក្នុង Field ហើយប្រើ length។",
      solutionCode: `class Team {
    String[] members;

    Team(String[] members) {
        this.members = members;
    }

    int count() {
        return members.length;
    }

    void show() {
        System.out.println("Members: " + count());
    }
}

public class TeamDemo {
    public static void main(String[] args) {
        String[] names = {"Dara", "Sok", "Mona"};
        new Team(names).show();
    }
}`
    },
    {
      level: 1,
      title: "Constructor សាមញ្ញ",
      desc: "បង្កើត Class <code>Laptop</code> ដែលមាន Constructor ទទួល brand និង price។",
      requirements: ["Constructor ទទួល Parameter ពីរ", "Method show", "បង្កើត Object ដោយ new"],
      outputSample: "Brand: Asus\nPrice: 900.0",
      hint: "Constructor មានឈ្មោះដូច Class និងគ្មាន Return Type។",
      solutionCode: `class Laptop {
    String brand;
    double price;

    Laptop(String brand, double price) {
        this.brand = brand;
        this.price = price;
    }

    void show() {
        System.out.println("Brand: " + brand);
        System.out.println("Price: " + price);
    }
}

public class LaptopDemo {
    public static void main(String[] args) {
        Laptop l = new Laptop("Asus", 900.0);
        l.show();
    }
}`
    },
    {
      level: 2,
      title: "Constructor កំណត់តម្លៃចាប់ផ្តើម",
      desc: "បង្កើត Class <code>Counter</code> ដែល Constructor កំណត់តម្លៃចាប់ផ្តើម រួចបង្កើនម្តង។",
      requirements: ["Constructor ទទួល int start", "Method increment", "Method value"],
      inputSample: "start=5",
      outputSample: "Value: 6",
      hint: "កំណត់ <code>count = start;</code> ក្នុង Constructor។",
      solutionCode: `class Counter {
    int count;

    Counter(int start) {
        count = start;
    }

    void increment() {
        count++;
    }

    int value() {
        return count;
    }
}

public class CounterDemo {
    public static void main(String[] args) {
        Counter c = new Counter(5);
        c.increment();
        System.out.println("Value: " + c.value());
    }
}`
    },
    {
      level: 3,
      title: "Constructor ជាមួយ Validation",
      desc: "បង្កើត Class <code>Student</code> ដែល Constructor ពិនិត្យពិន្ទុឱ្យស្ថិតចន្លោះ 0 ដល់ 100។",
      requirements: ["Constructor(name, score)", "Validation ពិន្ទុ", "Method getGrade"],
      inputSample: "name=Dara, score=85",
      outputSample: "Dara: B",
      hint: "ប្រើ <code>if (score &gt;= 0 &amp;&amp; score &lt;= 100)</code> មុនដាក់តម្លៃ។",
      solutionCode: `class Student {
    String name;
    int score;

    Student(String name, int score) {
        this.name = name;
        if (score >= 0 && score <= 100) {
            this.score = score;
        } else {
            this.score = 0;
        }
    }

    String getGrade() {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        return "F";
    }
}

public class StudentDemo {
    public static void main(String[] args) {
        Student s = new Student("Dara", 85);
        System.out.println(s.name + ": " + s.getGrade());
    }
}`
    },
    {
      level: 3,
      title: "Constructor Overloading",
      desc: "បង្កើត Class <code>Box</code> ដែលមាន Constructor ពីរ៖ មួយសម្រាប់គូប និងមួយសម្រាប់ប្រអប់ចតុកោណ។",
      requirements: ["Constructor ១ Parameter", "Constructor ៣ Parameter", "Method volume"],
      inputSample: "cube side=3; box 2,3,4",
      outputSample: "Volume: 27.0\nVolume: 24.0",
      hint: "Constructor ទីមួយហៅ <code>this(side, side, side)</code>។",
      solutionCode: `class Box {
    double width, height, depth;

    Box(double side) {
        this(side, side, side);
    }

    Box(double width, double height, double depth) {
        this.width = width;
        this.height = height;
        this.depth = depth;
    }

    double volume() {
        return width * height * depth;
    }
}

public class BoxDemo {
    public static void main(String[] args) {
        Box cube = new Box(3);
        Box box = new Box(2, 3, 4);
        System.out.println("Volume: " + cube.volume());
        System.out.println("Volume: " + box.volume());
    }
}`
    }
  ],
  quiz: [
    { q: "តើ Constructor មាន Return Type ទេ?", options: ["មាន int", "មាន void", "គ្មាន", "មាន Class Type"], answer: 2, explain: "Constructor គ្មាន Return Type។ បើមាន void នោះវាក្លាយជា Method ធម្មតា។" },
    { q: "តើ Constructor ដំណើរការពេលណា?", options: ["ពេលប្រកាស Class", "ពេលបង្កើត Object ដោយ new", "ពេលហៅ Method", "ពេល Compile"], answer: 1, explain: "Constructor ដំណើរការដោយស្វ័យប្រវត្តិពេល new។" },
    { q: "តើ <code>this</code> យោងទៅអ្វី?", options: ["Class", "Object បច្ចុប្បន្ន", "Package", "Method"], answer: 1, explain: "this យោងទៅ Instance បច្ចុប្បន្ន។" },
    { q: "តើបើសរសេរ Constructor មួយ តើ Default Constructor នៅមានទេ?", options: ["មាន", "គ្មាន", "មានតែ static", "មានតែ private"], answer: 1, explain: "បើសរសេរ Constructor ផ្សេង Default Constructor លែងមានដោយស្វ័យប្រវត្តិ។" },
    { q: "តើ <code>this(...)</code> ត្រូវដាក់នៅទីណា?", options: ["ចុងក្រោយ", "កណ្តាល", "ដំបូងក្នុង Constructor", "ខាងក្រៅ Constructor"], answer: 2, explain: "this(...) ត្រូវជា Statement ដំបូងក្នុង Constructor។" }
  ],
  summary: [
    "Constructor គឺ Method ពិសេសដែលមានឈ្មោះដូច Class និងគ្មាន Return Type។",
    "វាដំណើរការពេលបង្កើត Object ដើម្បីកំណត់តម្លៃដំបូង។",
    "Default Constructor មានដោយស្វ័យប្រវត្តិ បើគ្មាន Constructor ផ្សេង។",
    "this យោង Object បច្ចុប្បន្ន; this() ហៅ Constructor ផ្សេង។",
    "Constructor អាច Overload និងអាចពិនិត្យទិន្នន័យបាន។"
  ],
  takeaways: [
    "Constructor ធានាថា Object ចាប់ផ្តើមដោយស្ថានភាពត្រឹមត្រូវ។",
    "ប្រើ this ដើម្បីបែងចែក Field និង Parameter។",
    "Constructor Chaining កាត់បន្ថយការចម្លងកូដ។",
    "សរសេរ Default Constructor ដោយខ្លួនឯង បើត្រូវការ new គ្មាន Argument។"
  ],
  sources: [
    { label: "Oracle — Providing Constructors", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html" },
    { label: "W3Schools — Java Constructors", url: "https://www.w3schools.com/java/java_constructors.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "encapsulation",
  num: 17,
  part: 12,
  partTitle: "Object-Oriented Programming",
  title: "Encapsulation",
  titleKh: "Encapsulation (ការវេចខ្ចប់)",
  time: "៦៥ នាទី",
  level: 3,
  intro: "Encapsulation គឺការលាក់ទិន្នន័យខាងក្នុង Class ដោយប្រើ <code>private</code> ហើយផ្តល់ Access តាម <strong>Getter</strong> និង <strong>Setter</strong>។ វាជាសសរស្តម្ភសំខាន់នៃ OOP ដែលការពារទិន្នន័យពីការកែខុស និងធ្វើឱ្យ Class អាចផ្លាស់ប្តូរខាងក្នុងដោយមិនប៉ះពាល់អ្នកប្រើ។",
  objectives: [
    "យល់ពីគោលគំនិត Encapsulation។",
    "ប្រើ <code>private</code> ដើម្បីលាក់ Field។",
    "សរសេរ Getter និង Setter ត្រឹមត្រូវ។",
    "ដាក់ Validation ក្នុង Setter។",
    "យល់ពី Access Modifiers។",
    "យល់ពីអត្ថប្រយោជន៍របស់ Encapsulation។"
  ],
  sections: [
    {
      title: "បញ្ហានៃ Field សាធារណៈ",
      html: `<p>បើ Field ជា <code>public</code> នោះកូដណាក៏អាចកែវាបានដោយគ្មានការគ្រប់គ្រង៖</p>
<pre><code>public class BankAccount {
    public double balance;
}

BankAccount acc = new BankAccount();
acc.balance = -9999;   // invalid, but allowed</code></pre>
<p>នេះអាចធ្វើឱ្យ Object មានស្ថានភាពមិនត្រឹមត្រូវ។ <strong>Encapsulation</strong> ដោះស្រាយដោយលាក់ Field និងផ្តល់ Method ដែលពិនិត្យទិន្នន័យមុនកែ។</p>
<pre><code>public class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount &gt; 0) {
            balance += amount;
        }
    }
}</code></pre>
<div class="callout info"><div class="callout-title">គោលគំនិត</div><p>Field គួរជា <code>private</code> ដោយលំនាំដើម។ បើត្រូវការចូលប្រើពីខាងក្រៅ សូមផ្តល់ Method ដែលមានការគ្រប់គ្រង។</p></div>`
    },
    {
      title: "Getter និង Setter",
      html: `<p><strong>Getter</strong> អានតម្លៃ Field។ <strong>Setter</strong> កំណត់តម្លៃ Field។ ឈ្មោះតាមធម្មតាគឺ <code>getX()</code> និង <code>setX()</code>។</p>
<pre><code>public class Student {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age &gt;= 0 &amp;&amp; age &lt;= 120) {
            this.age = age;
        }
    }
}</code></pre>
<p>Setter អាចពិនិត្យទិន្នន័យ៖</p>
<pre><code>Student s = new Student();
s.setAge(-5);        // ignored
System.out.println(s.getAge());   // 0</code></pre>
<div class="callout tip"><div class="callout-title">Boolean Getter</div><p>សម្រាប់ Field ប្រភេទ <code>boolean</code> គេច្រើនប្រើ <code>isActive()</code> ជំនួស <code>getActive()</code>។</p></div>`
    },
    {
      title: "Access Modifiers",
      html: `<p>Java មាន Access Modifier សំខាន់បួនកម្រិត៖</p>
<div class="table-wrap"><table><thead><tr><th>Modifier</th><th>Class ដូចគ្នា</th><th>Package</th><th>Subclass</th><th>ណាមួយ</th></tr></thead><tbody>
<tr><td><code>private</code></td><td>✔</td><td>✘</td><td>✘</td><td>✘</td></tr>
<tr><td>(default)</td><td>✔</td><td>✔</td><td>✘</td><td>✘</td></tr>
<tr><td><code>protected</code></td><td>✔</td><td>✔</td><td>✔</td><td>✘</td></tr>
<tr><td><code>public</code></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr>
</tbody></table></div>
<p>សម្រាប់ Field សូមប្រើ <code>private</code>។ សម្រាប់ Method ដែលអ្នកប្រើត្រូវការ សូមប្រើ <code>public</code>។</p>
<div class="callout warn"><div class="callout-title">Default = Package-private</div><p>បើគ្មាន Modifier នោះវាអាចចូលប្រើបានតែក្នុង Package តែមួយ។ នេះមិនដូច <code>public</code> ទេ។</p></div>`
    },
    {
      title: "អត្ថប្រយោជន៍នៃ Encapsulation",
      html: `<ul>
<li><strong>Data Protection</strong>៖ ការពារការកែខុសពីខាងក្រៅ។</li>
<li><strong>Validation</strong>៖ Setter អាចពិនិត្យតម្លៃមុនកំណត់។</li>
<li><strong>Flexibility</strong>៖ អ្នកអាចផ្លាស់ប្តូរ Implementation ខាងក្នុងដោយមិនប៉ះពាល់អ្នកប្រើ។</li>
<li><strong>Read-only / Write-only</strong>៖ អ្នកអាចផ្តល់តែ Getter ឬតែ Setter។</li>
<li><strong>Maintainability</strong>៖ Logic ទាំងអស់ស្ថិតក្នុង Class តែមួយ។</li>
</ul>
<pre><code>public class Temperature {
    private double celsius;

    public double getCelsius() {
        return celsius;
    }

    public void setCelsius(double celsius) {
        if (celsius &gt;= -273.15) {
            this.celsius = celsius;
        }
    }

    public double getFahrenheit() {
        return celsius * 9 / 5 + 32;
    }
}</code></pre>
<p>អ្នកប្រើអាចអាន Fahrenheit ដោយមិនចាំបាច់ដឹងរូបមន្តខាងក្នុង។ នេះជាអត្ថប្រយោជន៍នៃការលាក់ Implementation។</p>`
    },
    {
      title: "Encapsulation ជាមួយ Constructor",
      html: `<p>Constructor ក៏គួរពិនិត្យទិន្នន័យដែរ ដើម្បីកុំឱ្យ Object ចាប់ផ្តើមដោយស្ថានភាពមិនត្រឹមត្រូវ៖</p>
<pre><code>public class Product {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        setPrice(price);   // reuse validation
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        if (price &gt;= 0) {
            this.price = price;
        }
    }
}</code></pre>
<div class="callout info"><div class="callout-title">Reuse Validation</div><p>ការហៅ Setter ក្នុង Constructor ជួយឱ្យ Validation មានតែកន្លែងតែមួយ។ ប៉ុន្តែប្រយ័ត្នបើ Setter ត្រូវ Override ក្នុង Subclass — ពេលនោះអាចមានឥទ្ធិពលមិនរំពឹង។</p></div>`
    }
  ],
  terms: [
    { en: "Encapsulation", kh: "ការវេចខ្ចប់", text: "ការលាក់ទិន្នន័យ និងផ្តល់ Access តាម Method។" },
    { en: "Getter", kh: "អ្នកអាន", text: "Method សម្រាប់អានតម្លៃ Field។" },
    { en: "Setter", kh: "អ្នកកំណត់", text: "Method សម្រាប់កំណត់តម្លៃ Field។" },
    { en: "Access Modifier", kh: "កម្រិតចូលប្រើ", text: "Keyword កំណត់អ្នកណាអាចចូលប្រើ។" },
    { en: "Validation", kh: "ការផ្ទៀងផ្ទាត់", text: "ការពិនិត្យថាទិន្នន័យត្រឹមត្រូវ។" }
  ],
  syntax: [
    { label: "Private field", code: "private double balance;" },
    { label: "Getter", code: "public double getBalance() {\n    return balance;\n}" },
    { label: "Setter with validation", code: "public void setBalance(double balance) {\n    if (balance >= 0) {\n        this.balance = balance;\n    }\n}" },
    { label: "Read-only", code: "private final String id;\npublic String getId() { return id; }" }
  ],
  examples: [
    {
      title: "BankAccount ដែលមាន Encapsulation",
      desc: "Field balance ជា private ហើយ deposit និង withdraw ពិនិត្យទិន្នន័យ។",
      file: "BankAccountEncapsulated.java",
      code: `class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}

public class BankAccountEncapsulated {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();
        acc.deposit(100);
        acc.withdraw(30);
        acc.withdraw(1000);
        System.out.println("Balance: " + acc.getBalance());
    }
}`,
      output: "Balance: 70.0",
      lines: [
        "balance ជា private ដូច្នេះខាងក្រៅមិនអាចកែដោយផ្ទាល់។",
        "deposit បន្ថែមតែពេល amount វិជ្ជមាន។",
        "withdraw ពិនិត្យថា amount មិនលើស balance។",
        "ការដក 1000 ត្រូវបានបដិសេធ ដូច្នេះ balance នៅ 70។"
      ]
    },
    {
      title: "Student ជាមួយ Validation",
      desc: "Setter ពិនិត្យអាយុឱ្យស្ថិតក្នុងដែន 0–120។",
      file: "StudentEncapsulated.java",
      code: `class Student {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        if (name != null && !name.isBlank()) {
            this.name = name;
        }
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age >= 0 && age <= 120) {
            this.age = age;
        }
    }
}

public class StudentEncapsulated {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("Dara");
        s.setAge(20);
        s.setAge(-5);
        System.out.println(s.getName() + ": " + s.getAge());
    }
}`,
      output: "Dara: 20",
      lines: [
        "<code>setName</code> បដិសេធ null និង String ទទេ។",
        "<code>setAge</code> បដិសេធ -5 ព្រោះក្រៅដែន 0–120។",
        "ដូច្នេះ Object រក្សាទិន្នន័យត្រឹមត្រូវ។"
      ]
    },
    {
      title: "Temperature Converter",
      desc: "Class Temperature ដែលផ្តល់ Getter សម្រាប់ Celsius និង Fahrenheit ដោយលាក់ Field។",
      file: "Temperature.java",
      code: `class Temperature {
    private double celsius;

    public double getCelsius() {
        return celsius;
    }

    public void setCelsius(double celsius) {
        if (celsius >= -273.15) {
            this.celsius = celsius;
        }
    }

    public double getFahrenheit() {
        return celsius * 9 / 5 + 32;
    }
}

public class TemperatureDemo {
    public static void main(String[] args) {
        Temperature t = new Temperature();
        t.setCelsius(25);
        System.out.println(t.getCelsius() + "C = " + t.getFahrenheit() + "F");
    }
}`,
      output: "25.0C = 77.0F",
      lines: [
        "celsius ជា private ហើយកំណត់បានតាម Setter។",
        "Setter បដិសេធតម្លៃក្រោម Absolute Zero។",
        "Fahrenheit គណនាពី celsius ដោយផ្ទាល់។",
        "អ្នកប្រើមិនចាំបាច់ដឹងរូបមន្តខាងក្នុង។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ Field public</span><br>អនុញ្ញាតឱ្យកែតម្លៃដោយគ្មាន Validation។', fix: "ធ្វើវា private និងផ្តល់ Getter/Setter។" },
    { text: '<span class="bad-code">❌ Setter គ្មាន Validation</span><br>កំណត់តម្លៃអវិជ្ជមានដោយសេរី។', fix: "ពិនិត្យដែនតម្លៃក្នុង Setter។" },
    { text: '<span class="bad-code">❌ Getter ដែលកែទិន្នន័យ</span><br>Getter គួរអានតែប៉ុណ្ណោះ។', fix: "កុំកែ Field ក្នុង Getter។" },
    { text: '<span class="bad-code">❌ បង្ហាញ Field ដោយផ្ទាល់</span><br>ប្រើ <code>s.balance</code> ពេលវាជា private។', fix: "ប្រើ <code>s.getBalance()</code>។" }
  ],
  tips: [
    "Field គួរជា private ជានិច្ច លុះត្រាតែមានហេតុផលច្បាស់។",
    "Getter/Setter មិនចាំបាច់សម្រាប់គ្រប់ Field ទេ — ផ្តល់តែពេលចាំបាច់។",
    "ដាក់ Validation ក្នុង Setter និង Constructor។",
    "សម្រាប់ Field ថេរ ប្រើ <code>final</code> និង Getter ដោយគ្មាន Setter។",
    "កុំធ្វើ Getter/Setter ស្មុគស្មាញពេក — ពួកវាគួរសាមញ្ញ។"
  ],
  exercises: [
    {
      level: 1,
      title: "Private Name",
      desc: "បង្កើត Class <code>Person</code> ដែលមាន name ជា private និង Getter/Setter។",
      requirements: ["Field private", "Getter", "Setter"],
      inputSample: "Dara",
      outputSample: "Name: Dara",
      hint: "ប្រើ <code>private String name;</code> និង <code>getName</code>/<code>setName</code>។",
      solutionCode: `class Person {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

public class PersonEncapsulated {
    public static void main(String[] args) {
        Person p = new Person();
        p.setName("Dara");
        System.out.println("Name: " + p.getName());
    }
}`
    },
    {
      level: 2,
      title: "Age Validation",
      desc: "Setter សម្រាប់ age ត្រូវពិនិត្យថាស្ថិតក្នុង 0–120។",
      requirements: ["private int age", "Setter មាន if", "សាកល្បងតម្លៃអវិជ្ជមាន"],
      inputSample: "-10",
      outputSample: "Age: 0",
      hint: "កុំកំណត់តម្លៃបើនៅក្រៅដែន។",
      solutionCode: `class Person {
    private int age;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age >= 0 && age <= 120) {
            this.age = age;
        }
    }
}

public class AgeValidation {
    public static void main(String[] args) {
        Person p = new Person();
        p.setAge(-10);
        System.out.println("Age: " + p.getAge());
    }
}`
    },
    {
      level: 2,
      title: "Product Price",
      desc: "បង្កើត Class <code>Product</code> ដែល price ជា private និង Setter បដិសេធតម្លៃអវិជ្ជមាន។",
      requirements: ["private price", "Getter", "Setter មាន Validation", "បង្ហាញតម្លៃ"],
      inputSample: "-5",
      outputSample: "Price: 0.0",
      hint: "ប្រើ <code>if (price &gt;= 0)</code>។",
      solutionCode: `class Product {
    private double price;

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        if (price >= 0) {
            this.price = price;
        }
    }
}

public class ProductEncapsulated {
    public static void main(String[] args) {
        Product p = new Product();
        p.setPrice(-5);
        System.out.println("Price: " + p.getPrice());
    }
}`
    },
    {
      level: 3,
      title: "Account Read-only Balance",
      desc: "បង្កើត Class <code>Account</code> ដែល balance អានបានតែប៉ុណ្ណោះ (គ្មាន Setter) ហើយមាន deposit/withdraw។",
      requirements: ["private balance", "Getter តែមួយ", "deposit/withdraw", "withdraw ពិនិត្យ balance"],
      inputSample: "deposit 50, withdraw 20, withdraw 100",
      outputSample: "Balance: 30.0",
      hint: "កុំផ្តល់ setBalance; ប្រើ Method គ្រប់គ្រង។",
      solutionCode: `class Account {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}

public class AccountReadOnly {
    public static void main(String[] args) {
        Account acc = new Account();
        acc.deposit(50);
        acc.withdraw(20);
        acc.withdraw(100);
        System.out.println("Balance: " + acc.getBalance());
    }
}`
    },
    {
      level: 1,
      title: "Private Age",
      desc: "បង្កើត Class <code>Person</code> ដែល Field age ជា private និងមាន Getter/Setter។",
      requirements: ["private int age", "Getter និង Setter", "បង្ហាញតម្លៃ"],
      inputSample: "setAge(20)",
      outputSample: "Age: 20",
      hint: "Setter គួរពិនិត្យ <code>age &gt;= 0</code>។",
      solutionCode: `class Person {
    private int age;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
}

public class PersonDemo {
    public static void main(String[] args) {
        Person p = new Person();
        p.setAge(20);
        System.out.println("Age: " + p.getAge());
    }
}`
    },
    {
      level: 2,
      title: "Product Price",
      desc: "បង្កើត Class <code>Product</code> ដែល price ជា private និងមិនអនុញ្ញាតតម្លៃអវិជ្ជមាន។",
      requirements: ["private double price", "Setter បដិសេធតម្លៃអវិជ្ជមាន", "Getter"],
      inputSample: "setPrice(1500)",
      outputSample: "Price: 1500.0",
      hint: "<code>if (price &gt;= 0) this.price = price;</code>។",
      solutionCode: `class Product {
    private double price;

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        if (price >= 0) {
            this.price = price;
        }
    }
}

public class ProductDemo {
    public static void main(String[] args) {
        Product p = new Product();
        p.setPrice(1500);
        System.out.println("Price: " + p.getPrice());
    }
}`
    },
    {
      level: 3,
      title: "Student Score Validation",
      desc: "បង្កើត Class <code>Student</code> ដែល name និង score ជា private និងពិនិត្យពិន្ទុ 0–100។",
      requirements: ["private name និង score", "Setter ពិនិត្យពិន្ទុ", "Method getGrade"],
      inputSample: "name=Dara, score=95",
      outputSample: "Dara: A",
      hint: "បើ score ខុសចន្លោះ កុំផ្លាស់តម្លៃចាស់។",
      solutionCode: `class Student {
    private String name;
    private int score;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setScore(int score) {
        if (score >= 0 && score <= 100) {
            this.score = score;
        }
    }

    public String getGrade() {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        return "F";
    }
}

public class StudentDemo {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("Dara");
        s.setScore(95);
        System.out.println(s.getName() + ": " + s.getGrade());
    }
}`
    },
    {
      level: 3,
      title: "Encapsulated Bank Account",
      desc: "បង្កើត Class <code>BankAccount</code> ដែល balance ជា private និងមាន deposit/withdraw មាន Validation។",
      requirements: ["private double balance", "Method deposit", "Method withdraw", "Method getBalance"],
      inputSample: "deposit 100, withdraw 20",
      outputSample: "Balance: 80.0",
      hint: "withdraw ត្រូវពិនិត្យ <code>amount &lt;= balance</code>។",
      solutionCode: `class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}

public class BankDemo {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();
        acc.deposit(100);
        acc.withdraw(20);
        System.out.println("Balance: " + acc.getBalance());
    }
}`
    }
  ],
  quiz: [
    { q: "តើ Encapsulation លាក់ទិន្នន័យដោយប្រើអ្វី?", options: ["public", "private", "static", "final"], answer: 1, explain: "private លាក់ Field មិនឱ្យចូលប្រើពីខាងក្រៅដោយផ្ទាល់។" },
    { q: "តើ Getter ធ្វើអ្វី?", options: ["កំណត់តម្លៃ", "អានតម្លៃ", "លុប Field", "បង្កើត Object"], answer: 1, explain: "Getter អានតម្លៃ Field។" },
    { q: "តើ Setter អាចធ្វើអ្វីបន្ថែម?", options: ["Validation", "Compilation", "Inheritance", "Loop"], answer: 0, explain: "Setter អាចពិនិត្យទិន្នន័យមុនកំណត់តម្លៃ។" },
    { q: "តើ access modifier ណាអនុញ្ញាតចូលបានតែក្នុង Class?", options: ["public", "protected", "private", "default"], answer: 2, explain: "private ចូលបានតែក្នុង Class តែមួយ។" },
    { q: "តើ Encapsulation ជួយអ្វី?", options: ["ការពារទិន្នន័យ", "បង្កើត Loop", "គណនាលេខ", "បង្កើត Array"], answer: 0, explain: "វាការពារទិន្នន័យ និងអនុញ្ញាត Validation។" }
  ],
  summary: [
    "Encapsulation លាក់ Field ដោយ private និងផ្តល់ Access តាម Method។",
    "Getter អានតម្លៃ; Setter កំណត់តម្លៃ និងអាចពិនិត្យបាន។",
    "Access Modifiers កំណត់កម្រិតចូលប្រើ។",
    "Encapsulation ការពារទិន្នន័យ និងធ្វើឱ្យ Class អាចផ្លាស់ប្តូរបាន។",
    "Field គួរជា private ជាលំនាំដើម។"
  ],
  takeaways: [
    "កុំបង្ហាញ Field ជា public ដោយគ្មានហេតុផល។",
    "ដាក់ Validation ក្នុង Setter និង Constructor។",
    "ផ្តល់ Getter/Setter តែពេលចាំបាច់។",
    "Encapsulation ជាមូលដ្ឋានសម្រាប់កូដដែលអាចថែទាំបាន។"
  ],
  sources: [
    { label: "Oracle — Controlling Access to Members", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html" },
    { label: "W3Schools — Java Encapsulation", url: "https://www.w3schools.com/java/java_encapsulation.asp" }
  ]
});
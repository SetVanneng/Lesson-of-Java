/* Final Projects — core console apps plus OOP management systems */
window.JAVA_PROJECTS = window.JAVA_PROJECTS || [];

window.JAVA_PROJECTS.push({
  id: "profile-card",
  num: 1,
  title: "Profile Card",
  short: "Console App តូចដែលអានឈ្មោះ អាយុ និងការងារសុបិន រួចបង្ហាញ Profile ស្អាតៗ។",
  intro: "Project ដំបូងសម្រាប់អនុវត្ត Variable, Scanner, String និងការបង្ហាញ Output។ អ្នកនឹងបង្កើត App ដែលសួរព័ត៌មានអ្នកប្រើ ហើយបង្ហាញជា Profile Card ក្នុង Console។",
  time: "៦០ នាទី",
  level: 1,
  concepts: ["Variables", "Scanner", "String", "Arithmetic", "println"],
  objectives: [
    "អាន Input ពី Console ដោយ Scanner។",
    "ផ្ទុកព័ត៌មានក្នុង Variable ដែលមាន Type ត្រឹមត្រូវ។",
    "បង្ហាញ Output ជាទម្រង់ស្អាត។",
    "គណនាតម្លៃថ្មីពី Input។"
  ],
  requirements: [
    "សួរឈ្មោះ អាយុ និងការងារសុបិន។",
    "អាយុត្រូវជា int។",
    "បង្ហាញ Profile ជាមួយស៊ុមសាមញ្ញ។",
    "បង្ហាញអាយុឆ្នាំក្រោយដោយបូក 1។"
  ],
  steps: [
    "បង្កើត File <code>ProfileApp.java</code>។",
    "Import <code>java.util.Scanner</code> និងបង្កើត Scanner។",
    "សួរឈ្មោះដោយ <code>nextLine()</code>។",
    "សួរអាយុដោយ <code>nextInt()</code> រួច <code>nextLine()</code> សម្អាត New Line។",
    "សួរការងារសុបិនដោយ <code>nextLine()</code>។",
    "បង្ហាញ Profile និងអាយុឆ្នាំក្រោយ។",
    "Compile និង Run ដើម្បីសាកល្បង។"
  ],
  file: "ProfileApp.java",
  code: `import java.util.Scanner;

public class ProfileApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Name: ");
        String name = scanner.nextLine();

        System.out.print("Age: ");
        int age = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Dream job: ");
        String job = scanner.nextLine();

        System.out.println();
        System.out.println("===== PROFILE =====");
        System.out.println("Name     : " + name);
        System.out.println("Age      : " + age);
        System.out.println("Dream job: " + job);
        System.out.println("Next year: " + (age + 1) + " years old");

        scanner.close();
    }
}`,
  explanation: [
    "<code>nextLine()</code> អាន String ទាំងបន្ទាត់។",
    "<code>nextInt()</code> អានលេខ ប៉ុន្តែបន្សល់ New Line ក្នុង Buffer។",
    "<code>scanner.nextLine()</code> បន្ទាប់ពី <code>nextInt()</code> សម្អាត New Line នោះ។",
    "ការភ្ជាប់ String ដោយ <code>+</code> បង្កើត Output អានងាយ។",
    "<code>(age + 1)</code> ដាក់ក្នុងវង់ក្រចក ដើម្បីគណនាមុនពេលភ្ជាប់ String។"
  ],
  output: `Name: Dara
Age: 20
Dream job: Java Developer

===== PROFILE =====
Name     : Dara
Age      : 20
Dream job: Java Developer
Next year: 21 years old`,
  improvements: [
    "បន្ថែមការពិនិត្យអាយុថាជាលេខវិជ្ជមាន។",
    "បន្ថែមព័ត៌មានទីក្រុង និងអ៊ីមែល។",
    "បង្ហាញអាយុគិតជាខែ និងថ្ងៃ។"
  ],
  challenges: [
    "ធ្វើឱ្យ App អាចបង្កើត Profile ច្រើននាក់ក្នុង Run តែមួយ។",
    "រក្សាទុក Profile ទៅ File សាមញ្ញ។",
    "បង្ហាញព័ត៌មានជាតារាងតម្រឹមជាមួយ <code>printf</code>។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "grade-calculator",
  num: 2,
  title: "Grade Calculator",
  short: "គណនាមធ្យមភាគពិន្ទុ និងកំណត់ Grade ដោយប្រើ Loop និង Condition។",
  intro: "Project នេះអនុវត្ត Loop, Condition, Casting និង Formatted Output។ អ្នកនឹងសរសេរ App ដែលអានពិន្ទុ ៣ មុខ គណនាមធ្យមភាគ ហើយផ្តល់ Grade A ដល់ F។",
  time: "៧៥ នាទី",
  level: 1,
  concepts: ["for loop", "if-else", "double", "casting", "printf"],
  objectives: [
    "ប្រើ Loop ដើម្បីអានទិន្នន័យច្រើន។",
    "គណនាមធ្យមភាគដោយ Casting។",
    "ប្រើ if-else if ដើម្បីកំណត់ Grade។",
    "បង្ហាញទសភាគដោយ <code>printf</code>។"
  ],
  requirements: [
    "អានពិន្ទុ ៣ មុខ។",
    "គណនាមធ្យមភាគជា double។",
    "Grade: A ≥ 90, B ≥ 80, C ≥ 70, D ≥ 60, ផ្សេងទៀត F។",
    "បង្ហាញមធ្យមភាគ ២ ខ្ទង់ទសភាគ។"
  ],
  steps: [
    "បង្កើត File <code>GradeCalculator.java</code>។",
    "បង្កើត Scanner និង Variable <code>total</code>។",
    "ប្រើ for loop អានពិន្ទុ ៣ ដង ហើយបូកចូល total។",
    "គណនា <code>average = (double) total / 3</code>។",
    "ប្រើ if-else if កំណត់ Grade។",
    "បង្ហាញលទ្ធផលដោយ <code>printf</code>។",
    "សាកល្បងជាមួយពិន្ទុខុសៗគ្នា។"
  ],
  file: "GradeCalculator.java",
  code: `import java.util.Scanner;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int total = 0;
        int count = 3;

        for (int i = 1; i <= count; i++) {
            System.out.print("Score " + i + ": ");
            total += scanner.nextInt();
        }

        double average = (double) total / count;
        String grade;

        if (average >= 90) {
            grade = "A";
        } else if (average >= 80) {
            grade = "B";
        } else if (average >= 70) {
            grade = "C";
        } else if (average >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }

        System.out.printf("Average: %.2f%n", average);
        System.out.println("Grade: " + grade);

        scanner.close();
    }
}`,
  explanation: [
    "Loop អានពិន្ទុ ៣ ដង ហើយបូកបញ្ចូល <code>total</code>។",
    "<code>(double) total</code> បំប្លែងជា double មុនចែក ដើម្បីកុំឱ្យបាត់ទសភាគ។",
    "if-else if ពិនិត្យពីខ្ពស់ទៅទាប។",
    "<code>%.2f</code> បង្ហាញទសភាគ ២ ខ្ទង់ ហើយ <code>%n</code> ជា New Line។"
  ],
  output: `Score 1: 85
Score 2: 90
Score 3: 78
Average: 84.33
Grade: B`,
  improvements: [
    "អនុញ្ញាតឱ្យអ្នកប្រើកំណត់ចំនួនមុខវិជ្ជា។",
    "ពិនិត្យថាពិន្ទុស្ថិតចន្លោះ 0 ដល់ 100។",
    "គណនា GPA ពី Grade។"
  ],
  challenges: [
    "បន្ថែមការបង្ហាញ Grade សម្រាប់មុខវិជ្ជានីមួយៗ។",
    "រក្សាទុកលទ្ធផលទៅ File។",
    "បង្ហាញពិន្ទុខ្ពស់បំផុត និងទាបបំផុត។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "guessing-game",
  num: 3,
  title: "Number Guessing Game",
  short: "ហ្គេមទាយលេខដែលប្រើ Random, while loop និង Condition។",
  intro: "ហ្គេមតូចដែលគួរឱ្យចាប់អារម្មណ៍សម្រាប់អនុវត្ត Loop និង Condition។ Program ជ្រើសលេខសម្ងាត់ ១ ដល់ ១០០ ហើយអ្នកប្រើទាយរហូតត្រូវ។",
  time: "៧៥ នាទី",
  level: 1,
  concepts: ["Random", "while loop", "if-else", "boolean", "Scanner"],
  objectives: [
    "ប្រើ <code>Random</code> បង្កើតលេខសម្ងាត់។",
    "ប្រើ while loop រហូតឈានដល់លក្ខខណ្ឌ។",
    "ផ្តល់តម្រុយ Too low / Too high។",
    "រាប់ចំនួនដងដែលអ្នកប្រើទាយ។"
  ],
  requirements: [
    "លេខសម្ងាត់ចន្លោះ 1 ដល់ 100។",
    "Loop រហូតទាយត្រូវ។",
    "បង្ហាញ Too low ឬ Too high។",
    "បង្ហាញចំនួន Attempts។"
  ],
  steps: [
    "បង្កើត File <code>GuessingGame.java</code>។",
    "Import <code>Random</code> និង <code>Scanner</code>។",
    "បង្កើតលេខសម្ងាត់ <code>random.nextInt(100) + 1</code>។",
    "ប្រើ while loop អានការទាយ។",
    "ប្រៀបធៀបជាមួយលេខសម្ងាត់ ហើយបង្ហាញតម្រុយ។",
    "ពេលត្រូវ បង្ហាញចំនួន Attempts និងបញ្ចប់។"
  ],
  file: "GuessingGame.java",
  code: `import java.util.Random;
import java.util.Scanner;

public class GuessingGame {
    public static void main(String[] args) {
        Random random = new Random();
        int secret = random.nextInt(100) + 1;
        Scanner scanner = new Scanner(System.in);
        int attempts = 0;
        boolean guessed = false;

        System.out.println("Guess a number between 1 and 100");

        while (!guessed) {
            System.out.print("Your guess: ");
            int guess = scanner.nextInt();
            attempts++;

            if (guess == secret) {
                guessed = true;
                System.out.println("Correct! Attempts: " + attempts);
            } else if (guess < secret) {
                System.out.println("Too low");
            } else {
                System.out.println("Too high");
            }
        }

        scanner.close();
    }
}`,
  explanation: [
    "<code>nextInt(100)</code> ត្រឡប់ 0 ដល់ 99 ដូច្នេះបូក 1 បាន 1 ដល់ 100។",
    "<code>boolean guessed</code> គ្រប់គ្រងការបន្ត Loop។",
    "<code>attempts++</code> រាប់ចំនួនដងដែលបានទាយ។",
    "Condition បីផ្នែក៖ ត្រូវ, តូចពេក, ធំពេក។"
  ],
  output: `Guess a number between 1 and 100
Your guess: 50
Too low
Your guess: 75
Too high
Your guess: 62
Correct! Attempts: 3`,
  improvements: [
    "កំណត់ចំនួន Attempts អតិបរមា។",
    "អនុញ្ញាតឱ្យលេងម្តងទៀតដោយមិនបិទ Program។",
    "បង្ហាញជួរលេខដែលនៅសល់។"
  ],
  challenges: [
    "បន្ថែម Level ងាយ/មធ្យម/ពិបាក ដែលប្តូរជួរលេខ។",
    "រក្សាទុក Score ខ្ពស់បំផុត (ចំនួន Attempts តិចបំផុត)។",
    "បង្កើតជា ២ អ្នកលេងប្តូរវេន។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "multiplication-table",
  num: 4,
  title: "Multiplication Table",
  short: "បង្ហាញតារាងគុណដោយ Nested Loop និង Formatted Output។",
  intro: "Project នេះអនុវត្ត Nested Loop និងការតម្រឹម Output។ អ្នកនឹងបង្កើត App ដែលបង្ហាញតារាងគុណ ១ ដល់ ១០ សម្រាប់លេខដែលអ្នកប្រើជ្រើស។",
  time: "៦០ នាទី",
  level: 1,
  concepts: ["Nested loop", "for loop", "printf", "Scanner"],
  objectives: [
    "ប្រើ for loop សម្រាប់តារាងគុណ។",
    "យល់ពី Nested Loop។",
    "តម្រឹម Output ដោយ <code>printf</code>។",
    "បង្កើតតារាងច្រើនលេខក្នុងពេលតែមួយ។"
  ],
  requirements: [
    "អានលេខពីអ្នកប្រើ។",
    "បង្ហាញគុណ 1 ដល់ 10។",
    "ប្រើទម្រង់ <code>n x i = result</code>។",
    "Output ត្រូវតម្រឹមអានងាយ។"
  ],
  steps: [
    "បង្កើត File <code>MultiplicationTable.java</code>។",
    "អានលេខដោយ Scanner។",
    "ប្រើ for loop ពី 1 ដល់ 10។",
    "គណនា <code>number * i</code>។",
    "បង្ហាញជាទម្រង់តារាង។",
    "សាកល្បងជាមួយលេខផ្សេងៗ។"
  ],
  file: "MultiplicationTable.java",
  code: `import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }

        scanner.close();
    }
}`,
  explanation: [
    "Loop ដំណើរការ ១០ ដងសម្រាប់គុណ ១ ដល់ ១០។",
    "<code>(number * i)</code> គណនាផលគុណមុនភ្ជាប់ String។",
    "ការបង្ហាញតាមទម្រង់ថេរ ធ្វើឱ្យតារាងអានងាយ។"
  ],
  output: `Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,
  improvements: [
    "អនុញ្ញាតឱ្យកំណត់ចន្លោះចាប់ផ្តើម និងបញ្ចប់។",
    "បង្ហាញតារាងគុណ ១ ដល់ ១០ ទាំងអស់ជា Grid។",
    "ប្រើ <code>printf</code> ដើម្បីតម្រឹម Column។"
  ],
  challenges: [
    "បង្កើតតារាងគុណ ១២x១២ ជា Grid តម្រឹម។",
    "បន្ថែមជម្រើសបង្ហាញតែលេខគូ ឬលេខសេស។",
    "រក្សាទុកតារាងទៅ File។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "score-stats",
  num: 5,
  title: "Score Statistics",
  short: "គណនាផលបូក មធ្យមភាគ អតិបរមា និងអប្បបរមាពី Array។",
  intro: "Project នេះអនុវត្ត Array, Loop, Accumulator និងការស្វែងរកតម្លៃខ្ពស់/ទាប។ អ្នកនឹងសរសេរ App អានពិន្ទុ ៥ មុខ ហើយបង្ហាញស្ថិតិសំខាន់ៗ។",
  time: "៧៥ នាទី",
  level: 2,
  concepts: ["Array", "for-each", "Accumulator", "Max/Min", "Casting"],
  objectives: [
    "ផ្ទុកទិន្នន័យក្នុង Array។",
    "គណនាផលបូក និងមធ្យមភាគ។",
    "រកតម្លៃអតិបរមា និងអប្បបរមា។",
    "ប្រើ for-each ដើរលើ Array។"
  ],
  requirements: [
    "បង្កើត Array ទំហំ ៥។",
    "អានពិន្ទុដោយ Loop។",
    "គណនា Sum, Average, Max, Min។",
    "បង្ហាញលទ្ធផលទាំង ៤។"
  ],
  steps: [
    "បង្កើត File <code>ScoreStats.java</code>។",
    "បង្កើត <code>int[] scores = new int[5]</code>។",
    "ប្រើ for loop អានពិន្ទុចូល Array។",
    "កំណត់ max និង min ជា <code>scores[0]</code>។",
    "ប្រើ for-each បូក sum និងធ្វើបច្ចុប្បន្នភាព max/min។",
    "គណនា average និងបង្ហាញលទ្ធផល។"
  ],
  file: "ScoreStats.java",
  code: `import java.util.Scanner;

public class ScoreStats {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] scores = new int[5];

        for (int i = 0; i < scores.length; i++) {
            System.out.print("Score " + (i + 1) + ": ");
            scores[i] = scanner.nextInt();
        }

        int sum = 0;
        int max = scores[0];
        int min = scores[0];

        for (int score : scores) {
            sum += score;
            if (score > max) {
                max = score;
            }
            if (score < min) {
                min = score;
            }
        }

        double average = (double) sum / scores.length;

        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
        System.out.println("Max: " + max);
        System.out.println("Min: " + min);

        scanner.close();
    }
}`,
  explanation: [
    "Array មានទំហំថេរ ៥ សម្រាប់ពិន្ទុ ៥ មុខ។",
    "max និង min ចាប់ផ្តើមពីធាតុទីមួយ ដើម្បីប្រៀបធៀបបន្ត។",
    "for-each អានគ្រប់ធាតុដោយមិនចាំបាច់ Index។",
    "<code>(double) sum</code> ធានាថាការចែកបានទសភាគ។"
  ],
  output: `Score 1: 75
Score 2: 88
Score 3: 92
Score 4: 60
Score 5: 81
Sum: 396
Average: 79.2
Max: 92
Min: 60`,
  improvements: [
    "អនុញ្ញាតឱ្យកំណត់ចំនួនពិន្ទុដោយអ្នកប្រើ។",
    "បង្ហាញពិន្ទុខ្ពស់បំផុតទីពីរ។",
    "រាប់ចំនួនពិន្ទុលើសមធ្យមភាគ។"
  ],
  challenges: [
    "ប្រើ <code>ArrayList</code> ជំនួស Array ដើម្បីទទួលចំនួនមិនកំណត់។",
    "Sort ពិន្ទុពីតូចទៅធំ មុនបង្ហាញ។",
    "គណនា Median។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "text-analyzer",
  num: 6,
  title: "Text Analyzer",
  short: "វិភាគអត្ថបទ៖ រាប់អក្សរ ពាក្យ ស្រៈ និងបង្ហាញអត្ថបទបញ្ច្រាស។",
  intro: "Project នេះអនុវត្ត String Method, Loop លើ Character និង <code>StringBuilder</code>។ អ្នកនឹងបង្កើត App វិភាគអត្ថបទដែលអ្នកប្រើបញ្ចូល។",
  time: "៨០ នាទី",
  level: 2,
  concepts: ["String", "charAt", "Loop", "split", "StringBuilder"],
  objectives: [
    "ប្រើ <code>charAt</code> និង Loop លើ String។",
    "រាប់ស្រៈ និងព្យញ្ជនៈអង់គ្លេស។",
    "បំបែកពាក្យដោយ <code>split</code>។",
    "បង្ហាញអត្ថបទបញ្ច្រាសដោយ StringBuilder។"
  ],
  requirements: [
    "អានអត្ថបទមួយបន្ទាត់។",
    "រាប់ Characters និង Words។",
    "រាប់ Vowels និង Consonants។",
    "បង្ហាញអត្ថបទបញ្ច្រាស។"
  ],
  steps: [
    "បង្កើត File <code>TextAnalyzer.java</code>។",
    "អានអត្ថបទដោយ <code>nextLine()</code>។",
    "បំប្លែងជា Lowercase សម្រាប់ការរាប់។",
    "Loop លើ Character រាប់ Vowels/Consonants។",
    "ប្រើ <code>split(\"\\\\s+\")</code> រាប់ពាក្យ។",
    "បង្ហាញអត្ថបទបញ្ច្រាសដោយ <code>StringBuilder.reverse()</code>។"
  ],
  file: "TextAnalyzer.java",
  code: `import java.util.Scanner;

public class TextAnalyzer {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter text: ");
        String text = scanner.nextLine();

        String lower = text.toLowerCase();
        int vowels = 0;
        int consonants = 0;

        for (int i = 0; i < lower.length(); i++) {
            char ch = lower.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }

        String[] words = text.trim().isEmpty() ? new String[0] : text.trim().split("\\\\s+");
        String reversed = new StringBuilder(text).reverse().toString();

        System.out.println("Characters: " + text.length());
        System.out.println("Words: " + words.length);
        System.out.println("Vowels: " + vowels);
        System.out.println("Consonants: " + consonants);
        System.out.println("Reversed: " + reversed);

        scanner.close();
    }
}`,
  explanation: [
    "toLowerCase ធ្វើឱ្យការត្រួតពិនិត្យស្រៈសាមញ្ញ។",
    "Condition <code>ch &gt;= 'a' &amp;&amp; ch &lt;= 'z'</code> រាប់តែអក្សរអង់គ្លេស។",
    "split បំបែកអត្ថបទជាពាក្យតាម Whitespace។",
    "<code>StringBuilder.reverse()</code> បញ្ច្រាសអត្ថបទ។"
  ],
  output: `Enter text: Java is fun
Characters: 11
Words: 3
Vowels: 4
Consonants: 6
Reversed: nuf si avaJ`,
  improvements: [
    "រាប់អក្សរធំ និងតូចដោយឡែក។",
    "រាប់ពាក្យមិនស្ទួនដោយ HashSet។",
    "គណនាប្រវែងពាក្យវែងបំផុត។"
  ],
  challenges: [
    "គាំទ្រអក្សរខ្មែរ (រាប់តួអក្សរ)។",
    "អានអត្ថបទពី File និងសរសេរលទ្ធផលទៅ File។",
    "បង្កើត Menu វិភាគជាច្រើនប្រភេទ។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "bank-account",
  num: 7,
  title: "Bank Account Simulator",
  short: "អនុវត្ត OOP និង Encapsulation តាមរយៈគណនីធនាគារ។",
  intro: "Project នេះអនុវត្ត Class, Object, Constructor, private Field និង Method។ អ្នកនឹងបង្កើតគណនីធនាគារដែលអាចដាក់ប្រាក់ ដកប្រាក់ និងពិនិត្យសមតុល្យដោយសុវត្ថិភាព។",
  time: "៩០ នាទី",
  level: 3,
  concepts: ["Class", "Object", "Encapsulation", "Constructor", "Methods"],
  objectives: [
    "បង្កើត Class ដែលមាន Field និង Method។",
    "ប្រើ private និង Getter សម្រាប់ Encapsulation។",
    "ពិនិត្យលក្ខខណ្ឌក្នុង Deposit/Withdraw។",
    "បង្កើត Object និងហៅ Method។"
  ],
  requirements: [
    "Class <code>BankAccount</code> មាន owner និង balance។",
    "Field ត្រូវជា private។",
    "Method deposit និង withdraw ពិនិត្យតម្លៃ។",
    "Getter សម្រាប់ balance និង owner។",
    "បង្ហាញសារពេលដកលើសសមតុល្យ។"
  ],
  steps: [
    "បង្កើត File <code>BankApp.java</code>។",
    "បង្កើត Class <code>BankAccount</code> ជាមួយ private Field។",
    "បន្ថែម Constructor។",
    "សរសេរ Method deposit និង withdraw ជាមួយ Validation។",
    "បន្ថែម Getter។",
    "ក្នុង main បង្កើត Object និងសាកល្បងដាក់/ដកប្រាក់។"
  ],
  file: "BankApp.java",
  code: `class BankAccount {
    private String owner;
    private double balance;

    BankAccount(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient balance");
        }
    }

    double getBalance() {
        return balance;
    }

    String getOwner() {
        return owner;
    }
}

public class BankApp {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("Dara", 100.0);

        account.deposit(50);
        account.withdraw(30);
        account.withdraw(500);

        System.out.println(account.getOwner() + " balance: " + account.getBalance());
    }
}`,
  explanation: [
    "Field private ការពារការកែតម្លៃដោយផ្ទាល់ពីខាងក្រៅ។",
    "Constructor កំណត់ owner និង balance ពេលបង្កើត Object។",
    "deposit ពិនិត្យថាចំនួនវិជ្ជមាន។",
    "withdraw ពិនិត្យទាំងចំនួនវិជ្ជមាន និងសមតុល្យគ្រប់គ្រាន់។",
    "Getter អនុញ្ញាតឱ្យអានតម្លៃដោយមិនកែដោយផ្ទាល់។"
  ],
  output: `Deposited: 50.0
Withdrawn: 30.0
Insufficient balance
Dara balance: 120.0`,
  improvements: [
    "បន្ថែមប្រវត្តិប្រតិបត្តិការ (Transaction History)។",
    "បន្ថែមការផ្ទេរប្រាក់រវាងគណនី។",
    "បង្កើត Menu សម្រាប់អ្នកប្រើ។"
  ],
  challenges: [
    "បន្ថែម Class <code>SavingsAccount</code> ដែលមានការប្រាក់។",
    "រក្សាទុកប្រតិបត្តិការទៅ File។",
    "អនុវត្ត Interface <code>Transferable</code>។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "library-system",
  num: 8,
  title: "Library System",
  short: "ប្រើ Inheritance, Abstraction និង Polymorphism ក្នុងបណ្ណាល័យតូច។",
  intro: "Project នេះអនុវត្ត Abstract Class, Inheritance និង Polymorphism។ អ្នកនឹងបង្កើត Model សម្រាប់ Book និង Ebook ដែលអាចបង្ហាញប្រភេទរបស់ខ្លួនតាមរយៈ Method តែមួយ។",
  time: "៩០ នាទី",
  level: 3,
  concepts: ["Abstract class", "Inheritance", "Polymorphism", "Override", "Array"],
  objectives: [
    "បង្កើត Abstract Class។",
    "ប្រើ <code>extends</code> និង <code>super</code>។",
    "Override Method ក្នុង Subclass។",
    "ប្រើ Polymorphism ជាមួយ Array។"
  ],
  requirements: [
    "Abstract Class <code>LibraryItem</code>។",
    "Subclass <code>Book</code> និង <code>Ebook</code>។",
    "Method <code>getType()</code> ត្រូវ Override។",
    "បង្ហាញ Item ទាំងអស់ក្នុង Loop។"
  ],
  steps: [
    "បង្កើត File <code>LibraryApp.java</code>។",
    "បង្កើត Abstract Class <code>LibraryItem</code> ជាមួយ Field title។",
    "បន្ថែម Abstract Method <code>getType()</code>។",
    "បង្កើត Subclass Book និង Ebook។",
    "Override <code>getType()</code> ក្នុង Subclass នីមួយៗ។",
    "បង្កើត Array នៃ <code>LibraryItem</code> និង Loop បង្ហាញ។"
  ],
  file: "LibraryApp.java",
  code: `abstract class LibraryItem {
    protected String title;

    LibraryItem(String title) {
        this.title = title;
    }

    abstract String getType();

    void display() {
        System.out.println(getType() + ": " + title);
    }
}

class Book extends LibraryItem {
    Book(String title) {
        super(title);
    }

    String getType() {
        return "Book";
    }
}

class Ebook extends LibraryItem {
    Ebook(String title) {
        super(title);
    }

    String getType() {
        return "Ebook";
    }
}

public class LibraryApp {
    public static void main(String[] args) {
        LibraryItem[] items = {
            new Book("Java Basics"),
            new Ebook("OOP Guide")
        };

        for (LibraryItem item : items) {
            item.display();
        }
    }
}`,
  explanation: [
    "LibraryItem ជា Abstract Class មិនអាចបង្កើត Object ផ្ទាល់បានទេ។",
    "<code>super(title)</code> ហៅ Constructor របស់ Superclass។",
    "Book និង Ebook Override <code>getType()</code>។",
    "Array ប្រភេទ <code>LibraryItem</code> អាចផ្ទុក Subclass ទាំងអស់។",
    "ការហៅ <code>display()</code> ជា Polymorphism នៅ Runtime។"
  ],
  output: `Book: Java Basics
Ebook: OOP Guide`,
  improvements: [
    "បន្ថែម Class <code>Magazine</code>។",
    "បន្ថែម Method Borrow និង Return។",
    "រក្សាទុកបញ្ជី Item ទៅ File។"
  ],
  challenges: [
    "បង្កើត Interface <code>Borrowable</code> សម្រាប់ Item ដែលខ្ចីបាន។",
    "បន្ថែម Search តាមចំណងជើង។",
    "គណនាចំនួន Item តាមប្រភេទដោយ HashMap។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "todo-list",
  num: 9,
  title: "To-Do List",
  short: "កម្មវិធីការងារប្រចាំថ្ងៃដែលរក្សាទុកទៅ File។",
  intro: "Project នេះរួមបញ្ចូល ArrayList, Menu Loop, File I/O និង Validation។ អ្នកនឹងបង្កើត App To-Do ដែលបន្ថែម បង្ហាញ លុប និងរក្សាទុកការងារទៅ File ដោយស្វ័យប្រវត្តិ។",
  time: "១០០ នាទី",
  level: 3,
  concepts: ["ArrayList", "Menu loop", "File I/O", "switch", "Validation"],
  objectives: [
    "គ្រប់គ្រង List ដោយ ArrayList។",
    "បង្កើត Menu Loop ដែលមានជម្រើសច្រើន។",
    "អាន និងសរសេរ File។",
    "ពិនិត្យ Index មុនលុប។"
  ],
  requirements: [
    "Menu: Add, List, Remove, Exit។",
    "រក្សាទុក Task ទៅ <code>todo.txt</code>។",
    "អាន Task ពេលចាប់ផ្តើម។",
    "បង្ហាញលេខរៀង និង Validation។"
  ],
  steps: [
    "បង្កើត File <code>TodoApp.java</code>។",
    "សរសេរ Method <code>loadTasks</code> និង <code>saveTasks</code>។",
    "បង្កើត Menu Loop ជាមួយ switch។",
    "អនុវត្ត Add, List និង Remove។",
    "ហៅ saveTasks បន្ទាប់ពីកែប្រែ។",
    "សាកល្បងបិទ និងបើក Program ឡើងវិញដើម្បីពិនិត្យ Persistence។"
  ],
  file: "TodoApp.java",
  code: `import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Scanner;

public class TodoApp {
    public static void main(String[] args) {
        Path path = Path.of("todo.txt");
        ArrayList<String> tasks = loadTasks(path);
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            System.out.println("1. Add  2. List  3. Remove  0. Exit");
            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    System.out.print("Task: ");
                    String task = scanner.nextLine();
                    tasks.add(task);
                    saveTasks(path, tasks);
                    System.out.println("Task added");
                    break;
                case 2:
                    if (tasks.isEmpty()) {
                        System.out.println("No tasks");
                    } else {
                        for (int i = 0; i < tasks.size(); i++) {
                            System.out.println((i + 1) + ". " + tasks.get(i));
                        }
                    }
                    break;
                case 3:
                    System.out.print("Task number: ");
                    int index = scanner.nextInt();
                    scanner.nextLine();
                    if (index >= 1 && index <= tasks.size()) {
                        tasks.remove(index - 1);
                        saveTasks(path, tasks);
                        System.out.println("Task removed");
                    } else {
                        System.out.println("Invalid number");
                    }
                    break;
                case 0:
                    running = false;
                    break;
                default:
                    System.out.println("Invalid choice");
            }
        }

        scanner.close();
    }

    static ArrayList<String> loadTasks(Path path) {
        ArrayList<String> tasks = new ArrayList<>();
        try {
            if (Files.exists(path)) {
                tasks.addAll(Files.readAllLines(path));
            }
        } catch (IOException e) {
            System.out.println("Cannot load tasks");
        }
        return tasks;
    }

    static void saveTasks(Path path, ArrayList<String> tasks) {
        try {
            Files.write(path, tasks);
        } catch (IOException e) {
            System.out.println("Cannot save tasks");
        }
    }
}`,
  explanation: [
    "loadTasks អាន File ប្រសិនបើមាន។",
    "Menu Loop បន្តរហូតអ្នកប្រើជ្រើស 0។",
    "Index ដែលបង្ហាញចាប់ពី 1 ដូច្នេះលុបដោយ <code>index - 1</code>។",
    "saveTasks ហៅរាល់ពេលមានការផ្លាស់ប្តូរ ដើម្បីកុំបាត់ទិន្នន័យ។",
    "Files.write សរសេរជំនួស File ទាំងមូលដោយ List។"
  ],
  output: `1. Add  2. List  3. Remove  0. Exit
1
Task: Learn Java
Task added
1. Add  2. List  3. Remove  0. Exit
2
1. Learn Java
1. Add  2. List  3. Remove  0. Exit
0`,
  improvements: [
    "បន្ថែម Due Date និង Priority។",
    "បន្ថែមស្ថានភាព Done/Undone។",
    "បង្ហាញចំនួន Task ដែលនៅសល់។"
  ],
  challenges: [
    "រក្សាទុកជា CSV ជាមួយ Priority។",
    "បន្ថែម Edit Task។",
    "បន្ថែម Search តាមពាក្យគន្លឹះ។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "contact-book",
  num: 10,
  title: "Contact Book",
  short: "Capstone ប្រើ Collections, File I/O និង Menu សម្រាប់គ្រប់គ្រងទំនាក់ទំនង។",
  intro: "Project បញ្ចប់ដែលរួមបញ្ចូលចំណេះដឹងសំខាន់ៗ៖ HashMap, Menu Loop, File Persistence និងការគ្រប់គ្រង Input។ អ្នកនឹងបង្កើត Contact Book ដែលអាចបន្ថែម ស្វែងរក បង្ហាញ និងរក្សាទុកទំនាក់ទំនង។",
  time: "១២០ នាទី",
  level: 4,
  concepts: ["HashMap", "Collections", "File I/O", "Menu loop", "Exception handling"],
  objectives: [
    "ប្រើ HashMap សម្រាប់ Key-Value។",
    "រក្សាទុក និងអានទិន្នន័យពី CSV។",
    "គ្រប់គ្រង Menu និង Input។",
    "បង្កើត App ដែលប្រើបានពិតប្រាកដ។"
  ],
  requirements: [
    "Menu: Add, Find, List, Save, Exit។",
    "ផ្ទុកឈ្មោះ → លេខទូរស័ព្ទក្នុង HashMap។",
    "អាន/សរសេរ <code>contacts.csv</code>។",
    "បង្ហាញ Not found ពេលរកមិនឃើញ។",
    "Catch IOException ពេល File មានបញ្ហា។"
  ],
  steps: [
    "បង្កើត File <code>ContactBook.java</code>។",
    "បង្កើត static HashMap សម្រាប់ Contacts។",
    "សរសេរ Method load និង save សម្រាប់ CSV។",
    "បង្កើត Menu Loop ជាមួយ switch។",
    "អនុវត្ត Add, Find និង List។",
    "ហៅ load ពេលចាប់ផ្តើម និង save ពេលចាកចេញ។",
    "សាកល្បងបន្ថែម ស្វែងរក និងបើកឡើងវិញ។"
  ],
  file: "ContactBook.java",
  code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.Scanner;

public class ContactBook {
    static HashMap<String, String> contacts = new HashMap<>();

    public static void main(String[] args) {
        load();
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            System.out.println("1. Add  2. Find  3. List  4. Save  0. Exit");
            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    System.out.print("Name: ");
                    String name = scanner.nextLine();
                    System.out.print("Phone: ");
                    String phone = scanner.nextLine();
                    contacts.put(name, phone);
                    System.out.println("Contact saved");
                    break;
                case 2:
                    System.out.print("Name: ");
                    String search = scanner.nextLine();
                    String found = contacts.get(search);
                    System.out.println(found == null ? "Not found" : found);
                    break;
                case 3:
                    for (String key : contacts.keySet()) {
                        System.out.println(key + ": " + contacts.get(key));
                    }
                    break;
                case 4:
                    save();
                    break;
                case 0:
                    save();
                    running = false;
                    break;
                default:
                    System.out.println("Invalid choice");
            }
        }

        scanner.close();
    }

    static void load() {
        try (BufferedReader reader = new BufferedReader(new FileReader("contacts.csv"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 2) {
                    contacts.put(parts[0], parts[1]);
                }
            }
        } catch (IOException e) {
            System.out.println("No contacts file yet");
        }
    }

    static void save() {
        try (FileWriter writer = new FileWriter("contacts.csv")) {
            for (String name : contacts.keySet()) {
                writer.write(name + "," + contacts.get(name));
                writer.write(System.lineSeparator());
            }
            System.out.println("Saved " + contacts.size() + " contacts");
        } catch (IOException e) {
            System.out.println("Save failed");
        }
    }
}`,
  explanation: [
    "HashMap ផ្ទុកឈ្មោះជា Key និងលេខទូរស័ព្ទជា Value។",
    "load អាន CSV ហើយបំពេញ HashMap។",
    "save សរសេរ HashMap ទៅ CSV មួយបន្ទាត់ក្នុងមួយ Contact។",
    "Ternary Operator បង្ហាញ Not found ឬលេខទូរស័ព្ទ។",
    "try-with-resources បិទ File ស្វ័យប្រវត្តិ។"
  ],
  output: `1. Add  2. Find  3. List  4. Save  0. Exit
1
Name: Dara
Phone: 012345678
Contact saved
1. Add  2. Find  3. List  4. Save  0. Exit
2
Name: Dara
012345678
1. Add  2. Find  3. List  4. Save  0. Exit
0
Saved 1 contacts`,
  improvements: [
    "បន្ថែម Email និងអាសយដ្ឋានដោយប្រើ Class Contact។",
    "បន្ថែម Edit និង Delete។",
    "បង្ហាញ Contact តាមលំដាប់អក្សរ។"
  ],
  challenges: [
    "ប្តូរ HashMap ទៅ <code>TreeMap</code> ដើម្បី Sort ស្វ័យប្រវត្តិ។",
    "បន្ថែម Search តាមផ្នែកនៃឈ្មោះ។",
    "បង្កើត Export ទៅ CSV ជាមួយ Header។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "student-information-system",
  num: 11,
  title: "Student Information System",
  short: "ប្រព័ន្ធគ្រប់គ្រងព័ត៌មានសិស្សដោយ Class, ArrayList និង Menu Loop។",
  intro: "Project នេះអនុវត្ត OOP ជាក់ស្តែង។ អ្នកនឹងបង្កើត <code>Student</code> សម្រាប់ផ្ទុកព័ត៌មាន និង <code>StudentManager</code> សម្រាប់បន្ថែម ស្វែងរក លុប និងបង្ហាញសិស្ស។ នេះជាគំរូដំបូងនៃប្រព័ន្ធគ្រប់គ្រងទិន្នន័យ។",
  time: "១២០ នាទី",
  level: 3,
  concepts: ["Classes", "ArrayList", "Encapsulation", "Menu Loop", "Scanner"],
  objectives: [
    "បង្កើត Class ដែលរួមបញ្ចូលទិន្នន័យ និងអាកប្បកិរិយា។",
    "ប្រើ ArrayList សម្រាប់ផ្ទុក Object ច្រើន។",
    "បំបែក Logic ទៅ Class Manager។",
    "សរសេរ Menu Loop ដែលគ្រប់គ្រង CRUD មូលដ្ឋាន។"
  ],
  requirements: [
    "Class Student មាន id, name, age ជា private។",
    "Class StudentManager មាន add, findById, remove, showAll។",
    "Menu មាន Add, Find, Remove, List, Exit។",
    "បង្ហាញសារច្បាស់លាស់ពេលរកមិនឃើញ។"
  ],
  steps: [
    "បង្កើត File <code>StudentInfoApp.java</code>។",
    "សរសេរ Class <code>Student</code> ជាមួយ Constructor និង toString។",
    "សរសេរ Class <code>StudentManager</code> ជាមួយ <code>ArrayList&lt;Student&gt;</code>។",
    "បង្កើត Method add, findById, remove និង showAll។",
    "សរសេរ Menu Loop ដោយ do-while និង switch។",
    "អាន Input ដោយ Scanner និងគ្រប់គ្រង New Line។",
    "Compile, Run និងសាកល្បង Add, Find, Remove, List។"
  ],
  file: "StudentInfoApp.java",
  code: `import java.util.ArrayList;
import java.util.Scanner;

class Student {
    private int id;
    private String name;
    private int age;

    Student(int id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return id + " | " + name + " | " + age;
    }
}

class StudentManager {
    private ArrayList<Student> students = new ArrayList<>();

    void add(Student student) {
        students.add(student);
    }

    Student findById(int id) {
        for (Student s : students) {
            if (s.getId() == id) {
                return s;
            }
        }
        return null;
    }

    boolean remove(int id) {
        Student s = findById(id);
        if (s == null) {
            return false;
        }
        students.remove(s);
        return true;
    }

    void showAll() {
        if (students.isEmpty()) {
            System.out.println("No students.");
            return;
        }
        for (Student s : students) {
            System.out.println(s);
        }
    }
}

public class StudentInfoApp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StudentManager manager = new StudentManager();
        int choice;

        do {
            System.out.println("1. Add  2. Find  3. Remove  4. List  0. Exit");
            choice = sc.nextInt();
            switch (choice) {
                case 1:
                    System.out.print("ID: ");
                    int id = sc.nextInt();
                    sc.nextLine();
                    System.out.print("Name: ");
                    String name = sc.nextLine();
                    System.out.print("Age: ");
                    int age = sc.nextInt();
                    manager.add(new Student(id, name, age));
                    System.out.println("Student added.");
                    break;
                case 2:
                    System.out.print("ID: ");
                    Student s = manager.findById(sc.nextInt());
                    System.out.println(s == null ? "Not found." : s);
                    break;
                case 3:
                    System.out.print("ID: ");
                    System.out.println(manager.remove(sc.nextInt()) ? "Removed." : "Not found.");
                    break;
                case 4:
                    manager.showAll();
                    break;
                case 0:
                    break;
                default:
                    System.out.println("Invalid choice.");
            }
        } while (choice != 0);

        sc.close();
    }
}`,
  explanation: [
    "<code>Student</code> លាក់ Field ដោយ private និងផ្តល់ Getter សម្រាប់អាន។",
    "<code>StudentManager</code> ទទួលខុសត្រូវលើបញ្ជីសិស្ស មិនមែន main។",
    "<code>findById</code> ត្រឡប់ Object ឬ <code>null</code> ពេលរកមិនឃើញ។",
    "<code>students.remove(s)</code> លុប Object ចេញពី ArrayList។",
    "Menu Loop បន្តរហូតអ្នកប្រើជ្រើស 0។"
  ],
  output: `1. Add  2. Find  3. Remove  4. List  0. Exit
1
ID: 1
Name: Dara
Age: 20
Student added.
1. Add  2. Find  3. Remove  4. List  0. Exit
4
1 | Dara | 20
1. Add  2. Find  3. Remove  4. List  0. Exit
0`,
  improvements: [
    "បន្ថែម Edit សម្រាប់កែព័ត៌មានសិស្ស។",
    "ពិនិត្យ ID ស្ទួនមុនពេលបន្ថែម។",
    "រក្សាទុកទិន្នន័យទៅ File ដើម្បីមិនបាត់ពេលបិទកម្មវិធី។"
  ],
  challenges: [
    "បន្ថែមការស្វែងរកតាមឈ្មោះជាមួយ <code>contains()</code>។",
    "តម្រៀបសិស្សតាមអាយុដោយ Comparator។",
    "បន្ថែមពិន្ទុ និងគណនានិទស្សន្តក្នុង Class Student។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "simple-calculator",
  num: 12,
  title: "Simple Calculator",
  short: "ម៉ាស៊ីនគិតលេខ Console ដែលគណនាបូក ដក គុណ ចែក ម្តងហើយម្តងទៀត។",
  intro: "Project នេះសមស្របសម្រាប់អ្នកចាប់ផ្តើម។ អ្នកនឹងប្រើ Scanner, switch, do-while និងការពិនិត្យការចែកដោយសូន្យ ដើម្បីបង្កើត Calculator តូចមួយដែលប្រើបានពិត។",
  time: "៦០ នាទី",
  level: 1,
  concepts: ["Scanner", "switch", "do-while", "double", "if-else"],
  objectives: [
    "អានជម្រើស និងលេខពីអ្នកប្រើ។",
    "ប្រើ switch ជ្រើសប្រតិបត្តិការ។",
    "ពិនិត្យការចែកដោយសូន្យ។",
    "អនុញ្ញាតឱ្យគណនាច្រើនដងក្នុង Run តែមួយ។"
  ],
  requirements: [
    "មានម៉ឺនុយបូក ដក គុណ ចែក និងចាកចេញ។",
    "អានលេខពីរជា double។",
    "បង្ហាញលទ្ធផលតាមប្រតិបត្តិការ។",
    "បង្ហាញសារព្រមានពេលចែកដោយ 0។"
  ],
  steps: [
    "បង្កើត File <code>SimpleCalculator.java</code>។",
    "បង្កើត Scanner និង Variable choice។",
    "បង្ហាញម៉ឺនុយក្នុង do-while។",
    "អាន choice និងពិនិត្យថាត្រឹមត្រូវ។",
    "អានលេខពីរជា double។",
    "ប្រើ switch ដើម្បីគណនា និងបង្ហាញលទ្ធផល។",
    "សាកល្បងគ្រប់ប្រតិបត្តិការ រួមទាំងចែកដោយ 0។"
  ],
  file: "SimpleCalculator.java",
  code: `import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            System.out.println("1) +  2) -  3) *  4) /  0) Exit");
            choice = sc.nextInt();

            if (choice >= 1 && choice <= 4) {
                System.out.print("First number: ");
                double a = sc.nextDouble();
                System.out.print("Second number: ");
                double b = sc.nextDouble();

                switch (choice) {
                    case 1:
                        System.out.println("Result: " + (a + b));
                        break;
                    case 2:
                        System.out.println("Result: " + (a - b));
                        break;
                    case 3:
                        System.out.println("Result: " + (a * b));
                        break;
                    case 4:
                        if (b == 0) {
                            System.out.println("Cannot divide by zero.");
                        } else {
                            System.out.println("Result: " + (a / b));
                        }
                        break;
                }
            }
        } while (choice != 0);

        sc.close();
    }
}`,
  explanation: [
    "<code>do-while</code> ធានាថាម៉ឺនុយបង្ហាញយ៉ាងហោចណាស់ម្តង។",
    "លក្ខខណ្ឌ <code>choice &gt;= 1 &amp;&amp; choice &lt;= 4</code> ការពារការអានលេខពេលជ្រើសចាកចេញ។",
    "<code>double</code> អនុញ្ញាតលទ្ធផលទសភាគ។",
    "ការពិនិត្យ <code>b == 0</code> ការពារ ArithmeticException។",
    "switch បែងចែក Logic តាមប្រតិបត្តិការ។"
  ],
  output: `1) +  2) -  3) *  4) /  0) Exit
1
First number: 10
Second number: 5
Result: 15.0
1) +  2) -  3) *  4) /  0) Exit
0`,
  improvements: [
    "បន្ថែម Modulo និង Power។",
    "គាំទ្រការគណនាច្រើនលេខក្នុងមួយប្រតិបត្តិការ។",
    "បង្ហាញប្រវត្តិការគណនាក្នុង ArrayList។"
  ],
  challenges: [
    "បន្ថែមការពិនិត្យ Input មិនត្រឹមត្រូវដោយ <code>hasNextDouble()</code>។",
    "បង្កើត Class <code>Calculator</code> ដាច់ដោយឡែកពី main។",
    "បន្ថែមប្រតិបត្តិការវិទ្យាសាស្ត្រដូចជា sqrt និង sin។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "atm-simulation",
  num: 13,
  title: "ATM Simulation",
  short: "សាកល្បង ATM ដែលមាន Deposit, Withdraw, Balance និងការពិនិត្យទឹកប្រាក់។",
  intro: "Project នេះអនុវត្ត Encapsulation និង Validation។ អ្នកនឹងបង្កើត Class <code>BankAccount</code> ដែលលាក់ balance និងផ្តល់ Method deposit, withdraw និង getBalance រួចបង្កើត Menu សម្រាប់អ្នកប្រើ។",
  time: "១០៥ នាទី",
  level: 3,
  concepts: ["Encapsulation", "Classes", "do-while", "switch", "Validation"],
  objectives: [
    "លាក់ Field balance ដោយ private។",
    "ពិនិត្យទឹកប្រាក់មុនពេលដក។",
    "ប្រើ Menu Loop សម្រាប់ប្រតិបត្តិការ ATM។",
    "បង្ហាញសារជោគជ័យ និងបរាជ័យឱ្យច្បាស់។"
  ],
  requirements: [
    "Class BankAccount មាន balance private។",
    "Method deposit, withdraw និង getBalance។",
    "Withdraw មិនអនុញ្ញាតលើសទឹកប្រាក់។",
    "Menu មាន Deposit, Withdraw, Balance, Exit។"
  ],
  steps: [
    "បង្កើត File <code>AtmSimulation.java</code>។",
    "សរសេរ Class <code>BankAccount</code> ជាមួយ balance private។",
    "សរសេរ Method deposit និង withdraw ជាមួយ Validation។",
    "បង្កើត Object BankAccount ក្នុង main។",
    "សរសេរ Menu Loop ដោយ do-while និង switch។",
    "ហៅ Method តាមជម្រើសរបស់អ្នកប្រើ។",
    "សាកល្បងដាក់ប្រាក់ ដកប្រាក់ និងពិនិត្យទឹកប្រាក់។"
  ],
  file: "AtmSimulation.java",
  code: `import java.util.Scanner;

class BankAccount {
    private double balance;

    BankAccount(double initial) {
        if (initial > 0) {
            balance = initial;
        }
    }

    void deposit(double amount) {
        if (amount <= 0) {
            System.out.println("Invalid amount.");
            return;
        }
        balance += amount;
        System.out.println("Deposited: " + amount);
    }

    void withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("Invalid amount.");
        } else if (amount > balance) {
            System.out.println("Insufficient funds.");
        } else {
            balance -= amount;
            System.out.println("Withdrew: " + amount);
        }
    }

    double getBalance() {
        return balance;
    }
}

public class AtmSimulation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BankAccount account = new BankAccount(100);
        int choice;

        do {
            System.out.println("1. Deposit  2. Withdraw  3. Balance  0. Exit");
            choice = sc.nextInt();
            switch (choice) {
                case 1:
                    account.deposit(sc.nextDouble());
                    break;
                case 2:
                    account.withdraw(sc.nextDouble());
                    break;
                case 3:
                    System.out.println("Balance: " + account.getBalance());
                    break;
                case 0:
                    System.out.println("Goodbye");
                    break;
                default:
                    System.out.println("Invalid choice.");
            }
        } while (choice != 0);

        sc.close();
    }
}`,
  explanation: [
    "balance ជា private ដូច្នេះអ្នកប្រើមិនអាចកែដោយផ្ទាល់បានទេ។",
    "deposit បដិសេធចំនួនតិចជាង ឬស្មើ 0។",
    "withdraw ពិនិត្យទាំងចំនួន និងទឹកប្រាក់គ្រប់គ្រាន់។",
    "getBalance ផ្តល់ផ្លូវអានតែមួយដោយសុវត្ថិភាព។",
    "Menu Loop ធ្វើឱ្យ ATM ប្រើបានច្រើនប្រតិបត្តិការ។"
  ],
  output: `1. Deposit  2. Withdraw  3. Balance  0. Exit
1
100
Deposited: 100.0
1. Deposit  2. Withdraw  3. Balance  0. Exit
2
50
Withdrew: 50.0
1. Deposit  2. Withdraw  3. Balance  0. Exit
3
Balance: 150.0
1. Deposit  2. Withdraw  3. Balance  0. Exit
0
Goodbye`,
  improvements: [
    "បន្ថែម PIN មុនពេលប្រើ ATM។",
    "បន្ថែម Transfer ទៅគណនីផ្សេង។",
    "កត់ត្រាប្រវត្តិប្រតិបត្តិការក្នុង ArrayList។"
  ],
  challenges: [
    "បង្កើត Class <code>Transaction</code> សម្រាប់កត់ត្រា Deposit/Withdraw។",
    "បន្ថែមការគិតការប្រាក់ (interest) ប្រចាំខែ។",
    "រក្សាទុក balance ទៅ File និងអានមកវិញពេលបើកកម្មវិធី។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "student-grade-management",
  num: 14,
  title: "Student Grade Management",
  short: "គ្រប់គ្រងពិន្ទុសិស្សច្រើននាក់ និងគណនាមធ្យមភាគ ខ្ពស់បំផុត ទាបបំផុត។",
  intro: "Project នេះអនុវត្ត ArrayList ជាមួយទិន្នន័យច្រើន និងការគណនាស្ថិតិ។ អ្នកនឹងបញ្ចូលឈ្មោះ និងពិន្ទុ រួចបង្កើតរបាយការណ៍សង្ខេបដែលបង្ហាញមធ្យមភាគ ពិន្ទុខ្ពស់បំផុត និងទាបបំផុត។",
  time: "៩០ នាទី",
  level: 2,
  concepts: ["ArrayList", "for loop", "if-else", "double", "Menu Loop"],
  objectives: [
    "ផ្ទុកទិន្នន័យច្រើនដោយ ArrayList។",
    "គណនាមធ្យមភាគពី List។",
    "រកពិន្ទុខ្ពស់បំផុត និងទាបបំផុត។",
    "បង្ហាញរបាយការណ៍សង្ខេប។"
  ],
  requirements: [
    "Menu មាន Add និង Report។",
    "Add អានឈ្មោះ និងពិន្ទុ។",
    "Report បង្ហាញចំនួនសិស្ស មធ្យមភាគ ខ្ពស់ ទាប។",
    "ដោះស្រាយករណីគ្មានទិន្នន័យ។"
  ],
  steps: [
    "បង្កើត File <code>GradeManagement.java</code>។",
    "បង្កើត ArrayList សម្រាប់ឈ្មោះ និងពិន្ទុ។",
    "សរសេរ Menu Loop។",
    "អានឈ្មោះដោយ nextLine និងពិន្ទុដោយ nextDouble។",
    "គណនាផលបូក និងមធ្យមភាគក្នុង Report។",
    "រកពិន្ទុខ្ពស់បំផុត និងទាបបំផុតដោយប្រៀបធៀប។",
    "សាកល្បងជាមួយសិស្សច្រើននាក់។"
  ],
  file: "GradeManagement.java",
  code: `import java.util.ArrayList;
import java.util.Scanner;

public class GradeManagement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> names = new ArrayList<>();
        ArrayList<Double> scores = new ArrayList<>();
        int choice;

        do {
            System.out.println("1. Add  2. Report  0. Exit");
            choice = sc.nextInt();

            if (choice == 1) {
                sc.nextLine();
                System.out.print("Name: ");
                names.add(sc.nextLine());
                System.out.print("Score: ");
                scores.add(sc.nextDouble());
            } else if (choice == 2) {
                if (scores.isEmpty()) {
                    System.out.println("No data.");
                } else {
                    double total = 0;
                    double highest = scores.get(0);
                    double lowest = scores.get(0);

                    for (int i = 0; i < scores.size(); i++) {
                        double s = scores.get(i);
                        total += s;
                        if (s > highest) highest = s;
                        if (s < lowest) lowest = s;
                    }

                    System.out.println("Students: " + scores.size());
                    System.out.println("Average: " + (total / scores.size()));
                    System.out.println("Highest: " + highest);
                    System.out.println("Lowest: " + lowest);
                }
            }
        } while (choice != 0);

        sc.close();
    }
}`,
  explanation: [
    "ArrayList ពីរផ្ទុកឈ្មោះ និងពិន្ទុក្នុងលំដាប់តែមួយ។",
    "<code>sc.nextLine()</code> សម្អាត New Line បន្ទាប់ពី nextInt។",
    "Loop គណនាផលបូក និងតាមដានតម្លៃខ្ពស់/ទាប។",
    "ការពិនិត្យ <code>isEmpty()</code> ការពារការចែកដោយ 0។",
    "Report បង្ហាញស្ថិតិសំខាន់ៗក្នុងពេលតែមួយ។"
  ],
  output: `1. Add  2. Report  0. Exit
1
Name: Dara
Score: 85
1. Add  2. Report  0. Exit
1
Name: Sok
Score: 95
1. Add  2. Report  0. Exit
2
Students: 2
Average: 90.0
Highest: 95.0
Lowest: 85.0
1. Add  2. Report  0. Exit
0`,
  improvements: [
    "បង្ហាញ Grade សម្រាប់សិស្សម្នាក់ៗ។",
    "បន្ថែមការលុប និងកែពិន្ទុ។",
    "តម្រៀបសិស្សតាមពិន្ទុដោយ <code>Collections.sort</code>។"
  ],
  challenges: [
    "បង្កើត Class <code>Student</code> ជំនួស ArrayList ពីរ។",
    "បន្ថែមការគណនា GPA តាមមុខវិជ្ជា។",
    "រក្សាទុករបាយការណ៍ទៅឯកសារ Text។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "employee-management-system",
  num: 15,
  title: "Employee Management System",
  short: "ប្រព័ន្ធគ្រប់គ្រងបុគ្គលិកដោយ Inheritance និង Polymorphism។",
  intro: "Project នេះអនុវត្ត Inheritance និង Runtime Polymorphism។ អ្នកនឹងបង្កើត Class <code>Employee</code> ជា Class មេ និង Subclass <code>Manager</code>, <code>Developer</code> ដែលគណនាប្រាក់ខែខុសគ្នា។ បញ្ជីបុគ្គលិករក្សាទុកក្នុង ArrayList។",
  time: "១២០ នាទី",
  level: 3,
  concepts: ["Inheritance", "Polymorphism", "ArrayList", "super", "@Override"],
  objectives: [
    "ប្រើ <code>extends</code> ដើម្បីបង្កើត Subclass។",
    "ប្រើ <code>super</code> ហៅ Constructor របស់ Class មេ។",
    "Override Method ដើម្បីគណនាប្រាក់ខែខុសគ្នា។",
    "បង្ហាញបុគ្គលិកតាម Reference របស់ Class មេ។"
  ],
  requirements: [
    "Class Employee មាន name និង baseSalary។",
    "Class Manager បន្ថែម bonus។",
    "Class Developer បន្ថែម overtime។",
    "Menu មាន Add Manager, Add Developer, List, Exit។"
  ],
  steps: [
    "បង្កើត File <code>EmployeeManagement.java</code>។",
    "សរសេរ Class <code>Employee</code> ជាមួយ Method salary()។",
    "សរសេរ Class <code>Manager</code> extends Employee។",
    "សរសេរ Class <code>Developer</code> extends Employee។",
    "ប្រើ <code>ArrayList&lt;Employee&gt;</code> ផ្ទុកទាំងពីរប្រភេទ។",
    "សរសេរ Menu Loop សម្រាប់បន្ថែម និងបង្ហាញ។",
    "សាកល្បងបង្ហាញប្រាក់ខែខុសគ្នា។"
  ],
  file: "EmployeeManagement.java",
  code: `import java.util.ArrayList;
import java.util.Scanner;

class Employee {
    protected String name;
    protected double baseSalary;

    Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    double salary() {
        return baseSalary;
    }

    String info() {
        return name + " - " + salary();
    }
}

class Manager extends Employee {
    private double bonus;

    Manager(String name, double baseSalary, double bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }

    @Override
    double salary() {
        return baseSalary + bonus;
    }
}

class Developer extends Employee {
    private double overtime;

    Developer(String name, double baseSalary, double overtime) {
        super(name, baseSalary);
        this.overtime = overtime;
    }

    @Override
    double salary() {
        return baseSalary + overtime;
    }
}

public class EmployeeManagement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Employee> employees = new ArrayList<>();
        int choice;

        do {
            System.out.println("1. Add Manager  2. Add Developer  3. List  0. Exit");
            choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
                case 1:
                    System.out.print("Name: ");
                    String mName = sc.nextLine();
                    System.out.print("Base salary: ");
                    double mBase = sc.nextDouble();
                    System.out.print("Bonus: ");
                    double bonus = sc.nextDouble();
                    employees.add(new Manager(mName, mBase, bonus));
                    break;
                case 2:
                    System.out.print("Name: ");
                    String dName = sc.nextLine();
                    System.out.print("Base salary: ");
                    double dBase = sc.nextDouble();
                    System.out.print("Overtime pay: ");
                    double overtime = sc.nextDouble();
                    employees.add(new Developer(dName, dBase, overtime));
                    break;
                case 3:
                    for (Employee e : employees) {
                        System.out.println(e.info());
                    }
                    break;
                case 0:
                    break;
                default:
                    System.out.println("Invalid choice.");
            }
        } while (choice != 0);

        sc.close();
    }
}`,
  explanation: [
    "<code>Employee</code> ផ្តល់ Field និង Method រួមសម្រាប់ Subclass។",
    "<code>super(name, baseSalary)</code> ហៅ Constructor របស់ Employee។",
    "Manager និង Developer Override <code>salary()</code> តាមរបៀបផ្ទាល់ខ្លួន។",
    "ArrayList ប្រភេទ <code>Employee</code> អាចផ្ទុក Object របស់ Subclass បាន។",
    "ការហៅ <code>e.info()</code> ជ្រើស Method តាម Object ពិត (Polymorphism)។"
  ],
  output: `1. Add Manager  2. Add Developer  3. List  0. Exit
1
Name: Dara
Base salary: 1000
Bonus: 200
1. Add Manager  2. Add Developer  3. List  0. Exit
2
Name: Sok
Base salary: 800
Overtime pay: 100
1. Add Manager  2. Add Developer  3. List  0. Exit
3
Dara - 1200.0
Sok - 900.0
1. Add Manager  2. Add Developer  3. List  0. Exit
0`,
  improvements: [
    "បន្ថែមប្រភេទបុគ្គលិកថ្មីដូចជា Intern។",
    "បន្ថែមការលុប និងស្វែងរកតាមឈ្មោះ។",
    "បង្ហាញប្រាក់ខែសរុបរបស់ក្រុមហ៊ុន។"
  ],
  challenges: [
    "ធ្វើឱ្យ Employee ជា Abstract Class។",
    "បន្ថែម Interface <code>Payable</code> និងអនុវត្តវា។",
    "រក្សាទុកបុគ្គលិកទៅ File និងអានមកវិញ។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "oop-management-system",
  num: 16,
  title: "Simple OOP Management System",
  short: "ប្រព័ន្ធគ្រប់គ្រង Task ដោយ Interface, Inheritance និង Polymorphism។",
  intro: "Project ចុងក្រោយនេះរួមបញ្ចូល OOP ទាំងអស់។ អ្នកនឹងបង្កើត Interface <code>Task</code>, Class <code>SimpleTask</code>, Subclass <code>UrgentTask</code> និង <code>TaskManager</code> សម្រាប់បន្ថែម បញ្ចប់ និងបង្ហាញ Task។ វាបង្ហាញពីរបៀបរចនាប្រព័ន្ធតូចមួយដោយ OOP។",
  time: "១២០ នាទី",
  level: 3,
  concepts: ["Interface", "Inheritance", "Polymorphism", "ArrayList", "Encapsulation"],
  objectives: [
    "បង្កើត Interface និងអនុវត្តវាក្នុង Class។",
    "ប្រើ Inheritance បន្ថែមអាកប្បកិរិយាពិសេស។",
    "ប្រើ Polymorphism តាម ArrayList នៃ Interface។",
    "គ្រប់គ្រង State របស់ Object។"
  ],
  requirements: [
    "Interface Task មាន describe និង complete។",
    "SimpleTask អនុវត្ត Task។",
    "UrgentTask extends SimpleTask និង Override describe។",
    "Menu មាន Add, Add Urgent, Complete, List, Exit។"
  ],
  steps: [
    "បង្កើត File <code>TaskManagerApp.java</code>។",
    "សរសេរ Interface <code>Task</code>។",
    "សរសេរ Class <code>SimpleTask</code> អនុវត្ត Task។",
    "សរសេរ Class <code>UrgentTask</code> extends SimpleTask។",
    "សរសេរ Class <code>TaskManager</code> ជាមួយ ArrayList។",
    "សរសេរ Menu Loop សម្រាប់ប្រតិបត្តិការ។",
    "សាកល្បងបន្ថែម បញ្ចប់ និងបង្ហាញ Task។"
  ],
  file: "TaskManagerApp.java",
  code: `import java.util.ArrayList;
import java.util.Scanner;

interface Task {
    String getTitle();
    boolean isDone();
    void complete();
    String describe();
}

class SimpleTask implements Task {
    private String title;
    private boolean done;

    SimpleTask(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public boolean isDone() {
        return done;
    }

    public void complete() {
        done = true;
    }

    public String describe() {
        return (done ? "[x] " : "[ ] ") + title;
    }
}

class UrgentTask extends SimpleTask {
    UrgentTask(String title) {
        super(title);
    }

    @Override
    public String describe() {
        return "[!] " + super.describe();
    }
}

class TaskManager {
    private ArrayList<Task> tasks = new ArrayList<>();

    void add(Task task) {
        tasks.add(task);
    }

    void complete(int index) {
        if (index >= 0 && index < tasks.size()) {
            tasks.get(index).complete();
        } else {
            System.out.println("Invalid index.");
        }
    }

    void list() {
        if (tasks.isEmpty()) {
            System.out.println("No tasks.");
            return;
        }
        for (int i = 0; i < tasks.size(); i++) {
            System.out.println(i + ". " + tasks.get(i).describe());
        }
    }
}

public class TaskManagerApp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        TaskManager manager = new TaskManager();
        int choice;

        do {
            System.out.println("1. Add task  2. Add urgent  3. Complete  4. List  0. Exit");
            choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
                case 1:
                    System.out.print("Title: ");
                    manager.add(new SimpleTask(sc.nextLine()));
                    break;
                case 2:
                    System.out.print("Title: ");
                    manager.add(new UrgentTask(sc.nextLine()));
                    break;
                case 3:
                    System.out.print("Index: ");
                    manager.complete(sc.nextInt());
                    break;
                case 4:
                    manager.list();
                    break;
                case 0:
                    break;
                default:
                    System.out.println("Invalid choice.");
            }
        } while (choice != 0);

        sc.close();
    }
}`,
  explanation: [
    "Interface <code>Task</code> កំណត់ Contract ដែល Class ត្រូវអនុវត្ត។",
    "<code>SimpleTask</code> លាក់ title និង done ដោយ private។",
    "<code>UrgentTask</code> extends SimpleTask និងបន្ថែមសញ្ញា [!]។",
    "ArrayList ប្រភេទ <code>Task</code> ផ្ទុកទាំង SimpleTask និង UrgentTask។",
    "ការហៅ <code>describe()</code> បង្ហាញអាកប្បកិរិយាតាម Object ពិត។"
  ],
  output: `1. Add task  2. Add urgent  3. Complete  4. List  0. Exit
1
Title: Learn Java
1. Add task  2. Add urgent  3. Complete  4. List  0. Exit
2
Title: Submit homework
1. Add task  2. Add urgent  3. Complete  4. List  0. Exit
3
Index: 0
1. Add task  2. Add urgent  3. Complete  4. List  0. Exit
4
0. [x] Learn Java
1. [!] [ ] Submit homework
1. Add task  2. Add urgent  3. Complete  4. List  0. Exit
0`,
  improvements: [
    "បន្ថែមការលុប Task និងកំណត់ថ្ងៃកំណត់។",
    "រក្សាទុក Task ទៅ File ដើម្បីបន្តពេលក្រោយ។",
    "បន្ថែមប្រភេទ Task ថ្មីដូចជា RecurringTask។"
  ],
  challenges: [
    "បន្ថែម Interface ទីពីរ <code>Prioritized</code> និងអនុវត្តវា។",
    "តម្រៀប Task តាមស្ថានភាព ឬអាទិភាព។",
    "បង្កើត Unit Test សាមញ្ញសម្រាប់ TaskManager។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "temperature-converter",
  num: 17,
  title: "Temperature Converter",
  short: "បម្លែងសីតុណ្ហភាពពី Celsius ទៅ Fahrenheit និង Kelvin។",
  intro: "Project ខ្លីសម្រាប់អនុវត្ត Variable, Scanner, Arithmetic Operator និងការបង្ហាញទសភាគដោយ printf។",
  time: "៤៥ នាទី",
  level: 1,
  concepts: ["Scanner", "double", "Arithmetic", "printf"],
  objectives: [
    "អានលេខទសភាគពី Console។",
    "ប្រើរូបមន្តបម្លែងសីតុណ្ហភាព។",
    "បង្ហាញលទ្ធផលជាមួយចំនួនខ្ទង់ទសភាគកំណត់។"
  ],
  requirements: [
    "អាន Celsius ជា double។",
    "គណនា Fahrenheit = C * 9 / 5 + 32។",
    "គណនា Kelvin = C + 273.15។",
    "បង្ហាញ Fahrenheit ១ ខ្ទង់ និង Kelvin ២ ខ្ទង់។"
  ],
  steps: [
    "បង្កើត File <code>TemperatureConverter.java</code>។",
    "Import <code>java.util.Scanner</code>។",
    "អាន Celsius ដោយ <code>nextDouble()</code>។",
    "គណនា Fahrenheit និង Kelvin។",
    "បង្ហាញដោយ <code>printf</code> រួច Run។"
  ],
  file: "TemperatureConverter.java",
  code: `import java.util.Scanner;

public class TemperatureConverter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Celsius: ");
        double celsius = sc.nextDouble();

        double fahrenheit = celsius * 9 / 5 + 32;
        double kelvin = celsius + 273.15;

        System.out.printf("Fahrenheit: %.1f%n", fahrenheit);
        System.out.printf("Kelvin: %.2f%n", kelvin);
        sc.close();
    }
}`,
  explanation: [
    "<code>nextDouble()</code> អានលេខទសភាគពី Console។",
    "<code>9 / 5</code> ជា Integer Division ប៉ុន្តែ <code>celsius</code> ជា double ដូច្នេះការគណនាក្លាយជា double។",
    "<code>%.1f</code> បង្ហាញមួយខ្ទង់ទសភាគ ហើយ <code>%n</code> ជា New Line។",
    "Kelvin គឺ Celsius បូក 273.15។"
  ],
  output: `Celsius: 37.5
Fahrenheit: 99.5
Kelvin: 310.65`,
  improvements: [
    "អនុញ្ញាតឱ្យអ្នកប្រើជ្រើសរើសទិសបម្លែង។",
    "ពិនិត្យ Input មិនត្រឹមត្រូវដោយ try-catch។",
    "បង្កើត Method ដាច់ដោយឡែកសម្រាប់ការបម្លែង។"
  ],
  challenges: [
    "បន្ថែមការបម្លែងពី Fahrenheit ទៅ Celsius។",
    "បង្ហាញតារាងបម្លែងពី 0 ដល់ 100 ដោយប្រើ Loop។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "bmi-calculator",
  num: 18,
  title: "BMI Calculator",
  short: "គណនា BMI និងចាត់ថ្នាក់សុខភាពពីទម្ងន់ និងកម្ពស់។",
  intro: "អនុវត្ត Input ទសភាគ, Arithmetic, if-else និង Formatted Output ដើម្បីបង្កើត App គណនា BMI។",
  time: "៦០ នាទី",
  level: 1,
  concepts: ["Scanner", "double", "if-else", "printf"],
  objectives: [
    "អានទម្ងន់ និងកម្ពស់ពី Console។",
    "គណនា BMI តាមរូបមន្ត។",
    "ចាត់ថ្នាក់លទ្ធផលដោយ if-else។"
  ],
  requirements: [
    "អាន weight (kg) និង height (m)។",
    "គណនា weight / (height * height)។",
    "ចាត់ថ្នាក់ Underweight, Normal, Overweight, Obese។",
    "បង្ហាញ BMI មួយខ្ទង់ទសភាគ។"
  ],
  steps: [
    "បង្កើត File <code>BmiCalculator.java</code>។",
    "Import Scanner និងអានតម្លៃ double ពីរ។",
    "គណនា BMI។",
    "ប្រើ if-else ដើម្បីកំណត់ Category។",
    "បង្ហាញលទ្ធផលដោយ printf។"
  ],
  file: "BmiCalculator.java",
  code: `import java.util.Scanner;

public class BmiCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Weight (kg): ");
        double weight = sc.nextDouble();
        System.out.print("Height (m): ");
        double height = sc.nextDouble();

        double bmi = weight / (height * height);
        String category;
        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 25) category = "Normal";
        else if (bmi < 30) category = "Overweight";
        else category = "Obese";

        System.out.printf("BMI: %.1f%n", bmi);
        System.out.println("Category: " + category);
        sc.close();
    }
}`,
  explanation: [
    "BMI គឺទម្ងន់ចែកនឹងកម្ពស់ការេ។",
    "if-else if ពិនិត្យតាមលំដាប់ចន្លោះតម្លៃ។",
    "លក្ខខណ្ឌដំបូងដែលពិតនឹងដំណើរការ ហើយរំលងលក្ខខណ្ឌបន្ទាប់។",
    "<code>%.1f</code> បង្ហាញទសភាគមួយខ្ទង់។"
  ],
  output: `Weight (kg): 65
Height (m): 1.7
BMI: 22.5
Category: Normal`,
  improvements: [
    "ពិនិត្យថាកម្ពស់ធំជាង 0។",
    "បន្ថែមការណែនាំសុខភាពតាម Category។",
    "គាំទ្រឯកតាផ្សេងទៀតដូចជា cm។"
  ],
  challenges: [
    "បង្កើត Method <code>category(double bmi)</code>។",
    "រក្សាទុកលទ្ធផលច្រើនក្នុង Array រួចបង្ហាញរបាយការណ៍។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "leap-year-checker",
  num: 19,
  title: "Leap Year Checker",
  short: "ពិនិត្យថាឆ្នាំណាមួយជាឆ្នាំបង្គោល (Leap Year) ឬអត់។",
  intro: "អនុវត្ត Logical Operators, Modulo និង if-else ដើម្បីពិនិត្យឆ្នាំបង្គោលតាមច្បាប់ Gregorian។",
  time: "៤៥ នាទី",
  level: 1,
  concepts: ["Scanner", "Modulo", "Logical operators", "if-else"],
  objectives: [
    "អានឆ្នាំពី Console។",
    "ប្រើ Modulo ដើម្បីពិនិត្យការចែកដាច់។",
    "រួមបញ្ចូលលក្ខខណ្ឌដោយ <code>&&</code> និង <code>||</code>។"
  ],
  requirements: [
    "អាន year ជា int។",
    "ឆ្នាំចែក 400 ដាច់ ជា Leap Year។",
    "ឆ្នាំចែក 4 ដាច់ ប៉ុន្តែមិនចែក 100 ដាច់ ក៏ជា Leap Year។",
    "បង្ហាញ true ឬ false។"
  ],
  steps: [
    "បង្កើត File <code>LeapYearChecker.java</code>។",
    "អានឆ្នាំដោយ Scanner។",
    "បង្កើត boolean leap ដោយប្រើ Modulo និង Logical Operators។",
    "បង្ហាញលទ្ធផល។"
  ],
  file: "LeapYearChecker.java",
  code: `import java.util.Scanner;

public class LeapYearChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Year: ");
        int year = sc.nextInt();

        boolean leap = (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
        System.out.println(year + " is leap year: " + leap);
        sc.close();
    }
}`,
  explanation: [
    "<code>year % 400 == 0</code> គ្រប់ដណ្តប់ឆ្នាំដូចជា 2000។",
    "<code>year % 4 == 0 && year % 100 != 0</code> គ្រប់ដណ្តប់ឆ្នាំធម្មតាដូចជា 2024។",
    "<code>||</code> បញ្ចូលលក្ខខណ្ឌទាំងពីរឱ្យពិតបើមួយពិត។",
    "លទ្ធផល boolean អាចភ្ជាប់ជាមួយ String ដោយ <code>+</code>។"
  ],
  output: `Year: 2024
2024 is leap year: true`,
  improvements: [
    "បង្ហាញចំនួនថ្ងៃក្នុងខែកុម្ភៈ។",
    "ពិនិត្យឆ្នាំជាច្រើនក្នុង Loop។",
    "បង្កើត Method <code>isLeap(int year)</code>។"
  ],
  challenges: [
    "បង្កើតប្រតិទិនខែកុម្ភៈសម្រាប់ឆ្នាំដែលបញ្ចូល។",
    "គណនាចំនួនថ្ងៃរវាងឆ្នាំពីរ ដោយគិតឆ្នាំបង្គោល។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "multiplication-table-generator",
  num: 20,
  title: "Multiplication Table Generator",
  short: "បង្កើតតារាងគុណសម្រាប់លេខដែលអ្នកប្រើបញ្ចូល។",
  intro: "អនុវត្ត for Loop, printf និង Scanner ដើម្បីបង្ហាញតារាងគុណពី 1 ដល់ 12។",
  time: "៤៥ នាទី",
  level: 1,
  concepts: ["Scanner", "for loop", "printf"],
  objectives: [
    "អានចំនួនគត់ពី Console។",
    "ប្រើ Loop ដើម្បីបង្ហាញជួរដេកច្រើន។",
    "បង្ហាញលទ្ធផលជាទម្រង់តារាង។"
  ],
  requirements: [
    "អាន n ជា int។",
    "Loop ពី 1 ដល់ 12។",
    "បង្ហាញទម្រង់ <code>n x i = result</code>។"
  ],
  steps: [
    "បង្កើត File <code>MultiplicationTableGenerator.java</code>។",
    "អាន n ដោយ Scanner។",
    "ប្រើ for loop ពី 1 ដល់ 12។",
    "បង្ហាញដោយ printf។"
  ],
  file: "MultiplicationTableGenerator.java",
  code: `import java.util.Scanner;

public class MultiplicationTableGenerator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Number: ");
        int n = sc.nextInt();

        for (int i = 1; i <= 12; i++) {
            System.out.printf("%d x %d = %d%n", n, i, n * i);
        }
        sc.close();
    }
}`,
  explanation: [
    "for loop កំណត់ចំនួនជុំច្បាស់លាស់។",
    "តម្លៃ <code>i</code> ចាប់ពី 1 ដល់ 12។",
    "<code>%d</code> ជា Placeholder សម្រាប់ចំនួនគត់ក្នុង printf។",
    "ការគុណ <code>n * i</code> គណនាលទ្ធផលរាល់ជុំ។"
  ],
  output: `Number: 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
3 x 11 = 33
3 x 12 = 36`,
  improvements: [
    "អនុញ្ញាតឱ្យកំណត់ដែនកំណត់ខ្លួនឯង។",
    "បង្ហាញតារាងគុណសម្រាប់លេខ 1 ដល់ 10។",
    "តម្រឹមជួរឈរដោយ <code>%-10s</code>។"
  ],
  challenges: [
    "បង្កើតតារាងគុណជា Grid ពី 1 ដល់ 10។",
    "បន្ថែមការជ្រើសរើសតារាងបូក ដក ឬចែក។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "prime-number-finder",
  num: 21,
  title: "Prime Number Finder",
  short: "រកលេខបឋមទាំងអស់រហូតដល់ដែនកំណត់ដែលកំណត់។",
  intro: "អនុវត្ត Method, Loop និង Math.sqrt ដើម្បីពិនិត្យ និងបង្ហាញលេខបឋម។",
  time: "៦០ នាទី",
  level: 2,
  concepts: ["Methods", "for loop", "Math.sqrt", "Modulo"],
  objectives: [
    "សរសេរ Method ពិនិត្យលេខបឋម។",
    "ប្រើ Loop ស្វែងរកលេខបឋម។",
    "បង្កើនប្រសិទ្ធភាពដោយពិនិត្យរហូត sqrt។"
  ],
  requirements: [
    "Method <code>isPrime(int n)</code> ត្រឡប់ boolean។",
    "លេខតិចជាង 2 មិនមែនលេខបឋម។",
    "បង្ហាញលេខបឋមរហូតដល់ 30។"
  ],
  steps: [
    "បង្កើត File <code>PrimeNumberFinder.java</code>។",
    "សរសេរ Method isPrime។",
    "Loop ពី 2 ដល់ limit ហើយហៅ isPrime។",
    "បង្ហាញលទ្ធផលក្នុងបន្ទាត់តែមួយ។"
  ],
  file: "PrimeNumberFinder.java",
  code: `public class PrimeNumberFinder {
    static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        int limit = 30;
        System.out.print("Primes: ");
        for (int i = 2; i <= limit; i++) {
            if (isPrime(i)) {
                System.out.print(i + " ");
            }
        }
        System.out.println();
    }
}`,
  explanation: [
    "Method isPrime បំបែក Logic ឱ្យអានងាយ និងអាចហៅឡើងវិញបាន។",
    "បើ <code>n % i == 0</code> នោះ n មានចែកដាច់ ដូច្នេះមិនមែនលេខបឋម។",
    "ពិនិត្យរហូត <code>Math.sqrt(n)</code> គឺគ្រប់គ្រាន់ និងលឿនជាង។",
    "<code>print</code> មិនបំបែកបន្ទាត់ ដូច្នេះលេខនៅជាបន្ទាត់តែមួយ។"
  ],
  output: `Primes: 2 3 5 7 11 13 17 19 23 29`,
  improvements: [
    "អាន limit ពីអ្នកប្រើ។",
    "បង្ហាញចំនួនលេខបឋមសរុប។",
    "ប្រើ Sieve of Eratosthenes សម្រាប់ដែនកំណត់ធំ។"
  ],
  challenges: [
    "រកលេខបឋមគូ (Twin Primes) ដែលខុសគ្នា 2។",
    "បង្ហាញកត្តាបឋម (Prime Factorization) នៃលេខមួយ។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "factorial-fibonacci",
  num: 22,
  title: "Factorial & Fibonacci",
  short: "គណនា Factorial និងលំដាប់ Fibonacci ដោយប្រើ Recursion។",
  intro: "អនុវត្ត Recursion តាមរយៈ Method ពីរ៖ Factorial និង Fibonacci ព្រមទាំងសង្កេត Base Case។",
  time: "៦០ នាទី",
  level: 2,
  concepts: ["Recursion", "Methods", "long", "Base case"],
  objectives: [
    "យល់ពី Base Case និង Recursive Call។",
    "សរសេរ Method Factorial បែប Recursive។",
    "បង្ហាញលំដាប់ Fibonacci ដោយ Recursion។"
  ],
  requirements: [
    "Method <code>factorial(int n)</code> ត្រឡប់ long។",
    "Method <code>fib(int n)</code> ត្រឡប់ int។",
    "បង្ហាញ factorial(5) និង Fibonacci 10 តួដំបូង។"
  ],
  steps: [
    "បង្កើត File <code>FactorialFibonacci.java</code>។",
    "សរសេរ factorial ជាមួយ Base Case <code>n &lt;= 1</code>។",
    "សរសេរ fib ជាមួយ Base Case <code>n &lt;= 1</code>។",
    "ហៅ Method ទាំងពីរក្នុង main។"
  ],
  file: "FactorialFibonacci.java",
  code: `public class FactorialFibonacci {
    static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }

    static int fib(int n) {
        if (n <= 1) return n;
        return fib(n - 1) + fib(n - 2);
    }

    public static void main(String[] args) {
        System.out.println("Factorial of 5: " + factorial(5));

        System.out.print("Fibonacci: ");
        for (int i = 0; i < 10; i++) {
            System.out.print(fib(i) + " ");
        }
        System.out.println();
    }
}`,
  explanation: [
    "Recursion គឺ Method ហៅខ្លួនឯងជាមួយ Input តូចជាង។",
    "Base Case បញ្ឈប់ការហៅ ដើម្បីកុំឱ្យ Stack Overflow។",
    "factorial(5) = 5 * 4 * 3 * 2 * 1 = 120។",
    "Fibonacci គឺផលបូកពីរតួមុន។ Recursion ងាយយល់ ប៉ុន្តែយឺតសម្រាប់ n ធំ។"
  ],
  output: `Factorial of 5: 120
Fibonacci: 0 1 1 2 3 5 8 13 21 34`,
  improvements: [
    "ប្រើ Memoization ដើម្បីបង្កើនល្បឿន Fibonacci។",
    "បង្ហាញ Error ពេល n អវិជ្ជមាន។",
    "ប្រើ long សម្រាប់ Fibonacci ធំ។"
  ],
  challenges: [
    "សរសេរ Fibonacci បែប Iterative រួចប្រៀបធៀបល្បឿន។",
    "គណនា Factorial ធំដោយប្រើ BigInteger។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "palindrome-checker",
  num: 23,
  title: "Palindrome Checker",
  short: "ពិនិត្យថាអត្ថបទជា Palindrome ឬអត់ ដោយមិនខ្វល់អក្សរធំ/តូច និងចន្លោះ។",
  intro: "អនុវត្ត String Method ដូចជា toLowerCase, replaceAll និង StringBuilder ដើម្បីពិនិត្យ Palindrome។",
  time: "៦០ នាទី",
  level: 2,
  concepts: ["String", "StringBuilder", "replaceAll", "Scanner"],
  objectives: [
    "សម្អាតអត្ថបទមុនប្រៀបធៀប។",
    "បញ្ច្រាស String ដោយ StringBuilder។",
    "ប្រៀបធៀប String ដោយ equals។"
  ],
  requirements: [
    "អានអត្ថបទពី Console។",
    "បំលែងជា Lowercase និងលុបតួអក្សរពិសេស។",
    "បង្ហាញ true ឬ false។"
  ],
  steps: [
    "បង្កើត File <code>PalindromeChecker.java</code>។",
    "អានអត្ថបទទាំងបន្ទាត់ដោយ nextLine។",
    "សម្អាតដោយ toLowerCase និង replaceAll។",
    "បញ្ច្រាសដោយ StringBuilder រួចប្រៀបធៀប។"
  ],
  file: "PalindromeChecker.java",
  code: `import java.util.Scanner;

public class PalindromeChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Text: ");
        String text = sc.nextLine();

        String cleaned = text.toLowerCase().replaceAll("[^a-z0-9]", "");
        String reversed = new StringBuilder(cleaned).reverse().toString();

        System.out.println("Palindrome: " + cleaned.equals(reversed));
        sc.close();
    }
}`,
  explanation: [
    "<code>toLowerCase()</code> ធ្វើឱ្យការប្រៀបធៀបមិនប្រកាន់អក្សរធំ/តូច។",
    "<code>replaceAll(\"[^a-z0-9]\", \"\")</code> លុបចន្លោះ និងសញ្ញា។",
    "<code>new StringBuilder(cleaned).reverse()</code> បង្កើតអត្ថបទបញ្ច្រាស។",
    "<code>equals()</code> ប្រៀបធៀបតម្លៃ String មិនមែន Reference។"
  ],
  output: `Text: A man a plan a canal Panama
Palindrome: true`,
  improvements: [
    "បង្ហាញអត្ថបទដែលបានសម្អាត និងបញ្ច្រាស។",
    "ពិនិត្យ Palindrome ដោយ Two Pointers ដើម្បីសន្សំ Memory។",
    "អានពាក្យច្រើនក្នុង Loop។"
  ],
  challenges: [
    "ពិនិត្យ Palindrome ខ្មែរដោយមិនប្រើ Regex។",
    "រក Palindrome វែងបំផុតក្នុងអត្ថបទមួយ។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "word-frequency-counter",
  num: 24,
  title: "Word Frequency Counter",
  short: "រាប់ចំនួនដងដែលពាក្យនីមួយៗបង្ហាញក្នុងអត្ថបទ។",
  intro: "អនុវត្ត String, split, TreeMap និង Loop ដើម្បីរាប់ពាក្យ និងបង្ហាញលទ្ធផលតម្រៀបតាមអក្សរ។",
  time: "៩០ នាទី",
  level: 2,
  concepts: ["String", "split", "TreeMap", "Map.Entry"],
  objectives: [
    "បំបែកអត្ថបទជាពាក្យ។",
    "រាប់ចំនួនដងដោយ Map។",
    "បង្ហាញលទ្ធផលតាមលំដាប់អក្សរ។"
  ],
  requirements: [
    "បំលែងអត្ថបទជា Lowercase និងលុបសញ្ញា។",
    "ប្រើ TreeMap សម្រាប់ការរាប់។",
    "បង្ហាញពាក្យ និងចំនួនដង។"
  ],
  steps: [
    "បង្កើត File <code>WordFrequencyCounter.java</code>។",
    "សម្អាតអត្ថបទ រួច split តាមចន្លោះ។",
    "ប្រើ <code>getOrDefault</code> ដើម្បីបូកចំនួន។",
    "Loop លើ <code>entrySet()</code> ដើម្បីបង្ហាញ។"
  ],
  file: "WordFrequencyCounter.java",
  code: `import java.util.Map;
import java.util.TreeMap;

public class WordFrequencyCounter {
    public static void main(String[] args) {
        String text = "Java is fun and Java is powerful";
        String cleaned = text.toLowerCase().replaceAll("[^a-z ]", "");
        String[] words = cleaned.trim().split("\\\\s+");

        TreeMap<String, Integer> counts = new TreeMap<>();
        for (String word : words) {
            counts.put(word, counts.getOrDefault(word, 0) + 1);
        }

        for (Map.Entry<String, Integer> entry : counts.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}`,
  explanation: [
    "<code>split</code> បំបែកអត្ថបទជា Array នៃពាក្យ។",
    "<code>getOrDefault(word, 0)</code> ត្រឡប់ 0 បើពាក្យមិនទាន់មាន។",
    "TreeMap រក្សាលំដាប់ Key តាមអក្សរ ដូច្នេះ Output នឹងរៀបរួច។",
    "<code>Map.Entry</code> អនុញ្ញាតឱ្យចូលប្រើ Key និង Value ក្នុង Loop។"
  ],
  output: `and: 1
fun: 1
is: 2
java: 2
powerful: 1`,
  improvements: [
    "អានអត្ថបទពី File។",
    "មិនរាប់ Stop Words ដូចជា the, a, is។",
    "តម្រៀបតាមចំនួនដងជំនួសអក្សរ។"
  ],
  challenges: [
    "បង្ហាញពាក្យ 5 ដែលបង្ហាញច្រើនបំផុត។",
    "រាប់ពាក្យជាមួយ HashMap រួចតម្រៀបដោយ Comparator។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "matrix-operations",
  num: 25,
  title: "Matrix Operations",
  short: "បូក Matrix និងបង្ហាញ Transpose ដោយប្រើ Array ពីរវិមាត្រ។",
  intro: "អនុវត្ត 2D Array និង Nested Loop ដើម្បីធ្វើប្រតិបត្តិការ Matrix សាមញ្ញ។",
  time: "៩០ នាទី",
  level: 3,
  concepts: ["2D arrays", "Nested loops", "Transpose"],
  objectives: [
    "បង្កើត និងចូលប្រើ 2D Array។",
    "បូក Matrix ធាតុមួយប៉ុនគ្នា។",
    "បង្ហាញ Transpose ដោយប្តូរ Row និង Column។"
  ],
  requirements: [
    "បង្កើត Matrix A និង B ទំហំ 2x2។",
    "គណនា Matrix បូក។",
    "បង្ហាញ Transpose របស់ A។"
  ],
  steps: [
    "បង្កើត File <code>MatrixOperations.java</code>។",
    "បង្កើត Array ពីរវិមាត្រ a និង b។",
    "ប្រើ Nested Loop ដើម្បីបូក។",
    "ប្រើ Nested Loop បញ្ច្រាស Index ដើម្បីបង្ហាញ Transpose។"
  ],
  file: "MatrixOperations.java",
  code: `public class MatrixOperations {
    public static void main(String[] args) {
        int[][] a = {{1, 2}, {3, 4}};
        int[][] b = {{5, 6}, {7, 8}};
        int[][] sum = new int[2][2];

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                sum[i][j] = a[i][j] + b[i][j];
            }
        }

        System.out.println("Sum:");
        for (int[] row : sum) {
            for (int value : row) {
                System.out.print(value + " ");
            }
            System.out.println();
        }

        System.out.println("Transpose of A:");
        for (int j = 0; j < 2; j++) {
            for (int i = 0; i < 2; i++) {
                System.out.print(a[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
  explanation: [
    "2D Array គឺ Array នៃ Array ដែលចូលប្រើដោយ <code>[row][col]</code>។",
    "Nested Loop ដំណើរការគ្រប់ជួរដេក និងជួរឈរ។",
    "<code>sum[i][j] = a[i][j] + b[i][j]</code> បូកធាតុតាមទីតាំងដូចគ្នា។",
    "Transpose ប្តូរ <code>a[i][j]</code> ទៅ <code>a[j][i]</code>។"
  ],
  output: `Sum:
6 8
10 12
Transpose of A:
1 3
2 4`,
  improvements: [
    "គុណ Matrix ដោយប្រើ Loop បីជាន់។",
    "អានទំហំ និងធាតុពីអ្នកប្រើ។",
    "បង្កើត Method សម្រាប់បង្ហាញ Matrix។"
  ],
  challenges: [
    "គណនា Determinant សម្រាប់ Matrix 2x2 និង 3x3។",
    "ពិនិត្យថា Matrix ជា Identity Matrix ឬអត់។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "student-marks-report",
  num: 26,
  title: "Student Marks Report",
  short: "គណនាពិន្ទុសរុប មធ្យមភាគ ខ្ពស់បំផុត និងទាបបំផុតពី Array។",
  intro: "អនុវត្ត Array, Method និង Loop ដើម្បីបង្កើតរបាយការណ៍ពិន្ទុសិស្ស។",
  time: "៦០ នាទី",
  level: 2,
  concepts: ["Arrays", "Methods", "for-each", "Casting"],
  objectives: [
    "សរសេរ Method គណនាស្ថិតិពី Array។",
    "ប្រើ for-each សម្រាប់អានធាតុ។",
    "បង្ហាញមធ្យមភាគជា double។"
  ],
  requirements: [
    "បង្កើត Array ពិន្ទុយ៉ាងតិច 5។",
    "Method total, average, highest, lowest។",
    "បង្ហាញលទ្ធផលទាំងអស់។"
  ],
  steps: [
    "បង្កើត File <code>StudentMarksReport.java</code>។",
    "សរសេរ Method សម្រាប់ស្ថិតិនីមួយៗ។",
    "បង្កើត Array ពិន្ទុក្នុង main។",
    "ហៅ Method និងបង្ហាញលទ្ធផល។"
  ],
  file: "StudentMarksReport.java",
  code: `public class StudentMarksReport {
    static int total(int[] marks) {
        int sum = 0;
        for (int m : marks) sum += m;
        return sum;
    }

    static double average(int[] marks) {
        return (double) total(marks) / marks.length;
    }

    static int highest(int[] marks) {
        int max = marks[0];
        for (int m : marks) if (m > max) max = m;
        return max;
    }

    static int lowest(int[] marks) {
        int min = marks[0];
        for (int m : marks) if (m < min) min = m;
        return min;
    }

    public static void main(String[] args) {
        int[] marks = {75, 88, 92, 60, 80};
        System.out.println("Total: " + total(marks));
        System.out.printf("Average: %.2f%n", average(marks));
        System.out.println("Highest: " + highest(marks));
        System.out.println("Lowest: " + lowest(marks));
    }
}`,
  explanation: [
    "Method នីមួយៗទទួល Array និងគណនាស្ថិតិមួយប្រភេទ។",
    "for-each អានធាតុទាំងអស់ដោយមិនចាំបាច់ Index។",
    "Cast <code>(double)</code> មុនចែក ដើម្បីទទួលបានទសភាគ។",
    "average ហៅ total ដើម្បីកុំសរសេរ Logic ស្ទួន។"
  ],
  output: `Total: 395
Average: 79.00
Highest: 92
Lowest: 60`,
  improvements: [
    "អានពិន្ទុពីអ្នកប្រើជាមួយ Loop។",
    "បង្ហាញ Grade សម្រាប់មធ្យមភាគ។",
    "រាប់ចំនួនសិស្សដែលជាប់ និងធ្លាក់។"
  ],
  challenges: [
    "តម្រៀបពិន្ទុដោយ Arrays.sort។",
    "បង្កើត Class Student និង Array នៃ Object។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "bank-interest-calculator",
  num: 27,
  title: "Bank Interest Calculator",
  short: "គណនាការកើនឡើងប្រាក់សន្សំដោយការប្រាក់ជារៀងរាល់ឆ្នាំ។",
  intro: "អនុវត្ត Scanner, for Loop និង printf ដើម្បីបង្ហាញតារាងកំណើនប្រាក់សន្សំ។",
  time: "៦០ នាទី",
  level: 2,
  concepts: ["Scanner", "for loop", "Compound interest", "printf"],
  objectives: [
    "អានប្រាក់ដើម អត្រា និងចំនួនឆ្នាំ។",
    "គណនាការប្រាក់បន្ថែមលើប្រាក់សន្សំ។",
    "បង្ហាញតារាងកំណើនជារៀងរាល់ឆ្នាំ។"
  ],
  requirements: [
    "អាន principal, rate និង years។",
    "គណនាការប្រាក់បន្ថែមក្នុង Loop។",
    "បង្ហាញសមតុល្យរាល់ឆ្នាំ។"
  ],
  steps: [
    "បង្កើត File <code>BankInterestCalculator.java</code>។",
    "អានតម្លៃដោយ Scanner។",
    "ប្រើ for loop ពីឆ្នាំ 1 ដល់ years។",
    "បូកការប្រាក់ និងបង្ហាញដោយ printf។"
  ],
  file: "BankInterestCalculator.java",
  code: `import java.util.Scanner;

public class BankInterestCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Principal: ");
        double principal = sc.nextDouble();
        System.out.print("Annual rate (%): ");
        double rate = sc.nextDouble();
        System.out.print("Years: ");
        int years = sc.nextInt();

        double balance = principal;
        for (int year = 1; year <= years; year++) {
            balance += balance * rate / 100;
            System.out.printf("Year %d: %.2f%n", year, balance);
        }
        sc.close();
    }
}`,
  explanation: [
    "<code>balance += balance * rate / 100</code> បន្ថែមការប្រាក់ទៅសមតុល្យ។",
    "ការប្រាក់ឆ្នាំបន្ទាប់គណនាលើសមតុល្យថ្មី ដែលជា Compound Interest។",
    "for loop ដំណើរការតាមចំនួនឆ្នាំដែលបញ្ចូល។",
    "<code>%.2f</code> បង្ហាញប្រាក់ជាពីរខ្ទង់ទសភាគ។"
  ],
  output: `Principal: 1000
Annual rate (%): 5
Years: 3
Year 1: 1050.00
Year 2: 1102.50
Year 3: 1157.63`,
  improvements: [
    "បន្ថែមការប្រាក់ប្រចាំខែ។",
    "គណនាការប្រាក់សរុបដែលទទួលបាន។",
    "ពិនិត្យ Input អវិជ្ជមាន។"
  ],
  challenges: [
    "ប្រៀបធៀប Simple Interest និង Compound Interest។",
    "បង្កើត Method គណនាតម្លៃអនាគត (Future Value)។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "password-strength-checker",
  num: 28,
  title: "Password Strength Checker",
  short: "វាយតម្លៃកម្លាំង Password តាមប្រភេទតួអក្សរដែលផ្ទុក។",
  intro: "អនុវត្ត String, Character Method និង if-else ដើម្បីវាយតម្លៃ Password ជា Weak, Medium ឬ Strong។",
  time: "៩០ នាទី",
  level: 2,
  concepts: ["String", "Character", "for-each", "if-else"],
  objectives: [
    "ពិនិត្យប្រវែង និងប្រភេទតួអក្សរ។",
    "ប្រើ Character.isUpperCase/isLowerCase/isDigit។",
    "គណនាពិន្ទុ និងចាត់ថ្នាក់កម្លាំង។"
  ],
  requirements: [
    "អាន Password ពី Console។",
    "ពិនិត្យប្រវែង ≥ 8។",
    "ពិនិត្យអក្សរធំ អក្សរតូច លេខ និងសញ្ញាពិសេស។",
    "បង្ហាញពិន្ទុ និងកម្រិតកម្លាំង។"
  ],
  steps: [
    "បង្កើត File <code>PasswordStrengthChecker.java</code>។",
    "អាន Password ដោយ nextLine។",
    "Loop លើ <code>toCharArray()</code> ដើម្បីពិនិត្យប្រភេទតួអក្សរ។",
    "គណនាពិន្ទុ និងបង្ហាញកម្រិត។"
  ],
  file: "PasswordStrengthChecker.java",
  code: `import java.util.Scanner;

public class PasswordStrengthChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Password: ");
        String password = sc.nextLine();

        boolean longEnough = password.length() >= 8;
        boolean hasUpper = false;
        boolean hasLower = false;
        boolean hasDigit = false;
        boolean hasSpecial = false;
        String special = "!@#$%^&*";

        for (char c : password.toCharArray()) {
            if (Character.isUpperCase(c)) hasUpper = true;
            else if (Character.isLowerCase(c)) hasLower = true;
            else if (Character.isDigit(c)) hasDigit = true;
            else if (special.indexOf(c) >= 0) hasSpecial = true;
        }

        int score = 0;
        if (longEnough) score++;
        if (hasUpper) score++;
        if (hasLower) score++;
        if (hasDigit) score++;
        if (hasSpecial) score++;

        String strength = score >= 5 ? "Strong" : score >= 3 ? "Medium" : "Weak";
        System.out.println("Score: " + score + "/5");
        System.out.println("Strength: " + strength);
        sc.close();
    }
}`,
  explanation: [
    "<code>toCharArray()</code> បំបែក String ជា Array នៃ char ដើម្បីពិនិត្យម្តងមួយ។",
    "<code>Character.isUpperCase</code> និង Method ពាក់ព័ន្ធពិនិត្យប្រភេទតួអក្សរ។",
    "<code>special.indexOf(c)</code> ត្រឡប់ -1 បើ char មិនមានក្នុងបញ្ជី។",
    "Ternary Operator ជាប់គ្នាជួយកំណត់កម្រិតដោយសង្ខេប។"
  ],
  output: `Password: Java@2026
Score: 5/5
Strength: Strong`,
  improvements: [
    "ពិនិត្យ Password មិនឱ្យដូចឈ្មោះអ្នកប្រើ។",
    "រាប់ចំនួនតួអក្សរនីមួយៗ។",
    "បង្ហាញមូលហេតុដែលធ្វើឱ្យ Password ខ្សោយ។"
  ],
  challenges: [
    "បង្កើត Password Generator ដែលធានាកម្រិត Strong។",
    "ប្រើ Regex ដើម្បីពិនិត្យលក្ខខណ្ឌ។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "rock-paper-scissors-game",
  num: 29,
  title: "Rock Paper Scissors Game",
  short: "លេង Rock Paper Scissors ជាមួយកុំព្យូទ័រដែលជ្រើសដោយ Random។",
  intro: "អនុវត្ត Scanner, Random, if-else និង Logical Operators ដើម្បីកំណត់អ្នកឈ្នះ។",
  time: "៦០ នាទី",
  level: 2,
  concepts: ["Scanner", "Random", "if-else", "Logical operators"],
  objectives: [
    "ទទួលជម្រើសពីអ្នកប្រើ។",
    "បង្កើតជម្រើសកុំព្យូទ័រដោយ Random។",
    "កំណត់អ្នកឈ្នះតាមច្បាប់ហ្គេម។"
  ],
  requirements: [
    "ជម្រើស 1=Rock, 2=Paper, 3=Scissors។",
    "ប្រើ <code>Random.nextInt(3) + 1</code>។",
    "បង្ហាញ Draw, You win ឬ Computer wins។"
  ],
  steps: [
    "បង្កើត File <code>RockPaperScissorsGame.java</code>។",
    "Import Scanner និង Random។",
    "អានជម្រើសអ្នកលេង។",
    "បង្កើតជម្រើសកុំព្យូទ័រ រួចប្រៀបធៀប។"
  ],
  file: "RockPaperScissorsGame.java",
  code: `import java.util.Random;
import java.util.Scanner;

public class RockPaperScissorsGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random random = new Random();

        System.out.println("1=Rock 2=Paper 3=Scissors");
        System.out.print("Your choice: ");
        int player = sc.nextInt();
        int computer = random.nextInt(3) + 1;

        System.out.println("Computer: " + computer);

        if (player == computer) {
            System.out.println("Draw");
        } else if ((player == 1 && computer == 3)
                || (player == 2 && computer == 1)
                || (player == 3 && computer == 2)) {
            System.out.println("You win");
        } else {
            System.out.println("Computer wins");
        }
        sc.close();
    }
}`,
  explanation: [
    "<code>Random.nextInt(3)</code> ផ្តល់ 0, 1 ឬ 2 ដូច្នេះបូក 1 បាន 1–3។",
    "បើជម្រើសស្មើគ្នា គឺ Draw។",
    "លក្ខខណ្ឌឈ្នះរួមបញ្ចូលករណីទាំងបីដោយ <code>||</code>។",
    "ករណីផ្សេងទៀតកុំព្យូទ័រឈ្នះ។"
  ],
  output: `1=Rock 2=Paper 3=Scissors
Your choice: 1
Computer: 3
You win`,
  improvements: [
    "លេងច្រើនជុំ និងរាប់ពិន្ទុ។",
    "ពិនិត្យជម្រើសមិនត្រឹមត្រូវ។",
    "បង្ហាញឈ្មោះជម្រើសជំនួសលេខ។"
  ],
  challenges: [
    "បង្កើត Best of 5។",
    "រក្សាប្រវត្តិជុំក្នុង ArrayList។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "quiz-application",
  num: 30,
  title: "Quiz Application",
  short: "កម្មវិធីសំណួរចម្លើយពហុជម្រើស ដែលគណនាពិន្ទុដោយស្វ័យប្រវត្តិ។",
  intro: "អនុវត្ត Array, 2D Array, Loop និង Scanner ដើម្បីបង្កើត Quiz ពីរបីសំណួរ។",
  time: "៩០ នាទី",
  level: 2,
  concepts: ["Arrays", "2D arrays", "Loop", "Scanner"],
  objectives: [
    "ផ្ទុកសំណួរ និងជម្រើសក្នុង Array។",
    "អានចម្លើយពីអ្នកប្រើ។",
    "គណនា និងបង្ហាញពិន្ទុ។"
  ],
  requirements: [
    "មានសំណួរយ៉ាងតិច 3។",
    "ជម្រើសជា 2D Array។",
    "បង្ហាញពិន្ទុចុងក្រោយ។"
  ],
  steps: [
    "បង្កើត File <code>QuizApplication.java</code>។",
    "បង្កើត Array សំណួរ ជម្រើស និងចម្លើយត្រឹមត្រូវ។",
    "Loop បង្ហាញសំណួរ និងអានចម្លើយ។",
    "បូកពិន្ទុ និងបង្ហាញលទ្ធផល។"
  ],
  file: "QuizApplication.java",
  code: `import java.util.Scanner;

public class QuizApplication {
    public static void main(String[] args) {
        String[] questions = {
            "Which keyword creates an object?",
            "Which type stores true/false?",
            "Which loop always runs at least once?"
        };
        String[][] options = {
            {"a) class", "b) new", "c) this"},
            {"a) int", "b) String", "c) boolean"},
            {"a) for", "b) while", "c) do-while"}
        };
        char[] answers = {'b', 'c', 'c'};

        Scanner sc = new Scanner(System.in);
        int score = 0;

        for (int i = 0; i < questions.length; i++) {
            System.out.println((i + 1) + ". " + questions[i]);
            for (String option : options[i]) {
                System.out.println("   " + option);
            }
            System.out.print("Answer: ");
            char answer = sc.next().toLowerCase().charAt(0);
            if (answer == answers[i]) {
                score++;
            }
        }

        System.out.println("Score: " + score + "/" + questions.length);
        sc.close();
    }
}`,
  explanation: [
    "Array សំណួរ និង 2D Array ជម្រើសរក្សាទិន្នន័យ Quiz ដោយរៀបរយ។",
    "Index <code>i</code> ភ្ជាប់សំណួរ ជម្រើស និងចម្លើយឱ្យត្រូវគ្នា។",
    "<code>toLowerCase().charAt(0)</code> អានតួអក្សរដំបូង ដោយមិនខ្វល់អក្សរធំ/តូច។",
    "ពិន្ទុកើនមួយពេលចម្លើយត្រូវ។"
  ],
  output: `1. Which keyword creates an object?
   a) class
   b) new
   c) this
Answer: b
2. Which type stores true/false?
   a) int
   b) String
   c) boolean
Answer: c
3. Which loop always runs at least once?
   a) for
   b) while
   c) do-while
Answer: c
Score: 3/3`,
  improvements: [
    "អានសំណួរពី File ឬ Array ធំជាង។",
    "បង្ហាញចម្លើយត្រឹមត្រូវពេលឆ្លើយខុស។",
    "កំណត់ពេលវេលាសម្រាប់ Quiz។"
  ],
  challenges: [
    "ដាក់សំណួរជា Class Question និង ArrayList។",
    "រក្សាទុកពិន្ទុខ្ពស់បំផុតទៅ File។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "inventory-management",
  num: 31,
  title: "Inventory Management",
  short: "គ្រប់គ្រងទំនិញក្នុងស្តុក ដោយបន្ថែម បង្ហាញ និងគណនាតម្លៃសរុប។",
  intro: "អនុវត្ត Class, ArrayList, Menu Loop និង Encapsulation ដើម្បីគ្រប់គ្រងស្តុកទំនិញ។",
  time: "១២០ នាទី",
  level: 3,
  concepts: ["Classes", "ArrayList", "Menu loop", "Encapsulation"],
  objectives: [
    "បង្កើត Class Product មាន Field និង Method។",
    "ប្រើ ArrayList ផ្ទុក Product ច្រើន។",
    "គណនាតម្លៃសរុបក្នុងស្តុក។"
  ],
  requirements: [
    "Menu: Add, List, Total, Exit។",
    "Product មាន name, price, quantity។",
    "បង្ហាញតម្លៃសរុប។"
  ],
  steps: [
    "បង្កើត File <code>InventoryManagement.java</code>។",
    "បង្កើត Class Product និង Constructor។",
    "ប្រើ ArrayList<Product> ក្នុង main។",
    "បង្កើត Menu Loop សម្រាប់ជ្រើសប្រតិបត្តិការ។"
  ],
  file: "InventoryManagement.java",
  code: `import java.util.ArrayList;
import java.util.Scanner;

class Product {
    String name;
    double price;
    int quantity;

    Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    double totalValue() {
        return price * quantity;
    }
}

public class InventoryManagement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Product> products = new ArrayList<>();
        int choice;

        do {
            System.out.println("1. Add  2. List  3. Total  0. Exit");
            choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
                case 1:
                    System.out.print("Name: ");
                    String name = sc.nextLine();
                    System.out.print("Price: ");
                    double price = sc.nextDouble();
                    System.out.print("Quantity: ");
                    int qty = sc.nextInt();
                    products.add(new Product(name, price, qty));
                    break;
                case 2:
                    for (Product p : products) {
                        System.out.println(p.name + " x" + p.quantity + " = " + p.totalValue());
                    }
                    break;
                case 3:
                    double total = 0;
                    for (Product p : products) {
                        total += p.totalValue();
                    }
                    System.out.println("Total value: " + total);
                    break;
                case 0:
                    break;
                default:
                    System.out.println("Invalid choice");
            }
        } while (choice != 0);

        sc.close();
    }
}`,
  explanation: [
    "Class Product រួមបញ្ចូលទិន្នន័យទំនិញ និង Method គណនាតម្លៃ។",
    "ArrayList អាចបន្ថែម Product ថ្មីៗដោយមិនកំណត់ទំហំជាមុន។",
    "Menu Loop បន្តរហូតអ្នកប្រើជ្រើស 0។",
    "<code>sc.nextLine()</code> ក្រោយ <code>nextInt()</code> សម្អាត New Line មុនអានឈ្មោះ។"
  ],
  output: `1. Add  2. List  3. Total  0. Exit
1
Name: Pen
Price: 1.5
Quantity: 10
1. Add  2. List  3. Total  0. Exit
2
Pen x10 = 15.0
1. Add  2. List  3. Total  0. Exit
3
Total value: 15.0
1. Add  2. List  3. Total  0. Exit
0`,
  improvements: [
    "ធ្វើឱ្យ Field ជា private និងបន្ថែម Getter/Setter។",
    "បន្ថែមការលុប និងកែប្រែទំនិញ។",
    "ពិនិត្យតម្លៃ និងចំនួនអវិជ្ជមាន។"
  ],
  challenges: [
    "ស្វែងរកទំនិញតាមឈ្មោះ។",
    "រក្សាទុកស្តុកទៅ File និង Load មកវិញ។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "employee-payroll",
  num: 32,
  title: "Employee Payroll",
  short: "គណនាប្រាក់ខែបុគ្គលិកពេញម៉ោង និងក្រៅម៉ោងដោយប្រើ Inheritance។",
  intro: "អនុវត្ត Abstract Class, Inheritance, Polymorphism និង ArrayList ដើម្បីគណនាប្រាក់ខែ។",
  time: "១២០ នាទី",
  level: 3,
  concepts: ["Inheritance", "Polymorphism", "Abstract class", "ArrayList"],
  objectives: [
    "បង្កើត Abstract Class Employee។",
    "បង្កើត Subclass FullTime និង PartTime។",
    "គណនាប្រាក់ខែតាមប្រភេទបុគ្គលិក។"
  ],
  requirements: [
    "Employee មាន Method abstract monthlyPay()។",
    "FullTime គណនាពី salary។",
    "PartTime គណនាពី hours * rate។",
    "បង្ហាញ Payslip និងសរុប។"
  ],
  steps: [
    "បង្កើត File <code>EmployeePayroll.java</code>។",
    "សរសេរ Abstract Class Employee។",
    "សរសេរ Subclass ពីរ និង Override monthlyPay។",
    "ប្រើ ArrayList<Employee> និង Loop បង្ហាញ Payslip។"
  ],
  file: "EmployeePayroll.java",
  code: `import java.util.ArrayList;

abstract class Employee {
    protected String name;

    Employee(String name) {
        this.name = name;
    }

    abstract double monthlyPay();

    void payslip() {
        System.out.printf("%s: $%.2f%n", name, monthlyPay());
    }
}

class FullTime extends Employee {
    private double salary;

    FullTime(String name, double salary) {
        super(name);
        this.salary = salary;
    }

    double monthlyPay() {
        return salary;
    }
}

class PartTime extends Employee {
    private int hours;
    private double rate;

    PartTime(String name, int hours, double rate) {
        super(name);
        this.hours = hours;
        this.rate = rate;
    }

    double monthlyPay() {
        return hours * rate;
    }
}

public class EmployeePayroll {
    public static void main(String[] args) {
        ArrayList<Employee> staff = new ArrayList<>();
        staff.add(new FullTime("Dara", 1200));
        staff.add(new PartTime("Sok", 80, 10));

        double total = 0;
        for (Employee e : staff) {
            e.payslip();
            total += e.monthlyPay();
        }
        System.out.printf("Total payroll: $%.2f%n", total);
    }
}`,
  explanation: [
    "Abstract Class Employee កំណត់ Contract <code>monthlyPay()</code>។",
    "Subclass អនុវត្តរូបមន្តគណនាខុសគ្នា។",
    "ArrayList<Employee> ផ្ទុក Object ទាំងពីរប្រភេទ។",
    "ការហៅ <code>monthlyPay()</code> ជ្រើស Method តាម Object ពិត (Polymorphism)។"
  ],
  output: `Dara: $1200.00
Sok: $800.00
Total payroll: $2000.00`,
  improvements: [
    "បន្ថែម Overtime Pay សម្រាប់ PartTime។",
    "អានព័ត៌មានបុគ្គលិកពី Console។",
    "បន្ថែមពន្ធ និងប្រាក់ឧបត្ថម្ភ។"
  ],
  challenges: [
    "បន្ថែម Subclass Contractor។",
    "បង្កើត Interface Payable និងអនុវត្តលើ Class ផ្សេងៗ។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "shape-area-calculator",
  num: 33,
  title: "Shape Area Calculator",
  short: "គណនាផ្ទៃក្រឡារូបរាងផ្សេងៗតាម Interface។",
  intro: "អនុវត្ត Interface, Polymorphism និង Array នៃ Object ដើម្បីគណនាផ្ទៃក្រឡា។",
  time: "៩០ នាទី",
  level: 3,
  concepts: ["Interfaces", "Polymorphism", "Math.PI", "Array of objects"],
  objectives: [
    "បង្កើត Interface Shape។",
    "អនុវត្ត Interface ក្នុង Circle និង Rectangle។",
    "Loop លើ Array នៃ Shape។"
  ],
  requirements: [
    "Interface Shape មាន <code>area()</code>។",
    "Circle គណនាដោយ Math.PI។",
    "Rectangle គណនាដោយ width * height។",
    "បង្ហាញផ្ទៃក្រឡារបស់រូបរាងនីមួយៗ។"
  ],
  steps: [
    "បង្កើត File <code>ShapeAreaCalculator.java</code>។",
    "សរសេរ Interface Shape។",
    "សរសេរ Class Circle និង Rectangle។",
    "បង្កើត Shape[] និង Loop បង្ហាញផ្ទៃក្រឡា។"
  ],
  file: "ShapeAreaCalculator.java",
  code: `interface Shape {
    double area();
}

class Circle implements Shape {
    private double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    public double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle implements Shape {
    private double width;
    private double height;

    Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double area() {
        return width * height;
    }
}

public class ShapeAreaCalculator {
    public static void main(String[] args) {
        Shape[] shapes = {new Circle(3), new Rectangle(4, 5)};

        for (Shape s : shapes) {
            System.out.printf("%s area: %.2f%n",
                    s.getClass().getSimpleName(), s.area());
        }
    }
}`,
  explanation: [
    "Interface Shape កំណត់ Method <code>area()</code> ដែល Class ត្រូវអនុវត្ត។",
    "Circle និង Rectangle មានរូបមន្តផ្ទាល់ខ្លួន។",
    "Shape[] អាចផ្ទុក Object នៃ Class ណាដែល implements Shape។",
    "<code>getClass().getSimpleName()</code> ត្រឡប់ឈ្មោះ Class សម្រាប់ការបង្ហាញ។"
  ],
  output: `Circle area: 28.27
Rectangle area: 20.00`,
  improvements: [
    "បន្ថែម Triangle និងការគណនាបរិមាត្រ។",
    "អានប្រភេទរូបរាងពីអ្នកប្រើ។",
    "បង្ហាញរូបរាងដែលមានផ្ទៃធំបំផុត។"
  ],
  challenges: [
    "បង្កើត Interface ទីពីរ <code>Perimeter</code>។",
    "តម្រៀប Shape តាមផ្ទៃក្រឡាដោយ Comparator។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "movie-ticket-booking",
  num: 34,
  title: "Movie Ticket Booking",
  short: "កក់សំបុត្រភាពយន្ត និងគ្រប់គ្រងចំនួនកៅអីនៅសល់។",
  intro: "អនុវត្ត Class, ArrayList និង Encapsulation ដើម្បីកក់សំបុត្រ និងពិនិត្យកៅអី។",
  time: "១២០ នាទី",
  level: 3,
  concepts: ["Classes", "ArrayList", "Encapsulation", "Business rules"],
  objectives: [
    "បង្កើត Class Movie មាន seats និង price។",
    "សរសេរ Method book(int tickets)។",
    "ពិនិត្យកៅអីគ្រប់គ្រាន់មុនកក់។"
  ],
  requirements: [
    "Movie មាន title, seats, price។",
    "Method book ត្រឡប់ boolean។",
    "បើកៅអីមិនគ្រប់ បង្ហាញសារ។",
    "បង្ហាញតម្លៃសរុប និងកៅអីនៅសល់។"
  ],
  steps: [
    "បង្កើត File <code>MovieTicketBooking.java</code>។",
    "សរសេរ Class Movie និង Method book។",
    "បង្កើត ArrayList<Movie> ក្នុង main។",
    "ជ្រើសរើសភាពយន្ត កក់សំបុត្រ និងបង្ហាញលទ្ធផល។"
  ],
  file: "MovieTicketBooking.java",
  code: `import java.util.ArrayList;

class Movie {
    String title;
    int seats;
    double price;

    Movie(String title, int seats, double price) {
        this.title = title;
        this.seats = seats;
        this.price = price;
    }

    boolean book(int tickets) {
        if (tickets <= 0 || tickets > seats) {
            return false;
        }
        seats -= tickets;
        return true;
    }
}

public class MovieTicketBooking {
    public static void main(String[] args) {
        ArrayList<Movie> movies = new ArrayList<>();
        movies.add(new Movie("Java Story", 5, 5.0));
        movies.add(new Movie("Khmer Code", 2, 4.5));

        Movie selected = movies.get(0);
        int tickets = 2;

        if (selected.book(tickets)) {
            System.out.printf("Booked %d tickets for %s%n", tickets, selected.title);
            System.out.printf("Total: $%.2f%n", tickets * selected.price);
            System.out.println("Seats left: " + selected.seats);
        } else {
            System.out.println("Not enough seats");
        }
    }
}`,
  explanation: [
    "Method <code>book()</code> ពិនិត្យលក្ខខណ្ឌមុនកែប្រែ seats។",
    "ការត្រឡប់ boolean ជួយឱ្យ Caller ដឹងថាការកក់ជោគជ័យ ឬអត់។",
    "ArrayList ផ្ទុកភាពយន្តច្រើន ហើយ <code>get(0)</code> ជ្រើសភាពយន្តដំបូង។",
    "Business Rule ការពារការកក់លើសកៅអីដែលមាន។"
  ],
  output: `Booked 2 tickets for Java Story
Total: $10.00
Seats left: 3`,
  improvements: [
    "ធ្វើឱ្យ Field ជា private និងបន្ថែម Getter។",
    "បង្កើត Menu សម្រាប់ជ្រើសភាពយន្ត និងចំនួនសំបុត្រ។",
    "បន្ថែមការបោះបង់ការកក់ (Cancel)។"
  ],
  challenges: [
    "គ្រប់គ្រងកៅអីតាមលេខកៅអី (Seat Map)។",
    "រក្សាទុកប្រវត្តិការកក់ទៅ File។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "library-fine-calculator",
  num: 35,
  title: "Library Fine Calculator",
  short: "គណនាប្រាក់ពិន័យសម្រាប់ការត្រឡប់សៀវភៅយឺតតាមចំនួនថ្ងៃ។",
  intro: "អនុវត្ត Method, if-else និង printf ដើម្បីគណនាប្រាក់ពិន័យតាមជាន់ថ្ងៃយឺត។",
  time: "៦០ នាទី",
  level: 2,
  concepts: ["Methods", "if-else", "Scanner", "printf"],
  objectives: [
    "សរសេរ Method គណនាប្រាក់ពិន័យ។",
    "ប្រើជាន់តម្លៃតាមចំនួនថ្ងៃ។",
    "បង្ហាញលទ្ធផលជាទសភាគពីរខ្ទង់។"
  ],
  requirements: [
    "ថ្ងៃយឺត ≤ 0 គ្មានពិន័យ។",
    "1–5 ថ្ងៃ ពិន័យ 0.5 ក្នុងមួយថ្ងៃ។",
    "6–10 ថ្ងៃ ពិន័យ 1.0 ក្នុងមួយថ្ងៃ។",
    "លើស 10 ថ្ងៃ ពិន័យ 2.0 ក្នុងមួយថ្ងៃ។"
  ],
  steps: [
    "បង្កើត File <code>LibraryFineCalculator.java</code>។",
    "សរសេរ Method calculateFine(int daysLate)។",
    "អានចំនួនថ្ងៃយឺតពី Console។",
    "បង្ហាញប្រាក់ពិន័យដោយ printf។"
  ],
  file: "LibraryFineCalculator.java",
  code: `import java.util.Scanner;

public class LibraryFineCalculator {
    static double calculateFine(int daysLate) {
        if (daysLate <= 0) return 0;
        if (daysLate <= 5) return daysLate * 0.5;
        if (daysLate <= 10) return 5 * 0.5 + (daysLate - 5) * 1.0;
        return 5 * 0.5 + 5 * 1.0 + (daysLate - 10) * 2.0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Days late: ");
        int days = sc.nextInt();
        System.out.printf("Fine: $%.2f%n", calculateFine(days));
        sc.close();
    }
}`,
  explanation: [
    "Method calculateFine បំបែក Logic គណនាឱ្យអានងាយ។",
    "ការត្រឡប់ភ្លាមៗ (<code>return</code>) បញ្ឈប់ Method នៅជាន់ដែលត្រូវគ្នា។",
    "ជាន់ទីពីរគណនាថ្ងៃ 5 ដំបូង បូកថ្ងៃបន្ថែម។",
    "ជាន់ទីបីបូកជាន់មុនទាំងអស់ បន្ថែមថ្ងៃលើស 10។"
  ],
  output: `Days late: 8
Fine: $5.50`,
  improvements: [
    "បង្ហាញការបំបែកប្រាក់ពិន័យតាមជាន់។",
    "អនុញ្ញាតឱ្យកំណត់អត្រាពិន័យខ្លួនឯង។",
    "រក្សាទុកប្រវត្តិការត្រឡប់សៀវភៅ។"
  ],
  challenges: [
    "គណនាប្រាក់ពិន័យសម្រាប់សៀវភៅច្រើនក្នុង ArrayList។",
    "បន្ថែមការលើកលែងពិន័យសម្រាប់សមាជិក VIP។"
  ]
});

window.JAVA_PROJECTS.push({
  id: "file-based-notes-app",
  num: 36,
  title: "File-Based Notes App",
  short: "កម្មវិធីកត់ត្រា Notes ដែលរក្សាទុក និងអានពី File។",
  intro: "អនុវត្ត File I/O ជាមួយ java.nio.file ដើម្បីសរសេរ Notes ទៅ File និងអានមកវិញ។",
  time: "១២០ នាទី",
  level: 3,
  concepts: ["File I/O", "java.nio.file", "IOException", "try-catch"],
  objectives: [
    "សរសេរទិន្នន័យទៅ File។",
    "អានទិន្នន័យពី File ត្រឡប់មកវិញ។",
    "ចាប់ IOException ដោយ try-catch។"
  ],
  requirements: [
    "បង្កើត File <code>notes.txt</code>។",
    "សរសេរ Notes យ៉ាងតិច 2។",
    "អាន និងបង្ហាញ Notes ជាមួយលេខរៀង។",
    "ចាប់ IOException។"
  ],
  steps: [
    "បង្កើត File <code>NotesFileApp.java</code>។",
    "Import Class ពី <code>java.nio.file</code>។",
    "ប្រើ <code>Files.write</code> សរសេរ Notes។",
    "ប្រើ <code>Files.readAllLines</code> អាន និងបង្ហាញ។"
  ],
  file: "NotesFileApp.java",
  code: `import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;

public class NotesFileApp {
    public static void main(String[] args) {
        Path path = Paths.get("notes.txt");

        try {
            Files.write(path, Arrays.asList(
                    "Learn Java basics",
                    "Practice OOP daily"));

            List<String> notes = Files.readAllLines(path);
            for (int i = 0; i < notes.size(); i++) {
                System.out.println((i + 1) + ". " + notes.get(i));
            }
        } catch (IOException e) {
            System.out.println("File error: " + e.getMessage());
        }
    }
}`,
  explanation: [
    "<code>Paths.get(\"notes.txt\")</code> កំណត់ទីតាំង File ក្នុង Folder បច្ចុប្បន្ន។",
    "<code>Files.write</code> សរសេរ List នៃ String ទៅ File។",
    "<code>Files.readAllLines</code> អានគ្រប់បន្ទាត់ចូល List។",
    "File Operation អាចបង្ក IOException ដូច្នេះត្រូវចាប់ដោយ try-catch។"
  ],
  output: `1. Learn Java basics
2. Practice OOP daily`,
  improvements: [
    "បន្ថែម Menu សម្រាប់បន្ថែម Notes ថ្មី។",
    "អាន Notes ដែលមានស្រាប់មុនសរសេរបន្ថែម។",
    "ប្រើ Append Mode ដើម្បីមិនសរសេរជំនួសទាំងអស់។"
  ],
  challenges: [
    "បង្កើតកម្មវិធី Notes ពេញលេញមាន Add, List, Delete។",
    "រក្សាទុក Notes ជា CSV ជាមួយកាលបរិច្ឆេទ។"
  ]
});

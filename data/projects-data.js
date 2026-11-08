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

/* Lessons 22–25: Exception Handling, Collections, File Handling, Final Projects */
window.JAVA_LESSONS = window.JAVA_LESSONS || [];

window.JAVA_LESSONS.push({
  id: "exception-handling",
  num: 22,
  part: 13,
  partTitle: "Advanced Java",
  title: "Exception Handling",
  titleKh: "ការគ្រប់គ្រង Exception",
  time: "៨៥ នាទី",
  level: 4,
  intro: "Exception គឺជាបញ្ហាដែលកើតឡើងពេល Program កំពុងដំណើរការ។ ប្រសិនបើមិនគ្រប់គ្រងទេ Program នឹងឈប់ភ្លាមៗ។ មេរៀននេះបង្រៀន <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>, <code>throws</code>, Checked vs Unchecked Exception និង Custom Exception ដើម្បីសរសេរ Program ដែលរឹងមាំ។",
  objectives: [
    "យល់ពីភាពខុសគ្នារវាង Error និង Exception។",
    "ប្រើ <code>try-catch-finally</code> ដើម្បីគ្រប់គ្រងបញ្ហា។",
    "ប្រើ <code>throw</code> និង <code>throws</code> បានត្រឹមត្រូវ។",
    "យល់ពី Checked និង Unchecked Exception។",
    "បង្កើត និងប្រើ Custom Exception។",
    "ប្រើ try-with-resources សម្រាប់បិទ Resource ដោយស្វ័យប្រវត្តិ។"
  ],
  sections: [
    {
      title: "Exception ជាអ្វី?",
      html: `<p><strong>Exception</strong> គឺជា Object ដែលតំណាងឱ្យបញ្ហាកើតឡើងពេល Program ដំណើរការ។ នៅ Java គ្រប់ Exception ស្នងមកពី Class <code>Throwable</code>។</p>
<pre><code>Throwable
├── Error              (បញ្ហាធ្ងន់ធ្ងរ ដូចជា OutOfMemoryError)
└── Exception
    ├── Checked        (ដូចជា IOException, SQLException)
    └── RuntimeException (Unchecked: ArithmeticException, NullPointerException)</code></pre>
<div class="callout info"><div class="callout-title">Error vs Exception</div><p><strong>Error</strong> ជាបញ្ហាដែល Program មិនអាចដោះស្រាយបាន (ឧ. អស់ Memory)។ <strong>Exception</strong> ជាបញ្ហាដែលអាចគ្រប់គ្រង និងសង្គ្រោះ Program បាន។</p></div>
<p>ឧទាហរណ៍ ការចែកលេខនឹង 0 បង្កើត <code>ArithmeticException</code>៖</p>
<pre><code>int result = 10 / 0;   // បញ្ហា!</code></pre>
<p>បើគ្មានការគ្រប់គ្រងទេ Program នឹងបង្ហាញ Stack Trace ហើយឈប់។</p>`
    },
    {
      title: "try-catch",
      html: `<p><strong>try</strong> ផ្ទុកកូដដែលអាចមានបញ្ហា។ <strong>catch</strong> ចាប់ Exception ដែលកើតឡើង ដើម្បីឱ្យ Program បន្តដំណើរការ។</p>
<pre><code>try {
    int result = 10 / 0;
    System.out.println(result);
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
}</code></pre>
<ul>
<li><code>catch</code> អាចមានច្រើន ដើម្បីចាប់ Exception ផ្សេងៗគ្នា។</li>
<li>ត្រូវចាប់ Exception ដែល Specific មុន Exception ដែលទូទៅ។</li>
<li>អាចប្រើ <code>e.getMessage()</code> ដើម្បីអានសារបញ្ហា។</li>
</ul>
<pre><code>try {
    int number = Integer.parseInt(text);
} catch (NumberFormatException e) {
    System.out.println("Invalid number: " + e.getMessage());
}</code></pre>`
    },
    {
      title: "finally និង try-with-resources",
      html: `<p><strong>finally</strong> ដំណើរការជានិច្ច ទោះបីមាន Exception ឬអត់។ គេប្រើវាសម្រាប់ការងារសម្អាត ដូចជាបិទ File ឬ Connection។</p>
<pre><code>try {
    System.out.println("Open resource");
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error handled");
} finally {
    System.out.println("Close resource");
}</code></pre>
<p><strong>try-with-resources</strong> ជាវិធីទំនើបជាង។ Resource ដែលអនុវត្ត <code>AutoCloseable</code> នឹងត្រូវបិទដោយស្វ័យប្រវត្តិ៖</p>
<pre><code>try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
    String line = reader.readLine();
} catch (IOException e) {
    System.out.println("Cannot read file");
}</code></pre>
<div class="callout tip"><div class="callout-title">គ្មាន Need finally</div><p>ពេលប្រើ try-with-resources អ្នកមិនចាំបាច់សរសេរ <code>finally</code> ដើម្បីបិទ Resource ទេ។</p></div>`
    },
    {
      title: "throw, throws និងប្រភេទ Exception",
      html: `<p><strong>throw</strong> បង្ក Exception ដោយខ្លួនឯង។ <strong>throws</strong> ប្រកាសនៅលើ Method ថាវាអាចបញ្ជូន Exception ទៅអ្នកហៅ។</p>
<pre><code>static void checkAge(int age) throws Exception {
    if (age &lt; 18) {
        throw new Exception("Age must be at least 18");
    }
    System.out.println("Allowed");
}</code></pre>
<p><strong>Checked Exception</strong> ត្រូវគ្រប់គ្រង ឬប្រកាសជាមួយ <code>throws</code>។ <strong>Unchecked Exception</strong> (RuntimeException) មិនចាំបាច់ទេ ប៉ុន្តែគួរគ្រប់គ្រងដើម្បីសុវត្ថិភាព។</p>
<table>
<thead><tr><th>ប្រភេទ</th><th>ឧទាហរណ៍</th><th>ត្រូវគ្រប់គ្រង?</th></tr></thead>
<tbody>
<tr><td>Checked</td><td>IOException, SQLException</td><td>បាទ/ចាស</td></tr>
<tr><td>Unchecked</td><td>ArithmeticException, NullPointerException</td><td>មិនចាំបាច់</td></tr>
<tr><td>Error</td><td>OutOfMemoryError</td><td>មិនអាចជួយបាន</td></tr>
</tbody>
</table>`
    },
    {
      title: "Custom Exception",
      html: `<p>អ្នកអាចបង្កើត Exception ផ្ទាល់ខ្លួន ដើម្បីបញ្ជាក់បញ្ហាអាជីវកម្មឱ្យបានច្បាស់។</p>
<pre><code>class InvalidAgeException extends Exception {
    InvalidAgeException(String message) {
        super(message);
    }
}

class UserService {
    void register(int age) throws InvalidAgeException {
        if (age &lt; 18) {
            throw new InvalidAgeException("Age " + age + " is not allowed");
        }
    }
}</code></pre>
<ul>
<li>Checked Custom Exception: ស្នងពី <code>Exception</code>។</li>
<li>Unchecked Custom Exception: ស្នងពី <code>RuntimeException</code>។</li>
<li>ដាក់ឈ្មោះបញ្ចប់ដោយ <code>Exception</code> ដើម្បីអានងាយ។</li>
</ul>`
    }
  ],
  terms: [
    { en: "Exception", kh: "បញ្ហា", text: "Object ដែលតំណាងឱ្យបញ្ហាកើតឡើងពេល Program ដំណើរការ។" },
    { en: "try", kh: "សាកល្បង", text: "Block ដែលផ្ទុកកូដអាចបង្ក Exception។" },
    { en: "catch", kh: "ចាប់", text: "Block ដែលគ្រប់គ្រង Exception ជាក់លាក់។" },
    { en: "finally", kh: "ជានិច្ច", text: "Block ដែលដំណើរការជានិច្ច សម្រាប់ការងារសម្អាត។" },
    { en: "throw", kh: "បង្ក", text: "Keyword សម្រាប់បង្ក Exception ដោយខ្លួនឯង។" },
    { en: "throws", kh: "ប្រកាស", text: "Keyword នៅលើ Method ដែលប្រកាសថាអាចបញ្ជូន Exception។" },
    { en: "Checked Exception", kh: "បានពិនិត្យ", text: "Exception ដែល Compiler បង្ខំឱ្យគ្រប់គ្រង ឬប្រកាស។" },
    { en: "Custom Exception", kh: "Exception ផ្ទាល់ខ្លួន", text: "Class Exception ដែលអ្នកបង្កើតសម្រាប់បញ្ហាជាក់លាក់។" }
  ],
  syntax: [
    { label: "try-catch", code: `try {
    // risky code
} catch (ExceptionType e) {
    // handle
}`, note: "ចាប់ Exception ដើម្បីកុំឱ្យ Program ឈប់។" },
    { label: "try-catch-finally", code: `try {
    // risky code
} catch (ExceptionType e) {
    // handle
} finally {
    // always runs
}`, note: "finally ដំណើរការជានិច្ច។" },
    { label: "throw", code: `if (age < 18) {
    throw new IllegalArgumentException("Age too small");
}`, note: "បង្ក Exception ដោយខ្លួនឯង។" },
    { label: "throws", code: `void readFile() throws IOException {
    // may throw IOException
}`, note: "ប្រកាស Exception នៅលើ Method Signature។" },
    { label: "try-with-resources", code: `try (BufferedReader r = new BufferedReader(new FileReader("a.txt"))) {
    // use r
} catch (IOException e) {
    // handle
}`, note: "Resource ត្រូវបិទដោយស្វ័យប្រវត្តិ។" }
  ],
  examples: [
    {
      title: "Try-Catch មូលដ្ឋាន",
      desc: "ចាប់ <code>ArithmeticException</code> ពេលចែកនឹង 0។",
      file: "TryCatchDemo.java",
      code: `public class TryCatchDemo {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;

        try {
            int result = a / b;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
            System.out.println("Message: " + e.getMessage());
        }

        System.out.println("Program continues");
    }
}`,
      output: "Cannot divide by zero\nMessage: / by zero\nProgram continues",
      lines: [
        "កូដក្នុង <code>try</code> បង្ក ArithmeticException។",
        "<code>catch</code> ចាប់ Exception និងបង្ហាញសារ។",
        "<code>e.getMessage()</code> ត្រឡប់សារពី Java។",
        "Program បន្តដំណើរការបន្ទាប់ពី catch។"
      ]
    },
    {
      title: "Catch ច្រើន និង finally",
      desc: "បង្ហាញការចាប់ Exception ផ្សេងៗ និង Block ដែលដំណើរការជានិច្ច។",
      file: "MultipleCatchDemo.java",
      code: `public class MultipleCatchDemo {
    public static void main(String[] args) {
        String[] values = {"10", "abc", "30"};

        for (String value : values) {
            try {
                int number = Integer.parseInt(value);
                System.out.println("Number: " + number);
            } catch (NumberFormatException e) {
                System.out.println("Invalid number: " + value);
            } finally {
                System.out.println("Done processing");
            }
        }
    }
}`,
      output: "Number: 10\nDone processing\nInvalid number: abc\nDone processing\nNumber: 30\nDone processing",
      lines: [
        "Each loop iteration មាន try-catch ដោយឡែក។",
        "<code>Integer.parseInt(\"abc\")</code> បង្ក NumberFormatException។",
        "<code>finally</code> ដំណើរការទោះបីមាន Exception ឬអត់។",
        "Exception មួយមិនធ្វើឱ្យ Loop ទាំងមូលឈប់ទេ។"
      ]
    },
    {
      title: "throws ជាមួយ Checked Exception",
      desc: "Method ប្រកាសថាអាចបញ្ជូន Exception ទៅអ្នកហៅ។",
      file: "ThrowsDemo.java",
      code: `import java.io.IOException;

public class ThrowsDemo {
    static void validate(int age) throws IOException {
        if (age < 18) {
            throw new IOException("Age must be at least 18");
        }
        System.out.println("Access granted");
    }

    public static void main(String[] args) {
        try {
            validate(15);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,
      output: "Error: Age must be at least 18",
      lines: [
        "<code>throws IOException</code> ជូនដំណឹងថា Method អាចបង្ក Exception។",
        "<code>throw new IOException(...)</code> បង្ក Exception ពិតប្រាកដ។",
        "<code>main</code> ត្រូវ Catch ព្រោះ IOException ជា Checked Exception។"
      ]
    },
    {
      title: "Custom Exception",
      desc: "បង្កើត Exception ផ្ទាល់ខ្លួនសម្រាប់ការផ្ទៀងផ្ទាត់អាយុ។",
      file: "CustomExceptionDemo.java",
      code: `class InvalidAgeException extends Exception {
    InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomExceptionDemo {
    static void register(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age " + age + " is not allowed");
        }
        System.out.println("Registration successful");
    }

    public static void main(String[] args) {
        try {
            register(16);
        } catch (InvalidAgeException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}`,
      output: "Caught: Age 16 is not allowed",
      lines: [
        "<code>InvalidAgeException</code> ស្នងពី <code>Exception</code>។",
        "Constructor ហៅ <code>super(message)</code> ដើម្បីរក្សាសារ។",
        "<code>register</code> ប្រកាស <code>throws InvalidAgeException</code>។",
        "អ្នកហៅគ្រប់គ្រងដោយ Catch ជាក់លាក់។"
      ]
    }
  ],
  mistakes: [
    { text: "<span class=\"bad-code\">❌ Catch Exception ទូទៅពេក</span><br><code>catch (Exception e) {}</code> លាក់បញ្ហាជាក់លាក់។", fix: "Catch Exception ដែលអ្នករំពឹងជាក់លាក់ ដូចជា IOException ឬ NumberFormatException។" },
    { text: "<span class=\"bad-code\">❌ Catch ទទេ</span><br>ការទុក Catch ទទេ ធ្វើឱ្យបញ្ហាបាត់ដោយគ្មានការជូនដំណឹង។", fix: "យ៉ាងហោចណាស់ បង្ហាញសារ ឬ Log ព័ត៌មានបញ្ហា។" },
    { text: "<span class=\"bad-code\">❌ ប្រើ Exception សម្រាប់ Control Flow</span><br>ឧ. ប្រើ try-catch ជំនួស if ញឹកញាប់។", fix: "ពិនិត្យលក្ខខណ្ឌដោយ if ហើយប្រើ Exception សម្រាប់ករណីពិសេសប៉ុណ្ណោះ។" },
    { text: "<span class=\"bad-code\">❌ មិនបិទ Resource</span><br>File ឬ Scanner មិនត្រូវបិទ បណ្តាលឱ្យលេច Memory និង File Lock។", fix: "ប្រើ try-with-resources ឬបិទក្នុង finally។" }
  ],
  tips: [
    "សរសេរ Catch Block ឱ្យមានអត្ថន័យ — បង្ហាញសារ ឬ Log។",
    "ប្រើ Exception ជាក់លាក់ និងតាមលំដាប់ពីតូចទៅធំ។",
    "ប្រើ try-with-resources សម្រាប់ File, Scanner, Connection។",
    "កុំប្រើ Exception ជំនួស Logic ធម្មតា។"
  ],
  exercises: [
    {
      level: 1,
      title: "ចែកលេខដោយសុវត្ថិភាព",
      desc: "សរសេរ Program ចែក <code>10</code> នឹង <code>0</code> ហើយចាប់ <code>ArithmeticException</code> ដើម្បីបង្ហាញ <code>Cannot divide by zero</code>។",
      requirements: ["ប្រើ try-catch", "ចាប់ ArithmeticException", "បង្ហាញសារត្រឹមត្រូវ"],
      outputSample: "Cannot divide by zero",
      hint: "ដាក់ <code>10 / 0</code> ក្នុង try ហើយ Catch ArithmeticException។",
      solutionCode: `public class SafeDivide {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;

        try {
            System.out.println(a / b);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
    }
}`
    },
    {
      level: 1,
      title: "បំប្លែងលេខមិនត្រឹមត្រូវ",
      desc: "សាកល្បងបំប្លែង <code>\"abc\"</code> ទៅជា Integer ហើយចាប់ <code>NumberFormatException</code> ដើម្បីបង្ហាញ <code>Invalid number</code>។",
      requirements: ["ប្រើ Integer.parseInt", "ចាប់ NumberFormatException", "បង្ហាញ Invalid number"],
      outputSample: "Invalid number",
      hint: "Integer.parseInt(\"abc\") បង្ក NumberFormatException។",
      solutionCode: `public class SafeParse {
    public static void main(String[] args) {
        String text = "abc";

        try {
            int number = Integer.parseInt(text);
            System.out.println(number);
        } catch (NumberFormatException e) {
            System.out.println("Invalid number");
        }
    }
}`
    },
    {
      level: 2,
      title: "Index លើសពី Array",
      desc: "បង្កើត Array មាន 3 ធាតុ ហើយចូលប្រើ Index 5។ ចាប់ <code>ArrayIndexOutOfBoundsException</code> និងបង្ហាញ <code>Index out of range</code>។",
      requirements: ["ប្រើ Array", "ចូលប្រើ Index ខុស", "ចាប់ ArrayIndexOutOfBoundsException"],
      outputSample: "Index out of range",
      hint: "int[] numbers = {1, 2, 3}; ហើយអាន numbers[5] ក្នុង try។",
      solutionCode: `public class ArrayIndexDemo {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};

        try {
            System.out.println(numbers[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Index out of range");
        }
    }
}`
    },
    {
      level: 2,
      title: "finally ដំណើរការជានិច្ច",
      desc: "សរសេរ try-catch-finally ដែលមានការចែកនឹង 0។ Catch បង្ហាញ <code>Error handled</code> ហើយ finally បង្ហាញ <code>Finished</code>។",
      requirements: ["មាន try-catch-finally", "Catch ArithmeticException", "finally បង្ហាញ Finished"],
      outputSample: "Error handled\nFinished",
      hint: "ដាក់ System.out.println(\"Finished\") ក្នុង finally។",
      solutionCode: `public class FinallyDemo {
    public static void main(String[] args) {
        try {
            int x = 10 / 0;
            System.out.println(x);
        } catch (ArithmeticException e) {
            System.out.println("Error handled");
        } finally {
            System.out.println("Finished");
        }
    }
}`
    },
    {
      level: 3,
      title: "Custom Exception សម្រាប់ពិន្ទុ",
      desc: "បង្កើត <code>InvalidScoreException</code>។ Method <code>checkScore(int score)</code> បង្ក Exception ប្រសិនបើពិន្ទុតិចជាង 0 ឬច្រើនជាង 100។ បង្ហាញសារ <code>Invalid score: 120</code>។",
      requirements: ["Custom Exception", "throw", "throws", "Catch ក្នុង main"],
      input: "score = 120",
      outputSample: "Invalid score: 120",
      hint: "ស្នងពី Exception ហើយ throw ពេល score < 0 || score > 100។",
      solutionCode: `class InvalidScoreException extends Exception {
    InvalidScoreException(String message) {
        super(message);
    }
}

public class ScoreValidator {
    static void checkScore(int score) throws InvalidScoreException {
        if (score < 0 || score > 100) {
            throw new InvalidScoreException("Invalid score: " + score);
        }
        System.out.println("Score accepted: " + score);
    }

    public static void main(String[] args) {
        try {
            checkScore(120);
        } catch (InvalidScoreException e) {
            System.out.println(e.getMessage());
        }
    }
}`
    },
    {
      level: 3,
      title: "អាន File ដោយ try-with-resources",
      desc: "អាន File <code>data.txt</code> បន្ទាត់ម្តងមួយ ដោយប្រើ <code>BufferedReader</code> ក្នុង try-with-resources។ ប្រសិនបើមានបញ្ហា បង្ហាញ <code>File not found</code>។",
      requirements: ["ប្រើ try-with-resources", "ប្រើ BufferedReader", "ចាប់ IOException"],
      outputSample: "File not found",
      hint: "try (BufferedReader reader = new BufferedReader(new FileReader(\"data.txt\"))) { ... }",
      solutionCode: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadFileSafe {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("File not found");
        }
    }
}`
    },
    {
      level: 1,
      title: "Catch ArithmeticException",
      desc: "សរសេរកម្មវិធីចែកលេខដោយ 0 ហើយចាប់ Exception ដើម្បីបង្ហាញសារជំនួសការ Crash។",
      requirements: ["ប្រើ try-catch", "ចាប់ ArithmeticException", "បង្ហាញសារច្បាស់លាស់"],
      outputSample: "Cannot divide by zero",
      hint: "ប្រើ <code>catch (ArithmeticException e)</code>។",
      solutionCode: `public class DivideDemo {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
    }
}`
    },
    {
      level: 2,
      title: "finally Block",
      desc: "បង្ហាញថា <code>finally</code> តែងតែដំណើរការ ទោះមាន Exception ឬអត់។",
      requirements: ["ប្រើ try-catch-finally", "ចាប់ ArrayIndexOutOfBoundsException", "បង្ហាញសារក្នុង finally"],
      outputSample: "Index out of range\nDone",
      hint: "Block <code>finally</code> រត់ក្រោយ try/catch ជានិច្ច។",
      solutionCode: `public class FinallyDemo {
    public static void main(String[] args) {
        try {
            int[] nums = {1, 2, 3};
            System.out.println(nums[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Index out of range");
        } finally {
            System.out.println("Done");
        }
    }
}`
    },
    {
      level: 2,
      title: "ចែកលេខដោយសុវត្ថិភាព",
      desc: "សរសេរ Program ចែកលេខពីរ ហើយចាប់ <code>ArithmeticException</code> ពេលចែកនឹង 0។",
      requirements: ["ប្រើ try-catch", "ចាប់ ArithmeticException", "បង្ហាញសារសុវត្ថិភាព"],
      inputSample: "10 / 0",
      outputSample: "Cannot divide by zero",
      hint: "ដាក់ការចែកក្នុង try រួច catch <code>ArithmeticException e</code>។",
      solutionCode: `public class SafeDivide {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;

        try {
            System.out.println("Result: " + (a / b));
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
    }
}`,
      solution: "ការចែកនឹង 0 បង្ក ArithmeticException។ catch ការពារ Program មិនឱ្យ Crash។"
    },
    {
      level: 3,
      title: "Custom Exception",
      desc: "បង្កើត <code>InvalidAgeException</code> ហើយ throw ពេលអាយុតិចជាង 0 ឬធំជាង 120។",
      requirements: ["បង្កើត Custom Exception", "ប្រើ throw", "ចាប់ដោយ catch"],
      inputSample: "age=150",
      outputSample: "Invalid age: 150",
      hint: "Class ត្រូវ <code>extends Exception</code> និងមាន Constructor ទទួល message។",
      solutionCode: `class InvalidAgeException extends Exception {
    InvalidAgeException(String message) {
        super(message);
    }
}

public class AgeValidator {
    static void validate(int age) throws InvalidAgeException {
        if (age < 0 || age > 120) {
            throw new InvalidAgeException("Invalid age: " + age);
        }
        System.out.println("Valid age: " + age);
    }

    public static void main(String[] args) {
        try {
            validate(150);
        } catch (InvalidAgeException e) {
            System.out.println(e.getMessage());
        }
    }
}`,
      solution: "Custom Exception ស្នងពី Exception។ Method ប្រកាស throws ហើយ throw ពេលទិន្នន័យមិនត្រឹមត្រូវ។ catch បង្ហាញសារ។"
    }
  ],
  quiz: [
    { q: "តើ Block ណាដំណើរការជានិច្ច ទោះបីមាន Exception ឬអត់?", options: ["try", "catch", "finally", "throw"], answer: 2, explain: "finally ដំណើរការជានិច្ច សម្រាប់ការងារសម្អាត។" },
    { q: "តើ Exception ណាជា Unchecked Exception?", options: ["IOException", "ArithmeticException", "FileNotFoundException", "SQLException"], answer: 1, explain: "ArithmeticException ស្នងពី RuntimeException ដូច្នេះជា Unchecked។" },
    { q: "Keyword ណាប្រើដើម្បីបង្ក Exception ដោយខ្លួនឯង?", options: ["throws", "throw", "catch", "raise"], answer: 1, explain: "throw បង្ក Exception ក្នុងកូដ។" },
    { q: "Keyword ណាប្រកាសថា Method អាចបញ្ជូន Exception ទៅអ្នកហៅ?", options: ["throw", "throws", "catch", "finally"], answer: 1, explain: "throws ដាក់នៅ Method Signature។" },
    { q: "try-with-resources បិទ Resource ស្វ័យប្រវត្តិ ប្រសិនបើ Resource អនុវត្ត Interface ណា?", options: ["Serializable", "AutoCloseable", "Runnable", "Comparable"], answer: 1, explain: "AutoCloseable (និង Closeable) ជាមូលដ្ឋាននៃ try-with-resources។" },
    { q: "Custom Exception គួរស្នងមកពី Class ណា ដើម្បីក្លាយជា Checked Exception?", options: ["Object", "Throwable", "Exception", "RuntimeException"], answer: 2, explain: "ការស្នងពី Exception ធ្វើឱ្យវាជា Checked។ RuntimeException ជា Unchecked។" }
  ],
  summary: [
    "Exception ជាបញ្ហាកើតឡើងពេល Program ដំណើរការ ហើយស្នងមកពី Throwable។",
    "try-catch ចាប់ Exception ដើម្បីឱ្យ Program បន្ត។",
    "finally ដំណើរការជានិច្ច សម្រាប់សម្អាត Resource។",
    "throw បង្ក Exception ហើយ throws ប្រកាសនៅលើ Method។",
    "Checked Exception ត្រូវគ្រប់គ្រង ឬប្រកាស; Unchecked មិនចាំបាច់។",
    "try-with-resources បិទ Resource ស្វ័យប្រវត្តិ។"
  ],
  takeaways: [
    "Catch Exception ជាក់លាក់ មិនមែន Exception ទូទៅ។",
    "កុំទុក Catch ទទេ — ត្រូវរាយការណ៍បញ្ហា។",
    "ប្រើ try-with-resources សម្រាប់ File និង Scanner។",
    "Custom Exception ធ្វើឱ្យកូដអានងាយ និងមានអត្ថន័យ។"
  ],
  sources: [
    { label: "Oracle — Exceptions", url: "https://docs.oracle.com/javase/tutorial/essential/exceptions/" },
    { label: "W3Schools — Java Exceptions", url: "https://www.w3schools.com/java/java_try_catch.asp" },
    { label: "Oracle — try-with-resources", url: "https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html" }
  ]
});

window.JAVA_LESSONS.push({
  id: "collections",
  num: 23,
  part: 13,
  partTitle: "Advanced Java",
  title: "Collections Framework",
  titleKh: "Collections Framework",
  time: "៩០ នាទី",
  level: 4,
  intro: "Collections Framework ផ្តល់ Collection Class ដែលអាចរីកធំ និងបត់បែនបាន ជំនួស Array ធម្មតា។ អ្នកនឹងរៀន <code>List</code>, <code>Set</code>, <code>Map</code>, <code>ArrayList</code>, <code>HashSet</code>, <code>HashMap</code>, Generics និងការ Sort។",
  objectives: [
    "យល់ពីរចនាសម្ព័ន្ធ Collections Framework។",
    "ប្រើ <code>ArrayList</code> សម្រាប់ List ដែលមានលំដាប់។",
    "ប្រើ <code>HashSet</code> ដើម្បីការពារទិន្នន័យស្ទួន។",
    "ប្រើ <code>HashMap</code> សម្រាប់ Key-Value។",
    "ប្រើ Generics និង Loop លើ Collection។",
    "Sort Collection ដោយ <code>Collections</code> និង <code>Comparator</code>។"
  ],
  sections: [
    {
      title: "Collections Framework ជាអ្វី?",
      html: `<p><strong>Collections Framework</strong> ជាសំណុំ Interface និង Class សម្រាប់ផ្ទុក និងគ្រប់គ្រង Group នៃ Object។ វាជំនួសដែនកំណត់របស់ Array ដូចជា ទំហំថេរ។</p>
<pre><code>Iterable
└── Collection
    ├── List   → ArrayList, LinkedList
    ├── Set    → HashSet, TreeSet
    └── Queue  → PriorityQueue

Map          → HashMap, TreeMap (មិនស្ថិតក្នុង Collection ផ្ទាល់)</code></pre>
<table>
<thead><tr><th>Interface</th><th>លក្ខណៈ</th><th>ឧទាហរណ៍</th></tr></thead>
<tbody>
<tr><td>List</td><td>មានលំដាប់ អនុញ្ញាតស្ទួន</td><td>ArrayList</td></tr>
<tr><td>Set</td><td>មិនអនុញ្ញាតស្ទួន</td><td>HashSet</td></tr>
<tr><td>Map</td><td>Key មិនស្ទួន → Value</td><td>HashMap</td></tr>
</tbody>
</table>
<div class="callout info"><div class="callout-title">ជ្រើសរើសឱ្យត្រូវ</div><p>ត្រូវការលំដាប់ និង Index → <code>List</code>។ ត្រូវការមិនស្ទួន → <code>Set</code>។ ត្រូវការស្វែងរកតាម Key → <code>Map</code>។</p></div>`
    },
    {
      title: "List និង ArrayList",
      html: `<p><strong>ArrayList</strong> ជា List ដែលអាចរីកធំដោយស្វ័យប្រវត្តិ និងអានតាម Index បានលឿន។</p>
<pre><code>import java.util.ArrayList;

ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;();
names.add("Dara");
names.add("Sokha");
names.add("Dara");          // ស្ទួនបាន

System.out.println(names.size());     // 3
System.out.println(names.get(1));     // Sokha

names.set(0, "Bopha");
names.remove("Sokha");</code></pre>
<ul>
<li><code>add()</code> បន្ថែម, <code>get(i)</code> អាន, <code>set(i, v)</code> កែ, <code>remove()</code> លុប។</li>
<li><code>size()</code> ត្រឡប់ចំនួនធាតុ។</li>
<li>Loop បានដោយ for, for-each ឬ <code>Iterator</code>។</li>
</ul>
<pre><code>for (String name : names) {
    System.out.println(name);
}</code></pre>`
    },
    {
      title: "Set និង HashSet",
      html: `<p><strong>Set</strong> មិនអនុញ្ញាតធាតុស្ទួន។ <strong>HashSet</strong> មិនរក្សាលំដាប់ ប៉ុន្តែលឿនសម្រាប់ការពិនិត្យថាមានឬអត់។</p>
<pre><code>import java.util.HashSet;

HashSet&lt;String&gt; cities = new HashSet&lt;&gt;();
cities.add("Phnom Penh");
cities.add("Siem Reap");
cities.add("Phnom Penh");     // មិនបន្ថែមទេ

System.out.println(cities.size());          // 2
System.out.println(cities.contains("Siem Reap"));  // true</code></pre>
<div class="callout tip"><div class="callout-title">លុបទិន្នន័យស្ទួន</div><p>ដាក់ List ចូល <code>HashSet</code> ដើម្បីលុបធាតុស្ទួនដោយស្វ័យប្រវត្តិ។</p></div>`
    },
    {
      title: "Map និង HashMap",
      html: `<p><strong>Map</strong> ផ្ទុកទិន្នន័យជា Key-Value។ Key មិនអាចស្ទួនបាន។ <strong>HashMap</strong> លឿន និងពេញនិយមបំផុត។</p>
<pre><code>import java.util.HashMap;

HashMap&lt;String, Integer&gt; scores = new HashMap&lt;&gt;();
scores.put("Dara", 85);
scores.put("Sokha", 92);
scores.put("Dara", 90);      // ជំនួសតម្លៃចាស់

System.out.println(scores.get("Dara"));      // 90
System.out.println(scores.containsKey("Sokha")); // true
System.out.println(scores.get("Vichea"));    // null</code></pre>
<p>Loop លើ Map៖</p>
<pre><code>for (Map.Entry&lt;String, Integer&gt; entry : scores.entrySet()) {
    System.out.println(entry.getKey() + " = " + entry.getValue());
}</code></pre>`
    },
    {
      title: "Generics, Iteration និង Sorting",
      html: `<p><strong>Generics</strong> កំណត់ប្រភេទទិន្នន័យក្នុង Collection ដើម្បីធានាសុវត្ថិភាព Type។</p>
<pre><code>ArrayList&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();
numbers.add(30);
numbers.add(10);
numbers.add(20);

Collections.sort(numbers);              // 10, 20, 30
Collections.reverse(numbers);           // 30, 20, 10</code></pre>
<p>សម្រាប់ Object ផ្ទាល់ខ្លួន ប្រើ <code>Comparator</code>៖</p>
<pre><code>students.sort((a, b) -&gt; a.score - b.score);</code></pre>
<div class="callout warn"><div class="callout-title">Generics ត្រូវការ Wrapper</div><p>មិនអាចសរសេរ <code>ArrayList&lt;int&gt;</code> បានទេ។ ត្រូវប្រើ <code>Integer</code>, <code>Double</code> ជាដើម។</p></div>`
    }
  ],
  terms: [
    { en: "Collection", kh: "កម្រង", text: "Group នៃ Object ដែលគ្រប់គ្រងដោយ Framework។" },
    { en: "List", kh: "បញ្ជី", text: "Collection មានលំដាប់ និងអនុញ្ញាតធាតុស្ទួន។" },
    { en: "Set", kh: "សំណុំ", text: "Collection មិនអនុញ្ញាតធាតុស្ទួន។" },
    { en: "Map", kh: "ផែនទី", text: "Collection ផ្ទុក Key-Value។" },
    { en: "ArrayList", kh: "បញ្ជី Array", text: "List ដែលរីកធំស្វ័យប្រវត្តិ និងអានតាម Index។" },
    { en: "HashMap", kh: "ផែនទី Hash", text: "Map ដែលស្វែងរកតាម Key បានលឿន។" },
    { en: "Generics", kh: "ប្រភេទទូទៅ", text: "មុខងារកំណត់ Type ក្នុង Collection។" },
    { en: "Iterator", kh: "អ្នករាប់", text: "Object សម្រាប់ដើរលើ Collection ម្តងមួយធាតុ។" }
  ],
  syntax: [
    { label: "ArrayList", code: `ArrayList<String> list = new ArrayList<>();
list.add("Java");
String first = list.get(0);
int count = list.size();`, note: "List មាន Index និងអនុញ្ញាតធាតុស្ទួន។" },
    { label: "HashSet", code: `HashSet<String> set = new HashSet<>();
set.add("A");
set.add("A");        // មិនបន្ថែម
boolean exists = set.contains("A");`, note: "Set មិនអនុញ្ញាតធាតុស្ទួន។" },
    { label: "HashMap", code: `HashMap<String, Integer> map = new HashMap<>();
map.put("A", 10);
int value = map.get("A");
boolean has = map.containsKey("A");`, note: "Map ផ្ទុក Key-Value។" },
    { label: "Loop Map", code: `for (Map.Entry<String, Integer> e : map.entrySet()) {
    System.out.println(e.getKey() + " " + e.getValue());
}`, note: "entrySet() អនុញ្ញាតឱ្យអាន Key និង Value។" },
    { label: "Sort", code: `Collections.sort(list);
Collections.reverse(list);`, note: "Sort តាមលំដាប់ធម្មជាតិ ឬបញ្ច្រាស។" }
  ],
  examples: [
    {
      title: "ArrayList មូលដ្ឋាន",
      desc: "បន្ថែម អាន កែ និង Loop លើ ArrayList។",
      file: "ArrayListDemo.java",
      code: `import java.util.ArrayList;

public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Dara");
        names.add("Sokha");
        names.add("Bopha");

        names.set(1, "Vichea");
        names.remove("Bopha");

        System.out.println("Size: " + names.size());
        for (String name : names) {
            System.out.println(name);
        }
    }
}`,
      output: "Size: 2\nDara\nVichea",
      lines: [
        "ArrayList មិនត្រូវកំណត់ទំហំដំបូងទេ។",
        "<code>set(1, ...)</code> កែធាតុតាម Index។",
        "<code>remove(\"Bopha\")</code> លុបតាមតម្លៃ។",
        "for-each ដើរលើគ្រប់ធាតុ។"
      ]
    },
    {
      title: "HashMap សម្រាប់ពិន្ទុ",
      desc: "ផ្ទុកពិន្ទុសិស្សតាមឈ្មោះ និងអានតម្លៃ។",
      file: "HashMapDemo.java",
      code: `import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

public class HashMapDemo {
    public static void main(String[] args) {
        HashMap<String, Integer> scores = new HashMap<>();
        scores.put("Dara", 85);
        scores.put("Sokha", 92);
        scores.put("Bopha", 78);

        scores.put("Dara", 90);

        System.out.println("Dara: " + scores.get("Dara"));
        System.out.println("Total students: " + scores.size());

        ArrayList<String> names = new ArrayList<>(scores.keySet());
        Collections.sort(names);
        for (String name : names) {
            System.out.println(name + " -> " + scores.get(name));
        }
    }
}`,
      output: "Dara: 90\nTotal students: 3\nBopha -> 78\nDara -> 90\nSokha -> 92",
      lines: [
        "Key ត្រូវតែមាន Type តែមួយ (String) និង Value តែមួយ (Integer)។",
        "put ជាមួយ Key ដូចគ្នា នឹងជំនួសតម្លៃចាស់។",
        "<code>keySet()</code> ត្រឡប់សំណុំ Key ទាំងអស់។",
        "Sort Key ជាមុន ដើម្បីបង្ហាញលទ្ធផលជាលំដាប់ថេរ។"
      ]
    },
    {
      title: "HashSet លុបធាតុស្ទួន",
      desc: "បង្ហាញថា Set មិនរក្សាធាតុស្ទួន។",
      file: "HashSetDemo.java",
      code: `import java.util.HashSet;

public class HashSetDemo {
    public static void main(String[] args) {
        HashSet<String> cities = new HashSet<>();
        cities.add("Phnom Penh");
        cities.add("Siem Reap");
        cities.add("Phnom Penh");
        cities.add("Battambang");

        System.out.println("Size: " + cities.size());
        System.out.println(cities.contains("Siem Reap"));
    }
}`,
      output: "Size: 3\ntrue",
      lines: [
        "ការបន្ថែម \"Phnom Penh\" លើកទីពីរ មិនផ្លាស់ប្តូរទំហំ។",
        "<code>contains</code> ពិនិត្យថាមានឬអត់។",
        "Set ល្អសម្រាប់ការពារទិន្នន័យស្ទួន។"
      ]
    },
    {
      title: "Sort និង Comparator",
      desc: "Sort List នៃ Object តាម Field ដោយ Comparator។",
      file: "SortDemo.java",
      code: `import java.util.ArrayList;
import java.util.Collections;

class Student {
    String name;
    int score;

    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }
}

public class SortDemo {
    public static void main(String[] args) {
        ArrayList<Student> students = new ArrayList<>();
        students.add(new Student("Dara", 85));
        students.add(new Student("Sokha", 92));
        students.add(new Student("Bopha", 78));

        students.sort((a, b) -> a.score - b.score);

        for (Student s : students) {
            System.out.println(s.name + ": " + s.score);
        }
    }
}`,
      output: "Bopha: 78\nDara: 85\nSokha: 92",
      lines: [
        "Comparator ប្រៀបធៀប Object ពីរតាម score។",
        "តម្លៃអវិជ្ជមាន មានន័យថា a មកមុន b។",
        "អាចប្តូរទៅ <code>b.score - a.score</code> សម្រាប់លំដាប់ចុះ។"
      ]
    }
  ],
  mistakes: [
    { text: "<span class=\"bad-code\">❌ ប្រើ ArrayList&lt;int&gt;</span><br>Generics មិនអាចប្រើ Primitive Type បានទេ។", fix: "ប្រើ <code>ArrayList&lt;Integer&gt;</code> ជំនួស។" },
    { text: "<span class=\"bad-code\">❌ លុបធាតុពេល Loop for-each</span><br>ការកែ Collection ពេលកំពុង Loop បណ្តាលឱ្យ <code>ConcurrentModificationException</code>។", fix: "ប្រើ <code>Iterator.remove()</code> ឬ <code>removeIf()</code>។" },
    { text: "<span class=\"bad-code\">❌ រំពឹងលំដាប់ពី HashSet</span><br>HashSet មិនរក្សាលំដាប់ធាតុទេ។", fix: "ប្រើ <code>LinkedHashSet</code> ឬ <code>TreeSet</code> ប្រសិនបើត្រូវការលំដាប់។" },
    { text: "<span class=\"bad-code\">❌ ភ្លេចពិនិត្យ null ពី Map</span><br><code>map.get(key)</code> ត្រឡប់ null ប្រសិនបើ Key មិនមាន។", fix: "ពិនិត្យ <code>containsKey</code> ឬប្រើ <code>getOrDefault</code>។" }
  ],
  tips: [
    "ជ្រើស Interface សម្រាប់ Reference ដូចជា <code>List&lt;String&gt; list = new ArrayList&lt;&gt;()</code>។",
    "ប្រើ Generics ជានិច្ច ដើម្បីកាត់បន្ថយ Cast។",
    "ប្រើ <code>getOrDefault</code> ពេលរាប់ចំនួនដែលអាចគ្មាន Key។",
    "ជ្រើស Collection តាមតម្រូវការ៖ List, Set ឬ Map។"
  ],
  exercises: [
    {
      level: 1,
      title: "ArrayList ពណ៌",
      desc: "បង្កើត <code>ArrayList</code> សម្រាប់ពណ៌ ៣ បន្ថែម <code>Red</code>, <code>Green</code>, <code>Blue</code> ហើយបង្ហាញទំហំ និងធាតុទាំងអស់។",
      requirements: ["ប្រើ ArrayList", "បន្ថែម 3 ធាតុ", "បង្ហាញ size និងធាតុ"],
      outputSample: "Size: 3\nRed\nGreen\nBlue",
      hint: "ប្រើ add បីដង បន្ទាប់មក size() និង for-each។",
      solutionCode: `import java.util.ArrayList;

public class ColorList {
    public static void main(String[] args) {
        ArrayList<String> colors = new ArrayList<>();
        colors.add("Red");
        colors.add("Green");
        colors.add("Blue");

        System.out.println("Size: " + colors.size());
        for (String color : colors) {
            System.out.println(color);
        }
    }
}`
    },
    {
      level: 1,
      title: "HashMap សាមញ្ញ",
      desc: "ផ្ទុក <code>\"Java\" -> 1995</code> និង <code>\"Python\" -> 1991</code> ក្នុង HashMap ហើយបង្ហាញឆ្នាំរបស់ Java។",
      requirements: ["ប្រើ HashMap", "ប្រើ put", "បង្ហាញតម្លៃ Java"],
      outputSample: "Java: 1995",
      hint: "map.put(\"Java\", 1995); ហើយប្រើ map.get(\"Java\")។",
      solutionCode: `import java.util.HashMap;

public class LanguageYears {
    public static void main(String[] args) {
        HashMap<String, Integer> years = new HashMap<>();
        years.put("Java", 1995);
        years.put("Python", 1991);

        System.out.println("Java: " + years.get("Java"));
    }
}`
    },
    {
      level: 2,
      title: "បូកសរុប ArrayList",
      desc: "បង្កើត <code>ArrayList&lt;Integer&gt;</code> មាន 10, 20, 30 ហើយគណនាផលបូក។",
      requirements: ["ប្រើ ArrayList&lt;Integer&gt;", "Loop", "បង្ហាញផលបូក"],
      outputSample: "Sum: 60",
      hint: "បង្កើត variable sum = 0 ហើយបូកនឹងធាតុនីមួយៗ។",
      solutionCode: `import java.util.ArrayList;

public class SumList {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }

        System.out.println("Sum: " + sum);
    }
}`
    },
    {
      level: 2,
      title: "ពាក្យមិនស្ទួន",
      desc: "បង្កើត List មានពាក្យ <code>java</code>, <code>php</code>, <code>java</code>, <code>python</code> ហើយប្រើ HashSet ដើម្បីបង្ហាញពាក្យមិនស្ទួន និងចំនួន។",
      requirements: ["ប្រើ HashSet", "បង្ហាញចំនួន", "បង្ហាញពាក្យមិនស្ទួន"],
      outputSample: "Unique: 3\n[java, php, python]",
      hint: "new HashSet<>(list) នឹងលុបធាតុស្ទួនដោយស្វ័យប្រវត្តិ។ Sort List បន្ថែម ដើម្បីបង្ហាញលទ្ធផលជាលំដាប់។",
      solutionCode: `import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;

public class UniqueWords {
    public static void main(String[] args) {
        ArrayList<String> words = new ArrayList<>();
        words.add("java");
        words.add("php");
        words.add("java");
        words.add("python");

        HashSet<String> unique = new HashSet<>(words);
        ArrayList<String> sorted = new ArrayList<>(unique);
        Collections.sort(sorted);
        System.out.println("Unique: " + unique.size());
        System.out.println(sorted);
    }
}`
    },
    {
      level: 3,
      title: "រាប់ពាក្យក្នុង Text",
      desc: "រាប់ចំនួនដងនៃពាក្យនីមួយៗក្នុង <code>\"java is fun java is powerful\"</code> ដោយប្រើ HashMap។",
      requirements: ["ប្រើ split", "ប្រើ HashMap", "ប្រើ getOrDefault"],
      outputSample: "java: 2\nis: 2\nfun: 1\npowerful: 1",
      hint: "ប្រើ counts.put(word, counts.getOrDefault(word, 0) + 1)។",
      solutionCode: `import java.util.ArrayList;
import java.util.HashMap;

public class WordCount {
    public static void main(String[] args) {
        String text = "java is fun java is powerful";
        String[] words = text.split(" ");
        HashMap<String, Integer> counts = new HashMap<>();
        ArrayList<String> order = new ArrayList<>();

        for (String word : words) {
            if (!order.contains(word)) {
                order.add(word);
            }
            counts.put(word, counts.getOrDefault(word, 0) + 1);
        }

        for (String word : order) {
            System.out.println(word + ": " + counts.get(word));
        }
    }
}`
    },
    {
      level: 3,
      title: "Sort លំដាប់ចុះ",
      desc: "បង្កើត <code>ArrayList&lt;Integer&gt;</code> មាន 45, 12, 89, 33 ហើយ Sort ពីធំទៅតូច។",
      requirements: ["ប្រើ Collections.sort", "ប្រើ Comparator ឬ reverse", "បង្ហាញលទ្ធផល"],
      outputSample: "[89, 45, 33, 12]",
      hint: "Sort ធម្មតា រួច Collections.reverse(list)។",
      solutionCode: `import java.util.ArrayList;
import java.util.Collections;

public class SortDescending {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(45);
        numbers.add(12);
        numbers.add(89);
        numbers.add(33);

        Collections.sort(numbers);
        Collections.reverse(numbers);

        System.out.println(numbers);
    }
}`
    },
    {
      level: 1,
      title: "ArrayList Basics",
      desc: "បង្កើត <code>ArrayList</code> បន្ថែមឈ្មោះបី រួចបង្ហាញទាំងអស់។",
      requirements: ["import java.util.ArrayList", "ប្រើ add", "បង្ហាញ List"],
      outputSample: "[Dara, Sok, Mona]",
      hint: "ប្រើ <code>ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;();</code>។",
      solutionCode: `import java.util.ArrayList;

public class ListDemo {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Dara");
        names.add("Sok");
        names.add("Mona");
        System.out.println(names);
    }
}`
    },
    {
      level: 2,
      title: "HashMap ផ្ទុកពិន្ទុ",
      desc: "ប្រើ <code>HashMap</code> ផ្ទុកពិន្ទុសិស្ស រួចអានពិន្ទុម្នាក់ និងបង្ហាញចំនួនសិស្ស។",
      requirements: ["import java.util.HashMap", "ប្រើ put", "ប្រើ get និង size"],
      outputSample: "Dara: 90\nSize: 2",
      hint: "Key ជា String និង Value ជា Integer។",
      solutionCode: `import java.util.HashMap;

public class MapDemo {
    public static void main(String[] args) {
        HashMap<String, Integer> scores = new HashMap<>();
        scores.put("Dara", 90);
        scores.put("Sok", 85);
        System.out.println("Dara: " + scores.get("Dara"));
        System.out.println("Size: " + scores.size());
    }
}`
    }
  ],
  quiz: [
    { q: "តើ Interface ណាមិនអនុញ្ញាតធាតុស្ទួន?", options: ["List", "Set", "Map", "Queue"], answer: 1, explain: "Set មិនអនុញ្ញាតធាតុស្ទួន។" },
    { q: "តើ Class ណាសមស្របបំផុតសម្រាប់ Key-Value?", options: ["ArrayList", "HashSet", "HashMap", "LinkedList"], answer: 2, explain: "HashMap ផ្ទុក Key-Value។" },
    { q: "តើ Method ណាបន្ថែមធាតុទៅ ArrayList?", options: ["push", "add", "put", "insert"], answer: 1, explain: "ArrayList ប្រើ add()។ put() ជារបស់ Map។" },
    { q: "តើ map.get(\"A\") ត្រឡប់អ្វី ប្រសិនបើ Key មិនមាន?", options: ["0", "ស្ត្រីងទទេ", "null", "Exception"], answer: 2, explain: "Map ត្រឡប់ null ពេល Key មិនមាន។" },
    { q: "តើ ArrayList&lt;int&gt; ត្រឹមត្រូវទេ?", options: ["ត្រូវ", "មិនត្រូវ — ប្រើ Integer", "ត្រូវតែប្រើ double", "អាស្រ័យលើ JDK"], answer: 1, explain: "Generics ត្រូវការ Wrapper Class ដូចជា Integer។" },
    { q: "តើ Class ណាផ្តល់ Method sort() សម្រាប់ List?", options: ["Arrays", "Collections", "Objects", "Files"], answer: 1, explain: "Collections.sort() ប្រើសម្រាប់ List។" }
  ],
  summary: [
    "Collections Framework ផ្តល់ List, Set និង Map សម្រាប់ផ្ទុកទិន្នន័យដែលរីកធំបាន។",
    "List មានលំដាប់ និងអនុញ្ញាតធាតុស្ទួន; ArrayList ជាការជ្រើសរើសញឹកញាប់។",
    "Set មិនអនុញ្ញាតធាតុស្ទួន; HashSet លឿនសម្រាប់ការពិនិត្យ។",
    "Map ផ្ទុក Key-Value; HashMap ជាការជ្រើសរើសញឹកញាប់។",
    "Generics ធានាសុវត្ថិភាព Type។",
    "Collections និង Comparator ជួយ Sort ទិន្នន័យ។"
  ],
  takeaways: [
    "ជ្រើស Collection តាមតម្រូវការ៖ List, Set ឬ Map។",
    "ប្រើ Generics ជានិច្ច។",
    "កុំកែ Collection ពេល Loop for-each។",
    "ប្រើ getOrDefault សម្រាប់ការរាប់ ឬតម្លៃលំនាំដើម។"
  ],
  sources: [
    { label: "Oracle — Collections Trail", url: "https://docs.oracle.com/javase/tutorial/collections/" },
    { label: "W3Schools — Java ArrayList", url: "https://www.w3schools.com/java/java_arraylist.asp" },
    { label: "W3Schools — Java HashMap", url: "https://www.w3schools.com/java/java_hashmap.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "file-handling",
  num: 24,
  part: 13,
  partTitle: "Advanced Java",
  title: "File Handling",
  titleKh: "ការគ្រប់គ្រង File",
  time: "៨៥ នាទី",
  level: 4,
  intro: "File Handling អនុញ្ញាតឱ្យ Program អាន និងសរសេរទិន្នន័យទៅ File ដើម្បីរក្សាទុកយូរ។ អ្នកនឹងរៀន <code>File</code>, <code>Path</code>, <code>Files</code>, <code>FileWriter</code>, <code>BufferedReader</code>, try-with-resources និងការអាន CSV។",
  objectives: [
    "យល់ពី <code>java.io</code> និង <code>java.nio.file</code>។",
    "សរសេរទិន្នន័យទៅ File ដោយ <code>Files.writeString</code> និង <code>FileWriter</code>។",
    "អាន File ដោយ <code>Files.readAllLines</code> និង <code>BufferedReader</code>។",
    "ប្រើ try-with-resources ជាមួយ File។",
    "អាន និងវិភាគ File CSV សាមញ្ញ។",
    "គ្រប់គ្រង <code>IOException</code> បានត្រឹមត្រូវ។"
  ],
  sections: [
    {
      title: "File និង Path",
      html: `<p>Java ផ្តល់ API ពីរ សម្រាប់ File៖</p>
<ul>
<li><code>java.io.File</code> — API ចាស់ សម្រាប់ព័ត៌មាន File និង Folder។</li>
<li><code>java.nio.file.Path</code> និង <code>Files</code> — API ទំនើប ងាយស្រួល និងមាន Method ច្រើន។</li>
</ul>
<pre><code>import java.nio.file.Path;
import java.nio.file.Paths;

Path path = Paths.get("data", "students.txt");

System.out.println(path.toAbsolutePath());
System.out.println(Files.exists(path));</code></pre>
<div class="callout info"><div class="callout-title">Relative vs Absolute</div><p>Path សាមញ្ញដូចជា <code>data.txt</code> ជា Relative Path ធៀបនឹង Folder ដែល Program ដំណើរការ។</p></div>`
    },
    {
      title: "សរសេរ File",
      html: `<p>វិធីងាយបំផុតគឺ <code>Files.writeString</code>។ វានឹងបង្កើត File ប្រសិនបើមិនមាន។</p>
<pre><code>import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;

Path path = Path.of("hello.txt");
Files.writeString(path, "Hello Java");</code></pre>
<p>សម្រាប់ការសរសេរបន្ថែម (Append) ប្រើ <code>FileWriter</code> ជាមួយ flag <code>true</code>៖</p>
<pre><code>try (FileWriter writer = new FileWriter("log.txt", true)) {
    writer.write("New line\\n");
} catch (IOException e) {
    e.printStackTrace();
}</code></pre>`
    },
    {
      title: "អាន File",
      html: `<p><strong>Files.readAllLines</strong> អាន File ទាំងមូលទៅជា List។ សមស្របសម្រាប់ File តូច។</p>
<pre><code>List&lt;String&gt; lines = Files.readAllLines(Path.of("hello.txt"));
for (String line : lines) {
    System.out.println(line);
}</code></pre>
<p><strong>BufferedReader</strong> សមស្របសម្រាប់ File ធំ ព្រោះអានម្តងមួយបន្ទាត់៖</p>
<pre><code>try (BufferedReader reader = new BufferedReader(new FileReader("hello.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
}</code></pre>
<div class="callout warn"><div class="callout-title">IOException ជា Checked</div><p>ត្រូវ Catch <code>IOException</code> ឬប្រកាស <code>throws IOException</code>។</p></div>`
    },
    {
      title: "try-with-resources ជាមួយ File",
      html: `<p>File Stream ត្រូវបិទពេលប្រើរួច ដើម្បីបញ្ចេញ Resource។ try-with-resources ធ្វើការនេះដោយស្វ័យប្រវត្តិ។</p>
<pre><code>try (BufferedWriter writer = new BufferedWriter(new FileWriter("notes.txt"))) {
    writer.write("Line one");
    writer.newLine();
    writer.write("Line two");
} catch (IOException e) {
    System.out.println("Write failed: " + e.getMessage());
}</code></pre>
<p>លំដាប់ការបិទគឺបញ្ច្រាសពីការបើក។ ប្រសិនបើមាន Exception ក្នុង try ការបិទនៅតែកើតឡើង។</p>`
    },
    {
      title: "ឧទាហរណ៍ CSV",
      html: `<p>File CSV បំបែកទិន្នន័យដោយ Comma។ អាចអានដោយ <code>split(",")</code>។</p>
<pre><code>String line = "Dara,85";
String[] parts = line.split(",");

String name = parts[0];
int score = Integer.parseInt(parts[1]);</code></pre>
<p>ឧទាហរណ៍ File <code>students.csv</code>៖</p>
<pre><code>Dara,85
Sokha,92
Bopha,78</code></pre>
<div class="callout tip"><div class="callout-title">ពិនិត្យទិន្នន័យ</div><p>ពេលអាន CSV ត្រូវពិនិត្យចំនួន Column និង Catch <code>NumberFormatException</code> សម្រាប់ទិន្នន័យមិនត្រឹមត្រូវ។</p></div>`
    }
  ],
  terms: [
    { en: "File", kh: "ឯកសារ", text: "ធាតុក្នុង Disk សម្រាប់រក្សាទុកទិន្នន័យ។" },
    { en: "Path", kh: "ផ្លូវ", text: "ទីតាំងរបស់ File ឬ Folder។" },
    { en: "IOException", kh: "បញ្ហា I/O", text: "Checked Exception ពេលអាន ឬសរសេរ File បរាជ័យ។" },
    { en: "BufferedReader", kh: "អានមាន Buffer", text: "Class អាន File បន្ទាត់ម្តងមួយ ប្រកបដោយប្រសិទ្ធភាព។" },
    { en: "FileWriter", kh: "សរសេរ File", text: "Class សម្រាប់សរសេរ Character ទៅ File។" },
    { en: "try-with-resources", kh: "បិទស្វ័យប្រវត្តិ", text: "Syntax ដែលបិទ Resource ដោយស្វ័យប្រវត្តិ។" },
    { en: "CSV", kh: "តម្លៃបំបែកដោយក្បៀស", text: "ទម្រង់ File បំបែក Column ដោយ Comma។" }
  ],
  syntax: [
    { label: "សរសេរ File", code: `Files.writeString(Path.of("a.txt"), "Hello");`, note: "បង្កើត ឬសរសេរជំនួស File។" },
    { label: "អាន File", code: `List<String> lines = Files.readAllLines(Path.of("a.txt"));`, note: "អាន File ទាំងមូលទៅជា List។" },
    { label: "Append File", code: `FileWriter w = new FileWriter("a.txt", true);`, note: "flag true សម្រាប់សរសេរបន្ថែម។" },
    { label: "BufferedReader", code: `BufferedReader r = new BufferedReader(new FileReader("a.txt"));
String line = r.readLine();`, note: "អានបន្ទាត់ម្តងមួយ។" },
    { label: "try-with-resources", code: `try (FileWriter w = new FileWriter("a.txt")) {
    w.write("Hi");
}`, note: "Resource ត្រូវបិទស្វ័យប្រវត្តិ។" }
  ],
  examples: [
    {
      title: "សរសេរ File ដោយ Files",
      desc: "បង្កើត File និងសរសេរអត្ថបទមួយបន្ទាត់។",
      file: "WriteFileDemo.java",
      code: `import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;

public class WriteFileDemo {
    public static void main(String[] args) {
        Path path = Path.of("hello.txt");

        try {
            Files.writeString(path, "Hello Java");
            System.out.println("Saved to " + path.toAbsolutePath());
        } catch (IOException e) {
            System.out.println("Write failed");
        }
    }
}`,
      output: "Saved to ...\\hello.txt",
      lines: [
        "<code>Path.of</code> បង្កើត Path សម្រាប់ File។",
        "<code>Files.writeString</code> សរសេរអត្ថបទទៅ File។",
        "IOException ត្រូវ Catch ព្រោះជា Checked Exception។"
      ]
    },
    {
      title: "អាន File ទាំងមូល",
      desc: "អាន File ដោយ <code>Files.readAllLines</code> និងបង្ហាញបន្ទាត់មានលេខ។",
      file: "ReadFileDemo.java",
      code: `import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;
import java.util.List;

public class ReadFileDemo {
    public static void main(String[] args) {
        Path path = Path.of("hello.txt");

        try {
            List<String> lines = Files.readAllLines(path);
            int number = 1;
            for (String line : lines) {
                System.out.println(number + ": " + line);
                number++;
            }
        } catch (IOException e) {
            System.out.println("Cannot read file");
        }
    }
}`,
      output: "1: Hello Java",
      lines: [
        "readAllLines ត្រឡប់ List of String។",
        "អាច Loop ដោយ for-each ធម្មតា។",
        "ប្រសិនបើ File មិនមាន IOException នឹងកើតឡើង។"
      ]
    },
    {
      title: "Append ទៅ File",
      desc: "បន្ថែមបន្ទាត់ថ្មីទៅ File ដោយមិនលុបទិន្នន័យចាស់។",
      file: "AppendFileDemo.java",
      code: `import java.io.FileWriter;
import java.io.IOException;

public class AppendFileDemo {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("log.txt", true)) {
            writer.write("New log entry");
            writer.write(System.lineSeparator());
            System.out.println("Appended");
        } catch (IOException e) {
            System.out.println("Append failed");
        }
    }
}`,
      output: "Appended",
      lines: [
        "FileWriter ជាមួយ <code>true</code> បើក Append Mode។",
        "try-with-resources បិទ File ស្វ័យប្រវត្តិ។",
        "System.lineSeparator() ផ្តល់ New Line តាម OS។"
      ]
    },
    {
      title: "អាន CSV និងគណនា",
      desc: "អាន File CSV ដែលមានឈ្មោះ និងពិន្ទុ រួចគណនាមធ្យមភាគ។",
      file: "CsvAverageDemo.java",
      code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class CsvAverageDemo {
    public static void main(String[] args) {
        int total = 0;
        int count = 0;

        try (BufferedReader reader = new BufferedReader(new FileReader("students.csv"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                total += Integer.parseInt(parts[1]);
                count++;
            }
            System.out.println("Average: " + (total / count));
        } catch (IOException e) {
            System.out.println("Cannot read file");
        } catch (NumberFormatException e) {
            System.out.println("Invalid score in file");
        }
    }
}`,
      output: "Average: 85",
      lines: [
        "បន្ទាត់នីមួយៗបំបែកដោយ <code>split(\",\")</code>។",
        "Column ទីពីរជាពិន្ទុ ដូច្នេះ parseInt។",
        "Catch ទាំង IOException និង NumberFormatException។"
      ]
    }
  ],
  mistakes: [
    { text: "<span class=\"bad-code\">❌ មិនបិទ File</span><br>File Stream ដែលមិនបិទអាច Lock File និងបណ្តាលឱ្យបាត់ទិន្នន័យ។", fix: "ប្រើ try-with-resources ជានិច្ច។" },
    { text: "<span class=\"bad-code\">❌ សរសេរជំនួសដោយអចេតនា</span><br>FileWriter ដោយគ្មាន <code>true</code> នឹងលុបទិន្នន័យចាស់។", fix: "ប្រើ <code>new FileWriter(path, true)</code> សម្រាប់ Append។" },
    { text: "<span class=\"bad-code\">❌ មិនពិនិត្យ File មានឬអត់</span><br>ការអាន File ដែលមិនមាន បង្ក IOException។", fix: "ពិនិត្យ <code>Files.exists(path)</code> ឬ Catch IOException។" },
    { text: "<span class=\"bad-code\">❌ បំបែក CSV ដោយ split ដោយមិនពិនិត្យ</span><br>បន្ទាត់ខូចអាចបណ្តាលឱ្យ <code>ArrayIndexOutOfBoundsException</code>។", fix: "ពិនិត្យ <code>parts.length</code> មុនប្រើ Column។" }
  ],
  tips: [
    "ប្រើ <code>java.nio.file.Files</code> សម្រាប់ការងារសាមញ្ញ។",
    "ប្រើ try-with-resources សម្រាប់ File ទាំងអស់។",
    "ប្រើ Relative Path ដូចជា <code>data/students.txt</code> ដើម្បីចល័តបាន។",
    "ពិនិត្យទិន្នន័យ CSV មុន Parse។"
  ],
  exercises: [
    {
      level: 1,
      title: "បង្កើត File",
      desc: "សរសេរ <code>Hello Java</code> ទៅ File <code>hello.txt</code> ដោយ <code>Files.writeString</code>។",
      requirements: ["ប្រើ Files.writeString", "ប្រើ Path", "Catch IOException"],
      outputSample: "File written",
      hint: "Files.writeString(Path.of(\"hello.txt\"), \"Hello Java\");",
      solutionCode: `import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;

public class CreateFile {
    public static void main(String[] args) {
        try {
            Files.writeString(Path.of("hello.txt"), "Hello Java");
            System.out.println("File written");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`
    },
    {
      level: 1,
      title: "អាន File",
      desc: "អាន File <code>hello.txt</code> ហើយបង្ហាញគ្រប់បន្ទាត់។",
      requirements: ["ប្រើ Files.readAllLines", "Loop", "Catch IOException"],
      outputSample: "Hello Java",
      hint: "Files.readAllLines(Path.of(\"hello.txt\")) ត្រឡប់ List។",
      solutionCode: `import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;
import java.util.List;

public class ReadFile {
    public static void main(String[] args) {
        try {
            List<String> lines = Files.readAllLines(Path.of("hello.txt"));
            for (String line : lines) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Cannot read file");
        }
    }
}`
    },
    {
      level: 2,
      title: "រាប់បន្ទាត់",
      desc: "អាន File ហើយបង្ហាញចំនួនបន្ទាត់សរុបជា <code>Lines: 3</code>។",
      requirements: ["អាន File", "រាប់បន្ទាត់", "បង្ហាញចំនួន"],
      outputSample: "Lines: 3",
      hint: "ប្រើ List size() ឬបង្កើត counter ពេល Loop។",
      solutionCode: `import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;
import java.util.List;

public class CountLines {
    public static void main(String[] args) {
        try {
            List<String> lines = Files.readAllLines(Path.of("hello.txt"));
            System.out.println("Lines: " + lines.size());
        } catch (IOException e) {
            System.out.println("Cannot read file");
        }
    }
}`
    },
    {
      level: 2,
      title: "Append បន្ទាត់ថ្មី",
      desc: "បន្ថែមបន្ទាត់ <code>Second line</code> ទៅ File <code>hello.txt</code> ដោយមិនលុបចាស់។",
      requirements: ["ប្រើ FileWriter", "Append mode", "try-with-resources"],
      outputSample: "Appended",
      hint: "new FileWriter(\"hello.txt\", true) បើក Append Mode។",
      solutionCode: `import java.io.FileWriter;
import java.io.IOException;

public class AppendLine {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("hello.txt", true)) {
            writer.write(System.lineSeparator());
            writer.write("Second line");
            System.out.println("Appended");
        } catch (IOException e) {
            System.out.println("Append failed");
        }
    }
}`
    },
    {
      level: 3,
      title: "គណនាពិន្ទុពី CSV",
      desc: "អាន File <code>students.csv</code> ដែលមានទម្រង់ <code>name,score</code> ហើយបង្ហាញផលបូកពិន្ទុ។",
      requirements: ["ប្រើ BufferedReader", "split(\",\")", "parseInt", "Catch IOException"],
      outputSample: "Total: 255",
      hint: "អានបន្ទាត់ម្តងមួយ បំបែកដោយក្បៀស ហើយបូក parts[1]។",
      solutionCode: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class CsvTotal {
    public static void main(String[] args) {
        int total = 0;

        try (BufferedReader reader = new BufferedReader(new FileReader("students.csv"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                total += Integer.parseInt(parts[1]);
            }
            System.out.println("Total: " + total);
        } catch (IOException e) {
            System.out.println("Cannot read file");
        } catch (NumberFormatException e) {
            System.out.println("Invalid score");
        }
    }
}`
    },
    {
      level: 3,
      title: "រាប់ពាក្យក្នុង File",
      desc: "អាន File <code>story.txt</code> ហើយបង្ហាញចំនួនពាក្យសរុប។ ប្រើ <code>split(\"\\\\s+\")</code>។",
      requirements: ["អាន File", "split", "រាប់ពាក្យ"],
      outputSample: "Words: 6",
      hint: "បង្កើត counter ហើយបូកចំនួន words.length សម្រាប់បន្ទាត់នីមួយៗ។",
      solutionCode: `import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;
import java.util.List;

public class WordCountFile {
    public static void main(String[] args) {
        int count = 0;

        try {
            List<String> lines = Files.readAllLines(Path.of("story.txt"));
            for (String line : lines) {
                if (!line.trim().isEmpty()) {
                    count += line.trim().split("\\\\s+").length;
                }
            }
            System.out.println("Words: " + count);
        } catch (IOException e) {
            System.out.println("Cannot read file");
        }
    }
}`
    },
    {
      level: 1,
      title: "សរសេរឯកសារ",
      desc: "ប្រើ <code>FileWriter</code> សរសេរអត្ថបទទៅឯកសារ output.txt។",
      requirements: ["import java.io.FileWriter", "ប្រើ try-with-resources", "ចាប់ IOException"],
      outputSample: "File written",
      hint: "ប្រើ <code>try (FileWriter writer = new FileWriter(\"output.txt\"))</code>។",
      solutionCode: `import java.io.FileWriter;
import java.io.IOException;

public class WriteDemo {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("output.txt")) {
            writer.write("Hello File");
            System.out.println("File written");
        } catch (IOException e) {
            System.out.println("Cannot write file");
        }
    }
}`
    },
    {
      level: 2,
      title: "អានឯកសារ",
      desc: "ប្រើ <code>BufferedReader</code> អានឯកសារ output.txt បន្ទាត់ម្តងមួយ។",
      requirements: ["import java.io.BufferedReader", "ប្រើ readLine", "ចាប់ IOException"],
      outputSample: "Hello File",
      hint: "Loop រហូត <code>readLine()</code> ត្រឡប់ <code>null</code>។",
      solutionCode: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadDemo {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("output.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Cannot read file");
        }
    }
}`
    }
  ],
  quiz: [
    { q: "តើ Package ណាផ្តល់ Class Files និង Path?", options: ["java.io", "java.nio.file", "java.util", "java.lang"], answer: 1, explain: "java.nio.file មាន Files និង Path។" },
    { q: "តើ Method ណាសរសេរ String ទៅ File?", options: ["Files.readString", "Files.writeString", "Files.copy", "Files.delete"], answer: 1, explain: "Files.writeString សរសេរអត្ថបទទៅ File។" },
    { q: "FileWriter(\"log.txt\", true) មានន័យដូចម្តេច?", options: ["លុប File", "Append", "អាន File", "បង្កើត Folder"], answer: 1, explain: "flag true បើក Append Mode។" },
    { q: "តើ Exception ណាត្រូវ Catch ពេលអាន File?", options: ["NumberFormatException", "IOException", "ArithmeticException", "NullPointerException"], answer: 1, explain: "IOException ជា Checked Exception សម្រាប់ I/O។" },
    { q: "try-with-resources ត្រូវការ Resource អនុវត្ត Interface ណា?", options: ["Serializable", "AutoCloseable", "Runnable", "Comparable"], answer: 1, explain: "AutoCloseable អនុញ្ញាតឱ្យបិទស្វ័យប្រវត្តិ។" },
    { q: "Files.readAllLines(path) ត្រឡប់អ្វី?", options: ["String", "List of String", "String array", "int"], answer: 1, explain: "វាត្រឡប់ List of String។" }
  ],
  summary: [
    "File Handling រក្សាទិន្នន័យឱ្យនៅយូរ បន្ទាប់ពី Program បញ្ចប់។",
    "java.nio.file.Files និង Path ជា API ទំនើប និងងាយស្រួល។",
    "Files.writeString សរសេរ ហើយ Files.readAllLines អាន File។",
    "FileWriter ជាមួយ true ប្រើសម្រាប់ Append។",
    "try-with-resources បិទ File ស្វ័យប្រវត្តិ។",
    "IOException ជា Checked Exception ត្រូវគ្រប់គ្រង។"
  ],
  takeaways: [
    "ប្រើ try-with-resources ជានិច្ចពេលប្រើ File។",
    "ពិនិត្យ File មានឬអត់ មុនអាន។",
    "ប្រើ Append Mode ដើម្បីកុំលុបទិន្នន័យចាស់។",
    "ពិនិត្យទិន្នន័យ CSV មុន Parse។"
  ],
  sources: [
    { label: "Oracle — File I/O", url: "https://docs.oracle.com/javase/tutorial/essential/io/" },
    { label: "W3Schools — Java Files", url: "https://www.w3schools.com/java/java_files.asp" },
    { label: "Oracle — java.nio.file.Files", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html" }
  ]
});

window.JAVA_LESSONS.push({
  id: "final-projects",
  num: 25,
  part: 13,
  partTitle: "Advanced Java",
  title: "Final Projects",
  titleKh: "Project បញ្ចប់វគ្គ",
  time: "៦០ នាទី",
  level: 4,
  intro: "ឥឡូវអ្នកបានរៀនមូលដ្ឋាន Java គ្រប់គ្រាន់ហើយ។ មេរៀននេះណែនាំរបៀបរៀបចំ Project ពិតប្រាកដ៖ ការវិភាគតម្រូវការ រចនាសម្ព័ន្ធ Class ការ Testing ការ Debugging និងការបង្ហាញលទ្ធផល។ អ្នកនឹងអនុវត្តដោយបង្កើត Console App តូចមួយដែលមាន Menu និងរក្សាទុកទិន្នន័យក្នុង File។",
  objectives: [
    "វិភាគ Requirements និងបំបែកជា Function តូចៗ។",
    "រៀបចំ Folder និង Class ឱ្យមានរចនាសម្ព័ន្ធ។",
    "បង្កើត Menu-driven Console Application។",
    "រក្សាទុក និងអានទិន្នន័យពី File។",
    "សរសេរ Test Case ងាយៗ និង Debug។",
    "សរសេរ README និងបង្ហាញ Project។"
  ],
  sections: [
    {
      title: "ចាប់ផ្តើម Project",
      html: `<p>Project ល្អចាប់ផ្តើមពី <strong>តម្រូវការច្បាស់លាស់</strong> មិនមែនពីកូដ។ សួរខ្លួនឯង៖</p>
<ul>
<li>Program ត្រូវធ្វើអ្វី? (Input → Process → Output)</li>
<li>អ្នកប្រើជានរណា និងប្រើយ៉ាងដូចម្តេច?</li>
<li>ទិន្នន័យរក្សាទុកនៅឯណា? (Memory, File, Database)</li>
<li>មុខងារណាខ្លះជា Must-have និងណាជា Nice-to-have?</li>
</ul>
<div class="callout info"><div class="callout-title">ចាប់ផ្តើមតូច</div><p>ធ្វើ Version តូចដែលដំណើរការបានមុន រួចបន្ថែមមុខងារម្តងមួយជំហាន។ នេះហៅថា Incremental Development។</p></div>
<p>ឧទាហរណ៍ តម្រូវការ Student Manager៖</p>
<pre><code>1. បន្ថែមសិស្ស (ឈ្មោះ, ពិន្ទុ)
2. បង្ហាញសិស្សទាំងអស់
3. ស្វែងរកសិស្សតាមឈ្មោះ
4. រក្សាទុកទៅ File
5. អានត្រឡប់ពី File</code></pre>`
    },
    {
      title: "រចនាសម្ព័ន្ធ Folder និង Class",
      html: `<p>បំបែកកូដជា Class តាមទំនួលខុសត្រូវ (Single Responsibility)។</p>
<pre><code>student-manager/
├── src/
│   ├── Main.java          (Menu និង UI)
│   ├── Student.java       (Model)
│   ├── StudentService.java (Logic)
│   └── FileStorage.java    (អាន/សរសេរ File)
├── data/
│   └── students.csv
└── README.md</code></pre>
<table>
<thead><tr><th>Class</th><th>ទំនួលខុសត្រូវ</th></tr></thead>
<tbody>
<tr><td>Student</td><td>ផ្ទុក name និង score</td></tr>
<tr><td>StudentService</td><td>បន្ថែម, ស្វែងរក, គណនា</td></tr>
<tr><td>FileStorage</td><td>អាន/សរសេរ CSV</td></tr>
<tr><td>Main</td><td>Menu និងភ្ជាប់ផ្នែកទាំងអស់</td></tr>
</tbody>
</table>
<div class="callout tip"><div class="callout-title">កុំដាក់អ្វីគ្រប់យ៉ាងក្នុង main</div><p>main គួរតែខ្លី — គ្រាន់តែហៅ Method និងបង្ហាញ Menu។ Logic ត្រូវនៅក្នុង Class ដែលពាក់ព័ន្ធ។</p></div>`
    },
    {
      title: "Menu-driven Console App",
      html: `<p>ប្រើ Loop និង <code>switch</code> ដើម្បីបង្កើត Menu ដែលដំណើរការរហូតអ្នកប្រើជ្រើសចាកចេញ។</p>
<pre><code>Scanner scanner = new Scanner(System.in);
boolean running = true;

while (running) {
    System.out.println("1. Add student");
    System.out.println("2. Show all");
    System.out.println("0. Exit");
    int choice = scanner.nextInt();
    scanner.nextLine();

    switch (choice) {
        case 1:
            // add
            break;
        case 2:
            // show
            break;
        case 0:
            running = false;
            break;
        default:
            System.out.println("Invalid choice");
    }
}</code></pre>
<p>ការប្រើ Method ដាច់ដោយឡែក ធ្វើឱ្យ main អានងាយ និងសាកល្បងបាន។</p>`
    },
    {
      title: "Testing និង Debugging",
      html: `<p><strong>Testing</strong> គឺការពិនិត្យថា Program ធ្វើតាមតម្រូវការ។ ចាប់ផ្តើមពី Manual Test Case ងាយៗ៖</p>
<table>
<thead><tr><th>Test</th><th>Input</th><th>Expected</th></tr></thead>
<tbody>
<tr><td>បន្ថែមសិស្ស</td><td>Dara, 85</td><td>បង្ហាញ Dara: 85</td></tr>
<tr><td>ពិន្ទុមិនត្រឹមត្រូវ</td><td>Dara, 150</td><td>សារបដិសេធ</td></tr>
<tr><td>ស្វែងរកមិនមាន</td><td>Vichea</td><td>Not found</td></tr>
</tbody>
</table>
<p><strong>Debugging</strong> ជាការស្វែងរកមូលហេតុបញ្ហា៖</p>
<ul>
<li>អាន Error Message និង Stack Trace ពីលើចុះក្រោម។</li>
<li>ប្រើ <code>System.out.println()</code> ដើម្បីពិនិត្យតម្លៃ។</li>
<li>ប្រើ Debugger ក្នុង IDE ដើម្បីដើរកូដបន្ទាត់ម្តងមួយ។</li>
<li>ពិនិត្យករណីព្រំដែន៖ ទទេ, 0, លេខអវិជ្ជមាន, អក្សរជំនួសលេខ។</li>
</ul>`
    },
    {
      title: "បញ្ចប់ និងបង្ហាញ Project",
      html: `<p>Project ល្អត្រូវមាន README ដែលពន្យល់៖</p>
<ol>
<li>ឈ្មោះ និងគោលបំណង Project។</li>
<li>របៀប Compile និង Run។</li>
<li>មុខងារសំខាន់ៗ និងរូបភាព Output។</li>
<li>រចនាសម្ព័ន្ធ File និង Class។</li>
<li>បញ្ហាដែលបានជួប និងរបៀបដោះស្រាយ។</li>
</ol>
<p>ពេលបង្ហាញ សូមបង្ហាញ Flow ពី Input ដល់ Output ឱ្យខ្លី និងច្បាស់។ ការពន្យល់កូដដោយខ្លួនឯង ជួយបញ្ជាក់ថាអ្នកយល់ពិតប្រាកដ។</p>
<div class="callout tip"><div class="callout-title">ជំហានបន្ទាប់</div><p>បន្ទាប់ពី Project ទី ១ សូមសាកល្បងបន្ថែម Validation, Save/Load File, ឬ Interface ងាយៗ។ ការអនុវត្តម្តងហើយម្តងទៀត ជាផ្លូវល្អបំផុតដើម្បីពូកែ Java។</p></div>`
    }
  ],
  terms: [
    { en: "Project", kh: "គម្រោង", text: "ការងារដែលបង្កើត Program ដើម្បីដោះស្រាយបញ្ហាជាក់លាក់។" },
    { en: "Requirement", kh: "តម្រូវការ", text: "អ្វីដែល Program ត្រូវធ្វើ តាមការរំពឹងរបស់អ្នកប្រើ។" },
    { en: "Class Diagram", kh: "ដ្យាក្រាម Class", text: "គំនូរបង្ហាញ Class និងទំនាក់ទំនងរវាងពួកវា។" },
    { en: "Testing", kh: "ការសាកល្បង", text: "ការពិនិត្យថា Program ដំណើរការត្រឹមត្រូវ។" },
    { en: "Refactoring", kh: "ការកែរចនាសម្ព័ន្ធ", text: "ការកែកូដឱ្យអានងាយ ដោយមិនប្តូរ Behavior។" }
  ],
  syntax: [
    { label: "រចនាសម្ព័ន្ធ Project", code: `src/
  Main.java
  Student.java
  StudentService.java
data/
  students.csv
README.md`, note: "បំបែក Model, Logic, Storage និង UI។" },
    { label: "Main Skeleton", code: `public class Main {
    public static void main(String[] args) {
        // start app
    }
}`, note: "main គួរខ្លី និងហៅ Method ផ្សេងៗ។" },
    { label: "Compile & Run", code: `javac Main.java
java Main`, note: "Compile ជា .class មុនពេល Run។" },
    { label: "Menu Loop", code: `while (running) {
    // show menu
    // read choice
    // switch
}`, note: "Loop រហូតអ្នកប្រើជ្រើសចាកចេញ។" }
  ],
  examples: [
    {
      title: "Student Model",
      desc: "Class តូចដែលផ្ទុកឈ្មោះ និងពិន្ទុ។",
      file: "Student.java",
      code: `public class Student {
    private String name;
    private int score;

    public Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String getName() {
        return name;
    }

    public int getScore() {
        return score;
    }

    @Override
    public String toString() {
        return name + ": " + score;
    }
}`,
      output: "Dara: 85",
      lines: [
        "Field ជា private ដើម្បី Encapsulation។",
        "Constructor កំណត់តម្លៃដំបូង។",
        "toString ជួយបង្ហាញ Object ងាយស្រួល។"
      ]
    },
    {
      title: "Menu សាមញ្ញ",
      desc: "Menu Loop ដែលអានជម្រើសពី Console។",
      file: "Main.java",
      code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            System.out.println("1. Add student");
            System.out.println("2. Show students");
            System.out.println("0. Exit");
            System.out.print("Choose: ");

            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    System.out.println("Add selected");
                    break;
                case 2:
                    System.out.println("Show selected");
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
}`,
      output: "1. Add student\n2. Show students\n0. Exit\nChoose: ",
      lines: [
        "Scanner អានជម្រើសពីអ្នកប្រើ។",
        "switch បំបែកសកម្មភាពតាមជម្រើស។",
        "case 0 បញ្ចប់ Loop។",
        "scanner.nextLine() សម្អាត New Line បន្ទាប់ពី nextInt។"
      ]
    },
    {
      title: "Save ទៅ CSV",
      desc: "រក្សាទុក List នៃ Student ទៅ File CSV។",
      file: "FileStorage.java",
      code: `import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class FileStorage {
    public void save(List<Student> students, String path) {
        try (FileWriter writer = new FileWriter(path)) {
            for (Student student : students) {
                writer.write(student.getName() + "," + student.getScore());
                writer.write(System.lineSeparator());
            }
            System.out.println("Saved " + students.size() + " students");
        } catch (IOException e) {
            System.out.println("Save failed: " + e.getMessage());
        }
    }
}`,
      output: "Saved 3 students",
      lines: [
        "FileWriter បង្កើត File ថ្មី ឬសរសេរជំនួស។",
        "ទម្រង់ name,score ត្រូវនឹង CSV។",
        "try-with-resources បិទ File ស្វ័យប្រវត្តិ។"
      ]
    }
  ],
  mistakes: [
    { text: "<span class=\"bad-code\">❌ ដាក់កូដទាំងអស់ក្នុង main</span><br>main វែងពេក ពិបាកអាន និងសាកល្បង។", fix: "បំបែកជា Class និង Method តាមទំនួលខុសត្រូវ។" },
    { text: "<span class=\"bad-code\">❌ មិនពិនិត្យ Input</span><br>អ្នកប្រើអាចបញ្ចូលអក្សរ ឬលេខខុស បណ្តាលឱ្យ Program គាំង។", fix: "ពិនិត្យជួរតម្លៃ និង Catch Exception។" },
    { text: "<span class=\"bad-code\">❌ មិនសរសេរ README</span><br>អ្នកផ្សេងមិនដឹងរបៀប Run Project។", fix: "សរសេរជំហាន Run, មុខងារ និងរចនាសម្ព័ន្ធ។" },
    { text: "<span class=\"bad-code\">❌ បន្ថែមមុខងារច្រើនក្នុងពេលតែមួយ</span><br>ពិបាករកមូលហេតុបញ្ហា។", fix: "ធ្វើមុខងារមួយ សាកល្បងមួយ រួចបន្ត។" }
  ],
  tips: [
    "ចាប់ផ្តើមពី Version តូចដែលដំណើរការ។",
    "សរសេរ Method ខ្លីៗ ដែលធ្វើការតែមួយ។",
    "សាកល្បងករណីព្រំដែន៖ ទទេ, 0, លេខអវិជ្ជមាន។",
    "រក្សា Commit ញឹកញាប់ ប្រសិនបើប្រើ Git។"
  ],
  exercises: [
    {
      level: 1,
      title: "Menu Skeleton",
      desc: "សរសេរ Menu Loop ដែលបង្ហាញ 1. Add, 2. Show, 0. Exit ហើយបញ្ចប់ពេលអ្នកប្រើជ្រើស 0។",
      requirements: ["ប្រើ while", "ប្រើ switch", "បញ្ចប់ពេល 0"],
      outputSample: "1. Add\n2. Show\n0. Exit",
      hint: "ប្រើ boolean running និង switch ក្នុង while។",
      solutionCode: `import java.util.Scanner;

public class MenuSkeleton {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            System.out.println("1. Add");
            System.out.println("2. Show");
            System.out.println("0. Exit");
            System.out.print("Choose: ");

            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    System.out.println("Add selected");
                    break;
                case 2:
                    System.out.println("Show selected");
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
}`
    },
    {
      level: 2,
      title: "Student Manager មូលដ្ឋាន",
      desc: "បង្កើត Class <code>Student</code> និង <code>StudentService</code> ដែលអាចបន្ថែម និងបង្ហាញសិស្សដោយ ArrayList។",
      requirements: ["Class Student", "Class StudentService", "ប្រើ ArrayList", "បង្ហាញសិស្ស"],
      outputSample: "Dara: 85\nSokha: 92",
      hint: "StudentService មាន ArrayList&lt;Student&gt; និង Method add, showAll។",
      solutionCode: `import java.util.ArrayList;

class Student {
    private String name;
    private int score;

    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String toString() {
        return name + ": " + score;
    }
}

class StudentService {
    private ArrayList<Student> students = new ArrayList<>();

    void add(String name, int score) {
        students.add(new Student(name, score));
    }

    void showAll() {
        for (Student student : students) {
            System.out.println(student);
        }
    }
}

public class StudentManager {
    public static void main(String[] args) {
        StudentService service = new StudentService();
        service.add("Dara", 85);
        service.add("Sokha", 92);
        service.showAll();
    }
}`
    },
    {
      level: 3,
      title: "Save/Load Students",
      desc: "បន្ថែម Method រក្សាទុកសិស្សទៅ File CSV និងអានត្រឡប់មកវិញ។ បង្ហាញ <code>Saved: 2</code> និង <code>Loaded: 2</code>។",
      requirements: ["FileWriter", "BufferedReader", "CSV format", "try-with-resources"],
      outputSample: "Saved: 2\nLoaded: 2",
      hint: "Save សរសេរ name,score ហើយ Load split(\",\") ដើម្បីបង្កើត Student វិញ។",
      solutionCode: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

class Student {
    String name;
    int score;

    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }
}

public class SaveLoadStudents {
    static void save(ArrayList<Student> students, String path) throws IOException {
        try (FileWriter writer = new FileWriter(path)) {
            for (Student s : students) {
                writer.write(s.name + "," + s.score);
                writer.write(System.lineSeparator());
            }
        }
        System.out.println("Saved: " + students.size());
    }

    static ArrayList<Student> load(String path) throws IOException {
        ArrayList<Student> students = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                students.add(new Student(parts[0], Integer.parseInt(parts[1])));
            }
        }
        System.out.println("Loaded: " + students.size());
        return students;
    }

    public static void main(String[] args) throws IOException {
        ArrayList<Student> students = new ArrayList<>();
        students.add(new Student("Dara", 85));
        students.add(new Student("Sokha", 92));

        save(students, "students.csv");
        load("students.csv");
    }
}`
    },
    {
      level: 3,
      title: "Capstone Checklist",
      desc: "សរសេរ Console App បញ្ចប់ដែលមាន Menu, បន្ថែមសិស្ស, បង្ហាញ, ស្វែងរក និង Save/Load File។ ធានាថា Input មិនត្រឹមត្រូវមិនធ្វើឱ្យ Program គាំង។",
      requirements: ["Menu ដំណើរការ", "Validation", "ArrayList", "File persistence", "Catch Exception"],
      outputSample: "Student added\nDara: 85\nNot found\nSaved",
      hint: "ប្រើ Method ដាច់ដោយឡែក និង Catch Exception ពេល Parse ពិន្ទុ។",
      solutionCode: `import java.util.ArrayList;
import java.util.Scanner;

class Student {
    String name;
    int score;

    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String toString() {
        return name + ": " + score;
    }
}

public class CapstoneApp {
    static ArrayList<Student> students = new ArrayList<>();
    static Scanner scanner = new Scanner(System.in);

    static void addStudent() {
        System.out.print("Name: ");
        String name = scanner.nextLine();

        System.out.print("Score: ");
        String text = scanner.nextLine();

        try {
            int score = Integer.parseInt(text);
            if (score < 0 || score > 100) {
                System.out.println("Score must be 0-100");
                return;
            }
            students.add(new Student(name, score));
            System.out.println("Student added");
        } catch (NumberFormatException e) {
            System.out.println("Invalid score");
        }
    }

    static void showAll() {
        for (Student student : students) {
            System.out.println(student);
        }
    }

    static void findStudent() {
        System.out.print("Search name: ");
        String name = scanner.nextLine();

        for (Student student : students) {
            if (student.name.equalsIgnoreCase(name)) {
                System.out.println(student);
                return;
            }
        }
        System.out.println("Not found");
    }

    public static void main(String[] args) {
        students.add(new Student("Dara", 85));

        boolean running = true;
        while (running) {
            System.out.println("1. Add  2. Show  3. Find  0. Exit");
            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    addStudent();
                    break;
                case 2:
                    showAll();
                    break;
                case 3:
                    findStudent();
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
}`
    },
    {
      level: 1,
      title: "Number Checker",
      desc: "បង្កើតកម្មវិធីអានចំនួនមួយ រួចប្រាប់ថាវាជាបូក/ដក និងគូ/សេស។",
      requirements: ["ប្រើ Scanner", "ប្រើ if-else", "គ្របដណ្តប់សូន្យ"],
      inputSample: "-4",
      outputSample: "Negative Even",
      hint: "ប្រើ <code>n % 2 == 0</code> ដើម្បីពិនិត្យគូ។",
      solutionCode: `import java.util.Scanner;

public class NumberChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        if (n == 0) {
            System.out.println("Zero");
        } else if (n > 0) {
            System.out.println(n % 2 == 0 ? "Positive Even" : "Positive Odd");
        } else {
            System.out.println(n % 2 == 0 ? "Negative Even" : "Negative Odd");
        }

        sc.close();
    }
}`
    },
    {
      level: 2,
      title: "Multiplication Table",
      desc: "បង្កើតកម្មវិធីបង្ហាញមេគុណ 1 ដល់ 10 នៃចំនួនដែលអ្នកប្រើបញ្ចូល។",
      requirements: ["ប្រើ Scanner", "ប្រើ for loop", "បង្ហាញ 10 បន្ទាត់"],
      inputSample: "3",
      outputSample: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9",
      hint: "Loop <code>i</code> ពី 1 ដល់ 10 រួចបង្ហាញ <code>n * i</code>។",
      solutionCode: `import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + (n * i));
        }

        sc.close();
    }
}`
    },
    {
      level: 3,
      title: "Vowel Counter",
      desc: "បង្កើតកម្មវិធីអានអត្ថបទ រួចរាប់ចំនួនស្រៈអង់គ្លេស (a, e, i, o, u)។",
      requirements: ["ប្រើ nextLine", "ប្រើ charAt និង loop", "រាប់មិនប្រកាន់អក្សរធំ-តូច"],
      inputSample: "Hello Java",
      outputSample: "Vowels: 4",
      hint: "បំប្លែងជា lowercase មុនរាប់។",
      solutionCode: `import java.util.Scanner;

public class VowelCounter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String text = sc.nextLine().toLowerCase();
        int count = 0;

        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                count++;
            }
        }

        System.out.println("Vowels: " + count);
        sc.close();
    }
}`
    },
    {
      level: 3,
      title: "Simple ATM",
      desc: "បង្កើត ATM Console តូចមួយដែលមាន Class Account, Menu, Deposit, Withdraw និង Balance។",
      requirements: ["Class Account ជាមួយ private balance", "Menu Loop", "ពិនិត្យទឹកប្រាក់មិនគ្រប់"],
      inputSample: "1 50\n3\n0",
      outputSample: "Balance: 150.0",
      hint: "ប្រើ do-while និង switch; withdraw ត្រឡប់ boolean។",
      solutionCode: `import java.util.Scanner;

class Account {
    private double balance;

    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }

    double getBalance() {
        return balance;
    }
}

public class AtmApp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Account acc = new Account();
        acc.deposit(100);
        int choice;

        do {
            System.out.println("1) Deposit 2) Withdraw 3) Balance 0) Exit");
            choice = sc.nextInt();
            switch (choice) {
                case 1:
                    acc.deposit(sc.nextDouble());
                    break;
                case 2:
                    if (!acc.withdraw(sc.nextDouble())) {
                        System.out.println("Insufficient funds");
                    }
                    break;
                case 3:
                    System.out.println("Balance: " + acc.getBalance());
                    break;
                case 0:
                    break;
                default:
                    System.out.println("Invalid choice");
            }
        } while (choice != 0);

        sc.close();
    }
}`
    }
  ],
  quiz: [
    { q: "តើជំហានដំបូងនៃ Project គួរជាអ្វី?", options: ["សរសេរកូដភ្លាម", "វិភាគតម្រូវការ", "រចនា UI", "ដំឡើង JDK"], answer: 1, explain: "ត្រូវយល់តម្រូវការមុន ទើបរចនា និងសរសេរកូដ។" },
    { q: "តើ Class ណាគួរទទួលខុសត្រូវលើការអាន/សរសេរ File?", options: ["Main", "Student", "FileStorage", "Scanner"], answer: 2, explain: "បំបែក File Storage ជា Class ដាច់ដោយឡែក។" },
    { q: "តើ Switch ក្នុង Menu Loop មានមុខងារអ្វី?", options: ["បញ្ចប់ Program", "ជ្រើសសកម្មភាពតាមជម្រើស", "បង្កើត File", "Sort ទិន្នន័យ"], answer: 1, explain: "switch បំបែកសកម្មភាពតាមជម្រើសរបស់អ្នកប្រើ។" },
    { q: "តើការធ្វើ Test Case គួររួមបញ្ចូលអ្វី?", options: ["តែករណីធម្មតា", "ករណីព្រំដែន និង Input ខុស", "តែ Output", "តែ UI"], answer: 1, explain: "ត្រូវសាកល្បងទាំងករណីធម្មតា និងករណីព្រំដែន/ខុស។" },
    { q: "តើ README គួរមានអ្វី?", options: ["តែឈ្មោះ", "គោលបំណង របៀប Run និងរចនាសម្ព័ន្ធ", "តែកូដ", "តែ Screenshot"], answer: 1, explain: "README ជួយអ្នកផ្សេងយល់ និង Run Project។" }
  ],
  summary: [
    "Project ល្អចាប់ផ្តើមពីតម្រូវការច្បាស់លាស់ និងជំហានតូចៗ។",
    "បំបែកកូដជា Model, Service, Storage និង UI។",
    "Menu-driven App ប្រើ Loop និង switch។",
    "Testing រួមមានករណីធម្មតា និងករណីព្រំដែន។",
    "File persistence ជួយរក្សាទិន្នន័យយូរ។",
    "README និងការបង្ហាញច្បាស់ ជួយបញ្ចប់ Project ប្រកបដោយជោគជ័យ។"
  ],
  takeaways: [
    "ចាប់ផ្តើមតូច ហើយបន្ថែមមុខងារបន្តិចម្តងៗ។",
    "សរសេរ Method ខ្លី និងមានទំនួលខុសត្រូវតែមួយ។",
    "សាកល្បង Input ខុស និងករណីព្រំដែន។",
    "បញ្ចប់ដោយ README និងការពន្យល់កូដដោយខ្លួនឯង។"
  ],
  sources: [
    { label: "Oracle — Java Tutorials", url: "https://docs.oracle.com/javase/tutorial/" },
    { label: "W3Schools — Java Examples", url: "https://www.w3schools.com/java/java_examples.asp" },
    { label: "Oracle — Java SE 21 API", url: "https://docs.oracle.com/en/java/javase/21/docs/api/" }
  ]
});

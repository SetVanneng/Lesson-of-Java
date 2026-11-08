/* Lessons 11–13: Methods, Method Overloading, Recursion */
window.JAVA_LESSONS = window.JAVA_LESSONS || [];

window.JAVA_LESSONS.push({
  id: "methods",
  num: 11,
  part: 11,
  partTitle: "Methods",
  title: "Methods",
  titleKh: "Method (អនុគមន៍)",
  time: "៨៥ នាទី",
  level: 3,
  intro: "Method គឺជាប្លុកកូដដែលមានឈ្មោះ អាចហៅប្រើឡើងវិញបាន។ វាជួយបំបែកបញ្ហាធំជាផ្នែកតូចៗ កាត់បន្ថយការចម្លងកូដ និងធ្វើឱ្យកម្មវិធីអានងាយ។ អ្នកនឹងរៀនបង្កើត Method, Parameter, Return Value, <code>void</code>, Scope, Pass-by-Value, <code>static</code> និង Varargs។",
  objectives: [
    "ប្រកាស និងហៅ Method បានត្រឹមត្រូវ។",
    "ប្រើ Parameter និង Return Value បាន។",
    "យល់ពីភាពខុសគ្នារវាង void និង Method ដែលផ្តល់តម្លៃ។",
    "យល់ពី Scope នៃ Variable។",
    "យល់ពី Pass-by-Value ក្នុង Java។",
    "ប្រើ <code>static</code> និង Varargs បាន។"
  ],
  sections: [
    {
      title: "Method គឺជាអ្វី?",
      html: `<p><strong>Method</strong> គឺជាក្រុម Statement ដែលមានឈ្មោះ និងអាចហៅប្រើបានពីកន្លែងផ្សេងៗ។ ឧទាហរណ៍ <code>System.out.println()</code> គឺជា Method ដែល Java ផ្តល់ឱ្យ។ យើងក៏អាចបង្កើត Method ផ្ទាល់ខ្លួនបានដែរ។</p>
<p>ហេតុអ្វីត្រូវប្រើ Method?</p>
<ul>
<li><strong>Reusability</strong>៖ សរសេរម្តង ហៅប្រើបានច្រើនដង។</li>
<li><strong>Readability</strong>៖ កូដខ្លី និងអានងាយ។</li>
<li><strong>Maintainability</strong>៖ កែត្រឹមកន្លែងតែមួយ។</li>
<li><strong>Testability</strong>៖ អាចសាកល្បងដាច់ដោយឡែក។</li>
</ul>
<pre><code>public static void sayHello() {
    System.out.println("Hello!");
}

public static void main(String[] args) {
    sayHello();
    sayHello();
}</code></pre>
<p>Method <code>sayHello</code> ត្រូវបានហៅពីរ ដង ដោយមិនចាំបាច់ចម្លងកូដ។</p>`
    },
    {
      title: "ប្រកាស Method (Method Signature)",
      html: `<p>ទម្រង់ទូទៅនៃ Method៖</p>
<pre><code>accessModifier static returnType methodName(parameterList) {
    // method body
    return value;   // if returnType is not void
}</code></pre>
<p>ឧទាហរណ៍៖</p>
<pre><code>public static int add(int a, int b) {
    int sum = a + b;
    return sum;
}</code></pre>
<ul>
<li><code>public</code> — Access Modifier (អាចហៅពីកន្លែងផ្សេង)។</li>
<li><code>static</code> — ហៅបានដោយមិនចាំបាច់បង្កើត Object។</li>
<li><code>int</code> — Return Type។</li>
<li><code>add</code> — ឈ្មោះ Method។</li>
<li><code>(int a, int b)</code> — Parameter List។</li>
<li><code>return sum;</code> — ផ្តល់តម្លៃត្រឡប់។</li>
</ul>
<div class="callout info"><div class="callout-title">Method Signature</div><p>Method Signature គឺឈ្មោះ Method រួមនឹង Type និងចំនួន Parameter។ Java ប្រើវាដើម្បីបែងចែក Method ដែលមានឈ្មោះដូចគ្នា (Overloading)។</p></div>`
    },
    {
      title: "Parameter និង Argument",
      html: `<p><strong>Parameter</strong> គឺ Variable ដែលប្រកាសក្នុង Method។ <strong>Argument</strong> គឺតម្លៃដែលអ្នកផ្តល់ពេលហៅ Method។</p>
<pre><code>public static void greet(String name) {       // parameter: name
    System.out.println("Hello, " + name);
}

public static void main(String[] args) {
    greet("Dara");                            // argument: "Dara"
    greet("Sok");                             // argument: "Sok"
}</code></pre>
<p>Method អាចមាន Parameter ច្រើន ដែលបំបែកដោយ Comma៖</p>
<pre><code>public static double calculatePrice(double price, int quantity) {
    return price * quantity;
}</code></pre>
<p>ពេលហៅ ត្រូវផ្តល់ Argument តាមលំដាប់ និង Type ដែលត្រូវគ្នា៖</p>
<pre><code>double total = calculatePrice(2.5, 3);   // 7.5</code></pre>
<div class="callout warn"><div class="callout-title">លំដាប់ និង Type សំខាន់</div><p>បើអ្នកហៅ <code>calculatePrice(3, 2.5)</code> នោះ Compiler នឹងរកឃើញ Error ព្រោះ Type មិនត្រូវគ្នា។</p></div>`
    },
    {
      title: "Return Value និង void",
      html: `<p>Method ដែលផ្តល់តម្លៃត្រូវប្រកាស Return Type ជាក់លាក់ ហើយត្រូវមាន <code>return</code> គ្រប់ផ្លូវដំណើរការ៖</p>
<pre><code>public static boolean isEven(int number) {
    return number % 2 == 0;
}

public static int max(int a, int b) {
    if (a > b) {
        return a;
    }
    return b;
}</code></pre>
<p>Method ដែលមិនផ្តល់តម្លៃប្រើ <code>void</code>៖</p>
<pre><code>public static void printLine() {
    System.out.println("----------");
}</code></pre>
<div class="callout warn"><div class="callout-title">return និង void</div><p>Method <code>void</code> អាចប្រើ <code>return;</code> ដើម្បីចេញមុន ប៉ុន្តែមិនអាច <code>return value;</code> បានទេ។</p></div>
<p>ចំណុចសំខាន់៖ បើ Method ប្រកាសថាផ្តល់ <code>int</code> នោះគ្រប់ផ្លូវ (រួមទាំង if ទាំងអស់) ត្រូវ return int។ បើមិនដូច្នេះ Compiler នឹងរាយការណ៍ “missing return statement”។</p>`
    },
    {
      title: "Scope នៃ Variable",
      html: `<p><strong>Scope</strong> គឺតំបន់ដែល Variable អាចចូលប្រើបាន។ Variable ដែលប្រកាសក្នុង Block <code>{ }</code> មាន Scope ត្រឹម Block នោះ។</p>
<pre><code>public static void main(String[] args) {
    int x = 10;

    if (x > 5) {
        int y = 20;
        System.out.println(x + y);   // OK
    }

    System.out.println(x);           // OK
    // System.out.println(y);        // ERROR: y not visible
}</code></pre>
<p>Parameter ក៏មាន Scope ត្រឹម Method របស់ខ្លួនដែរ៖</p>
<pre><code>public static void show(int value) {
    System.out.println(value);
}

public static void main(String[] args) {
    // System.out.println(value);    // ERROR
}</code></pre>
<div class="callout tip"><div class="callout-title">ឈ្មោះ Variable</div><p>Variable ក្នុង Method ផ្សេងគ្នាអាចមានឈ្មោះដូចគ្នាបាន ព្រោះវាមាន Scope ដាច់ដោយឡែក។ ប៉ុន្តែការប្រើឈ្មោះច្បាស់លាស់ជួយឱ្យកូដអានងាយ។</p></div>`
    },
    {
      title: "Pass-by-Value",
      html: `<p>Java ប្រើ <strong>Pass-by-Value</strong> សម្រាប់ Argument ទាំងអស់។ មានន័យថា Method ទទួលបាន <em>ចម្លង</em> តម្លៃ មិនមែន Variable ដើមទេ។</p>
<pre><code>public static void change(int x) {
    x = 100;
}

public static void main(String[] args) {
    int a = 5;
    change(a);
    System.out.println(a);   // 5 (unchanged)
}</code></pre>
<p>សម្រាប់ Object (ដូចជា Array) ការផ្តល់ Argument គឺចម្លង <strong>Reference</strong>។ ដូច្នេះ Method អាចកែខ្លឹមសារ Object បាន ប៉ុន្តែមិនអាចប្តូរ Reference ដើមបាន៖</p>
<pre><code>public static void modify(int[] arr) {
    arr[0] = 99;          // changes array content
    arr = new int[3];     // changes local reference only
    arr[0] = 1;
}

public static void main(String[] args) {
    int[] nums = {10, 20};
    modify(nums);
    System.out.println(nums[0]);   // 99
}</code></pre>
<div class="callout info"><div class="callout-title">ចងចាំ</div><p>Java មិនមាន Pass-by-Reference ទេ។ អ្វីដែលគេហៅថា “Pass-by-Reference សម្រាប់ Object” គឺពិតជាការចម្លង Reference ដោយតម្លៃ។</p></div>`
    },
    {
      title: "static និង Varargs",
      html: `<p>Method ដែលមាន <code>static</code> អាចហៅបានដោយមិនចាំបាច់បង្កើត Object។ នេះជាហេតុអ្វី <code>main</code> មាន <code>static</code>។</p>
<pre><code>public class Calculator {
    public static int square(int n) {
        return n * n;
    }

    public static void main(String[] args) {
        System.out.println(Calculator.square(5));   // 25
    }
}</code></pre>
<h3>Varargs</h3>
<p><strong>Varargs</strong> អនុញ្ញាតឱ្យ Method ទទួល Argument ចំនួនណាមួយនៃ Type តែមួយ៖</p>
<pre><code>public static int sum(int... numbers) {
    int total = 0;
    for (int n : numbers) {
        total += n;
    }
    return total;
}

public static void main(String[] args) {
    System.out.println(sum(1, 2));          // 3
    System.out.println(sum(1, 2, 3, 4));    // 10
    System.out.println(sum());              // 0
}</code></pre>
<div class="callout warn"><div class="callout-title">Varargs ត្រូវនៅចុងក្រោយ</div><p>ប្រសិនបើ Method មាន Parameter ផ្សេងទៀត Varargs ត្រូវដាក់ចុងក្រោយ៖ <code>print(String label, int... values)</code>។</p></div>`
    }
  ],
  terms: [
    { en: "Method", kh: "អនុគមន៍", text: "ប្លុកកូដដែលមានឈ្មោះ និងអាចហៅប្រើឡើងវិញ។" },
    { en: "Parameter", kh: "ប៉ារ៉ាម៉ែត្រ", text: "Variable ដែលប្រកាសក្នុង Method។" },
    { en: "Argument", kh: "អាគុយម៉ង់", text: "តម្លៃដែលផ្តល់ពេលហៅ Method។" },
    { en: "Return Type", kh: "ប្រភេទត្រឡប់", text: "Type នៃតម្លៃដែល Method ផ្តល់មកវិញ។" },
    { en: "Scope", kh: "ដែនប្រើប្រាស់", text: "តំបន់ដែល Variable អាចចូលប្រើបាន។" },
    { en: "Varargs", kh: "អាគុយម៉ង់អថេរ", text: "ការទទួល Argument ចំនួនអថេរ ដោយប្រើ Type...។" }
  ],
  syntax: [
    { label: "Basic method", code: "public static void greet() {\n    System.out.println(\"Hello\");\n}" },
    { label: "With parameter", code: "public static void greet(String name) {\n    System.out.println(\"Hello, \" + name);\n}" },
    { label: "With return value", code: "public static int add(int a, int b) {\n    return a + b;\n}" },
    { label: "Calling", code: "int result = add(2, 3);\ngreet(\"Dara\");" },
    { label: "Varargs", code: "public static int sum(int... numbers) {\n    int total = 0;\n    for (int n : numbers) total += n;\n    return total;\n}" }
  ],
  examples: [
    {
      title: "Method មូលដ្ឋាន",
      desc: "បង្កើត Method ពីរគឺ greet និង add រួចហៅពី main។",
      file: "MethodBasics.java",
      code: `public class MethodBasics {
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        greet("Dara");
        greet("Sok");

        int result = add(7, 5);
        System.out.println("7 + 5 = " + result);
    }
}`,
      output: "Hello, Dara!\nHello, Sok!\n7 + 5 = 12",
      lines: [
        "<code>greet</code> ទទួល Parameter មួយ និងមិនផ្តល់តម្លៃ (void)។",
        "<code>add</code> ទទួល Parameter ពីរ និង return int។",
        "<code>main</code> ហៅ Method ទាំងពីរតាមឈ្មោះ។",
        "លទ្ធផលរបស់ add ត្រូវរក្សាទុកក្នុង Variable <code>result</code>។"
      ]
    },
    {
      title: "គណនាការបញ្ចុះតម្លៃ",
      desc: "បំបែក Logic ទៅជា Method តូចៗ៖ គណនាបញ្ចុះតម្លៃ និងគណនាតម្លៃចុងក្រោយ។",
      file: "DiscountCalculator.java",
      code: `public class DiscountCalculator {
    public static double discountRate(int years) {
        if (years >= 5) {
            return 0.20;
        } else if (years >= 2) {
            return 0.10;
        }
        return 0.0;
    }

    public static double finalPrice(double price, int years) {
        double rate = discountRate(years);
        return price * (1 - rate);
    }

    public static void main(String[] args) {
        double price = 200.0;
        int years = 3;

        System.out.println("Rate: " + discountRate(years));
        System.out.println("Final: " + finalPrice(price, years));
    }
}`,
      output: "Rate: 0.1\nFinal: 180.0",
      lines: [
        "<code>discountRate</code> ផ្តល់អត្រាបញ្ចុះតម្លៃតាមចំនួនឆ្នាំ។",
        "<code>finalPrice</code> ហៅ <code>discountRate</code> ខាងក្នុងដើម្បីគណនា។",
        "ការបំបែក Logic ជា Method ធ្វើឱ្យកូដសាកល្បង និងកែបានងាយ។",
        "3 ឆ្នាំទទួលបាន 10% ដូច្នេះតម្លៃចុងក្រោយ 180.0។"
      ]
    },
    {
      title: "Method ជាមួយ Array",
      desc: "សរសេរ Method គណនាមធ្យមភាគ និងរកតម្លៃធំបំផុតលើ Array។",
      file: "ArrayMethods.java",
      code: `public class ArrayMethods {
    public static double average(int[] numbers) {
        if (numbers.length == 0) {
            return 0;
        }
        int sum = 0;
        for (int n : numbers) {
            sum += n;
        }
        return (double) sum / numbers.length;
    }

    public static int max(int[] numbers) {
        int max = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int[] scores = {80, 95, 70, 88};
        System.out.println("Average: " + average(scores));
        System.out.println("Max: " + max(scores));
    }
}`,
      output: "Average: 83.25\nMax: 95",
      lines: [
        "Method ទទួល Array ជា Parameter ហើយអាចអានធាតុបាន។",
        "<code>average</code> ពិនិត្យ Array ទទេជាមុន ដើម្បីជៀសវាងចែកនឹង 0។",
        "<code>max</code> ចាប់ផ្តើមពីធាតុដំបូង ហើយប្រៀបធៀបបន្ត។",
        "Method អាចហៅគ្នាទៅវិញទៅមកបាន។"
      ]
    },
    {
      title: "Pass-by-Value ជាមួយ Array",
      desc: "បង្ហាញថា Method អាចកែខ្លឹមសារ Array បាន ប៉ុន្តែការផ្តល់ Reference ថ្មីមិនប៉ះពាល់ខាងក្រៅ។",
      file: "PassByValue.java",
      code: `import java.util.Arrays;

public class PassByValue {
    public static void modify(int[] arr) {
        arr[0] = 99;
        arr = new int[]{1, 2, 3};
        arr[1] = 50;
    }

    public static void main(String[] args) {
        int[] nums = {10, 20, 30};
        modify(nums);
        System.out.println(Arrays.toString(nums));
    }
}`,
      output: "[99, 20, 30]",
      lines: [
        "<code>arr[0] = 99</code> កែខ្លឹមសារ Array ដើម ដូច្នេះ nums[0] ក្លាយជា 99។",
        "<code>arr = new int[]...</code> ប្តូរ Reference ក្នុង Method តែប៉ុណ្ណោះ។",
        "ការកែ <code>arr[1] = 50</code> កើតឡើងលើ Array ថ្មី ដែលមិនប៉ះពាល់ nums។",
        "នេះបង្ហាញថា Java ផ្តល់ Reference ដោយតម្លៃ។"
      ]
    },
    {
      title: "Varargs សម្រាប់ផលបូក",
      desc: "បង្កើត Method ដែលអាចបូកលេខចំនួនណាមួយ។",
      file: "VarargsSum.java",
      code: `public class VarargsSum {
    public static int sum(int... numbers) {
        int total = 0;
        for (int n : numbers) {
            total += n;
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println(sum());
        System.out.println(sum(5));
        System.out.println(sum(1, 2, 3));
        System.out.println(sum(10, 20, 30, 40));
    }
}`,
      output: "0\n5\n6\n100",
      lines: [
        "<code>int... numbers</code> អនុញ្ញាតឱ្យហៅដោយ Argument 0 ឬច្រើន។",
        "ខាងក្នុង Method <code>numbers</code> ជា Array ធម្មតា។",
        "Enhanced for បូកគ្រប់តម្លៃ។",
        "បើគ្មាន Argument ទេ Array ទទេ ដូច្នេះលទ្ធផល 0។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ភ្លេច return</span><br>Method ដែលប្រកាស int តែគ្មាន return ក្នុងផ្លូវខ្លះ។', fix: "ធានាថាគ្រប់ផ្លូវ return តម្លៃ ឬដាក់ return នៅចុង Method។" },
    { text: '<span class="bad-code">❌ ហៅ Method ខុស Type</span><br><code>add("2", 3)</code> ពេល Parameter ជា int។', fix: "ផ្តល់ Argument តាម Type និងលំដាប់ដែលបានប្រកាស។" },
    { text: '<span class="bad-code">❌ ចូលប្រើ Variable ក្រៅ Scope</span><br>ប្រើ Variable ដែលប្រកាសក្នុង if ឬ Method ផ្សេង។', fix: "ប្រកាស Variable ក្នុង Scope ដែលត្រូវការ ឬ return តម្លៃចេញមក។" },
    { text: '<span class="bad-code">❌ គិតថា Method កែ int ដើមបាន</span><br>Pass-by-Value ធ្វើឱ្យការកែ Parameter មិនប៉ះពាល់ខាងក្រៅ។', fix: "Return តម្លៃថ្មី ឬប្រើ Object/Array។" },
    { text: '<span class="bad-code">❌ Varargs មិននៅចុងក្រោយ</span><br><code>print(int... nums, String label)</code> មិនត្រឹមត្រូវ។', fix: "ដាក់ Varargs ចុងក្រោយ៖ <code>print(String label, int... nums)</code>។" }
  ],
  tips: [
    "ដាក់ឈ្មោះ Method ជាកិរិយាស័ព្ទ ដូចជា <code>calculateTotal</code> ឬ <code>isValid</code>។",
    "Method គួរធ្វើការងារតែមួយ (Single Responsibility)។",
    "កុំសរសេរ Method វែងពេក — បំបែកជា Method តូចៗ។",
    "Return តម្លៃជំនួសការបោះពុម្ព ដើម្បីឱ្យ Method អាចប្រើឡើងវិញបាន។",
    "សាកល្បង Method ជាមួយ Input ធម្មតា និង Input ពិសេស (0, អវិជ្ជមាន, Array ទទេ)។"
  ],
  exercises: [
    {
      level: 1,
      title: "Method ស្វាគមន៍",
      desc: "បង្កើត Method <code>greet(String name)</code> ដែលបង្ហាញ “Hello, name!”។",
      requirements: ["បង្កើត Method", "ទទួល Parameter", "ហៅពី main"],
      inputSample: "Dara",
      outputSample: "Hello, Dara!",
      hint: "ប្រើ <code>public static void greet(String name)</code>។",
      solutionCode: `public class Greeting {
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static void main(String[] args) {
        greet("Dara");
    }
}`
    },
    {
      level: 1,
      title: "ការេលេខ",
      desc: "បង្កើត Method <code>square(int n)</code> ដែល return n × n។",
      requirements: ["Return Type ជា int", "ប្រើ return"],
      inputSample: "7",
      outputSample: "49",
      hint: "សរសេរ <code>return n * n;</code>។",
      solutionCode: `public class Square {
    public static int square(int n) {
        return n * n;
    }

    public static void main(String[] args) {
        System.out.println(square(7));
    }
}`
    },
    {
      level: 2,
      title: "ពិនិត្យលេខគូ",
      desc: "បង្កើត Method <code>isEven(int n)</code> ដែល return boolean។",
      requirements: ["Return boolean", "ប្រើ %", "ហៅជាមួយលេខគូ និងសេស"],
      inputSample: "8",
      outputSample: "true\nfalse",
      hint: "ប្រើ <code>return n % 2 == 0;</code>។",
      solutionCode: `public class EvenCheck {
    public static boolean isEven(int n) {
        return n % 2 == 0;
    }

    public static void main(String[] args) {
        System.out.println(isEven(8));
        System.out.println(isEven(7));
    }
}`
    },
    {
      level: 2,
      title: "តម្លៃធំបំផុត",
      desc: "បង្កើត Method <code>max(int a, int b)</code> ដែល return តម្លៃធំជាង។",
      requirements: ["ប្រើ if", "Return int", "សាកល្បងករណីស្មើគ្នា"],
      inputSample: "max(12, 5)",
      outputSample: "12",
      hint: "បើ a > b return a បើមិនដូច្នេះ return b។",
      solutionCode: `public class MaxMethod {
    public static int max(int a, int b) {
        if (a > b) {
            return a;
        }
        return b;
    }

    public static void main(String[] args) {
        System.out.println(max(12, 5));
    }
}`
    },
    {
      level: 2,
      title: "គណនាមធ្យមភាគ",
      desc: "បង្កើត Method <code>average(int[] arr)</code> ដែល return មធ្យមភាគជា double។",
      requirements: ["ទទួល Array", "Cast ទៅ double", "គាំទ្រ Array ទទេ"],
      inputSample: "{80, 90, 100}",
      outputSample: "90.0",
      hint: "បើ length == 0 return 0។",
      solutionCode: `public class AverageMethod {
    public static double average(int[] arr) {
        if (arr.length == 0) {
            return 0;
        }
        int sum = 0;
        for (int n : arr) {
            sum += n;
        }
        return (double) sum / arr.length;
    }

    public static void main(String[] args) {
        int[] scores = {80, 90, 100};
        System.out.println(average(scores));
    }
}`
    },
    {
      level: 3,
      title: "បញ្ច្រាស់ String",
      desc: "បង្កើត Method <code>reverse(String s)</code> ដែល return String បញ្ច្រាស។",
      requirements: ["ប្រើ StringBuilder", "Return String", "សាកល្បងអត្ថបទខ្លី និងវែង"],
      inputSample: "Java",
      outputSample: "avaJ",
      hint: "ប្រើ <code>new StringBuilder(s).reverse().toString()</code>។",
      solutionCode: `public class ReverseMethod {
    public static String reverse(String s) {
        return new StringBuilder(s).reverse().toString();
    }

    public static void main(String[] args) {
        System.out.println(reverse("Java"));
    }
}`
    },
    {
      level: 3,
      title: "បូកលេខ Varargs",
      desc: "បង្កើត Method <code>sum(int... nums)</code> ដែល return ផលបូកនៃ Argument ទាំងអស់។",
      requirements: ["ប្រើ Varargs", "គាំទ្រគ្មាន Argument", "Return int"],
      inputSample: "sum(1, 2, 3, 4)",
      outputSample: "10\n0",
      hint: "ចាប់ផ្តើម total = 0 ហើយ Loop លើ nums។",
      solutionCode: `public class VarargsExercise {
    public static int sum(int... nums) {
        int total = 0;
        for (int n : nums) {
            total += n;
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println(sum(1, 2, 3, 4));
        System.out.println(sum());
    }
}`
    },
    {
      level: 3,
      title: "ការបំបែក Logic",
      desc: "សរសេរ Method <code>isPrime(int n)</code> និង Method <code>printPrimes(int limit)</code> ដែលហៅ isPrime ដើម្បីបង្ហាញចំនួនបឋមរហូតដល់ limit។",
      requirements: ["បង្កើត Method ពីរ", "isPrime return boolean", "printPrimes ហៅ isPrime"],
      inputSample: "20",
      outputSample: "2 3 5 7 11 13 17 19",
      hint: "isPrime ពិនិត្យ Divisor ពី 2 ដល់ sqrt(n)។",
      solutionCode: `public class PrimeMethods {
    public static boolean isPrime(int n) {
        if (n < 2) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void printPrimes(int limit) {
        for (int i = 2; i <= limit; i++) {
            if (isPrime(i)) {
                System.out.print(i + " ");
            }
        }
        System.out.println();
    }

    public static void main(String[] args) {
        printPrimes(20);
    }
}`
    },
    {
      level: 2,
      title: "Method គណនាមធ្យមភាគ",
      desc: "សរសេរ <code>static double average(int[] nums)</code> ដែលគណនាមធ្យមភាគ ហើយហៅពី main។",
      requirements: ["Method ទទួល int[]", "ត្រឡប់ double", "ហៅជាមួយ Array"],
      inputSample: "{80, 90, 70}",
      outputSample: "Average: 80.0",
      hint: "បូកតម្លៃទាំងអស់ រួចចែកនឹង <code>nums.length</code> ជា double។",
      solutionCode: `public class AverageMethod {
    static double average(int[] nums) {
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        return (double) sum / nums.length;
    }

    public static void main(String[] args) {
        int[] scores = {80, 90, 70};
        System.out.println("Average: " + average(scores));
    }
}`,
      solution: "Cast ជា double មុនចែក ដើម្បីទទួលបានលទ្ធផលទសភាគត្រឹមត្រូវ។ Method ជួយបំបែក Logic ឱ្យអានងាយ។"
    },
    {
      level: 3,
      title: "Method បូកលេខខ្ទង់",
      desc: "សរសេរ <code>static int sumOfDigits(int n)</code> ដែលបូកលេខខ្ទង់ទាំងអស់នៃចំនួនមួយ។",
      requirements: ["Method ត្រឡប់ int", "ប្រើ % និង /", "សាកល្បង 1234"],
      inputSample: "1234",
      outputSample: "Sum of digits: 10",
      hint: "ក្នុង Loop៖ <code>sum += n % 10; n /= 10;</code> រហូត n ក្លាយជា 0។",
      solutionCode: `public class DigitSumMethod {
    static int sumOfDigits(int n) {
        int sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println("Sum of digits: " + sumOfDigits(1234));
    }
}`,
      solution: "Modulo 10 យកលេខខ្ទង់ចុងក្រោយ ហើយចែក 10 លុបវាចេញ។ Loop បន្តរហូតអស់ខ្ទង់។"
    }
  ],
  quiz: [
    { q: "តើ <code>void</code> មានន័យដូចម្តេច?", options: ["Method មិនផ្តល់តម្លៃ", "Method គ្មាន Parameter", "Method គ្មានឈ្មោះ", "Method ជា static"], answer: 0, explain: "void មានន័យថា Method មិន return តម្លៃ។" },
    { q: "តើ Parameter ខុសពី Argument យ៉ាងដូចម្តេច?", options: ["ដូចគ្នា", "Parameter ជាការប្រកាស; Argument ជាតម្លៃពេលហៅ", "Argument ជាការប្រកាស", "Parameter មានតែក្នុង main"], answer: 1, explain: "Parameter គឺ Variable ក្នុង Signature; Argument គឺតម្លៃដែលផ្តល់ពេលហៅ។" },
    { q: "តើ Java ប្រើការផ្តល់ Argument បែបណា?", options: ["Pass-by-Reference", "Pass-by-Value", "Pass-by-Name", "Pass-by-Pointer"], answer: 1, explain: "Java ប្រើ Pass-by-Value សម្រាប់អ្វីៗទាំងអស់ រួមទាំង Reference របស់ Object។" },
    { q: "តើ Method ដែលមាន <code>static</code> អាចហៅដោយរបៀបណា?", options: ["ត្រូវបង្កើត Object", "ហៅតាមឈ្មោះ Class ឬឈ្មោះ Method", "ហៅបានតែក្នុង main", "មិនអាចហៅបាន"], answer: 1, explain: "Method static ជាកម្មសិទ្ធិរបស់ Class មិនមែន Object។" },
    { q: "តើ Varargs ត្រូវដាក់នៅទីណា?", options: ["ដើម Parameter List", "កណ្តាល", "ចុងក្រោយ", "កន្លែងណាក៏បាន"], answer: 2, explain: "Varargs ត្រូវជា Parameter ចុងក្រោយ។" },
    { q: "តើ Variable ដែលប្រកាសក្នុង if Block អាចប្រើក្រៅ Block បានទេ?", options: ["បាន", "មិនបាន", "បានតែ static", "បានតែក្នុង main"], answer: 1, explain: "Variable មាន Scope ត្រឹម Block ដែលវាប្រកាស។" }
  ],
  summary: [
    "Method ជាប្លុកកូដដែលមានឈ្មោះ អាចហៅប្រើឡើងវិញបាន។",
    "Parameter ជាការប្រកាស; Argument ជាតម្លៃពេលហៅ។",
    "void មិនផ្តល់តម្លៃ; Method ដទៃទៀតត្រូវ return តម្លៃតាម Return Type។",
    "Variable មាន Scope ត្រឹម Block ដែលវាប្រកាស។",
    "Java ប្រើ Pass-by-Value សម្រាប់ Argument ទាំងអស់។",
    "static Method ហៅបានដោយមិនចាំបាច់បង្កើត Object; Varargs ទទួល Argument ចំនួនអថេរ។"
  ],
  takeaways: [
    "Method តូច និងច្បាស់លាស់ ធ្វើឱ្យកូដអានងាយ និងសាកល្បងងាយ។",
    "ឈ្មោះ Method គួរបញ្ជាក់អ្វីដែលវាធ្វើ។",
    "Return តម្លៃជំនួសការបោះពុម្ព ដើម្បីបង្កើន Reusability។",
    "ចងចាំ Pass-by-Value — ការកែ Parameter មិនប៉ះពាល់ Variable ដើមទេ។",
    "Varargs ងាយស្រួលសម្រាប់ Method ដែលទទួលចំនួន Argument មិនច្បាស់។"
  ],
  sources: [
    { label: "Oracle — Defining Methods", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html" },
    { label: "Oracle — Passing Arguments", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html" },
    { label: "W3Schools — Java Methods", url: "https://www.w3schools.com/java/java_methods.asp" },
    { label: "W3Schools — Java Method Parameters", url: "https://www.w3schools.com/java/java_methods_param.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "method-overloading",
  num: 12,
  part: 11,
  partTitle: "Methods",
  title: "Method Overloading",
  titleKh: "Method Overloading (Method ឈ្មោះដូចគ្នា)",
  time: "៤៥ នាទី",
  level: 3,
  intro: "Method Overloading គឺការបង្កើត Method ច្រើនដែលមាន <strong>ឈ្មោះដូចគ្នា</strong> ប៉ុន្តែ <strong>Parameter ខុសគ្នា</strong>។ Java ជ្រើសរើស Method ត្រឹមត្រូវនៅពេល Compile ដោយផ្អែកលើចំនួន និង Type នៃ Argument។ នេះជួយឱ្យ API អានងាយ និងប្រើបានច្រើនបែប។",
  objectives: [
    "យល់ពីគោលគំនិត Method Overloading។",
    "បង្កើត Method ឈ្មោះដូចគ្នាដែលមាន Parameter ខុសគ្នា។",
    "យល់ពីរបៀប Java ជ្រើសរើស Method ពេល Compile។",
    "ស្គាល់ Overloading ក្នុង Java Standard Library។",
    "ជៀសវាង Ambiguity និងកំហុសញឹកញាប់។"
  ],
  sections: [
    {
      title: "គោលគំនិត Overloading",
      html: `<p>ស្រមៃថាអ្នកចង់បង្កើត Method សម្រាប់បូកលេខ។ អ្នកអាចចង់បូក int ពីរ, double ពីរ ឬ int បី។ ជំនួសឱ្យការដាក់ឈ្មោះ <code>addInts</code>, <code>addDoubles</code>, <code>addThree</code> អ្នកអាចប្រើឈ្មោះដូចគ្នាគឺ <code>add</code> បាន។</p>
<pre><code>public static int add(int a, int b) {
    return a + b;
}

public static double add(double a, double b) {
    return a + b;
}

public static int add(int a, int b, int c) {
    return a + b + c;
}</code></pre>
<p>Java ស្គាល់ថា Method ណាត្រូវហៅដោយមើល Argument ដែលអ្នកផ្តល់៖</p>
<pre><code>System.out.println(add(2, 3));          // calls int, int
System.out.println(add(2.5, 3.5));      // calls double, double
System.out.println(add(1, 2, 3));       // calls int, int, int</code></pre>
<div class="callout info"><div class="callout-title">Compile-time Polymorphism</div><p>Overloading ត្រូវបានដោះស្រាយនៅ Compile Time ដូច្នេះគេហៅវាថា Static Polymorphism ឬ Compile-time Polymorphism។</p></div>`
    },
    {
      title: "លក្ខខណ្ឌនៃ Overloading",
      html: `<p>ដើម្បី Overload បាន Method ត្រូវខុសគ្នាយ៉ាងហោចណាស់មួយក្នុងចំណោមនេះ៖</p>
<ul>
<li><strong>ចំនួន Parameter</strong> ខុសគ្នា។</li>
<li><strong>Type នៃ Parameter</strong> ខុសគ្នា។</li>
<li><strong>លំដាប់ Type នៃ Parameter</strong> ខុសគ្នា។</li>
</ul>
<p>ឧទាហរណ៍ដែលត្រឹមត្រូវ៖</p>
<pre><code>void print(int x) { }
void print(String x) { }
void print(int x, int y) { }
void print(String x, int y) { }
void print(int y, String x) { }</code></pre>
<div class="callout warn"><div class="callout-title">Return Type មិនគ្រប់គ្រាន់</div><p>ការខុសគ្នាតែ Return Type មិនអាចធ្វើឱ្យ Overload បានទេ។ <code>int get()</code> និង <code>double get()</code> នឹងបណ្តាលឱ្យ Compile Error ព្រោះ Java មិនអាចជ្រើសរើសដោយផ្អែកលើ Return Type ពេលហៅ។</p></div>
<h3>ក៏មិនគ្រប់គ្រាន់ដែរ</h3>
<p>ការប្តូរឈ្មោះ Parameter មិនធ្វើឱ្យ Overload ទេ៖ <code>add(int a, int b)</code> និង <code>add(int x, int y)</code> គឺជា Method ដូចគ្នា។</p>`
    },
    {
      title: "របៀប Java ជ្រើសរើស Method",
      html: `<p>ពេលហៅ Method Java ពិនិត្យតាមលំដាប់៖</p>
<ol>
<li><strong>Exact Match</strong>៖ រក Method ដែល Type ត្រូវគ្នាដោយផ្ទាល់។</li>
<li><strong>Widening Conversion</strong>៖ បើគ្មាន Exact Match វាព្យាយាមបំលែង Type តូចទៅធំ (ឧ. int → long → double)។</li>
<li><strong>Autoboxing / Varargs</strong>៖ បើនៅតែគ្មាន វាពិនិត្យ Autoboxing និង Varargs។</li>
</ol>
<pre><code>public static void show(int x) {
    System.out.println("int");
}

public static void show(double x) {
    System.out.println("double");
}

public static void main(String[] args) {
    show(5);       // int (exact)
    show(5.0);     // double (exact)
    show('A');     // int (char widens to int)
}</code></pre>
<div class="callout info"><div class="callout-title">char → int</div><p><code>char</code> អាច Widening ទៅ <code>int</code> បាន ដូច្នេះ <code>show('A')</code> ហៅ <code>show(int)</code>។</p></div>
<p>ការយល់ពីដំណើរការនេះជួយឱ្យអ្នកព្យាករបានថា Method ណាត្រូវហៅ និងជៀសវាងកំហុសដែលមើលមិនឃើញ។</p>`
    },
    {
      title: "Overloading ក្នុង Java Standard Library",
      html: `<p>Overloading មានគ្រប់ទីកន្លែងក្នុង Java។ ឧទាហរណ៍ <code>System.out.println()</code> មាន Overload សម្រាប់ Type ជាច្រើន៖</p>
<ul>
<li><code>println(int)</code></li>
<li><code>println(double)</code></li>
<li><code>println(String)</code></li>
<li><code>println(boolean)</code></li>
<li><code>println(Object)</code></li>
</ul>
<p>ដូចគ្នា <code>String.valueOf()</code> និង <code>Math.max()</code> ក៏មាន Overload៖</p>
<pre><code>Math.max(3, 7);          // int version
Math.max(3.5, 7.2);      // double version
String.valueOf(42);      // int → String
String.valueOf(true);    // boolean → String</code></pre>
<p>នេះជាហេតុអ្វីអ្នកអាចហៅ <code>println</code> ជាមួយ Type ណាមួយក៏បាន — Java ជ្រើសរើស Overload ដែលសមស្របឱ្យអ្នក។</p>`
    },
    {
      title: "Ambiguity និងកំហុសញឹកញាប់",
      html: `<p>ពេលខ្លះ Java មិនអាចសម្រេចថា Method ណាត្រូវហៅ ហើយរាយការណ៍ <strong>ambiguous method call</strong>។</p>
<pre><code>public static void test(int a, double b) { }
public static void test(double a, int b) { }

// test(5, 5);   // ambiguous!
</code></pre>
<p>ការហៅ <code>test(5, 5)</code> អាចសម្រាប់ទាំងពីរ ដូច្នេះ Compiler មិនអាចជ្រើសរើសបាន។ ដំណោះស្រាយគឺ Cast ឱ្យច្បាស់៖ <code>test(5, 5.0)</code>។</p>
<h3>កំហុសញឹកញាប់</h3>
<ul>
<li>គិតថាការប្តូរ Return Type ជា Overloading។</li>
<li>គិតថាការប្តូរឈ្មោះ Parameter ជា Overloading។</li>
<li>បង្កើត Overload ដែលមានអាកប្បកិរិយាខុសគ្នាខ្លាំង ធ្វើឱ្យអ្នកប្រើយល់ច្រឡំ។</li>
<li>ប្រើ Varargs ច្រើនជាមួយ Overload ផ្សេង ដែលអាចបង្ក Ambiguity។</li>
</ul>
<div class="callout tip"><div class="callout-title">គោលការណ៍ល្អ</div><p>Overload គួរមានអាកប្បកិរិយាស្រដៀងគ្នា។ ឧ. <code>add(int,int)</code> និង <code>add(double,double)</code> គឺសមស្រប ព្រោះទាំងពីរគឺ “បូក”។</p></div>`
    }
  ],
  terms: [
    { en: "Overloading", kh: "ការផ្ទុកលើស", text: "Method ឈ្មោះដូចគ្នា ប៉ុន្តែ Parameter ខុសគ្នា។" },
    { en: "Signature", kh: "ហត្ថលេខា", text: "ឈ្មោះ Method និង Parameter List។" },
    { en: "Ambiguity", kh: "ភាពមិនច្បាស់", text: "ស្ថានភាពដែល Compiler មិនអាចជ្រើស Method បាន។" },
    { en: "Widening", kh: "ការពង្រីក Type", text: "ការបំលែង Type តូចទៅធំដោយស្វ័យប្រវត្តិ។" }
  ],
  syntax: [
    { label: "Overload by count", code: "int add(int a, int b) { return a + b; }\nint add(int a, int b, int c) { return a + b + c; }" },
    { label: "Overload by type", code: "int add(int a, int b) { return a + b; }\ndouble add(double a, double b) { return a + b; }" },
    { label: "Overload by order", code: "void print(int a, String b) { }\nvoid print(String a, int b) { }" },
    { label: "Ambiguity fix", code: "test(5, 5.0);   // explicit types" }
  ],
  examples: [
    {
      title: "Overload តាមចំនួន Parameter",
      desc: "បង្កើត Method add ពីរកំណែ៖ បូកពីរ និងបូកបី។",
      file: "AddOverload.java",
      code: `public class AddOverload {
    public static int add(int a, int b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println(add(2, 3));
        System.out.println(add(2, 3, 4));
    }
}`,
      output: "5\n9",
      lines: [
        "Method ទាំងពីរមានឈ្មោះ <code>add</code> ដូចគ្នា។",
        "ភាពខុសគ្នាគឺចំនួន Parameter (២ និង ៣)។",
        "Java ជ្រើស Method តាមចំនួន Argument ពេល Compile។"
      ]
    },
    {
      title: "Overload តាម Type",
      desc: "បង្កើត Method area សម្រាប់ int និង double។",
      file: "AreaOverload.java",
      code: `public class AreaOverload {
    public static int area(int side) {
        return side * side;
    }

    public static double area(double radius) {
        return Math.PI * radius * radius;
    }

    public static void main(String[] args) {
        System.out.println("Square: " + area(4));
        System.out.println("Circle: " + area(2.0));
    }
}`,
      output: "Square: 16\nCircle: 12.566370614359172",
      lines: [
        "<code>area(int)</code> គណនាផ្ទៃការ៉េ។",
        "<code>area(double)</code> គណនាផ្ទៃរង្វង់។",
        "បើហៅដោយ 4 (int) Java ជ្រើសកំណែ int។ បើ 2.0 (double) វាជ្រើសកំណែ double។"
      ]
    },
    {
      title: "Overload តាមលំដាប់ Type",
      desc: "បង្ហាញ Method ដែលមាន Parameter ដូចគ្នា ប៉ុន្តែលំដាប់ខុសគ្នា។",
      file: "OrderOverload.java",
      code: `public class OrderOverload {
    public static void display(String label, int value) {
        System.out.println(label + ": " + value);
    }

    public static void display(int value, String label) {
        System.out.println(value + " -> " + label);
    }

    public static void main(String[] args) {
        display("Score", 95);
        display(95, "Score");
    }
}`,
      output: "Score: 95\n95 -> Score",
      lines: [
        "Signature ខុសគ្នាតាមលំដាប់ <code>String, int</code> និង <code>int, String</code>។",
        "ពេលហៅ Java ពិនិត្យ Type តាមលំដាប់ Argument។",
        "ទោះបី Overload បានក៏ដោយ គួរប្រុងប្រយ័ត្នកុំឱ្យអ្នកប្រើយល់ច្រឡំ។"
      ]
    },
    {
      title: "Overload ជាមួយ Varargs",
      desc: "បង្កើត Method sum សម្រាប់ពីរលេខ និងសម្រាប់ចំនួនណាមួយ។",
      file: "VarargsOverload.java",
      code: `public class VarargsOverload {
    public static int sum(int a, int b) {
        System.out.println("Two-arg version");
        return a + b;
    }

    public static int sum(int... numbers) {
        System.out.println("Varargs version");
        int total = 0;
        for (int n : numbers) {
            total += n;
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println(sum(2, 3));
        System.out.println(sum(1, 2, 3, 4));
    }
}`,
      output: "Two-arg version\n5\nVarargs version\n10",
      lines: [
        "Java ជ្រើស <code>sum(int, int)</code> សម្រាប់ Argument ពីរ ព្រោះវា Specific ជាង Varargs។",
        "សម្រាប់ Argument បួន វាជ្រើស Varargs។",
        "នេះបង្ហាញថា Java ជ្រើស Method ដែល Specific បំផុតមុន។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ខុសគ្នាតែ Return Type</span><br><code>int get()</code> និង <code>double get()</code> មិនមែន Overloading ទេ។', fix: "ផ្លាស់ប្តូរ Parameter List ជំនួស។" },
    { text: '<span class="bad-code">❌ ខុសគ្នាតែឈ្មោះ Parameter</span><br><code>add(int a, int b)</code> និង <code>add(int x, int y)</code> ជា Signature ដូចគ្នា។', fix: "ប្តូរចំនួន ឬ Type នៃ Parameter។" },
    { text: '<span class="bad-code">❌ Ambiguous call</span><br><code>test(int, double)</code> និង <code>test(double, int)</code> ហើយហៅ <code>test(5, 5)</code>។', fix: "Cast Argument ឱ្យច្បាស់ ឬកែ Signature។" },
    { text: '<span class="bad-code">❌ Overload <code>sum(int[])</code> និង <code>sum(int...)</code></span><br>Varargs ត្រូវបានចាត់ទុកជា Array ដូចគ្នា ដូច្នេះ Signature ស្មើគ្នា។', fix: "ប្រើ <code>sum(int first, int... rest)</code> ឬប្តូរឈ្មោះ Method។" },
    { text: '<span class="bad-code">❌ Overload ដែលអាកប្បកិរិយាខុសគ្នាខ្លាំង</span><br>ឈ្មោះដូចគ្នា ប៉ុន្តែធ្វើការងារខុសគ្នាទាំងស្រុង។', fix: "ដាក់ឈ្មោះខុសគ្នា ដើម្បីឱ្យកូដអានងាយ។" }
  ],
  tips: [
    "Overload គួរមានអត្ថន័យស្រដៀងគ្នា — ឧ. ការគណនាដូចគ្នាលើ Type ខុសគ្នា។",
    "ប្រើ Overload ដើម្បីផ្តល់ Default Behavior ដោយហៅ Method មួយទៀត។",
    "កុំបង្កើត Overload ច្រើនពេកដែលធ្វើឱ្យអ្នកប្រើមិនដឹងជ្រើសមួយណា។",
    "សាកល្បងការហៅជាមួយ Type ផ្សេងៗ ដើម្បីធានាថា Java ជ្រើស Method ត្រឹមត្រូវ។"
  ],
  exercises: [
    {
      level: 1,
      title: "Overload បូក",
      desc: "បង្កើត Method <code>add</code> ពីរកំណែ៖ int ពីរ និង int បី។",
      requirements: ["ឈ្មោះដូចគ្នា", "ចំនួន Parameter ខុសគ្នា"],
      outputSample: "5\n9",
      hint: "ប្រកាស <code>add(int,int)</code> និង <code>add(int,int,int)</code>។",
      solutionCode: `public class AddOverloadExercise {
    public static int add(int a, int b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println(add(2, 3));
        System.out.println(add(2, 3, 4));
    }
}`
    },
    {
      level: 1,
      title: "Overload បង្ហាញ",
      desc: "បង្កើត Method <code>show</code> សម្រាប់ int, double និង String។",
      requirements: ["ឈ្មោះដូចគ្នា", "Type ខុសគ្នា", "បង្ហាញតម្លៃ"],
      outputSample: "int: 5\ndouble: 5.5\nString: hi",
      hint: "បង្កើត <code>show(int)</code>, <code>show(double)</code>, <code>show(String)</code>។",
      solutionCode: `public class ShowOverload {
    public static void show(int x) {
        System.out.println("int: " + x);
    }

    public static void show(double x) {
        System.out.println("double: " + x);
    }

    public static void show(String x) {
        System.out.println("String: " + x);
    }

    public static void main(String[] args) {
        show(5);
        show(5.5);
        show("hi");
    }
}`
    },
    {
      level: 2,
      title: "Overload ផ្ទៃ",
      desc: "បង្កើត Method <code>area</code> សម្រាប់ការ៉េ (int) និងចតុកោណ (int ពីរ)។",
      requirements: ["Overload ពីរ", "គណនាត្រឹមត្រូវ", "បង្ហាញលទ្ធផល"],
      outputSample: "Square: 16\nRectangle: 24",
      hint: "ការ៉េប្រើ <code>side * side</code>, ចតុកោណប្រើ <code>width * height</code>។",
      solutionCode: `public class AreaExercise {
    public static int area(int side) {
        return side * side;
    }

    public static int area(int width, int height) {
        return width * height;
    }

    public static void main(String[] args) {
        System.out.println("Square: " + area(4));
        System.out.println("Rectangle: " + area(4, 6));
    }
}`
    },
    {
      level: 3,
      title: "Overload ជាមួយ Array និង Varargs",
      desc: "បង្កើត Method <code>sum</code> ពីរ៖ មួយទទួល <code>int[]</code> និងមួយទទួល <code>int first</code> ជាមួយ <code>int... rest</code>។ សង្កេតថា Method ណាត្រូវហៅ។",
      requirements: ["Overload ពីរ", "មួយទទួល int[]", "មួយទទួល int first និង int... rest"],
      inputSample: "sum(new int[]{1,2,3}), sum(1,2,3)",
      outputSample: "Array version: 6\nVarargs version: 6",
      hint: "Method ទីពីរចាប់ផ្តើមពី <code>first</code> រួចបូកតម្លៃក្នុង <code>rest</code>។ ចំណាំ៖ <code>int[]</code> និង <code>int...</code> មាន Signature ដូចគ្នា ដូច្នេះ Overload ទាំងពីរនេះមិនបានទេ។",
      solutionCode: `public class SumOverload {
    public static int sum(int[] nums) {
        int total = 0;
        for (int n : nums) {
            total += n;
        }
        return total;
    }

    public static int sum(int first, int... rest) {
        int total = first;
        for (int n : rest) {
            total += n;
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println("Array version: " + sum(new int[]{1, 2, 3}));
        System.out.println("Varargs version: " + sum(1, 2, 3));
    }
}`
    },
    {
      level: 1,
      title: "Overload multiply",
      desc: "បង្កើត Method <code>multiply</code> ពីរកំណែ៖ គុណចំនួនពីរ និងគុណចំនួនបី។",
      requirements: ["multiply(int, int)", "multiply(int, int, int)", "បង្ហាញលទ្ធផល"],
      outputSample: "6\n24",
      hint: "Parameter ខុសគ្នាបរិមាណ។",
      solutionCode: `public class MultiplyOverload {
    static int multiply(int a, int b) {
        return a * b;
    }

    static int multiply(int a, int b, int c) {
        return a * b * c;
    }

    public static void main(String[] args) {
        System.out.println(multiply(2, 3));
        System.out.println(multiply(2, 3, 4));
    }
}`
    },
    {
      level: 2,
      title: "Overload print",
      desc: "បង្កើត Method <code>print</code> សម្រាប់ int, String និង double ដើម្បីបង្ហាញតម្លៃតាម Type។",
      requirements: ["print(int)", "print(String)", "print(double)"],
      outputSample: "int: 5\nString: Java\ndouble: 2.5",
      hint: "Parameter Type ខុសគ្នាធ្វើឱ្យ Overload បាន។",
      solutionCode: `public class PrintOverload {
    static void print(int value) {
        System.out.println("int: " + value);
    }

    static void print(String value) {
        System.out.println("String: " + value);
    }

    static void print(double value) {
        System.out.println("double: " + value);
    }

    public static void main(String[] args) {
        print(5);
        print("Java");
        print(2.5);
    }
}`
    },
    {
      level: 3,
      title: "Overload area",
      desc: "បង្កើត Method <code>area</code> សម្រាប់ការេ (int) និងរង្វង់ (double) ដើម្បីបង្ហាញថា Type ខុសគ្នាអាច Overload បាន។",
      requirements: ["area(int side)", "area(double radius)", "បង្ហាញលទ្ធផលពីរ"],
      outputSample: "Square: 9\nCircle: 28.274333882308138",
      hint: "ចំណាំ៖ Overload ដោយឈ្មោះ Parameter មិនបានទេ—ត្រូវខុស Type ឬចំនួន។",
      solutionCode: `public class AreaOverload {
    static int area(int side) {
        return side * side;
    }

    static double area(double radius) {
        return Math.PI * radius * radius;
    }

    public static void main(String[] args) {
        System.out.println("Square: " + area(3));
        System.out.println("Circle: " + area(3.0));
    }
}`
    },
    {
      level: 3,
      title: "Overload តាមលំដាប់ Parameter",
      desc: "បង្កើត Method <code>display(String, int)</code> និង <code>display(int, String)</code> ដើម្បីបង្ហាញព័ត៌មានតាមលំដាប់ផ្សេងគ្នា។",
      requirements: ["display(String, int)", "display(int, String)", "ហៅទាំងពីរ"],
      outputSample: "Name: Dara, Age: 20\nAge: 20, Name: Dara",
      hint: "លំដាប់ Type ខុសគ្នាក៏រាប់ជា Overload។",
      solutionCode: `public class DisplayOverload {
    static void display(String name, int age) {
        System.out.println("Name: " + name + ", Age: " + age);
    }

    static void display(int age, String name) {
        System.out.println("Age: " + age + ", Name: " + name);
    }

    public static void main(String[] args) {
        display("Dara", 20);
        display(20, "Dara");
    }
}`
    }
  ],
  quiz: [
    { q: "តើ Method Overloading ត្រូវខុសគ្នាយ៉ាងហោចណាស់អ្វី?", options: ["ឈ្មោះ", "Return Type", "Parameter List", "Access Modifier"], answer: 2, explain: "Overloading ត្រូវមាន Parameter List ខុសគ្នា (ចំនួន, Type ឬលំដាប់)។" },
    { q: "តើការខុសគ្នាតែ Return Type អាច Overload បានទេ?", options: ["បាន", "មិនបាន", "បានតែ static", "បានតែ int"], answer: 1, explain: "Java មិនអាចជ្រើស Method តាម Return Type ពេលហៅ ដូច្នេះមិនរាប់ជា Overloading។" },
    { q: "តើ Overloading ត្រូវបានដោះស្រាយនៅពេលណា?", options: ["Runtime", "Compile Time", "Link Time", "Load Time"], answer: 1, explain: "Overloading ត្រូវបានជ្រើសនៅ Compile Time ដោយផ្អែកលើ Argument។" },
    { q: "តើ <code>print(int, String)</code> និង <code>print(String, int)</code> ជា Overload ទេ?", options: ["ទេ ព្រោះឈ្មោះដូចគ្នា", "បាទ ព្រោះលំដាប់ Type ខុសគ្នា", "ទេ ព្រោះ Type ដូចគ្នា", "បាទ តែមិនដំណើរការ"], answer: 1, explain: "លំដាប់ Type ខុសគ្នាធ្វើឱ្យ Signature ខុសគ្នា ដូច្នេះជា Overload ត្រឹមត្រូវ។" },
    { q: "តើ <code>println</code> ជា Overload ទេ?", options: ["ទេ", "បាទ មានកំណែសម្រាប់ Type ជាច្រើន", "មានតែ String", "មានតែ int"], answer: 1, explain: "println មាន Overload សម្រាប់ int, double, boolean, String, Object ជាដើម។" }
  ],
  summary: [
    "Overloading គឺ Method ឈ្មោះដូចគ្នា ប៉ុន្តែ Parameter ខុសគ្នា។",
    "ភាពខុសគ្នាអាចជាចំនួន, Type ឬលំដាប់ Parameter។",
    "Return Type តែម្នាក់ឯងមិនគ្រប់គ្រាន់ទេ។",
    "Java ជ្រើស Method នៅ Compile Time តាម Argument។",
    "Overloading មានច្រើនក្នុង Java Standard Library ដូចជា println។"
  ],
  takeaways: [
    "Overload ធ្វើឱ្យ API អានងាយ និងប្រើបានច្រើនបែប។",
    "គួររក្សាអាកប្បកិរិយាស្រដៀងគ្នារវាង Overload។",
    "ប្រយ័ត្ន Ambiguity ពេល Type អាចបំលែងទៅគ្នាទៅវិញទៅមក។",
    "Varargs អាចរួមផ្សំជាមួយ Overload ប៉ុន្តែត្រូវយល់ពីអាទិភាព។"
  ],
  sources: [
    { label: "Oracle — Overloading Methods", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html" },
    { label: "W3Schools — Java Method Overloading", url: "https://www.w3schools.com/java/java_methods_overloading.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "recursion",
  num: 13,
  part: 11,
  partTitle: "Methods",
  title: "Recursion",
  titleKh: "Recursion (Method ហៅខ្លួនឯង)",
  time: "៦០ នាទី",
  level: 4,
  intro: "Recursion គឺបច្ចេកទេសដែល Method មួយហៅខ្លួនឯង ដើម្បីដោះស្រាយបញ្ហាតូចជាង។ វាជាគំនិតដ៏មានឥទ្ធិពល ប៉ុន្តែត្រូវមាន <strong>Base Case</strong> ច្បាស់លាស់ ដើម្បីកុំឱ្យកើត StackOverflow។ អ្នកនឹងរៀន Factorial, Fibonacci, ផលបូក, Palindrome និងការប្រៀបធៀប Recursion ជាមួយ Iteration។",
  objectives: [
    "យល់ពី Base Case និង Recursive Case។",
    "សរសេរ Method Recursive សាមញ្ញបាន។",
    "អនុវត្ត Factorial និង Fibonacci ដោយ Recursion។",
    "យល់ពី Call Stack និង StackOverflow។",
    "ប្រៀបធៀប Recursion និង Iteration។"
  ],
  sections: [
    {
      title: "Recursion គឺជាអ្វី?",
      html: `<p><strong>Recursion</strong> គឺពេល Method មួយហៅខ្លួនឯងដើម្បីដោះស្រាយបញ្ហា។ គំនិតគឺ៖ បញ្ហាធំមួយអាចបំបែកទៅជាបញ្ហាតូចដូចគ្នា ហើយបន្តរហូតដល់ករណីតូចបំផុតដែលដោះស្រាយបានភ្លាមៗ។</p>
<p>Recursive Method ត្រូវមានពីរផ្នែក៖</p>
<ul>
<li><strong>Base Case</strong>៖ លក្ខខណ្ឌឈប់ ដែលដោះស្រាយបានដោយមិនហៅខ្លួនឯង។</li>
<li><strong>Recursive Case</strong>៖ ការហៅខ្លួនឯងជាមួយបញ្ហាតូចជាង។</li>
</ul>
<pre><code>public static int countdown(int n) {
    if (n == 0) {              // base case
        return 0;
    }
    System.out.println(n);
    return countdown(n - 1);   // recursive case
}</code></pre>
<div class="callout warn"><div class="callout-title">ខ្វះ Base Case</div><p>បើគ្មាន Base Case ឬ Base Case មិនអាចឈានដល់បាន Method នឹងហៅខ្លួនឯងរហូត ហើយបណ្តាលឱ្យ <code>StackOverflowError</code>។</p></div>`
    },
    {
      title: "Call Stack និង StackOverflow",
      html: `<p>ពេល Method ហៅ Method មួយ Java រក្សាព័ត៌មានក្នុង <strong>Call Stack</strong>។ រាល់ការហៅបន្ថែម Frame ថ្មី។ ពេល Method បញ្ចប់ Frame ត្រូវដកចេញ។</p>
<pre><code>factorial(4)
  → factorial(3)
    → factorial(2)
      → factorial(1)
        → returns 1
      → returns 2
    → returns 6
  → returns 24</code></pre>
<p>បើ Recursion ជ្រៅពេក Stack អាចពេញ ហើយ Java បោះ <strong>StackOverflowError</strong>។</p>
<pre><code>public static int infinite(int n) {
    return infinite(n + 1);   // no base case
}</code></pre>
<div class="callout info"><div class="callout-title">Stack Depth</div><p>Java មាន Stack Size កំណត់ (ជាធម្មតាប្រហែល ៥០០–១០០០+ ការហៅ)។ ដូច្នេះ Recursion សម្រាប់ទិន្នន័យធំពេកអាចមិនសមស្រប។</p></div>`
    },
    {
      title: "Factorial",
      html: `<p><strong>Factorial</strong> នៃ n (សរសេរជា n!) គឺ n × (n−1) × ... × 1។ ឧ. 5! = 5 × 4 × 3 × 2 × 1 = 120។</p>
<pre><code>public static int factorial(int n) {
    if (n == 0 || n == 1) {   // base case
        return 1;
    }
    return n * factorial(n - 1);   // recursive case
}</code></pre>
<p>ដំណើរការសម្រាប់ 4៖</p>
<pre><code>factorial(4) = 4 * factorial(3)
             = 4 * 3 * factorial(2)
             = 4 * 3 * 2 * factorial(1)
             = 4 * 3 * 2 * 1
             = 24</code></pre>
<div class="callout warn"><div class="callout-title">Overflow</div><p>Factorial លើស 12! លើសពីដែន int។ ប្រើ <code>long</code> សម្រាប់ 20! និង <code>BigInteger</code> សម្រាប់ចំនួនធំជាង។</p></div>`
    },
    {
      title: "Fibonacci",
      html: `<p><strong>Fibonacci</strong> គឺលំដាប់ 0, 1, 1, 2, 3, 5, 8, ... ដែលលេខនីមួយៗជាផលបូកលេខពីរមុន។</p>
<pre><code>public static int fib(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}</code></pre>
<p>Recursion នេះអានងាយ ប៉ុន្តែគណនាស្ទើរតែដដែលៗច្រើនដង (Overlapping Subproblems) ដូច្នេះយឺតសម្រាប់ n ធំ។</p>
<h3>ការកែឱ្យប្រសើរ</h3>
<p>អាចប្រើ Iteration ឬ Memoization (រក្សាលទ្ធផលដែលគណនារួច)។</p>
<pre><code>public static int fibFast(int n) {
    if (n <= 1) return n;
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        int next = a + b;
        a = b;
        b = next;
    }
    return b;
}</code></pre>`
    },
    {
      title: "Recursion លើ String និង Array",
      html: `<p>Recursion មិនកំណត់តែលើលេខទេ។ ឧទាហរណ៍ ការបញ្ច្រាស់ String៖</p>
<pre><code>public static String reverse(String s) {
    if (s.isEmpty()) {
        return s;
    }
    return reverse(s.substring(1)) + s.charAt(0);
}</code></pre>
<p>ការបូកធាតុ Array៖</p>
<pre><code>public static int sum(int[] arr, int index) {
    if (index == arr.length) {
        return 0;
    }
    return arr[index] + sum(arr, index + 1);
}</code></pre>
<p>ការពិនិត្យ Palindrome៖</p>
<pre><code>public static boolean isPalindrome(String s, int left, int right) {
    if (left >= right) {
        return true;
    }
    if (s.charAt(left) != s.charAt(right)) {
        return false;
    }
    return isPalindrome(s, left + 1, right - 1);
}</code></pre>
<div class="callout tip"><div class="callout-title">Index Parameter</div><p>ពេល Recursion លើ Array ឬ String អ្នកអាចបន្ថែម Parameter <code>index</code> ដើម្បីដឹងទីតាំងបច្ចុប្បន្ន។ នេះជាវិធីសាមញ្ញជាងការបង្កើត Array ថ្មីរាល់ដង។</p></div>`
    },
    {
      title: "Recursion vs Iteration",
      html: `<p>រាល់បញ្ហាដែលអាចដោះស្រាយដោយ Recursion ក៏អាចដោះស្រាយដោយ Loop ដែរ។ ការជ្រើសរើសអាស្រ័យលើបញ្ហា។</p>
<div class="table-wrap"><table><thead><tr><th>ចំណុច</th><th>Recursion</th><th>Iteration</th></tr></thead><tbody>
<tr><td>ភាពអាន</td><td>ច្បាស់សម្រាប់បញ្ហាបែងចែក (Tree, Divide &amp; Conquer)</td><td>ច្បាស់សម្រាប់ការរាប់ និង Loop ធម្មតា</td></tr>
<tr><td>Memory</td><td>ប្រើ Call Stack ច្រើន</td><td>ប្រើតិច</td></tr>
<tr><td>Performance</td><td>អាចយឺតបើមានការគណនាដដែលៗ</td><td>ជាធម្មតាលឿនជាង</td></tr>
<tr><td>ហានិភ័យ</td><td>StackOverflow</td><td>Infinite Loop</td></tr>
</tbody></table></div>
<div class="callout info"><div class="callout-title">គោលការណ៍</div><p>ប្រើ Recursion ពេលវាធ្វើឱ្យកូដច្បាស់ជាង (ឧ. Tree Traversal)។ ប្រើ Iteration ពេលបញ្ហាជា Loop ធម្មតា ឬទិន្នន័យធំ។</p></div>`
    }
  ],
  terms: [
    { en: "Recursion", kh: "ការហៅខ្លួនឯង", text: "Method ហៅខ្លួនឯងដើម្បីដោះស្រាយបញ្ហាតូចជាង។" },
    { en: "Base Case", kh: "ករណីឈប់", text: "លក្ខខណ្ឌដែលបញ្ឈប់ Recursion។" },
    { en: "Recursive Case", kh: "ករណីបន្ត", text: "ការហៅខ្លួនឯងជាមួយបញ្ហាតូចជាង។" },
    { en: "Call Stack", kh: "ជង់ការហៅ", text: "រចនាសម្ព័ន្ធរក្សា Method Calls ដែលកំពុងដំណើរការ។" },
    { en: "StackOverflow", kh: "ជង់ពេញ", text: "Error ពេល Call Stack ពេញដោយសារ Recursion ជ្រៅពេក។" }
  ],
  syntax: [
    { label: "Template", code: "public static int recurse(int n) {\n    if (baseCondition) {\n        return baseValue;\n    }\n    return recurse(smallerProblem);\n}" },
    { label: "Factorial", code: "public static int factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}" },
    { label: "Fibonacci", code: "public static int fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}" },
    { label: "Array sum", code: "public static int sum(int[] arr, int i) {\n    if (i == arr.length) return 0;\n    return arr[i] + sum(arr, i + 1);\n}" }
  ],
  examples: [
    {
      title: "Factorial",
      desc: "គណនា Factorial ដោយ Recursion ព្រមទាំងបង្ហាញដំណើរការ។",
      file: "FactorialRecursion.java",
      code: `public class FactorialRecursion {
    public static int factorial(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println("5! = " + factorial(5));
        System.out.println("0! = " + factorial(0));
    }
}`,
      output: "5! = 120\n0! = 1",
      lines: [
        "Base Case គឺ <code>n &lt;= 1</code> ដែល return 1។",
        "Recursive Case គឺ <code>n * factorial(n - 1)</code>។",
        "ការហៅបន្តរហូតដល់ n = 1 រួចត្រឡប់មកវិញគុណ។",
        "0! និង 1! ស្មើ 1 តាមនិយមន័យ។"
      ]
    },
    {
      title: "Fibonacci",
      desc: "បង្ហាញលេខ Fibonacci ដំបូងដោយ Recursion។",
      file: "FibonacciRecursion.java",
      code: `public class FibonacciRecursion {
    public static int fib(int n) {
        if (n <= 1) {
            return n;
        }
        return fib(n - 1) + fib(n - 2);
    }

    public static void main(String[] args) {
        for (int i = 0; i <= 8; i++) {
            System.out.print(fib(i) + " ");
        }
        System.out.println();
    }
}`,
      output: "0 1 1 2 3 5 8 13 21",
      lines: [
        "Base Case មានពីរ៖ <code>n == 0</code> return 0 និង <code>n == 1</code> return 1។",
        "Recursive Case បូកលទ្ធផលពីរមុន។",
        "ការហៅមានការគណនាដដែលៗ ដូច្នេះវាមិនមានប្រសិទ្ធភាពសម្រាប់ n ធំ។"
      ]
    },
    {
      title: "ផលបូក ១ ដល់ N",
      desc: "គណនាផលបូក ១ ដល់ N ដោយ Recursion។",
      file: "SumRecursion.java",
      code: `public class SumRecursion {
    public static int sum(int n) {
        if (n == 0) {
            return 0;
        }
        return n + sum(n - 1);
    }

    public static void main(String[] args) {
        System.out.println("Sum 1..10 = " + sum(10));
    }
}`,
      output: "Sum 1..10 = 55",
      lines: [
        "Base Case <code>n == 0</code> return 0។",
        "Recursive Case <code>n + sum(n - 1)</code>។",
        "ការហៅថយក្រោយរហូតដល់ 0 រួចបូកត្រឡប់មកវិញ។"
      ]
    },
    {
      title: "បញ្ច្រាស់ String",
      desc: "បញ្ច្រាស់អត្ថបទដោយ Recursion។",
      file: "ReverseRecursion.java",
      code: `public class ReverseRecursion {
    public static String reverse(String s) {
        if (s.isEmpty()) {
            return s;
        }
        return reverse(s.substring(1)) + s.charAt(0);
    }

    public static void main(String[] args) {
        System.out.println(reverse("Java"));
    }
}`,
      output: "avaJ",
      lines: [
        "Base Case គឺ String ទទេ ដែល return ខ្លួនវា។",
        "<code>s.substring(1)</code> យកអត្ថបទដោយលុប Character ដំបូង។",
        "<code>+ s.charAt(0)</code> ដាក់ Character ដំបូងនៅចុងក្រោយ។",
        "Recursion បន្តរហូត String ទទេ។"
      ]
    },
    {
      title: "Palindrome",
      desc: "ពិនិត្យ Palindrome ដោយ Two Pointers និង Recursion។",
      file: "PalindromeRecursion.java",
      code: `public class PalindromeRecursion {
    public static boolean isPalindrome(String s, int left, int right) {
        if (left >= right) {
            return true;
        }
        if (s.charAt(left) != s.charAt(right)) {
            return false;
        }
        return isPalindrome(s, left + 1, right - 1);
    }

    public static void main(String[] args) {
        String word = "level";
        System.out.println(isPalindrome(word, 0, word.length() - 1));
    }
}`,
      output: "true",
      lines: [
        "Base Case <code>left &gt;= right</code> មានន័យថាពិនិត្យគ្រប់គូហើយ។",
        "បើ Character ខុសគ្នា return false ភ្លាម។",
        "បើដូចគ្នា បន្តពិនិត្យខាងក្នុងដោយរំកិល left និង right។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ គ្មាន Base Case</span><br>Method ហៅខ្លួនឯងរហូត បណ្តាលឱ្យ StackOverflowError។', fix: "បន្ថែម Base Case ដែលឈានដល់បានជានិច្ច។" },
    { text: '<span class="bad-code">❌ បញ្ហាមិនតូចជាង</span><br>ហៅ <code>factorial(n)</code> ដោយគ្មានការថយ n។', fix: "ធានាថាការហៅនីមួយៗខិតជិត Base Case។" },
    { text: '<span class="bad-code">❌ Recursion ជ្រៅពេក</span><br>ប្រើ Recursion លើទិន្នន័យរាប់លាន។', fix: "ប្រើ Iteration ឬបង្កើន Stack Size ដោយប្រុងប្រយ័ត្ន។" },
    { text: '<span class="bad-code">❌ Fibonacci យឺត</span><br>Recursion សាមញ្ញគណនាដដែលៗច្រើន។', fix: "ប្រើ Memoization ឬ Iteration។" }
  ],
  tips: [
    "សរសេរ Base Case មុនគេ។",
    "គូរដំណើរការតាម Call Stack ដើម្បីយល់លំដាប់។",
    "សាកល្បងជាមួយ Input តូចៗមុន (0, 1, 2, 3)។",
    "ប្រើ Recursion ពេលវាធ្វើឱ្យកូដខ្លី និងច្បាស់ជាង Loop។",
    "សម្រាប់បញ្ហាដែលមាន Subproblems ដដែលៗ សូមពិចារណា Memoization។"
  ],
  exercises: [
    {
      level: 1,
      title: "រាប់ថយក្រោយ",
      desc: "សរសេរ Method Recursive <code>countdown(int n)</code> ដែលបង្ហាញ n ដល់ 1។",
      requirements: ["មាន Base Case", "បង្ហាញលេខ", "ហៅខ្លួនឯងជាមួយ n-1"],
      inputSample: "3",
      outputSample: "3\n2\n1",
      hint: "Base Case គឺ n == 0។",
      solutionCode: `public class CountdownRecursion {
    public static void countdown(int n) {
        if (n == 0) {
            return;
        }
        System.out.println(n);
        countdown(n - 1);
    }

    public static void main(String[] args) {
        countdown(3);
    }
}`
    },
    {
      level: 1,
      title: "ផលបូក ១ ដល់ N",
      desc: "គណនាផលបូក ១ ដល់ N ដោយ Recursion។",
      requirements: ["Base Case n == 0", "Recursive Case n + sum(n-1)"],
      inputSample: "5",
      outputSample: "15",
      hint: "return n + sum(n - 1)។",
      solutionCode: `public class SumRecursive {
    public static int sum(int n) {
        if (n == 0) {
            return 0;
        }
        return n + sum(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(sum(5));
    }
}`
    },
    {
      level: 2,
      title: "Factorial",
      desc: "គណនា n! ដោយ Recursion។",
      requirements: ["Base Case n <= 1", "Return n * factorial(n-1)", "សាកល្បង 5"],
      inputSample: "5",
      outputSample: "120",
      hint: "និយមន័យ 0! = 1។",
      solutionCode: `public class FactorialExercise {
    public static int factorial(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(factorial(5));
    }
}`
    },
    {
      level: 2,
      title: "ផលបូក Array",
      desc: "គណនាផលបូកធាតុ Array ដោយ Recursion និង Index Parameter។",
      requirements: ["ទទួល Array និង index", "Base Case index == length", "Return arr[index] + sum(...)"],
      inputSample: "{1, 2, 3, 4}",
      outputSample: "10",
      hint: "ប្រើ <code>sum(arr, index + 1)</code>។",
      solutionCode: `public class SumArrayRecursion {
    public static int sum(int[] arr, int index) {
        if (index == arr.length) {
            return 0;
        }
        return arr[index] + sum(arr, index + 1);
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4};
        System.out.println(sum(nums, 0));
    }
}`
    },
    {
      level: 3,
      title: "បញ្ច្រាស់ String",
      desc: "បញ្ច្រាស់អត្ថបទដោយ Recursion។",
      requirements: ["Base Case String ទទេ", "ប្រើ substring និង charAt"],
      inputSample: "Java",
      outputSample: "avaJ",
      hint: "return reverse(s.substring(1)) + s.charAt(0);",
      solutionCode: `public class ReverseRecursive {
    public static String reverse(String s) {
        if (s.isEmpty()) {
            return s;
        }
        return reverse(s.substring(1)) + s.charAt(0);
    }

    public static void main(String[] args) {
        System.out.println(reverse("Java"));
    }
}`
    },
    {
      level: 3,
      title: "Power",
      desc: "គណនា <code>base^exp</code> ដោយ Recursion។",
      requirements: ["Base Case exp == 0", "Return base * power(base, exp-1)", "គាំទ្រ exp ធំ"],
      inputSample: "base=2, exp=5",
      outputSample: "32",
      hint: "x^0 = 1។",
      solutionCode: `public class PowerRecursion {
    public static int power(int base, int exp) {
        if (exp == 0) {
            return 1;
        }
        return base * power(base, exp - 1);
    }

    public static void main(String[] args) {
        System.out.println(power(2, 5));
    }
}`
    },
    {
      level: 3,
      title: "រាប់ខ្ទង់",
      desc: "រាប់ចំនួនខ្ទង់នៃចំនួនគត់វិជ្ជមានដោយ Recursion។",
      requirements: ["Base Case n < 10", "Return 1 + countDigits(n / 10)"],
      inputSample: "12345",
      outputSample: "5",
      hint: "ការចែកដាច់ដោយ 10 លុបខ្ទង់ចុងក្រោយ។",
      solutionCode: `public class CountDigits {
    public static int countDigits(int n) {
        if (n < 10) {
            return 1;
        }
        return 1 + countDigits(n / 10);
    }

    public static void main(String[] args) {
        System.out.println(countDigits(12345));
    }
}`
    },
    {
      level: 2,
      title: "GCD ដោយ Recursion",
      desc: "គណនា GCD (Greatest Common Divisor) នៃចំនួនពីរដោយប្រើ Euclid's Algorithm។",
      requirements: ["Base Case b == 0", "Return gcd(b, a % b)"],
      inputSample: "gcd(48, 18)",
      outputSample: "6",
      hint: "នៅពេល <code>b == 0</code> លទ្ធផលគឺ <code>a</code>។",
      solutionCode: `public class GcdRecursive {
    public static int gcd(int a, int b) {
        if (b == 0) {
            return a;
        }
        return gcd(b, a % b);
    }

    public static void main(String[] args) {
        System.out.println(gcd(48, 18));
    }
}`
    }
  ],
  quiz: [
    { q: "តើ Recursion ត្រូវមានអ្វីជាចាំបាច់?", options: ["Loop", "Base Case", "Array", "Object"], answer: 1, explain: "Base Case បញ្ឈប់ Recursion មិនឱ្យ StackOverflow។" },
    { q: "តើអ្វីកើតឡើងបើគ្មាន Base Case?", options: ["Compile Error", "StackOverflowError", "Return 0", "Loop ឈប់ដោយស្វ័យប្រវត្តិ"], answer: 1, explain: "Method ហៅខ្លួនឯងរហូតរហូត Call Stack ពេញ ហើយបោះ StackOverflowError។" },
    { q: "តើ <code>factorial(4)</code> ស្មើប៉ុន្មាន?", options: ["12", "16", "24", "32"], answer: 2, explain: "4! = 4 × 3 × 2 × 1 = 24។" },
    { q: "តើ Fibonacci Recursive សាមញ្ញមានបញ្ហាអ្វី?", options: ["គណនាដដែលៗច្រើន", "មិនអាចដំណើរការ", "គ្មាន Base Case", "ប្រើ Memory តិចពេក"], answer: 0, explain: "វាគណនា Subproblems ដដែលៗ ដូច្នេះយឺតសម្រាប់ n ធំ។" },
    { q: "តើគួរប្រើអ្វីជំនួស Recursion ពេលទិន្នន័យធំ?", options: ["Iteration", "Nested if", "switch", "Array ៣ វិមាត្រ"], answer: 0, explain: "Iteration ជៀសវាង StackOverflow និងជាធម្មតាលឿនជាង។" }
  ],
  summary: [
    "Recursion គឺ Method ហៅខ្លួនឯងដើម្បីដោះស្រាយបញ្ហាតូចជាង។",
    "Base Case បញ្ឈប់ Recursion; Recursive Case បន្តហៅ។",
    "Call Stack រក្សា Method Calls; Recursion ជ្រៅពេកបណ្តាលឱ្យ StackOverflow។",
    "Factorial និង Fibonacci ជាឧទាហរណ៍បុរាណនៃ Recursion។",
    "Recursion និង Iteration អាចដោះស្រាយបញ្ហាដូចគ្នា ប៉ុន្តែខុសគ្នាខាងអាន និងប្រសិទ្ធភាព។"
  ],
  takeaways: [
    "សរសេរ Base Case មុនគេជានិច្ច។",
    "ធានាថាការហៅនីមួយៗខិតជិត Base Case។",
    "Recursion ស្អាតសម្រាប់បញ្ហាបែងចែក ប៉ុន្តែកុំប្រើជាមួយទិន្នន័យធំពេក។",
    "យល់ Call Stack ដើម្បី Debug Recursion។",
    "Fibonacci Recursive ត្រូវការ Memoization ដើម្បីមានប្រសិទ្ធភាព។"
  ],
  sources: [
    { label: "Oracle — Recursion", url: "https://docs.oracle.com/javase/tutorial/java/data/recursion.html" },
    { label: "W3Schools — Java Recursion", url: "https://www.w3schools.com/java/java_recursion.asp" }
  ]
});
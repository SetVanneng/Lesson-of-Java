/* Lessons 07–08: Conditional Statements and Loops */
window.JAVA_LESSONS = window.JAVA_LESSONS || [];

window.JAVA_LESSONS.push({
  id: "conditional-statements",
  num: 7,
  part: 7,
  partTitle: "Conditional Statements",
  title: "Conditional Statements",
  titleKh: "លក្ខខណ្ឌ (if, else, switch)",
  time: "៧៥ នាទី",
  level: 2,
  intro: "Conditional Statements អនុញ្ញាតឱ្យកម្មវិធីជ្រើសរើសផ្លូវដំណើរការផ្សេងៗគ្នាតាមលក្ខខណ្ឌ។ អ្នកនឹងរៀន <strong>if</strong>, <strong>if-else</strong>, <strong>else-if</strong>, Nested if, <strong>switch</strong> និង Switch Expression សម័យទំនើប ព្រមទាំងអនុវត្តលើស្ថានភាពជីវិតពិត។",
  objectives: [
    "សរសេរ if, if-else និង else-if បានត្រឹមត្រូវ។",
    "ប្រើ Logical Operators ក្នុងលក្ខខណ្ឌស្មុគស្មាញបាន។",
    "យល់ពី Nested if និងពេលគួរប្រើ។",
    "ប្រើ switch Statement និងយល់ពី Fall-through។",
    "ប្រើ Switch Expression សម័យទំនើបជាមួយ <code>-&gt;</code> បាន។",
    "ជ្រើសរើសរវាង if និង switch បានសមស្រប។"
  ],
  sections: [
    {
      title: "លក្ខខណ្ឌគឺជាអ្វី?",
      html: `<p>ក្នុងជីវិតពិត យើងសម្រេចចិត្តរាល់ថ្ងៃ៖ “បើភ្លៀង ខ្ញុំនឹងយកឆ័ត្រ”, “បើពិន្ទុលើស ៥០ ខ្ញុំជាប់”។ <strong>Conditional Statement</strong> គឺជារចនាសម្ព័ន្ធដែលអនុញ្ញាតឱ្យកម្មវិធីធ្វើការសម្រេចចិត្តបែបនេះ។</p>
<p>លក្ខខណ្ឌក្នុង Java ត្រូវតែជា <strong>boolean</strong> — គឺ <code>true</code> ឬ <code>false</code>។ មិនដូច Python ឬ C ទេ Java មិនអនុញ្ញាតឱ្យប្រើ 0 ឬ 1 ជា boolean ទេ។ ដូច្នេះ <code>if (1)</code> គឺខុស ហើយត្រូវសរសេរ <code>if (x != 0)</code> ជំនួស។</p>
<div class="callout info"><div class="callout-title">Boolean Expression</div><p>Boolean Expression គឺ Expression ដែលផ្តល់លទ្ធផល true ឬ false ដូចជា <code>age &gt;= 18</code>, <code>score == 100</code> ឬ <code>name.equals("Dara")</code>។</p></div>`
    },
    {
      title: "if Statement",
      html: `<p>Syntax មូលដ្ឋាន៖</p>
<pre><code>if (condition) {
    // statements run only when condition is true
}</code></pre>
<p>ឧទាហរណ៍៖</p>
<pre><code>int score = 75;
if (score &gt;= 50) {
    System.out.println("You passed!");
}
System.out.println("Program continues.");</code></pre>
<p>ប្រសិនបើ <code>score &gt;= 50</code> ពិត ប្លុកខាងក្នុងត្រូវដំណើរការ។ បើមិនពិត វារំលងទៅ Statement បន្ទាប់។ ចំណុចសំខាន់គឺ <code>if</code> មិនបង្ខំឱ្យមាន <code>else</code> ទេ។</p>
<div class="callout tip"><div class="callout-title">Braces គួរដាក់ជានិច្ច</div><p>ទោះបី Java អនុញ្ញាតឱ្យលុប <code>{ }</code> ពេលមាន Statement តែមួយក៏ដោយ សូមដាក់ Braces ជានិច្ច។ វាជួយការពារកំហុសពេលកែកូដក្រោយមក។</p></div>`
    },
    {
      title: "if-else និង else-if",
      html: `<p><strong>if-else</strong> អនុញ្ញាតឱ្យយើងជ្រើសរើសមួយក្នុងពីរផ្លូវ៖</p>
<pre><code>if (score &gt;= 50) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}</code></pre>
<p><strong>else-if</strong> ប្រើពេលមានជម្រើសច្រើន។ Java ពិនិត្យលក្ខខណ្ឌពីលើចុះក្រោម ហើយឈប់នៅលក្ខខណ្ឌដំបូងដែលពិត៖</p>
<pre><code>int score = 82;

if (score &gt;= 90) {
    System.out.println("A");
} else if (score &gt;= 80) {
    System.out.println("B");
} else if (score &gt;= 70) {
    System.out.println("C");
} else if (score &gt;= 50) {
    System.out.println("D");
} else {
    System.out.println("F");
}</code></pre>
<div class="callout warn"><div class="callout-title">លំដាប់សំខាន់</div><p>ត្រូវដាក់លក្ខខណ្ឌតឹងជាងមុន។ ប្រសិនបើអ្នកដាក់ <code>score &gt;= 50</code> មុន <code>score &gt;= 90</code> នោះពិន្ទុ 95 នឹងចូលសាខា “D” មុន ហើយមិនដែលដល់ “A” ទេ។</p></div>
<p>ចំណុចសំខាន់៖ ប្រសិនបើលក្ខខណ្ឌជាច្រើនអាចពិតក្នុងពេលតែមួយ មានតែសាខាដំបូងប៉ុណ្ណោះដែលដំណើរការ។</p>`
    },
    {
      title: "Nested if និង Logical Conditions",
      html: `<p><strong>Nested if</strong> គឺ if មួយនៅក្នុង if មួយទៀត។ វាប្រើសម្រាប់ការសម្រេចចិត្តជាដំណាក់កាល ប៉ុន្តែមិនគួរជ្រមុជជ្រៅពេកទេ ព្រោះធ្វើឱ្យកូដអានពិបាក។</p>
<pre><code>boolean hasAccount = true;
boolean isVerified = false;

if (hasAccount) {
    if (isVerified) {
        System.out.println("Welcome!");
    } else {
        System.out.println("Please verify your account.");
    }
} else {
    System.out.println("Please create an account.");
}</code></pre>
<p>យើងអាចសរសេរដោយប្រើ Logical Operators ដើម្បីខ្លីជាង៖</p>
<pre><code>if (hasAccount &amp;&amp; isVerified) {
    System.out.println("Welcome!");
} else if (hasAccount) {
    System.out.println("Please verify your account.");
} else {
    System.out.println("Please create an account.");
}</code></pre>
<div class="callout tip"><div class="callout-title">ជៀសវាង Nested ជ្រៅ</div><p>ប្រសិនបើអ្នកមាន if ជ្រមុជលើសពី ២–៣ កម្រិត សូមពិចារណាបំបែកជា Method ឬប្រើ Early Return ដើម្បីធ្វើឱ្យកូដអានងាយ។</p></div>`
    },
    {
      title: "switch Statement",
      html: `<p><strong>switch</strong> ប្រើពេលយើងចង់ប្រៀបធៀប Variable មួយជាមួយតម្លៃជាក់លាក់ជាច្រើន។ វាអានងាយជាង else-if វែងៗ ពេលជម្រើសជាតម្លៃថេរ។</p>
<pre><code>int day = 3;
String dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Unknown";
}

System.out.println(dayName);   // Wednesday</code></pre>
<p><strong>break</strong> មានសារៈសំខាន់ណាស់។ ប្រសិនបើខ្វះ break កម្មវិធីនឹងបន្តទៅ case បន្ទាប់ (Fall-through) ហើយអាចផ្តល់លទ្ធផលខុស។</p>
<h3>Fall-through ដែលមានប្រយោជន៍</h3>
<p>ពេលខ្លះយើងចង់ឱ្យ case ច្រើនធ្វើការងារដូចគ្នា៖</p>
<pre><code>switch (day) {
    case 6:
    case 7:
        System.out.println("Weekend");
        break;
    default:
        System.out.println("Weekday");
}</code></pre>
<div class="callout warn"><div class="callout-title">switch គាំទ្រអ្វី?</div><p>switch បុរាណគាំទ្រ int, char, String, enum និង Wrapper Types (Byte, Short, Integer, Character)។ វាមិនគាំទ្រ long, float ឬ double ទេ។</p></div>`
    },
    {
      title: "Switch Expression សម័យទំនើប",
      html: `<p>ចាប់ពី Java 14 មក switch អាចប្រើជា Expression ដែលផ្តល់តម្លៃត្រឡប់មកវិញ និងប្រើ <code>-&gt;</code> ជំនួស <code>:</code>។ វិធីនេះខ្លីជាង និងមិនចាំបាច់ break៖</p>
<pre><code>int day = 3;
String dayName = switch (day) {
    case 1 -&gt; "Monday";
    case 2 -&gt; "Tuesday";
    case 3 -&gt; "Wednesday";
    case 4, 5 -&gt; "Weekday";
    case 6, 7 -&gt; "Weekend";
    default -&gt; "Unknown";
};
System.out.println(dayName);</code></pre>
<p>ប្រសិនបើត្រូវការកូដច្រើនបន្ទាត់ក្នុង case មួយ អ្នកអាចប្រើ Block និង <code>yield</code>៖</p>
<pre><code>String type = switch (day) {
    case 6, 7 -&gt; {
        System.out.println("No work today");
        yield "Weekend";
    }
    default -&gt; "Weekday";
};</code></pre>
<div class="callout info"><div class="callout-title">តើគួរប្រើមួយណា?</div><p>ប្រើ Switch Expression (<code>-&gt;</code>) ជាអាទិភាពសម្រាប់កូដថ្មី ព្រោះវាខ្លី និងកាត់បន្ថយកំហុស Fall-through។ switch បុរាណនៅតែប្រើបាន និងអ្នកនឹងឃើញវាក្នុងកូដចាស់។</p></div>`
    },
    {
      title: "ជ្រើសរើសរវាង if និង switch",
      html: `<ul>
<li>ប្រើ <strong>if</strong> ពេលលក្ខខណ្ឌជា Range ឬ Expression ស្មុគស្មាញ ដូចជា <code>score &gt;= 80 &amp;&amp; score &lt; 90</code>។</li>
<li>ប្រើ <strong>switch</strong> ពេលប្រៀបធៀបតម្លៃថេរជាច្រើន ដូចជា Menu, Day of Week ឬ Command។</li>
<li>ប្រើ <strong>ternary</strong> ពេលជ្រើសរើសតម្លៃខ្លីតែមួយ។</li>
<li>កុំប្រើ switch សម្រាប់ Boolean ព្រោះ if អានងាយជាង។</li>
</ul>
<p>គោលការណ៍សំខាន់៖ ជ្រើសរើសរចនាសម្ព័ន្ធដែលអានងាយបំផុត មិនមែនអ្វីដែលខ្លីបំផុតនោះទេ។</p>`
    }
  ],
  terms: [
    { en: "Condition", kh: "លក្ខខណ្ឌ", text: "Expression Boolean ដែលកំណត់ថាតើកូដណាត្រូវដំណើរការ។" },
    { en: "Branch", kh: "សាខា", text: "ផ្លូវដំណើរការមួយក្នុងចំណោមជម្រើសជាច្រើន។" },
    { en: "Nested if", kh: "if ជ្រមុជ", text: "if ដែលស្ថិតនៅក្នុង if មួយទៀត។" },
    { en: "Fall-through", kh: "ការធ្លាក់ចុះ", text: "អាកប្បកិរិយារបស់ switch ដែលបន្តទៅ case បន្ទាប់ បើគ្មាន break។" },
    { en: "Switch Expression", kh: "Switch ជា Expression", text: "switch សម័យថ្មីដែលផ្តល់តម្លៃត្រឡប់ និងប្រើ ->។" },
    { en: "Default", kh: "លំនាំដើម", text: "សាខាដែលដំណើរការពេលគ្មាន case ណាត្រូវគ្នា។" }
  ],
  syntax: [
    { label: "if", code: "if (condition) {\n    // code\n}" },
    { label: "if-else", code: "if (condition) {\n    // true branch\n} else {\n    // false branch\n}" },
    { label: "else-if", code: "if (score >= 90) {\n    // A\n} else if (score >= 80) {\n    // B\n} else {\n    // other\n}" },
    { label: "switch (classic)", code: "switch (choice) {\n    case 1:\n        // code\n        break;\n    case 2:\n        // code\n        break;\n    default:\n        // default code\n}" },
    { label: "switch expression", code: 'String result = switch (choice) {\n    case 1 -> "One";\n    case 2 -> "Two";\n    default -> "Other";\n};' },
    { label: "Ternary", code: 'String status = age >= 18 ? "Adult" : "Minor";' }
  ],
  examples: [
    {
      title: "ពិនិត្យពិន្ទុ",
      desc: "ប្រើ if-else-if ដើម្បីកំណត់និទស្សន្តពិន្ទុ។ សូមសង្កេតលំដាប់លក្ខខណ្ឌពីតឹងទៅធូរ។",
      file: "GradeCalculator.java",
      code: `public class GradeCalculator {
    public static void main(String[] args) {
        int score = 82;

        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else if (score >= 50) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");
        }

        System.out.println("Score: " + score);
    }
}`,
      output: "Grade: B\nScore: 82",
      lines: [
        "<code>score &gt;= 90</code> មិនពិត ដូច្នេះទៅពិនិត្យបន្ទាប់។",
        "<code>score &gt;= 80</code> ពិត (82 ≥ 80) ដូច្នេះបង្ហាញ B ហើយឈប់។",
        "សាខា else-if ក្រោមមិនត្រូវពិនិត្យទេ ព្រោះរកឃើញសាខាត្រូវហើយ។"
      ]
    },
    {
      title: "Nested if សម្រាប់ការចូលប្រើ",
      desc: "ឧទាហរណ៍នេះពិនិត្យថាអ្នកប្រើមានគណនី និងបានផ្ទៀងផ្ទាត់ហើយឬនៅ។",
      file: "LoginCheck.java",
      code: `public class LoginCheck {
    public static void main(String[] args) {
        boolean hasAccount = true;
        boolean isVerified = false;
        boolean isBanned = false;

        if (hasAccount) {
            if (isBanned) {
                System.out.println("Your account is suspended.");
            } else if (isVerified) {
                System.out.println("Welcome back!");
            } else {
                System.out.println("Please verify your email.");
            }
        } else {
            System.out.println("Please create an account.");
        }
    }
}`,
      output: "Please verify your email.",
      lines: [
        "if ខាងក្រៅពិនិត្យ <code>hasAccount</code>។ ព្រោះវាពិត កូដខាងក្នុងត្រូវដំណើរការ។",
        "if ខាងក្នុងពិនិត្យ <code>isBanned</code> មុន បន្ទាប់មក <code>isVerified</code>។",
        "បើ isVerified មិនពិត សាខា else បង្ហាញសារសុំផ្ទៀងផ្ទាត់។"
      ]
    },
    {
      title: "switch បុរាណសម្រាប់ថ្ងៃ",
      desc: "ប្រើ switch ដើម្បីបំលែងលេខថ្ងៃទៅជាឈ្មោះថ្ងៃ។ សូមសង្កេត break នៅចុង case នីមួយៗ។",
      file: "DayName.java",
      code: `public class DayName {
    public static void main(String[] args) {
        int day = 5;
        String name;

        switch (day) {
            case 1:
                name = "Monday";
                break;
            case 2:
                name = "Tuesday";
                break;
            case 3:
                name = "Wednesday";
                break;
            case 4:
                name = "Thursday";
                break;
            case 5:
                name = "Friday";
                break;
            case 6:
            case 7:
                name = "Weekend";
                break;
            default:
                name = "Invalid day";
        }

        System.out.println("Day " + day + ": " + name);
    }
}`,
      output: "Day 5: Friday",
      lines: [
        "<code>switch (day)</code> ប្រៀបធៀប day ជាមួយ case នីមួយៗ។",
        "case 5 ត្រូវគ្នា ដូច្នេះ name = \"Friday\"។",
        "<code>break</code> បញ្ឈប់ switch មិនឱ្យ Fall-through ទៅ case 6។",
        "case 6 និង 7 ត្រូវបានដាក់ជាប់គ្នា ដើម្បីធ្វើការងារដូចគ្នា។",
        "<code>default</code> ដំណើរការពេលគ្មាន case ត្រូវគ្នា។"
      ]
    },
    {
      title: "Switch Expression សម័យថ្មី",
      desc: "សរសេរ switch ជា Expression ដែលផ្តល់តម្លៃដោយផ្ទាល់។ កូដខ្លីជាង និងគ្មាន break។",
      file: "DayNameModern.java",
      code: `public class DayNameModern {
    public static void main(String[] args) {
        int day = 6;

        String name = switch (day) {
            case 1 -> "Monday";
            case 2 -> "Tuesday";
            case 3 -> "Wednesday";
            case 4 -> "Thursday";
            case 5 -> "Friday";
            case 6, 7 -> "Weekend";
            default -> "Invalid day";
        };

        String type = switch (day) {
            case 6, 7 -> {
                System.out.println("No class today.");
                yield "Rest day";
            }
            default -> "Working day";
        };

        System.out.println("Name: " + name);
        System.out.println("Type: " + type);
    }
}`,
      output: "No class today.\nName: Weekend\nType: Rest day",
      lines: [
        "<code>case 1 -&gt; \"Monday\";</code> ជា Switch Rule ដែលផ្តល់តម្លៃដោយផ្ទាល់។",
        "<code>case 6, 7</code> អនុញ្ញាតឱ្យ case ច្រើនប្រើ Rule តែមួយ។",
        "Block <code>{ ... }</code> អនុញ្ញាតឱ្យមាន Statement ច្រើន ហើយ <code>yield</code> ផ្តល់តម្លៃត្រឡប់។",
        "Switch Expression ត្រូវគ្របដណ្តប់គ្រប់ករណី ឬមាន default។"
      ]
    },
    {
      title: "ការគណនាប្រាក់ថ្លៃសេវា",
      desc: "ប្រើ else-if ដើម្បីកំណត់ថ្លៃសេវាតាមប្រភេទសមាជិក និង if ជាមួយ Logical Operator សម្រាប់ការបញ្ចុះតម្លៃ។",
      file: "ServiceFee.java",
      code: `public class ServiceFee {
    public static void main(String[] args) {
        String memberType = "Gold";
        double price = 100.0;
        boolean isNewCustomer = true;
        double discount = 0.0;

        if (memberType.equals("Gold")) {
            discount = 0.20;
        } else if (memberType.equals("Silver")) {
            discount = 0.10;
        } else if (memberType.equals("Bronze")) {
            discount = 0.05;
        } else {
            discount = 0.0;
        }

        if (isNewCustomer && discount < 0.20) {
            discount = discount + 0.05;
        }

        double finalPrice = price * (1 - discount);
        System.out.println("Member: " + memberType);
        System.out.println("Discount: " + (discount * 100) + "%");
        System.out.println("Final price: " + finalPrice);
    }
}`,
      output: "Member: Gold\nDiscount: 20.0%\nFinal price: 80.0",
      lines: [
        "ប្រើ <code>memberType.equals(\"Gold\")</code> មិនមែន <code>==</code> ព្រោះជា String។",
        "else-if កំណត់អត្រាបញ្ចុះតម្លៃតាមប្រភេទសមាជិក។",
        "<code>isNewCustomer &amp;&amp; discount &lt; 0.20</code> បន្ថែមបញ្ចុះ ៥% តែពេលអតិថិជនថ្មី និងបញ្ចុះមិនទាន់ ២០%។",
        "<code>price * (1 - discount)</code> គណនាតម្លៃបន្ទាប់ពីបញ្ចុះ។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ប្រើ = ក្នុង if</span><br><code>if (score = 50)</code> គឺ Assignment មិនមែន Comparison។', fix: "ប្រើ <code>if (score == 50)</code>។" },
    { text: '<span class="bad-code">❌ ប្រៀបធៀប String ដោយ ==</span><br><code>if (name == "Dara")</code> មិនពិនិត្យអត្ថបទដោយជាក់លាក់។', fix: "ប្រើ <code>if (name.equals(\"Dara\"))</code> ឬ <code>equalsIgnoreCase</code>។" },
    { text: '<span class="bad-code">❌ ខ្វះ break ក្នុង switch</span><br>Case នឹង Fall-through ទៅ case បន្ទាប់។', fix: "បន្ថែម <code>break;</code> ឬប្រើ Switch Expression ជាមួយ <code>-&gt;</code>។" },
    { text: '<span class="bad-code">❌ លំដាប់ else-if ខុស</span><br>ដាក់ <code>score &gt;= 50</code> មុន <code>score &gt;= 90</code> ធ្វើឱ្យពិន្ទុខ្ពស់ចូលសាខាទាប។', fix: "ដាក់លក្ខខណ្ឌតឹងបំផុតមុន ឬប្រើ switch តាម Range ដោយបំបែកជា Method។" },
    { text: '<span class="bad-code">❌ if គ្មាន Braces ហើយបន្ថែម Statement</span><br>Statement ទីពីរនឹងនៅក្រៅ if ដោយមិនដឹងខ្លួន។', fix: "ដាក់ <code>{ }</code> ជានិច្ច។" }
  ],
  tips: [
    "សរសេរលក្ខខណ្ឌឱ្យអានដូចភាសាមនុស្ស ឧ. <code>isEligible</code> ជំនួស Expression វែងៗ។",
    "ប្រើ Switch Expression សម្រាប់ការផ្គូផ្គងតម្លៃថេរ។",
    "កុំធ្វើ Nested if ជ្រៅ — បំបែកជា Method ឬប្រើ Early Return។",
    "សាកល្បងគ្រប់សាខា (Boundary Values) ដូចជា 49, 50, 89, 90។"
  ],
  exercises: [
    {
      level: 1,
      title: "ពិនិត្យចំនួនវិជ្ជមាន",
      desc: "ពិនិត្យថាចំនួនមួយជាវិជ្ជមាន អវិជ្ជមាន ឬសូន្យ។",
      requirements: ["ប្រើ if-else-if", "បង្ហាញ Positive, Negative ឬ Zero"],
      inputSample: "-5",
      outputSample: "Negative",
      hint: "ពិនិត្យ > 0, < 0 និង else។",
      solutionCode: `public class NumberSign {
    public static void main(String[] args) {
        int number = -5;
        if (number > 0) {
            System.out.println("Positive");
        } else if (number < 0) {
            System.out.println("Negative");
        } else {
            System.out.println("Zero");
        }
    }
}`
    },
    {
      level: 1,
      title: "ចំនួនគូ ឬសេស",
      desc: "ប្រើ if-else និង Modulus ដើម្បីពិនិត្យចំនួនគូ ឬសេស។",
      requirements: ["ប្រើ %", "បង្ហាញ Even ឬ Odd"],
      inputSample: "7",
      outputSample: "Odd",
      hint: "<code>number % 2 == 0</code> គឺគូ។",
      solutionCode: `public class EvenOdd {
    public static void main(String[] args) {
        int number = 7;
        if (number % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
    }
}`
    },
    {
      level: 2,
      title: "និទស្សន្តពិន្ទុ",
      desc: "កំណត់និទស្សន្ត A, B, C, D, F តាមពិន្ទុ ដោយប្រើ else-if។ A ≥ 90, B ≥ 80, C ≥ 70, D ≥ 50, ក្រោម 50 គឺ F។",
      requirements: ["ប្រើ else-if", "គ្របដណ្តប់គ្រប់ករណី", "សាកល្បងពិន្ទុ ៩៥ និង ៤៥"],
      inputSample: "95",
      outputSample: "A",
      hint: "ដាក់លក្ខខណ្ឌខ្ពស់មុន។",
      solutionCode: `public class Grade {
    public static void main(String[] args) {
        int score = 95;
        if (score >= 90) {
            System.out.println("A");
        } else if (score >= 80) {
            System.out.println("B");
        } else if (score >= 70) {
            System.out.println("C");
        } else if (score >= 50) {
            System.out.println("D");
        } else {
            System.out.println("F");
        }
    }
}`
    },
    {
      level: 2,
      title: "Menu ដោយ switch",
      desc: "បង្កើត Menu មាន ១. Add, ២. Edit, ៣. Delete, ៤. Exit។ ប្រើ switch ដើម្បីបង្ហាញសារតាមជម្រើស។",
      requirements: ["ប្រើ switch", "មាន default", "បង្ហាញ Invalid choice បើខុស"],
      inputSample: "2",
      outputSample: "You selected Edit",
      hint: "ដាក់ break រាល់ case។",
      solutionCode: `public class Menu {
    public static void main(String[] args) {
        int choice = 2;
        switch (choice) {
            case 1:
                System.out.println("You selected Add");
                break;
            case 2:
                System.out.println("You selected Edit");
                break;
            case 3:
                System.out.println("You selected Delete");
                break;
            case 4:
                System.out.println("You selected Exit");
                break;
            default:
                System.out.println("Invalid choice");
        }
    }
}`
    },
    {
      level: 2,
      title: "សិទ្ធិចូលប្រើ",
      desc: "អ្នកប្រើអាចចូលប្រើបាន បើមានគណនី និង (isAdmin ឬ isOwner)។ បង្ហាញ Access granted ឬ Access denied។",
      requirements: ["ប្រើ && និង ||", "សាកល្បងយ៉ាងហោចណាស់ ២ ករណី"],
      inputSample: "hasAccount=true, isAdmin=false, isOwner=true",
      outputSample: "Access granted",
      hint: "ប្រើ <code>hasAccount &amp;&amp; (isAdmin || isOwner)</code>។",
      solutionCode: `public class AccessControl {
    public static void main(String[] args) {
        boolean hasAccount = true;
        boolean isAdmin = false;
        boolean isOwner = true;

        if (hasAccount && (isAdmin || isOwner)) {
            System.out.println("Access granted");
        } else {
            System.out.println("Access denied");
        }
    }
}`
    },
    {
      level: 3,
      title: "គណនាពន្ធជាជាន់",
      desc: "គណនាពន្ធតាមប្រាក់ខែ៖ ≤ 1000 = 0%, 1001–2000 = 10%, 2001–3000 = 15%, លើ 3000 = 20%។ បង្ហាញអត្រា និងពន្ធ។",
      requirements: ["ប្រើ else-if", "គណនាពន្ធជា double", "សាកល្បងតម្លៃ ១៥០០ និង ៣៥០០"],
      inputSample: "3500",
      outputSample: "Rate: 20%\nTax: 700.0",
      hint: "ប្រើ <code>salary &lt;= 1000</code> ជាលក្ខខណ្ឌដំបូង។",
      solutionCode: `public class TaxBrackets {
    public static void main(String[] args) {
        double salary = 3500;
        double rate;

        if (salary <= 1000) {
            rate = 0.0;
        } else if (salary <= 2000) {
            rate = 0.10;
        } else if (salary <= 3000) {
            rate = 0.15;
        } else {
            rate = 0.20;
        }

        double tax = salary * rate;
        System.out.println("Rate: " + (int) (rate * 100) + "%");
        System.out.println("Tax: " + tax);
    }
}`
    },
    {
      level: 3,
      title: "Switch Expression សម្រាប់ខែ",
      desc: "ប្រើ Switch Expression ដើម្បីបង្ហាញចំនួនថ្ងៃក្នុងខែ។ ខែ ២ មាន ២៨ ថ្ងៃ (មិនគិតឆ្នាំបង្គ្រប់)។",
      requirements: ["ប្រើ switch expression", "គាំទ្រខែ ១–១២", "មាន default"],
      inputSample: "2",
      outputSample: "Month 2 has 28 days",
      hint: "ប្រើ <code>case 4, 6, 9, 11 -&gt; 30;</code>។",
      solutionCode: `public class DaysInMonth {
    public static void main(String[] args) {
        int month = 2;
        int days = switch (month) {
            case 1, 3, 5, 7, 8, 10, 12 -> 31;
            case 4, 6, 9, 11 -> 30;
            case 2 -> 28;
            default -> 0;
        };
        System.out.println("Month " + month + " has " + days + " days");
    }
}`
    },
    {
      level: 3,
      title: "ហ្គេមតូច៖ ថ្ម កន្សោម កន្ត្រៃ",
      desc: "កំណត់ជម្រើសអ្នកលេង និងកុំព្យូទ័រ (1=Rock, 2=Paper, 3=Scissors) រួចកំណត់អ្នកឈ្នះដោយ if/switch។",
      requirements: ["គាំទ្រជម្រើស ១–៣", "បង្ហាញ Draw, Player wins ឬ Computer wins", "សាកល្បង case ទាំងអស់"],
      inputSample: "player=1, computer=3",
      outputSample: "Player wins",
      hint: "Rock beats Scissors, Scissors beats Paper, Paper beats Rock។",
      solutionCode: `public class RockPaperScissors {
    public static void main(String[] args) {
        int player = 1;
        int computer = 3;

        if (player == computer) {
            System.out.println("Draw");
        } else if ((player == 1 && computer == 3)
                || (player == 2 && computer == 1)
                || (player == 3 && computer == 2)) {
            System.out.println("Player wins");
        } else {
            System.out.println("Computer wins");
        }
    }
}`
    },
    {
      level: 2,
      title: "ចាត់ថ្នាក់ BMI",
      desc: "អាន BMI រួចចាត់ថ្នាក់ជា Underweight, Normal, Overweight ឬ Obese ដោយប្រើ if/else if។",
      requirements: ["ប្រើ if/else if/else", "កំណត់ចន្លោះតម្លៃ", "បង្ហាញថ្នាក់"],
      inputSample: "bmi=23.5",
      outputSample: "Normal",
      hint: "<code>bmi &lt; 18.5</code>, <code>bmi &lt; 25</code>, <code>bmi &lt; 30</code>, បើមិនដូច្នេះ Obese។",
      solutionCode: `public class BmiCategory {
    public static void main(String[] args) {
        double bmi = 23.5;

        if (bmi < 18.5) {
            System.out.println("Underweight");
        } else if (bmi < 25) {
            System.out.println("Normal");
        } else if (bmi < 30) {
            System.out.println("Overweight");
        } else {
            System.out.println("Obese");
        }
    }
}`,
      solution: "if/else if ពិនិត្យតាមលំដាប់ចន្លោះតម្លៃ។ លក្ខខណ្ឌដំបូងដែលពិតនឹងដំណើរការ។"
    },
    {
      level: 3,
      title: "គណនាតម្លៃសំបុត្រភាពយន្ត",
      desc: "គណនាតម្លៃសំបុត្រតាមអាយុ៖ ក្រោម 5 ឆ្នាំឥតគិតថ្លៃ, 5–12 កែង, 60 ឆ្នាំឡើងទៅបញ្ចុះ 40%, ផ្សេងទៀតពេញតម្លៃ។ បើចុងសប្តាហ៍បូកបន្ថែម $2។",
      requirements: ["ប្រើ if/else if", "ប្រើ boolean weekend", "បង្ហាញតម្លៃចុងក្រោយ"],
      inputSample: "age=65, weekend=false",
      outputSample: "Ticket: $6.0",
      hint: "កំណត់ base=10 រួចកែតម្រូវតាមអាយុ បន្ទាប់មកបើ weekend បូក 2។",
      solutionCode: `public class MovieTicket {
    public static void main(String[] args) {
        int age = 65;
        boolean weekend = false;
        double price = 10;

        if (age < 5) {
            price = 0;
        } else if (age <= 12) {
            price = 5;
        } else if (age >= 60) {
            price = 6;
        }

        if (weekend) {
            price += 2;
        }

        System.out.println("Ticket: $" + price);
    }
}`,
      solution: "កំណត់តម្លៃមូលដ្ឋានមុន រួចកែតម្រូវតាមអាយុ ហើយបូកបន្ថែមបើជាចុងសប្តាហ៍។"
    }
  ],
  quiz: [
    { q: "តើលក្ខខណ្ឌក្នុង if ត្រូវជា Type អ្វី?", options: ["int", "String", "boolean", "double"], answer: 2, explain: "Java ត្រូវការ boolean សម្រាប់ if។ មិនអាចប្រើ 0/1 ជំនួសបានទេ។" },
    { q: "តើ else-if ពិនិត្យលក្ខខណ្ឌតាមលំដាប់ណា?", options: ["ក្រោមទៅលើ", "លើចុះក្រោម", "ចៃដន្យ", "តាមអក្សរ"], answer: 1, explain: "Java ពិនិត្យពីលើចុះក្រោម ហើយឈប់នៅលក្ខខណ្ឌដំបូងដែលពិត។" },
    { q: "តើ break ក្នុង switch ធ្វើអ្វី?", options: ["ចាប់ផ្តើម switch", "បញ្ឈប់ switch", "បង្កើត Loop", "បង្ហាញ Error"], answer: 1, explain: "break បញ្ឈប់ switch មិនឱ្យ Fall-through។" },
    { q: "តើ Switch Expression ចាប់ផ្តើមមានក្នុង Java កំណែណា?", options: ["Java 5", "Java 8", "Java 14", "Java 21"], answer: 2, explain: "Switch Expression ក្លាយជា Standard ក្នុង Java 14។" },
    { q: "តើការប្រៀបធៀប String ត្រឹមត្រូវបំផុតគឺ?", options: ["==", "equals()", "=", "compare()"], answer: 1, explain: "equals() ប្រៀបធៀបខ្លឹមសារ String។ == ប្រៀបធៀប Reference។" },
    { q: "តើអ្វីកើតឡើងបើ if គ្មាន else?", options: ["Compile Error", "គ្មានអ្វីកើតឡើងពេលលក្ខខណ្ឌ false", "Program ឈប់", "Runtime Error"], answer: 1, explain: "else ជាជម្រើស។ បើគ្មាន else ហើយលក្ខខណ្ឌ false កម្មវិធីគ្រាន់តែរំលង if។" }
  ],
  summary: [
    "Conditional Statements អនុញ្ញាតឱ្យកម្មវិធីជ្រើសរើសសាខាតាម boolean។",
    "if ដំណើរការកូដពេលលក្ខខណ្ឌពិត; else ដំណើរការពេលមិនពិត។",
    "else-if ពិនិត្យពីលើចុះក្រោម ហើយឈប់នៅសាខាដំបូងដែលពិត។",
    "Nested if ប្រើសម្រាប់ការសម្រេចចិត្តជាដំណាក់កាល ប៉ុន្តែមិនគួរជ្រៅពេក។",
    "switch សមស្របសម្រាប់ការផ្គូផ្គងតម្លៃថេរ; break ការពារ Fall-through។",
    "Switch Expression (<code>-&gt;</code>) ខ្លី និងមានសុវត្ថិភាពជាង។",
    "ប្រៀបធៀប String ដោយ equals() មិនមែន ==។"
  ],
  takeaways: [
    "Java ត្រូវការ boolean ពិតប្រាកដសម្រាប់ if — មិនមែន 0/1 ទេ។",
    "លំដាប់ else-if អាចផ្លាស់ប្តូរលទ្ធផល ដូច្នេះដាក់លក្ខខណ្ឌតឹងមុន។",
    "switch ល្អសម្រាប់ Menu និងតម្លៃថេរ; if ល្អសម្រាប់ Range និង Expression។",
    "ប្រើ equals() សម្រាប់ String ជានិច្ច។",
    "សាកល្បង Boundary Values ដើម្បីធានាថាគ្រប់សាខាដំណើរការត្រឹមត្រូវ។"
  ],
  sources: [
    { label: "Oracle — if-else Statements", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/if.html" },
    { label: "Oracle — switch Statement", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/switch.html" },
    { label: "W3Schools — Java If...Else", url: "https://www.w3schools.com/java/java_conditions.asp" },
    { label: "W3Schools — Java Switch", url: "https://www.w3schools.com/java/java_switch.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "loops",
  num: 8,
  part: 8,
  partTitle: "Loops",
  title: "Loops",
  titleKh: "រង្វិលជុំ (for, while, do-while)",
  time: "៨០ នាទី",
  level: 2,
  intro: "Loop អនុញ្ញាតឱ្យកម្មវិធីធ្វើការងារមួយម្តងហើយម្តងទៀត ដោយមិនចាំបាច់ចម្លងកូដ។ មេរៀននេះគ្របដណ្តប់ <strong>for</strong>, <strong>while</strong>, <strong>do-while</strong>, Nested Loop, <strong>break</strong>, <strong>continue</strong> និងការតាមដាន Loop (Loop Tracing) ព្រមទាំង Pattern Printing។",
  objectives: [
    "សរសេរ for, while និង do-while បានត្រឹមត្រូវ។",
    "យល់ពីដំណើរការ Loop តាមលំដាប់។",
    "ប្រើ Nested Loop សម្រាប់តារាង និង Pattern។",
    "ប្រើ break និង continue បានត្រឹមត្រូវ។",
    "ចៀសវាង Infinite Loop។",
    "Tracing Loop ដើម្បីរកកំហុស និងព្យាករលទ្ធផល។"
  ],
  sections: [
    {
      title: "ហេតុអ្វីត្រូវការ Loop?",
      html: `<p>ស្រមៃថាអ្នកត្រូវបង្ហាញលេខ ១ ដល់ ១០០។ បើគ្មាន Loop អ្នកត្រូវសរសេរ <code>System.out.println</code> ១០០ ដង។ នេះជាការខាតពេល និងពិបាកកែ។ <strong>Loop</strong> អនុញ្ញាតឱ្យយើងសរសេរកូដតែម្តង ហើយឱ្យវាដំណើរការម្តងហើយម្តងទៀត រហូតដល់លក្ខខណ្ឌបញ្ឈប់។</p>
<p>Loop មួយមានធាតុសំខាន់បី៖</p>
<ul>
<li><strong>Initialization</strong>៖ ចំណុចចាប់ផ្តើម (ឧ. <code>int i = 1;</code>)</li>
<li><strong>Condition</strong>៖ លក្ខខណ្ឌបន្ត (ឧ. <code>i &lt;= 10</code>)</li>
<li><strong>Update</strong>៖ ការផ្លាស់ប្តូរក្រោយជុំមួយៗ (ឧ. <code>i++</code>)</li>
</ul>
<div class="callout warn"><div class="callout-title">Infinite Loop</div><p>ប្រសិនបើ Condition ពិតជានិច្ច ហើយគ្មាន Update ឬ break នោះ Loop នឹងដំណើរការគ្មានទីបញ្ចប់។ នេះហៅថា Infinite Loop ហើយអាចធ្វើឱ្យកម្មវិធីគាំង។</p></div>`
    },
    {
      title: "for Loop",
      html: `<p><strong>for loop</strong> សមស្របពេលយើងដឹងចំនួនជុំច្បាស់លាស់។ Syntax៖</p>
<pre><code>for (initialization; condition; update) {
    // code to repeat
}</code></pre>
<p>ឧទាហរណ៍បង្ហាញលេខ ១ ដល់ ៥៖</p>
<pre><code>for (int i = 1; i &lt;= 5; i++) {
    System.out.println("Number: " + i);
}</code></pre>
<p>លំដាប់ដំណើរការ៖</p>
<ol>
<li><code>int i = 1;</code> ដំណើរការម្តង។</li>
<li>ពិនិត្យ <code>i &lt;= 5</code>។ បើពិត ដំណើរការកូដក្នុង Loop។</li>
<li>ដំណើរការ <code>i++</code>។</li>
<li>ត្រឡប់ទៅពិនិត្យ Condition ម្តងទៀត។</li>
</ol>
<p>Loop បញ្ចប់នៅពេល <code>i</code> ក្លាយជា 6 ព្រោះ <code>6 &lt;= 5</code> មិនពិត។</p>
<h3>for loop ថយក្រោយ</h3>
<pre><code>for (int i = 5; i &gt;= 1; i--) {
    System.out.println(i);
}</code></pre>
<h3>for loop ជាមួយ Step ផ្សេង</h3>
<pre><code>for (int i = 0; i &lt;= 10; i += 2) {
    System.out.println(i);   // 0, 2, 4, 6, 8, 10
}</code></pre>`
    },
    {
      title: "while Loop",
      html: `<p><strong>while loop</strong> ពិនិត្យលក្ខខណ្ឌមុន រួចទើបដំណើរការកូដ។ វាសមស្របពេលយើងមិនដឹងចំនួនជុំច្បាស់ ប៉ុន្តែដឹងលក្ខខណ្ឌបញ្ឈប់។</p>
<pre><code>int count = 1;
while (count &lt;= 5) {
    System.out.println("Count: " + count);
    count++;
}</code></pre>
<p>ប្រសិនបើ Condition មិនពិតតាំងពីដំបូង កូដក្នុង while មិនដំណើរការសោះ។</p>
<h3>ការអាន Input រហូតដល់ត្រូវ</h3>
<pre><code>Scanner sc = new Scanner(System.in);
int number = 0;
while (number &lt;= 0) {
    System.out.print("Enter a positive number: ");
    number = sc.nextInt();
}</code></pre>
<p>while មានប្រយោជន៍ខ្លាំងសម្រាប់ Validation និង Menu កម្មវិធី។</p>`
    },
    {
      title: "do-while Loop",
      html: `<p><strong>do-while</strong> ដំណើរការកូដមុន រួចទើបពិនិត្យលក្ខខណ្ឌ។ ដូច្នេះវាដំណើរការយ៉ាងហោចណាស់ម្តង ទោះបីលក្ខខណ្ឌមិនពិតក៏ដោយ។</p>
<pre><code>int count = 1;
do {
    System.out.println("Count: " + count);
    count++;
} while (count &lt;= 5);</code></pre>
<p>សូមកត់សម្គាល់ Semicolon <code>;</code> បន្ទាប់ពី <code>while (...)</code>។ នេះជាកំហុស Syntax ញឹកញាប់។</p>
<h3>ឧទាហរណ៍ Menu</h3>
<pre><code>int choice;
do {
    System.out.println("1. Play");
    System.out.println("2. Exit");
    System.out.print("Choose: ");
    choice = sc.nextInt();
} while (choice != 2);</code></pre>
<p>Menu ត្រូវបង្ហាញយ៉ាងហោចណាស់ម្តង ដូច្នេះ do-while សមស្របជាង while។</p>`
    },
    {
      title: "Nested Loops",
      html: `<p><strong>Nested Loop</strong> គឺ Loop មួយនៅក្នុង Loop មួយទៀត។ Loop ខាងក្នុងដំណើរការពេញលេញរាល់ជុំមួយរបស់ Loop ខាងក្រៅ។</p>
<pre><code>for (int row = 1; row &lt;= 3; row++) {
    for (int col = 1; col &lt;= 4; col++) {
        System.out.print("* ");
    }
    System.out.println();
}</code></pre>
<p>Output៖</p>
<pre><code>* * * *
* * * *
* * * *</code></pre>
<p>Loop ខាងក្នុងដំណើរការ ៤ ដង សម្រាប់ជុំនីមួយៗរបស់ row។ ដូច្នេះមាន ៣ × ៤ = ១២ ការបោះពុម្ព <code>*</code>។</p>
<h3>តារាងគុណ</h3>
<pre><code>for (int i = 1; i &lt;= 3; i++) {
    for (int j = 1; j &lt;= 3; j++) {
        System.out.print(i * j + "\t");
    }
    System.out.println();
}</code></pre>
<div class="callout tip"><div class="callout-title">ការតាមដាន</div><p>ពេល Nested Loop មានបញ្ហា សូមសរសេរតារាងតម្លៃ row និង col ក្នុងក្រដាស។ ការតាមដានដោយដៃជួយឱ្យអ្នកយល់បានលឿនជាងការស្មាន។</p></div>`
    },
    {
      title: "break និង continue",
      html: `<p><strong>break</strong> បញ្ឈប់ Loop ភ្លាមៗ ហើយចេញទៅ Statement បន្ទាប់ពី Loop។</p>
<pre><code>for (int i = 1; i &lt;= 10; i++) {
    if (i == 5) {
        break;
    }
    System.out.println(i);   // 1 2 3 4
}</code></pre>
<p><strong>continue</strong> រំលងជុំបច្ចុប្បន្ន ហើយទៅជុំបន្ទាប់។</p>
<pre><code>for (int i = 1; i &lt;= 5; i++) {
    if (i == 3) {
        continue;
    }
    System.out.println(i);   // 1 2 4 5
}</code></pre>
<p>អ្នកអាចប្រើ <strong>Label</strong> ដើម្បី break ឬ continue Loop ខាងក្រៅពី Nested Loop៖</p>
<pre><code>outer:
for (int i = 1; i &lt;= 3; i++) {
    for (int j = 1; j &lt;= 3; j++) {
        if (i == 2 &amp;&amp; j == 2) {
            break outer;
        }
        System.out.println(i + "," + j);
    }
}</code></pre>
<div class="callout warn"><div class="callout-title">ប្រើដោយប្រុងប្រយ័ត្ន</div><p>break និង continue ជួយខ្លីៗ ប៉ុន្តែការប្រើច្រើនពេកធ្វើឱ្យ Logic អានពិបាក។ ពេលខ្លះការកែលក្ខខណ្ឌ Loop គឺច្បាស់ជាង។</p></div>`
    },
    {
      title: "Loop Tracing និងការរកកំហុស",
      html: `<p><strong>Loop Tracing</strong> គឺការតាមដានតម្លៃ Variable ក្នុងជុំនីមួយៗ។ វាជាជំនាញសំខាន់សម្រាប់ការយល់ Loop និង Debug។</p>
<p>ឧទាហរណ៍៖</p>
<pre><code>int sum = 0;
for (int i = 1; i &lt;= 4; i++) {
    sum += i;
}
System.out.println(sum);</code></pre>
<div class="table-wrap"><table><thead><tr><th>ជុំ</th><th>i</th><th>sum មុន</th><th>sum ក្រោយ</th></tr></thead><tbody>
<tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
<tr><td>2</td><td>2</td><td>1</td><td>3</td></tr>
<tr><td>3</td><td>3</td><td>3</td><td>6</td></tr>
<tr><td>4</td><td>4</td><td>6</td><td>10</td></tr>
</tbody></table></div>
<p>លទ្ធផលគឺ 10។ ការតាមដានបែបនេះជួយឱ្យអ្នកដឹងច្បាស់ថា Loop ធ្វើការប៉ុន្មានដង និងតម្លៃអ្វីកើតឡើង។</p>
<h3>កំហុស Loop ញឹកញាប់</h3>
<ul>
<li>ភ្លេច Update Variable → Infinite Loop។</li>
<li>ប្រើ <code>&lt;</code> ជំនួស <code>&lt;=</code> → ខកខានជុំចុងក្រោយ។</li>
<li>Off-by-one Error → រាប់លើស ឬខ្វះមួយ។</li>
<li>កែ Variable ខុសក្នុង Nested Loop → លទ្ធផលចម្លែក។</li>
</ul>`
    }
  ],
  terms: [
    { en: "Loop", kh: "រង្វិលជុំ", text: "រចនាសម្ព័ន្ធដែលដំណើរការកូដម្តងហើយម្តងទៀត។" },
    { en: "Iteration", kh: "ជុំ", text: "ការដំណើរការម្តងក្នុង Loop។" },
    { en: "Initialization", kh: "ការចាប់ផ្តើម", text: "ការកំណត់តម្លៃដំបូងរបស់ Counter។" },
    { en: "Condition", kh: "លក្ខខណ្ឌ", text: "លក្ខខណ្ឌបន្ត Loop; បើ false Loop បញ្ចប់។" },
    { en: "Nested Loop", kh: "Loop ជ្រមុជ", text: "Loop ដែលស្ថិតនៅក្នុង Loop មួយទៀត។" },
    { en: "Infinite Loop", kh: "Loop គ្មានទីបញ្ចប់", text: "Loop ដែលលក្ខខណ្ឌពិតជានិច្ច ហើយមិនឈប់។" },
    { en: "Off-by-one", kh: "ខុសមួយ", text: "កំហុសរាប់លើស ឬខ្វះមួយជុំ។" }
  ],
  syntax: [
    { label: "for", code: "for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}" },
    { label: "while", code: "int i = 1;\nwhile (i <= 5) {\n    System.out.println(i);\n    i++;\n}" },
    { label: "do-while", code: "int i = 1;\ndo {\n    System.out.println(i);\n    i++;\n} while (i <= 5);" },
    { label: "Enhanced for (Arrays)", code: "for (int value : numbers) {\n    System.out.println(value);\n}" },
    { label: "break / continue", code: "if (i == 5) break;\nif (i % 2 == 0) continue;" },
    { label: "Labeled break", code: "outer:\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i == 1 && j == 1) break outer;\n    }\n}" }
  ],
  examples: [
    {
      title: "រាប់លេខ ១ ដល់ ៥",
      desc: "ឧទាហរណ៍មូលដ្ឋានបំផុតនៃ for loop។ សូមសង្កេតរបៀប Counter ផ្លាស់ប្តូរ។",
      file: "CountUp.java",
      code: `public class CountUp {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("i = " + i);
        }
        System.out.println("Done!");
    }
}`,
      output: "i = 1\ni = 2\ni = 3\ni = 4\ni = 5\nDone!",
      lines: [
        "<code>int i = 1</code> កំណត់ចំណុចចាប់ផ្តើម។ វាដំណើរការតែម្តងមុន Loop។",
        "<code>i &lt;= 5</code> ពិនិត្យមុនជុំនីមួយៗ។",
        "<code>i++</code> បូក ១ ក្រោយជុំនីមួយៗ។",
        "នៅពេល i ក្លាយជា 6, លក្ខខណ្ឌមិនពិត Loop បញ្ចប់ ហើយបង្ហាញ Done!"
      ]
    },
    {
      title: "គណនាផលបូក ១ ដល់ N",
      desc: "ប្រើ for loop ដើម្បីបូកលេខពី ១ ដល់ N។ នេះជាការអនុវត្ត Accumulator Pattern។",
      file: "SumNumbers.java",
      code: `public class SumNumbers {
    public static void main(String[] args) {
        int n = 10;
        int sum = 0;

        for (int i = 1; i <= n; i++) {
            sum += i;
        }

        System.out.println("Sum 1 to " + n + " = " + sum);
    }
}`,
      output: "Sum 1 to 10 = 55",
      lines: [
        "<code>sum</code> ចាប់ផ្តើមពី 0 ហើយប្រមូលផលបូក។",
        "ជុំនីមួយៗ <code>sum += i</code> បន្ថែមតម្លៃ i ចូល sum។",
        "បន្ទាប់ពី ១០ ជុំ sum ក្លាយជា 55។"
      ]
    },
    {
      title: "while សម្រាប់ការអាន Input",
      desc: "កម្មវិធីសុំលេខវិជ្ជមានរហូតដល់អ្នកប្រើបញ្ចូលត្រូវ។ នេះជាការប្រើ while សម្រាប់ Validation។",
      file: "PositiveInput.java",
      code: `import java.util.Scanner;

public class PositiveInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = 0;

        while (number <= 0) {
            System.out.print("Enter a positive number: ");
            number = sc.nextInt();
        }

        System.out.println("You entered: " + number);
        sc.close();
    }
}`,
      output: "Enter a positive number: -3\nEnter a positive number: 0\nEnter a positive number: 7\nYou entered: 7",
      lines: [
        "<code>number = 0</code> ធ្វើឱ្យលក្ខខណ្ឌពិតដំបូង ដូច្នេះ Loop ចាប់ផ្តើម។",
        "បើអ្នកប្រើបញ្ចូល ≤ 0 លក្ខខណ្ឌនៅតែពិត ហើយ Loop បន្ត។",
        "បើបញ្ចូល 7 លក្ខខណ្ឌ false ហើយ Loop បញ្ចប់។"
      ]
    },
    {
      title: "do-while Menu",
      desc: "បង្ហាញ Menu យ៉ាងហោចណាស់ម្តង ហើយបន្តរហូតដល់អ្នកប្រើជ្រើស Exit។",
      file: "MenuLoop.java",
      code: `import java.util.Scanner;

public class MenuLoop {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            System.out.println("1. Say Hello");
            System.out.println("2. Exit");
            System.out.print("Choose: ");
            choice = sc.nextInt();

            if (choice == 1) {
                System.out.println("Hello!");
            }
        } while (choice != 2);

        System.out.println("Goodbye");
        sc.close();
    }
}`,
      output: "1. Say Hello\n2. Exit\nChoose: 1\nHello!\n1. Say Hello\n2. Exit\nChoose: 2\nGoodbye",
      lines: [
        "<code>int choice;</code> ត្រូវប្រកាសខាងក្រៅ do ដើម្បីប្រើក្នុងលក្ខខណ្ឌ while។",
        "do បង្ហាញ Menu មុន ហើយអានជម្រើស។",
        "while ពិនិត្យ <code>choice != 2</code>; បើមិនមែន 2 បន្ត Loop។"
      ]
    },
    {
      title: "Pattern Printing",
      desc: "ប្រើ Nested Loop ដើម្បីបង្ហាញត្រីកោណផ្កាយ។ Loop ខាងក្រៅគ្រប់គ្រងជួរ ហើយខាងក្នុងគ្រប់គ្រងចំនួនផ្កាយ។",
      file: "StarTriangle.java",
      code: `public class StarTriangle {
    public static void main(String[] args) {
        int rows = 5;

        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
      output: "*\n* *\n* * *\n* * * *\n* * * * *",
      lines: [
        "Loop ខាងក្រៅ <code>i</code> តំណាងជួរ ពី ១ ដល់ ៥។",
        "Loop ខាងក្នុង <code>j</code> បោះពុម្ពផ្កាយចំនួន i ដង។",
        "<code>println()</code> បន្ទាប់ពី Loop ខាងក្នុង បង្កើតបន្ទាត់ថ្មីសម្រាប់ជួរ។",
        "ចំនួនផ្កាយកើនឡើងមួយជួរ ដូច្នេះបានជាត្រីកោណ។"
      ]
    },
    {
      title: "break និង continue",
      desc: "ឧទាហរណ៍នេះបង្ហាញការប្រើ break ដើម្បីឈប់ Loop និង continue ដើម្បីរំលងចំនួនសេស។",
      file: "BreakContinue.java",
      code: `public class BreakContinue {
    public static void main(String[] args) {
        System.out.println("With continue (skip odd):");
        for (int i = 1; i <= 6; i++) {
            if (i % 2 != 0) {
                continue;
            }
            System.out.println(i);
        }

        System.out.println("With break at 4:");
        for (int i = 1; i <= 6; i++) {
            if (i == 4) {
                break;
            }
            System.out.println(i);
        }
    }
}`,
      output: "With continue (skip odd):\n2\n4\n6\nWith break at 4:\n1\n2\n3",
      lines: [
        "<code>if (i % 2 != 0) continue;</code> រំលងជុំនោះ ហើយទៅជុំបន្ទាប់។",
        "ដូច្នេះមានតែលេខគូ 2, 4, 6 ត្រូវបោះពុម្ព។",
        "<code>break</code> នៅ i == 4 បញ្ឈប់ Loop ទាំងស្រុង ដូច្នេះបាន 1, 2, 3។"
      ]
    },
    {
      title: "តារាងគុណ",
      desc: "បង្ហាញតារាងគុណ ១ ដល់ ៥ ដោយប្រើ Nested Loop និង printf សម្រាប់ការតម្រឹម។",
      file: "MultiplicationTable.java",
      code: `public class MultiplicationTable {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5; j++) {
                System.out.printf("%4d", i * j);
            }
            System.out.println();
        }
    }
}`,
      output: "   1   2   3   4   5\n   2   4   6   8  10\n   3   6   9  12  15\n   4   8  12  16  20\n   5  10  15  20  25",
      lines: [
        "Loop ខាងក្រៅ i គឺជួរ; Loop ខាងក្នុង j គឺជួរឈរ។",
        "<code>i * j</code> គណនាលទ្ធផលគុណនៅទីតាំងនោះ។",
        "<code>%4d</code> តម្រឹមចំនួនក្នុងទទឹង ៤ តួអក្សរ ដើម្បីឱ្យតារាងស្អាត។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ភ្លេច i++</span><br><code>for (int i = 1; i &lt;= 5; ) { ... }</code> បណ្តាលឱ្យ Infinite Loop។', fix: "បន្ថែម <code>i++</code> ក្នុង Update ឬខាងក្នុង Loop។" },
    { text: '<span class="bad-code">❌ Off-by-one</span><br><code>for (int i = 0; i &lt; 5; i++)</code> រាប់ 0–4; បើចង់ 1–5 ត្រូវកែចំណុចចាប់ផ្តើម។', fix: "កំណត់ចំណុចចាប់ផ្តើម និងលក្ខខណ្ឌឱ្យត្រូវនឹងចំនួនជុំដែលចង់បាន។" },
    { text: '<span class="bad-code">❌ do-while ខ្វះ Semicolon</span><br><code>} while (choice != 2)</code> បណ្តាលឱ្យ Compilation Error។', fix: "បន្ថែម <code>;</code> បន្ទាប់ពី while: <code>} while (choice != 2);</code>" },
    { text: '<span class="bad-code">❌ ប្រើ break ខុសកន្លែង</span><br>break ក្នុង Nested Loop បញ្ឈប់តែ Loop ខាងក្នុងប៉ុណ្ណោះ។', fix: "ប្រើ Label ឬរៀបចំ Logic ឡើងវិញ។" },
    { text: '<span class="bad-code">❌ កែ Counter ខុស</span><br>កែ <code>i</code> ខាងក្នុង Nested Loop អាចធ្វើឱ្យ Loop ខាងក្រៅខូច។', fix: "ប្រើ Variable ដាច់ពីគ្នាសម្រាប់ Loop នីមួយៗ។" }
  ],
  tips: [
    "ដាក់ Braces ជានិច្ច ទោះ Loop មាន Statement តែមួយ។",
    "សរសេរ Loop ឱ្យច្បាស់ថាចាប់ពីណា ដល់ណា និងប៉ុន្មានជុំ។",
    "សម្រាប់ Array ឬ Collection សូមប្រើ Enhanced for ពេលមិនត្រូវការ Index។",
    "សាកល្បង Nested Loop ជាមួយទិន្នន័យតូចជាមុន ដើម្បីតាមដានងាយ។",
    "ប្រយ័ត្ន Infinite Loop ពេលអាន Input — ត្រូវធានាថា Input អាចបញ្ចប់ Loop បាន។"
  ],
  exercises: [
    {
      level: 1,
      title: "រាប់ ១ ដល់ ១០",
      desc: "ប្រើ for loop ដើម្បីបង្ហាញលេខ ១ ដល់ ១០។",
      requirements: ["ប្រើ for", "បង្ហាញលេខមួយក្នុងមួយបន្ទាត់"],
      outputSample: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
      hint: "ចាប់ពី i = 1 ដល់ i <= 10។",
      solutionCode: `public class CountToTen {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
    }
}`
    },
    {
      level: 1,
      title: "ផលបូកលេខគូ",
      desc: "គណនាផលបូកលេខគូពី ១ ដល់ ២០។",
      requirements: ["ប្រើ loop", "ប្រើ % ឬ step 2", "បង្ហាញផលបូក"],
      outputSample: "Sum = 110",
      hint: "លេខគូ ១–២០ គឺ 2+4+...+20។",
      solutionCode: `public class SumEven {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 2; i <= 20; i += 2) {
            sum += i;
        }
        System.out.println("Sum = " + sum);
    }
}`
    },
    {
      level: 2,
      title: "តារាងគុណ N",
      desc: "បង្ហាញតារាងគុណសម្រាប់ចំនួន N ពី ១ ដល់ ១០។",
      requirements: ["ប្រើ for", "បង្ហាញទម្រង់ N x i = result"],
      inputSample: "N = 7",
      outputSample: "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70",
      hint: "ប្រើ Loop ពី 1 ដល់ 10 និង <code>n * i</code>។",
      solutionCode: `public class Multiplication {
    public static void main(String[] args) {
        int n = 7;
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + (n * i));
        }
    }
}`
    },
    {
      level: 2,
      title: "រាប់ថយក្រោយ",
      desc: "ប្រើ while loop ដើម្បីរាប់ថយក្រោយពី ១០ ដល់ ១ រួចបង្ហាញ “Liftoff!”។",
      requirements: ["ប្រើ while", "រាប់ថយក្រោយ", "បង្ហាញ Liftoff នៅចុងក្រោយ"],
      outputSample: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nLiftoff!",
      hint: "ចាប់ពី 10 ហើយប្រើ i--; លក្ខខណ្ឌ i >= 1។",
      solutionCode: `public class Countdown {
    public static void main(String[] args) {
        int i = 10;
        while (i >= 1) {
            System.out.println(i);
            i--;
        }
        System.out.println("Liftoff!");
    }
}`
    },
    {
      level: 2,
      title: "ត្រីកោណផ្កាយ",
      desc: "បង្ហាញត្រីកោណផ្កាយ ៥ ជួរ ដោយប្រើ Nested Loop។",
      requirements: ["ប្រើ Nested Loop", "ចំនួនផ្កាយកើនតាមជួរ"],
      outputSample: "*\n* *\n* * *\n* * * *\n* * * * *",
      hint: "Loop ខាងក្រៅជាជួរ; ខាងក្នុងរត់ពី 1 ដល់ i។",
      solutionCode: `public class Triangle {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`
    },
    {
      level: 3,
      title: "ពិនិត្យចំនួនបឋម",
      desc: "ពិនិត្យថាចំនួន N ជាចំនួនបឋម (Prime) ឬអត់ ដោយប្រើ loop។ ចំនួនបឋមធំជាង ១ និងចែកមិនដាច់ដោយចំនួនណាក្រៅពី ១ និងខ្លួនឯង។",
      requirements: ["ប្រើ loop", "គាំទ្រចំនួន ≤ 1", "បង្ហាញ Prime ឬ Not prime"],
      inputSample: "29",
      outputSample: "29 is Prime",
      hint: "ពិនិត្យ Divisor ពី 2 ដល់ <code>Math.sqrt(n)</code>។",
      solutionCode: `public class PrimeCheck {
    public static void main(String[] args) {
        int n = 29;
        boolean prime = n > 1;

        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                prime = false;
                break;
            }
        }

        System.out.println(n + (prime ? " is Prime" : " is Not prime"));
    }
}`
    },
    {
      level: 3,
      title: "FizzBuzz",
      desc: "បង្ហាញលេខ ១ ដល់ ៣០។ បើចែកដាច់នឹង ៣ បង្ហាញ Fizz, ចែកដាច់នឹង ៥ បង្ហាញ Buzz, ចែកដាច់ទាំងពីរ បង្ហាញ FizzBuzz។",
      requirements: ["ប្រើ for", "ពិនិត្យ ៣ និង ៥ មុន", "បង្ហាញលេខធម្មតាបើមិនចែកដាច់"],
      outputSample: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizz\n22\n23\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz",
      hint: "ពិនិត្យ <code>i % 15 == 0</code> មុន <code>i % 3 == 0</code>។",
      solutionCode: `public class FizzBuzz {
    public static void main(String[] args) {
        for (int i = 1; i <= 30; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }
    }
}`
    },
    {
      level: 3,
      title: "ស្វែងរកលេខ",
      desc: "មានលេខ ១ ដល់ ១០០។ រកលេខដំបូងដែលចែកដាច់នឹង ៧ និង ១១ ក្នុងពេលតែមួយ ដោយប្រើ loop និង break។",
      requirements: ["ប្រើ loop", "ប្រើ break", "បង្ហាញលេខដែលរកឃើញ"],
      outputSample: "Found: 77",
      hint: "ពិនិត្យ <code>i % 7 == 0 &amp;&amp; i % 11 == 0</code>។",
      solutionCode: `public class FindNumber {
    public static void main(String[] args) {
        for (int i = 1; i <= 100; i++) {
            if (i % 7 == 0 && i % 11 == 0) {
                System.out.println("Found: " + i);
                break;
            }
        }
    }
}`
    },
    {
      level: 3,
      title: "Pattern ពេជ្រ",
      desc: "បង្ហាញ Pattern ពេជ្រ (Diamond) ដោយប្រើ Nested Loop។ អ្នកអាចចាប់ផ្តើមពីទំហំ ៥។",
      requirements: ["ប្រើ Nested Loop", "មានចន្លោះ និងផ្កាយ", "រូបរាងស៊ីមេទ្រី"],
      outputSample: "  *\n * *\n* * *\n * *\n  *",
      hint: "បំបែកជាពីរផ្នែក៖ កំពូល និងបាត។",
      solutionCode: `public class Diamond {
    public static void main(String[] args) {
        int n = 3;
        for (int i = 1; i <= n; i++) {
            for (int s = i; s < n; s++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        for (int i = n - 1; i >= 1; i--) {
            for (int s = i; s < n; s++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`
    }
  ],
  quiz: [
    { q: "តើ Loop ណាពិនិត្យលក្ខខណ្ឌមុនដំណើរការ?", options: ["do-while", "while", "switch", "if"], answer: 1, explain: "while ពិនិត្យលក្ខខណ្ឌមុន; do-while ដំណើរការមុនយ៉ាងហោចណាស់ម្តង។" },
    { q: "តើ do-while ខុសពី while យ៉ាងដូចម្តេច?", options: ["do-while គ្មានលក្ខខណ្ឌ", "do-while ដំណើរការយ៉ាងហោចណាស់ម្តង", "do-while គ្មាន Semicolon", "do-while មិនអាចប្រើ break"], answer: 1, explain: "do-while ដំណើរការកូដមុន រួចទើបពិនិត្យលក្ខខណ្ឌ ដូច្នេះដំណើរការយ៉ាងហោចណាស់ម្តង។" },
    { q: "តើ break ធ្វើអ្វី?", options: ["រំលងជុំបច្ចុប្បន្ន", "បញ្ឈប់ Loop", "បន្តជុំបន្ទាប់", "បង្កើត Loop ថ្មី"], answer: 1, explain: "break បញ្ឈប់ Loop ទាំងស្រុង។ continue ទើបរំលងជុំបច្ចុប្បន្ន។" },
    { q: "តើអ្វីកើតឡើងបើ for គ្មាន Update?", options: ["Compile Error", "Loop មិនដំណើរការ", "អាចក្លាយជា Infinite Loop", "Java បន្ថែម i++ ដោយស្វ័យប្រវត្តិ"], answer: 2, explain: "បើ Counter មិនផ្លាស់ប្តូរ លក្ខខណ្ឌអាចពិតជានិច្ច ហើយក្លាយជា Infinite Loop។" },
    { q: "តើ Nested Loop ដំណើរការបែបណា?", options: ["Loop ក្នុងដំណើរការម្តង", "Loop ខាងក្នុងរត់ពេញលេញរាល់ជុំខាងក្រៅ", "Loop ខាងក្រៅរត់មុន", "មិនអាចប្រើជាមួយគ្នា"], answer: 1, explain: "សម្រាប់ជុំនីមួយៗរបស់ Loop ខាងក្រៅ Loop ខាងក្នុងរត់ពេញលេញ។" },
    { q: "តើ Semicolon ត្រូវដាក់កន្លែងណាក្នុង do-while?", options: ["បន្ទាប់ពី do", "បន្ទាប់ពី while(...)", "មិនត្រូវការ", "បន្ទាប់ពី }"], answer: 1, explain: "do-while ត្រូវបញ្ចប់ដោយ <code>} while (condition);</code> ជាមួយ Semicolon។" }
  ],
  summary: [
    "Loop អនុញ្ញាតឱ្យកូដដំណើរការម្តងហើយម្តងទៀតតាមលក្ខខណ្ឌ។",
    "for សមស្របពេលដឹងចំនួនជុំ; while សមស្របពេលដឹងលក្ខខណ្ឌបញ្ឈប់; do-while ដំណើរការយ៉ាងហោចណាស់ម្តង។",
    "Nested Loop ប្រើសម្រាប់តារាង និង Pattern។",
    "break បញ្ឈប់ Loop; continue រំលងជុំបច្ចុប្បន្ន។",
    "Infinite Loop កើតឡើងពេលលក្ខខណ្ឌមិនអាចក្លាយជា false។",
    "Loop Tracing ជួយយល់ និងរកកំហុសក្នុង Loop។"
  ],
  takeaways: [
    "រាល់ Loop ត្រូវមានផ្លូវចេញច្បាស់លាស់។",
    "for គឺសម្រាប់ចំនួនជុំដែលដឹងច្បាស់ និងអានងាយ។",
    "while និង do-while សមស្របសម្រាប់ Input និង Menu។",
    "break និង continue ជួយគ្រប់គ្រង Flow ប៉ុន្តែកុំប្រើច្រើនពេក។",
    "ពេល Nested Loop ខុស សូម Trace តម្លៃ Counter ក្នុងតារាង។"
  ],
  sources: [
    { label: "Oracle — The for Statement", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html" },
    { label: "Oracle — while and do-while", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html" },
    { label: "W3Schools — Java For Loop", url: "https://www.w3schools.com/java/java_for_loop.asp" },
    { label: "W3Schools — Java While Loop", url: "https://www.w3schools.com/java/java_while_loop.asp" }
  ]
});
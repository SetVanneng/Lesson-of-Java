/* Lessons 04–06: Variables, Operators, User Input */
window.JAVA_LESSONS = window.JAVA_LESSONS || [];

window.JAVA_LESSONS.push({
  id: "variables-data-types",
  num: 4,
  part: 4,
  partTitle: "Variables & Data Types",
  title: "Variables and Data Types",
  titleKh: "អថេរ និងប្រភេទទិន្នន័យ",
  time: "៧០ នាទី",
  level: 1,
  intro: "អថេរ (Variable) គឺជាកន្លែងមួយនៅក្នុង Memory ដែលយើងប្រើសម្រាប់ផ្ទុកទិន្នន័យ។ មេរៀននេះពន្យល់យ៉ាងលម្អិតពីការប្រកាស ការកំណត់តម្លៃ ប្រភេទទិន្នន័យ Primitive និង Reference, Constant, Type Casting និងបញ្ហា Overflow។",
  objectives: [
    "ពន្យល់អត្ថន័យរបស់ Variable និងហេតុអ្វីយើងត្រូវការវា។",
    "បែងចែក Declaration និង Initialization បាន។",
    "យល់ពី Primitive Data Types ទាំង ៨ និងជ្រើសរើសប្រភេទសមស្រប។",
    "ប្រើ String និងយល់ថាវាជា Reference Type។",
    "ប្រកាស Constant ដោយ final។",
    "អនុវត្ត Type Casting និង Type Conversion បាន។",
    "ពន្យល់ និងចៀសវាង Overflow/Underflow បាន។"
  ],
  sections: [
    {
      title: "Variable គឺជាអ្វី?",
      html: `<p>ស្រមៃថាអ្នកមានប្រអប់មួយដែលអ្នកដាក់ស្លាកឈ្មោះ។ អ្នកអាចដាក់របស់មួយនៅក្នុងប្រអប់ ហើយពេលក្រោយអ្នកអាចយកវាចេញ ឬដាក់របស់ថ្មីជំនួស។ <strong>Variable</strong> មានគំនិតដូចគ្នា៖ វាជាឈ្មោះដែលយើងដាក់ឱ្យកន្លែងមួយក្នុង Memory ដើម្បីផ្ទុកតម្លៃ។</p>
<p>ឧទាហរណ៍ យើងអាចប្រើ Variable ដើម្បីរក្សាទុកឈ្មោះ អាយុ តម្លៃ ពិន្ទុ ឬព័ត៌មានផ្សេងៗ។ ប្រសិនបើគ្មាន Variable យើងនឹងត្រូវចម្លងតម្លៃដដែលៗរាល់កន្លែង ហើយមិនអាចគណនា ឬផ្លាស់ប្តូរទិន្នន័យបានយ៉ាងងាយ។</p>
<div class="callout info"><div class="callout-title">និយមន័យ</div><p>Variable គឺជាឈ្មោះដែលយោងទៅកាន់ទីតាំង Memory មួយ ដែលអាចផ្ទុកតម្លៃបាន ហើយតម្លៃនោះអាចផ្លាស់ប្តូរបានអំឡុងពេលកម្មវិធីដំណើរការ។</p></div>
<p>ក្នុង Java Variable មានបីផ្នែកសំខាន់៖ <strong>Data Type</strong> (ប្រភេទទិន្នន័យ), <strong>Name</strong> (ឈ្មោះ) និង <strong>Value</strong> (តម្លៃ)។ Data Type កំណត់ថា Variable អាចផ្ទុកទិន្នន័យប្រភេទណា និងប្រើ Memory ប៉ុន្មាន។ Java ជា <em>statically typed</em> ដូច្នេះ Type ត្រូវបានកំណត់តាំងពីពេល Compile។</p>`
    },
    {
      title: "Declaration និង Initialization",
      html: `<p>មានពាក្យពីរដែលអ្នកត្រូវយល់ឱ្យច្បាស់៖</p>
<ul>
<li><strong>Declaration (ការប្រកាស)</strong>៖ ប្រាប់ Java ថាយើងចង់បង្កើត Variable ឈ្មោះអ្វី និង Type អ្វី ប៉ុន្តែមិនទាន់ដាក់តម្លៃ។ ឧទាហរណ៍ <code>int age;</code></li>
<li><strong>Initialization (ការកំណត់តម្លៃដំបូង)</strong>៖ ដាក់តម្លៃដំបូងឱ្យ Variable។ ឧទាហរណ៍ <code>age = 20;</code></li>
<li><strong>Assignment (ការកំណត់តម្លៃថ្មី)</strong>៖ ផ្លាស់ប្តូរតម្លៃក្រោយមកទៀត។ ឧទាហរណ៍ <code>age = 21;</code></li>
</ul>
<p>យើងអាចធ្វើ Declaration និង Initialization ក្នុងបន្ទាត់តែមួយបាន៖ <code>int age = 20;</code>។ នេះជាទម្រង់ដែលគេប្រើច្រើនបំផុត។</p>
<div class="callout warn"><div class="callout-title">សំខាន់ណាស់</div><p>Variable ក្នុង Method (Local Variable) ត្រូវតែកំណត់តម្លៃមុនពេលប្រើ។ បើអ្នកសរសេរ <code>int x; System.out.println(x);</code> Compiler នឹងរាយ Error <code>variable x might not have been initialized</code>។</p></div>
<p>ចំណែក Field ក្នុង Class (Instance Variable) មានតម្លៃ Default ដូចជា <code>0</code> សម្រាប់ int, <code>false</code> សម្រាប់ boolean និង <code>null</code> សម្រាប់ Reference Type។ យើងនឹងរៀនពី Field នៅមេរៀន OOP។</p>`
    },
    {
      title: "Primitive Data Types ទាំង ៨",
      html: `<p>Java មាន Primitive Data Types សរុប ៨ ប្រភេទ។ ពាក្យ <strong>Primitive</strong> មានន័យថាជាប្រភេទទិន្នន័យមូលដ្ឋានដែលផ្ទុកតម្លៃផ្ទាល់ មិនមែន Object។</p>
<div class="table-wrap"><table><thead><tr><th>Type</th><th>ទំហំ</th><th>ជួរតម្លៃ / តម្លៃ</th><th>ឧទាហរណ៍</th></tr></thead><tbody>
<tr><td><code>byte</code></td><td>៨ bit</td><td>-128 ដល់ 127</td><td><code>byte b = 100;</code></td></tr>
<tr><td><code>short</code></td><td>១៦ bit</td><td>-32,768 ដល់ 32,767</td><td><code>short s = 20000;</code></td></tr>
<tr><td><code>int</code></td><td>៣២ bit</td><td>ប្រហែល -2.1 ពាន់លាន ដល់ 2.1 ពាន់លាន</td><td><code>int age = 20;</code></td></tr>
<tr><td><code>long</code></td><td>៦៤ bit</td><td>ធំជាង int យ៉ាងច្រើន</td><td><code>long pop = 17000000L;</code></td></tr>
<tr><td><code>float</code></td><td>៣២ bit</td><td>ទសភាគភាពជាក់លាក់ទាប</td><td><code>float pi = 3.14f;</code></td></tr>
<tr><td><code>double</code></td><td>៦៤ bit</td><td>ទសភាគភាពជាក់លាក់ខ្ពស់</td><td><code>double price = 12.5;</code></td></tr>
<tr><td><code>char</code></td><td>១៦ bit</td><td>តួអក្សរ Unicode មួយ</td><td><code>char grade = 'A';</code></td></tr>
<tr><td><code>boolean</code></td><td>អាស្រ័យ JVM</td><td><code>true</code> ឬ <code>false</code></td><td><code>boolean ok = true;</code></td></tr>
</tbody></table></div>
<h3>របៀបជ្រើសរើស Type</h3>
<ul>
<li>ប្រើ <code>int</code> សម្រាប់ចំនួនគត់ធម្មតា ដូចជាអាយុ ចំនួនសិស្ស ពិន្ទុ។</li>
<li>ប្រើ <code>long</code> សម្រាប់ចំនួនធំដូចជា Timestamp ឬចំនួនប្រជាជន។ ត្រូវបញ្ចប់ដោយ <code>L</code>។</li>
<li>ប្រើ <code>double</code> សម្រាប់គណនាទូទៅដែលត្រូវការទសភាគ។ សម្រាប់ប្រាក់ គេច្រើនប្រើ <code>BigDecimal</code> ជំនួស។</li>
<li>ប្រើ <code>boolean</code> សម្រាប់ស្ថានភាព ដូចជា បើក/បិទ ឬ ត្រូវ/មិនត្រូវ។</li>
<li>ប្រើ <code>char</code> សម្រាប់តួអក្សរតែមួយ ដូចជានិទស្សន៍ពិន្ទុ។</li>
</ul>
<div class="callout tip"><div class="callout-title">ការគណនាទសភាគ</div><p>float និង double មិនអាចតំណាងចំនួនទសភាគបានយ៉ាងជាក់លាក់ ១០០% ទេ ព្រោះវាប្រើ Binary Floating Point។ ឧទាហរណ៍ <code>0.1 + 0.2</code> អាចបង្ហាញ <code>0.30000000000000004</code>។ សម្រាប់ការគណនាប្រាក់ សូមប្រើ <code>BigDecimal</code>។</p></div>`
    },
    {
      title: "Reference Data Types និង String",
      html: `<p>ក្រៅពី Primitive Java មាន <strong>Reference Data Types</strong> ដែលផ្ទុក <em>Reference</em> (អាសយដ្ឋាន) ទៅកាន់ Object ក្នុង Memory ជំនួសការផ្ទុកតម្លៃផ្ទាល់។ ឧទាហរណ៍៖ <code>String</code>, Array, Class និង Interface។</p>
<p><strong>String</strong> គឺជា Class ដែលតំណាងឱ្យអត្ថបទ។ វាមិនមែនជា Primitive ទេ។ String ជា <strong>Immutable</strong> មានន័យថាពេលបង្កើតរួច អត្ថបទខាងក្នុងមិនអាចផ្លាស់ប្តូរបានទេ។ ពេលអ្នកធ្វើ <code>name = name + "!"</code> Java បង្កើត String ថ្មី មិនមែនកែ String ចាស់ទេ។</p>
<div class="code-card"><div class="code-head"><span class="code-title">String</span><button class="copy-btn" type="button">ចម្លង</button></div><pre><code>String name = "Dara";
String greeting = "Hello, " + name;
String message = "Java";</code></pre></div>
<p>ការប្រើ <code>+</code> ជាមួយ String គឺ String Concatenation។ ប្រសិនបើអ្នកភ្ជាប់ String ជាមួយចំនួន Java នឹងបំលែងចំនួននោះទៅជា String ដោយស្វ័យប្រវត្តិ៖ <code>"Age: " + 20</code> បាន <code>"Age: 20"</code>។</p>
<div class="callout info"><div class="callout-title">Primitive vs Reference</div><p>Primitive ផ្ទុកតម្លៃផ្ទាល់។ Reference ផ្ទុកអាសយដ្ឋានទៅ Object។ ពេលយើងចម្លង Reference Variable យើងចម្លងអាសយដ្ឋាន ដូច្នេះអថេរទាំងពីរអាចយោងទៅ Object តែមួយ។</p></div>
<p>ឧទាហរណ៍ <code>String a = "Java"; String b = a;</code> ទាំងពីរយោងទៅ String តែមួយ។ ប៉ុន្តែដោយសារ String ជា Immutable ការផ្លាស់ប្តូរ <code>b</code> នឹងបង្កើត Reference ថ្មី មិនប៉ះពាល់ <code>a</code> ទេ។</p>`
    },
    {
      title: "Constant ជាមួយ final",
      html: `<p>ប្រសិនបើតម្លៃមួយមិនគួរផ្លាស់ប្តូរអំឡុងពេលកម្មវិធីដំណើរការ យើងប្រើ Keyword <code>final</code> ដើម្បីបង្កើត <strong>Constant</strong>។ ការព្យាយាមផ្លាស់ប្តូរតម្លៃក្រោយមកនឹងបណ្តាលឱ្យ Compilation Error។</p>
<div class="code-card"><div class="code-head"><span class="code-title">Constant</span><button class="copy-btn" type="button">ចម្លង</button></div><pre><code>final double PI = 3.14159;
final int MAX_STUDENTS = 50;
final String SCHOOL_NAME = "Java Khmer Academy";</code></pre></div>
<p>តាម Convention ឈ្មោះ Constant គួរសរសេរជាអក្សរធំទាំងអស់ ហើយប្រើ Underscore ដើម្បីបំបែកពាក្យ ដូចជា <code>MAX_STUDENTS</code>។ ការប្រើ Constant ជួយកាត់បន្ថយ “Magic Number” ក្នុងកូដ និងធ្វើឱ្យការកែប្រែងាយស្រួល។</p>
<p>ឧទាហរណ៍ ជំនួសការសរសេរ <code>if (score &gt;= 50)</code> រាល់កន្លែង យើងអាចសរសេរ <code>final int PASS_SCORE = 50;</code> ហើយប្រើ <code>if (score &gt;= PASS_SCORE)</code>។ បើថ្ងៃក្រោយត្រូវផ្លាស់ប្តូរពិន្ទុជាប់ យើងកែតែកន្លែងតែមួយ។</p>`
    },
    {
      title: "Type Casting និង Type Conversion",
      html: `<p><strong>Type Conversion</strong> គឺការបំលែងតម្លៃពី Type មួយទៅ Type មួយទៀត។ មានពីរប្រភេទ៖</p>
<h3>1. Widening Conversion (ដោយស្វ័យប្រវត្តិ)</h3>
<p>កើតឡើងពេលបំលែងពី Type តូចទៅ Type ធំ ដែលមិនបាត់ទិន្នន័យ។ ឧទាហរណ៍ <code>byte → short → int → long → float → double</code>។</p>
<pre><code>int count = 10;
double value = count;   // 10.0
System.out.println(value);</code></pre>
<h3>2. Narrowing Conversion (ត្រូវ Cast ដោយដៃ)</h3>
<p>បំលែងពី Type ធំទៅ Type តូច ដែលអាចបាត់ទិន្នន័យ។ ត្រូវសរសេរ Cast Operator <code>(type)</code>។</p>
<pre><code>double price = 12.99;
int rounded = (int) price;   // 12 ដោយបោះបង់ទសភាគ
System.out.println(rounded);</code></pre>
<div class="callout warn"><div class="callout-title">ប្រយ័ត្ន</div><p>Narrowing មិនមែន “បង្គត់” ទេ — វាកាត់ផ្តាច់ផ្នែកទសភាគ។ <code>(int) 12.99</code> បាន 12 មិនមែន 13 ទេ។ ចង់បង្គត់ សូមប្រើ <code>Math.round()</code>។</p></div>
<h3>String ទៅចំនួន និងចំនួនទៅ String</h3>
<pre><code>String text = "123";
int number = Integer.parseInt(text);
double decimal = Double.parseDouble("3.14");
String s = String.valueOf(100);</code></pre>
<p>ការបំលែង String ទៅចំនួនអាចបរាជ័យបើ String មិនមែនជាចំនួន ដូចជា <code>"abc"</code> ដែលនឹងបង្កើត <code>NumberFormatException</code>។</p>
<h3>char និង int</h3>
<p>char ត្រូវបានផ្ទុកជាលេខ Unicode។ ដូច្នេះអ្នកអាច Cast char ទៅ int ដើម្បីឃើញលេខកូដ ឬ int ទៅ char ដើម្បីបង្កើតតួអក្សរ៖</p>
<pre><code>char letter = 'A';
int code = letter;          // 65
char next = (char) (code + 1);   // B</code></pre>`
    },
    {
      title: "Overflow និង Underflow",
      html: `<p>រាល់ Primitive Type មានដែនកំណត់តម្លៃ។ ប្រសិនបើយើងបូកចំនួនលើសពីដែនកំណត់ តម្លៃនឹងវិលត្រឡប់ទៅខាងផ្ទុយ។ នេះហៅថា <strong>Overflow</strong>។</p>
<pre><code>int max = Integer.MAX_VALUE;   // 2147483647
System.out.println(max + 1);   // -2147483648</code></pre>
<p>ចំណែក <strong>Underflow</strong> គឺពេលដកលើសពីតម្លៃតូចបំផុត ហើយវិលទៅតម្លៃធំបំផុត៖</p>
<pre><code>int min = Integer.MIN_VALUE;   // -2147483648
System.out.println(min - 1);   // 2147483647</code></pre>
<p>Java មិនរាយ Error ពេល Overflow ទេ — វាគ្រាន់តែផ្តល់លទ្ធផលខុស។ នេះជាបញ្ហាសំខាន់ក្នុងកម្មវិធីគណនាប្រាក់ ឬហ្គេម។</p>
<div class="callout tip"><div class="callout-title">វិធីការពារ</div><p>ប្រើ Type ធំជាង (long ឬ BigInteger) ពេលគណនាចំនួនធំ។ អ្នកក៏អាចពិនិត្យដែនកំណត់ដោយ <code>Math.addExact()</code> ដែលនឹង throw Exception បើ Overflow កើតឡើង។</p></div>`
    }
  ],
  terms: [
    { en: "Variable", kh: "អថេរ", text: "ឈ្មោះយោងទៅកន្លែងផ្ទុកទិន្នន័យក្នុង Memory។" },
    { en: "Declaration", kh: "ការប្រកាស", text: "ការបង្កើត Variable ជាមួយ Type និងឈ្មោះ ដោយមិនទាន់ដាក់តម្លៃ។" },
    { en: "Initialization", kh: "ការកំណត់តម្លៃដំបូង", text: "ការដាក់តម្លៃដំបូងឱ្យ Variable។" },
    { en: "Primitive Type", kh: "ប្រភេទមូលដ្ឋាន", text: "Type មូលដ្ឋាន ៨ ប្រភេទដែលផ្ទុកតម្លៃផ្ទាល់។" },
    { en: "Reference Type", kh: "ប្រភេទយោង", text: "Type ដែលផ្ទុកអាសយដ្ឋានទៅ Object ដូចជា String និង Array។" },
    { en: "Type Casting", kh: "ការបំលែង Type", text: "ការបំលែងតម្លៃពី Type មួយទៅ Type មួយទៀត។" },
    { en: "Immutable", kh: "មិនអាចកែប្រែ", text: "Object ដែលតម្លៃខាងក្នុងមិនអាចផ្លាស់ប្តូរបានក្រោយបង្កើត ដូចជា String។" },
    { en: "Overflow", kh: "លើសដែនកំណត់", text: "ការកើតតម្លៃលើសពីដែនកំណត់របស់ Type ហើយវិលទៅតម្លៃផ្ទុយ។" }
  ],
  syntax: [
    { label: "ការប្រកាស Variable", code: "int age;              // declaration\nage = 20;             // initialization\nint score = 95;       // declaration + initialization" },
    { label: "Primitive Types", code: "byte b = 10;\nshort s = 2000;\nint i = 100000;\nlong l = 9000000000L;\nfloat f = 3.14f;\ndouble d = 3.14159;\nchar c = 'A';\nboolean flag = true;" },
    { label: "Constant", code: "final int MAX_SCORE = 100;\nfinal double TAX_RATE = 0.1;" },
    { label: "Casting", code: "int x = 10;\ndouble d = x;          // widening (automatic)\nint y = (int) 9.99;    // narrowing (manual)\nchar ch = (char) 65;   // 'A'" },
    { label: "String", code: 'String name = "Dara";\nString message = "Hello, " + name;\nint length = name.length();' }
  ],
  examples: [
    {
      title: "ការប្រើ Variable មូលដ្ឋាន",
      desc: "ឧទាហរណ៍នេះបង្ហាញការប្រកាស ការកំណត់តម្លៃ និងការផ្លាស់ប្តូរតម្លៃ Variable ព្រមទាំងការគណនាសាមញ្ញ។",
      file: "BasicVariables.java",
      code: `public class BasicVariables {
    public static void main(String[] args) {
        int age = 20;
        double price = 12.5;
        String name = "Dara";
        boolean isStudent = true;

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Price: " + price);
        System.out.println("Student: " + isStudent);

        age = age + 1;
        price = price * 2;
        System.out.println("Next year age: " + age);
        System.out.println("New price: " + price);
    }
}`,
      output: "Name: Dara\nAge: 20\nPrice: 12.5\nStudent: true\nNext year age: 21\nNew price: 25.0",
      lines: [
        "<code>int age = 20;</code> បង្កើត Variable Type int ឈ្មោះ age ហើយដាក់តម្លៃ 20។",
        "<code>double price = 12.5;</code> ប្រើ double ព្រោះតម្លៃមានទសភាគ។",
        "<code>String name = \"Dara\";</code> String ត្រូវប្រើ Double Quote និងជា Reference Type។",
        "<code>boolean isStudent = true;</code> boolean ផ្ទុកតែ true ឬ false។",
        "<code>age = age + 1;</code> យកតម្លៃចាស់មកបូក ១ រួចដាក់ត្រឡប់ទៅ age វិញ។",
        "<code>price = price * 2;</code> គុណតម្លៃចាស់នឹង ២ ហើយរក្សាទុកលទ្ធផលថ្មី។",
        "ការភ្ជាប់ String ជាមួយ Variable ដោយ <code>+</code> បង្កើតអត្ថបទសម្រាប់បង្ហាញ។"
      ]
    },
    {
      title: "Primitive Types ទាំងអស់",
      desc: "ឧទាហរណ៍នេះបង្ហាញការប្រើ Primitive Type នីមួយៗ និងទំហំ Memory របស់វាតាមរយៈ Wrapper Class។",
      file: "AllTypes.java",
      code: `public class AllTypes {
    public static void main(String[] args) {
        byte small = 100;
        short medium = 20000;
        int count = 150000;
        long population = 17000000L;
        float ratio = 0.75f;
        double price = 19.99;
        char grade = 'A';
        boolean active = true;

        System.out.println("byte: " + small);
        System.out.println("short: " + medium);
        System.out.println("int: " + count);
        System.out.println("long: " + population);
        System.out.println("float: " + ratio);
        System.out.println("double: " + price);
        System.out.println("char: " + grade);
        System.out.println("boolean: " + active);
        System.out.println("int size in bytes: " + Integer.BYTES);
        System.out.println("double size in bytes: " + Double.BYTES);
    }
}`,
      output: "byte: 100\nshort: 20000\nint: 150000\nlong: 17000000\nfloat: 0.75\ndouble: 19.99\nchar: A\nboolean: true\nint size in bytes: 4\ndouble size in bytes: 8",
      lines: [
        "<code>long population = 17000000L;</code> ត្រូវបញ្ចប់ដោយ <code>L</code> ដើម្បីបញ្ជាក់ថាជា long literal។",
        "<code>float ratio = 0.75f;</code> ត្រូវបញ្ចប់ដោយ <code>f</code> ព្រោះលេខទសភាគធម្មតាជា double។",
        "<code>char grade = 'A';</code> ប្រើ Single Quote សម្រាប់តួអក្សរតែមួយ។",
        "<code>Integer.BYTES</code> និង <code>Double.BYTES</code> បង្ហាញចំនួន Byte ដែល Type ប្រើ។"
      ]
    },
    {
      title: "Casting និងការបាត់ទិន្នន័យ",
      desc: "មើលភាពខុសគ្នារវាង Widening និង Narrowing Conversion។ សូមសង្កេតថា Narrowing កាត់ផ្នែកទសភាគចោល។",
      file: "CastingDemo.java",
      code: `public class CastingDemo {
    public static void main(String[] args) {
        int count = 25;
        double widened = count;
        System.out.println("Widened: " + widened);

        double price = 12.99;
        int truncated = (int) price;
        System.out.println("Truncated: " + truncated);

        int rounded = (int) Math.round(price);
        System.out.println("Rounded: " + rounded);

        char letter = 'A';
        int code = letter;
        char next = (char) (code + 1);
        System.out.println("Code of A: " + code);
        System.out.println("Next letter: " + next);
    }
}`,
      output: "Widened: 25.0\nTruncated: 12\nRounded: 13\nCode of A: 65\nNext letter: B",
      lines: [
        "<code>double widened = count;</code> int ទៅ double ជា Widening ដោយស្វ័យប្រវត្តិ។",
        "<code>(int) price</code> បំលែង double ទៅ int ហើយកាត់ .99 ចោល។",
        "<code>Math.round(price)</code> បង្គត់ 12.99 ទៅ 13 មុនពេល Cast។",
        "<code>(char) (code + 1)</code> បំលែង 66 ទៅជាតួអក្សរ B។ ត្រូវដាក់ Parentheses ព្រោះ Cast មាន Precedence។"
      ]
    },
    {
      title: "Overflow ក្នុងការអនុវត្ត",
      desc: "ឧទាហរណ៍នេះបង្ហាញថា Overflow មិន throw Error ទេ ប៉ុន្តែផ្តល់លទ្ធផលខុស។ បន្ទាប់មកយើងប្រើ long ដើម្បីដោះស្រាយ។",
      file: "OverflowDemo.java",
      code: `public class OverflowDemo {
    public static void main(String[] args) {
        int max = Integer.MAX_VALUE;
        System.out.println("Max int: " + max);
        System.out.println("Max + 1: " + (max + 1));

        long safe = (long) max + 1;
        System.out.println("Safe with long: " + safe);

        try {
            int checked = Math.addExact(max, 1);
            System.out.println(checked);
        } catch (ArithmeticException e) {
            System.out.println("Overflow detected: " + e.getMessage());
        }
    }
}`,
      output: "Max int: 2147483647\nMax + 1: -2147483648\nSafe with long: 2147483648\nOverflow detected: integer overflow",
      lines: [
        "<code>Integer.MAX_VALUE</code> ជាតម្លៃធំបំផុតរបស់ int។",
        "<code>max + 1</code> លើសដែនកំណត់ ហើយវិលទៅតម្លៃតូចបំផុត។",
        "<code>(long) max + 1</code> Cast ទៅ long មុនបូក ដូច្នេះគ្មាន Overflow។",
        "<code>Math.addExact</code> throw <code>ArithmeticException</code> ពេល Overflow ដូច្នេះអ្នកអាចចាប់បាន។"
      ]
    },
    {
      title: "Constant និង String",
      desc: "ឧទាហរណ៍នេះប្រើ Constant សម្រាប់អត្រាពន្ធ និងគណនាតម្លៃសរុបពី String និង double។",
      file: "Invoice.java",
      code: `public class Invoice {
    public static void main(String[] args) {
        final double TAX_RATE = 0.10;
        String product = "Keyboard";
        double unitPrice = 25.0;
        int quantity = 2;

        double subtotal = unitPrice * quantity;
        double tax = subtotal * TAX_RATE;
        double total = subtotal + tax;

        System.out.println("Product: " + product);
        System.out.println("Subtotal: $" + subtotal);
        System.out.println("Tax: $" + tax);
        System.out.println("Total: $" + total);
    }
}`,
      output: "Product: Keyboard\nSubtotal: $50.0\nTax: $5.0\nTotal: $55.0",
      lines: [
        "<code>final double TAX_RATE = 0.10;</code> បង្កើត Constant ដែលមិនអាចផ្លាស់ប្តូរក្រោយមក។",
        "<code>unitPrice * quantity</code> គណនាតម្លៃសរុបមុនពន្ធ។",
        "<code>subtotal * TAX_RATE</code> គណនាពន្ធ ១០%។",
        "ការភ្ជាប់ <code>\"$\" + total</code> បង្ហាញតម្លៃជាមួយសញ្ញាដុល្លារ។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ប្រើ Variable មុនកំណត់តម្លៃ</span><br><code>int x; System.out.println(x);</code> បណ្តាលឱ្យ Compilation Error សម្រាប់ Local Variable។', fix: "កំណត់តម្លៃមុនប្រើ៖ <code>int x = 0;</code>" },
    { text: '<span class="bad-code">❌ float ដោយគ្មាន f</span><br><code>float pi = 3.14;</code> បណ្តាលឱ្យ Error ព្រោះ 3.14 ជា double។', fix: "សរសេរ <code>float pi = 3.14f;</code> ឬប្រើ <code>double</code>។" },
    { text: '<span class="bad-code">❌ ចាត់ចំនួនធំទៅ int</span><br><code>int population = 8000000000;</code> លើសដែនកំណត់ int។', fix: "ប្រើ <code>long population = 8000000000L;</code>" },
    { text: '<span class="bad-code">❌ ប្រៀបធៀប String ដោយ ==</span><br><code>name == "Dara"</code> មិនពិនិត្យអត្ថបទទេ តែពិនិត្យ Reference។', fix: "ប្រើ <code>name.equals(\"Dara\")</code>។ យើងនឹងរៀនលម្អិតក្នុងមេរៀន Strings។" },
    { text: '<span class="bad-code">❌ គិតថា (int) បង្គត់</span><br><code>(int) 9.99</code> បាន 9 មិនមែន 10។', fix: "ប្រើ <code>Math.round(9.99)</code> បើចង់បង្គត់។" }
  ],
  tips: [
    "ជ្រើសរើស Type តូចបំផុតដែលគ្រប់គ្រាន់ ប៉ុន្តែកុំសន្សំសំចៃខ្លាំងរហូតដល់កើត Overflow។",
    "កំណត់តម្លៃដំបូងឱ្យ Variable រាល់ពេលដែលអាចធ្វើបាន។",
    "សម្រាប់ប្រាក់ និងភាគរយ សូមស្វែងយល់ពី <code>BigDecimal</code> បន្ទាប់ពីយល់ double ស្រាប់។",
    "កុំប្រើឈ្មោះអក្សរតែមួយដូចជា x ឬ a សម្រាប់ Variable សំខាន់។"
  ],
  exercises: [
    {
      level: 1,
      title: "ព័ត៌មានសិស្ស",
      desc: "បង្កើត Variable សម្រាប់ឈ្មោះ អាយុ ពិន្ទុ និងភេទ រួចបង្ហាញវាទាំងអស់។",
      requirements: ["ប្រើ String, int, double, char", "បង្ហាញយ៉ាងហោចណាស់ ៤ បន្ទាត់"],
      outputSample: "Name: Dara\nAge: 20\nScore: 92.5\nGender: M",
      hint: "char ប្រើ Single Quote; String ប្រើ Double Quote។",
      solutionCode: `public class StudentInfo {
    public static void main(String[] args) {
        String name = "Dara";
        int age = 20;
        double score = 92.5;
        char gender = 'M';

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Score: " + score);
        System.out.println("Gender: " + gender);
    }
}`
    },
    {
      level: 1,
      title: "គណនាផ្ទៃក្រឡា",
      desc: "បង្កើត Variable សម្រាប់ទទឹង និងកម្ពស់របស់ចតុកោណ រួចគណនាផ្ទៃក្រឡា និងបង្ហាញលទ្ធផល។",
      requirements: ["ប្រើ double ឬ int", "បង្ហាញទទឹង កម្ពស់ និងផ្ទៃក្រឡា"],
      outputSample: "Width: 5.0\nHeight: 3.0\nArea: 15.0",
      hint: "ផ្ទៃក្រឡាចតុកោណ = ទទឹង × កម្ពស់។",
      solutionCode: `public class RectangleArea {
    public static void main(String[] args) {
        double width = 5.0;
        double height = 3.0;
        double area = width * height;

        System.out.println("Width: " + width);
        System.out.println("Height: " + height);
        System.out.println("Area: " + area);
    }
}`
    },
    {
      level: 2,
      title: "បំលែងសីតុណ្ហភាព",
      desc: "បំលែងសីតុណ្ហភាពពី Celsius ទៅ Fahrenheit ដោយប្រើ Formula <code>F = C × 9/5 + 32</code>។",
      requirements: ["ប្រើ double", "បង្ហាញលទ្ធផលយ៉ាងហោចណាស់ ១ តំណាក់ទសភាគ"],
      inputSample: "C = 37",
      outputSample: "37.0 C = 98.6 F",
      hint: "ប្រើ <code>System.out.printf(\"%.1f\", f)</code> ដើម្បីបង្ហាញទសភាគ ១ តំណាក់។",
      solutionCode: `public class Temperature {
    public static void main(String[] args) {
        double celsius = 37.0;
        double fahrenheit = celsius * 9 / 5 + 32;

        System.out.printf("%.1f C = %.1f F%n", celsius, fahrenheit);
    }
}`
    },
    {
      level: 2,
      title: "គណនាប្រាក់ខែ",
      desc: "គណនាប្រាក់ខែសុទ្ធពីប្រាក់ខែដើម និងអត្រាពន្ធ ១០%។ ប្រើ Constant សម្រាប់អត្រាពន្ធ។",
      requirements: ["ប្រើ final", "បង្ហាញប្រាក់ខែដើម ពន្ធ និងប្រាក់ខែសុទ្ធ"],
      inputSample: "salary = 500",
      outputSample: "Gross: $500.0\nTax: $50.0\nNet: $450.0",
      hint: "ពន្ធ = ប្រាក់ខែ × 0.10; ប្រាក់ខែសុទ្ធ = ប្រាក់ខែ - ពន្ធ។",
      solutionCode: `public class Salary {
    public static void main(String[] args) {
        final double TAX_RATE = 0.10;
        double salary = 500.0;
        double tax = salary * TAX_RATE;
        double net = salary - tax;

        System.out.println("Gross: $" + salary);
        System.out.println("Tax: $" + tax);
        System.out.println("Net: $" + net);
    }
}`
    },
    {
      level: 3,
      title: "ពិនិត្យ Overflow",
      desc: "សរសេរកម្មវិធីបូក <code>Integer.MAX_VALUE</code> ជាមួយ 1 ដោយប្រើ int និង long។ បង្ហាញភាពខុសគ្នា និងពន្យល់។",
      requirements: ["បង្ហាញលទ្ធផល int និង long", "ប្រើ cast ទៅ long", "ពន្យល់ខ្លីៗក្នុង Comment"],
      hint: "<code>long safe = (long) Integer.MAX_VALUE + 1;</code>",
      solutionCode: `public class OverflowCheck {
    public static void main(String[] args) {
        int max = Integer.MAX_VALUE;
        // int overflow: wraps to minimum value
        System.out.println("int result: " + (max + 1));

        // cast to long before adding avoids overflow
        long safe = (long) max + 1;
        System.out.println("long result: " + safe);
    }
}`
    },
    {
      level: 3,
      title: "បំលែង String ទៅចំនួន",
      desc: "ទទួល String ដែលមានលេខ (ឧ. \"250\") បំលែងទៅ int រួចគណនា ១០% នៃចំនួននោះ។ បង្ហាញលទ្ធផលជា double។",
      requirements: ["ប្រើ Integer.parseInt", "គណនា ១០%", "បង្ហាញជា double"],
      inputSample: "\"250\"",
      outputSample: "Number: 250\n10%: 25.0",
      hint: "បន្ទាប់ពី parseInt អ្នកអាចប្រើ <code>number * 0.10</code> ដែលផ្តល់ double។",
      solutionCode: `public class ParseNumber {
    public static void main(String[] args) {
        String text = "250";
        int number = Integer.parseInt(text);
        double tenPercent = number * 0.10;

        System.out.println("Number: " + number);
        System.out.println("10%: " + tenPercent);
    }
}`
    },
    {
      level: 3,
      title: "កំហុស Overflow ក្នុងហ្គេម",
      desc: "ស្រមៃថាហ្គេមមួយមានពិន្ទុខ្ពស់បំផុត 2,147,483,647។ ពន្យល់ថាហេតុអ្វីការប្រើ int អាចបង្កបញ្ហា ហើយសរសេរកូដបង្ហាញដំណោះស្រាយដោយ long។",
      requirements: ["ពន្យល់ជា Comment", "បង្ហាញការបូកពិន្ទុលើស max", "ប្រើ long"],
      hint: "ប្រើ <code>long score = Integer.MAX_VALUE + 100L;</code>",
      solutionCode: `public class HighScore {
    public static void main(String[] args) {
        // int cannot store scores above 2,147,483,647
        long score = (long) Integer.MAX_VALUE + 100L;
        System.out.println("High score: " + score);
        System.out.println("No overflow because long is 64-bit.");
    }
}`
    },
    {
      level: 3,
      title: "គណនាប្រាក់ជាមួយទសភាគ",
      desc: "សាកល្បង <code>0.1 + 0.2</code> ជាមួយ double ហើយសង្កេតលទ្ធផល។ ពន្យល់ហេតុអ្វីវាមិនស្មើ 0.3 ច្បាស់ និងណែនាំ <code>BigDecimal</code>។",
      requirements: ["បង្ហាញលទ្ធផល double", "ពន្យល់ពី Floating Point", "សរសេរ BigDecimal ប្រៀបធៀប"],
      hint: "ប្រើ <code>new BigDecimal(\"0.1\").add(new BigDecimal(\"0.2\"))</code> និង import java.math.BigDecimal។",
      solutionCode: `import java.math.BigDecimal;

public class DecimalIssue {
    public static void main(String[] args) {
        double a = 0.1;
        double b = 0.2;
        System.out.println("double: " + (a + b));

        BigDecimal x = new BigDecimal("0.1");
        BigDecimal y = new BigDecimal("0.2");
        System.out.println("BigDecimal: " + x.add(y));
    }
}`,
      solution: "double ប្រើ Binary Floating Point ដែលមិនអាចតំណាង 0.1 និង 0.2 បានជាក់លាក់។ BigDecimal ប្រើគោលដប់ ដូច្នេះលទ្ធផលបាន 0.3 យ៉ាងត្រឹមត្រូវ។"
    }
  ],
  quiz: [
    { q: "តើ Primitive Data Type មានប៉ុន្មាន?", options: ["៦", "៧", "៨", "៩"], answer: 2, explain: "Java មាន Primitive Types ៨៖ byte, short, int, long, float, double, char, boolean។" },
    { q: "តើ Statement ណាត្រឹមត្រូវ?", options: ["float x = 3.14;", "float x = 3.14f;", "float x = '3.14';", "float x = 3,14;"], answer: 1, explain: "លេខទសភាគជា double ដោយ Default ដូច្នេះ float ត្រូវការ Suffix f។" },
    { q: "តើ Type ណាផ្ទុកតួអក្សរតែមួយ?", options: ["String", "char", "boolean", "int"], answer: 1, explain: "char ផ្ទុកតួអក្សរ Unicode មួយ ដោយប្រើ Single Quote។" },
    { q: "តើ <code>(int) 9.99</code> បានលទ្ធផលអ្វី?", options: ["10", "9", "9.99", "Error"], answer: 1, explain: "Narrowing Cast កាត់ផ្នែកទសភាគចោល ដូច្នេះបាន 9។" },
    { q: "តើ String ជា Type អ្វី?", options: ["Primitive", "Reference", "Array", "Interface"], answer: 1, explain: "String ជា Class និងជា Reference Type។ វាមិនមែន Primitive ទេ។" },
    { q: "តើ Keyword ណាបង្កើត Constant?", options: ["const", "final", "static", "fixed"], answer: 1, explain: "Java ប្រើ final សម្រាប់ Constant។ ពាក្យ const មិនត្រូវបានប្រើក្នុង Java ទេ។" }
  ],
  summary: [
    "Variable គឺជាឈ្មោះយោងទៅកន្លែងផ្ទុកទិន្នន័យក្នុង Memory។",
    "Declaration បង្កើត Variable; Initialization ដាក់តម្លៃដំបូង។",
    "Primitive Types មាន ៨៖ byte, short, int, long, float, double, char, boolean។",
    "String ជា Reference Type និង Immutable។",
    "final បង្កើត Constant ដែលមិនអាចផ្លាស់ប្តូរ។",
    "Widening Conversion ស្វ័យប្រវត្តិ; Narrowing ត្រូវ Cast និងអាចបាត់ទិន្នន័យ។",
    "Overflow និង Underflow កើតឡើងដោយស្ងាត់ ហើយអាចបង្កលទ្ធផលខុស។"
  ],
  takeaways: [
    "Java ត្រូវការ Type ច្បាស់លាស់ — នេះជួយចាប់ Error តាំងពី Compile។",
    "ជ្រើស Type ឱ្យសមនឹងទិន្នន័យ៖ int សម្រាប់ចំនួនគត់, double សម្រាប់ទសភាគ, boolean សម្រាប់ស្ថានភាព។",
    "String មិនអាចកែបាន — ការភ្ជាប់ String បង្កើត Object ថ្មី។",
    "ប្រើ final សម្រាប់តម្លៃដែលមិនគួរផ្លាស់ប្តូរ ដើម្បីការពារកំហុស។",
    "ប្រយ័ត្ន Overflow ពេលគណនាចំនួនធំ និងប្រយ័ត្ន Floating Point ពេលគណនាប្រាក់។"
  ],
  sources: [
    { label: "Oracle — Primitive Data Types", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html" },
    { label: "Dev.java — Variables", url: "https://dev.java/learn/language-basics/" },
    { label: "W3Schools — Java Variables", url: "https://www.w3schools.com/java/java_variables.asp" },
    { label: "W3Schools — Java Data Types", url: "https://www.w3schools.com/java/java_data_types.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "operators",
  num: 5,
  part: 5,
  partTitle: "Operators",
  title: "Java Operators",
  titleKh: "Operator ក្នុង Java",
  time: "៦៥ នាទី",
  level: 1,
  intro: "Operator គឺជាសញ្ញាដែលយើងប្រើដើម្បីធ្វើប្រតិបត្តិការលើទិន្នន័យ ដូចជាការបូក ដក គុណ ចែក ការប្រៀបធៀប និងការភ្ជាប់លក្ខខណ្ឌ។ មេរៀននេះពន្យល់ Operator សំខាន់ៗទាំងអស់ ព្រមទាំង Precedence និង Associativity។",
  objectives: [
    "ប្រើ Arithmetic Operators បានត្រឹមត្រូវ។",
    "យល់ពី Integer Division និង Modulus។",
    "ប្រើ Assignment Operators បាន។",
    "ប្រើ Comparison និង Logical Operators បាន។",
    "យល់ពី Prefix និង Postfix Increment/Decrement។",
    "សរសេរ Ternary Operator បាន។",
    "ពន្យល់ Operator Precedence និង Associativity បាន។"
  ],
  sections: [
    {
      title: "Arithmetic Operators",
      html: `<p>Arithmetic Operators ប្រើសម្រាប់ការគណនាគណិតវិទ្យា៖</p>
<div class="table-wrap"><table><thead><tr><th>Operator</th><th>ឈ្មោះ</th><th>ឧទាហរណ៍</th><th>លទ្ធផល</th></tr></thead><tbody>
<tr><td><code>+</code></td><td>Addition</td><td><code>10 + 3</code></td><td>13</td></tr>
<tr><td><code>-</code></td><td>Subtraction</td><td><code>10 - 3</code></td><td>7</td></tr>
<tr><td><code>*</code></td><td>Multiplication</td><td><code>10 * 3</code></td><td>30</td></tr>
<tr><td><code>/</code></td><td>Division</td><td><code>10 / 3</code></td><td>3 (int division)</td></tr>
<tr><td><code>%</code></td><td>Modulus (សំណល់)</td><td><code>10 % 3</code></td><td>1</td></tr>
</tbody></table></div>
<p><strong>សំខាន់៖</strong> ប្រសិនបើ Operand ទាំងពីរជា int នោះ <code>/</code> នឹងធ្វើ Integer Division ដោយបោះបង់ផ្នែកទសភាគ។ <code>10 / 3</code> បាន <code>3</code> មិនមែន <code>3.3333</code> ទេ។ ដើម្បីបានទសភាគ ត្រូវមាន Operand យ៉ាងហោចណាស់មួយជា double៖ <code>10.0 / 3</code> បាន <code>3.3333333333333335</code>។</p>
<p><strong>Modulus (%)</strong> ផ្តល់សំណល់នៃការចែក។ វាមានប្រយោជន៍ក្នុងការពិនិត្យចំនួនគូ/សេស (<code>n % 2 == 0</code>) និងការវិលជុំ (Wrap around)។</p>
<div class="callout warn"><div class="callout-title">ប្រយ័ត្ន</div><p>ការចែកដោយ 0 ជាមួយ int បណ្តាលឱ្យ <code>ArithmeticException</code>។ ចំណែក double ចែកនឹង 0 ផ្តល់ <code>Infinity</code> ឬ <code>NaN</code> មិន throw Exception ទេ។</p></div>`
    },
    {
      title: "Assignment Operators",
      html: `<p>Assignment Operator <code>=</code> ដាក់តម្លៃខាងស្តាំទៅ Variable ខាងឆ្វេង។ មាន Compound Assignment ដែលរួមបញ្ចូលការគណនាផងដែរ៖</p>
<div class="table-wrap"><table><thead><tr><th>Operator</th><th>សមមូលនឹង</th><th>ឧទាហរណ៍</th></tr></thead><tbody>
<tr><td><code>+=</code></td><td><code>x = x + y</code></td><td><code>score += 5;</code></td></tr>
<tr><td><code>-=</code></td><td><code>x = x - y</code></td><td><code>score -= 5;</code></td></tr>
<tr><td><code>*=</code></td><td><code>x = x * y</code></td><td><code>price *= 2;</code></td></tr>
<tr><td><code>/=</code></td><td><code>x = x / y</code></td><td><code>price /= 2;</code></td></tr>
<tr><td><code>%=</code></td><td><code>x = x % y</code></td><td><code>remainder %= 3;</code></td></tr>
</tbody></table></div>
<p>Compound Assignment ខ្លីជាង និងអានងាយជាង។ ឧទាហរណ៍ <code>total += price;</code> មានន័យថាបូក <code>price</code> ចូល <code>total</code> ហើយរក្សាទុកលទ្ធផលក្នុង <code>total</code>។</p>
<p>ចំណាំ៖ Compound Assignment មានការ Cast ដោយស្វ័យប្រវត្តិក្នុងករណីខ្លះ។ ឧទាហរណ៍ <code>byte b = 10; b += 5;</code> ដំណើរការ ប៉ុន្តែ <code>b = b + 5;</code> អាចមានបញ្ហា Type។ នេះជាចំណុចតូចដែលអ្នកគួរដឹង។</p>`
    },
    {
      title: "Comparison Operators",
      html: `<p>Comparison Operators ប្រៀបធៀបតម្លៃពីរ ហើយផ្តល់លទ្ធផលជា <code>boolean</code> (<code>true</code> ឬ <code>false</code>)។</p>
<div class="table-wrap"><table><thead><tr><th>Operator</th><th>អត្ថន័យ</th><th>ឧទាហរណ៍</th></tr></thead><tbody>
<tr><td><code>==</code></td><td>ស្មើគ្នា</td><td><code>age == 18</code></td></tr>
<tr><td><code>!=</code></td><td>មិនស្មើ</td><td><code>age != 18</code></td></tr>
<tr><td><code>&gt;</code></td><td>ធំជាង</td><td><code>score &gt; 50</code></td></tr>
<tr><td><code>&lt;</code></td><td>តូចជាង</td><td><code>score &lt; 50</code></td></tr>
<tr><td><code>&gt;=</code></td><td>ធំជាង ឬស្មើ</td><td><code>score &gt;= 50</code></td></tr>
<tr><td><code>&lt;=</code></td><td>តូចជាង ឬស្មើ</td><td><code>score &lt;= 50</code></td></tr>
</tbody></table></div>
<div class="callout danger"><div class="callout-title">កុំច្រឡំ = និង ==</div><p><code>=</code> ជា Assignment (ដាក់តម្លៃ)។ <code>==</code> ជា Comparison (ប្រៀបធៀប)។ ការសរសេរ <code>if (x = 5)</code> នឹងបណ្តាលឱ្យ Compilation Error ព្រោះ int មិនមែន boolean។ ត្រូវសរសេរ <code>if (x == 5)</code>។</p></div>
<p>សម្រាប់ String ការប្រើ <code>==</code> មិនពិនិត្យអត្ថបទទេ តែពិនិត្យថាតើវាយោងទៅ Object តែមួយឬអត់។ ត្រូវប្រើ <code>.equals()</code> សម្រាប់ការប្រៀបធៀបអត្ថបទ។</p>`
    },
    {
      title: "Logical Operators",
      html: `<p>Logical Operators ភ្ជាប់លក្ខខណ្ឌ Boolean ច្រើនចូលគ្នា៖</p>
<div class="table-wrap"><table><thead><tr><th>Operator</th><th>ឈ្មោះ</th><th>លទ្ធផល true នៅពេល</th><th>ឧទាហរណ៍</th></tr></thead><tbody>
<tr><td><code>&amp;&amp;</code></td><td>AND</td><td>ទាំងពីរពិត</td><td><code>age &gt;= 18 &amp;&amp; hasId</code></td></tr>
<tr><td><code>||</code></td><td>OR</td><td>យ៉ាងហោចណាស់មួយពិត</td><td><code>isAdmin || isOwner</code></td></tr>
<tr><td><code>!</code></td><td>NOT</td><td>បដិសេធ</td><td><code>!isBlocked</code></td></tr>
</tbody></table></div>
<p><strong>Short-circuit Evaluation៖</strong> <code>&amp;&amp;</code> នឹងឈប់ពិនិត្យនៅពេលឃើញ <code>false</code> ដំបូង។ <code>||</code> នឹងឈប់នៅពេលឃើញ <code>true</code> ដំបូង។ នេះមានប្រយោជន៍ក្នុងការការពារ NullPointerException៖</p>
<pre><code>if (name != null &amp;&amp; name.length() &gt; 0) {
    System.out.println(name);
}</code></pre>
<p>ប្រសិនបើ <code>name</code> ជា null, ផ្នែកខាងស្តាំនឹងមិនត្រូវបានវាយតម្លៃទេ ដូច្នេះគ្មាន Exception កើតឡើង។</p>`
    },
    {
      title: "Unary Operators និង Increment/Decrement",
      html: `<p>Unary Operators ធ្វើប្រតិបត្តិការលើ Operand តែមួយ៖</p>
<ul>
<li><code>+</code> និង <code>-</code> សម្រាប់សញ្ញា: <code>-5</code>, <code>+10</code></li>
<li><code>++</code> បូក ១</li>
<li><code>--</code> ដក ១</li>
<li><code>!</code> បដិសេធ boolean</li>
</ul>
<h3>Prefix និង Postfix</h3>
<p><strong>Prefix</strong> <code>++x</code>: បូកមុន រួចប្រើតម្លៃថ្មី។<br><strong>Postfix</strong> <code>x++</code>: ប្រើតម្លៃចាស់មុន រួចទើបបូក។</p>
<pre><code>int a = 5;
System.out.println(++a);   // 6 (a becomes 6, then printed)
System.out.println(a);     // 6

int b = 5;
System.out.println(b++);   // 5 (print old value, then b becomes 6)
System.out.println(b);     // 6</code></pre>
<div class="callout tip"><div class="callout-title">អនុសាសន៍</div><p>កុំសរសេរកូដដូចជា <code>int y = x++ + ++x;</code> ព្រោះវាអានពិបាក និងអាចបង្កកំហុស។ សរសេរបន្ទាត់ដាច់ពីគ្នាឱ្យច្បាស់។</p></div>`
    },
    {
      title: "Ternary Operator",
      html: `<p><strong>Ternary Operator</strong> ជាផ្លូវកាត់នៃ <code>if-else</code> សម្រាប់ការជ្រើសរើសតម្លៃតែមួយ។ Syntax៖</p>
<pre><code>condition ? valueIfTrue : valueIfFalse</code></pre>
<p>ឧទាហរណ៍៖</p>
<pre><code>int age = 20;
String status = age &gt;= 18 ? "Adult" : "Minor";
System.out.println(status);   // Adult</code></pre>
<p>Ternary គួរប្រើសម្រាប់ការជ្រើសរើសតម្លៃខ្លីៗ។ ប្រសិនបើ Logic ស្មុគស្មាញ ឬមានសាខាច្រើន សូមប្រើ <code>if-else</code> វិញ ដើម្បីអានងាយ។</p>
<pre><code>int score = 75;
String grade = score &gt;= 50 ? "Pass" : "Fail";
System.out.println("Result: " + grade);</code></pre>`
    },
    {
      title: "Operator Precedence និង Associativity",
      html: `<p><strong>Precedence</strong> កំណត់ថា Operator ណាត្រូវគណនាមុន។ <strong>Associativity</strong> កំណត់ទិសដៅពេល Precedence ស្មើគ្នា (ឆ្វេងទៅស្តាំ ឬស្តាំទៅឆ្វេង)។</p>
<p>លំដាប់សំខាន់ពីខ្ពស់ទៅទាប (សង្ខេប)៖</p>
<ol>
<li>Postfix: <code>x++</code>, <code>x--</code></li>
<li>Unary: <code>++x</code>, <code>--x</code>, <code>!</code>, <code>+</code>, <code>-</code></li>
<li>Multiplicative: <code>*</code>, <code>/</code>, <code>%</code></li>
<li>Additive: <code>+</code>, <code>-</code></li>
<li>Relational: <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code></li>
<li>Equality: <code>==</code>, <code>!=</code></li>
<li>Logical AND: <code>&amp;&amp;</code></li>
<li>Logical OR: <code>||</code></li>
<li>Ternary: <code>?:</code></li>
<li>Assignment: <code>=</code>, <code>+=</code>, ...</li>
</ol>
<p>ឧទាហរណ៍ <code>2 + 3 * 4</code> បាន <code>14</code> ព្រោះ <code>*</code> មាន Precedence ខ្ពស់ជាង <code>+</code>។ ប្រសិនបើចង់បាន <code>20</code> ត្រូវសរសេរ <code>(2 + 3) * 4</code>។</p>
<div class="callout tip"><div class="callout-title">ដំបូន្មាន</div><p>កុំទន្ទេញ Precedence ទាំងអស់។ ប្រើ Parentheses នៅពេលមិនប្រាកដ ដើម្បីធ្វើឱ្យចេតនារបស់អ្នកច្បាស់លាស់។</p></div>`
    }
  ],
  terms: [
    { en: "Operand", kh: "តម្លៃប្រតិបត្តិការ", text: "តម្លៃ ឬ Variable ដែល Operator ធ្វើការលើ។" },
    { en: "Integer Division", kh: "ការចែកចំនួនគត់", text: "ការចែកដែលបោះបង់ផ្នែកទសភាគ ព្រោះ Operand ជា int។" },
    { en: "Modulus", kh: "សំណល់", text: "សំណល់នៃការចែក តំណាងដោយ %។" },
    { en: "Short-circuit", kh: "ការកាត់ខ្លី", text: "ការឈប់វាយតម្លៃ Logical Expression នៅពេលលទ្ធផលច្បាស់ហើយ។" },
    { en: "Precedence", kh: "អាទិភាព", text: "លំដាប់ដែល Operator ត្រូវគណនាមុន។" },
    { en: "Associativity", kh: "ទិសដៅគណនា", text: "ទិសដៅគណនាពេល Operator មាន Precedence ស្មើគ្នា។" }
  ],
  syntax: [
    { label: "Arithmetic", code: "int a = 10, b = 3;\nSystem.out.println(a + b);   // 13\nSystem.out.println(a / b);   // 3\nSystem.out.println(a % b);   // 1\nSystem.out.println(a / 3.0); // 3.3333..." },
    { label: "Assignment", code: "int total = 0;\ntotal += 5;   // total = 5\ntotal *= 2;   // total = 10\ntotal -= 3;   // total = 7" },
    { label: "Comparison & Logical", code: "boolean adult = age >= 18;\nboolean allowed = adult && hasId;\nboolean blocked = !isActive;" },
    { label: "Increment", code: "int x = 5;\nSystem.out.println(x++); // 5\nSystem.out.println(x);   // 6\nSystem.out.println(++x); // 7" },
    { label: "Ternary", code: 'String result = score >= 50 ? "Pass" : "Fail";' }
  ],
  examples: [
    {
      title: "ម៉ាស៊ីនគិតលេខសាមញ្ញ",
      desc: "ឧទាហរណ៍នេះបង្ហាញ Arithmetic Operators ទាំងអស់ និងភាពខុសគ្នារវាង Integer Division និង Double Division។",
      file: "ArithmeticDemo.java",
      code: `public class ArithmeticDemo {
    public static void main(String[] args) {
        int a = 17;
        int b = 5;

        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));
        System.out.println("a % b = " + (a % b));
        System.out.println("a / (double) b = " + (a / (double) b));
    }
}`,
      output: "a + b = 22\na - b = 12\na * b = 85\na / b = 3\na % b = 2\na / (double) b = 3.4",
      lines: [
        "<code>a + b</code> បូកធម្មតា បាន 22។",
        "<code>a / b</code> ជា Integer Division ដូច្នេះ 17 / 5 បាន 3 ដោយបោះបង់ .4។",
        "<code>a % b</code> គឺសំណល់ 17 ចែក 5 បាន 3 សល់ 2។",
        "<code>(double) b</code> Cast ប៉ុន្តែ b ទៅ double ដូច្នេះការចែកក្លាយជា Double Division។"
      ]
    },
    {
      title: "ការគណនាពិន្ទុ",
      desc: "ប្រើ Compound Assignment ដើម្បីធ្វើបច្ចុប្បន្នភាពពិន្ទុ និងគណនាមធ្យមភាគ។",
      file: "ScoreUpdate.java",
      code: `public class ScoreUpdate {
    public static void main(String[] args) {
        int score = 50;
        score += 10;
        System.out.println("After bonus: " + score);

        score -= 5;
        System.out.println("After penalty: " + score);

        score *= 2;
        System.out.println("After double: " + score);

        score /= 3;
        System.out.println("After divide: " + score);

        score %= 7;
        System.out.println("Remainder: " + score);
    }
}`,
      output: "After bonus: 60\nAfter penalty: 55\nAfter double: 110\nAfter divide: 36\nRemainder: 1",
      lines: [
        "<code>score += 10</code> សមមូលនឹង <code>score = score + 10</code>។",
        "<code>score *= 2</code> បង្កើនពិន្ទុជាពីរដង។",
        "<code>score /= 3</code> ចែកជា int ដូច្នេះ 110 / 3 បាន 36។",
        "<code>score %= 7</code> យកសំណល់ 36 % 7 បាន 1។"
      ]
    },
    {
      title: "Prefix និង Postfix",
      desc: "មើលលទ្ធផលនៃ <code>x++</code> និង <code>++x</code> ដើម្បីយល់ពីភាពខុសគ្នា។",
      file: "IncrementDemo.java",
      code: `public class IncrementDemo {
    public static void main(String[] args) {
        int a = 5;
        int b = a++;
        System.out.println("a = " + a + ", b = " + b);

        int c = 5;
        int d = ++c;
        System.out.println("c = " + c + ", d = " + d);

        int count = 10;
        count--;
        System.out.println("count = " + count);
    }
}`,
      output: "a = 6, b = 5\nc = 6, d = 6\ncount = 9",
      lines: [
        "<code>b = a++</code> យកតម្លៃចាស់ 5 ទៅ b សិន រួចទើបបូក a ទៅ 6។",
        "<code>d = ++c</code> បូក c ទៅ 6 មុន រួចទើបយក 6 ទៅ d។",
        "<code>count--</code> ដក 1 ពី count បាន 9។"
      ]
    },
    {
      title: "Logical Operators ជាមួយលក្ខខណ្ឌ",
      desc: "ឧទាហរណ៍នេះពិនិត្យលក្ខខណ្ឌចូលរៀនដោយប្រើ AND, OR និង NOT។",
      file: "LogicDemo.java",
      code: `public class LogicDemo {
    public static void main(String[] args) {
        int age = 20;
        boolean hasId = true;
        boolean isBanned = false;

        boolean canEnter = age >= 18 && hasId && !isBanned;
        System.out.println("Can enter: " + canEnter);

        boolean isWeekend = false;
        boolean isHoliday = true;
        boolean dayOff = isWeekend || isHoliday;
        System.out.println("Day off: " + dayOff);

        String name = null;
        boolean validName = name != null && name.length() > 0;
        System.out.println("Valid name: " + validName);
    }
}`,
      output: "Can enter: true\nDay off: true\nValid name: false",
      lines: [
        "<code>age >= 18 && hasId && !isBanned</code> ត្រូវពិតទាំងអស់ទើប canEnter ពិត។",
        "<code>isWeekend || isHoliday</code> ពិតនៅពេលយ៉ាងហោចណាស់មួយពិត។",
        "<code>name != null && name.length() > 0</code> ប្រើ Short-circuit ដើម្បីការពារ NullPointerException។ ព្រោះ name ជា null ផ្នែកខាងស្ដាំមិនត្រូវវាយតម្លៃទេ។"
      ]
    },
    {
      title: "Ternary Operator",
      desc: "ប្រើ Ternary ដើម្បីជ្រើសរើសសារតាមពិន្ទុ និងកំណត់ថាចំនួនគូ ឬសេស។",
      file: "TernaryDemo.java",
      code: `public class TernaryDemo {
    public static void main(String[] args) {
        int score = 72;
        String result = score >= 50 ? "Pass" : "Fail";
        System.out.println("Result: " + result);

        int number = 7;
        String parity = number % 2 == 0 ? "Even" : "Odd";
        System.out.println(number + " is " + parity);

        int age = 16;
        System.out.println(age >= 18 ? "Adult" : "Minor");
    }
}`,
      output: "Result: Pass\n7 is Odd\nMinor",
      lines: [
        "<code>score >= 50 ? \"Pass\" : \"Fail\"</code> ជ្រើសរើសតម្លៃមួយតាមលក្ខខណ្ឌ។",
        "<code>number % 2 == 0</code> ពិនិត្យថាចំនួនគូ។ បើសំណល់ 0 គឺគូ។",
        "Ternary អាចប្រើក្នុង <code>println</code> ដោយផ្ទាល់បាន។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ចែក int ដោយរំពឹងទសភាគ</span><br><code>int avg = 17 / 5;</code> បាន 3 មិនមែន 3.4។', fix: "ប្រើ <code>double avg = 17 / 5.0;</code> ឬ <code>double avg = (double) 17 / 5;</code>" },
    { text: '<span class="bad-code">❌ ប្រើ = ក្នុងលក្ខខណ្ឌ</span><br><code>if (age = 18)</code> បណ្តាលឱ្យ Error។', fix: "ប្រើ <code>if (age == 18)</code>។" },
    { text: '<span class="bad-code">❌ ប្រើ == ជាមួយ String</span><br><code>if (name == "Dara")</code> អាចខុស។', fix: "ប្រើ <code>name.equals(\"Dara\")</code>។" },
    { text: '<span class="bad-code">❌ ចែកនឹង 0</span><br><code>int result = 10 / 0;</code> throw ArithmeticException។', fix: "ពិនិត្យ Divisor មុនចែក ឬប្រើ Exception Handling។" },
    { text: '<span class="bad-code">❌ ទុកចិត្ត Precedence ដោយមិនដាក់ Parentheses</span><br><code>a + b * c</code> អាចមិនដូចអ្នកគិត។', fix: "ដាក់ Parentheses ឱ្យច្បាស់ ដូចជា <code>(a + b) * c</code>។" }
  ],
  tips: [
    "ប្រើ <code>%</code> ដើម្បីពិនិត្យចំនួនគូ/សេស និងការវិលជុំ។",
    "ប្រើ Parentheses នៅពេលមិនប្រាកដពី Precedence។",
    "ប្រយ័ត្ន <code>x++</code> និង <code>++x</code> ពេលប្រើក្នុង Expression។",
    "កុំសរសេរ Expression វែងពេក — បំបែកជា Variable តូចៗដើម្បីអានងាយ។",
    "សម្រាប់ការគណនាប្រាក់ សូមប្រើ BigDecimal ជំនួស double។"
  ],
  exercises: [
    {
      level: 1,
      title: "ម៉ាស៊ីនគិតលេខ",
      desc: "បង្កើត Variable ពីរ រួចបង្ហាញលទ្ធផលបូក ដក គុណ ចែក និងសំណល់។",
      requirements: ["ប្រើ int ពីរ", "បង្ហាញ ៥ ប្រតិបត្តិការ"],
      inputSample: "a = 20, b = 6",
      outputSample: "Sum: 26\nDifference: 14\nProduct: 120\nQuotient: 3\nRemainder: 2",
      hint: "ប្រើ +, -, *, /, %។",
      solutionCode: `public class Calculator {
    public static void main(String[] args) {
        int a = 20;
        int b = 6;

        System.out.println("Sum: " + (a + b));
        System.out.println("Difference: " + (a - b));
        System.out.println("Product: " + (a * b));
        System.out.println("Quotient: " + (a / b));
        System.out.println("Remainder: " + (a % b));
    }
}`
    },
    {
      level: 1,
      title: "ចំនួនគូ ឬសេស",
      desc: "ពិនិត្យថា Variable មួយជាចំនួនគូ ឬសេស ហើយបង្ហាញលទ្ធផល។",
      requirements: ["ប្រើ %", "បង្ហាញ Even ឬ Odd"],
      inputSample: "number = 14",
      outputSample: "14 is Even",
      hint: "ប្រើ <code>number % 2 == 0</code>។",
      solutionCode: `public class EvenOdd {
    public static void main(String[] args) {
        int number = 14;
        if (number % 2 == 0) {
            System.out.println(number + " is Even");
        } else {
            System.out.println(number + " is Odd");
        }
    }
}`
    },
    {
      level: 2,
      title: "មធ្យមភាគពិន្ទុ",
      desc: "គណនាមធ្យមភាគពិន្ទុបីវិញ្ញាសា ហើយបង្ហាញជា double ជាមួយទសភាគ ២ តំណាក់។",
      requirements: ["ប្រើ int ឬ double", "ប្រើ printf ឬ String.format", "បង្ហាញមធ្យមភាគ"],
      inputSample: "80, 90, 70",
      outputSample: "Average: 80.00",
      hint: "ប្រយ័ត្ន Integer Division។ ប្រើ <code>total / 3.0</code>។",
      solutionCode: `public class AverageScore {
    public static void main(String[] args) {
        int s1 = 80;
        int s2 = 90;
        int s3 = 70;
        double average = (s1 + s2 + s3) / 3.0;

        System.out.printf("Average: %.2f%n", average);
    }
}`
    },
    {
      level: 2,
      title: "ការចូលរៀន",
      desc: "ពិនិត្យលក្ខខណ្ឌចូលរៀន៖ អាយុយ៉ាងហោចណាស់ ១៨ និងមាន ID ឬមានការអនុញ្ញាតពីគ្រូ។ បង្ហាញ true/false។",
      requirements: ["ប្រើ && និង ||", "បង្ហាញលទ្ធផល boolean"],
      inputSample: "age=20, hasId=true, teacherPermission=false",
      outputSample: "Can register: true",
      hint: "ប្រើ <code>age >= 18 && (hasId || teacherPermission)</code>។",
      solutionCode: `public class Registration {
    public static void main(String[] args) {
        int age = 20;
        boolean hasId = true;
        boolean teacherPermission = false;

        boolean canRegister = age >= 18 && (hasId || teacherPermission);
        System.out.println("Can register: " + canRegister);
    }
}`
    },
    {
      level: 2,
      title: "ប្រាក់ចំណុចបន្ថែម",
      desc: "អ្នកមានពិន្ទុ 75។ ប្រើ Compound Assignment ដើម្បីបូក 10, ដក 5, គុណ 2 និងចែក 5 តាមលំដាប់។ បង្ហាញលទ្ធផលចុងក្រោយ។",
      requirements: ["ប្រើ +=, -=, *=, /=", "បង្ហាញលទ្ធផលក្រោយជំហាននីមួយៗ"],
      hint: "ធ្វើមួយជំហានម្តងៗ រួច print បន្ទាប់ពីនីមួយៗ។",
      solutionCode: `public class ScoreSteps {
    public static void main(String[] args) {
        int score = 75;
        score += 10;
        System.out.println("After +10: " + score);
        score -= 5;
        System.out.println("After -5: " + score);
        score *= 2;
        System.out.println("After *2: " + score);
        score /= 5;
        System.out.println("After /5: " + score);
    }
}`
    },
    {
      level: 3,
      title: "ការប្រៀបធៀបអាយុ",
      desc: "បង្កើត Variable សម្រាប់អាយុពីរនាក់។ បង្ហាញថានរណាធំជាង ឬថាពួកគេស្មើអាយុ ដោយប្រើ Ternary និង Comparison Operators។",
      requirements: ["ប្រើ Ternary", "គ្របដណ្តប់ករណីស្មើអាយុ"],
      inputSample: "age1 = 20, age2 = 22",
      outputSample: "Person 2 is older",
      hint: "អ្នកអាចប្រើ Ternary ជាប់គ្នា ឬ if-else សម្រាប់ករណីបី។",
      solutionCode: `public class AgeCompare {
    public static void main(String[] args) {
        int age1 = 20;
        int age2 = 22;

        String result = age1 > age2 ? "Person 1 is older"
                : age1 < age2 ? "Person 2 is older"
                : "Same age";
        System.out.println(result);
    }
}`
    },
    {
      level: 3,
      title: "វិភាគ Precedence",
      desc: "គណនាលទ្ធផលនៃ <code>10 + 5 * 2 - 6 / 3</code> ដោយដៃ រួចសរសេរកូដផ្ទៀងផ្ទាត់។ បន្ថែម Parentheses ដើម្បីប្តូរលទ្ធផល។",
      requirements: ["ពន្យល់លំដាប់គណនា", "បង្ហាញលទ្ធផលពីរផ្សេងគ្នា", "ប្រើ Parentheses"],
      hint: "គុណ/ចែកមុន បូក/ដកក្រោយ។ 10 + 10 - 2 = 18។",
      solutionCode: `public class Precedence {
    public static void main(String[] args) {
        int normal = 10 + 5 * 2 - 6 / 3;
        int grouped = (10 + 5) * (2 - 6) / 3;

        System.out.println("Normal: " + normal);
        System.out.println("Grouped: " + grouped);
    }
}`,
      solution: "Normal៖ 5 * 2 = 10 និង 6 / 3 = 2 ដូច្នេះ 10 + 10 - 2 = 18។ Grouped៖ (15) * (-4) / 3 = -60 / 3 = -20។"
    },
    {
      level: 3,
      title: "គណនាពន្ធតាមជាន់",
      desc: "កំណត់អត្រាពន្ធតាមប្រាក់ខែ៖ ក្រោម 1000 = 0%, 1000–2000 = 10%, លើ 2000 = 20%។ ប្រើ Ternary ឬ if-else ដើម្បីគណនាពន្ធ។",
      requirements: ["ប្រើ Comparison Operators", "បង្ហាញអត្រា និងពន្ធ", "សាកល្បងតម្លៃយ៉ាងហោចណាស់ ២"],
      hint: "គណនាអត្រាជា double ដូចជា 0.10 ឬ 0.20។",
      solutionCode: `public class TaxBracket {
    public static void main(String[] args) {
        double salary = 1500;
        double rate = salary < 1000 ? 0.0
                : salary <= 2000 ? 0.10
                : 0.20;
        double tax = salary * rate;

        System.out.println("Salary: " + salary);
        System.out.println("Rate: " + (rate * 100) + "%");
        System.out.println("Tax: " + tax);
    }
}`
    }
  ],
  quiz: [
    { q: "តើ <code>17 / 5</code> ផ្តល់លទ្ធផលអ្វី?", options: ["3.4", "3", "4", "2"], answer: 1, explain: "ដោយសារ Operand ទាំងពីរជា int, Java ធ្វើ Integer Division ហើយបោះបង់ទសភាគ។" },
    { q: "តើ <code>17 % 5</code> ស្មើនឹងអ្វី?", options: ["3", "2", "3.4", "0"], answer: 1, explain: "17 ចែក 5 បាន 3 សល់ 2 ដូច្នេះ Modulus បាន 2។" },
    { q: "តើ <code>x++</code> មានន័យដូចម្តេច?", options: ["បូកមុនប្រើ", "ប្រើមុនបូក", "ដកមួយ", "គុណពីរ"], answer: 1, explain: "Postfix x++ ប្រើតម្លៃចាស់ក្នុង Expression មុន រួចទើបបូក 1។" },
    { q: "តើ Operator ណាមាន Precedence ខ្ពស់ជាង?", options: ["+", "*", "=", "&&"], answer: 1, explain: "Multiplication (*) មាន Precedence ខ្ពស់ជាង Addition (+) និង Assignment។" },
    { q: "តើ <code>age >= 18 && hasId</code> ពិតនៅពេលណា?", options: ["មួយក្នុងពីរពិត", "ទាំងពីរពិត", "ទាំងពីរមិនពិត", "គ្រប់ពេល"], answer: 1, explain: "&& (AND) ត្រូវការទាំងពីរពិត។ || (OR) ត្រូវការតែមួយ។" },
    { q: "តើ <code>String a = \"x\"; String b = \"x\"; a == b</code> គួរប្រើសម្រាប់អ្វី?", options: ["ប្រៀបធៀបអត្ថបទជានិច្ច", "មិនគួរប្រើសម្រាប់ប្រៀបធៀបអត្ថបទ", "គណនាប្រវែង", "បូក String"], answer: 1, explain: "== ប្រៀបធៀប Reference មិនមែនអត្ថបទទេ។ ត្រូវប្រើ equals() សម្រាប់ការប្រៀបធៀបអត្ថបទ។" }
  ],
  summary: [
    "Arithmetic Operators: +, -, *, / និង %។",
    "Integer Division បោះបង់ទសភាគ បើ Operand ជា int។",
    "Compound Assignment ដូចជា += និង -= ជួយសរសេរកូដខ្លី។",
    "Comparison Operators ផ្តល់ boolean; កុំប្រើ = ជំនួស ==។",
    "Logical Operators && និង || មាន Short-circuit Evaluation។",
    "Prefix និង Postfix ខុសគ្នានៅពេលប្រើក្នុង Expression។",
    "Ternary ជាផ្លូវកាត់សម្រាប់ការជ្រើសរើសតម្លៃសាមញ្ញ។"
  ],
  takeaways: [
    "ចាំថា <code>/</code> លើ int មិនផ្តល់ទសភាគទេ។",
    "ប្រើ Parentheses ដើម្បីធ្វើឱ្យ Precedence ច្បាស់។",
    "ប្រយ័ត្ន <code>==</code> ជាមួយ String — ប្រើ <code>equals()</code>។",
    "Short-circuit ជួយការពារ NullPointerException និងបង្កើនប្រសិទ្ធភាព។",
    "Ternary ល្អសម្រាប់តម្លៃខ្លី មិនល្អសម្រាប់ Logic ស្មុគស្មាញ។"
  ],
  sources: [
    { label: "Oracle — Java Operators", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html" },
    { label: "W3Schools — Java Operators", url: "https://www.w3schools.com/java/java_operators.asp" },
    { label: "W3Schools — Java Operator Precedence", url: "https://www.w3schools.com/java/java_operators.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "user-input",
  num: 6,
  part: 6,
  partTitle: "User Input",
  title: "User Input with Scanner",
  titleKh: "ការទទួលទិន្នន័យពីអ្នកប្រើ",
  time: "៥៥ នាទី",
  level: 2,
  intro: "កម្មវិធីពិតត្រូវទទួលទិន្នន័យពីអ្នកប្រើ។ ក្នុង Java យើងប្រើ Class <strong>Scanner</strong> ដើម្បីអានទិន្នន័យពី Keyboard។ មេរៀននេះបង្រៀនវិធីអានចំនួន អត្ថបទ និង Boolean ព្រមទាំងបញ្ហា Newline ដ៏ល្បីល្បាញ។",
  objectives: [
    "Import និងបង្កើត Scanner បាន។",
    "អាន int, double, String និង boolean បាន។",
    "យល់ពីភាពខុសគ្នារវាង next() និង nextLine()។",
    "ដោះស្រាយបញ្ហា Newline បន្ទាប់ពី nextInt()។",
    "ពិនិត្យទិន្នន័យដោយ hasNextInt() និងចាប់ InputMismatchException។",
    "បិទ Scanner ឱ្យបានត្រឹមត្រូវ។"
  ],
  sections: [
    {
      title: "Scanner ជាអ្វី?",
      html: `<p><strong>Scanner</strong> គឺជា Class ក្នុង Package <code>java.util</code> ដែលអានទិន្នន័យពី Input Stream ផ្សេងៗ ដូចជា Keyboard, File ឬ String។ នៅពេលប្រើ <code>new Scanner(System.in)</code> យើងប្រាប់ Scanner ឱ្យអានពី Standard Input (Keyboard)។</p>
<p>ដើម្បីប្រើ Scanner ត្រូវ Import វាមុន៖</p>
<pre><code>import java.util.Scanner;</code></pre>
<p>បន្ទាប់មកបង្កើត Object៖</p>
<pre><code>Scanner scanner = new Scanner(System.in);</code></pre>
<p>ពាក្យ <code>System.in</code> តំណាងឱ្យ Input Stream ដែលមកពី Keyboard។ <code>Scanner</code> ជា Class ដូច្នេះយើងបង្កើត Object ដោយប្រើ <code>new</code>។ យើងនឹងរៀនពី Object និង Constructor លម្អិតក្នុង Part OOP។</p>
<div class="callout info"><div class="callout-title">Import ជាអ្វី?</div><p>Import ប្រាប់ Compiler ថាយើងចង់ប្រើ Class ពី Package ណា។ បើគ្មាន Import អ្នកនឹងឃើញ Error <code>cannot find symbol: class Scanner</code>។</p></div>`
    },
    {
      title: "វិធីអានទិន្នន័យប្រភេទផ្សេងៗ",
      html: `<div class="table-wrap"><table><thead><tr><th>Method</th><th>អានអ្វី</th><th>ឧទាហរណ៍</th></tr></thead><tbody>
<tr><td><code>nextInt()</code></td><td>ចំនួនគត់</td><td><code>int age = sc.nextInt();</code></td></tr>
<tr><td><code>nextDouble()</code></td><td>ចំនួនទសភាគ</td><td><code>double price = sc.nextDouble();</code></td></tr>
<tr><td><code>nextLong()</code></td><td>ចំនួនគត់ធំ</td><td><code>long id = sc.nextLong();</code></td></tr>
<tr><td><code>next()</code></td><td>ពាក្យមួយ (រហូតដល់ចន្លោះ)</td><td><code>String word = sc.next();</code></td></tr>
<tr><td><code>nextLine()</code></td><td>បន្ទាត់ពេញ (រួមចន្លោះ)</td><td><code>String line = sc.nextLine();</code></td></tr>
<tr><td><code>nextBoolean()</code></td><td>true ឬ false</td><td><code>boolean ok = sc.nextBoolean();</code></td></tr>
</tbody></table></div>
<p><strong>next()</strong> អានតែពាក្យដំបូង ហើយឈប់នៅចន្លោះ។ <strong>nextLine()</strong> អានរហូតដល់ចុងបន្ទាត់ រួមទាំងចន្លោះ។ ដូច្នេះបើអ្នកចង់អានឈ្មោះពេញ ដូចជា “Sok Dara” ត្រូវប្រើ <code>nextLine()</code> មិនមែន <code>next()</code> ទេ។</p>
<div class="callout warn"><div class="callout-title">កុំច្រឡំ</div><p><code>nextLine()</code> អានបន្ទាត់ទាំងមូល រួមទាំង String ទទេ។ ប្រសិនបើមាន Newline ដែលនៅសល់ក្នុង Buffer វានឹងអាន Newline នោះជា String ទទេភ្លាម។ នេះជាបញ្ហាដែលយើងនឹងដោះស្រាយខាងក្រោម។</p></div>`
    },
    {
      title: "បញ្ហា Newline ដ៏ល្បី",
      html: `<p>នេះជាបញ្ហាដែលអ្នកចាប់ផ្តើមជួបញឹកញាប់បំផុត។ សូមមើលកូដនេះ៖</p>
<pre><code>Scanner sc = new Scanner(System.in);

System.out.print("Age: ");
int age = sc.nextInt();

System.out.print("Full name: ");
String name = sc.nextLine();

System.out.println("Hello " + name);</code></pre>
<p>ពេលអ្នកវាយ <code>20</code> ហើយចុច Enter, <code>nextInt()</code> អានតែ <code>20</code> ប៉ុណ្ណោះ ហើយទុក Newline (<code>\\n</code>) នៅក្នុង Buffer។ បន្ទាប់មក <code>nextLine()</code> ឃើញ Newline នោះភ្លាម ដូច្នេះវាអាន String ទទេ ហើយរំលងការបញ្ចូលឈ្មោះ។</p>
<h3>ដំណោះស្រាយ ១៖ ហៅ nextLine() បន្ថែម</h3>
<pre><code>int age = sc.nextInt();
sc.nextLine();   // consume the leftover newline

String name = sc.nextLine();</code></pre>
<h3>ដំណោះស្រាយ ២៖ អានគ្រប់យ៉ាងជា nextLine រួចបំលែង</h3>
<pre><code>int age = Integer.parseInt(sc.nextLine());
String name = sc.nextLine();</code></pre>
<p>វិធីទីពីរច្បាស់ជាង ប៉ុន្តែត្រូវគ្រប់គ្រង Exception ប្រសិនបើអ្នកប្រើវាយអក្សរជំនួសលេខ។</p>
<div class="callout tip"><div class="callout-title">ច្បាប់ងាយចាំ</div><p>បើអ្នកប្រើ <code>nextInt()</code> ឬ <code>nextDouble()</code> ហើយបន្ទាប់មកត្រូវការ <code>nextLine()</code> សូមហៅ <code>nextLine()</code> មួយបន្ថែមដើម្បីសម្អាត Newline។</p></div>`
    },
    {
      title: "InputMismatchException និងការពិនិត្យទិន្នន័យ",
      html: `<p>ប្រសិនបើអ្នករំពឹង int ប៉ុន្តែអ្នកប្រើវាយ “abc”, Scanner នឹង throw <code>InputMismatchException</code>។ កម្មវិធីនឹងបញ្ឈប់ដំណើរការប្រសិនបើគ្មានការចាប់ Exception។</p>
<p>យើងអាចពិនិត្យទិន្នន័យមុនអានដោយប្រើ <code>hasNextInt()</code>៖</p>
<pre><code>Scanner sc = new Scanner(System.in);
System.out.print("Enter a number: ");

if (sc.hasNextInt()) {
    int number = sc.nextInt();
    System.out.println("You entered: " + number);
} else {
    System.out.println("Invalid input");
}</code></pre>
<p>ឬប្រើ <code>try-catch</code> ដើម្បីចាប់កំហុស និងសុំឱ្យអ្នកប្រើវាយម្តងទៀត។ យើងនឹងរៀន Exception លម្អិតនៅ Part 13។</p>
<div class="callout info"><div class="callout-title">Scanner គួរបិទទេ?</div><p><code>scanner.close()</code> ជាការអនុវត្តល្អដើម្បីបញ្ចេញ Resource។ ប៉ុន្តែកុំបិទ <code>System.in</code> ប្រសិនបើអ្នកនៅត្រូវអានបន្តទៀតក្នុងកម្មវិធីតែមួយ។ ក្នុងកម្មវិធី Console តូចៗ ការមិនបិទជាធម្មតាមិនបង្កបញ្ហាធ្ងន់ធ្ងរទេ។</p></div>`
    }
  ],
  terms: [
    { en: "Scanner", kh: "ឧបករណ៍អានទិន្នន័យ", text: "Class ក្នុង java.util សម្រាប់អាន Input។" },
    { en: "Standard Input", kh: "ទិន្នន័យបញ្ចូលស្តង់ដារ", text: "Stream ដែលមកពី Keyboard តំណាងដោយ System.in។" },
    { en: "Buffer", kh: "អង្គចងចាំបណ្តោះអាសន្ន", text: "កន្លែងផ្ទុកទិន្នន័យបញ្ចូលបណ្តោះអាសន្ន មុនពេលកម្មវិធីអាន។" },
    { en: "InputMismatchException", kh: "កំហុសប្រភេទទិន្នន័យ", text: "Exception កើតឡើងពេល Input មិនត្រូវនឹង Method ដែលអាន។" },
    { en: "Token", kh: "ពាក្យតូច", text: "ផ្នែកនៃ Input ដែលបំបែកដោយចន្លោះ ដែល next() អាន។" }
  ],
  syntax: [
    { label: "បង្កើត Scanner", code: "import java.util.Scanner;\n\nScanner sc = new Scanner(System.in);" },
    { label: "អាន int និង double", code: 'System.out.print("Age: ");\nint age = sc.nextInt();\nSystem.out.print("Price: ");\ndouble price = sc.nextDouble();' },
    { label: "អាន String", code: 'String word = sc.next();\nsc.nextLine(); // clear newline\nString fullName = sc.nextLine();' },
    { label: "អាន boolean", code: 'System.out.print("Continue? (true/false): ");\nboolean answer = sc.nextBoolean();' },
    { label: "ពិនិត្យ Input", code: 'if (sc.hasNextInt()) {\n    int n = sc.nextInt();\n} else {\n    System.out.println("Invalid input");\n}' }
  ],
  examples: [
    {
      title: "បូកលេខពីរ",
      desc: "កម្មវិធីនេះសុំឱ្យអ្នកប្រើបញ្ចូលចំនួនពីរ រួចបង្ហាញផលបូក។",
      file: "SumTwoNumbers.java",
      code: `import java.util.Scanner;

public class SumTwoNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int first = sc.nextInt();

        System.out.print("Enter second number: ");
        int second = sc.nextInt();

        int sum = first + second;
        System.out.println("Sum = " + sum);

        sc.close();
    }
}`,
      output: "Enter first number: 12\nEnter second number: 8\nSum = 20",
      lines: [
        "<code>import java.util.Scanner;</code> នាំចូល Class Scanner ដើម្បីប្រើបាន។",
        "<code>new Scanner(System.in)</code> បង្កើត Scanner ដែលអានពី Keyboard។",
        "<code>sc.nextInt()</code> រង់ចាំអ្នកប្រើបញ្ចូលចំនួនគត់ រួចផ្ទុកក្នុង Variable។",
        "<code>sc.close()</code> បិទ Scanner ដើម្បីបញ្ចេញ Resource។"
      ]
    },
    {
      title: "ព័ត៌មានផ្ទាល់ខ្លួន និងបញ្ហា Newline",
      desc: "ឧទាហរណ៍នេះបង្ហាញការអានអាយុ និងឈ្មោះពេញ។ សូមសង្កេតការហៅ <code>nextLine()</code> បន្ថែមដើម្បីសម្អាត Newline។",
      file: "ProfileInput.java",
      code: `import java.util.Scanner;

public class ProfileInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Age: ");
        int age = sc.nextInt();
        sc.nextLine();

        System.out.print("Full name: ");
        String name = sc.nextLine();

        System.out.print("City: ");
        String city = sc.nextLine();

        System.out.println("--- Profile ---");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("City: " + city);

        sc.close();
    }
}`,
      output: "Age: 20\nFull name: Sok Dara\nCity: Phnom Penh\n--- Profile ---\nName: Sok Dara\nAge: 20\nCity: Phnom Penh",
      lines: [
        "<code>sc.nextInt()</code> អានអាយុ ហើយទុក Newline ក្នុង Buffer។",
        "<code>sc.nextLine()</code> បន្ទាប់ពី nextInt សម្អាត Newline នោះ។",
        "<code>String name = sc.nextLine()</code> អានឈ្មោះពេញ រួមទាំងចន្លោះ។",
        "ប្រសិនបើខ្វះ <code>sc.nextLine()</code> សម្អាត Newline, name នឹងក្លាយជា String ទទេ។"
      ]
    },
    {
      title: "next() ទល់នឹង nextLine()",
      desc: "ឧទាហរណ៍នេះបង្ហាញភាពខុសគ្នារវាងការអានពាក្យមួយ និងបន្ទាត់ពេញ។",
      file: "NextVsNextLine.java",
      code: `import java.util.Scanner;

public class NextVsNextLine {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String firstWord = sc.next();
        System.out.println("next(): " + firstWord);

        String rest = sc.nextLine();
        System.out.println("nextLine(): " + rest);

        sc.close();
    }
}`,
      output: "Enter a sentence: I love Java\nnext(): I\nnextLine():  love Java",
      lines: [
        "<code>next()</code> អានតែពាក្យ “I” ហើយឈប់នៅចន្លោះ។",
        "<code>nextLine()</code> អានអ្វីដែលនៅសល់ក្នុងបន្ទាត់ គឺ “ love Java”។",
        "ចំណាំថា nextLine() រួមបញ្ចូលចន្លោះដំបូងផងដែរ។"
      ]
    },
    {
      title: "ពិនិត្យទិន្នន័យដោយ hasNextInt",
      desc: "កម្មវិធីនេះមិន throw Exception ទេ បើអ្នកប្រើវាយអក្សរ។ វាពិនិត្យជាមុនដោយ <code>hasNextInt()</code>។",
      file: "SafeInput.java",
      code: `import java.util.Scanner;

public class SafeInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your age: ");
        if (sc.hasNextInt()) {
            int age = sc.nextInt();
            System.out.println("Valid age: " + age);
        } else {
            System.out.println("Invalid input. Please enter a number.");
        }

        sc.close();
    }
}`,
      output: "Enter your age: 20\nValid age: 20",
      lines: [
        "<code>hasNextInt()</code> ត្រឡប់ true ប្រសិនបើ Token បន្ទាប់អាចអានជា int បាន។",
        "បើ false យើងមិនហៅ <code>nextInt()</code> ទេ ដូច្នេះគ្មាន Exception។",
        "នេះជាវិធីសាស្ត្រសាមញ្ញសម្រាប់ Validation មូលដ្ឋាន។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ភ្លេច Import Scanner</span><br><code>Scanner sc = new Scanner(System.in);</code> ដោយគ្មាន <code>import java.util.Scanner;</code>។', fix: "បន្ថែម Import នៅខាងលើឯកសារ មុន Class។" },
    { text: '<span class="bad-code">❌ Newline នៅសល់</span><br>ប្រើ nextInt() រួច nextLine() ភ្លាម ហើយទទួលបាន String ទទេ។', fix: "ហៅ <code>sc.nextLine()</code> មួយបន្ទាប់ពី nextInt() ដើម្បីសម្អាត Newline។" },
    { text: '<span class="bad-code">❌ ប្រើ next() សម្រាប់ឈ្មោះពេញ</span><br>អ្នកនឹងទទួលបានតែពាក្យដំបូង។', fix: "ប្រើ <code>nextLine()</code> សម្រាប់អត្ថបទដែលមានចន្លោះ។" },
    { text: '<span class="bad-code">❌ មិនពិនិត្យ Input</span><br>ប្រើ nextInt() ដោយផ្ទាល់ ហើយអ្នកប្រើវាយអក្សរ → InputMismatchException។', fix: "ប្រើ <code>hasNextInt()</code> ឬ try-catch ដើម្បីគ្រប់គ្រង។" }
  ],
  tips: [
    "បង្ហាញ Prompt ដែលច្បាស់លាស់មុនអាន Input ដូចជា “Enter your age: ”។",
    "កុំបិទ Scanner ច្រើនដង ឬបិទ System.in បើកម្មវិធីនៅត្រូវអានបន្ត។",
    "សម្រាប់កម្មវិធីធំ គេច្រើនប្រើ Console ឬ GUI ជំនួស Scanner។",
    "សាកល្បង Input ខុសៗដើម្បីធ្វើឱ្យកម្មវិធីរឹងមាំ។"
  ],
  exercises: [
    {
      level: 1,
      title: "ស្វាគមន៍អ្នកប្រើ",
      desc: "សុំឱ្យអ្នកប្រើបញ្ចូលឈ្មោះ រួចបង្ហាញ “Hello, [name]!”។",
      requirements: ["ប្រើ Scanner", "ប្រើ nextLine()"],
      inputSample: "Dara",
      outputSample: "Hello, Dara!",
      hint: "បង្កើត Scanner, បង្ហាញ Prompt, អាន nextLine()។",
      solutionCode: `import java.util.Scanner;

public class Greeting {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.nextLine();
        System.out.println("Hello, " + name + "!");
        sc.close();
    }
}`
    },
    {
      level: 1,
      title: "បូកចំនួនបី",
      desc: "អានចំនួនគត់បីពីអ្នកប្រើ រួចបង្ហាញផលបូក និងមធ្យមភាគជា double។",
      requirements: ["ប្រើ nextInt() បីដង", "បង្ហាញ Sum និង Average"],
      inputSample: "10 20 30",
      outputSample: "Sum: 60\nAverage: 20.0",
      hint: "មធ្យមភាគ = sum / 3.0។",
      solutionCode: `import java.util.Scanner;

public class ThreeNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter three numbers: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        int sum = a + b + c;
        double average = sum / 3.0;

        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
        sc.close();
    }
}`
    },
    {
      level: 2,
      title: "ព័ត៌មានសិស្ស",
      desc: "អានឈ្មោះពេញ អាយុ និងពិន្ទុ រួចបង្ហាញសេចក្តីសង្ខេប។ ប្រយ័ត្នបញ្ហា Newline។",
      requirements: ["ប្រើ nextLine(), nextInt(), nextDouble()", "បង្ហាញព័ត៌មានទាំងអស់", "ដោះស្រាយ Newline"],
      inputSample: "Sok Dara\n20\n88.5",
      outputSample: "Name: Sok Dara\nAge: 20\nScore: 88.5",
      hint: "អាន nextLine() សម្រាប់ឈ្មោះមុន បន្ទាប់មក nextInt() និង nextDouble()។",
      solutionCode: `import java.util.Scanner;

public class StudentInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Full name: ");
        String name = sc.nextLine();

        System.out.print("Age: ");
        int age = sc.nextInt();

        System.out.print("Score: ");
        double score = sc.nextDouble();

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Score: " + score);
        sc.close();
    }
}`
    },
    {
      level: 2,
      title: "ម៉ាស៊ីនគិតលេខពីរចំនួន",
      desc: "អានចំនួនពីរ និង Operator (+, -, *, /) ជា String រួចគណនាតាម Operator នោះ។ ប្រើ if-else ឬ switch។",
      requirements: ["អាន double ពីរ", "អាន Operator", "គាំទ្រ +, -, *, /", "បង្ហាញលទ្ធផល"],
      inputSample: "10\n5\n*",
      outputSample: "Result: 50.0",
      hint: "ប្រើ <code>sc.next()</code> សម្រាប់ Operator ដើម្បីជៀស Newline។",
      solutionCode: `import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("First number: ");
        double a = sc.nextDouble();

        System.out.print("Second number: ");
        double b = sc.nextDouble();

        System.out.print("Operator (+ - * /): ");
        String op = sc.next();

        double result;
        if (op.equals("+")) {
            result = a + b;
        } else if (op.equals("-")) {
            result = a - b;
        } else if (op.equals("*")) {
            result = a * b;
        } else if (op.equals("/")) {
            result = a / b;
        } else {
            System.out.println("Invalid operator");
            sc.close();
            return;
        }

        System.out.println("Result: " + result);
        sc.close();
    }
}`
    },
    {
      level: 2,
      title: "ពិនិត្យអាយុ",
      desc: "អានអាយុពីអ្នកប្រើ ហើយបង្ហាញថាជា Adult ឬ Minor។ ប្រើ hasNextInt() ដើម្បីពិនិត្យថា Input ត្រឹមត្រូវ។",
      requirements: ["ប្រើ hasNextInt()", "បង្ហាញ Invalid input បើខុស", "ប្រើលក្ខខណ្ឌអាយុ"],
      inputSample: "20",
      outputSample: "Adult",
      hint: "បន្ទាប់ពី hasNextInt() true សូមអាន nextInt()។",
      solutionCode: `import java.util.Scanner;

public class AgeCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter age: ");
        if (!sc.hasNextInt()) {
            System.out.println("Invalid input");
            sc.close();
            return;
        }

        int age = sc.nextInt();
        System.out.println(age >= 18 ? "Adult" : "Minor");
        sc.close();
    }
}`
    },
    {
      level: 3,
      title: "គណនាប្រាក់ខែសុទ្ធ",
      desc: "អានឈ្មោះកម្មករ ប្រាក់ខែដើម និងចំនួនម៉ោងបន្ថែម។ គណនាប្រាក់ម៉ោងបន្ថែម ១.៥ ដង និងពន្ធ ១០%។ បង្ហាញប្រាក់ខែសុទ្ធ។",
      requirements: ["អាន String និង double", "គណនា Overtime", "គណនាពន្ធ", "បង្ហាញជា ២ តំណាក់ទសភាគ"],
      inputSample: "Dara\n500\n10",
      outputSample: "Employee: Dara\nGross: 575.00\nTax: 57.50\nNet: 517.50",
      hint: "Overtime Pay = hours × (salary / 40) × 1.5 ឬកំណត់អត្រាម៉ោងដោយខ្លួនឯង។",
      solutionCode: `import java.util.Scanner;

public class NetSalary {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Employee name: ");
        String name = sc.nextLine();

        System.out.print("Base salary: ");
        double salary = sc.nextDouble();

        System.out.print("Overtime hours: ");
        double hours = sc.nextDouble();

        double hourlyRate = salary / 40;
        double overtimePay = hours * hourlyRate * 1.5;
        double gross = salary + overtimePay;
        double tax = gross * 0.10;
        double net = gross - tax;

        System.out.println("Employee: " + name);
        System.out.printf("Gross: %.2f%n", gross);
        System.out.printf("Tax: %.2f%n", tax);
        System.out.printf("Net: %.2f%n", net);

        sc.close();
    }
}`
    },
    {
      level: 3,
      title: "ទទួល Input ម្តងទៀត",
      desc: "សុំឱ្យអ្នកប្រើបញ្ចូលចំនួនគត់។ ប្រសិនបើ Input ខុស សូមបង្ហាញសារហើយបន្តរហូតដល់ត្រូវ។ ប្រើ while និង hasNextInt()។",
      requirements: ["ប្រើ while loop", "ប្រើ hasNextInt()", "បញ្ចប់នៅពេល Input ត្រឹមត្រូវ"],
      inputSample: "abc\n20",
      outputSample: "Invalid input, try again.\nYou entered: 20",
      hint: "បើ hasNextInt() false ត្រូវហៅ <code>sc.next()</code> ដើម្បីបោះបង់ Token ខុស។",
      solutionCode: `import java.util.Scanner;

public class RetryInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = 0;
        boolean valid = false;

        while (!valid) {
            System.out.print("Enter a whole number: ");
            if (sc.hasNextInt()) {
                number = sc.nextInt();
                valid = true;
            } else {
                System.out.println("Invalid input, try again.");
                sc.next();
            }
        }

        System.out.println("You entered: " + number);
        sc.close();
    }
}`
    }
  ],
  quiz: [
    { q: "តើ Class ណាប្រើសម្រាប់អាន Input ពី Keyboard?", options: ["Reader", "Scanner", "Input", "Console"], answer: 1, explain: "Scanner ក្នុង java.util គឺជា Class ដែលគេប្រើញឹកញាប់បំផុតសម្រាប់ Console Input។" },
    { q: "តើ Method ណាអាន String ទាំងបន្ទាត់?", options: ["next()", "nextLine()", "nextString()", "readLine()"], answer: 1, explain: "nextLine() អានរហូតដល់ចុងបន្ទាត់ រួមទាំងចន្លោះ។" },
    { q: "ហេតុអ្វី nextLine() អាន String ទទេបន្ទាប់ពី nextInt()?", options: ["Scanner ខូច", "Newline នៅសល់ក្នុង Buffer", "ខ្វះ Import", "Java Bug"], answer: 1, explain: "nextInt() អានតែលេខ ហើយទុក Newline នៅសល់; nextLine() អាន Newline នោះភ្លាម។" },
    { q: "តើ Method ណាពិនិត្យថា Input ជា int?", options: ["hasInt()", "nextInt()", "hasNextInt()", "isInt()"], answer: 2, explain: "hasNextInt() ត្រឡប់ boolean ដោយមិនបំប្លែង Token។" },
    { q: "តើ Exception ណាកើតឡើងពេលអាន int ប៉ុន្តែ Input ជាអក្សរ?", options: ["NumberFormatException", "InputMismatchException", "IOException", "NullPointerException"], answer: 1, explain: "Scanner throw InputMismatchException ពេល Token មិនត្រូវនឹង Method។ NumberFormatException កើតពី Integer.parseInt។" }
  ],
  summary: [
    "Scanner អាន Input ពី System.in និងត្រូវ Import ពី java.util។",
    "nextInt(), nextDouble(), next(), nextLine() និង nextBoolean() អានប្រភេទផ្សេងៗ។",
    "next() អានតែពាក្យមួយ; nextLine() អានបន្ទាត់ពេញ។",
    "Newline ដែលនៅសល់ពី nextInt() អាចធ្វើឱ្យ nextLine() អាន String ទទេ។",
    "hasNextInt() និង try-catch ជួយគ្រប់គ្រង Input ខុស។",
    "ការបិទ Scanner ជាការអនុវត្តល្អ ប៉ុន្តែត្រូវប្រយ័ត្នកុំបិទ System.in ខុសពេល។"
  ],
  takeaways: [
    "ចាំ Import <code>java.util.Scanner</code> រាល់ពេលប្រើ។",
    "ប្រើ <code>nextLine()</code> បន្ថែមដើម្បីសម្អាត Newline ក្រោយ nextInt()។",
    "បង្ហាញ Prompt ឱ្យច្បាស់ដើម្បីឱ្យអ្នកប្រើដឹងត្រូវវាយអ្វី។",
    "កុំទុកចិត្ត Input របស់អ្នកប្រើ — ត្រូវពិនិត្យជានិច្ច។",
    "Scanner ជាច្រកចូលដំបូងទៅកាន់កម្មវិធីអន្តរកម្ម (Interactive Program)។"
  ],
  sources: [
    { label: "Oracle — Scanner API", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html" },
    { label: "W3Schools — Java User Input", url: "https://www.w3schools.com/java/java_user_input.asp" },
    { label: "GeeksforGeeks — Scanner Class", url: "https://www.geeksforgeeks.org/scanner-class-in-java/" }
  ]
});

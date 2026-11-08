/* Lessons 01–03: Introduction, Environment Setup, Java Syntax */
window.JAVA_LESSONS = window.JAVA_LESSONS || [];

window.JAVA_LESSONS.push({
  id: "java-introduction",
  num: 1,
  part: 1,
  partTitle: "Introduction to Java",
  title: "Java Introduction",
  titleKh: "សេចក្តីផ្តើមអំពី Java",
  time: "៤៥ នាទី",
  level: 1,
  intro: "មេរៀនដំបូងនេះពន្យល់ថា <strong>Java</strong> ជាអ្វី ហេតុអ្វីគេប្រើវា និងរបៀបដែលកូដ Java ដំណើរការ។ យើងនឹងចាប់ផ្តើមពីគោលគំនិតសាមញ្ញបំផុត បន្ទាប់មកឈានទៅដល់របៀបដែល JDK, JRE និង JVM ធ្វើការជាមួយគ្នា។",
  objectives: [
    "ពន្យល់បានថា Java ជាភាសាកម្មវិធីប្រភេទណា និងហេតុអ្វីវាពេញនិយម។",
    "ដឹងប្រវត្តិសង្ខេប និងការវិវត្តន៍របស់ Java រួមទាំងការគ្រប់គ្រងដោយ Oracle។",
    "យល់ពីគោលការណ៍ Write Once, Run Anywhere។",
    "បែងចែកបានរវាង JDK, JRE និង JVM។",
    "ពន្យល់ដំណើរការ compile និង execute របស់ Java បាន។",
    "ប្រៀបធៀប Java ជាមួយ C++ និង Python បាន។"
  ],
  sections: [
    {
      title: "Java ជាអ្វី?",
      html:
        "<p><strong>Java</strong> គឺជាភាសាសរសេរកម្មវិធី (Programming Language) ប្រភេទ <em>Object-Oriented</em> ដែលបង្កើតឡើងដោយ James Gosling នៅក្រុមហ៊ុន Sun Microsystems ក្នុងឆ្នាំ ១៩៩១។ Java ត្រូវបានរចនាឡើងដើម្បីឱ្យកូដមួយអាចដំណើរការបានលើឧបករណ៍ និងប្រព័ន្ធប្រតិបត្តិការផ្សេងៗគ្នា ដូចជា Windows, macOS និង Linux ដោយមិនចាំបាច់សរសេរកូដថ្មីសម្រាប់ឧបករណ៍នីមួយៗ។</p>" +
        "<p>ពេលយើងសរសេរកូដ Java យើងសរសេរជាឯកសារ <code>.java</code>។ បន្ទាប់មក <strong>Java Compiler</strong> បំលែងឯកសារនោះទៅជា <strong>Bytecode</strong> ដែលមាននៅក្នុងឯកសារ <code>.class</code>។ Bytecode នេះមិនមែនជាកូដម៉ាស៊ីន (Machine Code) ផ្ទាល់ទេ ប៉ុន្តែវាត្រូវបានអាន និងបំលែងបន្តដោយ <strong>JVM</strong> (Java Virtual Machine) នៅលើកុំព្យូទ័រនីមួយៗ។ នេះជាហេតុផលដែល Java អាចដំណើរការបានគ្រប់ទីកន្លែង។</p>" +
        '<div class="callout info"><div class="callout-title">និយមន័យខ្លី</div><p>Java គឺជាភាសាកម្មវិធីដែល compile ទៅជា bytecode ហើយដំណើរការលើ JVM។ វាជាភាសា statically typed, object-oriented និងមាន Garbage Collector ដែលគ្រប់គ្រង Memory ជំនួសអ្នកសរសេរកូដភាគច្រើន។</p></div>' +
        "<h3>ហេតុអ្វីឈ្មោះ Java?</h3>" +
        "<p>ដំបូងគេហៅវាថា <strong>Oak</strong> តាមដើមឈើមួយនៅខាងក្រៅការិយាល័យ។ ប៉ុន្តែឈ្មោះ Oak មានម៉ាកយីហោផ្សេងប្រើរួចហើយ ដូច្នេះក្រុមការងារបានជ្រើសរើសឈ្មោះ <strong>Java</strong> ដែលជាឈ្មោះប្រភេទកាហ្វេដុតនៅកោះ Java ប្រទេសឥណ្ឌូនេស៊ី។ នេះជាមូលហេតុដែល Logo របស់ Java មានរូបពែងកាហ្វេកំពុងពុះ។</p>"
    },
    {
      title: "ប្រវត្តិសង្ខេបរបស់ Java",
      html:
        '<div class="table-wrap"><table><thead><tr><th>ឆ្នាំ</th><th>ព្រឹត្តិការណ៍សំខាន់</th></tr></thead><tbody>' +
        "<tr><td>១៩៩១</td><td>គម្រោង Green ចាប់ផ្តើមនៅ Sun Microsystems ដោយ James Gosling និងក្រុមការងារ។</td></tr>" +
        "<tr><td>១៩៩៥</td><td>Java 1.0 ត្រូវបានចេញផ្សាយជាផ្លូវការ។ មានគោលការណ៍ Write Once, Run Anywhere។</td></tr>" +
        "<tr><td>១៩៩៨</td><td>Java 2 ចេញផ្សាយ ជាមួយ Java Foundation Classes និង Collections Framework។</td></tr>" +
        "<tr><td>២០០៤</td><td>Java 5 បន្ថែម Generics, Enhanced for loop, Autoboxing និង Enum។</td></tr>" +
        "<tr><td>២០១០</td><td>Oracle ទិញ Sun Microsystems ហើយក្លាយជាអ្នកគ្រប់គ្រង Java។</td></tr>" +
        "<tr><td>២០១៤</td><td>Java 8 បន្ថែម Lambda Expression, Stream API និង Default Methods។</td></tr>" +
        "<tr><td>២០១៧</td><td>Java 9 ចេញផ្សាយជាមួយ Module System និងការចេញផ្សាយរៀងរាល់ ៦ ខែ។</td></tr>" +
        "<tr><td>២០២១</td><td>Java 17 ជា Long-Term Support (LTS) ដែលពេញនិយមបំផុតមួយ។</td></tr>" +
        "<tr><td>២០២៣</td><td>Java 21 LTS បន្ថែម Record Patterns, Pattern Matching និង Virtual Threads។</td></tr>" +
        "<tr><td>២០២៥</td><td>Java 25 ចេញផ្សាយជា LTS ថ្មី ដែលបន្តភាពឆបគ្នាជាមួយកូដចាស់។</td></tr>" +
        "</tbody></table></div>" +
        "<p>ចំណាំ៖ ក្នុងមេរៀននេះ យើងប្រើ Syntax ដែលដំណើរការលើ JDK 17 ឡើងទៅ។ ប្រសិនបើអ្នកប្រើ JDK ចាស់ជាង 17 មុខងារខ្លះដូចជា switch expression អាចមិនដំណើរការ។</p>"
    },
    {
      title: "ហេតុអ្វីគួររៀន Java?",
      html:
        "<p>Java មានអាយុច្រើនឆ្នាំ ប៉ុន្តែនៅតែពេញនិយមខ្លាំងក្នុងឧស្សាហកម្ម។ ហេតុផលសំខាន់ៗមាន៖</p>" +
        "<ul>" +
        "<li><strong>តម្រូវការការងារខ្ពស់</strong>៖ ធនាគារ ក្រុមហ៊ុនធំៗ និងប្រព័ន្ធរដ្ឋាភិបាលជាច្រើនប្រើ Java សម្រាប់ Backend។</li>" +
        "<li><strong>មូលដ្ឋានរឹងមាំ</strong>៖ ការរៀន Java ជួយឱ្យអ្នកយល់ OOP, Data Types, Memory និង Design Patterns បានយ៉ាងល្អ។</li>" +
        "<li><strong>អាចប្រើបានច្រើនវិស័យ</strong>៖ Web Backend, Android, Desktop, Enterprise, Big Data និង Cloud។</li>" +
        "<li><strong>សហគមន៍ធំ</strong>៖ មានឯកសារ វីដេអូ និង Library រាប់ពាន់សម្រាប់ដោះស្រាយបញ្ហា។</li>" +
        "<li><strong>មានស្ថិរភាព</strong>៖ Java ខិតខំរក្សា Backward Compatibility ដូច្នេះកូដចាស់អាចដំណើរការបានយូរ។</li>" +
        "</ul>" +
        "<p>សម្រាប់អ្នកចាប់ផ្តើម Java មិនមែនជាភាសាងាយបំផុតទេ ប៉ុន្តែវាបង្រៀនអ្នកឱ្យសរសេរកូដដោយមានរចនាសម្ព័ន្ធ និងគិតអំពី Type តាំងពីដំបូង។ នេះជាគុណសម្បត្តិដ៏ធំសម្រាប់ការអភិវឌ្ឍន៍ជំនាញរយៈពេលវែង។</p>"
    },
    {
      title: "លក្ខណៈសំខាន់ៗរបស់ Java",
      html:
        '<div class="term-grid">' +
        '<div class="term"><dt>Simple</dt><dd>Syntax ស្រដៀង C/C++ ប៉ុន្តែដកចេញនូវចំណុចស្មុគស្មាញដូចជា Pointer និង Manual Memory Management។</dd></div>' +
        '<div class="term"><dt>Object-Oriented</dt><dd>រៀបចំកូដជា Class និង Object ដែលជួយងាយស្រួលថែទាំ និងពង្រីក។</dd></div>' +
        '<div class="term"><dt>Platform Independent</dt><dd>Compile ម្តង អាចដំណើរការលើ JVM គ្រប់ Platform ដែលមាន។</dd></div>' +
        '<div class="term"><dt>Secure</dt><dd>មិនអនុញ្ញាត Pointer Arithmetic ដោយផ្ទាល់ និងមាន ClassLoader, Bytecode Verifier។</dd></div>' +
        '<div class="term"><dt>Robust</dt><dd>មាន Exception Handling និង Garbage Collection ដែលជួយកាត់បន្ថយ Crash។</dd></div>' +
        '<div class="term"><dt>Multithreaded</dt><dd>គាំទ្រការដំណើរការកិច្ចការច្រើនក្នុងពេលតែមួយ។</dd></div>' +
        '<div class="term"><dt>Portable</dt><dd>Type Sizes ត្រូវបានកំណត់ច្បាស់ ដូច្នេះលទ្ធផលមិនខុសគ្នាតាម Platform។</dd></div>' +
        '<div class="term"><dt>Rich API</dt><dd>មាន Standard Library ធំសម្រាប់ String, Collections, File, Network, Database។</dd></div>' +
        '</div>' +
        '<div class="callout tip"><div class="callout-title">សម្រាប់គ្រូបង្រៀន</div><p>សូមពន្យល់សិស្សថា Platform Independent មិនមានន័យថា JVM មិនខុសគ្នាទេ។ JVM ខ្លួនឯងត្រូវបានដំឡើងខុសៗគ្នាតាម OS ប៉ុន្តែ Bytecode គឺដូចគ្នា។ ដូច្នេះ “Write Once, Run Anywhere” គឺពិតតែនៅពេលមាន JVM ត្រឹមត្រូវ។</p></div>'
    },
    {
      title: "Java ត្រូវបានប្រើនៅឯណា?",
      html:
        "<ul>" +
        "<li><strong>Web Backend</strong>៖ Spring Boot, Jakarta EE សម្រាប់ API និងប្រព័ន្ធធំៗ។</li>" +
        "<li><strong>Android</strong>៖ Android SDK ប្រើ Java និង Kotlin។ Java ជាមូលដ្ឋានសំខាន់របស់ Android។</li>" +
        "<li><strong>Enterprise Software</strong>៖ ប្រព័ន្ធធនាគារ គណនេយ្យ និងរដ្ឋាភិបាល។</li>" +
        "<li><strong>Big Data</strong>៖ Apache Hadoop, Spark និង Kafka សរសេរដោយ Java/Scala។</li>" +
        "<li><strong>Desktop Application</strong>៖ JavaFX និង Swing។</li>" +
        "<li><strong>Embedded &amp; IoT</strong>៖ ឧបករណ៍ឆ្លាតវៃ និង Smart Card។</li>" +
        "</ul>" +
        "<p>នៅកម្ពុជា Java ត្រូវបានប្រើយ៉ាងទូលំទូលាយក្នុងក្រុមហ៊ុន Outsourcing, Bank, Fintech និងការបង្រៀននៅសាកលវិទ្យាល័យ។ ការយល់ Java ជួយឱ្យអ្នកអាចរៀន Spring Boot, Android ឬ Backend Framework ផ្សេងៗបានលឿន។</p>"
    },
    {
      title: "Java vs C++ vs Python",
      html:
        '<div class="table-wrap"><table><thead><tr><th>លក្ខណៈ</th><th>Java</th><th>C++</th><th>Python</th></tr></thead><tbody>' +
        "<tr><td>របៀបដំណើរការ</td><td>Compile ទៅ Bytecode រត់លើ JVM</td><td>Compile ទៅ Machine Code ផ្ទាល់</td><td>Interpreter (ជាទូទៅ)</td></tr>" +
        "<tr><td>Type System</td><td>Static, Strong</td><td>Static, Weak ខ្លះ</td><td>Dynamic</td></tr>" +
        "<tr><td>Memory Management</td><td>Garbage Collector</td><td>Manual (new/delete) + Smart Pointer</td><td>Garbage Collector</td></tr>" +
        "<tr><td>Pointer</td><td>គ្មាន Pointer ផ្ទាល់</td><td>មាន Pointer</td><td>គ្មាន Pointer ផ្ទាល់</td></tr>" +
        "<tr><td>ល្បឿន</td><td>លឿន (JIT)</td><td>លឿនបំផុត</td><td>យឺតជាង (ជាទូទៅ)</td></tr>" +
        "<tr><td>ងាយរៀន</td><td>មធ្យម</td><td>ពិបាក</td><td>ងាយ</td></tr>" +
        "<tr><td>ការប្រើប្រាស់</td><td>Enterprise, Android, Backend</td><td>Game Engine, System, Embedded</td><td>AI, Data Science, Scripting</td></tr>" +
        "</tbody></table></div>" +
        "<p>គ្មានភាសាណាល្អបំផុតសម្រាប់គ្រប់ការងារទេ។ Java ល្អសម្រាប់ប្រព័ន្ធធំដែលត្រូវការស្ថិរភាព និងក្រុមការងារធំ។ Python ល្អសម្រាប់ការសាកល្បងគំនិតរហ័ស និង AI។ C++ ល្អសម្រាប់កម្មវិធីដែលត្រូវការល្បឿនខ្លាំង។</p>"
    },
    {
      title: "JDK, JRE និង JVM",
      html:
        "<p>ពាក្យបីនេះជាពាក្យដែលអ្នកចាប់ផ្តើមច្រើនច្រឡំ។ សូមចងចាំថាវាជាស្រទាប់ (Layers) ដែលពាក់ព័ន្ធគ្នា៖</p>" +
        "<ul>" +
        "<li><strong>JVM (Java Virtual Machine)</strong>៖ ម៉ាស៊ីននិម្មិតដែលអាន Bytecode ហើយបំលែងវាទៅជាការណែនាំដែល CPU អាចយល់បាន។ JVM គឺជាអ្នកធានាថាកូដ Java ដំណើរការដូចគ្នាលើ OS ផ្សេងៗ។</li>" +
        "<li><strong>JRE (Java Runtime Environment)</strong>៖ មាន JVM បូករួម Standard Libraries ដែលចាំបាច់សម្រាប់ <em>ដំណើរការ</em>កម្មវិធី Java។ វាមិនមាន Compiler ទេ។</li>" +
        "<li><strong>JDK (Java Development Kit)</strong>៖ មាន JRE បូករួម Compiler (<code>javac</code>) និងឧបករណ៍អភិវឌ្ឍន៍ផ្សេងៗទៀត។ អ្នកត្រូវការ JDK ដើម្បីសរសេរកូដ។</li>" +
        "</ul>" +
        '<div class="callout info"><div class="callout-title">រូបមន្តចងចាំ</div><p><code>JDK = JRE + Tools (javac, jar, javadoc…)</code><br><code>JRE = JVM + Libraries</code><br>ដូច្នេះ JDK ⊃ JRE ⊃ JVM។ អ្នកអភិវឌ្ឍន៍ត្រូវការ JDK; អ្នកប្រើធម្មតាត្រូវការតែ JRE (ឬ JDK ក៏បាន)។</p></div>' +
        "<p>ក្នុង Java សម័យទំនើប ការចែកចាយជាច្រើនដូចជា JDK 17 និង JDK 21 រួមបញ្ចូលទាំង JRE និងឧបករណ៍អភិវឌ្ឍន៍។ ដូច្នេះអ្នកមិនចាំបាច់ដំឡើង JRE ដោយឡែកទេ។</p>"
    },
    {
      title: "របៀបដែល Java ដំណើរការខាងក្នុង",
      html:
        "<p>ដំណើរការពីកូដទៅកាន់លទ្ធផលមានជំហានដូចខាងក្រោម៖</p>" +
        "<ol>" +
        "<li><strong>សរសេរកូដ</strong>៖ អ្នកបង្កើតឯកសារ <code>Hello.java</code>។</li>" +
        "<li><strong>Compile</strong>៖ ប្រើ <code>javac Hello.java</code>។ Compiler ពិនិត្យ Syntax ហើយបង្កើត <code>Hello.class</code> ដែលមាន Bytecode។</li>" +
        "<li><strong>Load</strong>៖ ពេលរត់ <code>java Hello</code>, JVM ប្រើ ClassLoader ដើម្បី Load Class ចូល Memory។</li>" +
        "<li><strong>Verify</strong>៖ Bytecode Verifier ពិនិត្យថា Bytecode មានសុវត្ថិភាព និងមិនធ្វើប្រតិបត្តិការខុសច្បាប់។</li>" +
        "<li><strong>Execute</strong>៖ JVM បំលែង Bytecode ទៅ Machine Code តាមរយៈ JIT (Just-In-Time) Compiler ហើយដំណើរការ។</li>" +
        "<li><strong>Garbage Collection</strong>៖ JVM បោសសម្អាត Object ដែលលែងប្រើដើម្បីដោះ Memory។</li>" +
        "</ol>" +
        "<p>ដ្យាក្រាមសាមញ្ញ៖</p>" +
        '<div class="code-card"><div class="code-head"><span class="code-title">Compilation Flow</span><button class="copy-btn" type="button">ចម្លង</button></div><pre><code>Hello.java\n    │  javac\n    ▼\nHello.class  (Bytecode)\n    │  JVM (ClassLoader → Verifier → JIT)\n    ▼\nProgram Output</code></pre></div>' +
        "<p>ចំណុចសំខាន់៖ Java មិន compile ទៅកូដម៉ាស៊ីនផ្ទាល់ទេ។ វា compile ទៅ Bytecode ដែលអាចផ្លាស់ទីបាន (Portable)។ នេះជាមូលហេតុដែលឯកសារ <code>.class</code> មួយអាចរត់បានលើ Windows, macOS និង Linux ដោយគ្រាន់តែមាន JVM ដែលត្រូវគ្នា។</p>"
    }
  ],
  terms: [
    { en: "Bytecode", kh: "កូដកម្រិតកណ្តាល", text: "កូដដែល Compiler បង្កើតពី Java Source។ វាមិនមែនជាកូដម៉ាស៊ីនទេ ប៉ុន្តែ JVM អាចអានបាន។" },
    { en: "JVM", kh: "ម៉ាស៊ីននិម្មិត Java", text: "បរិស្ថានដែលដំណើរការ Bytecode និងគ្រប់គ្រង Memory របស់កម្មវិធី Java។" },
    { en: "JDK", kh: "កញ្ចប់អភិវឌ្ឍន៍", text: "កញ្ចប់ដែលរួមមាន Compiler, JRE និងឧបករណ៍សម្រាប់សរសេរកូដ Java។" },
    { en: "WORA", kh: "សរសេរម្តង រត់បានគ្រប់ទី", text: "Write Once, Run Anywhere — គោលការណ៍ស្នូលរបស់ Java។" },
    { en: "JIT", kh: "កុំព្យូទ័របំលែងពេលរត់", text: "Just-In-Time Compiler បំលែង Bytecode ទៅ Machine Code ពេលកម្មវិធីកំពុងដំណើរការ ដើម្បីបង្កើនល្បឿន។" },
    { en: "Garbage Collector", kh: "អ្នកបោសសម្អាត Memory", text: "យន្តការស្វ័យប្រវត្តិដែលដោះ Memory ពី Object ដែលលែងមាន Reference។" }
  ],
  syntax: [
    {
      label: "ឯកសារ Java ដំបូង",
      code: 'public class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
      note: "រក្សាទុកជា Hello.java — ឈ្មោះឯកសារត្រូវដូចឈ្មោះ public class ។"
    },
    {
      label: "Compile និង Run តាម Terminal",
      code: "javac Hello.java\njava Hello",
      note: "javac បង្កើត Hello.class; java រត់ Class នោះដោយមិនដាក់ .class ឬ .java ក្នុងពេល run។"
    }
  ],
  examples: [
    {
      title: "កម្មវិធី Hello World",
      desc: "ឧទាហរណ៍ដំបូងបំផុតដែលគ្រប់អ្នករៀន Java ត្រូវសរសេរ។ វាបង្ហាញរចនាសម្ព័ន្ធមូលដ្ឋានរបស់កម្មវិធី Java។",
      file: "Hello.java",
      code: 'public class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
      output: "Hello, Java!",
      lines: [
        "<strong>បន្ទាត់ ១៖</strong> <code>public class Hello</code> ប្រកាស Class ឈ្មោះ Hello។ <code>public</code> មានន័យថាអាចចូលប្រើបានពីខាងក្រៅ Package។",
        "<strong>បន្ទាត់ ២៖</strong> <code>public static void main(String[] args)</code> គឺជា Entry Point ដែល JVM ហៅពេលកម្មវិធីចាប់ផ្តើម។",
        "<strong>បន្ទាត់ ៣៖</strong> <code>System.out.println(...)</code> បញ្ចាំងអត្ថបទទៅ Console ហើយបន្ថែម New Line នៅចុងបញ្ចប់។",
        "<strong>បន្ទាត់ ៤–៥៖</strong> បិទ Block របស់ Method និង Class ដោយ <code>}</code>។"
      ]
    },
    {
      title: "ការបោះពុម្ពច្រើនបន្ទាត់",
      desc: "កម្មវិធីអាចបញ្ចាំងអត្ថបទច្រើនបន្ទាត់បាន។ សង្កេតភាពខុសគ្នារវាង <code>print</code> និង <code>println</code>។",
      file: "AboutJava.java",
      code: 'public class AboutJava {\n    public static void main(String[] args) {\n        System.out.println("Java is:");\n        System.out.println("- Platform independent");\n        System.out.println("- Object-oriented");\n        System.out.print("Learn ");\n        System.out.println("step by step");\n    }\n}',
      output: "Java is:\n- Platform independent\n- Object-oriented\nLearn step by step",
      lines: [
        "<code>println</code> បញ្ចាំងអត្ថបទ រួចចុះបន្ទាត់ថ្មី។",
        "<code>print</code> បញ្ចាំងអត្ថបទដោយមិនចុះបន្ទាត់; ដូច្នេះ “Learn ” និង “step by step” នៅជាប់គ្នា។",
        "String ត្រូវដាក់ក្នុង Double Quote <code>\"...\"</code> ជានិច្ច។"
      ]
    }
  ],
  mistakes: [
    {
      text: '<span class="bad-code">❌ ឈ្មោះឯកសារមិនដូចឈ្មោះ public class</span><br>បើឯកសារឈ្មោះ <code>hello.java</code> តែ Class ឈ្មោះ <code>Hello</code> Compiler នឹងរាយកំហុស <code>class Hello is public, should be declared in a file named Hello.java</code>។',
      fix: "ដាក់ឈ្មោះឯកសារឱ្យដូចឈ្មោះ public class និងគោរព Case (អក្សរធំ-តូច)។"
    },
    {
      text: `<span class="bad-code">❌ ខកខាន Semicolon</span><br>ប្រយោគ Java ភាគច្រើនត្រូវបញ្ចប់ដោយ <code>;</code>។ បើខ្វះ Compiler រាយ <code>';' expected</code>។`,
      fix: "បន្ថែម Semicolon នៅចុងបន្ទាត់ប្រយោគ លើកលែងបន្ទាត់ដែលបើក Block ដូចជា class, method, if, for។"
    },
    {
      text: '<span class="bad-code">❌ រត់ java Hello.java</span><br>ការរត់ <code>java Hello.java</code> អាចដំណើរការក្នុង Java 11+ តែនៅពេលប្រើ IDE ឬ Project ធំ គេប្រើ <code>javac</code> រួច <code>java</code> ដើម្បីច្បាស់លាស់។',
      fix: "ប្រើ <code>javac Hello.java</code> បន្ទាប់មក <code>java Hello</code>។ កុំដាក់ .class ក្នុងពេល run។"
    }
  ],
  tips: [
    "រៀនប្រើ Terminal ឱ្យបានស្គាល់ជាមុន ព្រោះវាជួយឱ្យអ្នកយល់ពី Compilation ច្បាស់ជាងការចុច Run ក្នុង IDE។",
    "អានសារ Error ពីបន្ទាត់ដំបូង និងចុងក្រោយ។ បន្ទាត់ដំបូងប្រាប់ទីតាំង ចុងក្រោយប្រាប់បញ្ហាពិត។",
    "សរសេរកូដដោយខ្លួនឯងរាល់ឧទាហរណ៍។ ការអានតែមិនគ្រប់គ្រាន់សម្រាប់ការរៀន Programming។"
  ],
  exercises: [
    {
      level: 1,
      title: "បង្ហាញឈ្មោះរបស់អ្នក",
      desc: "សរសេរកម្មវិធី Java ដែលបង្ហាញឈ្មោះរបស់អ្នក និងពាក្យ “Java Learner” នៅបន្ទាត់ដាច់ពីគ្នា។",
      requirements: ["ប្រើ Class ឈ្មោះ MyName", "ប្រើ System.out.println ពីរដង"],
      outputSample: "Sok Dara\nJava Learner",
      hint: "បង្កើតឯកសារ MyName.java ហើយសរសេរ main method ដូចឧទាហរណ៍ Hello World។",
      solutionCode: 'public class MyName {\n    public static void main(String[] args) {\n        System.out.println("Sok Dara");\n        System.out.println("Java Learner");\n    }\n}',
      solution: "ចងចាំថាឈ្មោះឯកសារ <code>MyName.java</code> ត្រូវដូចឈ្មោះ public class។"
    },
    {
      level: 1,
      title: "print ឬ println?",
      desc: "សរសេរកម្មវិធីដែលបង្ហាញពាក្យ <code>Java</code> និង <code>Khmer</code> នៅលើបន្ទាត់តែមួយ ដោយមានដកឃ្លារវាងពួកវា។",
      requirements: ["ត្រូវបង្ហាញ Java Khmer ក្នុងបន្ទាត់តែមួយ", "អាចប្រើ print ពីរដង ឬ println មួយដង"],
      outputSample: "Java Khmer",
      hint: "println មួយដងជាមួយ String រួមគឺសាមញ្ញបំផុត។",
      solutionCode: 'public class PrintPractice {\n    public static void main(String[] args) {\n        System.out.print("Java ");\n        System.out.println("Khmer");\n    }\n}'
    },
    {
      level: 2,
      title: "ពន្យល់ដំណើរការ Compile",
      desc: "សរសេរចម្លើយជាអត្ថបទ (មិនចាំបាច់កូដ) ពន្យល់ថាហេតុអ្វីឯកសារ <code>.class</code> អាចរត់បានលើ Windows និង Linux ដោយមិន compile ឡើងវិញ។",
      requirements: ["ត្រូវលើកឡើងពី Bytecode", "ត្រូវលើកឡើងពី JVM", "ប្រវែង ៤–៦ បន្ទាត់"],
      hint: "គិតពីតួនាទីរបស់ JVM ក្នុងការបំលែង Bytecode ទៅ Machine Code របស់ Platform នីមួយៗ។",
      solution: "Java Compiler បង្កើត Bytecode ដែលជាកូដកម្រិតកណ្តាល មិនជាប់នឹង CPU ឬ OS ណាមួយ។ នៅលើឧបករណ៍នីមួយៗ JVM ដែលត្រូវនឹង Platform នោះអាន Bytecode ហើយបំលែងវាទៅ Machine Code តាមរយៈ JIT។ ដូច្នេះឯកសារ .class ដូចគ្នាអាចរត់បានលើ Windows និង Linux ដោយគ្រាន់តែមាន JVM ដែលត្រឹមត្រូវ។"
    },
    {
      level: 2,
      title: "JDK, JRE, JVM",
      desc: "រៀបរាប់ភាពខុសគ្នារវាង JDK, JRE និង JVM ព្រមទាំងពន្យល់ថាតើអ្នកអភិវឌ្ឍន៍ត្រូវការមួយណា។",
      requirements: ["ពន្យល់តួនាទីរបស់នីមួយៗ", "បង្ហាញទំនាក់ទំនង JDK ⊃ JRE ⊃ JVM"],
      hint: "JDK មាន Compiler; JRE មាន Runtime និង Library; JVM រត់ Bytecode។",
      solution: "JVM គឺជាម៉ាស៊ីននិម្មិតដែលរត់ Bytecode។ JRE គឺ JVM បូក Libraries សម្រាប់រត់កម្មវិធី។ JDK គឺ JRE បូក Compiler និងឧបករណ៍អភិវឌ្ឍន៍។ អ្នកអភិវឌ្ឍន៍ត្រូវការ JDK ដើម្បី compile កូដ ហើយអ្នកប្រើធម្មតាត្រូវការតែ JRE។"
    },
    {
      level: 3,
      title: "ស្វែងរក Java ក្នុងជីវិតពិត",
      desc: "រាយបញ្ជីកម្មវិធី ឬប្រព័ន្ធ ៥ យ៉ាងដែលអ្នកគិតថាប្រើ Java ឬ JVM នៅខាងក្រោយ ហើយពន្យល់ហេតុអ្វី។",
      requirements: ["យ៉ាងហោចណាស់ ៥ ឧទាហរណ៍", "ពន្យល់ហេតុផលខ្លីៗ ១–២ បន្ទាត់ក្នុងមួយ"],
      hint: "គិតពីធនាគារ, Android, Minecraft, LinkedIn, Apache Spark, និងប្រព័ន្ធរដ្ឋាភិបាល។",
      solution: "ឧទាហរណ៍៖ (១) កម្មវិធី Android ជាច្រើនប្រើ Java/Kotlin លើ Android Runtime។ (២) ធនាគារប្រើ Java Backend សម្រាប់ស្ថិរភាព។ (៣) Minecraft Java Edition សរសេរដោយ Java។ (៤) Apache Spark សម្រាប់ Big Data រត់លើ JVM។ (៥) ប្រព័ន្ធ Enterprise ដូចជា ERP និងរដ្ឋាភិបាលប្រើ Java ព្រោះមាន Security និង Ecosystem ធំ។"
    },
    {
      level: 3,
      title: "ពិសោធន៍ជាមួយ Bytecode",
      desc: "បន្ទាប់ពី compile កម្មវិធី Hello World សូមពន្យល់ថាហេតុអ្វីឯកសារ <code>.class</code> មិនអាចអានដោយ Notepad បានយ៉ាងច្បាស់។",
      requirements: ["សាកល្បងបើក .class ដោយ Text Editor", "ពន្យល់ពីភាពខុសគ្នារវាង Source និង Bytecode"],
      hint: "Bytecode មានទម្រង់ Binary ដែល JVM អាន មិនមែនអត្ថបទសម្រាប់មនុស្សអានទេ។",
      solution: "ឯកសារ .java ជាអត្ថបទដែលមនុស្សអានបាន។ ឯកសារ .class មាន Bytecode ជា Binary ដែលរចនាសម្រាប់ JVM។ ដូច្នេះ Notepad នឹងបង្ហាញតួអក្សរចម្លែកៗ។ អ្នកអាចប្រើឧបករណ៍ដូចជា javap ដើម្បីមើល Bytecode ជាអត្ថបទបាន។"
    }
  ],
  quiz: [
    { q: "តើឯកសារណាដែល Java Compiler បង្កើត?", options: [".java", ".class", ".exe", ".jar"], answer: 1, explain: "javac បង្កើតឯកសារ .class ដែលផ្ទុក Bytecode។ .jar ជាកញ្ចប់ Archive ដែលបង្កើតដោយឧបករណ៍ jar។" },
    { q: "តើអ្វីទាំងនេះជាការពិតអំពី JVM?", options: ["វាជា Compiler", "វាអាន Bytecode និងរត់កម្មវិធី", "វាជាកម្មវិធីកែអត្ថបទ", "វាបង្កើតឯកសារ .java"], answer: 1, explain: "JVM អាន Bytecode ហើយអនុវត្តវា។ Compiler គឺ javac ដែលជាផ្នែកមួយរបស់ JDK។" },
    { q: "JDK, JRE និង JVM តើណាមួយធំជាងគេ?", options: ["JVM", "JRE", "JDK", "ស្មើគ្នា"], answer: 2, explain: "JDK រួមបញ្ចូល JRE ហើយ JRE រួមបញ្ចូល JVM។ ដូច្នេះ JDK ធំជាងគេ។" },
    { q: "Java ត្រូវបានគេហៅថា Platform Independent ព្រោះអ្វី?", options: ["វាមិនត្រូវការ OS", "វា compile ទៅ Bytecode ដែល JVM អាចរត់បាន", "វាមិនមាន Type", "វារត់បានតែលើ Windows"], answer: 1, explain: "Bytecode មិនជាប់នឹង Platform ហើយ JVM ជាអ្នកបំលែងវាទៅ Machine Code របស់ OS នីមួយៗ។" },
    { q: "តើអ្នកអភិវឌ្ឍន៍ Java ត្រូវដំឡើងអ្វី?", options: ["JRE តែម្នាក់ឯង", "JDK", "Python", "JVM តែម្នាក់ឯង"], answer: 1, explain: "JDK មាន Compiler និងឧបករណ៍ចាំបាច់សម្រាប់ការអភិវឌ្ឍន៍។" }
  ],
  summary: [
    "Java ជាភាសា Object-Oriented ដែល compile ទៅ Bytecode និងរត់លើ JVM។",
    "គោលការណ៍ Write Once, Run Anywhere មកពី Bytecode ដែលមិនជាប់នឹង Platform។",
    "JDK រួមមាន JRE និង Compiler; JRE រួមមាន JVM និង Libraries។",
    "ដំណើរការ Java៖ Source → javac → Bytecode → JVM → Output។",
    "Java ពេញនិយមក្នុង Enterprise, Android, Web Backend និង Big Data។"
  ],
  takeaways: [
    "ចាំថា <code>.java</code> ជាកូដដែលអ្នកសរសេរ ហើយ <code>.class</code> ជាលទ្ធផលបន្ទាប់ពី compile។",
    "JVM មិនអាន .java ទេ — វាអាន .class ដែលជា Bytecode។",
    "JDK គឺជាកញ្ចប់ធំបំផុត ហើយអ្នកអភិវឌ្ឍន៍ត្រូវការវា។",
    "Java មិនល្អបំផុតសម្រាប់គ្រប់ការងារ ប៉ុន្តែល្អសម្រាប់ប្រព័ន្ធធំដែលត្រូវការស្ថិរភាព។",
    "មុនរៀន Syntax សូមយល់ពី Flow នៃ Compilation ឱ្យបានច្បាស់។"
  ],
  sources: [
    { label: "Oracle — Java Documentation", url: "https://docs.oracle.com/en/java/" },
    { label: "Dev.java — Learn Java", url: "https://dev.java/learn/" },
    { label: "W3Schools — Java Introduction", url: "https://www.w3schools.com/java/java_intro.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "environment-setup",
  num: 2,
  part: 2,
  partTitle: "Environment Setup",
  title: "Java Environment Setup",
  titleKh: "ការដំឡើងបរិស្ថាន Java",
  time: "៤០ នាទី",
  level: 1,
  intro: "មុនសរសេរកូដ Java អ្នកត្រូវដំឡើង <strong>JDK</strong> កំណត់ <strong>PATH</strong> និងជ្រើសរើស Editor ឬ IDE។ មេរៀននេះណែនាំជំហានជាក់លាក់សម្រាប់ Windows, macOS និង Linux ព្រមទាំងវិធីពិនិត្យ និងដោះស្រាយបញ្ហាទូទៅ។",
  objectives: [
    "ដំឡើង JDK បានយ៉ាងត្រឹមត្រូវ។",
    "កំណត់ PATH ដើម្បីប្រើ javac និង java ពី Terminal។",
    "ដំឡើង VS Code ឬ IntelliJ IDEA និង Extension ចាំបាច់។",
    "ពិនិត្យ Version របស់ Java និង Compile កម្មវិធីដំបូង។",
    "អាន និងដោះស្រាយ Compilation Error មូលដ្ឋាន។"
  ],
  sections: [
    {
      title: "ជ្រើសរើស JDK ឱ្យបានត្រឹមត្រូវ",
      html:
        "<p><strong>JDK</strong> មានច្រើនកំណែ និងច្រើនអ្នកផ្គត់ផ្គង់។ សម្រាប់ការរៀន និងការបង្រៀន សូមជ្រើសរើស <strong>LTS (Long-Term Support)</strong> ដូចជា JDK 21 ឬ JDK 25 ព្រោះវាមានស្ថិរភាព និងត្រូវបានគាំទ្រយូរ។</p>" +
        "<ul>" +
        "<li><strong>Oracle JDK</strong>៖ ជម្រើសផ្លូវការពី Oracle។ សម្រាប់ការប្រើប្រាស់ពាណិជ្ជកម្ម សូមអានលក្ខខណ្ឌអាជ្ញាបណ្ណ។</li>" +
        "<li><strong>Eclipse Temurin (OpenJDK)</strong>៖ ឥតគិតថ្លៃ ពេញនិយម និងសមស្របសម្រាប់ការរៀន។</li>" +
        "<li><strong>Microsoft OpenJDK</strong>៖ ជម្រើសល្អសម្រាប់ Windows និង VS Code។</li>" +
        "<li><strong>Amazon Corretto</strong>៖ ឥតគិតថ្លៃ និងមានស្ថិរភាពខ្ពស់។</li>" +
        "</ul>" +
        '<div class="callout warn"><div class="callout-title">កុំច្រឡំ</div><p>កុំដំឡើងតែ JRE ឬ Java Runtime ព្រោះវាគ្មាន <code>javac</code>។ អ្នកត្រូវការ JDK ដើម្បី compile កូដ។</p></div>' +
        "<p>ក្នុងមេរៀននេះ យើងសន្មតថាអ្នកប្រើ <strong>JDK 21</strong> ឬខ្ពស់ជាងនេះ។ Syntax ទាំងអស់ក្នុងវេបសាយនេះត្រូវបានសាកល្បងលើ JDK 17+។</p>"
    },
    {
      title: "ដំឡើង JDK លើ Windows",
      html:
        "<ol>" +
        "<li>ចូលទៅ <a href=\"https://adoptium.net/\" target=\"_blank\" rel=\"noopener\">adoptium.net</a> ឬ <a href=\"https://www.oracle.com/java/technologies/downloads/\" target=\"_blank\" rel=\"noopener\">Oracle Downloads</a>។</li>" +
        "<li>ជ្រើសរើស JDK 21 (LTS) សម្រាប់ Windows x64 ជាទម្រង់ <code>.msi</code>។</li>" +
        "<li>រត់ Installer ហើយធីកជម្រើស <strong>Set JAVA_HOME variable</strong> និង <strong>Add to PATH</strong> ប្រសិនបើមាន។</li>" +
        "<li>បើក Terminal ថ្មី (PowerShell ឬ Command Prompt)។</li>" +
        "<li>វាយ <code>java -version</code> និង <code>javac -version</code> ដើម្បីផ្ទៀងផ្ទាត់។</li>" +
        "</ol>" +
        "<p>ប្រសិនបើអ្នកមិនបានធីក Add to PATH ពេលដំឡើង អ្នកអាចកំណត់ដោយដៃ៖</p>" +
        "<ol>" +
        "<li>បើក <strong>Environment Variables</strong> ពី Start Menu។</li>" +
        "<li>បន្ថែម System Variable ថ្មី <code>JAVA_HOME</code> ដែលមានតម្លៃដូចជា <code>C:\\Program Files\\Eclipse Adoptium\\jdk-21</code>។</li>" +
        "<li>កែ Variable <code>Path</code> ហើយបន្ថែម <code>%JAVA_HOME%\\bin</code>។</li>" +
        "<li>បិទ និងបើក Terminal ឡើងវិញ រួចពិនិត្យម្តងទៀត។</li>" +
        "</ol>" +
        '<div class="callout info"><div class="callout-title">JAVA_HOME សម្រាប់អ្វី?</div><p>ឧបករណ៍អភិវឌ្ឍន៍ និង Build Tool ដូចជា Maven/Gradle ប្រើ <code>JAVA_HOME</code> ដើម្បីដឹងថា JDK ស្ថិតនៅឯណា។ ការកំណត់វាឱ្យបានត្រឹមត្រូវជួយកាត់បន្ថយបញ្ហានៅពេលអភិវឌ្ឍន៍គម្រោងធំ។</p></div>'
    },
    {
      title: "ដំឡើង JDK លើ macOS និង Linux",
      html:
        "<h3>macOS</h3>" +
        "<p>វិធីងាយបំផុតគឺប្រើ Homebrew៖</p>" +
        "<pre><code>brew install --cask temurin@21\njava -version</code></pre>" +
        "<p>បើគ្មាន Homebrew អ្នកអាចទាញយក <code>.pkg</code> ពី Adoptium ហើយដំឡើងដូចកម្មវិធីធម្មតា។ Homebrew កំណត់ PATH ជាធម្មតា ប៉ុន្តែប្រសិនបើអ្នកប្រើ <code>zsh</code> សូមពិនិត្យ <code>~/.zshrc</code>។</p>" +
        "<h3>Linux (Ubuntu/Debian)</h3>" +
        "<pre><code>sudo apt update\nsudo apt install openjdk-21-jdk\njava -version\njavac -version</code></pre>" +
        "<p>សម្រាប់ Fedora៖</p>" +
        "<pre><code>sudo dnf install java-21-openjdk-devel\njava -version</code></pre>" +
        '<div class="callout tip"><div class="callout-title">ពិនិត្យទីតាំង JDK</div><p>បើអ្នកមាន JDK ច្រើនកំណែ សូមប្រើ <code>which java</code> (macOS/Linux) ឬ <code>where java</code> (Windows) ដើម្បីដឹងថា Terminal កំពុងប្រើកំណែណា។</p></div>'
    },
    {
      title: "ដំឡើង IDE ឬ Editor",
      html:
        "<p><strong>IDE (Integrated Development Environment)</strong> ជាកម្មវិធីដែលរួមបញ្ចូល Editor, Compiler, Debugger និងឧបករណ៍ជំនួយ។ សម្រាប់អ្នកចាប់ផ្តើម អ្នកអាចជ្រើសរើសមួយក្នុងចំណោមនេះ៖</p>" +
        "<ul>" +
        "<li><strong>VS Code + Extension Pack for Java</strong>៖ ស្រាល ឥតគិតថ្លៃ និងងាយប្រើ។ សមស្របសម្រាប់ការរៀន។</li>" +
        "<li><strong>IntelliJ IDEA Community Edition</strong>៖ មាន Auto-complete និង Refactoring ខ្លាំង។ ឥតគិតថ្លៃសម្រាប់ការរៀន។</li>" +
        "<li><strong>Eclipse IDE for Java Developers</strong>៖ ឥតគិតថ្លៃ និងពេញនិយមក្នុងសាកលវិទ្យាល័យ។</li>" +
        "</ul>" +
        "<p>សម្រាប់ VS Code៖</p>" +
        "<ol>" +
        "<li>ដំឡើង VS Code ពី <a href=\"https://code.visualstudio.com/\" target=\"_blank\" rel=\"noopener\">code.visualstudio.com</a>។</li>" +
        "<li>បើក Extensions (Ctrl+Shift+X) ហើយស្វែងរក <strong>Extension Pack for Java</strong> ដោយ Microsoft។</li>" +
        "<li>ដំឡើងវា។ វារួមមាន Language Support, Debugger, Test Runner និង Maven។</li>" +
        "<li>បង្កើត Folder ថ្មីសម្រាប់កូដ ហើយបើកវាក្នុង VS Code។</li>" +
        "</ol>" +
        '<div class="callout warn"><div class="callout-title">សំខាន់</div><p>IDE មិនជំនួស JDK ទេ។ អ្នកនៅតែត្រូវដំឡើង JDK ដោយឡែក។ VS Code នឹងស្វែងរក JDK ដោយស្វ័យប្រវត្តិ ប៉ុន្តែបើរកមិនឃើញ សូមកំណត់ <code>java.jdt.ls.java.home</code> ក្នុង Settings។</p></div>'
    },
    {
      title: "កម្មវិធី Java ដំបូង និង Compilation Error",
      html:
        "<p>បង្កើត Folder ថ្មីមួយ រួចបង្កើតឯកសារ <code>Hello.java</code> ដោយដាក់កូដខាងក្រោម។ បន្ទាប់មកបើក Terminal ក្នុង Folder នោះ ហើយរត់ពីរបញ្ជានេះ៖</p>" +
        "<pre><code>javac Hello.java\njava Hello</code></pre>" +
        "<p>ប្រសិនបើឃើញ <code>Hello, World!</code> មានន័យថាបរិស្ថានរបស់អ្នកដំណើរការត្រឹមត្រូវ។</p>" +
        "<h3>អាន Compilation Error</h3>" +
        "<p>សារ Error របស់ Java មានទម្រង់៖</p>" +
        "<pre><code>Hello.java:5: error: ';' expected\n        System.out.println(\"Hi\")\n                             ^\n1 error</code></pre>" +
        "<ul>" +
        "<li><strong>Hello.java:5</strong> ប្រាប់ឯកសារ និងបន្ទាត់ដែលមានបញ្ហា។</li>" +
        "<li><strong>error: ';' expected</strong> ប្រាប់ប្រភេទបញ្ហា។</li>" +
        "<li>សញ្ញា <code>^</code> ចង្អុលទីតាំងប្រហែលជិតបញ្ហា។</li>" +
        "</ul>" +
        "<p>ចំណុចសំខាន់៖ Compilation Error មានន័យថាកូដមិនទាន់អាចបង្កើត <code>.class</code> បានទេ។ អ្នកត្រូវកែ Syntax មុន។ ចំណែក Runtime Error កើតឡើងពេលកម្មវិធីកំពុងរត់។</p>"
    }
  ],
  terms: [
    { en: "JDK", kh: "Java Development Kit", text: "កញ្ចប់អភិវឌ្ឍន៍ដែលមាន Compiler និងឧបករណ៍។" },
    { en: "PATH", kh: "ផ្លូវបញ្ជា", text: "Environment Variable ដែលប្រាប់ System ថាត្រូវរក Program ដូចជា java និង javac នៅឯណា។" },
    { en: "JAVA_HOME", kh: "ទីតាំង JDK", text: "Variable ដែលចង្អុលទៅ Folder ដំឡើង JDK។ ប្រើដោយ Maven, Gradle និង IDE។" },
    { en: "Compile", kh: "បំលែងកូដ", text: "ដំណើរការបំលែង .java ទៅ .class ដោយ javac។" },
    { en: "Runtime Error", kh: "កំហុសពេលរត់", text: "កំហុសដែលកើតឡើងពេលកម្មវិធីកំពុងដំណើរការ ដូចជា Division by Zero។" }
  ],
  syntax: [
    { label: "ពិនិត្យ Version", code: "java -version\njavac -version", note: "ទាំងពីរគួរបង្ហាញ Version ដូចគ្នា ឬស្របគ្នា។" },
    { label: "បង្កើត និងរត់កម្មវិធី", code: "javac Hello.java\njava Hello", note: "រត់ក្នុង Folder ដែលមាន Hello.java។" },
    { label: "មើល Path របស់ Java", code: "where java\nwhere javac", note: "លើ Windows។ លើ macOS/Linux ប្រើ which java និង which javac។" }
  ],
  examples: [
    {
      title: "កម្មវិធីសាកល្បងបរិស្ថាន",
      desc: "កម្មវិធីនេះបង្ហាញអត្ថបទពីរបន្ទាត់។ ប្រសិនបើវាដំណើរការ បរិស្ថាន Java របស់អ្នកគឺត្រឹមត្រូវ។",
      file: "SetupCheck.java",
      code: 'public class SetupCheck {\n    public static void main(String[] args) {\n        System.out.println("Java environment is ready!");\n        System.out.println("Let us write some code.");\n    }\n}',
      output: "Java environment is ready!\nLet us write some code.",
      lines: [
        "ឈ្មោះ Class <code>SetupCheck</code> ត្រូវដូចឈ្មោះឯកសារ <code>SetupCheck.java</code>។",
        "Method <code>main</code> ជាចំណុចចាប់ផ្តើមរបស់កម្មវិធី។",
        "ប្រយោគនីមួយៗបញ្ចប់ដោយ Semicolon។"
      ]
    },
    {
      title: "សាកល្បង Compile Error",
      desc: "សរសេរកូដខាងក្រោមដោយចេតនាខ្វះ Semicolon ដើម្បីមើលសារ Error ពី Compiler។ បន្ទាប់មកកែវា។",
      file: "Broken.java",
      code: 'public class Broken {\n    public static void main(String[] args) {\n        System.out.println("Oops")\n    }\n}',
      output: "Broken.java:3: error: ';' expected\n        System.out.println(\"Oops\")\n                             ^\n1 error",
      lines: [
        "Compiler បង្ហាញឯកសារ និងបន្ទាត់ដែលមានបញ្ហា។",
        "សញ្ញា <code>^</code> បង្ហាញទីតាំងដែល Compiler គិតថាខ្វះអ្វីមួយ។",
        "ការកែគឺបន្ថែម <code>;</code> នៅចុងបន្ទាត់ <code>System.out.println(\"Oops\");</code>។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ “javac is not recognized”</span><br>PATH មិនត្រូវបានកំណត់ ឬ Terminal មិនទាន់បើកឡើងវិញក្រោយដំឡើង។', fix: "បន្ថែម %JAVA_HOME%\\bin ទៅ PATH រួចបើក Terminal ថ្មី។" },
    { text: '<span class="bad-code">❌ ដំឡើង JRE ជំនួស JDK</span><br>អ្នកនឹងមាន java ប៉ុន្តែគ្មាន javac។', fix: "ដំឡើង JDK ពេញលេញ (ឧ. Temurin JDK 21)។" },
    { text: '<span class="bad-code">❌ ប្រើ Command Prompt ចាស់បន្ទាប់ពីកែ PATH</span><br>Environment Variable ថ្មីមិនត្រូវបានអានដោយ Process ចាស់។', fix: "បិទ Terminal ទាំងអស់ រួចបើកថ្មី។" }
  ],
  tips: [
    "កំណត់ JDK តែមួយកំណែសម្រាប់ការរៀន ដើម្បីកាត់បន្ថយភាពស្មុគស្មាញ។",
    "ប្រើ IDE តែមួយឱ្យស្គាល់ជាមុន រួចទើបសាកល្បងផ្សេងទៀត។",
    "ពិនិត្យ <code>java -version</code> រាល់ពេលបើកគម្រោងថ្មី។"
  ],
  exercises: [
    {
      level: 1,
      title: "ពិនិត្យ Version",
      desc: "បើក Terminal ហើយរត់ <code>java -version</code> និង <code>javac -version</code>។ សរសេរលទ្ធផលដែលអ្នកទទួលបាន។",
      requirements: ["ថតរូប ឬចម្លងលទ្ធផល", "បញ្ជាក់ថា Version ទាំងពីរត្រូវគ្នាឬអត់"],
      hint: "ប្រសិនបើ javac មិនស្គាល់ សូមពិនិត្យ PATH។",
      solution: "ឧទាហរណ៍លទ្ធផល៖ java version \"21.0.4\" និង javac 21.0.4។ ប្រសិនបើលេខ Version ខុសគ្នាខ្លាំង អ្នកអាចមាន JDK ច្រើនកំណែ ហើយ PATH ចង្អុលទៅកំណែផ្សេង។"
    },
    {
      level: 1,
      title: "បង្កើត និងរត់ Hello",
      desc: "បង្កើតឯកសារ <code>Hello.java</code> ក្នុង Folder ថ្មី ហើយ compile និង run វាតាម Terminal។",
      requirements: ["ប្រើ javac និង java", "បង្ហាញអត្ថបទ Hello, World!"],
      hint: "ចងចាំថា java Hello មិនត្រូវការ .java ឬ .class ក្នុងពេល run។",
      solutionCode: 'public class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
      solution: "រត់ <code>javac Hello.java</code> បន្ទាប់មក <code>java Hello</code>។"
    },
    {
      level: 2,
      title: "កែ Compilation Error",
      desc: "សរសេរកូដខាងក្រោម ហើយកែ Error ទាំងអស់៖ <br><code>public class Test { public static void main(String[] args) { System.out.println(\"Hi\") } }</code>",
      requirements: ["Compile ដោយជោគជ័យ", "ពន្យល់ Error ដែលបានឃើញ"],
      hint: "ខ្វះ Semicolon នៅចុងបន្ទាត់ println។",
      solutionCode: 'public class Test {\n    public static void main(String[] args) {\n        System.out.println("Hi");\n    }\n}',
      solution: "Error គឺ <code>';' expected</code> ដោយសារខ្វះ Semicolon។ Java ត្រូវការ Semicolon ដើម្បីបញ្ចប់ Statement។"
    },
    {
      level: 2,
      title: "កំណត់ JAVA_HOME",
      desc: "ពន្យល់ជំហានកំណត់ <code>JAVA_HOME</code> នៅលើ Windows ហើយពិនិត្យថាវាដំណើរការ។",
      requirements: ["បង្ហាញតម្លៃ JAVA_HOME", "ពិនិត្យថា %JAVA_HOME%\\bin នៅក្នុង PATH"],
      hint: "ប្រើ <code>echo %JAVA_HOME%</code> ក្នុង Command Prompt។",
      solution: "បើក Environment Variables → New System Variable → Name: JAVA_HOME, Value: path ទៅ JDK → កែ Path បន្ថែម %JAVA_HOME%\\bin → បើក Terminal ថ្មី → រត់ echo %JAVA_HOME% និង javac -version។"
    },
    {
      level: 3,
      title: "ដោះស្រាយបញ្ហា JDK ច្រើនកំណែ",
      desc: "អ្នកមាន JDK 17 និង JDK 21 ក្នុងម៉ាស៊ីន។ ពន្យល់របៀបធានាថា Terminal ប្រើ JDK 21 ដោយមិនលុប JDK 17។",
      requirements: ["បង្ហាញជំហានជាក់លាក់", "ពន្យល់ហានិភ័យនៃការកែ PATH ខុស"],
      hint: "គិតពីលំដាប់នៃ Folder ក្នុង PATH។ Folder ដំបូងដែលរកឃើញ java នឹងត្រូវប្រើ។",
      solution: "ដាក់ %JAVA_HOME%\\bin នៅដើម PATH ហើយកំណត់ JAVA_HOME ទៅ JDK 21។ បើក Terminal ថ្មី រួចពិនិត្យ java -version និង where java។ កុំលុប Folder JDK ចាស់ ព្រោះគម្រោងចាស់អាចត្រូវការវា។ បើត្រូវការប្តូរជាបណ្តោះអាសន្ន អាចកំណត់ JAVA_HOME ក្នុង Terminal session នោះ។"
    },
    {
      level: 3,
      title: "ស្រាវជ្រាវ IDE",
      desc: "ប្រៀបធៀប VS Code និង IntelliJ IDEA សម្រាប់អ្នកចាប់ផ្តើម ដោយលើកឡើងពីគុណសម្បត្តិ និងគុណវិបត្តិ។",
      requirements: ["យ៉ាងហោចណាស់ ៣ ចំណុចក្នុងមួយ", "សរុបថាអ្នកជ្រើសរើសមួយណា ហើយហេតុអ្វី"],
      hint: "គិតពីទម្ងន់កម្មវិធី ភាពងាយស្រួល និងមុខងារ Debug។",
      solution: "VS Code៖ ស្រាល បើកលឿន Extension ច្រើន ប៉ុន្តែត្រូវដំinstall Extension បន្ថែម។ IntelliJ IDEA៖ មាន Auto-complete, Refactoring និង Debug ខ្លាំង ប៉ុន្តែធ្ងន់ជាង និងចំណាយ RAM ច្រើន។ អ្នកចាប់ផ្តើមអាចជ្រើស VS Code ព្រោះស្រាល ហើយប្តូរទៅ IntelliJ នៅពេលគម្រោងធំឡើង។"
    }
  ],
  quiz: [
    { q: "តើ Command ណាសម្រាប់ Compile?", options: ["java Hello.java", "javac Hello.java", "run Hello", "compile Hello"], answer: 1, explain: "javac គឺជា Java Compiler ដែលបង្កើត .class។ java ជា Command សម្រាប់រត់ Program។" },
    { q: "បើឃើញ “javac is not recognized” តើបញ្ហាទំនងជាអ្វី?", options: ["កូដមាន Error", "PATH មិនត្រឹមត្រូវ", "កុំព្យូទ័រគ្មាន Internet", "Class ឈ្មោះខុស"], answer: 1, explain: "System រក Command javac មិនឃើញ ដោយសារ Folder bin របស់ JDK មិននៅក្នុង PATH។" },
    { q: "តើ JAVA_HOME ប្រើសម្រាប់អ្វី?", options: ["ផ្ទុកកូដ", "បញ្ជាក់ទីតាំង JDK", "បង្កើត Class", "បើក IDE"], answer: 1, explain: "JAVA_HOME ចង្អុលទៅ Folder ដំឡើង JDK ហើយ Build Tool និង IDE ប្រើវា។" },
    { q: "តើ Extension ណាពេញនិយមសម្រាប់ VS Code?", options: ["Extension Pack for Java", "Python Pack", "Web Designer", "C# Tools"], answer: 0, explain: "Extension Pack for Java ដោយ Microsoft រួមមាន Language Support, Debugger និង Maven។" },
    { q: "បន្ទាប់ពីកែ PATH តើត្រូវធ្វើអ្វី?", options: ["Restart Computer ជានិច្ច", "បើក Terminal ថ្មី", "លុប JDK", "Compile ឡើងវិញ"], answer: 1, explain: "Terminal ចាស់មិនអាន Environment Variable ថ្មីទេ។ បើក Terminal ថ្មីដើម្បីផ្ទៀងផ្ទាត់។" }
  ],
  summary: [
    "ត្រូវដំឡើង JDK មិនមែនតែ JRE ដើម្បី compile កូដ។",
    "PATH និង JAVA_HOME ជួយឱ្យ Terminal និង IDE រកឃើញ Java។",
    "VS Code + Extension Pack for Java ជាជម្រើសស្រាលសម្រាប់អ្នកចាប់ផ្តើម។",
    "Compile Error ត្រូវកែមុនពេលរត់; Runtime Error កើតឡើងពេលកម្មវិធីកំពុងដំណើរការ។",
    "ពិនិត្យ java -version និង javac -version ជាប្រចាំ។"
  ],
  takeaways: [
    "JDK = Compiler + Runtime + Tools។",
    "ប្រសិនបើ javac មិនដំណើរការ សូមពិនិត្យ PATH មុនពេលដំឡើងឡើងវិញ។",
    "IDE ជួយបង្កើនល្បឿន ប៉ុន្តែការយល់ Terminal នៅតែសំខាន់។",
    "ការអាន Error Message គឺជាជំនាញដែលអ្នកនឹងប្រើរាល់ថ្ងៃ។",
    "ចាប់ផ្តើមដោយ JDK 21 ឬ JDK 25 LTS សម្រាប់ស្ថិរភាព។"
  ],
  sources: [
    { label: "Oracle — JDK Installation Guide", url: "https://docs.oracle.com/en/java/javase/21/install/" },
    { label: "Dev.java — Installing Java", url: "https://dev.java/learn/getting-started/" },
    { label: "Adoptium — Eclipse Temurin", url: "https://adoptium.net/" },
    { label: "VS Code — Java in Visual Studio Code", url: "https://code.visualstudio.com/docs/languages/java" }
  ]
});

window.JAVA_LESSONS.push({
  id: "java-syntax",
  num: 3,
  part: 3,
  partTitle: "Java Fundamentals",
  title: "Java Syntax & Program Structure",
  titleKh: "Syntax និងរចនាសម្ព័ន្ធកម្មវិធី Java",
  time: "៥៥ នាទី",
  level: 1,
  intro: "មេរៀននេះពន្យល់រចនាសម្ព័ន្ធមូលដ្ឋានរបស់កម្មវិធី Java — <strong>class</strong>, <strong>main()</strong>, Statements, Comments និង Escape Sequences។ អ្នកនឹងយល់ពីអត្ថន័យនៃរាល់បន្ទាត់កូដ មិនមែនគ្រាន់តែចម្លងវានោះទេ។",
  objectives: [
    "ពន្យល់រចនាសម្ព័ន្ធកម្មវិធី Java បាន។",
    "យល់ពី class និង main method ច្បាស់លាស់។",
    "ប្រើ print, println និង printf បានត្រឹមត្រូវ។",
    "សរសេរ Comment តាមប្រភេទផ្សេងៗ។",
    "ប្រើ Escape Sequences ដូចជា \\n និង \\t បាន។",
    "អនុវត្ត Naming Conventions របស់ Java។"
  ],
  sections: [
    {
      title: "រចនាសម្ព័ន្ធមូលដ្ឋានរបស់កម្មវិធី Java",
      html:
        "<p>កម្មវិធី Java សាមញ្ញមួយមានរចនាសម្ព័ន្ធបួនជាន់៖ <strong>Package</strong> (ស្រេចចិត្ត), <strong>Class</strong>, <strong>Method</strong> និង <strong>Statements</strong>។ សូមមើលគំរូខាងក្រោម៖</p>" +
        '<div class="code-card"><div class="code-head"><span class="code-title">Structure</span><button class="copy-btn" type="button">ចម្លង</button></div><pre><code>// 1. Package (optional)\npackage khmer.java.basics;\n\n// 2. Class\npublic class ProgramStructure {\n\n    // 3. Method (entry point)\n    public static void main(String[] args) {\n\n        // 4. Statements\n        System.out.println("Hello from Java");\n    }\n}</code></pre></div>' +
        "<ul>" +
        "<li><strong>Package</strong>៖ ជាកន្លែងរៀបចំ Class ជាក្រុម ដូច Folder។ វាជួយជៀសវាងឈ្មោះ Class ជាន់គ្នា។</li>" +
        "<li><strong>Class</strong>៖ ជាឯកតាសំខាន់របស់ Java។ កូដទាំងអស់ត្រូវស្ថិតនៅក្នុង Class។</li>" +
        "<li><strong>Method</strong>៖ ជាប្លុកការងារដែលអាចហៅប្រើបាន។ <code>main</code> ជា Method ពិសេសដែល JVM ហៅដំបូង។</li>" +
        "<li><strong>Statements</strong>៖ ជាប្រយោគបញ្ជា ដូចជាការបោះពុម្ព ការគណនា និងការកំណត់តម្លៃ។</li>" +
        "</ul>"
    },
    {
      title: "Class និង main() method",
      html:
        "<p>Class គឺជា Blueprint ឬគំរូ។ ក្នុងកម្មវិធីតូច យើងអាចមាន Class តែមួយ។ ឈ្មោះ Class ត្រូវចាប់ផ្តើមដោយអក្សរធំ (PascalCase) និងគ្មានចន្លោះ។</p>" +
        "<p><code>main</code> method មាន Signature ពិសេស៖</p>" +
        "<pre><code>public static void main(String[] args)</code></pre>" +
        "<ul>" +
        "<li><strong>public</strong>៖ JVM អាចហៅវាបានពីខាងក្រៅ Class។</li>" +
        "<li><strong>static</strong>៖ Method នេះជាកម្មសិទ្ធិរបស់ Class មិនមែន Object។ JVM អាចហៅបានដោយមិនចាំបាច់បង្កើត Object។</li>" +
        "<li><strong>void</strong>៖ Method នេះមិនត្រឡប់តម្លៃអ្វីមួយទេ។</li>" +
        "<li><strong>String[] args</strong>៖ Array នៃ String សម្រាប់ផ្ទុក Command-line Arguments។</li>" +
        "</ul>" +
        '<div class="callout info"><div class="callout-title">ហេតុអ្វីត្រូវការ main?</div><p>JVM ត្រូវការចំណុចចាប់ផ្តើមមួយ។ វាស្វែងរក Method ដែលមាន Signature <code>public static void main(String[])</code> ដើម្បីចាប់ផ្តើមដំណើរការកម្មវិធី។ ប្រសិនបើ Signature ខុស អ្នកនឹងឃើញ Error <code>Main method not found</code>។</p></div>' +
        "<p>ការផ្លាស់ប្តូរតូចមួយដូចជាដាក់ <code>String args</code> ជំនួស <code>String[] args</code> ក៏អាចធ្វើឱ្យ JVM រក main មិនឃើញដែរ។ សូមរក្សា Signature ឱ្យដូចដើម។</p>"
    },
    {
      title: "print, println និង printf",
      html:
        "<p>Java មានវិធីបញ្ចាំងអត្ថបទច្រើន៖</p>" +
        '<div class="table-wrap"><table><thead><tr><th>Method</th><th>អត្ថន័យ</th><th>ឧទាហរណ៍</th></tr></thead><tbody>' +
        "<tr><td><code>print()</code></td><td>បញ្ចាំងដោយមិនចុះបន្ទាត់</td><td><code>System.out.print(\"A\");</code></td></tr>" +
        "<tr><td><code>println()</code></td><td>បញ្ចាំង រួចចុះបន្ទាត់ថ្មី</td><td><code>System.out.println(\"A\");</code></td></tr>" +
        "<tr><td><code>printf()</code></td><td>បញ្ចាំងតាម Format</td><td><code>System.out.printf(\"%d%n\", 10);</code></td></tr>" +
        "</tbody></table></div>" +
        "<p><code>printf</code> មានប្រយោជន៍ពេលត្រូវការតម្រឹមទិន្នន័យ។ <code>%d</code> សម្រាប់ចំនួនគត់ <code>%f</code> សម្រាប់ចំនួនទសភាគ <code>%s</code> សម្រាប់ String និង <code>%n</code> សម្រាប់ New Line ដែលអាចផ្លាស់ទីបានតាម Platform។</p>" +
        "<p>នៅក្នុង Java សម័យទំនើប អ្នកក៏អាចប្រើ <code>System.out.println()</code> ជាមួយ String Concatenation ឬ <code>String.format()</code> បានដែរ។</p>"
    },
    {
      title: "Comments ក្នុង Java",
      html:
        "<p><strong>Comment</strong> គឺជាអត្ថបទដែល Compiler មិនអាន។ វាប្រើសម្រាប់ពន្យល់កូដ និងធ្វើឱ្យកូដងាយយល់។ Java មាន Comment បីប្រភេទ៖</p>" +
        "<ul>" +
        "<li><strong>Single-line</strong>៖ <code>// អត្ថបទ</code> ប្រើសម្រាប់ពន្យល់ខ្លីៗ។</li>" +
        "<li><strong>Multi-line</strong>៖ <code>/* ... */</code> ប្រើសម្រាប់ពន្យល់វែង ឬបិទកូដជាបណ្តោះអាសន្ន។</li>" +
        "<li><strong>Javadoc</strong>៖ <code>/** ... */</code> ប្រើសម្រាប់បង្កើត Documentation ដោយស្វ័យប្រវត្តិជាមួយ <code>javadoc</code>។</li>" +
        "</ul>" +
        "<p>ការសរសេរ Comment ល្អគឺពន្យល់ <em>ហេតុអ្វី</em> កូដធ្វើបែបនេះ មិនមែនគ្រាន់តែនិយាយឡើងវិញនូវអ្វីដែលកូដកំពុងធ្វើទេ។</p>" +
        '<div class="callout warn"><div class="callout-title">កុំធ្វើ</div><p>កុំសរសេរ Comment ច្រើនលើសលប់ ឬ Comment ដែលលែងត្រូវនឹងកូដ។ Comment ខុសអាចបង្ខូចអ្នកអានធ្ងន់ជាងគ្មាន Comment។</p></div>'
    },
    {
      title: "Escape Sequences",
      html:
        "<p><strong>Escape Sequence</strong> គឺជាតួអក្សរពិសេសដែលចាប់ផ្តើមដោយ Backslash <code>\\</code> ដើម្បីតំណាងឱ្យតួអក្សរដែលមិនអាចវាយដោយផ្ទាល់បាន។</p>" +
        '<div class="table-wrap"><table><thead><tr><th>Escape</th><th>អត្ថន័យ</th><th>ឧទាហរណ៍ Output</th></tr></thead><tbody>' +
        "<tr><td><code>\\n</code></td><td>ចុះបន្ទាត់ថ្មី</td><td>Line1<br>Line2</td></tr>" +
        "<tr><td><code>\\t</code></td><td>Tab</td><td>Name&nbsp;&nbsp;&nbsp;Age</td></tr>" +
        "<tr><td><code>\\\"</code></td><td>Double Quote</td><td>\"Java\"</td></tr>" +
        "<tr><td><code>\\\\</code></td><td>Backslash</td><td>C:\\temp</td></tr>" +
        "<tr><td><code>\\'</code></td><td>Single Quote</td><td>'A'</td></tr>" +
        "<tr><td><code>\\r</code></td><td>Carriage Return</td><td>ប្រើកម្រនិងក្នុង Console</td></tr>" +
        "</tbody></table></div>" +
        "<p>សូមចងចាំថា <code>\\n</code> ក្នុង Java String មានន័យថា New Line មិនមែនអក្សរ n ទេ។ ប្រសិនបើអ្នកចង់បង្ហាញ Backslash ខ្លួនឯង ត្រូវសរសេរ <code>\\\\</code>។</p>"
    },
    {
      title: "Java Naming Conventions",
      html:
        "<p><strong>Naming Convention</strong> គឺជាការព្រមព្រៀងរួមគ្នាអំពីរបៀបដាក់ឈ្មោះ។ Java មិនបង្ខំទេ ប៉ុន្តែការអនុវត្តតាមធ្វើឱ្យកូដអានងាយ និងស្របនឹងស្តង់ដារឧស្សាហកម្ម។</p>" +
        '<div class="table-wrap"><table><thead><tr><th>ប្រភេទ</th><th>Convention</th><th>ឧទាហរណ៍</th></tr></thead><tbody>' +
        "<tr><td>Class</td><td>PascalCase</td><td><code>StudentRecord</code></td></tr>" +
        "<tr><td>Interface</td><td>PascalCase</td><td><code>PaymentService</code></td></tr>" +
        "<tr><td>Variable</td><td>camelCase</td><td><code>studentAge</code></td></tr>" +
        "<tr><td>Method</td><td>camelCase</td><td><code>calculateTotal()</code></td></tr>" +
        "<tr><td>Constant</td><td>UPPER_SNAKE_CASE</td><td><code>MAX_SIZE</code></td></tr>" +
        "<tr><td>Package</td><td>lowercase</td><td><code>com.school.management</code></td></tr>" +
        "</tbody></table></div>" +
        "<p>ឈ្មោះ Variable គួរជាអត្ថន័យ ដូចជា <code>studentAge</code> ជាជាង <code>a</code>។ ការដាក់ឈ្មោះល្អជួយកាត់បន្ថយតម្រូវការ Comment និងធ្វើឱ្យកូដអានងាយ។</p>"
    }
  ],
  terms: [
    { en: "Class", kh: "ថ្នាក់", text: "គំរូ ឬ Blueprint ដែលផ្ទុក Field និង Method។" },
    { en: "Method", kh: "មុខងារ", text: "ប្លុកកូដដែលអាចហៅដើម្បីធ្វើការងារមួយ។" },
    { en: "Statement", kh: "ប្រយោគបញ្ជា", text: "បន្ទាត់កូដដែលបញ្ជាឱ្យកម្មវិធីធ្វើអ្វីមួយ ហើយជាធម្មតាបញ្ចប់ដោយ Semicolon។" },
    { en: "Escape Sequence", kh: "លំដាប់រត់គេច", text: "តួអក្សរពិសេសដែលចាប់ផ្តើមដោយ Backslash ដើម្បីតំណាងតួអក្សរពិសេស។" },
    { en: "Comment", kh: "កំណត់សម្គាល់", text: "អត្ថបទពន្យល់កូដដែល Compiler មិនអាន។" },
    { en: "Entry Point", kh: "ចំណុចចាប់ផ្តើម", text: "Method ដំបូងដែល JVM ហៅ គឺ main។" }
  ],
  syntax: [
    { label: "Class មូលដ្ឋាន", code: "public class ClassName {\n    public static void main(String[] args) {\n        // statements\n    }\n}", note: "ឈ្មោះឯកសារត្រូវដូច ClassName.java" },
    { label: "ការបោះពុម្ព", code: 'System.out.print("No newline");\nSystem.out.println("With newline");\nSystem.out.printf("%d + %d = %d%n", 2, 3, 5);' },
    { label: "Comments", code: "// single line\n/* multi-line\n   comment */\n/** Javadoc comment */" },
    { label: "Escape Sequences", code: 'System.out.println("Line 1\\nLine 2");\nSystem.out.println("Name\\tAge");\nSystem.out.println("She said \\"Hello\\"");' }
  ],
  examples: [
    {
      title: "កម្មវិធីបង្ហាញព័ត៌មាន",
      desc: "ឧទាហរណ៍នេះប្រើ print, println និង Escape Sequences ដើម្បីបង្ហាញព័ត៌មានជាទម្រង់តារាងសាមញ្ញ។",
      file: "Profile.java",
      code: 'public class Profile {\n    public static void main(String[] args) {\n        System.out.println("=== Student Profile ===");\n        System.out.print("Name:\\t");\n        System.out.println("Sok Dara");\n        System.out.print("Age:\\t");\n        System.out.println(20);\n        System.out.print("Major:\\t");\n        System.out.println("Computer Science");\n    }\n}',
      output: "=== Student Profile ===\nName:\tSok Dara\nAge:\t20\nMajor:\tComputer Science",
      lines: [
        "<code>\\t</code> បង្កើត Tab ដើម្បីតម្រឹមតម្លៃឱ្យស្មើគ្នា។",
        "<code>println(20)</code> អាចបោះពុម្ពចំនួនគត់បានដោយផ្ទាល់ ដោយមិនចាំបាច់ដាក់ Quote។",
        "ការប្រើ <code>print</code> បន្ទាប់មក <code>println</code> ធ្វើឱ្យ Label និងតម្លៃនៅបន្ទាត់តែមួយ។"
      ]
    },
    {
      title: "printf សម្រាប់តារាង",
      desc: "printf ជួយតម្រឹមទិន្នន័យជាជួរឈរ។ សូមកត់សម្គាល់ទម្រង់ <code>%-10s</code> និង <code>%5d</code>។",
      file: "TableFormat.java",
      code: 'public class TableFormat {\n    public static void main(String[] args) {\n        System.out.printf("%-10s %5s%n", "NAME", "SCORE");\n        System.out.printf("%-10s %5d%n", "Dara", 95);\n        System.out.printf("%-10s %5d%n", "Sokha", 88);\n        System.out.printf("%-10s %5d%n", "Vichea", 72);\n    }\n}',
      output: "NAME       SCORE\nDara          95\nSokha         88\nVichea        72",
      lines: [
        "<code>%-10s</code> តម្រឹម String ទៅឆ្វេងក្នុងទទឹង ១០ តួអក្សរ។",
        "<code>%5d</code> តម្រឹមចំនួនគត់ទៅស្តាំក្នុងទទឹង ៥ តួអក្សរ។",
        "<code>%n</code> ជា New Line ដែលសមស្របតាម Platform។"
      ]
    },
    {
      title: "Comments និង Javadoc",
      desc: "ឧទាហរណ៍នេះបង្ហាញប្រភេទ Comment ទាំងបី និងរបៀបសរសេរ Javadoc សម្រាប់ Method។",
      file: "Documented.java",
      code: '/**\n * កម្មវិធីសាមញ្ញសម្រាប់បង្ហាញការប្រើ Comment។\n */\npublic class Documented {\n    // បង្ហាញបន្ទាត់ស្វាគមន៍\n    public static void main(String[] args) {\n        /*\n         * println ខាងក្រោមនឹងបង្ហាញអត្ថបទ\n         * ទៅ Console។\n         */\n        System.out.println("Comments are not executed");\n    }\n}',
      output: "Comments are not executed",
      lines: [
        "<code>/** ... */</code> ជា Javadoc ដែលអាចបង្កើតជា HTML Documentation បាន។",
        "<code>//</code> ប្រើសម្រាប់ Comment បន្ទាត់តែមួយ។",
        "<code>/* ... */</code> ប្រើសម្រាប់ Comment ច្រើនបន្ទាត់។",
        "Comment មិនបង្ហាញនៅ Output ទេ ព្រោះ Compiler មិនអានវា។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ឈ្មោះ Class និងឯកសារខុសគ្នា</span><br><code>public class Student</code> ក្នុងឯកសារ <code>student.java</code>។', fix: "ដាក់ឈ្មោះឯកសារ Student.java ឱ្យត្រូវនឹង public class។" },
    { text: '<span class="bad-code">❌ main Signature ខុស</span><br><code>public static void Main(String[] args)</code> ឬ <code>public void main(String[] args)</code>។ Java ប្រកាន់អក្សរធំ-តូច។', fix: "ប្រើ <code>public static void main(String[] args)</code> ឱ្យពិតប្រាកដ។" },
    { text: '<span class="bad-code">❌ ប្រើ Single Quote សម្រាប់ String</span><br><code>System.out.println(\'Hello\');</code> មិនត្រឹមត្រូវទេ។', fix: "String ត្រូវប្រើ Double Quote៖ <code>\"Hello\"</code>។ Single Quote សម្រាប់ char ដូចជា <code>\'A\'</code>។" },
    { text: '<span class="bad-code">❌ Escape ខុស</span><br>សរសេរ <code>\"C:\\Users\"</code> ក្នុង Java ធ្វើឱ្យ <code>\\U</code> ជា Escape មិនត្រឹមត្រូវ។', fix: "សរសេរ <code>\"C:\\\\Users\"</code> ឬប្រើ Forward Slash <code>\"C:/Users\"</code>។" }
  ],
  tips: [
    "រក្សាទម្រង់ Indentation ឱ្យស្មើគ្នា (Space ៤ ឬ Tab ១) ដើម្បីអានកូដងាយ។",
    "សរសេរឈ្មោះ Variable ជាភាសាអង់គ្លេសដែលមានអត្ថន័យ ទោះបី Comment ជាភាសាខ្មែរក៏ដោយ។",
    "ប្រើ <code>%n</code> ក្នុង printf ជំនួស <code>\\n</code> នៅពេលត្រូវការ Platform Independence។",
    "មិនចាំបាច់ចងចាំ Escape ទាំងអស់ — ត្រូវចាំ <code>\\n</code>, <code>\\t</code>, <code>\\\"</code> និង <code>\\\\</code> ជាមុន។"
  ],
  exercises: [
    {
      level: 1,
      title: "បង្ហាញប្រវត្តិខ្លី",
      desc: "សរសេរកម្មវិធីបង្ហាញឈ្មោះ អាយុ និងទីក្រុងរបស់អ្នក ដោយប្រើ <code>println</code> បីបន្ទាត់។",
      requirements: ["ប្រើ Class ឈ្មោះ Bio", "Output មានបីបន្ទាត់ដាច់ពីគ្នា"],
      outputSample: "Name: Dara\nAge: 20\nCity: Phnom Penh",
      hint: "ប្រើ println មួយសម្រាប់មួយបន្ទាត់។",
      solutionCode: 'public class Bio {\n    public static void main(String[] args) {\n        System.out.println("Name: Dara");\n        System.out.println("Age: 20");\n        System.out.println("City: Phnom Penh");\n    }\n}'
    },
    {
      level: 1,
      title: "ប្រើ Escape Sequence",
      desc: "បង្ហាញអត្ថបទពីរបន្ទាត់ដោយប្រើ <code>println</code> តែមួយបន្ទាត់ និង <code>\\n</code>។",
      requirements: ["ប្រើ println តែម្តង", "Output មានពីរបន្ទាត់"],
      outputSample: "Java\nKhmer",
      hint: "ដាក់ <code>\\n</code> នៅកណ្តាល String។",
      solutionCode: 'public class TwoLines {\n    public static void main(String[] args) {\n        System.out.println("Java\\nKhmer");\n    }\n}'
    },
    {
      level: 2,
      title: "តារាងពិន្ទុ",
      desc: "ប្រើ <code>printf</code> ដើម្បីបង្ហាញតារាងមានជួរឈរ NAME និង SCORE សម្រាប់សិស្សបីនាក់។",
      requirements: ["ប្រើ printf", "តម្រឹមជួរឈរឱ្យស្អាត", "មាន Header"],
      outputSample: "NAME       SCORE\nDara          90\nSokha         85\nVichea        78",
      hint: "ប្រើ <code>%-10s</code> និង <code>%5d</code>។",
      solutionCode: 'public class ScoreTable {\n    public static void main(String[] args) {\n        System.out.printf("%-10s %5s%n", "NAME", "SCORE");\n        System.out.printf("%-10s %5d%n", "Dara", 90);\n        System.out.printf("%-10s %5d%n", "Sokha", 85);\n        System.out.printf("%-10s %5d%n", "Vichea", 78);\n    }\n}'
    },
    {
      level: 2,
      title: "ពន្យល់កូដដោយ Comment",
      desc: "យកកូដ Hello World ហើយបន្ថែម Comment ពន្យល់រាល់បន្ទាត់សំខាន់។ បន្ទាប់មកសរសេរ Javadoc ខាងលើ Class។",
      requirements: ["ប្រើ // យ៉ាងហោចណាស់ ៣ កន្លែង", "ប្រើ /** ... */ ខាងលើ Class", "Compile បានដោយជោគជ័យ"],
      hint: "Comment មិនប៉ះពាល់ Output ទេ។",
      solutionCode: '/**\n * កម្មវិធី Hello World ជាមួយ Comment។\n */\npublic class HelloDocumented {\n    public static void main(String[] args) {\n        // បង្ហាញអត្ថបទស្វាគមន៍\n        System.out.println("Hello, World!");\n    }\n}'
    },
    {
      level: 3,
      title: "បង្កើត Business Card",
      desc: "បង្ហាញ Business Card ក្នុង Console ដោយប្រើ print, println និង Escape Sequences។ ត្រូវមានស៊ុមព្រំដែន និងតម្រឹមស្អាត។",
      requirements: ["មានស៊ុមប្រអប់", "មានឈ្មោះ មុខរបរ អ៊ីមែល", "ប្រើ \\t ឬ printf ដើម្បីតម្រឹម"],
      outputSample: "+-----------------------+\n| DARA SOK              |\n| Java Developer        |\n| dara@example.com      |\n+-----------------------+",
      hint: "អ្នកអាចប្រើ println ជាច្រើនបន្ទាត់ ឬ String មួយដែលមាន \\n។",
      solutionCode: 'public class BusinessCard {\n    public static void main(String[] args) {\n        System.out.println("+-----------------------+");\n        System.out.println("| DARA SOK              |");\n        System.out.println("| Java Developer        |");\n        System.out.println("| dara@example.com      |");\n        System.out.println("+-----------------------+");\n    }\n}'
    },
    {
      level: 3,
      title: "រកកំហុស Syntax",
      desc: "កូដខាងក្រោមមានកំហុសយ៉ាងហោចណាស់ ៤។ សរសេរកូដឡើងវិញឱ្យត្រឹមត្រូវ៖ <br><code>public Class demo { public static void Main(String args) { system.out.println(\'Hi\') } }</code>",
      requirements: ["កែឈ្មោះ Class", "កែ main Signature", "កែ system.out", "បន្ថែម Semicolon"],
      hint: "Java ប្រកាន់អក្សរធំ-តូច។ System ត្រូវចាប់ផ្តើមដោយ S ធំ។",
      solutionCode: 'public class Demo {\n    public static void main(String[] args) {\n        System.out.println("Hi");\n    }\n}',
      solution: "កំហុស៖ <code>Class</code> ត្រូវជា <code>class</code>, <code>demo</code> ត្រូវជា <code>Demo</code> (PascalCase), <code>Main</code> ត្រូវជា <code>main</code>, <code>String args</code> ត្រូវជា <code>String[] args</code>, <code>system.out</code> ត្រូវជា <code>System.out</code>, និងខ្វះ Semicolon។"
    }
  ],
  quiz: [
    { q: "តើ Method ណាជា Entry Point របស់ Java?", options: ["start()", "run()", "main()", "init()"], answer: 2, explain: "JVM ស្វែងរក main method ដែលមាន Signature public static void main(String[] args)។" },
    { q: "តើ <code>\\t</code> មានន័យដូចម្តេច?", options: ["ចុះបន្ទាត់", "Tab", "Backslash", "Double Quote"], answer: 1, explain: "\\t គឺ Tab ដែលជួយតម្រឹមអត្ថបទ។" },
    { q: "តើ Comment ណាដែលប្រើសម្រាប់ Javadoc?", options: ["//", "/* */", "/** */", "#"], answer: 2, explain: "Javadoc ចាប់ផ្តើមដោយ /** និងបញ្ចប់ដោយ */។" },
    { q: "តើឈ្មោះ Variable តាម Convention គួរជាបែបណា?", options: ["PascalCase", "camelCase", "UPPER_CASE", "kebab-case"], answer: 1, explain: "Variable និង Method ប្រើ camelCase ដូចជា studentAge។ Class ប្រើ PascalCase។" },
    { q: "តើ Statement ភាគច្រើនបញ្ចប់ដោយអ្វី?", options: [":", ";", ".", "}"], answer: 1, explain: "Java ប្រើ Semicolon ដើម្បីបញ្ចប់ Statement។" }
  ],
  summary: [
    "កម្មវិធី Java មាន Package, Class, Method និង Statements។",
    "main method មាន Signature public static void main(String[] args)។",
    "print មិនចុះបន្ទាត់; println ចុះបន្ទាត់; printf ប្រើ Format។",
    "Comment មានបីប្រភេទ៖ //, /* */ និង /** */។",
    "Escape Sequences ដូចជា \\n និង \\t ជួយគ្រប់គ្រងទម្រង់អត្ថបទ។",
    "Naming Conventions ជួយឱ្យកូដអានងាយ និងស្របស្តង់ដារ។"
  ],
  takeaways: [
    "Java ប្រកាន់អក្សរធំ-តូច ដូច្នេះ System និង system ខុសគ្នាទាំងស្រុង។",
    "Class ត្រូវដាក់ឈ្មោះជា PascalCase និងឯកសារត្រូវដូចឈ្មោះ public class។",
    "println គឺជា Method ដែលអ្នកនឹងប្រើច្រើនបំផុតពេលចាប់ផ្តើម។",
    "Comment ល្អពន្យល់ហេតុផល មិនមែនពន្យល់ Syntax។",
    "ការតម្រឹមកូដ និងការដាក់ឈ្មោះល្អ គឺជាផ្នែកនៃភាពជាអ្នកអភិវឌ្ឍន៍អាជីព។"
  ],
  sources: [
    { label: "Dev.java — Java Syntax", url: "https://dev.java/learn/" },
    { label: "Oracle — The Java Language Specification", url: "https://docs.oracle.com/javase/specs/" },
    { label: "W3Schools — Java Syntax", url: "https://www.w3schools.com/java/java_syntax.asp" },
    { label: "W3Schools — Java Comments", url: "https://www.w3schools.com/java/java_comments.asp" }
  ]
});

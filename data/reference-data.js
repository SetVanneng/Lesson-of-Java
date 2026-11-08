/* Java Reference Data: Glossary, Keywords, Errors, Cheat Sheet, Roadmap, Final Test */
window.JAVA_REFERENCE = {
  glossary: [
    { en: "JVM", kh: "Java Virtual Machine", def: "ម៉ាស៊ីននិម្មិតដែលដំណើរការ Bytecode របស់ Java។ វាធ្វើឱ្យ Java ដំណើរការបានលើ OS ផ្សេងៗគ្នា។" },
    { en: "JDK", kh: "Java Development Kit", def: "កញ្ចប់ឧបករណ៍សម្រាប់អភិវឌ្ឍ Java ដែលរួមមាន Compiler (javac), JRE និងឧបករណ៍ផ្សេងៗ។" },
    { en: "JRE", kh: "Java Runtime Environment", def: "បរិស្ថានសម្រាប់ដំណើរការ Java Program ដែលរួមមាន JVM និង Library ចាំបាច់។" },
    { en: "Bytecode", kh: "កូដមធ្យម", def: "កូដដែល Compiler បង្កើតពី Source Code ហើយ JVM អាចដំណើរការបាន។" },
    { en: "Class", kh: "ថ្នាក់", def: "គំរូ (Blueprint) សម្រាប់បង្កើត Object ដែលផ្ទុក Field និង Method។" },
    { en: "Object", kh: "វត្ថុ", def: "Instance ដែលបង្កើតចេញពី Class ហើយមានស្ថានភាព និងអាកប្បកិរិយាផ្ទាល់ខ្លួន។" },
    { en: "Method", kh: "វិធីសាស្ត្រ", def: "Block កូដដែលអនុវត្តការងារជាក់លាក់ ហើយអាចទទួល Parameter និងត្រឡប់តម្លៃ។" },
    { en: "Variable", kh: "អថេរ", def: "ទីតាំងផ្ទុកទិន្នន័យក្នុង Memory ដែលមានឈ្មោះ និង Type។" },
    { en: "Data Type", kh: "ប្រភេទទិន្នន័យ", def: "កំណត់ប្រភេទតម្លៃដែល Variable អាចផ្ទុក ដូចជា int, double, String។" },
    { en: "Primitive Type", kh: "ប្រភេទបឋម", def: "Type មូលដ្ឋាន ៨ ប្រភេទ ដូចជា int, double, char, boolean ដែលផ្ទុកតម្លៃផ្ទាល់។" },
    { en: "Reference Type", kh: "ប្រភេទយោង", def: "Type ដែលផ្ទុក Address ទៅ Object ក្នុង Memory ដូចជា String, Array និង Class។" },
    { en: "String", kh: "ខ្សែអក្សរ", def: "Class សម្រាប់ផ្ទុកអត្ថបទ ដែលមិនអាចកែប្រែបាន (Immutable)។" },
    { en: "Array", kh: "អារេ", def: "Collection ទំហំថេរ ដែលផ្ទុកធាតុ Type ដូចគ្នាតាម Index។" },
    { en: "Loop", kh: "រង្វិលជុំ", def: "រចនាសម្ព័ន្ធសម្រាប់អនុវត្តកូដម្តងហើយម្តងទៀត ដូចជា for និង while។" },
    { en: "Condition", kh: "លក្ខខណ្ឌ", def: "កន្សោមដែលផ្តល់ true ឬ false ដើម្បីគ្រប់គ្រងលំហូរ Program។" },
    { en: "Operator", kh: "ប្រមាណវិធី", def: "សញ្ញាសម្រាប់គណនា ឬប្រៀបធៀប ដូចជា +, -, ==, &&។" },
    { en: "Casting", kh: "ការបំប្លែង Type", def: "ការប្តូរតម្លៃពី Type មួយទៅ Type មួយ ដូចជា double ទៅ int។" },
    { en: "Constructor", kh: "កម្មវិធីបង្កើត", def: "Method ពិសេសដែលដំណើរការពេលបង្កើត Object ដើម្បីកំណត់តម្លៃដំបូង។" },
    { en: "Encapsulation", kh: "ការវេចខ្ចប់", def: "ការលាក់ Field ដោយ private និងផ្តល់ Getter/Setter សម្រាប់ការចូលប្រើដោយសុវត្ថិភាព។" },
    { en: "Inheritance", kh: "មរតក", def: "Class ថ្មីទទួល Field និង Method ពី Class ដើម ដោយប្រើ extends។" },
    { en: "Polymorphism", kh: "ពហុរូបភាព", def: "សមត្ថភាពហៅ Method ដូចគ្នាប៉ុន្តែអាកប្បកិរិយាខុសគ្នាតាម Object។" },
    { en: "Abstraction", kh: "ការអរូបី", def: "ការលាក់ព័ត៌មានលម្អិត និងបង្ហាញតែអ្វីដែលចាំបាច់ ដោយ Abstract Class ឬ Interface។" },
    { en: "Interface", kh: "ចំណុចប្រទាក់", def: "កិច្ចសន្យាដែល Class ត្រូវអនុវត្ត ដោយប្រើ implements។" },
    { en: "Overloading", kh: "ការផ្ទុកលើស", def: "Method ឈ្មោះដូចគ្នាក្នុង Class តែមួយ ប៉ុន្តែ Parameter ខុសគ្នា។" },
    { en: "Overriding", kh: "ការជំនួស", def: "Subclass ផ្តល់ Implementation ថ្មីឱ្យ Method ដែលទទួលមកពី Superclass។" },
    { en: "Recursion", kh: "ការហៅខ្លួនឯង", def: "Method ហៅខ្លួនឯងដើម្បីដោះស្រាយបញ្ហាតូចជាង។" },
    { en: "Exception", kh: "បញ្ហា", def: "Object ដែលតំណាងឱ្យបញ្ហាកើតឡើងពេល Program ដំណើរការ។" },
    { en: "try-catch", kh: "សាកល្បង-ចាប់", def: "រចនាសម្ព័ន្ធសម្រាប់ចាប់ និងគ្រប់គ្រង Exception។" },
    { en: "Checked Exception", kh: "Exception ដែលត្រូវពិនិត្យ", def: "Exception ដែល Compiler បង្ខំឱ្យគ្រប់គ្រង ឬប្រកាសដោយ throws។" },
    { en: "Unchecked Exception", kh: "Exception មិនត្រូវពិនិត្យ", def: "RuntimeException ដែល Compiler មិនបង្ខំឱ្យ Catch។" },
    { en: "Collection", kh: "កម្រង", def: "Group នៃ Object ដែលគ្រប់គ្រងដោយ Collections Framework។" },
    { en: "List", kh: "បញ្ជី", def: "Collection មានលំដាប់ និងអនុញ្ញាតធាតុស្ទួន ដូចជា ArrayList។" },
    { en: "Set", kh: "សំណុំ", def: "Collection ដែលមិនអនុញ្ញាតធាតុស្ទួន ដូចជា HashSet។" },
    { en: "Map", kh: "ផែនទី", def: "Collection ដែលផ្ទុក Key-Value ដោយ Key មិនអាចស្ទួន។" },
    { en: "Generics", kh: "ប្រភេទទូទៅ", def: "មុខងារកំណត់ Type ក្នុង Collection ដើម្បីធានាសុវត្ថិភាព Type។" },
    { en: "Iterator", kh: "អ្នករាប់", def: "Object សម្រាប់ដើរលើ Collection ម្តងមួយធាតុ។" },
    { en: "File I/O", kh: "ការអាន/សរសេរ File", def: "ការអាន និងសរសេរទិន្នន័យទៅ File ដើម្បីរក្សាទុកយូរ។" },
    { en: "Stream", kh: "លំហូរទិន្នន័យ", def: "លំហូរនៃទិន្នន័យរវាង Program និងប្រភពដូចជា File ឬ Network។" },
    { en: "Package", kh: "កញ្ចប់", def: "ក្រុម Class និង Interface ដែលរៀបចំតាម Namespace។" },
    { en: "Import", kh: "ការនាំចូល", def: "Keyword សម្រាប់ប្រើ Class ពី Package ផ្សេង។" },
    { en: "Access Modifier", kh: "កម្រិតការចូលប្រើ", def: "Keyword ដូចជា public, private, protected ដែលកំណត់អ្នកអាចចូលប្រើបាន។" },
    { en: "static", kh: "ឋិតិវន្ត", def: "Keyword ដែលធ្វើឱ្យ Member ជាកម្មសិទ្ធិរបស់ Class មិនមែន Object។" },
    { en: "final", kh: "ថេរ", def: "Keyword ដែលហាមកែតម្លៃ ហាម Override ឬហាម Inheritance។" },
    { en: "this", kh: "នេះ", def: "Keyword យោងទៅ Object បច្ចុប្បន្ន។" },
    { en: "super", kh: "ឪពុកម្តាយ", def: "Keyword យោងទៅ Superclass សម្រាប់ Field, Method ឬ Constructor។" },
    { en: "main Method", kh: "Method ចម្បង", def: "ចំណុចចាប់ផ្តើមដំណើរការ Program ដែលមាន Signature public static void main(String[] args)។" },
    { en: "Compiler", kh: "កម្មវិធីបំប្លែងកូដ", def: "ឧបករណ៍ដែលបំប្លែង Source Code ទៅ Bytecode ដូចជា javac។" },
    { en: "Stack", kh: "ស្តេក", def: "តំបន់ Memory សម្រាប់ Variable មូលដ្ឋាន និងការហៅ Method។" },
    { en: "Heap", kh: "ហ៊ីប", def: "តំបន់ Memory សម្រាប់ Object ដែលបង្កើតដោយ new។" },
    { en: "Garbage Collection", kh: "ការប្រមូលសំរាម", def: "ដំណើរការស្វ័យប្រវត្តិរបស់ JVM ក្នុងការបញ្ចេញ Memory ពី Object ដែលមិនប្រើ។" }
  ],

  keywords: [
    { kw: "abstract", type: "Class Modifier", desc: "ប្រកាស Class ឬ Method ដែលមិនមាន Implementation ពេញលេញ។", example: "abstract class Shape { abstract double area(); }" },
    { kw: "boolean", type: "Primitive Type", desc: "Type សម្រាប់តម្លៃ true ឬ false។", example: "boolean isReady = true;" },
    { kw: "break", type: "Control Flow", desc: "បញ្ចប់ Loop ឬ switch ភ្លាមៗ។", example: "if (x == 0) break;" },
    { kw: "byte", type: "Primitive Type", desc: "ចំនួនគត់ 8-bit ចាប់ពី -128 ដល់ 127។", example: "byte age = 25;" },
    { kw: "case", type: "Control Flow", desc: "កំណត់ជម្រើសមួយក្នុង switch។", example: "case 1: break;" },
    { kw: "catch", type: "Exception", desc: "ចាប់ Exception ក្នុង try-catch។", example: "catch (IOException e) { }" },
    { kw: "char", type: "Primitive Type", desc: "តួអក្សរ Unicode 16-bit មួយ។", example: "char grade = 'A';" },
    { kw: "class", type: "Declaration", desc: "ប្រកាស Class ថ្មី។", example: "class Student { }" },
    { kw: "continue", type: "Control Flow", desc: "រំលង Iteration បច្ចុប្បន្ន ហើយបន្តទៅ Iteration បន្ទាប់។", example: "if (i == 3) continue;" },
    { kw: "default", type: "Control Flow", desc: "ជម្រើសលំនាំដើមក្នុង switch ឬ Method ក្នុង Interface។", example: "default: break;" },
    { kw: "do", type: "Control Flow", desc: "ចាប់ផ្តើម do-while Loop ដែលដំណើរការយ៉ាងតិចម្តង។", example: "do { } while (x < 5);" },
    { kw: "double", type: "Primitive Type", desc: "ចំនួនទសភាគ 64-bit។", example: "double price = 9.99;" },
    { kw: "else", type: "Control Flow", desc: "Block ដែលដំណើរការពេលលក្ខខណ្ឌ if មិនពិត។", example: "if (x > 0) { } else { }" },
    { kw: "enum", type: "Declaration", desc: "ប្រកាសសំណុំតម្លៃថេរ។", example: "enum Day { MON, TUE, WED }" },
    { kw: "extends", type: "OOP", desc: "ធ្វើឱ្យ Class ស្នងពី Class ផ្សេង ឬ Interface ស្នង Interface។", example: "class Dog extends Animal { }" },
    { kw: "final", type: "Modifier", desc: "ហាមកែតម្លៃ ហាម Override ឬហាម Inheritance។", example: "final int MAX = 100;" },
    { kw: "finally", type: "Exception", desc: "Block ដែលដំណើរការជានិច្ច ទោះមាន Exception ឬអត់។", example: "finally { scanner.close(); }" },
    { kw: "float", type: "Primitive Type", desc: "ចំនួនទសភាគ 32-bit។", example: "float rate = 1.5f;" },
    { kw: "for", type: "Control Flow", desc: "Loop ដែលមាន Initialization, Condition និង Update។", example: "for (int i = 0; i < 5; i++) { }" },
    { kw: "if", type: "Control Flow", desc: "អនុវត្តកូដប្រសិនបើលក្ខខណ្ឌពិត។", example: "if (score >= 50) { }" },
    { kw: "implements", type: "OOP", desc: "Class អនុវត្ត Interface។", example: "class Dog implements Runnable { }" },
    { kw: "import", type: "Declaration", desc: "នាំចូល Class ពី Package។", example: "import java.util.Scanner;" },
    { kw: "instanceof", type: "Operator", desc: "ពិនិត្យថា Object ជា Instance របស់ Class ឬអត់។", example: "if (obj instanceof String) { }" },
    { kw: "int", type: "Primitive Type", desc: "ចំនួនគត់ 32-bit។", example: "int count = 10;" },
    { kw: "interface", type: "Declaration", desc: "ប្រកាស Interface ដែលកំណត់ Method Contract។", example: "interface Shape { double area(); }" },
    { kw: "long", type: "Primitive Type", desc: "ចំនួនគត់ 64-bit។", example: "long population = 17000000L;" },
    { kw: "new", type: "Operator", desc: "បង្កើត Object ថ្មី។", example: "Student s = new Student();" },
    { kw: "package", type: "Declaration", desc: "កំណត់ Package របស់ Class។", example: "package com.example;" },
    { kw: "private", type: "Access Modifier", desc: "អាចចូលប្រើបានតែក្នុង Class ដូចគ្នា។", example: "private int balance;" },
    { kw: "protected", type: "Access Modifier", desc: "អាចចូលប្រើក្នុង Package និង Subclass។", example: "protected String name;" },
    { kw: "public", type: "Access Modifier", desc: "អាចចូលប្រើបានពីគ្រប់ទីកន្លែង។", example: "public void print() { }" },
    { kw: "return", type: "Control Flow", desc: "ត្រឡប់តម្លៃ និងបញ្ចប់ Method។", example: "return total;" },
    { kw: "short", type: "Primitive Type", desc: "ចំនួនគត់ 16-bit។", example: "short year = 2026;" },
    { kw: "static", type: "Modifier", desc: "Member ជាកម្មសិទ្ធិរបស់ Class មិនមែន Object។", example: "static int count = 0;" },
    { kw: "super", type: "OOP", desc: "យោងទៅ Superclass។", example: "super(name);" },
    { kw: "switch", type: "Control Flow", desc: "ជ្រើសរើសសកម្មភាពតាមតម្លៃជាច្រើន។", example: "switch (choice) { case 1: break; }" },
    { kw: "synchronized", type: "Modifier", desc: "ធានាថាមាន Thread តែមួយចូលប្រើក្នុងពេលតែមួយ។", example: "synchronized void update() { }" },
    { kw: "this", type: "OOP", desc: "យោងទៅ Object បច្ចុប្បន្ន។", example: "this.name = name;" },
    { kw: "throw", type: "Exception", desc: "បង្ក Exception ដោយខ្លួនឯង។", example: "throw new IllegalArgumentException();" },
    { kw: "throws", type: "Exception", desc: "ប្រកាស Exception នៅលើ Method Signature។", example: "void read() throws IOException { }" },
    { kw: "transient", type: "Modifier", desc: "រំលង Field ពេល Serialize Object។", example: "transient String password;" },
    { kw: "try", type: "Exception", desc: "ចាប់ផ្តើម Block ដែលអាចបង្ក Exception។", example: "try { readFile(); }" },
    { kw: "void", type: "Return Type", desc: "Method ដែលមិនត្រឡប់តម្លៃ។", example: "void print() { }" },
    { kw: "volatile", type: "Modifier", desc: "ធានាថា Thread ឃើញតម្លៃថ្មីបំផុតពី Memory។", example: "volatile boolean running = true;" },
    { kw: "while", type: "Control Flow", desc: "Loop ដែលដំណើរការពេលលក្ខខណ្ឌពិត។", example: "while (x < 10) { x++; }" },
    { kw: "var", type: "Type Inference", desc: "ឱ្យ Compiler ស្មាន Type ពីតម្លៃដំបូង (Java 10+)។", example: "var list = new ArrayList<String>();" },
    { kw: "record", type: "Declaration", desc: "Class សម្រាប់ផ្ទុកទិន្នន័យខ្លីៗ (Java 16+)។", example: "record Point(int x, int y) { }" },
    { kw: "sealed", type: "Class Modifier", desc: "កំណត់ថា Class ណាខ្លះអាចស្នងបាន (Java 17+)។", example: "sealed class Shape permits Circle { }" },
    { kw: "permits", type: "Class Modifier", desc: "រាយ Class ដែលអាចស្នងពី sealed Class។", example: "sealed interface Shape permits Circle, Square { }" },
    { kw: "yield", type: "Control Flow", desc: "ត្រឡប់តម្លៃពី switch expression។", example: "int n = switch (x) { case 1 -> 10; default -> 0; };" }
  ],

  errors: [
    {
      error: "cannot find symbol",
      cause: "Compiler រកមិនឃើញ Variable, Method ឬ Class ដែលអ្នកប្រើ។ ជាទូទៅកើតពីការសរសេរខុស ឬភ្លេច Import។",
      fix: "ពិនិត្យអក្ខរាវិរុទ្ធ, ធ្វើឱ្យប្រាកដថា Class ត្រូវ Import និង Variable ត្រូវបានប្រកាស។",
      example: "System.out.printLn(\"Hi\");  // ខុស: printLn\n// ត្រឹមត្រូវ: System.out.println(\"Hi\");"
    },
    {
      error: "class X is public, should be declared in a file named X.java",
      cause: "ឈ្មោះ File មិនដូចឈ្មោះ public Class។",
      fix: "ប្តូរឈ្មោះ File ឱ្យដូចឈ្មោះ Class (Case-sensitive) ឬដក public ចេញ។",
      example: "// File: Main.java\npublic class MyApp { }  // ខុស\n// ត្រឹមត្រូវ: public class Main { }"
    },
    {
      error: "missing return statement",
      cause: "Method ដែលមាន Return Type មិនមែន void តែគ្មាន return គ្រប់ផ្លូវ។",
      fix: "បន្ថែម return នៅចុង Method ឬគ្រប់ Branch របស់ if-else។",
      example: "int getScore() {\n    int x = 10;\n    // ខ្វះ return x;\n}"
    },
    {
      error: "incompatible types",
      cause: "អ្នកដាក់តម្លៃ Type មួយទៅ Variable Type មួយផ្សេង ដោយគ្មាន Casting។",
      fix: "ប្រើ Type ត្រឹមត្រូវ ឬ Casting ដូចជា (int) value។",
      example: "int price = \"100\";         // ខុស\nint price = Integer.parseInt(\"100\"); // ត្រឹមត្រូវ"
    },
    {
      error: "variable might not have been initialized",
      cause: "Local Variable ត្រូវបានប្រើមុនពេលផ្តល់តម្លៃ។",
      fix: "ផ្តល់តម្លៃដំបូង ដូចជា int sum = 0;",
      example: "int sum;\nsum += 5;   // ខុស\nint sum = 0; // ត្រឹមត្រូវ"
    },
    {
      error: "NullPointerException",
      cause: "អ្នកហៅ Method ឬអាន Field លើ Object ដែលជា null។",
      fix: "ពិនិត្យ null មុនប្រើ ឬធានាថា Object ត្រូវបានបង្កើតដោយ new។",
      example: "String name = null;\nSystem.out.println(name.length()); // ខុស\nif (name != null) { ... }           // ការពារ"
    },
    {
      error: "ArrayIndexOutOfBoundsException",
      cause: "អាន ឬសរសេរ Array នៅ Index ក្រៅដែនកំណត់។",
      fix: "ពិនិត្យ Index ឱ្យស្ថិតចន្លោះ 0 ដល់ length - 1។",
      example: "int[] a = {1, 2, 3};\nSystem.out.println(a[3]); // ខុស\n// Index ត្រឹមត្រូវ: 0, 1, 2"
    },
    {
      error: "StringIndexOutOfBoundsException",
      cause: "ចូលប្រើ charAt ឬ substring ក្រៅដែនកំណត់របស់ String។",
      fix: "ពិនិត្យ length() មុនចូលប្រើ Index។",
      example: "String s = \"Java\";\ns.charAt(4); // ខុស, Index មានត្រឹម 0-3"
    },
    {
      error: "ArithmeticException: / by zero",
      cause: "ចែកចំនួនគត់នឹង 0។",
      fix: "ពិនិត្យ Divisor មុនចែក ឬ Catch ArithmeticException។",
      example: "int b = 0;\nint r = 10 / b; // ខុស\nif (b != 0) { int r2 = 10 / b; }"
    },
    {
      error: "NumberFormatException",
      cause: "បំប្លែង String ដែលមិនមែនជាលេខ ទៅជា int ឬ double។",
      fix: "ពិនិត្យទម្រង់ ឬ Catch NumberFormatException។",
      example: "int n = Integer.parseInt(\"abc\"); // ខុស\n// ត្រឹមត្រូវ: Integer.parseInt(\"123\");"
    },
    {
      error: "ClassCastException",
      cause: "Casting Object ទៅ Class ដែលមិនត្រូវនឹង Type ពិតរបស់វា។",
      fix: "ប្រើ instanceof ពិនិត្យមុន Cast។",
      example: "Object obj = \"hello\";\nInteger n = (Integer) obj; // ខុស\nif (obj instanceof String) { ... }"
    },
    {
      error: "ConcurrentModificationException",
      cause: "កែ Collection (add/remove) ពេលកំពុង Loop ដោយ for-each។",
      fix: "ប្រើ Iterator.remove() ឬ removeIf() ជំនួស។",
      example: "for (String s : list) {\n    if (s.isEmpty()) list.remove(s); // ខុស\n}\nlist.removeIf(String::isEmpty);      // ត្រឹមត្រូវ"
    },
    {
      error: "unreachable statement",
      cause: "កូដស្ថិតក្រោយ return, break ឬ throw ដែលមិនអាចដំណើរការបាន។",
      fix: "លុបកូដដែលមិនអាចដំណើរការ ឬផ្លាស់ទីវាទៅមុន return។",
      example: "return x;\nSystem.out.println(\"dead\"); // ខុស"
    },
    {
      error: "non-static variable this cannot be referenced from a static context",
      cause: "ហៅ Field ឬ Method ដែលមិនមែន static ពី Method static ដូចជា main។",
      fix: "បង្កើត Object ហើយហៅតាម Object ឬធ្វើឱ្យ Member នោះ static។",
      example: "class A {\n    int x = 5;\n    public static void main(String[] args) {\n        System.out.println(x); // ខុស\n    }\n}"
    },
    {
      error: "constructor X cannot be applied to given types",
      cause: "ហៅ Constructor ដោយចំនួន ឬ Type របស់ Argument មិនត្រូវ។",
      fix: "ពិនិត្យ Constructor Signature ឬបន្ថែម Constructor ដែលត្រូវការ។",
      example: "Student s = new Student();\n// ប៉ុន្តែ Constructor ត្រូវការ (String name)"
    },
    {
      error: "; expected",
      cause: "ភ្លេច Semicolon ចុងបន្ទាត់ Statement។",
      fix: "បន្ថែម ; ចុង Statement នីមួយៗ។",
      example: "int x = 10\nSystem.out.println(x); // ខុស\nint x = 10;             // ត្រឹមត្រូវ"
    },
    {
      error: "illegal start of expression",
      cause: "សញ្ញា ឬ Keyword មិនត្រូវបានដាក់ក្នុងទីតាំងត្រឹមត្រូវ (ជាញឹកញាប់វង់ក្រចកខុស)។",
      fix: "ពិនិត្យវង់ក្រចក {} () និងលំដាប់ Statement។",
      example: "public void test( { }  // ខុស\npublic void test() { }   // ត្រឹមត្រូវ"
    },
    {
      error: "method X is already defined",
      cause: "Method ដែលមានឈ្មោះ និង Parameter ដូចគ្នា ត្រូវបានប្រកាសពីរដងក្នុង Class តែមួយ។",
      fix: "ប្តូរឈ្មោះ ឬ Parameter (Overloading) ឬលុបមួយចេញ។",
      example: "void show() { }\nvoid show() { } // ខុស"
    },
    {
      error: "InputMismatchException",
      cause: "Scanner រំពឹងលេខ ប៉ុន្តែអ្នកប្រើបញ្ចូលអក្សរ។",
      fix: "ប្រើ hasNextInt() ឬ Catch InputMismatchException និងសម្អាត Input។",
      example: "Scanner sc = new Scanner(System.in);\nint n = sc.nextInt(); // បញ្ចូល \"abc\" នឹងខុស"
    },
    {
      error: "FileNotFoundException / NoSuchFileException",
      cause: "File ដែលអ្នកព្យាយាមអាន មិនមាន ឬ Path ខុស។",
      fix: "ពិនិត្យ Path និងប្រើ Files.exists() មុនអាន ឬ Catch IOException។",
      example: "Files.readAllLines(Path.of(\"missing.txt\")); // បើ File មិនមាន"
    }
  ],

  cheatsheet: [
    { title: "Program Structure", code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}`, note: "ឈ្មោះ File ត្រូវដូចឈ្មោះ public Class។" },
    { title: "Variables & Types", code: `int age = 20;
double price = 9.99;
char grade = 'A';
boolean active = true;
String name = "Dara";`, note: "String ជា Reference Type ត្រូវប្រើសញ្ញាក្បៀសពីរ។" },
    { title: "Constants & Casting", code: `final int MAX = 100;
double d = 9.8;
int n = (int) d;`, note: "final មិនអាចកែតម្លៃ; Casting បាត់ទសភាគ។" },
    { title: "Operators", code: `int sum = a + b;
boolean ok = age >= 18 && score > 50;
int remainder = 10 % 3;`, note: "ប្រើ == សម្រាប់ប្រៀបធៀប មិនមែន =។" },
    { title: "Conditionals", code: `if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else {
    System.out.println("C");
}`, note: "ពិនិត្យពីលក្ខខណ្ឌច្បាស់ទៅទូទៅ។" },
    { title: "Switch", code: `switch (choice) {
    case 1:
        System.out.println("One");
        break;
    default:
        System.out.println("Other");
}`, note: "កុំភ្លេច break បើមិនចង់ Fall Through។" },
    { title: "Loops", code: `for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

while (condition) {
    // repeat
}

do {
    // at least once
} while (condition);`, note: "do-while ដំណើរការយ៉ាងតិចម្តង។" },
    { title: "Arrays", code: `int[] numbers = {10, 20, 30};
System.out.println(numbers[0]);
System.out.println(numbers.length);

for (int n : numbers) {
    System.out.println(n);
}`, note: "Index ចាប់ពី 0 ដល់ length - 1។" },
    { title: "Strings", code: `String text = "Java";
System.out.println(text.length());
System.out.println(text.toUpperCase());
System.out.println(text.charAt(0));
System.out.println(text.substring(1, 3));
System.out.println(text.contains("av"));`, note: "String មិនអាចកែប្រែបាន — Method ត្រឡប់ String ថ្មី។" },
    { title: "Methods", code: `static int add(int a, int b) {
    return a + b;
}

static void greet(String name) {
    System.out.println("Hello " + name);
}`, note: "void មិនត្រឡប់តម្លៃ; Method មាន Return Type ត្រូវ return។" },
    { title: "Class & Object", code: `class Student {
    String name;
    int score;

    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    void show() {
        System.out.println(name + ": " + score);
    }
}

Student s = new Student("Dara", 85);
s.show();`, note: "Constructor មានឈ្មោះដូច Class និងគ្មាន Return Type។" },
    { title: "Encapsulation", code: `class Account {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
}`, note: "Field private + Getter/Setter ជាការអនុវត្ត Encapsulation។" },
    { title: "Inheritance & Overriding", code: `class Animal {
    void speak() {
        System.out.println("Sound");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Woof");
    }
}`, note: "ប្រើ @Override ដើម្បីធានាថា Signature ត្រូវ។" },
    { title: "Interface", code: `interface Shape {
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
}`, note: "Class អនុវត្ត Interface ដោយ implements និង public Method។" },
    { title: "Exception Handling", code: `try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} finally {
    System.out.println("Done");
}`, note: "finally ដំណើរការជានិច្ច។" },
    { title: "try-with-resources", code: `try (BufferedReader reader = new BufferedReader(new FileReader("a.txt"))) {
    String line = reader.readLine();
} catch (IOException e) {
    System.out.println("Error");
}`, note: "Resource ត្រូវបិទដោយស្វ័យប្រវត្តិ។" },
    { title: "ArrayList", code: `import java.util.ArrayList;

ArrayList<String> list = new ArrayList<>();
list.add("Java");
list.add("PHP");
System.out.println(list.get(0));
System.out.println(list.size());`, note: "ArrayList អាចរីកធំ និងអនុញ្ញាតធាតុស្ទួន។" },
    { title: "HashSet & HashMap", code: `HashSet<String> set = new HashSet<>();
set.add("A");
set.add("A");            // មិនបន្ថែម

HashMap<String, Integer> map = new HashMap<>();
map.put("A", 10);
System.out.println(map.get("A"));`, note: "Set មិនស្ទួន; Map ផ្ទុក Key-Value។" },
    { title: "File Read/Write", code: `// Write
Files.writeString(Path.of("a.txt"), "Hello");

// Read
List<String> lines = Files.readAllLines(Path.of("a.txt"));
for (String line : lines) {
    System.out.println(line);
}`, note: "ត្រូវ Catch IOException ឬប្រកាស throws។" },
    { title: "Scanner Input", code: `import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
System.out.print("Name: ");
String name = scanner.nextLine();

System.out.print("Age: ");
int age = scanner.nextInt();
scanner.nextLine();

scanner.close();`, note: "បន្ទាប់ពី nextInt() ត្រូវ nextLine() សម្អាត New Line។" },
    { title: "Compile & Run", code: `javac Main.java
java Main`, note: "Run ដោយឈ្មោះ Class ដោយគ្មាន .class។" }
  ],

  roadmap: [
    {
      title: "មូលដ្ឋាន Java",
      weeks: "សប្តាហ៍ 1–2",
      desc: "ស្គាល់ Java, ដំឡើង JDK, Syntax, Variable, Operator និងការបញ្ចូលទិន្នន័យ។",
      lessonIds: ["java-introduction", "environment-setup", "java-syntax", "variables-data-types", "operators", "user-input"]
    },
    {
      title: "លំហូរកូដ និងទិន្នន័យ",
      weeks: "សប្តាហ៍ 3–4",
      desc: "គ្រប់គ្រងលក្ខខណ្ឌ, Loop, Array និង String ដើម្បីដោះស្រាយបញ្ហាជាក់ស្តែង។",
      lessonIds: ["conditional-statements", "loops", "arrays", "strings"]
    },
    {
      title: "Methods និងការរៀបចំកូដ",
      weeks: "សប្តាហ៍ 5",
      desc: "សរសេរ Method, Overloading និង Recursion ដើម្បីបំបែកបញ្ហាជាផ្នែកតូចៗ។",
      lessonIds: ["methods", "method-overloading", "recursion"]
    },
    {
      title: "Object-Oriented Programming",
      weeks: "សប្តាហ៍ 6–8",
      desc: "Class, Object, Encapsulation, Inheritance, Polymorphism, Abstraction និង Interface។",
      lessonIds: ["oop", "classes-objects", "constructors", "encapsulation", "inheritance", "polymorphism", "abstraction", "interfaces"]
    },
    {
      title: "Advanced Java និង Projects",
      weeks: "សប្តាហ៍ 9–10",
      desc: "Exception, Collections, File I/O និងការបង្កើត Project ពិតប្រាកដ។",
      lessonIds: ["exception-handling", "collections", "file-handling", "final-projects"]
    }
  ],

  finalTest: [
    { q: "តើ Type ណាសម្រាប់ផ្ទុកចំនួនគត់?", options: ["int", "double", "String", "boolean"], answer: 0, explain: "int ផ្ទុកចំនួនគត់ 32-bit។" },
    { q: "តើ Operator ណាប្រើសម្រាប់ប្រៀបធៀបសមភាព?", options: ["=", "==", "=>", "!="], answer: 1, explain: "== ប្រៀបធៀបតម្លៃ; = ជាការដាក់តម្លៃ។" },
    { q: "តើ Loop ណាដំណើរការយ៉ាងតិចម្តង?", options: ["for", "while", "do-while", "for-each"], answer: 2, explain: "do-while ពិនិត្យលក្ខខណ្ឌក្រោយដំណើរការ។" },
    { q: "តើ Array Index ចាប់ផ្តើមពីប៉ុន្មាន?", options: ["0", "1", "-1", "អាស្រ័យ"], answer: 0, explain: "Array ក្នុង Java ចាប់ពី Index 0។" },
    { q: "តើ Method ណារកប្រវែង String?", options: ["length", "length()", "size()", "count()"], answer: 1, explain: "String ប្រើ length()។" },
    { q: "តើ Return Type ណាមានន័យថា Method មិនត្រឡប់តម្លៃ?", options: ["int", "void", "null", "empty"], answer: 1, explain: "void មានន័យថាគ្មានតម្លៃត្រឡប់។" },
    { q: "តើ Keyword ណាប្រើសម្រាប់ Inheritance?", options: ["implements", "extends", "inherits", "super"], answer: 1, explain: "Class ស្នង Class ដោយ extends។" },
    { q: "តើ Constructor ត្រូវមានឈ្មោះដូចអ្វី?", options: ["ដូច Class", "ដូច Package", "ឈ្មោះអ្វីក៏បាន", "ដូច main"], answer: 0, explain: "Constructor ត្រូវមានឈ្មោះដូច Class និងគ្មាន Return Type។" },
    { q: "តើ Encapsulation ប្រើ Keyword ណាសម្រាប់ Field?", options: ["public", "static", "private", "final"], answer: 2, explain: "Field private + Getter/Setter ជាការអនុវត្ត Encapsulation។" },
    { q: "តើ Runtime Polymorphism កើតឡើងតាមរយៈអ្វី?", options: ["Overloading", "Overriding", "Casting", "Imports"], answer: 1, explain: "Method Overriding ជា Runtime Polymorphism។" },
    { q: "តើ Class អនុវត្ត Interface ដោយ Keyword ណា?", options: ["extends", "implements", "inherits", "uses"], answer: 1, explain: "Class ប្រើ implements សម្រាប់ Interface។" },
    { q: "តើ Block ណាដំណើរការជានិច្ច?", options: ["try", "catch", "finally", "throw"], answer: 2, explain: "finally ដំណើរការជានិច្ច។" },
    { q: "តើ Exception ណាជា Unchecked?", options: ["IOException", "ArithmeticException", "SQLException", "FileNotFoundException"], answer: 1, explain: "ArithmeticException ស្នងពី RuntimeException។" },
    { q: "តើ ArrayList អនុញ្ញាតធាតុស្ទួនទេ?", options: ["បាទ/ចាស", "ទេ", "តែ 2 ធាតុ", "តែធាតុដំបូង"], answer: 0, explain: "List អនុញ្ញាតធាតុស្ទួន។" },
    { q: "តើ Set អនុញ្ញាតធាតុស្ទួនទេ?", options: ["បាទ/ចាស", "ទេ", "តែ 2 ធាតុ", "អាស្រ័យ"], answer: 1, explain: "Set មិនអនុញ្ញាតធាតុស្ទួន។" },
    { q: "តើ Map ផ្ទុកទិន្នន័យជាអ្វី?", options: ["Index-Value", "តម្លៃតែមួយ", "Key-Value", "តែ String"], answer: 2, explain: "Map ផ្ទុក Key-Value។" },
    { q: "តើ Generics មិនអាចប្រើ Type ណា?", options: ["Wrapper Class", "Primitive Type", "String", "Object"], answer: 1, explain: "Generics ត្រូវការ Reference Type ដូចជា Integer។" },
    { q: "តើ Method ណាសរសេរ String ទៅ File?", options: ["Files.readString", "Files.writeString", "Files.copy", "Files.delete"], answer: 1, explain: "Files.writeString សរសេរអត្ថបទទៅ File។" },
    { q: "តើ try-with-resources ត្រូវការ Interface ណា?", options: ["Serializable", "AutoCloseable", "Runnable", "Comparable"], answer: 1, explain: "AutoCloseable អនុញ្ញាតការបិទស្វ័យប្រវត្តិ។" },
    { q: "តើ Signature ត្រឹមត្រូវរបស់ main គឺអ្វី?", options: ["public void main()", "static main(String args)", "public static void main(String[] args)", "void main(String[] args)"], answer: 2, explain: "main ត្រូវជា public static void និងទទួល String[]។" },
    { q: "តើ Command ណា Compile Java?", options: ["java", "javac", "jar", "javadoc"], answer: 1, explain: "javac បំប្លែង .java ទៅ .class។" },
    { q: "តើ Type ណាជា Reference Type?", options: ["int", "String", "boolean", "char"], answer: 1, explain: "String ជា Class ដូច្នេះជា Reference Type។" },
    { q: "តើការ Cast double ទៅ int ធ្វើដោយរបៀបណា?", options: ["(int) value", "int(value)", "value.toInt()", "cast&lt;int&gt;(value)"], answer: 0, explain: "ប្រើ (int) មុនតម្លៃ ដើម្បី Cast។" },
    { q: "តើអ្វីកើតឡើងបន្ទាប់ពី nextInt() ប្រសិនបើហៅ nextLine() ភ្លាម?", options: ["អានលេខបន្ទាប់", "អាន String ទទេ", "Error ភ្លាម", "បិទ Scanner"], answer: 1, explain: "nextLine() អាន New Line ដែលនៅសល់ ដូច្នេះត្រូវហៅវាដើម្បីសម្អាតជាមុន។" },
    { q: "តើ Keyword ណាប្រើបង្ក Exception ដោយខ្លួនឯង?", options: ["throws", "throw", "catch", "raise"], answer: 1, explain: "throw បង្ក Exception ក្នុងកូដ។" }
  ]
};

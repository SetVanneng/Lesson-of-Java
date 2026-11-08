/* Lessons 09–10: Arrays and Strings */
window.JAVA_LESSONS = window.JAVA_LESSONS || [];

window.JAVA_LESSONS.push({
  id: "arrays",
  num: 9,
  part: 9,
  partTitle: "Arrays",
  title: "Arrays",
  titleKh: "អារេ",
  time: "៨៥ នាទី",
  level: 3,
  intro: "Array គឺជារចនាសម្ព័ន្ធទិន្នន័យដែលផ្ទុកតម្លៃច្រើនដែលមាន Type ដូចគ្នា ក្នុង Variable តែមួយ។ អ្នកនឹងរៀនបង្កើត Array, ចូលប្រើតាម Index, ប្រើ <code>length</code>, ឆ្លងកាត់ដោយ Loop, ប្រើ Array ២ វិមាត្រ និង <code>java.util.Arrays</code> ព្រមទាំង Algorithm សំខាន់ៗដូចជា ស្វែងរកអប្បបរមា/អតិបរមា និងការបញ្ច្រាស់។",
  objectives: [
    "ប្រកាស និងបង្កើត Array បានត្រឹមត្រូវ។",
    "ចូលប្រើ និងកែតម្លៃតាម Index បាន។",
    "ប្រើ <code>length</code> និងឆ្លងកាត់ Array ដោយ for និង Enhanced for។",
    "យល់ពី Array ២ វិមាត្រ (2D Array)។",
    "ប្រើ <code>Arrays.toString()</code>, <code>sort()</code> និង <code>copyOf()</code> បាន។",
    "សរសេរ Algorithm ស្វែងរក និងគណនាលើ Array។"
  ],
  sections: [
    {
      title: "Array គឺជាអ្វី?",
      html: `<p>ស្រមៃថាអ្នកត្រូវរក្សាពិន្ទុសិស្ស ៥ នាក់។ បើប្រើ Variable ដាច់ដោយឡែក អ្នកត្រូវមាន <code>score1</code>, <code>score2</code>, ... ដែលពិបាកគ្រប់គ្រង។ <strong>Array</strong> អនុញ្ញាតឱ្យអ្នកផ្ទុកតម្លៃទាំងអស់ក្នុង Variable តែមួយ ហើយចូលប្រើតាម Index។</p>
<p>លក្ខណៈសំខាន់៖</p>
<ul>
<li>Array មាន <strong>Size ថេរ</strong> ពេលបង្កើតរួច។ មិនអាចពង្រីក ឬបង្រួមបានទេ។</li>
<li>Index ចាប់ផ្តើមពី <strong>0</strong>។ Array ទំហំ 5 មាន Index 0–4។</li>
<li>ធាតុទាំងអស់មាន Type ដូចគ្នា។</li>
<li>Array ជា Object ក្នុង Java ដូច្នេះវាមាន Attribute <code>length</code>។</li>
</ul>
<div class="callout info"><div class="callout-title">Index ចាប់ពី 0</div><p>នេះជាមូលហេតុឱ្យ <code>ArrayIndexOutOfBoundsException</code> កើតឡើងញឹកញាប់។ Array ទំហំ 5 មាន Index ត្រឹម 4 ប៉ុណ្ណោះ។</p></div>`
    },
    {
      title: "ការប្រកាស និងបង្កើត Array",
      html: `<p>មានវិធីជាច្រើនក្នុងការបង្កើត Array៖</p>
<pre><code>// 1. Declare then create
int[] scores = new int[5];          // 5 elements, all 0

// 2. Declare with values
int[] ages = {20, 21, 19, 22};

// 3. Declare then assign values later
String[] names = new String[3];
names[0] = "Dara";
names[1] = "Sok";
names[2] = "Mona";</code></pre>
<p>អ្នកក៏អាចសរសេរ <code>int scores[]</code> បានដែរ ប៉ុន្តែ <code>int[] scores</code> ជាទម្រង់ដែល Java ណែនាំ ព្រោះវាបញ្ជាក់ថា Type គឺ Array។</p>
<h3>តម្លៃលំនាំដើម</h3>
<p>ពេលបង្កើត Array ដោយ <code>new</code> តម្លៃធាតុមានលំនាំដើម៖</p>
<ul>
<li><code>int</code>, <code>long</code>, <code>short</code>, <code>byte</code> → <code>0</code></li>
<li><code>double</code>, <code>float</code> → <code>0.0</code></li>
<li><code>boolean</code> → <code>false</code></li>
<li><code>char</code> → <code>'\\u0000'</code></li>
<li>Object (ដូចជា <code>String</code>) → <code>null</code></li>
</ul>`
    },
    {
      title: "ការចូលប្រើ និងកែតម្លៃ",
      html: `<p>ចូលប្រើធាតុដោយ <code>array[index]</code>៖</p>
<pre><code>int[] ages = {20, 21, 19, 22};

System.out.println(ages[0]);   // 20
System.out.println(ages[3]);   // 22

ages[2] = 25;                  // update index 2
System.out.println(ages[2]);   // 25</code></pre>
<p><code>length</code> ផ្តល់ចំនួនធាតុ៖</p>
<pre><code>System.out.println(ages.length);          // 4
System.out.println(ages[ages.length - 1]); // last element: 22</code></pre>
<div class="callout warn"><div class="callout-title">Index ខុស</div><p><code>ages[4]</code> នឹងបណ្តាលឱ្យ <code>ArrayIndexOutOfBoundsException</code> ព្រោះ Index ត្រឹមត្រូវគឺ 0–3។ ត្រូវពិនិត្យ <code>index &lt; array.length</code> ជានិច្ច។</p></div>`
    },
    {
      title: "ការឆ្លងកាត់ Array",
      html: `<p><strong>for បុរាណ</strong> ផ្តល់ Index ដែលអ្នកអាចប្រើសម្រាប់កែតម្លៃ៖</p>
<pre><code>int[] scores = {80, 95, 70, 88};

for (int i = 0; i &lt; scores.length; i++) {
    System.out.println("Index " + i + ": " + scores[i]);
}</code></pre>
<p><strong>Enhanced for (for-each)</strong> អានងាយជាង ប៉ុន្តែមិនផ្តល់ Index៖</p>
<pre><code>for (int score : scores) {
    System.out.println(score);
}</code></pre>
<p>ប្រសិនបើអ្នកចង់កែតម្រូវធាតុ ត្រូវប្រើ for បុរាណ៖</p>
<pre><code>for (int i = 0; i &lt; scores.length; i++) {
    scores[i] = scores[i] + 5;
}</code></pre>
<div class="callout tip"><div class="callout-title">ជ្រើសរើស Loop ឱ្យត្រូវ</div><p>អានតែប៉ុណ្ណោះ → Enhanced for។ ត្រូវការ Index ឬកែតម្លៃ → for បុរាណ។</p></div>`
    },
    {
      title: "Array ២ វិមាត្រ (2D Array)",
      html: `<p><strong>2D Array</strong> គឺ Array នៃ Array ដែលមានជួរ (Row) និងជួរឈរ (Column) ដូចតារាង។</p>
<pre><code>int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.out.println(matrix[0][0]);   // 1
System.out.println(matrix[1][2]);   // 6
System.out.println(matrix[2][1]);   // 8</code></pre>
<p>ការឆ្លងកាត់ត្រូវប្រើ Nested Loop៖</p>
<pre><code>for (int row = 0; row &lt; matrix.length; row++) {
    for (int col = 0; col &lt; matrix[row].length; col++) {
        System.out.print(matrix[row][col] + " ");
    }
    System.out.println();
}</code></pre>
<p>អ្នកក៏អាចបង្កើតដោយ <code>new int[3][3]</code> ដែលធាតុទាំងអស់ចាប់ផ្តើមពី 0។</p>
<div class="callout info"><div class="callout-title">Jagged Array</div><p>Java អនុញ្ញាតឱ្យជួរនីមួយៗមានចំនួនជួរឈរខុសគ្នា។ ឧ. <code>int[][] jagged = new int[3][];</code> រួចកំណត់ <code>jagged[0] = new int[2];</code> ជាដើម។</p></div>`
    },
    {
      title: "java.util.Arrays",
      html: `<p>Java ផ្តល់ Class <code>Arrays</code> ដែលមាន Method មានប្រយោជន៍ជាច្រើន។ ត្រូវ <code>import java.util.Arrays;</code> មុនប្រើ។</p>
<pre><code>import java.util.Arrays;

int[] nums = {5, 2, 8, 1};

System.out.println(Arrays.toString(nums));   // [5, 2, 8, 1]

Arrays.sort(nums);
System.out.println(Arrays.toString(nums));   // [1, 2, 5, 8]

int[] copy = Arrays.copyOf(nums, 6);
System.out.println(Arrays.toString(copy));   // [1, 2, 5, 8, 0, 0]

System.out.println(Arrays.equals(nums, copy)); // false

int index = Arrays.binarySearch(nums, 5);
System.out.println(index);                   // 2</code></pre>
<p>Method សំខាន់ៗ៖</p>
<ul>
<li><code>toString(array)</code> — បង្ហាញខ្លឹមសារ Array ជា String។</li>
<li><code>sort(array)</code> — តម្រៀបឡើងលើ។</li>
<li><code>copyOf(array, newLength)</code> — ចម្លងទៅ Array ថ្មី។</li>
<li><code>fill(array, value)</code> — បំពេញគ្រប់ធាតុដោយតម្លៃតែមួយ។</li>
<li><code>binarySearch(array, key)</code> — ស្វែងរកលើ Array ដែលបានតម្រៀបរួច។</li>
</ul>`
    },
    {
      title: "Algorithm សំខាន់លើ Array",
      html: `<p>ការសរសេរ Algorithm លើ Array ជាជំនាញមូលដ្ឋាន។ ខាងក្រោមនេះជាគំរូសំខាន់ៗ៖</p>
<h3>រកតម្លៃធំបំផុត</h3>
<pre><code>int[] nums = {5, 9, 2, 7};
int max = nums[0];
for (int i = 1; i &lt; nums.length; i++) {
    if (nums[i] &gt; max) {
        max = nums[i];
    }
}</code></pre>
<h3>គណនាមធ្យមភាគ</h3>
<pre><code>int sum = 0;
for (int n : nums) {
    sum += n;
}
double average = (double) sum / nums.length;</code></pre>
<h3>បញ្ច្រាស់ Array</h3>
<pre><code>for (int left = 0, right = nums.length - 1; left &lt; right; left++, right--) {
    int temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
}</code></pre>
<h3>ស្វែងរកតាមលំដាប់ (Linear Search)</h3>
<pre><code>int target = 7;
int found = -1;
for (int i = 0; i &lt; nums.length; i++) {
    if (nums[i] == target) {
        found = i;
        break;
    }
}</code></pre>
<div class="callout tip"><div class="callout-title">ប្រយ័ត្នការបែងចែក</div><p><code>sum / nums.length</code> ជា Integer Division។ ត្រូវ Cast ជា <code>double</code> មុន៖ <code>(double) sum / nums.length</code>។</p></div>`
    }
  ],
  terms: [
    { en: "Array", kh: "អារេ", text: "រចនាសម្ព័ន្ធផ្ទុកធាតុច្រើន Type ដូចគ្នា។" },
    { en: "Element", kh: "ធាតុ", text: "តម្លៃមួយនៅក្នុង Array។" },
    { en: "Index", kh: "លេខរៀង", text: "ទីតាំងរបស់ធាតុ ចាប់ផ្តើមពី 0។" },
    { en: "length", kh: "ប្រវែង", text: "ចំនួនធាតុសរុបក្នុង Array។" },
    { en: "2D Array", kh: "អារេ ២ វិមាត្រ", text: "Array នៃ Array ដែលមានជួរ និងជួរឈរ។" },
    { en: "OutOfBounds", kh: "ហួសដែន", text: "កំហុសពេលចូលប្រើ Index ដែលមិនមាន។" }
  ],
  syntax: [
    { label: "Declare", code: "int[] scores;" },
    { label: "Create", code: "scores = new int[5];" },
    { label: "Initialize", code: "int[] ages = {20, 21, 19};" },
    { label: "Access", code: "int first = ages[0];\nages[1] = 25;" },
    { label: "Length", code: "int count = ages.length;" },
    { label: "2D Array", code: "int[][] grid = new int[3][3];\nint value = grid[1][2];" },
    { label: "Arrays class", code: "import java.util.Arrays;\nArrays.sort(ages);\nString text = Arrays.toString(ages);" }
  ],
  examples: [
    {
      title: "បង្កើត និងបង្ហាញ Array",
      desc: "បង្កើត Array ពិន្ទុ ហើយបង្ហាញធាតុទាំងអស់ជាមួយ Index និងចំនួនធាតុ។",
      file: "ArrayBasics.java",
      code: `public class ArrayBasics {
    public static void main(String[] args) {
        int[] scores = {80, 95, 70, 88, 92};

        System.out.println("Length: " + scores.length);

        for (int i = 0; i < scores.length; i++) {
            System.out.println("scores[" + i + "] = " + scores[i]);
        }

        scores[2] = 75;
        System.out.println("Updated index 2: " + scores[2]);
    }
}`,
      output: "Length: 5\nscores[0] = 80\nscores[1] = 95\nscores[2] = 70\nscores[3] = 88\nscores[4] = 92\nUpdated index 2: 75",
      lines: [
        "<code>{80, 95, 70, 88, 92}</code> បង្កើត Array ទំហំ 5 ដោយកំណត់តម្លៃផ្ទាល់។",
        "<code>scores.length</code> ផ្តល់ 5 ដែលជាចំនួនធាតុ។",
        "Loop រត់ពី 0 ដល់ 4 ព្រោះ <code>i &lt; scores.length</code>។",
        "ការកែ <code>scores[2]</code> ផ្លាស់ប្តូរធាតុទីបីតែម្តង។"
      ]
    },
    {
      title: "ផលបូក និងមធ្យមភាគ",
      desc: "គណនាផលបូក និងមធ្យមភាគនៃពិន្ទុ។ សូមសង្កេតការ Cast ទៅ double ដើម្បីរក្សាទសភាគ។",
      file: "AverageScore.java",
      code: `public class AverageScore {
    public static void main(String[] args) {
        int[] scores = {80, 95, 70, 88, 92};
        int sum = 0;

        for (int score : scores) {
            sum += score;
        }

        double average = (double) sum / scores.length;

        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
    }
}`,
      output: "Sum: 425\nAverage: 85.0",
      lines: [
        "Enhanced for អានធាតុនីមួយៗដោយមិនចាំបាច់ Index។",
        "<code>sum += score</code> ប្រមូលផលបូកទាំងអស់ = 425។",
        "<code>(double) sum</code> បំលែងទៅ double មុនចែក ដូច្នេះលទ្ធផលមានទសភាគ។",
        "បើគ្មាន Cast នោះ <code>425 / 5</code> នឹងបាន 85 ជា int ហើយបង្ហាញ 85 មិនមែន 85.0។"
      ]
    },
    {
      title: "រកតម្លៃធំបំផុត និងតូចបំផុត",
      desc: "ប្រើ Loop ដើម្បីរកតម្លៃអតិបរមា និងអប្បបរមាក្នុង Array។",
      file: "MinMax.java",
      code: `public class MinMax {
    public static void main(String[] args) {
        int[] nums = {12, 5, 27, 9, 3, 18};

        int max = nums[0];
        int min = nums[0];

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i];
            }
            if (nums[i] < min) {
                min = nums[i];
            }
        }

        System.out.println("Max: " + max);
        System.out.println("Min: " + min);
    }
}`,
      output: "Max: 27\nMin: 3",
      lines: [
        "ចាប់ផ្តើម max និង min ដោយធាតុដំបូង <code>nums[0]</code>។",
        "Loop ចាប់ពី Index 1 ព្រោះធាតុ 0 ត្រូវបានប្រើរួច។",
        "<code>nums[i] &gt; max</code> ធ្វើបច្ចុប្បន្នភាព max ពេលរកឃើញតម្លៃធំជាង។",
        "ដូចគ្នា <code>nums[i] &lt; min</code> ធ្វើបច្ចុប្បន្នភាព min។"
      ]
    },
    {
      title: "តម្រៀប និងស្វែងរក",
      desc: "ប្រើ <code>Arrays.sort()</code> ដើម្បីតម្រៀប និង <code>Arrays.binarySearch()</code> ដើម្បីស្វែងរក។",
      file: "SortSearch.java",
      code: `import java.util.Arrays;

public class SortSearch {
    public static void main(String[] args) {
        int[] nums = {40, 10, 30, 20, 50};

        System.out.println("Before: " + Arrays.toString(nums));

        Arrays.sort(nums);
        System.out.println("Sorted: " + Arrays.toString(nums));

        int key = 30;
        int index = Arrays.binarySearch(nums, key);

        if (index >= 0) {
            System.out.println(key + " found at index " + index);
        } else {
            System.out.println(key + " not found");
        }
    }
}`,
      output: "Before: [40, 10, 30, 20, 50]\nSorted: [10, 20, 30, 40, 50]\n30 found at index 2",
      lines: [
        "<code>Arrays.toString()</code> បង្ហាញ Array ជាអត្ថបទដែលអានងាយ។",
        "<code>Arrays.sort()</code> តម្រៀបធាតុឡើងលើដោយផ្ទាល់លើ Array ដើម។",
        "<code>binarySearch</code> ត្រូវប្រើលើ Array ដែលតម្រៀបរួចប៉ុណ្ណោះ។",
        "បើរកឃើញ វាផ្តល់ Index; បើមិនរកឃើញ វាផ្តល់លេខអវិជ្ជមាន។"
      ]
    },
    {
      title: "2D Array សម្រាប់ពិន្ទុសិស្ស",
      desc: "បង្ហាញពិន្ទុសិស្ស ៣ នាក់ ដែលម្នាក់មានពិន្ទុ ៣ មុខវិជ្ជា ដោយប្រើ 2D Array និង Nested Loop។",
      file: "StudentScores.java",
      code: `public class StudentScores {
    public static void main(String[] args) {
        int[][] scores = {
            {80, 90, 85},
            {70, 75, 72},
            {95, 88, 92}
        };

        for (int student = 0; student < scores.length; student++) {
            int sum = 0;
            for (int subject = 0; subject < scores[student].length; subject++) {
                sum += scores[student][subject];
            }
            double average = (double) sum / scores[student].length;
            System.out.println("Student " + (student + 1) + " average: " + average);
        }
    }
}`,
      output: "Student 1 average: 85.0\nStudent 2 average: 72.33333333333333\nStudent 3 average: 91.66666666666667",
      lines: [
        "<code>scores.length</code> គឺចំនួនសិស្ស (ជួរ)។",
        "<code>scores[student].length</code> គឺចំនួនមុខវិជ្ជា (ជួរឈរ) សម្រាប់សិស្សនោះ។",
        "Loop ខាងក្នុងបូកពិន្ទុរបស់សិស្សម្នាក់ៗ។",
        "ការចែកដោយ <code>(double)</code> រក្សាទសភាគ។"
      ]
    },
    {
      title: "បញ្ច្រាស់ Array",
      desc: "បញ្ច្រាស់លំដាប់ធាតុដោយប្រើ Two-Pointer Technique និង Swap។",
      file: "ReverseArray.java",
      code: `import java.util.Arrays;

public class ReverseArray {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5};

        for (int left = 0, right = nums.length - 1; left < right; left++, right--) {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }

        System.out.println(Arrays.toString(nums));
    }
}`,
      output: "[5, 4, 3, 2, 1]",
      lines: [
        "<code>left</code> ចាប់ពីដើម ហើយ <code>right</code> ចាប់ពីចុង។",
        "Loop បន្តរហូត <code>left &lt; right</code> ដើម្បីជៀសវាងបញ្ច្រាសពីរដង។",
        "<code>temp</code> ជួយកាន់តម្លៃបណ្តោះអាសន្នពេល Swap។",
        "បន្ទាប់ពី Swap ធាតុដើម និងចុងបានផ្លាស់កន្លែងគ្នា។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ArrayIndexOutOfBounds</span><br>ចូលប្រើ <code>arr[arr.length]</code> ដែលហួស Index។', fix: "Index ខ្ពស់បំផុតគឺ <code>length - 1</code>។" },
    { text: '<span class="bad-code">❌ បង្ហាញ Array ដោយ println</span><br><code>System.out.println(arr)</code> បង្ហាញ Reference ដូច <code>[I@1b6d3586</code>។', fix: "ប្រើ <code>Arrays.toString(arr)</code> ឬ Loop។" },
    { text: '<span class="bad-code">❌ ប្រៀបធៀប Array ដោយ ==</span><br><code>arr1 == arr2</code> ប្រៀបធៀប Reference មិនមែនខ្លឹមសារ។', fix: "ប្រើ <code>Arrays.equals(arr1, arr2)</code>។" },
    { text: '<span class="bad-code">❌ Integer Division ពេលរកមធ្យម</span><br><code>sum / length</code> បោះបង់ទសភាគ។', fix: "Cast មុន៖ <code>(double) sum / length</code>។" },
    { text: '<span class="bad-code">❌ Array Size ថេរ</span><br>ព្យាយាមបន្ថែមធាតុដោយ <code>arr[arr.length] = x</code>។', fix: "បង្កើត Array ថ្មី ឬប្រើ <code>ArrayList</code> ពេល Size អាចផ្លាស់ប្តូរ។" }
  ],
  tips: [
    "ចាប់ផ្តើម Loop ពី 0 ហើយបញ្ចប់ត្រឹម <code>&lt; arr.length</code>។",
    "ប្រើ <code>Arrays.toString()</code> ពេល Debug។",
    "ចម្លង Array ដោយ <code>Arrays.copyOf()</code> មិនមែន <code>=</code>។",
    "សម្រាប់ 2D Array ត្រូវចងចាំថា <code>arr[row][col]</code>។",
    "ពេល Size ត្រូវផ្លាស់ប្តូរ សូមប្រើ <code>ArrayList</code> (នឹងរៀនក្នុង Collections)។"
  ],
  exercises: [
    {
      level: 1,
      title: "បង្ហាញធាតុ Array",
      desc: "បង្កើត Array លេខ ៥ ធាតុ រួចបង្ហាញធាតុទាំងអស់ដោយ Loop។",
      requirements: ["ប្រើ Array", "ប្រើ for", "បង្ហាញធាតុមួយក្នុងមួយបន្ទាត់"],
      inputSample: "{10, 20, 30, 40, 50}",
      outputSample: "10\n20\n30\n40\n50",
      hint: "ប្រើ <code>for (int i = 0; i &lt; arr.length; i++)</code>។",
      solutionCode: `public class ShowArray {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}`
    },
    {
      level: 1,
      title: "ផលបូក Array",
      desc: "គណនាផលបូកធាតុទាំងអស់ក្នុង Array។",
      requirements: ["ប្រើ Loop", "ប្រើ Variable sum"],
      inputSample: "{4, 7, 2, 9}",
      outputSample: "Sum: 22",
      hint: "ចាប់ផ្តើម sum = 0 ហើយបូករាល់ធាតុ។",
      solutionCode: `public class ArraySum {
    public static void main(String[] args) {
        int[] numbers = {4, 7, 2, 9};
        int sum = 0;
        for (int n : numbers) {
            sum += n;
        }
        System.out.println("Sum: " + sum);
    }
}`
    },
    {
      level: 2,
      title: "រកតម្លៃធំបំផុត",
      desc: "រកតម្លៃធំបំផុតក្នុង Array ដោយមិនប្រើ <code>Arrays.sort()</code>។",
      requirements: ["ប្រើ Loop", "ចាប់ផ្តើមពីធាតុដំបូង"],
      inputSample: "{15, 3, 42, 8}",
      outputSample: "Max: 42",
      hint: "កំណត់ max = arr[0] រួចប្រៀបធៀបជាមួយធាតុបន្ទាប់។",
      solutionCode: `public class MaxValue {
    public static void main(String[] args) {
        int[] numbers = {15, 3, 42, 8};
        int max = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        System.out.println("Max: " + max);
    }
}`
    },
    {
      level: 2,
      title: "រាប់លេខគូ",
      desc: "រាប់ចំនួនធាតុដែលជាលេខគូក្នុង Array។",
      requirements: ["ប្រើ Loop", "ប្រើ %", "បង្ហាញចំនួន"],
      inputSample: "{2, 7, 8, 11, 14}",
      outputSample: "Even count: 3",
      hint: "បើ <code>n % 2 == 0</code> បន្ថែម Counter។",
      solutionCode: `public class CountEven {
    public static void main(String[] args) {
        int[] numbers = {2, 7, 8, 11, 14};
        int count = 0;
        for (int n : numbers) {
            if (n % 2 == 0) {
                count++;
            }
        }
        System.out.println("Even count: " + count);
    }
}`
    },
    {
      level: 2,
      title: "តម្រៀប Array",
      desc: "តម្រៀប Array ឡើងលើ រួចបង្ហាញដោយ <code>Arrays.toString()</code>។",
      requirements: ["import java.util.Arrays", "ប្រើ Arrays.sort", "បង្ហាញលទ្ធផល"],
      inputSample: "{9, 4, 7, 1, 5}",
      outputSample: "[1, 4, 5, 7, 9]",
      hint: "ហៅ <code>Arrays.sort(arr)</code> រួច <code>Arrays.toString(arr)</code>។",
      solutionCode: `import java.util.Arrays;

public class SortArray {
    public static void main(String[] args) {
        int[] numbers = {9, 4, 7, 1, 5};
        Arrays.sort(numbers);
        System.out.println(Arrays.toString(numbers));
    }
}`
    },
    {
      level: 3,
      title: "ស្វែងរកធាតុ",
      desc: "ស្វែងរក Target ក្នុង Array ហើយបង្ហាញ Index ឬ “Not found”។",
      requirements: ["ប្រើ Linear Search", "បង្ហាញ Index ត្រឹមត្រូវ", "សាកល្បង Target ដែលមិនមាន"],
      inputSample: "arr={5, 3, 9}, target=9",
      outputSample: "Found at index 2",
      hint: "ប្រើ Loop និង break ពេលរកឃើញ។",
      solutionCode: `public class LinearSearch {
    public static void main(String[] args) {
        int[] numbers = {5, 3, 9};
        int target = 9;
        int index = -1;
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == target) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            System.out.println("Found at index " + index);
        } else {
            System.out.println("Not found");
        }
    }
}`
    },
    {
      level: 3,
      title: "បញ្ច្រាស់ Array",
      desc: "បញ្ច្រាស់ Array ដោយមិនបង្កើត Array ថ្មី (In-place)។",
      requirements: ["ប្រើ Two Pointers", "ប្រើ Swap", "បង្ហាញ Array ក្រោយបញ្ច្រាស"],
      inputSample: "{1, 2, 3, 4}",
      outputSample: "[4, 3, 2, 1]",
      hint: "ប្រើ left និង right ហើយប្តូរតម្លៃរហូតជួបគ្នា។",
      solutionCode: `import java.util.Arrays;

public class ReverseArrayExercise {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4};
        for (int left = 0, right = numbers.length - 1; left < right; left++, right--) {
            int temp = numbers[left];
            numbers[left] = numbers[right];
            numbers[right] = temp;
        }
        System.out.println(Arrays.toString(numbers));
    }
}`
    },
    {
      level: 3,
      title: "តារាង 2D",
      desc: "បង្កើត 2D Array ៣×៣ ហើយបង្ហាញជាតារាង ព្រមទាំងគណនាផលបូកធាតុទាំងអស់។",
      requirements: ["ប្រើ 2D Array", "ប្រើ Nested Loop", "បង្ហាញផលបូក"],
      inputSample: "{{1,2,3},{4,5,6},{7,8,9}}",
      outputSample: "1 2 3\n4 5 6\n7 8 9\nSum: 45",
      hint: "ប្រើ Nested Loop សម្រាប់បង្ហាញ និងបូកក្នុងពេលតែមួយ។",
      solutionCode: `public class MatrixSum {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        int sum = 0;
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col] + " ");
                sum += matrix[row][col];
            }
            System.out.println();
        }
        System.out.println("Sum: " + sum);
    }
}`
    },
    {
      level: 2,
      title: "រកលេខធំទីពីរ",
      desc: "រកលេខធំទីពីរក្នុង Array ដោយមិនតម្រៀប Array។",
      requirements: ["ប្រើ Loop មួយដង", "តាមដានធំបំផុត និងធំទីពីរ", "បង្ហាញលទ្ធផល"],
      inputSample: "{5, 9, 2, 9, 7}",
      outputSample: "Second largest: 7",
      hint: "ពិនិត្យ <code>num &gt; max</code> និង <code>num &gt; second &amp;&amp; num != max</code>។",
      solutionCode: `public class SecondLargest {
    public static void main(String[] args) {
        int[] nums = {5, 9, 2, 9, 7};
        int max = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;

        for (int num : nums) {
            if (num > max) {
                second = max;
                max = num;
            } else if (num > second && num != max) {
                second = num;
            }
        }

        System.out.println("Second largest: " + second);
    }
}`,
      solution: "ធ្វើបច្ចុប្បន្នភាព max និង second ក្នុង Loop តែមួយ។ តម្លៃស្មើ max ត្រូវបានរំលង ដើម្បីរកធំទីពីរពិត។"
    },
    {
      level: 3,
      title: "បញ្ច្រាស Array ក្នុងកន្លែង",
      desc: "បញ្ច្រាស Array ដោយប្តូរតម្លៃក្នុង Array ដើម (In-place) ដោយមិនបង្កើត Array ថ្មី។",
      requirements: ["ប្រើ Two Pointers", "ប្តូរតម្លៃដោយ temp", "បង្ហាញ Array បន្ទាប់ពីបញ្ច្រាស"],
      inputSample: "{1, 2, 3, 4, 5}",
      outputSample: "5 4 3 2 1",
      hint: "ប្រើ <code>left = 0</code> និង <code>right = nums.length - 1</code> រួចប្តូររហូត <code>left &lt; right</code>។",
      solutionCode: `public class ReverseArray {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5};

        int left = 0;
        int right = nums.length - 1;
        while (left < right) {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }

        for (int num : nums) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}`,
      solution: "Two Pointers ប្តូរតម្លៃពីចុងទាំងសងខាងចូលកណ្តាល ដោយប្រើ temp មួយ។"
    }
  ],
  quiz: [
    { q: "តើ Index ដំបូងនៃ Array គឺប៉ុន្មាន?", options: ["1", "0", "-1", "អាស្រ័យលើ Array"], answer: 1, explain: "Array ក្នុង Java ចាប់ផ្តើម Index ពី 0។" },
    { q: "តើ <code>arr.length</code> ផ្តល់អ្វី?", options: ["Index ចុងក្រោយ", "ចំនួនធាតុ", "តម្លៃធំបំផុត", "Type របស់ Array"], answer: 1, explain: "length គឺចំនួនធាតុសរុប។ Index ចុងក្រោយគឺ length - 1។" },
    { q: "តើ Method ណាបង្ហាញខ្លឹមសារ Array បានត្រឹមត្រូវ?", options: ["toString() ធម្មតា", "Arrays.toString()", "print()", "valueOf()"], answer: 1, explain: "Arrays.toString() ផ្តល់ទម្រង់ [a, b, c]។ println(arr) បង្ហាញ Reference។" },
    { q: "តើតម្លៃលំនាំដើមនៃ int Array គឺ?", options: ["null", "1", "0", "មិនកំណត់"], answer: 2, explain: "ធាតុ int ក្នុង Array ថ្មីមានតម្លៃ 0។ Object មាន null។" },
    { q: "តើការចូលប្រើ <code>arr[arr.length]</code> បណ្តាលឱ្យ?", options: ["ផ្តល់ធាតុចុងក្រោយ", "ផ្តល់ 0", "ArrayIndexOutOfBoundsException", "Compile Error"], answer: 2, explain: "Index ត្រឹមត្រូវគឺ 0 ដល់ length - 1។ length គឺហួសដែន។" },
    { q: "តើ <code>Arrays.binarySearch()</code> ត្រូវការអ្វី?", options: ["Array ដែលមិនតម្រៀប", "Array ដែលបានតម្រៀបរួច", "Array ទំហំ 0", "Array នៃ String ប៉ុណ្ណោះ"], answer: 1, explain: "binarySearch ត្រូវការ Array ដែលបានតម្រៀបរួច ដើម្បីដំណើរការត្រឹមត្រូវ។" }
  ],
  summary: [
    "Array ផ្ទុកធាតុច្រើន Type ដូចគ្នា ក្នុង Variable តែមួយ។",
    "Index ចាប់ពី 0 ដល់ length - 1។",
    "ប្រើ for ពេលត្រូវការ Index និង Enhanced for ពេលគ្រាន់តែអាន។",
    "2D Array ជា Array នៃ Array ដែលប្រើ Nested Loop។",
    "Arrays class ផ្តល់ toString, sort, copyOf, fill និង binarySearch។",
    "Algorithm សំខាន់ៗរួមមាន រក Max/Min, ផលបូក, បញ្ច្រាស់ និងស្វែងរក។"
  ],
  takeaways: [
    "Array Size ថេរ — បើត្រូវការបន្ថែម/លុប សូមប្រើ ArrayList។",
    "ត្រូវពិនិត្យ Index ជានិច្ច ដើម្បីជៀសវាង OutOfBounds។",
    "Arrays.toString() ជាមិត្តល្អពេល Debug។",
    "ការ Cast ទៅ double ចាំបាច់ពេលគណនាមធ្យមភាគ។",
    "Two-Pointer Technique មានប្រយោជន៍សម្រាប់បញ្ច្រាស់ និងស្វែងរក។"
  ],
  sources: [
    { label: "Oracle — Arrays", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" },
    { label: "Oracle — java.util.Arrays API", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html" },
    { label: "W3Schools — Java Arrays", url: "https://www.w3schools.com/java/java_arrays.asp" },
    { label: "W3Schools — Java Arrays Loop", url: "https://www.w3schools.com/java/java_arrays_loop.asp" }
  ]
});

window.JAVA_LESSONS.push({
  id: "strings",
  num: 10,
  part: 10,
  partTitle: "Strings",
  title: "Strings",
  titleKh: "ខ្សែអក្សរ",
  time: "៩០ នាទី",
  level: 3,
  intro: "String គឺជា Type ដែលប្រើញឹកញាប់បំផុតមួយក្នុង Java។ អ្នកនឹងរៀនពីភាព <strong>Immutable</strong>, String Pool, Method សំខាន់ៗ (length, charAt, substring, indexOf, equals, split, replace), ការប្រៀបធៀប String ឱ្យត្រឹមត្រូវ និង <strong>StringBuilder</strong> សម្រាប់ការកែអត្ថបទច្រើនដង។",
  objectives: [
    "បង្កើត String តាមវិធីផ្សេងៗ និងយល់ពី String Pool។",
    "ប្រើ Method សំខាន់ៗរបស់ String បាន។",
    "ប្រៀបធៀប String ដោយ equals() និង equalsIgnoreCase()។",
    "យល់ពី Immutability និងផលប៉ះពាល់លើ Performance។",
    "ប្រើ StringBuilder សម្រាប់ការកែអត្ថបទច្រើនដង។",
    "បំបែក និងបង្កើតអត្ថបទដោយ split(), join() និង format()។"
  ],
  sections: [
    {
      title: "String គឺជាអ្វី?",
      html: `<p><strong>String</strong> គឺជា Sequence នៃ Character ដូចជា <code>"Hello"</code> ឬ <code>"សួស្តី"</code>។ ក្នុង Java String ជា <strong>Object</strong> មិនមែន Primitive Type ទេ។ ដូច្នេះវាមាន Method ជាច្រើនសម្រាប់ធ្វើការជាមួយអត្ថបទ។</p>
<pre><code>String greeting = "Hello";
String name = new String("Dara");</code></pre>
<p>វិធីទីមួយ (<code>"Hello"</code>) គឺជាវិធីដែលគេប្រើញឹកញាប់ និងណែនាំ។ វិធីទីពីរបង្កើត Object ថ្មីដោយច្បាស់លាស់ ដែលជាធម្មតាមិនចាំបាច់។</p>
<div class="callout info"><div class="callout-title">String មិនអាចកែបាន (Immutable)</div><p>ពេលអ្នក “កែ” String នោះ Java បង្កើត String ថ្មី។ String ដើមមិនផ្លាស់ប្តូរទេ។ នេះជាចំណុចសំខាន់សម្រាប់សុវត្ថិភាព និងការចែករំលែក String។</p></div>`
    },
    {
      title: "String Pool និង Immutability",
      html: `<p>Java រក្សា String Literal ក្នុង <strong>String Pool</strong> ដើម្បីសន្សំ Memory។ បើ Literal ដូចគ្នា ត្រូវបានប្រើច្រើនកន្លែង ពួកវាអាចចង្អុលទៅ Object តែមួយ។</p>
<pre><code>String a = "Java";
String b = "Java";
String c = new String("Java");

System.out.println(a == b);        // true (same pool object)
System.out.println(a == c);        // false (different object)
System.out.println(a.equals(c));   // true (same content)</code></pre>
<p>នេះពន្យល់ថាហេតុអ្វីត្រូវប្រើ <code>equals()</code> សម្រាប់ប្រៀបធៀបខ្លឹមសារ។ <code>==</code> ប្រៀបធៀប Reference ថាតើជា Object តែមួយឬអត់។</p>
<h3>Immutability ក្នុងការអនុវត្ត</h3>
<pre><code>String text = "Hello";
text.toUpperCase();              // creates new string, ignored
System.out.println(text);        // Hello

text = text.toUpperCase();       // assign result back
System.out.println(text);        // HELLO</code></pre>
<div class="callout warn"><div class="callout-title">លទ្ធផលត្រូវចាប់យក</div><p>Method ជាច្រើនរបស់ String ផ្តល់ String ថ្មី ហើយមិនកែ String ដើម។ បើអ្នកមិន Assign លទ្ធផល នោះការផ្លាស់ប្តូរនឹងបាត់បង់។</p></div>`
    },
    {
      title: "Method សំខាន់ៗរបស់ String",
      html: `<p>ខាងក្រោមនេះជា Method ដែលអ្នកនឹងប្រើញឹកញាប់បំផុត៖</p>
<div class="table-wrap"><table><thead><tr><th>Method</th><th>អ្វីធ្វើ</th><th>ឧទាហរណ៍</th></tr></thead><tbody>
<tr><td><code>length()</code></td><td>ចំនួន Character</td><td><code>"Java".length()</code> → 4</td></tr>
<tr><td><code>charAt(i)</code></td><td>Character នៅ Index i</td><td><code>"Java".charAt(1)</code> → 'a'</td></tr>
<tr><td><code>substring(a, b)</code></td><td>អត្ថបទពី a ដល់មុន b</td><td><code>"Java".substring(1, 3)</code> → "av"</td></tr>
<tr><td><code>indexOf(s)</code></td><td>Index ដំបូងដែលរកឃើញ</td><td><code>"Java".indexOf("v")</code> → 2</td></tr>
<tr><td><code>contains(s)</code></td><td>ពិនិត្យថាមានឬអត់</td><td><code>"Java".contains("av")</code> → true</td></tr>
<tr><td><code>equals(s)</code></td><td>ប្រៀបធៀបខ្លឹមសារ</td><td><code>"Java".equals("Java")</code> → true</td></tr>
<tr><td><code>equalsIgnoreCase(s)</code></td><td>ប្រៀបធៀបមិនគិតអក្សរធំ/តូច</td><td><code>"Java".equalsIgnoreCase("JAVA")</code> → true</td></tr>
<tr><td><code>toUpperCase()</code></td><td>បំលែងជាអក្សរធំ</td><td><code>"java".toUpperCase()</code> → "JAVA"</td></tr>
<tr><td><code>toLowerCase()</code></td><td>បំលែងជាអក្សរតូច</td><td><code>"JAVA".toLowerCase()</code> → "java"</td></tr>
<tr><td><code>trim()</code></td><td>កាត់ចន្លោះដើម និងចុង</td><td><code>"  hi  ".trim()</code> → "hi"</td></tr>
<tr><td><code>replace(a, b)</code></td><td>ជំនួសអត្ថបទ</td><td><code>"Java".replace("a", "o")</code> → "Jovo"</td></tr>
<tr><td><code>split(regex)</code></td><td>បំបែកជា Array</td><td><code>"a,b,c".split(",")</code></td></tr>
</tbody></table></div>
<p>សូមចងចាំថា Method ទាំងនេះមិនកែ String ដើមទេ — ពួកវាផ្តល់ String ថ្មី (លើកលែង Method ដែលផ្តល់ boolean ឬ int)។</p>`
    },
    {
      title: "ការតភ្ជាប់អត្ថបទ (Concatenation)",
      html: `<p>អ្នកអាចតភ្ជាប់ String ដោយ Operator <code>+</code>៖</p>
<pre><code>String first = "Dara";
String last = "Sok";
String full = first + " " + last;   // Dara Sok</code></pre>
<p>បើ <code>+</code> មាន String ម្ខាង នោះភាគីម្ខាងទៀតនឹងក្លាយជា String ដោយស្វ័យប្រវត្តិ៖</p>
<pre><code>int age = 20;
String message = "Age: " + age;      // Age: 20</code></pre>
<p>សម្រាប់ការតភ្ជាប់ច្រើនដងក្នុង Loop គួរប្រើ <code>StringBuilder</code> ដើម្បីជៀសវាងការបង្កើត String ថ្មីច្រើន។</p>
<h3>Formatted String</h3>
<pre><code>String name = "Dara";
int score = 95;
String result = String.format("%s scored %d points", name, score);</code></pre>`
    },
    {
      title: "StringBuilder",
      html: `<p>ដោយសារ String ជា Immutable ការតភ្ជាប់ក្នុង Loop ច្រើនដងអាចខាត Memory និងយឺត។ <strong>StringBuilder</strong> ត្រូវបានរចនាឡើងសម្រាប់ការកែអត្ថបទច្រើនដង។</p>
<pre><code>StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(", ");
sb.append("World");
sb.append("!");
System.out.println(sb.toString());   // Hello, World!</code></pre>
<p>Method សំខាន់ៗ៖</p>
<ul>
<li><code>append(x)</code> — បន្ថែមអត្ថបទ។</li>
<li><code>insert(index, x)</code> — បញ្ចូលនៅទីតាំងកំណត់។</li>
<li><code>delete(start, end)</code> — លុបចន្លោះ Index។</li>
<li><code>reverse()</code> — បញ្ច្រាស់អត្ថបទ។</li>
<li><code>length()</code> និង <code>toString()</code>។</li>
</ul>
<pre><code>StringBuilder sb = new StringBuilder("Java");
sb.reverse();
System.out.println(sb);   // avaJ</code></pre>
<div class="callout tip"><div class="callout-title">ពេលណាប្រើអ្វី?</div><p>ប្រើ <strong>String</strong> សម្រាប់អត្ថបទថេរ ឬការតភ្ជាប់តិចតួច។ ប្រើ <strong>StringBuilder</strong> ពេលកែអត្ថបទច្រើនដង ជាពិសេសក្នុង Loop ឬការបង្កើតអត្ថបទវែង។</p></div>`
    },
    {
      title: "split, join និងការវិភាគអត្ថបទ",
      html: `<p><strong>split()</strong> បំបែក String ជា Array តាម Delimiter៖</p>
<pre><code>String csv = "Dara,Sok,Mona";
String[] names = csv.split(",");

for (String name : names) {
    System.out.println(name);
}</code></pre>
<p><strong>String.join()</strong> តភ្ជាប់ Array ឬ Collection ជា String ដោយ Delimiter៖</p>
<pre><code>String[] words = {"Java", "is", "fun"};
String sentence = String.join(" ", words);
System.out.println(sentence);   // Java is fun</code></pre>
<p>ការវិភាគអត្ថបទជាការងារញឹកញាប់៖ ឧ. ពិនិត្យអ៊ីមែលមាន <code>@</code> ឬអត់៖</p>
<pre><code>String email = "dara@example.com";
if (email.contains("@") &amp;&amp; email.contains(".")) {
    System.out.println("Looks like an email");
} else {
    System.out.println("Invalid email");
}</code></pre>
<div class="callout info"><div class="callout-title">Regex</div><p>split() ទទួល Regular Expression។ ឧ. <code>split("\\\\s+")</code> បំបែកតាមចន្លោះមួយ ឬច្រើន។ Regex ជាប្រធានបទធំ ហើយអ្នកអាចរៀនបន្ថែមពេលត្រូវការ។</p></div>`
    }
  ],
  terms: [
    { en: "String", kh: "ខ្សែអក្សរ", text: "Sequence នៃ Character ដែលជា Object។" },
    { en: "Immutable", kh: "មិនអាចកែ", text: "មិនអាចផ្លាស់ប្តូរខ្លឹមសារក្រោយបង្កើត។" },
    { en: "String Pool", kh: "អាង String", text: "តំបន់ Memory សម្រាប់រក្សា String Literal។" },
    { en: "Concatenation", kh: "ការតភ្ជាប់", text: "ការបញ្ចូល String ដោយ +។" },
    { en: "Delimiter", kh: "សញ្ញាបំបែក", text: "Character ដែលប្រើបំបែកអត្ថបទ។" },
    { en: "StringBuilder", kh: "អ្នកកសាង String", text: "Class សម្រាប់កែអត្ថបទច្រើនដងដោយមានប្រសិទ្ធភាព។" }
  ],
  syntax: [
    { label: "Create", code: 'String name = "Dara";\nString empty = "";' },
    { label: "Length", code: "int n = name.length();" },
    { label: "Character", code: "char c = name.charAt(0);" },
    { label: "Substring", code: 'String part = name.substring(1, 3);' },
    { label: "Compare", code: 'boolean same = name.equals("Dara");\nboolean ignore = name.equalsIgnoreCase("dara");' },
    { label: "Search", code: 'int i = name.indexOf("a");\nboolean has = name.contains("ar");' },
    { label: "Transform", code: 'String upper = name.toUpperCase();\nString trimmed = name.trim();' },
    { label: "Split / Join", code: 'String[] parts = "a,b,c".split(",");\nString text = String.join("-", parts);' },
    { label: "StringBuilder", code: "StringBuilder sb = new StringBuilder();\nsb.append(\"Hi\");\nsb.append(\"!\");\nString result = sb.toString();" }
  ],
  examples: [
    {
      title: "Method មូលដ្ឋាន",
      desc: "បង្ហាញ length, charAt, substring, indexOf និង contains លើ String មួយ។",
      file: "StringBasics.java",
      code: `public class StringBasics {
    public static void main(String[] args) {
        String name = "Java Programming";

        System.out.println("Length: " + name.length());
        System.out.println("First: " + name.charAt(0));
        System.out.println("Substring: " + name.substring(5, 12));
        System.out.println("Index of 'P': " + name.indexOf("P"));
        System.out.println("Contains Java: " + name.contains("Java"));
        System.out.println("Upper: " + name.toUpperCase());
    }
}`,
      output: "Length: 16\nFirst: J\nSubstring: Program\nIndex of 'P': 5\nContains Java: true\nUpper: JAVA PROGRAMMING",
      lines: [
        "<code>length()</code> រាប់គ្រប់ Character រួមទាំងចន្លោះ។",
        "<code>charAt(0)</code> ផ្តល់ Character ដំបូង 'J'។",
        "<code>substring(5, 12)</code> ចាប់ពី Index 5 ដល់មុន 12 (មិនរាប់ 12) គឺ \"Program\"។",
        "<code>indexOf(\"P\")</code> រកទីតាំងដំបូងនៃ 'P' គឺ 5។",
        "<code>toUpperCase()</code> ផ្តល់ String ថ្មីជាអក្សរធំ។"
      ]
    },
    {
      title: "ប្រៀបធៀប String",
      desc: "បង្ហាញភាពខុសគ្នារវាង == និង equals() ព្រមទាំង equalsIgnoreCase()។",
      file: "StringCompare.java",
      code: `public class StringCompare {
    public static void main(String[] args) {
        String a = "Java";
        String b = "Java";
        String c = new String("Java");

        System.out.println("a == b: " + (a == b));
        System.out.println("a == c: " + (a == c));
        System.out.println("a.equals(c): " + a.equals(c));
        System.out.println("Ignore case: " + a.equalsIgnoreCase("JAVA"));
    }
}`,
      output: "a == b: true\na == c: false\na.equals(c): true\nIgnore case: true",
      lines: [
        "<code>a</code> និង <code>b</code> ជា Literal ដូចគ្នា ដូច្នេះចង្អុល Object តែមួយក្នុង String Pool។",
        "<code>new String(\"Java\")</code> បង្កើត Object ថ្មី ដូច្នេះ <code>a == c</code> គឺ false។",
        "<code>equals()</code> ប្រៀបធៀបខ្លឹមសារ ដូច្នេះវាពិត។",
        "<code>equalsIgnoreCase()</code> មិនគិតអក្សរធំ/តូច។"
      ]
    },
    {
      title: "បំបែក និងតភ្ជាប់អត្ថបទ",
      desc: "ប្រើ split() ដើម្បីបំបែក CSV និង String.join() ដើម្បីតភ្ជាប់ឡើងវិញ។",
      file: "SplitJoin.java",
      code: `public class SplitJoin {
    public static void main(String[] args) {
        String csv = "Dara,Sok,Mona";

        String[] names = csv.split(",");

        System.out.println("Count: " + names.length);
        for (String name : names) {
            System.out.println("- " + name);
        }

        String joined = String.join(" | ", names);
        System.out.println("Joined: " + joined);
    }
}`,
      output: "Count: 3\n- Dara\n- Sok\n- Mona\nJoined: Dara | Sok | Mona",
      lines: [
        "<code>split(\",\")</code> បំបែកតាម Comma ហើយផ្តល់ Array ទំហំ 3។",
        "Enhanced for ឆ្លងកាត់ឈ្មោះនីមួយៗ។",
        "<code>String.join(\" | \", names)</code> តភ្ជាប់ធាតុដោយ Delimiter ដែលកំណត់។"
      ]
    },
    {
      title: "កែអត្ថបទដោយ StringBuilder",
      desc: "បង្កើតអត្ថបទពីឈ្មោះក្នុង Array ដោយប្រើ StringBuilder ក្នុង Loop។",
      file: "NameBuilder.java",
      code: `public class NameBuilder {
    public static void main(String[] args) {
        String[] names = {"Dara", "Sok", "Mona", "Vichea"};

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < names.length; i++) {
            sb.append(names[i]);
            if (i < names.length - 1) {
                sb.append(", ");
            }
        }

        System.out.println(sb.toString());
        sb.reverse();
        System.out.println("Reversed: " + sb);
    }
}`,
      output: "Dara, Sok, Mona, Vichea\nReversed: aehciV ,anoM ,koS ,araD",
      lines: [
        "<code>StringBuilder</code> កែអត្ថបទដើមដោយមិនបង្កើត Object ថ្មីរាល់ជុំ។",
        "លក្ខខណ្ឌ <code>i &lt; names.length - 1</code> ការពារកុំឱ្យមាន Comma នៅចុងក្រោយ។",
        "<code>reverse()</code> បញ្ច្រាស់អត្ថបទទាំងមូលដោយផ្ទាល់។",
        "<code>toString()</code> បំលែង StringBuilder ទៅ String។"
      ]
    },
    {
      title: "ពិនិត្យពាក្យសម្ងាត់",
      desc: "ពិនិត្យពាក្យសម្ងាត់ថាមានប្រវែងគ្រប់គ្រាន់ និងមានលេខ ដោយប្រើ Loop និង Character Method។",
      file: "PasswordCheck.java",
      code: `public class PasswordCheck {
    public static void main(String[] args) {
        String password = "java2026";
        boolean hasDigit = false;

        for (int i = 0; i < password.length(); i++) {
            if (Character.isDigit(password.charAt(i))) {
                hasDigit = true;
                break;
            }
        }

        boolean valid = password.length() >= 8 && hasDigit;

        System.out.println("Length: " + password.length());
        System.out.println("Has digit: " + hasDigit);
        System.out.println("Valid: " + valid);
    }
}`,
      output: "Length: 8\nHas digit: true\nValid: true",
      lines: [
        "Loop ឆ្លងកាត់ Character នីមួយៗដោយ <code>charAt(i)</code>។",
        "<code>Character.isDigit()</code> ពិនិត្យថា Character ជាលេខឬអត់។",
        "បើរកឃើញលេខ វាកំណត់ hasDigit ជា true ហើយ break។",
        "លក្ខខណ្ឌចុងក្រោយត្រូវការប្រវែង ≥ 8 និងមានលេខ។"
      ]
    },
    {
      title: "Format វិក្កយបត្រ",
      desc: "ប្រើ String.format() ដើម្បីបង្កើតអត្ថបទវិក្កយបត្រដែលតម្រឹមស្អាត។",
      file: "Receipt.java",
      code: `public class Receipt {
    public static void main(String[] args) {
        String item = "Coffee";
        int quantity = 3;
        double price = 2.5;
        double total = quantity * price;

        String line = String.format("%-12s x%d = $%.2f", item, quantity, total);
        System.out.println(line);

        String summary = String.format("You bought %d items for $%.2f", quantity, total);
        System.out.println(summary);
    }
}`,
      output: "Coffee       x3 = $7.50\nYou bought 3 items for $7.50",
      lines: [
        "<code>%-12s</code> តម្រឹមអត្ថបទទៅឆ្វេងក្នុងទទឹង 12។",
        "<code>%d</code> សម្រាប់ចំនួនគត់ និង <code>%.2f</code> សម្រាប់ទសភាគ ២ ខ្ទង់។",
        "<code>String.format()</code> ផ្តល់ String ថ្មីដែលមានទម្រង់ស្អាត។"
      ]
    }
  ],
  mistakes: [
    { text: '<span class="bad-code">❌ ប្រៀបធៀបដោយ ==</span><br><code>if (name == "Dara")</code> មិនធានាថាត្រូវ។', fix: "ប្រើ <code>name.equals(\"Dara\")</code> ឬ <code>equalsIgnoreCase</code>។" },
    { text: '<span class="bad-code">❌ ភ្លេច Assign លទ្ធផល</span><br><code>name.toUpperCase();</code> មិនផ្លាស់ប្តូរ name។', fix: "សរសេរ <code>name = name.toUpperCase();</code>។" },
    { text: '<span class="bad-code">❌ charAt ហួសដែន</span><br><code>name.charAt(name.length())</code> បណ្តាលឱ្យ Exception។', fix: "Index ត្រឹមត្រូវគឺ 0 ដល់ <code>length() - 1</code>។" },
    { text: '<span class="bad-code">❌ substring ខុសលំដាប់</span><br><code>substring(3, 1)</code> បណ្តាលឱ្យ Exception។', fix: "Begin Index ត្រូវតែ ≤ End Index។" },
    { text: '<span class="bad-code">❌ តភ្ជាប់ String ក្នុង Loop ធំ</span><br>បង្កើត Object ថ្មីរាល់ជុំ ធ្វើឱ្យយឺត។', fix: "ប្រើ <code>StringBuilder</code>។" }
  ],
  tips: [
    "ប្រើ <code>equals()</code> សម្រាប់ការប្រៀបធៀបអត្ថបទ ជានិច្ច។",
    "ចងចាំថា String Method ភាគច្រើនផ្តល់ String ថ្មី។",
    "ប្រើ <code>isBlank()</code> ឬ <code>trim()</code> ដើម្បីពិនិត្យអត្ថបទទទេ។",
    "សម្រាប់ Loop ធំ ឬការកែច្រើនដង សូមប្រើ StringBuilder។",
    "ប្រើ <code>String.format()</code> សម្រាប់អត្ថបទដែលត្រូវការទម្រង់ស្អាត។"
  ],
  exercises: [
    {
      level: 1,
      title: "ប្រវែងឈ្មោះ",
      desc: "អានឈ្មោះមួយ រួចបង្ហាញប្រវែង និង Character ដំបូង។",
      requirements: ["ប្រើ length()", "ប្រើ charAt(0)"],
      inputSample: "Dara",
      outputSample: "Length: 4\nFirst: D",
      hint: "ប្រើ <code>name.length()</code> និង <code>name.charAt(0)</code>។",
      solutionCode: `public class NameInfo {
    public static void main(String[] args) {
        String name = "Dara";
        System.out.println("Length: " + name.length());
        System.out.println("First: " + name.charAt(0));
    }
}`
    },
    {
      level: 1,
      title: "អក្សរធំ",
      desc: "បំលែងអត្ថបទទៅជាអក្សរធំ រួចបង្ហាញ។",
      requirements: ["ប្រើ toUpperCase()", "Assign លទ្ធផល"],
      inputSample: "hello java",
      outputSample: "HELLO JAVA",
      hint: "ត្រូវ Assign លទ្ធផលត្រឡប់ទៅ Variable។",
      solutionCode: `public class ToUpper {
    public static void main(String[] args) {
        String text = "hello java";
        text = text.toUpperCase();
        System.out.println(text);
    }
}`
    },
    {
      level: 2,
      title: "បញ្ច្រាស់អត្ថបទ",
      desc: "បញ្ច្រាស់ String ដោយប្រើ StringBuilder។",
      requirements: ["ប្រើ StringBuilder", "បង្ហាញអត្ថបទបញ្ច្រាស"],
      inputSample: "Java",
      outputSample: "avaJ",
      hint: "ប្រើ <code>new StringBuilder(text).reverse().toString()</code>។",
      solutionCode: `public class ReverseText {
    public static void main(String[] args) {
        String text = "Java";
        String reversed = new StringBuilder(text).reverse().toString();
        System.out.println(reversed);
    }
}`
    },
    {
      level: 2,
      title: "រាប់ស្រៈ",
      desc: "រាប់ចំនួនស្រៈ (a, e, i, o, u) ក្នុងអត្ថបទ ដោយមិនគិតអក្សរធំ/តូច។",
      requirements: ["ប្រើ Loop", "ប្រើ toLowerCase()", "រាប់តែស្រៈ"],
      inputSample: "Programming",
      outputSample: "Vowels: 3",
      hint: "បំលែងជាអក្សរតូចមុន រួចពិនិត្យដោយ <code>indexOf</code> ឬ switch។",
      solutionCode: `public class CountVowels {
    public static void main(String[] args) {
        String text = "Programming".toLowerCase();
        int count = 0;
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                count++;
            }
        }
        System.out.println("Vowels: " + count);
    }
}`
    },
    {
      level: 2,
      title: "ពិនិត្យ Palindrome",
      desc: "ពិនិត្យថាអត្ថបទជា Palindrome (អានទៅមុខ និងថយក្រោយដូចគ្នា) ឬអត់។",
      requirements: ["ប្រើ StringBuilder ឬ Two Pointers", "ប្រៀបធៀបដោយ equals", "មិនគិតអក្សរធំ/តូច"],
      inputSample: "Level",
      outputSample: "Palindrome",
      hint: "បំលែងជាអក្សរតូច រួចប្រៀបធៀបជាមួយអត្ថបទបញ្ច្រាស។",
      solutionCode: `public class Palindrome {
    public static void main(String[] args) {
        String text = "Level".toLowerCase();
        String reversed = new StringBuilder(text).reverse().toString();
        if (text.equals(reversed)) {
            System.out.println("Palindrome");
        } else {
            System.out.println("Not palindrome");
        }
    }
}`
    },
    {
      level: 3,
      title: "រាប់ពាក្យ",
      desc: "រាប់ចំនួនពាក្យក្នុងប្រយោគដោយប្រើ split() និង trim()។",
      requirements: ["ប្រើ trim()", "ប្រើ split()", "គាំទ្រចន្លោះច្រើន"],
      inputSample: "Java is easy to learn",
      outputSample: "Words: 5",
      hint: "ប្រើ <code>text.trim().split(\"\\\\s+\")</code>។",
      solutionCode: `public class CountWords {
    public static void main(String[] args) {
        String text = "Java is easy to learn";
        String[] words = text.trim().split("\\\\s+");
        System.out.println("Words: " + words.length);
    }
}`
    },
    {
      level: 3,
      title: "បង្កើតអ៊ីមែល",
      desc: "បង្កើតអ៊ីមែលពីឈ្មោះ និងនាមត្រកូល ដោយប្រើ toLowerCase() និង String.format()។ ទម្រង់៖ first.last@company.com",
      requirements: ["ប្រើ toLowerCase", "ប្រើ String.format", "បង្ហាញអ៊ីមែល"],
      inputSample: "Dara, Sok",
      outputSample: "dara.sok@company.com",
      hint: "តភ្ជាប់ដោយ <code>String.format(\"%s.%s@company.com\", first, last)</code>។",
      solutionCode: `public class EmailBuilder {
    public static void main(String[] args) {
        String first = "Dara".toLowerCase();
        String last = "Sok".toLowerCase();
        String email = String.format("%s.%s@company.com", first, last);
        System.out.println(email);
    }
}`
    },
    {
      level: 3,
      title: "លុបចន្លោះ",
      desc: "លុបចន្លោះទាំងអស់ក្នុងអត្ថបទ ដោយប្រើ StringBuilder។",
      requirements: ["ប្រើ Loop", "ប្រើ Character.isWhitespace", "បង្ហាញអត្ថបទថ្មី"],
      inputSample: "J a v a",
      outputSample: "Java",
      hint: "បន្ថែមតែ Character ដែលមិនមែនចន្លោះ។",
      solutionCode: `public class RemoveSpaces {
    public static void main(String[] args) {
        String text = "J a v a";
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            if (!Character.isWhitespace(c)) {
                sb.append(c);
            }
        }
        System.out.println(sb.toString());
    }
}`
    },
    {
      level: 2,
      title: "រាប់ចំនួនពាក្យ",
      desc: "រាប់ចំនួនពាក្យក្នុងប្រយោគដោយប្រើ <code>split</code> និងកម្ចាត់ចន្លោះលើស។",
      requirements: ["ប្រើ trim", "ប្រើ split", "បង្ហាញចំនួនពាក្យ"],
      inputSample: "  I love Java  ",
      outputSample: "Words: 3",
      hint: "<code>text.trim().split(\"\\\\s+\")</code> បំបែកតាមចន្លោះមួយ ឬច្រើន។",
      solutionCode: `public class WordCount {
    public static void main(String[] args) {
        String text = "  I love Java  ";
        String cleaned = text.trim();

        if (cleaned.isEmpty()) {
            System.out.println("Words: 0");
        } else {
            String[] words = cleaned.split("\\\\s+");
            System.out.println("Words: " + words.length);
        }
    }
}`,
      solution: "trim លុបចន្លោះដើម និងចុង រួច split តាម Regex ចន្លោះមួយ ឬច្រើន បំបែកពាក្យ។"
    },
    {
      level: 3,
      title: "ពិនិត្យ Palindrome",
      desc: "ពិនិត្យថាអត្ថបទជា Palindrome ឬអត់ ដោយមិនខ្វល់អក្សរធំ/តូច និងចន្លោះ។",
      requirements: ["ប្រើ replaceAll", "ប្រើ StringBuilder reverse", "បង្ហាញ true/false"],
      inputSample: "A man a plan a canal Panama",
      outputSample: "Palindrome: true",
      hint: "លុបចន្លោះ និងបំលែងជា Lowercase មុនប្រៀបធៀប។",
      solutionCode: `public class PalindromeCheck {
    public static void main(String[] args) {
        String text = "A man a plan a canal Panama";
        String cleaned = text.toLowerCase().replaceAll("[^a-z0-9]", "");

        String reversed = new StringBuilder(cleaned).reverse().toString();
        System.out.println("Palindrome: " + cleaned.equals(reversed));
    }
}`,
      solution: "ធ្វើឱ្យអត្ថបទស្អាត (Lowercase + លុបតួអក្សរមិនមែនអក្សរ/លេខ) រួចប្រៀបធៀបជាមួយខ្លួនវាដែលបញ្ច្រាស។"
    }
  ],
  quiz: [
    { q: "តើ String ក្នុង Java ជា Type អ្វី?", options: ["Primitive", "Object", "Array", "Interface"], answer: 1, explain: "String ជា Class/Object ដែលមាន Method ជាច្រើន។" },
    { q: "តើការប្រៀបធៀបអត្ថបទត្រឹមត្រូវគឺ?", options: ["==", "equals()", "=", "!="], answer: 1, explain: "equals() ប្រៀបធៀបខ្លឹមសារ String។ == ប្រៀបធៀប Reference។" },
    { q: "តើ String អាចកែបានឬអត់?", options: ["បាន", "មិនបាន (Immutable)", "បានតែអក្សរតូច", "បានតែក្នុង Loop"], answer: 1, explain: "String ជា Immutable។ ការកែនឹងបង្កើត String ថ្មី។" },
    { q: "តើ Method ណាផ្តល់ចំនួន Character?", options: ["size()", "count()", "length()", "charCount()"], answer: 2, explain: "String ប្រើ length()។ Array ប្រើ length (គ្មានវង់ក្រចក)។" },
    { q: "តើគួរប្រើអ្វីសម្រាប់ការតភ្ជាប់ String ច្រើនដងក្នុង Loop?", options: ["String +", "StringBuilder", "char[]", "Scanner"], answer: 1, explain: "StringBuilder មានប្រសិទ្ធភាពជាង ព្រោះមិនបង្កើត Object ថ្មីរាល់ជុំ។" },
    { q: "តើ <code>substring(1, 3)</code> ផ្តល់ Index ប៉ុន្មាន?", options: ["1, 2, 3", "1 និង 2", "2 និង 3", "0 ដល់ 3"], answer: 1, explain: "substring(begin, end) រួមបញ្ចូល begin ប៉ុន្តែមិនរួម end។ ដូច្នេះ Index 1 និង 2។" }
  ],
  summary: [
    "String ជា Object ដែលផ្ទុក Sequence នៃ Character។",
    "String ជា Immutable — Method ភាគច្រើនផ្តល់ String ថ្មី។",
    "ប្រើ equals() សម្រាប់ប្រៀបធៀបខ្លឹមសារ និង equalsIgnoreCase() ពេលមិនគិតអក្សរធំ/តូច។",
    "Method សំខាន់ៗ៖ length, charAt, substring, indexOf, contains, replace, split។",
    "StringBuilder សមស្របសម្រាប់ការកែអត្ថបទច្រើនដង។",
    "String.format() ជួយបង្កើតអត្ថបទដែលមានទម្រង់ស្អាត។"
  ],
  takeaways: [
    "== មិនមែនសម្រាប់ប្រៀបធៀបអត្ថបទទេ — ត្រូវប្រើ equals()។",
    "String Method មិនកែ String ដើម — ត្រូវចាប់យកលទ្ធផល។",
    "សម្រាប់ការតភ្ជាប់ច្រើន សូមប្រើ StringBuilder។",
    "split() និង join() មានប្រយោជន៍ខ្លាំងក្នុងការវិភាគអត្ថបទ។",
    "Character Method ដូចជា isDigit() និង isWhitespace() ជួយពិនិត្យអត្ថបទ។"
  ],
  sources: [
    { label: "Oracle — Strings", url: "https://docs.oracle.com/javase/tutorial/java/data/strings.html" },
    { label: "Oracle — String API", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html" },
    { label: "W3Schools — Java Strings", url: "https://www.w3schools.com/java/java_strings.asp" },
    { label: "W3Schools — Java StringBuilder", url: "https://www.w3schools.com/java/java_strings_stringbuilder.asp" }
  ]
});
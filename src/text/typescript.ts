export const typescriptTestQuestions = {
    ru: [
      {
        question: "Что такое TypeScript?",
        options: ["Язык программирования", "Диалект JavaScript с типами", "Язык разметки"],
        correctAnswer: 1
      },
      {
        question: "Как объявить переменную с типом string в TypeScript?",
        options: ["let name: string;", "var name: String;", "string name;"],
        correctAnswer: 0
      },
      {
        question: "Как задать тип для массива чисел в TypeScript?",
        options: ["let numbers: number[];", "let numbers: Array<number>;", "let numbers: number[]; let numbers2: Array<number>;"],
        correctAnswer: 0
      },
      {
        question: "Что такое интерфейс в TypeScript?",
        options: ["Тип, описывающий структуру объектов", "Тип для примитивных значений", "Класс, который наследует другие классы"],
        correctAnswer: 0
      },
      {
        question: "Что будет результатом следующего кода: 'let x: any = 10; x = 'string';'?",
        options: ["Ошибка компиляции", "x будет строкой", "x останется числом"],
        correctAnswer: 1
      },
      {
        question: "Как типизировать функцию, которая принимает два числа и возвращает строку?",
        options: ["function sum(a: number, b: number): string { return (a + b).toString(); }", "function sum(a, b): string { return (a + b).toString(); }", "function sum(a: number, b: number): number { return a + b; }"],
        correctAnswer: 0
      },
      {
        question: "Как задать необязательный параметр в функции TypeScript?",
        options: ["function greet(name?: string): void {}", "function greet(name: string?): void {}", "function greet(name: string = 'John'): void {}"],
        correctAnswer: 0
      },
      {
        question: "Как создать кортеж в TypeScript?",
        options: ["let tuple: [number, string] = [1, 'Hello'];", "let tuple = [1, 'Hello'];", "let tuple: Array<number, string> = [1, 'Hello'];"],
        correctAnswer: 0
      },
      {
        question: "Как типизировать объект с ключами-строками и значениями типа number?",
        options: ["let obj: { [key: string]: number };", "let obj: { key: string: number; }", "let obj: number[];"],
        correctAnswer: 0
      },
      {
        question: "Как указать тип для функции с неопределённым количеством аргументов?",
        options: ["function sum(...args: number[]): number {}", "function sum(args: number[]): number {}", "function sum(args: any[]): number {}"],
        correctAnswer: 0
      },
      {
        question: "Как создать интерфейс для объекта с свойствами name и age?",
        options: ["interface Person { name: string; age: number; }", "interface Person { name: string, age: number; }", "interface Person { name: string, age: number }"],
        correctAnswer: 0
      },
      {
        question: "Что делает оператор 'as' в TypeScript?",
        options: ["Оператор приведения типа", "Оператор проверки типа", "Оператор для создания новых объектов"],
        correctAnswer: 0
      },
      {
        question: "Как определить тип, который может быть либо строкой, либо числом?",
        options: ["let value: string | number;", "let value: string&number;", "let value: string & number;"],
        correctAnswer: 0
      },
      {
        question: "Что такое тип 'void' в TypeScript?",
        options: ["Тип, который не возвращает значения", "Тип, который всегда возвращает undefined", "Тип, который может быть любого значения"],
        correctAnswer: 0
      },
      {
        question: "Как создать класс в TypeScript?",
        options: ["class MyClass {}", "create class MyClass {}", "MyClass class {}"],
        correctAnswer: 0
      },
      {
        question: "Что такое 'never' в TypeScript?",
        options: ["Тип, который никогда не возвращает значение", "Тип, который всегда возвращает ошибку", "Тип, который может быть только undefined"],
        correctAnswer: 0
      },
      {
        question: "Как создать тип для функции с возвращаемым значением типа string?",
        options: ["type MyFunction = () => string;", "type MyFunction = (a: string) => string;", "function MyFunction(): string {}"],
        correctAnswer: 0
      },
      {
        question: "Что такое 'type' в TypeScript?",
        options: ["Ключевое слово для объявления типов", "Тип для объектов", "Тип для массивов"],
        correctAnswer: 0
      },
      {
        question: "Что такое модификатор доступа 'public' в классе?",
        options: ["Свойство или метод доступно из любой части программы", "Свойство или метод доступно только внутри класса", "Свойство или метод доступно только для наследников"],
        correctAnswer: 0
      },
      {
        question: "Как создать приватное свойство в классе?",
        options: ["private myVar: string;", "priv myVar: string;", "protected myVar: string;"],
        correctAnswer: 0
      },
      {
        question: "Что такое 'interface' в TypeScript?",
        options: ["Тип, который описывает структуру объектов", "Ключевое слово для создания классов", "Ключевое слово для создания типов"],
        correctAnswer: 0
      },
      {
        question: "Как сделать тип, который не может быть пустым?",
        options: ["type NonEmptyString = string & { length: number };", "type NonEmptyString = string;", "let value: string = '';"],
        correctAnswer: 0
      },
      {
        question: "Как создать перечисление (enum) в TypeScript?",
        options: ["enum Color { Red, Green, Blue }", "enum Color = { Red: 1, Green: 2, Blue: 3 }", "enum Color { Red, Green, Blue = 3 }"],
        correctAnswer: 0
      },
      {
        question: "Как преобразовать объект в тип 'unknown'?",
        options: ["let obj: unknown = {}; let obj2 = obj;", "let obj: unknown = {}; let obj2: string = obj;", "let obj2 = obj as string;"],
        correctAnswer: 2
      },
      {
        question: "Как типизировать объект с неограниченным числом свойств?",
        options: ["let obj: { [key: string]: any };", "let obj: { key: any; value: any }[];", "let obj: object;"],
        correctAnswer: 0
      },
      {
        question: "Как указать тип для параметра в классе?",
        options: ["constructor(param: string) {}", "constructor(param: any) {}", "constructor(param: any[] = []) {}"],
        correctAnswer: 0
      },
      {
        question: "Что такое декораторы в TypeScript?",
        options: ["Функции, которые могут модифицировать классы и их методы", "Функции для работы с интерфейсами", "Функции для работы с типами данных"],
        correctAnswer: 0
      },
      {
        question: "Как указать тип для функции с параметром, который может быть объектом?",
        options: ["function greet(param: object): void {}", "function greet(param: any): void {}", "function greet(param: {}): void {}"],
        correctAnswer: 0
      },
      {
        question: "Как создать тип, который будет строкой или числом?",
        options: ["type MyType = string | number;", "type MyType = string & number;", "type MyType = any;"],
        correctAnswer: 0
      },
      {
        question: "Что будет результатом использования 'as' в TypeScript?",
        options: ["Приведение значения к указанному типу", "Преобразование значения в string", "Проверка типа значения"],
        correctAnswer: 0
      },
    ],
    en: [
      {
        question: "What is TypeScript?",
        options: ["Programming language", "A superset of JavaScript with types", "Markup language"],
        correctAnswer: 1
      },
      {
        question: "How do you declare a string variable in TypeScript?",
        options: ["let name: string;", "var name: String;", "string name;"],
        correctAnswer: 0
      },
      {
        question: "How do you define an array of numbers in TypeScript?",
        options: ["let numbers: number[];", "let numbers: Array<number>;", "let numbers: number[]; let numbers2: Array<number>;"],
        correctAnswer: 0
      },
      {
        question: "What is an interface in TypeScript?",
        options: ["A type that describes the structure of objects", "A type for primitive values", "A class that inherits other classes"],
        correctAnswer: 0
      },
      {
        question: "What is the result of the following code: 'let x: any = 10; x = 'string';'?",
        options: ["Compilation error", "x will be a string", "x will remain a number"],
        correctAnswer: 1
      },
      {
        question: "How to type a function that takes two numbers and returns a string?",
        options: ["function sum(a: number, b: number): string { return (a + b).toString(); }", "function sum(a, b): string { return (a + b).toString(); }", "function sum(a: number, b: number): number { return a + b; }"],
        correctAnswer: 0
      },
      {
        question: "How do you define an optional parameter in TypeScript?",
        options: ["function greet(name?: string): void {}", "function greet(name: string?): void {}", "function greet(name: string = 'John'): void {}"],
        correctAnswer: 0
      },
      {
        question: "How do you create a tuple in TypeScript?",
        options: ["let tuple: [number, string] = [1, 'Hello'];", "let tuple = [1, 'Hello'];", "let tuple: Array<number, string> = [1, 'Hello'];"],
        correctAnswer: 0
      },
      {
        question: "How do you define a type for an object with string keys and number values?",
        options: ["let obj: { [key: string]: number };", "let obj: { key: string: number; }", "let obj: number[];"],
        correctAnswer: 0
      },
      {
        question: "How to type a function with a variable number of arguments?",
        options: ["function sum(...args: number[]): number {}", "function sum(args: number[]): number {}", "function sum(args: any[]): number {}"],
        correctAnswer: 0
      },
      {
        question: "How to create an interface for an object with 'name' and 'age' properties?",
        options: ["interface Person { name: string; age: number; }", "interface Person { name: string, age: number; }", "interface Person { name: string, age: number }"],
        correctAnswer: 0
      },
      {
        question: "What does the 'as' operator do in TypeScript?",
        options: ["Type assertion", "Type checking", "Object creation"],
        correctAnswer: 0
      },
      {
        question: "How do you define a type that can be either a string or a number?",
        options: ["let value: string | number;", "let value: string&number;", "let value: string & number;"],
        correctAnswer: 0
      },
      {
        question: "What is the 'void' type in TypeScript?",
        options: ["A type that doesn't return any value", "A type that always returns undefined", "A type that can be any value"],
        correctAnswer: 0
      },
      {
        question: "How to create a class in TypeScript?",
        options: ["class MyClass {}", "create class MyClass {}", "MyClass class {}"],
        correctAnswer: 0
      },
      {
        question: "What is 'never' in TypeScript?",
        options: ["A type that never returns a value", "A type that always throws an error", "A type that can only be undefined"],
        correctAnswer: 0
      },
      {
        question: "How do you define a type for a function that returns a string?",
        options: ["type MyFunction = () => string;", "type MyFunction = (a: string) => string;", "function MyFunction(): string {}"],
        correctAnswer: 0
      },
      {
        question: "What is 'type' in TypeScript?",
        options: ["A keyword for declaring types", "A type for objects", "A type for arrays"],
        correctAnswer: 0
      },
      {
        question: "What does the 'public' access modifier do in a class?",
        options: ["Property or method is accessible from anywhere", "Property or method is only accessible within the class", "Property or method is accessible only to subclasses"],
        correctAnswer: 0
      },
      {
        question: "How do you define a private property in a class?",
        options: ["private myVar: string;", "priv myVar: string;", "protected myVar: string;"],
        correctAnswer: 0
      },
      {
        question: "What is an 'interface' in TypeScript?",
        options: ["A type that describes the structure of objects", "A keyword for creating classes", "A keyword for creating types"],
        correctAnswer: 0
      },
      {
        question: "How do you define a type for a non-empty string?",
        options: ["type NonEmptyString = string & { length: number };", "type NonEmptyString = string;", "let value: string = '';"],
        correctAnswer: 0
      },
      {
        question: "How do you create an enum in TypeScript?",
        options: ["enum Color { Red, Green, Blue }", "enum Color = { Red: 1, Green: 2, Blue: 3 }", "enum Color { Red, Green, Blue = 3 }"],
        correctAnswer: 0
      },
      {
        question: "How do you cast an object to 'unknown' type?",
        options: ["let obj: unknown = {}; let obj2 = obj;", "let obj: unknown = {}; let obj2: string = obj;", "let obj2 = obj as string;"],
        correctAnswer: 2
      },
      {
        question: "How do you type an object with an arbitrary number of properties?",
        options: ["let obj: { [key: string]: any };", "let obj: { key: any; value: any }[];", "let obj: object;"],
        correctAnswer: 0
      },
      {
        question: "How do you define a parameter type in a class constructor?",
        options: ["constructor(param: string) {}", "constructor(param: any) {}", "constructor(param: any[] = []) {}"],
        correctAnswer: 0
      },
      {
        question: "What are decorators in TypeScript?",
        options: ["Functions that modify classes and their methods", "Functions for working with interfaces", "Functions for working with data types"],
        correctAnswer: 0
      },
      {
        question: "How do you define a parameter type for an object in TypeScript?",
        options: ["function greet(param: object): void {}", "function greet(param: any): void {}", "function greet(param: {}): void {}"],
        correctAnswer: 0
      },
      {
        question: "How do you create a type that can be a string or a number?",
        options: ["type MyType = string | number;", "type MyType = string & number;", "type MyType = any;"],
        correctAnswer: 0
      },
      {
        question: "What will be the result of using 'as' in TypeScript?",
        options: ["Type casting to the specified type", "Converting the value to string", "Type checking the value"],
        correctAnswer: 0
      },
    ],
    az: [
        {
          question: "TypeScript nədir?",
          options: ["Proqramlaşdırma dili", "JavaScript'in tipli üst dəsti", "Markap dili"],
          correctAnswer: 1
        },
        {
          question: "TypeScript-də string tipində dəyişən necə elan olunur?",
          options: ["let name: string;", "var name: String;", "string name;"],
          correctAnswer: 0
        },
        {
          question: "TypeScript-də ədədlərdən ibarət massiv necə təyin olunur?",
          options: ["let numbers: number[];", "let numbers: Array<number>;", "let numbers: number[]; let numbers2: Array<number>;"],
          correctAnswer: 0
        },
        {
          question: "TypeScript-də interfeys nədir?",
          options: ["Obyektlərin strukturunu təsvir edən tip", "Primitiv dəyərlər üçün tip", "Digər sinifləri irsiyyət edən sinif"],
          correctAnswer: 0
        },
        {
          question: "Aşağıdakı kodun nəticəsi nə olacaq: 'let x: any = 10; x = 'string';'?",
          options: ["Tərtibat xətası", "x bir string olacaq", "x nömrə olaraq qalacaq"],
          correctAnswer: 1
        },
        {
          question: "İki ədəd qəbul edən və string qaytaran bir funksiyanı necə tipizasiya edərsiniz?",
          options: ["function sum(a: number, b: number): string { return (a + b).toString(); }", "function sum(a, b): string { return (a + b).toString(); }", "function sum(a: number, b: number): number { return a + b; }"],
          correctAnswer: 0
        },
        {
          question: "TypeScript-də könüllü parametr necə təyin olunur?",
          options: ["function greet(name?: string): void {}", "function greet(name: string?): void {}", "function greet(name: string = 'John'): void {}"],
          correctAnswer: 0
        },
        {
          question: "TypeScript-də tuple (cütlük) necə yaradılır?",
          options: ["let tuple: [number, string] = [1, 'Hello'];", "let tuple = [1, 'Hello'];", "let tuple: Array<number, string> = [1, 'Hello'];"],
          correctAnswer: 0
        },
        {
          question: "Bir obyektin açarları string və dəyərləri nömrə olan tipi necə təyin olunur?",
          options: ["let obj: { [key: string]: number };", "let obj: { key: string: number; }", "let obj: number[];"],
          correctAnswer: 0
        },
        {
          question: "Çoxsaylı parametr qəbul edən bir funksiyanı necə tipizasiya edərsiniz?",
          options: ["function sum(...args: number[]): number {}", "function sum(args: number[]): number {}", "function sum(args: any[]): number {}"],
          correctAnswer: 0
        },
        {
          question: "Ad və yaş xüsusiyyətlərinə malik bir obyekt üçün interfeys necə yaradılır?",
          options: ["interface Person { name: string; age: number; }", "interface Person { name: string, age: number; }", "interface Person { name: string, age: number }"],
          correctAnswer: 0
        },
        {
          question: "'as' operatoru TypeScript-də nə edir?",
          options: ["Tipi müəyyən etmək", "Tipi yoxlamaq", "Yeni obyekt yaratmaq"],
          correctAnswer: 0
        },
        {
          question: "Bir dəyişənin həm string, həm də nömrə olmasını necə təyin edərsiniz?",
          options: ["let value: string | number;", "let value: string&number;", "let value: string & number;"],
          correctAnswer: 0
        },
        {
          question: "TypeScript-də 'void' tipi nədir?",
          options: ["Dəyər qaytarmayan tip", "Həmişə undefined qaytaran tip", "Hər hansı bir dəyər olan tip"],
          correctAnswer: 0
        },
        {
          question: "TypeScript-də sinif necə yaradılır?",
          options: ["class MyClass {}", "create class MyClass {}", "MyClass class {}"],
          correctAnswer: 0
        },
        {
          question: "'never' tipi TypeScript-də nədir?",
          options: ["Həmişə heç bir dəyər qaytarmayan tip", "Həmişə xəta verən tip", "Yalnız undefined ola bilən tip"],
          correctAnswer: 0
        },
        {
          question: "Bir string qaytaran funksiyanın tipi necə təyin olunur?",
          options: ["type MyFunction = () => string;", "type MyFunction = (a: string) => string;", "function MyFunction(): string {}"],
          correctAnswer: 0
        },
        {
          question: "TypeScript-də 'type' nədir?",
          options: ["Tip təyini üçün açar söz", "Obyektlər üçün tip", "Massivlər üçün tip"],
          correctAnswer: 0
        },
        {
          question: "TypeScript-də 'public' modifikatoru sinifdə nə edir?",
          options: ["Xüsusiyyət və ya metod hər yerdən əlçatan olur", "Xüsusiyyət və ya metod yalnız sinif daxilində əlçatan olur", "Xüsusiyyət və ya metod yalnız alt siniflərə əlçatan olur"],
          correctAnswer: 0
        },
        {
          question: "TypeScript-də sinifdə özəl (private) xüsusiyyət necə yaradılır?",
          options: ["private myVar: string;", "priv myVar: string;", "protected myVar: string;"],
          correctAnswer: 0
        },
        {
          question: "TypeScript-də 'interface' nədir?",
          options: ["Obyektlərin strukturunu təsvir edən tip", "Siniflər yaratmaq üçün açar söz", "Tip yaratmaq üçün açar söz"],
          correctAnswer: 0
        },
        {
          question: "Boş olmayan string tipi necə yaradılır?",
          options: ["type NonEmptyString = string & { length: number };", "type NonEmptyString = string;", "let value: string = '';"],
          correctAnswer: 0
        },
        {
          question: "TypeScript-də enum necə yaradılır?",
          options: ["enum Color { Red, Green, Blue }", "enum Color = { Red: 1, Green: 2, Blue: 3 }", "enum Color { Red, Green, Blue = 3 }"],
          correctAnswer: 0
        },
        {
          question: "Bir obyekti 'unknown' tipinə necə çevirmək olar?",
          options: ["let obj: unknown = {}; let obj2 = obj;", "let obj: unknown = {}; let obj2: string = obj;", "let obj2 = obj as string;"],
          correctAnswer: 2
        },
        {
          question: "Ən çoxsaylı xüsusiyyətlərə malik obyektin tipi necə təyin olunur?",
          options: ["let obj: { [key: string]: any };", "let obj: { key: any; value: any }[];", "let obj: object;"],
          correctAnswer: 0
        },
        {
          question: "Sinifin konstruktorunda parametrin tipi necə təyin olunur?",
          options: ["constructor(param: string) {}", "constructor(param: any) {}", "constructor(param: any[] = []) {}"],
          correctAnswer: 0
        },
        {
          question: "TypeScript-də dekoratorlar nədir?",
          options: ["Sinifləri və onların metodlarını dəyişdirən funksiyalar", "İnterfeyslərlə işləyən funksiyalar", "Tip məlumatları ilə işləyən funksiyalar"],
          correctAnswer: 0
        },
        {
          question: "TypeScript-də obyektin parametrini necə tipizasiya edərsiniz?",
          options: ["function greet(param: object): void {}", "function greet(param: any): void {}", "function greet(param: {}): void {}"],
          correctAnswer: 0
        },
        {
          question: "Bir string və ya nömrə ola bilən tipi necə yaratmaq olar?",
          options: ["type MyType = string | number;", "type MyType = string & number;", "type MyType = any;"],
          correctAnswer: 0
        },
        {
          question: "'as' istifadə etmənin nəticəsi nə olacaq?",
          options: ["Tipə uyğunlaşdırma", "Dəyərin string-ə çevrilməsi", "Dəyərin tipi yoxlanması"],
          correctAnswer: 0
        },
      ]
    };

    export const typescriptTheory = {
        en: {
            0: "TypeScript is a superset of JavaScript. It supports all features of JavaScript and additionally offers static typing, interfaces, classes, and other type-related features.",
            1: "In TypeScript, variables can have types such as `string`, `number`, `boolean`, `any`, `void`, `null`, and `undefined`, among others.",
            2: "Arrays are typed using `number[]` or `Array<number>`. Both forms are equivalent but differ in syntax.",
            3: "Interfaces are used to define the structure and types of objects. They describe the names and types of properties and methods.",
            4: "The `any` type in TypeScript allows you to assign any value to a variable without enforcing type safety.",
            5: "For functions, both the return type and parameter types are defined. This helps ensure proper usage of functions.",
            6: "Optional parameters are used by marking them with `?`. This indicates that the parameter is optional in function calls.",
            7: "Tuples in TypeScript are data structures that can hold multiple values of different types. Each element has a defined type.",
            8: "When defining an object with keys of type `string` and values of type `number`, the type would be `{ [key: string]: number }`.",
            9: "For functions that accept multiple parameters, `...args: type[]` is used. This allows the function to accept an arbitrary number of arguments of a specified type.",
            10: "Interfaces describe the structure of objects with different types. They define the properties and methods an object should have.",
            11: "The `as` operator in TypeScript is used to cast a variable to another type. This allows for safe type conversions.",
            12: "To define a variable that can be either a `string` or a `number`, you use the `string | number` syntax, which allows the variable to accept multiple types.",
            13: "The `void` type indicates that a function does not return any value. It is typically used for functions that perform side effects.",
            14: "Classes are templates for creating objects. They define properties and methods that can be shared across instances.",
            15: "The `never` type is used for functions that never return a value. For example, a function that throws an error or enters an infinite loop can be typed as `never`.",
            16: "To define a function that returns a string, you specify `(): string`. The function will return only a `string`.",
            17: "The `type` keyword is used to define a new type. It allows you to combine different types and specify custom types.",
            18: "The `public` modifier makes properties and methods of a class accessible from anywhere. They are not restricted to the class itself.",
            19: "The `private` modifier makes properties and methods of a class accessible only within the class. They are not accessible outside of the class.",
            20: "An interface defines the structure of an object. It specifies the properties and methods that an object must have.",
            21: "When a variable is typed as `any`, it can hold values of any type. This removes any type safety checks from the variable.",
            22: "Enums are used to represent a set of named constants. They make the code more readable and help avoid errors when using specific values.",
            23: "To cast an object to the `unknown` type, you first need to check its type and then convert it to a specific type.",
            24: "The type of an object with arbitrary properties can be defined as `let obj: { [key: string]: any };`.",
            25: "The constructor of a class allows you to initialize properties when an object is created. The type of the parameter in the constructor is defined with `param: type`.",
            26: "Decorators are used to modify or extend classes and their methods. They are written as functions and are applied to class members.",
            27: "To type the parameter of an object, you can use `param: object` or `param: {}`.",
            28: "If a variable can be both a `string` and a `number`, you can type it as `string | number`. This allows for multiple possible types.",
            29: "The `as` operator is used to cast a variable to a specific type. This helps to make type conversions safe while preserving type safety.",
            30: "In TypeScript, the `type` keyword is used to define new types or combine existing ones. It makes the code cleaner and easier to understand."
          },
          az: {
            0: "TypeScript, JavaScript-in üst qatıdır. JavaScript-in bütün xüsusiyyətlərini dəstəkləyir və əlavə olaraq statik tip yoxlaması, interfeyslər, siniflər və digər tip əlaqəli xüsusiyyətlər təklif edir.",
            1: "TypeScript-də dəyişənlər `string`, `number`, `boolean`, `any`, `void`, `null` və `undefined` kimi tiplərə malik ola bilər.",
            2: "Dizilər `number[]` və ya `Array<number>` ilə tipli şəkildə təyin edilir. Hər iki forma bərabərdir, amma sintaksis fərqlidir.",
            3: "İnterfeyslər, obyektlərin strukturlarını və tiplərini təyin etmək üçün istifadə olunur. Onlar xassələrin və metodların adlarını və tiplərini təsvir edir.",
            4: "TypeScript-də `any` tipi dəyişənə hər hansı bir dəyər təyin etməyə imkan verir, bu da tip təhlükəsizliyini tətbiq etməz.",
            5: "Funksiyalar üçün həm qayıdan tip, həm də parametr tipləri təyin edilir. Bu, funksiyaların düzgün istifadə olunmasını təmin edir.",
            6: "Seçimli parametrlər `?` ilə işarələnir. Bu, parametrlərin funksiyanın çağırılmasında opsiyonel olduğunu göstərir.",
            7: "Tuplar, TypeScript-də fərqli tiplərdə bir neçə dəyəri saxlaya bilən verilənlər strukturlarıdır. Hər bir elementin müəyyən bir tipi vardır.",
            8: "Bir obyekti `string` tipində açarları və `number` tipində dəyərləri olan bir şəkildə təyin etmək üçün `{ [key: string]: number }` sintaksisi istifadə edilir.",
            9: "Bir funksiyanın bir neçə parametr qəbul etməsi üçün `...args: type[]` sintaksisi istifadə olunur. Bu, funksiyaya müəyyən bir tipdə çoxlu sayda arqument qəbul etməyə imkan verir.",
            10: "İnterfeyslər, obyektlərin fərqli tiplərini təsvir edir. Onlar obyektin sahib olacağı xassələri və metodları müəyyən edir.",
            11: "TypeScript-də `as` operatoru bir dəyişəni digər bir tipə çevirmək üçün istifadə olunur. Bu, təhlükəsiz tip çevrilmələrinə imkan verir.",
            12: "Bir dəyişəni həm `string`, həm də `number` tipi qəbul edə bilmək üçün `string | number` sintaksisi istifadə edilir. Bu, bir neçə tipi qəbul etməyə imkan verir.",
            13: "`void` tipi, funksiyanın heç bir dəyər qaytarmadığını bildirir. Bu, əsasən yan təsir verən funksiyalar üçün istifadə olunur.",
            14: "Siniflər obyektlər yaratmaq üçün şablonlardır. Onlar xassələri və metodları müəyyən edir ki, bunlar sinifin nümunələri arasında paylaşılsın.",
            15: "`never` tipi, heç bir dəyər qaytarmayan funksiyalar üçün istifadə olunur. Məsələn, səhv atan və ya sonsuz dövrə girən bir funksiya `never` tipi ilə təyin edilə bilər.",
            16: "Bir funksiyanın yalnız `string` qaytarmasını təyin etmək üçün `(): string` yazılır. Funksiya yalnız `string` tipində dəyər qaytaracaq.",
            17: "`type` açar sözü yeni bir tip təyin etmək üçün istifadə olunur. Bu, müxtəlif tipləri birləşdirməyə və xüsusi tipləri müəyyən etməyə imkan verir.",
            18: "`public` modifikatoru sinifin xassələri və metodlarının hər yerdən əlçatan olmasını təmin edir. Onlar yalnız sinif daxilində məhdudlaşdırılmır.",
            19: "`private` modifikatoru sinifin xassələri və metodlarını yalnız sinif daxilində əlçatan edir. Onlar sinifdən kənarda əlçatan deyil.",
            20: "Bir interfeys obyektin strukturunu müəyyən edir. O, obyektin sahibi olması gərəkən xassələri və metodları təsvir edir.",
            21: "`any` tipi ilə təyin edilmiş bir dəyişən hər hansı bir tipi qəbul edə bilər. Bu, dəyişən üzərində heç bir tip təhlükəsizliyi yoxlaması etməz.",
            22: "Enumlar, adlandırılmış sabitlərdən ibarət bir dəstəyi təmsil edir. Onlar kodu daha oxunaqlı edir və spesifik dəyərlərin istifadə edilməsində səhvləri azaldır.",
            23: "Bir obyekti `unknown` tipinə çevirmək üçün əvvəlcə onun tipini yoxlamaq və sonra onu müəyyən bir tipə çevirmək lazımdır.",
            24: "Arbitrary (istənilən) xassələri olan bir obyektin tipi belə təyin edilə bilər: `let obj: { [key: string]: any };`.",
            25: "Sinifin konstrukturu, obyekt yaradıldıqda xassələri başlatmağa imkan verir. Konstruktordakı parametrin tipi `param: type` ilə təyin olunur.",
            26: "Dekoratorlar, sinifləri və onların metodlarını dəyişdirmək və ya genişləndirmək üçün istifadə olunur. Onlar funksiyalar kimi yazılır və sinif üzvlərinə tətbiq olunur.",
            27: "Bir obyektin parametrini tipini təyin etmək üçün `param: object` və ya `param: {}` istifadə edə bilərsiniz.",
            28: "Bir dəyişən həm `string`, həm də `number` ola bilərsə, `string | number` ilə tipini təyin edə bilərsiniz. Bu, bir neçə tipi qəbul etməyə imkan verir.",
            29: "`as` operatoru, bir dəyişəni müəyyən bir tipə çevirmək üçün istifadə olunur. Bu, tip təhlükəsizliyini qorumaqla tip çevrilmələrini təhlükəsiz edir.",
            30: "TypeScript-də `type` açar sözü yeni tipləri təyin etmək və ya mövcud tipləri birləşdirmək üçün istifadə olunur. Bu, kodu daha təmiz və asan başa düşülən edir."
          },
          ru: {
            0: "TypeScript — это надстройка над JavaScript. Он поддерживает все особенности JavaScript и добавляет статическую типизацию, интерфейсы, классы и другие возможности, связанные с типами.",
            1: "В TypeScript переменные могут иметь типы, такие как `string`, `number`, `boolean`, `any`, `void`, `null` и `undefined`.",
            2: "Массивы в TypeScript можно определить через `number[]` или `Array<number>`. Обе формы эквивалентны, но синтаксис различается.",
            3: "Интерфейсы используются для описания структуры объектов и типов. Они описывают имена и типы свойств и методов объекта.",
            4: "Тип `any` позволяет переменной принимать любое значение, что исключает проверки типов.",
            5: "Функции в TypeScript могут иметь как тип возвращаемого значения, так и типы параметров. Это помогает правильно использовать функции.",
            6: "Опциональные параметры помечаются через `?`. Это позволяет параметрам быть необязательными при вызове функции.",
            7: "Кортежи в TypeScript — это структуры данных, которые могут содержать несколько значений разных типов. Каждый элемент имеет свой тип.",
            8: "Типы объектов с произвольными ключами можно определить с помощью синтаксиса `{ [key: string]: number }`. Это позволяет задавать объект с ключами типа `string` и значениями типа `number`.",
            9: "Для передачи переменного количества аргументов используется синтаксис `...args: type[]`. Это позволяет функции принимать множество аргументов определенного типа.",
            10: "Интерфейсы описывают типы объектов. Они определяют свойства и методы, которыми должен обладать объект.",
            11: "Оператор `as` используется для явного преобразования типа переменной. Это позволяет безопасно выполнять преобразования типов.",
            12: "Тип `string | number` позволяет переменной принимать значения как типа `string`, так и типа `number`.",
            13: "Тип `void` используется для обозначения функций, которые ничего не возвращают. Это обычно используется для функций с побочными эффектами.",
            14: "Классы в TypeScript служат шаблонами для создания объектов. Они определяют свойства и методы, которые будут разделяться между экземплярами класса.",
            15: "Тип `never` используется для функций, которые не возвращают значения, например, функции, которые всегда выбрасывают исключение или имеют бесконечный цикл.",
            16: "Для того чтобы функция возвращала только строку, используется тип `(): string`. Это гарантирует, что функция вернет строку.",
            17: "Ключевое слово `type` используется для создания новых типов. Оно позволяет создавать объединения типов и переопределять существующие типы.",
            18: "Модификатор `public` позволяет свойствам и методам класса быть доступными в любом месте. Они не ограничиваются только внутренним состоянием класса.",
            19: "Модификатор `private` ограничивает доступ к свойствам и методам только внутри класса. Эти члены недоступны извне.",
            20: "Интерфейс описывает структуру объекта. Он определяет свойства и методы, которые должен иметь объект.",
            21: "Тип `any` позволяет переменной быть любого типа. Это снимает проверку типов для данной переменной, что может быть полезно, но снижает безопасность типов.",
            22: "Перечисления (Enums) представляют собой набор именованных значений. Они делают код более читаемым и предотвращают ошибочное использование неправильных значений.",
            23: "Тип `unknown` используется, когда переменная может быть любого типа, но перед её использованием нужно явно проверить её тип.",
            24: "Объект с произвольными свойствами можно типизировать следующим образом: `let obj: { [key: string]: any };`. Это позволяет объекту содержать ключи типа `string` с любыми значениями.",
            25: "Конструкторы в классе позволяют инициализировать свойства объекта при его создании. Тип параметра конструктора задается через `param: type`.",
            26: "Декораторы — это функции, которые изменяют или расширяют классы и их методы. Они применяются к членам класса и могут использоваться для добавления дополнительной функциональности.",
            27: "Для задания параметра типа объекта используется `param: object` или `param: {}`. Это позволяет указать, что параметр должен быть объектом.",
            28: "Если переменная может быть как `string`, так и `number`, то её тип можно определить как `string | number`. Это позволяет работать с несколькими типами.",
            29: "Оператор `as` используется для явного преобразования типа переменной. Это безопасный способ преобразования типов, который сохраняет типовую безопасность.",
            30: "Ключевое слово `type` используется для определения новых типов и объединений существующих типов. Это позволяет улучшить читаемость и поддержку кода."
          }
        };
    
        export const h3Text: Record<string, string> = {
            ru: "Тест по TypeScript",
            en: "TypeScript Test",
            az: "TypeScript Testi",
          };

      
export const javascriptTestQuestions = {
    ru: [
      {
        question: "Что такое JavaScript?",
        options: ["Язык программирования", "Язык разметки", "Язык стилей"],
        correctAnswer: 0
      },
      {
        question: "Как объявить переменную в JavaScript?",
        options: ["let varName;", "variable varName;", "varName = let;"],
        correctAnswer: 0
      },
      {
        question: "Что делает функция alert()?",
        options: ["Выводит сообщение на экран", "Останавливает выполнение программы", "Запускает анимацию"],
        correctAnswer: 0
      },
      {
        question: "Что такое замыкание?",
        options: ["Функция, которая запоминает окружение", "Переменная, доступная только внутри функции", "Тип данных, не имеющий значения"],
        correctAnswer: 0
      },
      {
        question: "Что выводит console.log(2 + 2)?",
        options: ["4", "22", "undefined"],
        correctAnswer: 0
      },
      {
        question: "Какой оператор используется для сравнения в JavaScript?",
        options: ["==", "=", "==="],
        correctAnswer: 0
      },
      {
        question: "Что делает оператор typeof?",
        options: ["Определяет тип переменной", "Присваивает тип переменной", "Выводит тип данных переменной"],
        correctAnswer: 0
      },
      {
        question: "Что такое массив в JavaScript?",
        options: ["Объект с индексами", "Набор значений, индексированных по порядку", "Целочисленная переменная"],
        correctAnswer: 1
      },
      {
        question: "Как создать объект в JavaScript?",
        options: ["let obj = {};", "let obj = ();", "let obj = []"],
        correctAnswer: 0
      },
      {
        question: "Как вызвать функцию?",
        options: ["functionName();", "call functionName();", "execute functionName();"],
        correctAnswer: 0
      },
      {
        question: "Что делает метод push() для массива?",
        options: ["Добавляет элемент в конец массива", "Удаляет последний элемент", "Возвращает элемент по индексу"],
        correctAnswer: 0
      },
      {
        question: "Что такое асинхронная функция?",
        options: ["Функция, выполняющаяся параллельно с основным кодом", "Функция, которая ждет выполнения других операций", "Функция без возврата значения"],
        correctAnswer: 0
      },
      {
        question: "Как создать строку в JavaScript?",
        options: ["let str = 'hello';", "let str = 1;", "let str = [hello];"],
        correctAnswer: 0
      },
      {
        question: "Как объединить две строки?",
        options: ["'Hello' + ' World'", "'Hello'.append(' World')", "'Hello'.merge(' World')"],
        correctAnswer: 0
      },
      {
        question: "Как объявить константу в JavaScript?",
        options: ["const variable;", "constant variable;", "let variable;"],
        correctAnswer: 0
      },
      {
        question: "Что выводит console.log(0 == false)?",
        options: ["true", "false", "undefined"],
        correctAnswer: 0
      },
      {
        question: "Что такое NaN?",
        options: ["Не число", "Тип данных", "Числовое значение"],
        correctAnswer: 0
      },
      {
        question: "Что такое прототип объекта?",
        options: ["Шаблон, по которому создаются новые объекты", "Переменная, хранящая методы объекта", "Функция, изменяющая объект"],
        correctAnswer: 0
      },
      {
        question: "Что такое promise?",
        options: ["Обещание, которое будет выполнено позже", "Объект для работы с асинхронным кодом", "Метод для синхронизации кода"],
        correctAnswer: 1
      },
      {
        question: "Какое значение вернет выражение null == undefined?",
        options: ["true", "false", "null"],
        correctAnswer: 0
      },
      {
        question: "Что такое стрелочные функции?",
        options: ["Функции, используемые для работы с асинхронными операциями", "Функции, имеющие короткий синтаксис", "Функции, которые нельзя вызывать"],
        correctAnswer: 1
      },
      {
        question: "Как получить длину строки?",
        options: ["str.length", "length(str)", "len(str)"],
        correctAnswer: 0
      },
      {
        question: "Что такое цикл for?",
        options: ["Цикл для многократного выполнения блока кода", "Условие для проверки переменной", "Метод для вызова функции"],
        correctAnswer: 0
      },
      {
        question: "Как добавить новый элемент в начало массива?",
        options: ["arr.unshift()", "arr.push()", "arr.add()"],
        correctAnswer: 0
      },
      {
        question: "Как удалить элемент из массива?",
        options: ["arr.pop()", "arr.remove()", "arr.delete()"],
        correctAnswer: 0
      },
      {
        question: "Что такое событие в JavaScript?",
        options: ["Действие пользователя или системы, которое обрабатывается программой", "Функция, выполняющаяся при ошибке", "Переменная, изменяющая данные"],
        correctAnswer: 0
      },
      {
        question: "Как добавить обработчик события на элемент?",
        options: ["element.addEventListener('click', function)", "element.onclick = function", "element.addEvent('click', function)"],
        correctAnswer: 0
      },
      {
        question: "Что такое модуль в JavaScript?",
        options: ["Независимый фрагмент кода, который может быть подключен", "Переменная, хранящая все функции", "Цикл для повторения операций"],
        correctAnswer: 0
      },
      {
        question: "Как сравнить два объекта?",
        options: ["Операторы == и === не работают с объектами", "Использовать метод JSON.stringify()", "Можно использовать операторы сравнения"],
        correctAnswer: 1
      },
      {
        question: "Что делает метод map() для массива?",
        options: ["Создает новый массив с результатом применения функции", "Фильтрует элементы массива", "Удаляет элементы массива"],
        correctAnswer: 0
      },
      {
        question: "Как создать новый массив, состоящий из чисел больше 10?",
        options: ["arr.filter(num => num > 10)", "arr.map(num => num > 10)", "arr.reduce(num => num > 10)"],
        correctAnswer: 0
      },
      {
        question: "Как отменить стандартное поведение формы?",
        options: ["event.preventDefault()", "form.prevent()", "event.stopPropagation()"],
        correctAnswer: 0
      },
      {
        question: "Что такое JSON?",
        options: ["Формат для хранения и передачи данных", "Массив объектов", "Тип данных для работы с изображениями"],
        correctAnswer: 0
      },
      {
        question: "Как конвертировать объект в JSON строку?",
        options: ["JSON.stringify(obj)", "obj.toJSON()", "JSON.convert(obj)"],
        correctAnswer: 0
      }
    ],
        en: [
          {
            question: "What is JavaScript?",
            options: ["Programming language", "Markup language", "Style language"],
            correctAnswer: 0
          },
          {
            question: "How do you declare a variable in JavaScript?",
            options: ["let varName;", "variable varName;", "varName = let;"],
            correctAnswer: 0
          },
          {
            question: "What does the alert() function do?",
            options: ["Displays a message on the screen", "Stops the program execution", "Starts an animation"],
            correctAnswer: 0
          },
          {
            question: "What is a closure?",
            options: ["A function that remembers its environment", "A variable that is accessible only inside the function", "A data type with no value"],
            correctAnswer: 0
          },
          {
            question: "What does console.log(2 + 2) output?",
            options: ["4", "22", "undefined"],
            correctAnswer: 0
          },
          {
            question: "Which operator is used for comparison in JavaScript?",
            options: ["==", "=", "==="],
            correctAnswer: 0
          },
          {
            question: "What does the typeof operator do?",
            options: ["Determines the type of a variable", "Assigns a type to a variable", "Outputs the type of a variable"],
            correctAnswer: 0
          },
          {
            question: "What is an array in JavaScript?",
            options: ["An object with indices", "A collection of values indexed sequentially", "An integer variable"],
            correctAnswer: 1
          },
          {
            question: "How do you create an object in JavaScript?",
            options: ["let obj = {};", "let obj = ();", "let obj = []"],
            correctAnswer: 0
          },
          {
            question: "How do you call a function?",
            options: ["functionName();", "call functionName();", "execute functionName();"],
            correctAnswer: 0
          },
          {
            question: "What does the push() method do for an array?",
            options: ["Adds an element to the end of the array", "Removes the last element", "Returns an element by index"],
            correctAnswer: 0
          },
          {
            question: "What is an asynchronous function?",
            options: ["A function that runs parallel to the main code", "A function that waits for other operations to complete", "A function with no return value"],
            correctAnswer: 0
          },
          {
            question: "How do you create a string in JavaScript?",
            options: ["let str = 'hello';", "let str = 1;", "let str = [hello];"],
            correctAnswer: 0
          },
          {
            question: "How do you concatenate two strings?",
            options: ["'Hello' + ' World'", "'Hello'.append(' World')", "'Hello'.merge(' World')"],
            correctAnswer: 0
          },
          {
            question: "How do you declare a constant in JavaScript?",
            options: ["const variable;", "constant variable;", "let variable;"],
            correctAnswer: 0
          },
          {
            question: "What does console.log(0 == false) output?",
            options: ["true", "false", "undefined"],
            correctAnswer: 0
          },
          {
            question: "What is NaN?",
            options: ["Not a number", "A data type", "A numeric value"],
            correctAnswer: 0
          },
          {
            question: "What is the prototype of an object?",
            options: ["A template from which new objects are created", "A variable that stores methods of the object", "A function that modifies the object"],
            correctAnswer: 0
          },
          {
            question: "What is a promise?",
            options: ["A concept for handling asynchronous code", "An object for synchronizing code", "A function that executes after a delay"],
            correctAnswer: 1
          },
          {
            question: "What value will the expression null == undefined return?",
            options: ["true", "false", "null"],
            correctAnswer: 0
          },
          {
            question: "What are arrow functions?",
            options: ["Functions used for asynchronous operations", "Functions with a shorter syntax", "Functions that cannot be called"],
            correctAnswer: 1
          },
          {
            question: "How do you get the length of a string?",
            options: ["str.length", "length(str)", "len(str)"],
            correctAnswer: 0
          },
          {
            question: "What is a for loop?",
            options: ["A loop for repeatedly executing a block of code", "A condition for checking a variable", "A method for calling a function"],
            correctAnswer: 0
          },
          {
            question: "How do you add an element to the beginning of an array?",
            options: ["arr.unshift()", "arr.push()", "arr.add()"],
            correctAnswer: 0
          },
          {
            question: "How do you remove an element from an array?",
            options: ["arr.pop()", "arr.remove()", "arr.delete()"],
            correctAnswer: 0
          },
          {
            question: "What is an event in JavaScript?",
            options: ["An action performed by the user or system that is handled by the program", "A function that executes when an error occurs", "A variable that modifies data"],
            correctAnswer: 0
          },
          {
            question: "How do you add an event listener to an element?",
            options: ["element.addEventListener('click', function)", "element.onclick = function", "element.addEvent('click', function)"],
            correctAnswer: 0
          },
          {
            question: "What is a module in JavaScript?",
            options: ["An independent code fragment that can be imported", "A variable storing all functions", "A loop for repeating operations"],
            correctAnswer: 0
          },
          {
            question: "How do you compare two objects?",
            options: ["== and === operators don't work with objects", "Use the JSON.stringify() method", "You can use comparison operators"],
            correctAnswer: 1
          },
          {
            question: "What does the map() method do for an array?",
            options: ["Creates a new array with the results of applying a function", "Filters the array elements", "Removes the array elements"],
            correctAnswer: 0
          },
          {
            question: "How do you create a new array with numbers greater than 10?",
            options: ["arr.filter(num => num > 10)", "arr.map(num => num > 10)", "arr.reduce(num => num > 10)"],
            correctAnswer: 0
          },
          {
            question: "How do you prevent the default form behavior?",
            options: ["event.preventDefault()", "form.prevent()", "event.stopPropagation()"],
            correctAnswer: 0
          },
          {
            question: "What is JSON?",
            options: ["A format for storing and transmitting data", "An array of objects", "A data type for working with images"],
            correctAnswer: 0
          },
          {
            question: "How do you convert an object to a JSON string?",
            options: ["JSON.stringify(obj)", "obj.toJSON()", "JSON.convert(obj)"],
            correctAnswer: 0
          }
        ],
        az: [
          {
            question: "JavaScript nədir?",
            options: ["Proqramlaşdırma dili", "Markup dili", "Stil dili"],
            correctAnswer: 0
          },
          {
            question: "JavaScript-də dəyişən necə elan olunur?",
            options: ["let varName;", "variable varName;", "varName = let;"],
            correctAnswer: 0
          },
          {
            question: "alert() funksiyası nə edir?",
            options: ["Ekranda mesaj göstərir", "Proqramın icrasını dayandırır", "Animasiya başladır"],
            correctAnswer: 0
          },
          {
            question: "Bağlama (closure) nədir?",
            options: ["Ətraf mühitini xatırlayan funksiya", "Yalnız funksiya daxilində mövcud olan dəyişən", "Dəyəri olmayan məlumat tipi"],
            correctAnswer: 0
          },
          {
            question: "console.log(2 + 2) nə göstərəcək?",
            options: ["4", "22", "undefined"],
            correctAnswer: 0
          },
          {
            question: "JavaScript-də müqayisə operatoru hansıdır?",
            options: ["==", "=", "==="],
            correctAnswer: 0
          },
          {
            question: "typeof operatoru nə edir?",
            options: ["Dəyişənin tipini müəyyən edir", "Dəyişənə tip təyin edir", "Dəyişənin tipini göstərir"],
            correctAnswer: 0
          },
          {
            question: "JavaScript-də array (dizi) nədir?",
            options: ["İndeksli obyekt", "Dəyərların ardıcıl indeksləndiyi kolleksiya", "Tam ədəd dəyişəni"],
            correctAnswer: 1
          },
          {
            question: "JavaScript-də obyekt necə yaradılır?",
            options: ["let obj = {};", "let obj = ();", "let obj = []"],
            correctAnswer: 0
          },
          {
            question: "Funksiya necə çağırılır?",
            options: ["functionName();", "call functionName();", "execute functionName();"],
            correctAnswer: 0
          },
          {
            question: "push() metodu nə edir?",
            options: ["Array-ə element əlavə edir", "Sonuncu elementi silir", "Array-də bir elementi indeksə görə qaytarır"],
            correctAnswer: 0
          },
          {
            question: "Asinxron funksiya nədir?",
            options: ["Digər əməliyyatların tamamlanmasını gözləyən funksiya", "Əsas kod ilə paralel işləyən funksiya", "Dönüş dəyəri olmayan funksiya"],
            correctAnswer: 0
          },
          {
            question: "JavaScript-də string (mətin) necə yaradılır?",
            options: ["let str = 'hello';", "let str = 1;", "let str = [hello];"],
            correctAnswer: 0
          },
          {
            question: "İki string necə birləşdirilir?",
            options: ["'Hello' + ' World'", "'Hello'.append(' World')", "'Hello'.merge(' World')"],
            correctAnswer: 0
          },
          {
            question: "JavaScript-də konstant dəyişən necə elan olunur?",
            options: ["const variable;", "constant variable;", "let variable;"],
            correctAnswer: 0
          },
          {
            question: "console.log(0 == false) nə göstərəcək?",
            options: ["true", "false", "undefined"],
            correctAnswer: 0
          },
          {
            question: "NaN nədir?",
            options: ["Bir rəqəm deyil", "Bir məlumat tipi", "Bir ədədi dəyər"],
            correctAnswer: 0
          },
          {
            question: "Bir obyektin prototipi nədir?",
            options: ["Yeni obyektlər yaradılmaq üçün şablon", "Obyektin metodlarını saxlayan dəyişən", "Obyektin dəyişdirilməsini təmin edən funksiya"],
            correctAnswer: 0
          },
          {
            question: "Promise nədir?",
            options: ["Asinxron kodun işlənməsi üçün bir konsepsiya", "Sinxronizasiyanı təmin edən obyekt", "Gecikmə ilə işləyən funksiya"],
            correctAnswer: 1
          },
          {
            question: "null == undefined ifadəsi hansı dəyəri qaytarır?",
            options: ["true", "false", "null"],
            correctAnswer: 0
          },
          {
            question: "Arrow funksiyaları nədir?",
            options: ["Asinxron əməliyyatlar üçün funksiyalar", "Qısa sintaksislə yazılmış funksiyalar", "Çağırılması mümkün olmayan funksiyalar"],
            correctAnswer: 1
          },
          {
            question: "String-in uzunluğunu necə tapmaq olar?",
            options: ["str.length", "length(str)", "len(str)"],
            correctAnswer: 0
          },
          {
            question: "for dövrü nədir?",
            options: ["Kod blokunun təkrarlanaraq icra edilməsi dövrü", "Dəyişənin yoxlanması üçün şərt", "Funksiya çağırma metodu"],
            correctAnswer: 0
          },
          {
            question: "Bir array-ə element necə əlavə olunur?",
            options: ["arr.unshift()", "arr.push()", "arr.add()"],
            correctAnswer: 0
          },
          {
            question: "Array-dən element necə silinir?",
            options: ["arr.pop()", "arr.remove()", "arr.delete()"],
            correctAnswer: 0
          },
          {
            question: "JavaScript-də event (hadisə) nədir?",
            options: ["İstifadəçi və ya sistem tərəfindən həyata keçirilən və proqram tərəfindən idarə olunan əməliyyat", "Xəta baş verdikdə işləyən funksiya", "Verilənləri dəyişən bir dəyişən"],
            correctAnswer: 0
          },
          {
            question: "Elementə event listener (hadisə dinləyicisi) necə əlavə olunur?",
            options: ["element.addEventListener('click', function)", "element.onclick = function", "element.addEvent('click', function)"],
            correctAnswer: 0
          },
          {
            question: "JavaScript-də modul nədir?",
            options: ["İdxal edilə bilən müstəqil kod parçası", "Funksiyaları saxlayan dəyişən", "Əməliyyatları təkrarlamaq üçün dövr"],
            correctAnswer: 0
          },
          {
            question: "İki obyekt necə müqayisə olunur?",
            options: ["== və === operatorları obyektlərlə işləməz", "JSON.stringify() metodu istifadə olunur", "Müqayisə operatorları istifadə edilə bilər"],
            correctAnswer: 1
          },
          {
            question: "map() metodu array-də nə edir?",
            options: ["Bir funksiyanı tətbiq edərək yeni array yaradır", "Array elementlərini süzgəcdən keçirir", "Array elementlərini silir"],
            correctAnswer: 0
          },
          {
            question: "10-dan böyük ədədlərdən ibarət yeni array necə yaradılır?",
            options: ["arr.filter(num => num > 10)", "arr.map(num => num > 10)", "arr.reduce(num => num > 10)"],
            correctAnswer: 0
          },
          {
            question: "Formun standart davranışını necə dayandırmaq olar?",
            options: ["event.preventDefault()", "form.prevent()", "event.stopPropagation()"],
            correctAnswer: 0
          },
          {
            question: "JSON nədir?",
            options: ["Məlumatları saxlamaq və ötürmək üçün format", "Obyektlərdən ibarət array", "Şəkillərlə işləyən məlumat tipi"],
            correctAnswer: 0
          },
          {
            question: "Obyekti JSON string-ə necə çevirmək olar?",
            options: ["JSON.stringify(obj)", "obj.toJSON()", "JSON.convert(obj)"],
            correctAnswer: 0
          }
        ]
  };
  
  export const javascriptTheory = {
    az: {
      0: "JavaScript — bu, veb səhifələrinə interaktivlik əlavə etməyə imkan verən proqramlaşdırma dilidir.",
      1: "console.log() metodu, brauzerin konsolunda məlumatları göstərmək üçün istifadə edilir.",
      2: "JavaScript-də dəyişənlər let, const və var açar sözləri ilə təyin olunur. let dəyişənə yeni dəyər verilə bilər.",
      3: "== operatoru yalnız dəyərləri müqayisə edir, === operatoru isə həm dəyərləri, həm də onların tiplərini müqayisə edir.",
      4: "undefined, JavaScript-də bir dəyişənin qiymətinin təyin olunmadığını göstərən xüsusi bir dəyərdir.",
      5: "Funksiya müəyyən bir işi yerinə yetirmək üçün yazılan koddur. Funksiya adı və parametr listi ilə təyin olunur.",
      6: "if-else şərti operatoru verilmiş şərtə əsasən fərqli kod bloklarının icrasını təmin edir.",
      7: "for dövrü müəyyən bir şərt doğru olduqda müəyyən kodu təkrarlamaq üçün istifadə edilir.",
      8: "document.getElementById() metodu HTML səhifəsindən elementin ID-sinə görə onu tapmağa imkan verir.",
      9: "false JavaScript-də məntiqi cümlələrin yalan (yanlış) dəyəridir.",
      10: "Array.isArray() metodu bir dəyişənin array (siyahı) olub-olmadığını yoxlayır.",
      11: "parseInt() metodu, mətn növündə olan dəyəri ədədi formata çevirir.",
      12: "NaN (Not a Number) ədədi olmayan bir dəyəri ifadə edir, məsələn, səhv hesablamalar zamanı yaranır.",
      13: "JSON.parse() metodu, JSON formatında verilmiş mətn məlumatını obyektə çevirir.",
      14: "Math.random() metodu təsadüfi onluq ədədi generasiya edir.",
      15: "this açar sözü funksiyalarda və obyektlərdə cari obyektə və ya funksiyaya istinad edir.",
      16: "callback funksiyası, digər funksiyalarda parametr olaraq göndərilən və ya digər funksiyalar tərəfindən çağırılan funksiyadır.",
      17: "async function, asinxron funksiya tərifi üçün istifadə edilir. Bu tip funksiyalar verilənlər işlənəndən sonra nəticə qaytarır.",
      18: "map() metodu, bir array-dən hər elementin üzərində əməliyyat aparmağa və yeni array qaytarmağa imkan verir.",
      19: "setInterval() metodu, müəyyən interval ilə kodu təkrarlamağa imkan verir.",
      20: "return açar sözü, funksiyadan dəyər qaytarmağa imkan verir.",
      21: "split() metodu bir stringi ayrı-ayrı hissələrə bölmək üçün istifadə edilir.",
      22: "addEventListener() metodu HTML elementlərinə hadisələr (event) əlavə etməyə imkan verir.",
      23: "forEach() metodu array-dəki hər bir element üzərində əməliyyat aparmaq üçün istifadə edilir.",
      24: "try-catch blokları, səhvləri idarə etmək üçün istifadə edilir. try blokunda səhv meydana gələn kod, catch blokunda isə həmin səhv idarə edilir.",
      25: "reduce() metodu array-dəki hər bir elementi bir nəticəyə çevirmək üçün istifadə edilir.",
      26: "localStorage.setItem() metodu, veb səhifəsində məlumatları saxlayaraq istifadəçinin brauzerində saxlamağa imkan verir.",
      27: "class, obyektin xüsusiyyətləri və metodları olan bir sinif tərif etmək üçün istifadə olunur.",
      28: "Object.keys() metodu, obyektin bütün açarlarını bir array şəklində qaytarır.",
      29: "slice() metodu, array-dən müəyyən bir hissəni götürmək üçün istifadə edilir.",
      30: "filter() metodu array-dəki elementləri bir şərtə əsasən süzgəcdən keçirmək üçün istifadə edilir."
    },
    ru: {
        0: "JavaScript — это язык программирования, который позволяет добавлять интерактивность на веб-страницы.",
        1: "Метод console.log() используется для вывода информации в консоль браузера.",
        2: "Переменные в JavaScript могут быть объявлены с помощью ключевых слов let, const и var. Переменной, объявленной через let, можно присвоить новое значение.",
        3: "Оператор == сравнивает только значения, тогда как оператор === сравнивает как значения, так и их типы.",
        4: "undefined — это специальное значение в JavaScript, которое означает, что переменная не была присвоена.",
        5: "Функция — это блок кода, который выполняет определенную задачу. Она определяется с помощью имени и списка параметров.",
        6: "Оператор if-else используется для выполнения разных блоков кода в зависимости от условия.",
        7: "Цикл for используется для многократного выполнения блока кода, пока условие остаётся истинным.",
        8: "Метод document.getElementById() позволяет найти элемент на странице по его ID.",
        9: "false — это логическое значение, которое означает ложь.",
        10: "Метод Array.isArray() проверяет, является ли переданный параметр массивом.",
        11: "Метод parseInt() преобразует строковое значение в целое число.",
        12: "NaN (Not a Number) — это значение, которое обозначает, что результат вычислений не является числом, например, в случае ошибок при вычислениях.",
        13: "Метод JSON.parse() используется для преобразования строки в формате JSON в объект JavaScript.",
        14: "Метод Math.random() генерирует случайное число с плавающей точкой от 0 до 1.",
        15: "Ключевое слово this в функциях и объектах ссылается на текущий объект или функцию.",
        16: "Callback-функция — это функция, передаваемая в другую функцию в качестве аргумента и вызываемая внутри этой функции.",
        17: "Ключевое слово async используется для создания асинхронных функций, которые возвращают результат после выполнения операций.",
        18: "Метод map() позволяет выполнить операцию над каждым элементом массива и вернуть новый массив.",
        19: "Метод setInterval() используется для повторяющегося выполнения кода через определённые интервалы времени.",
        20: "Ключевое слово return используется для возврата значения из функции.",
        21: "Метод split() используется для разделения строки на массив подстрок.",
        22: "Метод addEventListener() позволяет добавлять обработчики событий на элементы HTML.",
        23: "Метод forEach() выполняет операцию над каждым элементом массива.",
        24: "Блоки try-catch используются для обработки ошибок. Код в блоке try выполняется, а ошибки перехватываются и обрабатываются в блоке catch.",
        25: "Метод reduce() используется для выполнения операции над каждым элементом массива и получения единого результата.",
        26: "Метод localStorage.setItem() позволяет сохранять данные в локальном хранилище браузера.",
        27: "Класс — это шаблон для создания объектов с определёнными свойствами и методами.",
        28: "Метод Object.keys() возвращает массив всех ключей объекта.",
        29: "Метод slice() используется для извлечения части массива.",
        30: "Метод filter() позволяет отфильтровывать элементы массива по заданному условию."
      },
      en: {
        0: "JavaScript is a programming language used to add interactivity to web pages.",
        1: "The console.log() method is used to output information to the browser console.",
        2: "Variables in JavaScript can be declared using the keywords let, const, and var. A variable declared with let can be reassigned.",
        3: "The == operator compares only values, while the === operator compares both values and types.",
        4: "undefined is a special value in JavaScript, meaning a variable has not been assigned a value.",
        5: "A function is a block of code that performs a specific task. It is defined by a name and a list of parameters.",
        6: "The if-else statement is used to execute different blocks of code based on a condition.",
        7: "The for loop is used to repeatedly execute a block of code while a condition is true.",
        8: "The document.getElementById() method is used to find an element on a page by its ID.",
        9: "false is a boolean value that represents the logical value of false.",
        10: "The Array.isArray() method checks if the passed parameter is an array.",
        11: "The parseInt() method converts a string value to an integer.",
        12: "NaN (Not a Number) is a value indicating that a computation result is not a valid number, e.g., in case of errors during calculations.",
        13: "The JSON.parse() method is used to convert a JSON-formatted string into a JavaScript object.",
        14: "The Math.random() method generates a random floating-point number between 0 and 1.",
        15: "The this keyword in functions and objects refers to the current object or function.",
        16: "A callback function is a function passed as an argument to another function and invoked within that function.",
        17: "The async keyword is used to create asynchronous functions, which return a result after performing operations.",
        18: "The map() method is used to perform an operation on each element of an array and return a new array.",
        19: "The setInterval() method is used to execute code repeatedly at specified intervals.",
        20: "The return keyword is used to return a value from a function.",
        21: "The split() method is used to split a string into an array of substrings.",
        22: "The addEventListener() method is used to add event listeners to HTML elements.",
        23: "The forEach() method is used to perform an operation on each element of an array.",
        24: "The try-catch blocks are used to handle errors. Code in the try block is executed, and errors are caught and handled in the catch block.",
        25: "The reduce() method is used to perform an operation on each element of an array and obtain a single result.",
        26: "The localStorage.setItem() method is used to store data in the browser's local storage.",
        27: "A class is a blueprint for creating objects with specific properties and methods.",
        28: "The Object.keys() method returns an array of all keys of an object.",
        29: "The slice() method is used to extract a portion of an array.",
        30: "The filter() method is used to filter array elements based on a given condition."
      }
  };
  
  export const h3Text: Record<string, string> = {
    ru: "Тест по JavaScript",
    en: "JavaScript Test",
    az: "JavaScript Testi"
  };
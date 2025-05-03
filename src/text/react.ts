export const reactTestQuestions = {
    ru: [
      {
        question: "Что такое React?",
        options: ["Язык программирования", "Библиотека для создания пользовательских интерфейсов", "Система управления базами данных"],
        correctAnswer: 1
      },
      {
        question: "Какая функция используется для рендеринга компонента в React?",
        options: ["render()", "display()", "draw()"],
        correctAnswer: 0
      },
      {
        question: "Что такое JSX?",
        options: ["Язык программирования", "Синтаксический сахар для JavaScript, используемый в React", "Библиотека для работы с DOM"],
        correctAnswer: 1
      },
      {
        question: "Какая функция используется для создания нового компонента в React?",
        options: ["newComponent()", "createComponent()", "function ComponentName() {} или class ComponentName extends React.Component {}"],
        correctAnswer: 2
      },
      {
        question: "Что такое props в React?",
        options: ["Специальный тип состояния компонента", "Способ передачи данных в компонент", "Встроенная функция React"],
        correctAnswer: 1
      },
      {
        question: "Что такое state в React?",
        options: ["Внешний объект для хранения данных", "Данные, которые изменяются в течение жизни компонента", "Система управления маршрутизацией"],
        correctAnswer: 1
      },
      {
        question: "Что делает метод setState() в React?",
        options: ["Изменяет состояние компонента", "Изменяет props компонента", "Создаёт новый компонент"],
        correctAnswer: 0
      },
      {
        question: "Как создать ссылку на DOM элемент в React?",
        options: ["Используя ref", "Используя domRef", "Используя state"],
        correctAnswer: 0
      },
      {
        question: "Что такое жизненные циклы компонента в React?",
        options: ["Методы, которые управляют жизненным циклом компонента", "Методы для рендеринга компонентов", "Методы для обновления props"],
        correctAnswer: 0
      },
      {
        question: "Какие методы жизненного цикла доступны в классовых компонентах?",
        options: ["componentDidMount(), componentWillUnmount()", "mount(), unmount()", "useEffect(), useState()"],
        correctAnswer: 0
      },
      {
        question: "Что такое React Hook?",
        options: ["Функции, которые позволяют использовать состояние и другие возможности React в функциональных компонентах", "Функции для рендеринга JSX", "Вспомогательные функции для стилизации компонентов"],
        correctAnswer: 0
      },
      {
        question: "Какой хук используется для работы с состоянием в функциональных компонентах?",
        options: ["useState()", "useEffect()", "useContext()"],
        correctAnswer: 0
      },
      {
        question: "Что делает хук useEffect() в React?",
        options: ["Позволяет работать с состоянием компонента", "Выполняет побочные эффекты в функциональных компонентах", "Используется для создания нового компонента"],
        correctAnswer: 1
      },
      {
        question: "Что такое контекст в React?",
        options: ["Механизм для обмена данными между компонентами, не передавая их через props", "Специальный способ рендеринга данных", "Библиотека для управления состоянием"],
        correctAnswer: 0
      },
      {
        question: "Какие компоненты существуют в React?",
        options: ["Только функциональные", "Только классовые", "Классовые и функциональные компоненты"],
        correctAnswer: 2
      },
      {
        question: "Что такое prop drilling в React?",
        options: ["Передача данных через множество уровней вложенных компонентов", "Передача данных только в корневой компонент", "Использование props для получения значений из глобального состояния"],
        correctAnswer: 0
      },
      {
        question: "Как обрабатывать события в React?",
        options: ["Используя handleEvent() внутри компонента", "Через пропсы, передаваемые в компонент", "Используя встроенные методы в классовых компонентах"],
        correctAnswer: 0
      },
      {
        question: "Что такое `key` в списках в React?",
        options: ["Уникальный идентификатор для каждого элемента списка", "Значение, которое передается через props", "Используется для сортировки элементов в списке"],
        correctAnswer: 0
      },
      {
        question: "Какая библиотека используется для маршрутизации в React?",
        options: ["react-router", "react-redux", "react-state"],
        correctAnswer: 0
      },
      {
        question: "Как оптимизировать рендеринг компонентов в React?",
        options: ["Используя `shouldComponentUpdate()`", "Используя хук `useState()`", "Рендерить компоненты только один раз"],
        correctAnswer: 0
      },
      {
        question: "Что такое HOC (Higher Order Component) в React?",
        options: ["Функция, которая принимает компонент и возвращает новый компонент с добавленным функционалом", "Компонент, который наследует свойства другого компонента", "Функция, которая обновляет состояние компонента"],
        correctAnswer: 0
      },
      {
        question: "Какой хук используется для доступа к контексту в React?",
        options: ["useContext()", "useEffect()", "useState()"],
        correctAnswer: 0
      },
      {
        question: "Как передать данные из родительского компонента в дочерний?",
        options: ["Через props", "Через state", "Через refs"],
        correctAnswer: 0
      },
      {
        question: "Что такое 'render props' в React?",
        options: ["Способ передавать функции для рендеринга UI через props", "Способ обновления состояния", "Способ работы с классами"],
        correctAnswer: 0
      },
      {
        question: "Как работает React с виртуальным DOM?",
        options: ["Реализует изменения в виртуальной копии DOM, а затем синхронизирует его с реальным", "Реализует обновление реального DOM без использования виртуального DOM", "Использует только реальный DOM для рендеринга"],
        correctAnswer: 0
      },
      {
        question: "Что делает метод `componentDidMount()` в классовых компонентах?",
        options: ["Вызывается сразу после монтирования компонента", "Вызывается до монтирования компонента", "Вызывается каждый раз при рендеринге"],
        correctAnswer: 0
      },
      {
        question: "Как управлять состоянием приложения в React?",
        options: ["Используя Redux или Context API", "Только через props", "Только через состояние компонента"],
        correctAnswer: 0
      },
      {
        question: "Что делает хук `useMemo()` в React?",
        options: ["Оптимизирует производительность путем запоминания вычисленных значений", "Обновляет состояние компонента", "Отслеживает изменения в props"],
        correctAnswer: 0
      },
      {
        question: "Что такое 'lifting state up' в React?",
        options: ["Перенос состояния из дочернего компонента в родительский", "Синхронизация состояния между компонентами", "Использование глобального состояния"],
        correctAnswer: 0
      },
      {
        question: "Что делает метод `ReactDOM.render()`?",
        options: ["Рендерит компоненты в DOM", "Отслеживает изменения в компоненте", "Загружает компоненты на страницу"],
        correctAnswer: 0
      }
    ],
    en: [
        {
          question: "What is React?",
          options: ["A programming language", "A library for building user interfaces", "A database management system"],
          correctAnswer: 1
        },
        {
          question: "Which function is used to render a component in React?",
          options: ["render()", "display()", "draw()"],
          correctAnswer: 0
        },
        {
          question: "What is JSX?",
          options: ["A programming language", "A syntax sugar for JavaScript used in React", "A library for working with the DOM"],
          correctAnswer: 1
        },
        {
          question: "Which function is used to create a new component in React?",
          options: ["newComponent()", "createComponent()", "function ComponentName() {} or class ComponentName extends React.Component {}"],
          correctAnswer: 2
        },
        {
          question: "What are props in React?",
          options: ["A special type of component state", "A way to pass data into a component", "An inbuilt React function"],
          correctAnswer: 1
        },
        {
          question: "What is state in React?",
          options: ["An external object for storing data", "Data that can change during the lifetime of a component", "A routing management system"],
          correctAnswer: 1
        },
        {
          question: "What does the setState() method do in React?",
          options: ["Changes the component's state", "Changes the component's props", "Creates a new component"],
          correctAnswer: 0
        },
        {
          question: "How do you create a reference to a DOM element in React?",
          options: ["Using ref", "Using domRef", "Using state"],
          correctAnswer: 0
        },
        {
          question: "What are the lifecycle methods in React?",
          options: ["Methods that manage the component's lifecycle", "Methods for rendering components", "Methods for updating props"],
          correctAnswer: 0
        },
        {
          question: "Which lifecycle methods are available in class components?",
          options: ["componentDidMount(), componentWillUnmount()", "mount(), unmount()", "useEffect(), useState()"],
          correctAnswer: 0
        },
        {
          question: "What is a React Hook?",
          options: ["Functions that allow you to use state and other React features in functional components", "Functions for rendering JSX", "Helper functions for styling components"],
          correctAnswer: 0
        },
        {
          question: "Which hook is used to work with state in functional components?",
          options: ["useState()", "useEffect()", "useContext()"],
          correctAnswer: 0
        },
        {
          question: "What does the useEffect() hook do in React?",
          options: ["It allows you to work with the component's state", "It performs side effects in functional components", "It is used to create a new component"],
          correctAnswer: 1
        },
        {
          question: "What is context in React?",
          options: ["A mechanism for sharing data between components without passing props", "A special way of rendering data", "A library for state management"],
          correctAnswer: 0
        },
        {
          question: "What types of components exist in React?",
          options: ["Only functional", "Only class-based", "Class-based and functional components"],
          correctAnswer: 2
        },
        {
          question: "What is prop drilling in React?",
          options: ["Passing data through multiple layers of nested components", "Passing data only to the root component", "Using props to fetch values from global state"],
          correctAnswer: 0
        },
        {
          question: "How do you handle events in React?",
          options: ["Using handleEvent() within the component", "Through props passed to the component", "Using inbuilt methods in class components"],
          correctAnswer: 0
        },
        {
          question: "What is the 'key' prop in lists in React?",
          options: ["A unique identifier for each list item", "A value passed via props", "Used to sort the items in the list"],
          correctAnswer: 0
        },
        {
          question: "Which library is used for routing in React?",
          options: ["react-router", "react-redux", "react-state"],
          correctAnswer: 0
        },
        {
          question: "How do you optimize component rendering in React?",
          options: ["Using `shouldComponentUpdate()`", "Using the `useState()` hook", "Rendering components only once"],
          correctAnswer: 0
        },
        {
          question: "What is an HOC (Higher Order Component) in React?",
          options: ["A function that takes a component and returns a new component with added functionality", "A component that inherits properties from another component", "A function that updates the component's state"],
          correctAnswer: 0
        },
        {
          question: "Which hook is used to access context in React?",
          options: ["useContext()", "useEffect()", "useState()"],
          correctAnswer: 0
        },
        {
          question: "How do you pass data from a parent component to a child?",
          options: ["Through props", "Through state", "Through refs"],
          correctAnswer: 0
        },
        {
          question: "What is 'render props' in React?",
          options: ["A pattern to pass a function to render UI through props", "A method to update state", "A way of working with classes"],
          correctAnswer: 0
        },
        {
          question: "How does React work with the virtual DOM?",
          options: ["It applies changes to a virtual copy of the DOM, then syncs it with the real one", "It directly updates the real DOM without using a virtual DOM", "It only uses the real DOM for rendering"],
          correctAnswer: 0
        },
        {
          question: "What does the `componentDidMount()` method do in class components?",
          options: ["It is called immediately after the component is mounted", "It is called before the component is mounted", "It is called every time the component renders"],
          correctAnswer: 0
        },
        {
          question: "How do you manage application state in React?",
          options: ["Using Redux or Context API", "Only through props", "Only through component state"],
          correctAnswer: 0
        },
        {
          question: "What does the `useMemo()` hook do in React?",
          options: ["It optimizes performance by memoizing computed values", "It updates the component's state", "It tracks changes in props"],
          correctAnswer: 0
        },
        {
          question: "What is 'lifting state up' in React?",
          options: ["Moving state from a child component to the parent", "Synchronizing state between components", "Using global state"],
          correctAnswer: 0
        },
        {
          question: "What does the `ReactDOM.render()` method do?",
          options: ["Renders components to the DOM", "Tracks changes in a component", "Loads components onto the page"],
          correctAnswer: 0
        }
      ],
      az: [
        {
          question: "React nədir?",
          options: ["Proqramlaşdırma dili", "İstifadəçi interfeysi qurmaq üçün kitabxana", "Verilənlər bazasını idarəetmə sistemi"],
          correctAnswer: 1
        },
        {
          question: "React-da bir komponenti render etmək üçün hansı funksiya istifadə olunur?",
          options: ["render()", "display()", "draw()"],
          correctAnswer: 0
        },
        {
          question: "JSX nədir?",
          options: ["Proqramlaşdırma dili", "React-da istifadə olunan JavaScript sintaksis şəkəri", "DOM ilə işləmək üçün kitabxana"],
          correctAnswer: 1
        },
        {
          question: "React-da yeni bir komponent yaratmaq üçün hansı funksiya istifadə olunur?",
          options: ["newComponent()", "createComponent()", "function ComponentName() {} və ya class ComponentName extends React.Component {}"],
          correctAnswer: 2
        },
        {
          question: "React-da props nədir?",
          options: ["Komponentin xüsusi vəziyyət növü", "Komponentə məlumat ötürmək üsulu", "React-da daxili funksiya"],
          correctAnswer: 1
        },
        {
          question: "React-da state nədir?",
          options: ["Məlumatı saxlamaq üçün xarici obyekt", "Komponentin ömrü boyu dəyişə biləcək məlumat", "Yönləndirmə idarəetmə sistemi"],
          correctAnswer: 1
        },
        {
          question: "setState() metodu React-da nə edir?",
          options: ["Komponentin vəziyyətini dəyişir", "Komponentin props-larını dəyişir", "Yeni komponent yaradır"],
          correctAnswer: 0
        },
        {
          question: "React-da DOM elementinə istinad yaratmaq üçün necə edirsiniz?",
          options: ["ref istifadə edərək", "domRef istifadə edərək", "state istifadə edərək"],
          correctAnswer: 0
        },
        {
          question: "React-da lifecycle metodları nədir?",
          options: ["Komponentin ömrünü idarə etmək üçün metodlar", "Komponentləri render etmək üçün metodlar", "Props-ları yeniləmək üçün metodlar"],
          correctAnswer: 0
        },
        {
          question: "Class komponentlərində hansı lifecycle metodları mövcuddur?",
          options: ["componentDidMount(), componentWillUnmount()", "mount(), unmount()", "useEffect(), useState()"],
          correctAnswer: 0
        },
        {
          question: "React-da hook nədir?",
          options: ["Funksiyalar ki, bu funksiyalar komponentlərdə state və digər React xüsusiyyətlərindən istifadə etməyə imkan verir", "JSX render etmək üçün funksiyalar", "Komponentlərin tərtibatı üçün köməkçi funksiyalar"],
          correctAnswer: 0
        },
        {
          question: "Functional komponentlərdə state ilə işləmək üçün hansı hook istifadə olunur?",
          options: ["useState()", "useEffect()", "useContext()"],
          correctAnswer: 0
        },
        {
          question: "useEffect() hook-u React-da nə edir?",
          options: ["Komponentin vəziyyəti ilə işləyir", "Functional komponentlərdə yan təsirlər həyata keçirir", "Yeni komponent yaradır"],
          correctAnswer: 1
        },
        {
          question: "React-da context nədir?",
          options: ["Props ötürməkdənsə, komponentlər arasında məlumat paylaşmağa imkan verən mexanizm", "Məlumatı render etmək üçün xüsusi üsul", "Vəziyyət idarəetmə kitabxanası"],
          correctAnswer: 0
        },
        {
          question: "React-da hansı komponentlər mövcuddur?",
          options: ["Sadəcə functional", "Sadəcə class-based", "Class-based və functional komponentlər"],
          correctAnswer: 2
        },
        {
          question: "React-da prop drilling nədir?",
          options: ["Məlumatı bir neçə nested komponentlər vasitəsilə ötürmək", "Yalnız root komponentə məlumat ötürmək", "Props istifadə edərək qlobal vəziyyətdən dəyərləri almaq"],
          correctAnswer: 0
        },
        {
          question: "React-da hadisələri necə idarə edirsiniz?",
          options: ["handleEvent() istifadə edərək komponent daxilində", "Props vasitəsilə komponentə ötürərək", "Class komponentlərində daxili metodlar istifadə edərək"],
          correctAnswer: 0
        },
        {
          question: "React-da siyahılarda 'key' prop-u nədir?",
          options: ["Hər bir siyahı elementini tanıyan unikal identifikator", "Props vasitəsilə ötürülən dəyər", "Siyahıdakı elementləri sıralamaq üçün istifadə olunur"],
          correctAnswer: 0
        },
        {
          question: "React-da routing üçün hansı kitabxana istifadə olunur?",
          options: ["react-router", "react-redux", "react-state"],
          correctAnswer: 0
        },
        {
          question: "React-da komponentlərin render edilməsini necə optimallaşdırmaq olar?",
          options: ["`shouldComponentUpdate()` istifadə edərək", "`useState()` hook-u istifadə edərək", "Komponentləri yalnız bir dəfə render edərək"],
          correctAnswer: 0
        },
        {
          question: "React-da Higher Order Component (HOC) nədir?",
          options: ["Komponenti qəbul edən və ona əlavə funksionallıq əlavə edən funksiya", "Başqa komponentdən xüsusiyyətləri miras alan komponent", "Komponentin vəziyyətini yeniləyən funksiya"],
          correctAnswer: 0
        },
        {
          question: "React-da context-ə daxil olmaq üçün hansı hook istifadə olunur?",
          options: ["useContext()", "useEffect()", "useState()"],
          correctAnswer: 0
        },
        {
          question: "Valideyn komponentdən uşağa məlumat necə ötürülür?",
          options: ["Props vasitəsilə", "State vasitəsilə", "Refs vasitəsilə"],
          correctAnswer: 0
        },
        {
          question: "Render props nədir React-da?",
          options: ["Props vasitəsilə UI render etmək üçün funksiya ötürmək nümunəsi", "Vəziyyəti yeniləmək üçün metod", "Class-larla işləmək üsulu"],
          correctAnswer: 0
        },
        {
          question: "React-da virtual DOM ilə necə işləyir?",
          options: ["Dəyişikliklər virtual DOM-da tətbiq olunur, sonra real DOM ilə sinxronizasiya edilir", "Birbaşa real DOM-u yeniləyir, virtual DOM istifadə olunmur", "Sadəcə real DOM-u render etmək üçün istifadə olunur"],
          correctAnswer: 0
        },
        {
          question: "`componentDidMount()` metodu class komponentlərində nə edir?",
          options: ["Komponent mount edildikdən dərhal sonra çağırılır", "Komponent mount edilməzdən əvvəl çağırılır", "Komponent hər render edildikdə çağırılır"],
          correctAnswer: 0
        },
        {
          question: "React-da tətbiq vəziyyətini necə idarə edirsiniz?",
          options: ["Redux və ya Context API istifadə edərək", "Yalnız props vasitəsilə", "Yalnız komponentin state vasitəsilə"],
          correctAnswer: 0
        },
        {
          question: "`useMemo()` hook-u React-da nə edir?",
          options: ["Hesablanmış dəyərləri yaddaşda saxlayaraq performansı optimallaşdırır", "Komponentin vəziyyətini yeniləyir", "Props-larda baş verən dəyişiklikləri izləyir"],
          correctAnswer: 0
        },
        {
          question: "React-da 'lifting state up' nədir?",
          options: ["Vəziyyəti uşaq komponentdən valideynə qaldırmaq", "Komponentlər arasında vəziyyəti sinxronlaşdırmaq", "Qlobal vəziyyətdən istifadə etmək"],
          correctAnswer: 0
        },
        {
          question: "`ReactDOM.render()` metodu nə edir?",
          options: ["Komponentləri DOM-a render edir", "Komponentdə baş verən dəyişiklikləri izləyir", "Komponentləri səhifəyə yükləyir"],
          correctAnswer: 0
        }
      ]
    };
 
    export const reactTheory = {
        az: {
          0: "React, istifadəçi interfeysi yaratmaq üçün JavaScript kitabxanasıdır. O, komponentlərə əsaslanır və tətbiqetmənin istifadəçi interfeysi elementlərini modular və təkrarlanabilir şəkildə yaratmağa imkan verir.",
          1: "React-da komponentlər render funksiyası vasitəsilə vizual məlumatları göstərir. Bu metod, hər dəfə vəziyyət və ya props dəyişdikdə UI-nin yenilənməsini təmin edir.",
          2: "JSX, JavaScript-də HTML tərtibatını istifadə etməyə imkan verən bir sintaksis şəkəridir. JSX ilə yazılmış kod, React tərəfindən JavaScript obyektlərinə çevrilir.",
          3: "React-da yeni komponentlər yaratmaq üçün, ya function-based komponentlərdən (funksiyalarla), ya da class-based komponentlərdən (siniflərlə) istifadə olunur.",
          4: "Props, komponentlər arasında məlumat ötürmək üçün istifadə olunur. Onlar valideyn komponentdən uşağa məlumat ötürür və dəyişdirilə bilməz.",
          5: "State, komponentin daxili vəziyyətini təyin edir və bu vəziyyət dəyişdikcə komponent yenidən render olunur. State, yalnız komponent daxilində dəyişdirilə bilər.",
          6: "setState(), React-da komponentin vəziyyətini dəyişdirmək üçün istifadə olunan bir metoddur. Bu metod, komponentin yenidən render edilməsini təmin edir.",
          7: "React-da ref, DOM elementinə birbaşa istinad etməyə imkan verən bir xüsusiyyətdir. Ref-lər, komponentin daxilindəki real DOM elementlərinə istinad yaratmaq üçün istifadə edilir.",
          8: "Lifecycle metodları, React komponentlərinin ömrünü idarə etmək üçün istifadə olunur. Bu metodlar komponentin yaradılması, yenidən render edilməsi və təmizlənməsi kimi hadisələri idarə edir.",
          9: "useState() React hook-u, funksional komponentlərdə state yaratmağa imkan verir. State dəyişdikcə komponent yenidən render olunur.",
          10: "useEffect() React hook-u, komponentdə yan təsirlər (side effects) yerinə yetirmək üçün istifadə edilir. Məsələn, verilənlər bazasına sorğular göndərmək və ya DOM manipulyasiyaları etmək.",
          11: "Class komponentlərində lifecycle metodları, componentDidMount(), componentDidUpdate(), və componentWillUnmount() kimi metodları ehtiva edir. Bu metodlar komponentin həyat dövründə müəyyən mərhələlərdə çağırılır.",
          12: "React hook-ları, funksional komponentlərə state və lifecycle xüsusiyyətlərini əlavə etməyə imkan verir. useState(), useEffect(), useContext() kimi hook-lar React-da çox geniş istifadə olunur.",
          13: "useEffect(), React-da yan təsirlər üçün bir hook-dur. Məsələn, API çağırışları, DOM manipulyasiyaları və ya timeouts kimi qeyri-səlis əməliyyatları idarə etmək üçün istifadə olunur.",
          14: "Context API, React-da komponentlər arasında məlumat paylaşmağa imkan verən bir xüsusiyyətdir. Bu, props drilling problemini həll etməyə kömək edir.",
          15: "React-da komponentlər həm class-based, həm də funksional ola bilər. Klasslar daha əvvəl geniş istifadə edilirdi, lakin hook-ların təqdim olunmasından sonra funksional komponentlər daha populyar oldu.",
          16: "Props drilling, məlumatın bir neçə nested (daxili) komponentlər vasitəsilə ötürülməsi vəziyyətinə deyilir. Bu problem, birbaşa əlaqəsi olmayan komponentlər arasında məlumat ötürməyə səbəb ola bilər.",
          17: "React-da hadisələr, komponentdəki istifadəçi hərəkətlərini idarə etmək üçün istifadə olunur. Məsələn, düyməyə klikləmə, forma göndərmə və ya siçan hadisələri.",
          18: "React-da 'key' prop-u, siyahılarda hər bir elementin unikal identifikatorudur. Bu, React-a hansı elementlərin dəyişdiyini bilməyə və daha sürətli render etməyə imkan verir.",
          19: "React-da routing, `react-router` kitabxanası ilə həyata keçirilir. Bu, tətbiqin müxtəlif səhifələrinə keçməyə və onlara URL-lər əsasında müraciət etməyə imkan verir.",
          20: "React-da komponentlərin render edilməsini optimallaşdırmaq üçün `shouldComponentUpdate()` metodundan istifadə olunur. Bu metod komponentin yenidən render edilib-edilməməsini müəyyən edir.",
          21: "Higher Order Component (HOC), bir komponenti qəbul edib ona əlavə funksionallıq əlavə edən bir funksiya olaraq tanımlanır. HOC-lar daha təkrarlana bilən və yenidən istifadə edilə bilən kod yaratmağa imkan verir.",
          22: "useContext() hook-u, React kontekstinə daxil olmaq və istifadə etmək üçün istifadə olunur. Bu hook, komponentlər arasında məlumat paylaşmağa imkan verir.",
          23: "Valideyn komponentdən uşağa məlumat, props vasitəsilə ötürülür. Props, komponentlər arasında məlumat ötürməyə və idarə etməyə imkan verən bir mexanizmdir.",
          24: "Render props, bir komponentin digər komponentlərə UI render etmək üçün funksiya ötürməsi üsuludur. Bu üsul çox vaxt təkrarlanan UI komponentlərinin yaradılması üçün istifadə olunur.",
          25: "React-da virtual DOM, gerçək DOM ilə müqayisədə daha sürətli və effektivdir. Dəyişikliklər əvvəlcə virtual DOM-da edilir və sonra real DOM ilə sinxronlaşdırılır.",
          26: "componentDidMount() metodu, komponent mount edildikdən sonra çağırılır. Bu metod, komponentin ilk dəfə ekrana gəlməsi üçün istifadə olunur.",
          27: "Tətbiqin vəziyyəti, React-da ya Context API, ya da Redux kimi alətlər ilə idarə olunur. Bu, komponentlər arasında qlobal vəziyyəti paylaşmağa imkan verir.",
          28: "useMemo() hook-u, hesablanmış dəyərləri yaddaşda saxlayaraq render zamanı optimallaşdırma təmin edir. Bu, lazım olmayan təkrarlanan hesablamaların qarşısını alır.",
          29: "Lifting state up, vəziyyəti valideyn komponentə qaldırmaq, sonra isə uşaqlara prop-lar vasitəsilə məlumat ötürməkdir. Bu, komponentlər arasında daha yaxşı əlaqə və məlumat paylaşımını təmin edir.",
          30: "ReactDOM.render() metodu, React komponentlərini real DOM-a render edir. Bu metod tətbiqin ilk dəfə ekrana çıxmasını təmin edir."
        },
        ru: {
            0: "React — это библиотека JavaScript, предназначенная для создания пользовательских интерфейсов. Она основана на компонентах и позволяет создавать элементы пользовательского интерфейса в модульной и повторно используемой форме.",
            1: "Компоненты в React отображают данные с помощью метода render. Этот метод используется для обновления пользовательского интерфейса, когда изменяются состояния или props.",
            2: "JSX — это синтаксический сахар для JavaScript, который позволяет использовать HTML-подобный код внутри JavaScript. Код, написанный в JSX, компилируется в JavaScript-объекты, которые обрабатывает React.",
            3: "В React компоненты могут быть функциональными или классовыми. Функциональные компоненты — это простые функции, а классовые компоненты используют ES6-классы.",
            4: "Props (свойства) используются для передачи данных от родительского компонента к дочернему. Они являются только для чтения и не могут быть изменены дочерним компонентом.",
            5: "State (состояние) определяет внутреннее состояние компонента. Когда состояние компонента изменяется, компонент повторно рендерится, чтобы отобразить новые данные.",
            6: "Метод setState() используется для обновления состояния компонента в React. При вызове этого метода компонент будет перерендерен с новым состоянием.",
            7: "Ref (ссылка) в React используется для получения доступа к DOM-элементам. Refs позволяют работать с реальными элементами DOM и манипулировать ими напрямую.",
            8: "Методы жизненного цикла компонента в React используются для управления его жизненным циклом. Эти методы позволяют выполнять действия при монтировании, обновлении и размонтировании компонента.",
            9: "useState() — это хук в функциональных компонентах, который позволяет создавать и управлять состоянием компонента.",
            10: "useEffect() — это хук для выполнения побочных эффектов (например, запросов к серверу или изменения DOM) в функциональных компонентах.",
            11: "Методы жизненного цикла для классовых компонентов включают componentDidMount(), componentDidUpdate(), и componentWillUnmount(). Эти методы вызываются в разные моменты жизни компонента.",
            12: "React Hooks предоставляют возможность добавлять функциональность, такую как состояние и методы жизненного цикла, в функциональные компоненты.",
            13: "useEffect() используется для выполнения побочных эффектов в компонентах. Это может быть полезно для API-запросов или работы с таймерами.",
            14: "Context API в React позволяет передавать данные между компонентами без необходимости использовать props. Это позволяет избежать проблемы 'prop drilling'.",
            15: "React поддерживает как классовые, так и функциональные компоненты. Классовые компоненты использовались раньше, но с введением хуков функциональные компоненты стали более популярными.",
            16: "Prop drilling — это процесс передачи данных от родительского компонента к глубоко вложенным дочерним компонентам. Это может привести к сложным и трудным для поддержки структурам кода.",
            17: "События в React используются для обработки действий пользователей, таких как клики мышью, отправка форм и т. д.",
            18: "Prop 'key' используется в списках для задания уникальности элементов. Он помогает React отслеживать изменения в списках и оптимизировать рендеринг.",
            19: "Routing в React осуществляется с помощью библиотеки react-router, которая позволяет создавать многосоставные приложения с несколькими страницами.",
            20: "Метод shouldComponentUpdate() используется в классовых компонентах для оптимизации рендеринга. Он позволяет контролировать, нужно ли перерендеривать компонент.",
            21: "Higher Order Component (HOC) — это паттерн, который принимает компонент и возвращает новый компонент с добавленным функционалом.",
            22: "useContext() — это хук, который позволяет использовать React Context в функциональных компонентах. Он позволяет получать доступ к глобальным данным без использования props.",
            23: "Props используются для передачи данных от родительского компонента к дочернему. Это основной способ обмена данными между компонентами в React.",
            24: "Render Props — это паттерн, когда компонент передает функцию рендера другим компонентам, что позволяет передавать данные и логику для отображения.",
            25: "Virtual DOM — это абстракция, которая используется в React для оптимизации рендеринга. Изменения в виртуальном DOM затем синхронизируются с реальным DOM.",
            26: "Метод componentDidMount() вызывается после того, как компонент был монтирован в DOM. Это место для выполнения операций, которые должны произойти после рендеринга компонента.",
            27: "Состояние приложения в React можно управлять с помощью Context API или Redux, что позволяет делиться данными между компонентами на разных уровнях вложенности.",
            28: "useMemo() — это хук, который помогает оптимизировать рендеринг, запоминает вычисленные значения и избегает повторных вычислений при каждом рендере.",
            29: "Lifting state up — это процесс перемещения состояния в родительский компонент для его передачи в дочерние компоненты через props.",
            30: "Метод ReactDOM.render() используется для рендеринга компонента в реальный DOM. Этот метод запускает отображение компонентов на странице."
          },
          en: {
            0: "React is a JavaScript library for building user interfaces. It is component-based and allows creating UI elements in a modular and reusable way.",
            1: "Components in React render data using the render method. This method is used to update the UI when the state or props change.",
            2: "JSX is a syntax extension for JavaScript that allows using HTML-like code inside JavaScript. The code written in JSX is compiled into JavaScript objects that React processes.",
            3: "In React, components can be functional or class-based. Functional components are simple functions, while class-based components use ES6 classes.",
            4: "Props (properties) are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component.",
            5: "State defines the internal data of a component. When the state of a component changes, the component is re-rendered to reflect the new data.",
            6: "The setState() method is used to update the state of a component in React. When called, it triggers a re-render of the component with the new state.",
            7: "Refs (references) in React are used to access DOM elements. Refs allow working with real DOM elements and manipulating them directly.",
            8: "Lifecycle methods in React manage the lifecycle of a component. These methods allow performing actions when a component mounts, updates, or unmounts.",
            9: "useState() is a hook in functional components that allows creating and managing component state.",
            10: "useEffect() is a hook for handling side effects (e.g., API calls or DOM updates) in functional components.",
            11: "Lifecycle methods for class-based components include componentDidMount(), componentDidUpdate(), and componentWillUnmount(). These methods are called at different stages of the component's life.",
            12: "React Hooks allow adding functionality such as state and lifecycle methods to functional components.",
            13: "useEffect() is used to perform side effects in components. This can be useful for API requests or working with timers.",
            14: "The Context API in React allows passing data between components without the need to use props. This avoids the issue of 'prop drilling'.",
            15: "React supports both class-based and functional components. Class-based components were used earlier, but with the introduction of hooks, functional components have become more popular.",
            16: "Prop drilling is the process of passing data from a parent component to deeply nested child components. This can lead to complex and hard-to-maintain code structures.",
            17: "Events in React are used to handle user actions like clicks, form submissions, etc.",
            18: "The 'key' prop is used in lists to assign uniqueness to elements. It helps React track changes in lists and optimize rendering.",
            19: "Routing in React is done using the react-router library, which allows creating multi-page applications.",
            20: "The shouldComponentUpdate() method is used in class-based components to optimize rendering. It allows controlling whether a component should re-render.",
            21: "A Higher-Order Component (HOC) is a pattern that takes a component and returns a new component with added functionality.",
            22: "useContext() is a hook that allows using React Context in functional components. It allows accessing global data without using props.",
            23: "Props are used to pass data from a parent component to a child component. This is the primary way to share data between components in React.",
            24: "Render Props is a pattern where a component passes a render function to other components, allowing the transfer of data and logic for display.",
            25: "The Virtual DOM is an abstraction used in React for optimizing rendering. Changes in the virtual DOM are then synchronized with the real DOM.",
            26: "The componentDidMount() method is called after a component has been mounted into the DOM. This is a place for performing operations that should happen after the component renders.",
            27: "Application state in React can be managed using Context API or Redux, which allows sharing data between components at different nesting levels.",
            28: "useMemo() is a hook that helps optimize rendering by memoizing computed values and preventing redundant calculations on each render.",
            29: "Lifting state up is the process of moving state to a parent component to share it with child components via props.",
            30: "The ReactDOM.render() method is used to render a component into the real DOM. This method triggers the display of components on the page."
          }
        };
 
        export const h3Text: Record<string, string> = {
            ru: "Тест по React",
            en: "React Test",
            az: "React Testi"
          };
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
let autoSlideInterval;

// Función para mostrar la imagen actual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Función para avanzar a la siguiente imagen
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Función para retroceder a la imagen anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Función para iniciar el cambio automático de imágenes
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos (5000 ms)
}

// Función para detener el cambio automático de imágenes
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Mostrar la primera imagen al cargar la página
showSlide(currentSlide);

// Iniciar el cambio automático de imágenes al cargar la página
startAutoSlide();

// Detener el cambio automático cuando el usuario interactúa con los botones de navegación
document.querySelector('.prev').addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide(); // Reiniciar el cambio automático después de la interacción
});

document.querySelector('.next').addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide(); // Reiniciar el cambio automático después de la interacción
});

// Función para mostrar la pestaña seleccionada
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// 3. Sistema de traducción
const translations = {
    es: {
        menu: "Menu",
        home: "Inicio",
        about: "Quiénes Somos",
        products: "Nuestros Productos",
        benefits: "Beneficios",
        contact: "Contáctanos",
        experiments: "Experimentos",
        homeTitle: "Bienvenidos a NR-Zeo",
        homeDesc: "Expertos en zeolita natural para la agricultura, medio ambiente y la industria.",
        aboutTitle: "Quiénes Somos",
        aboutDesc: "Somos líderes en la producción y exportación de zeolita natural, con aplicaciones en agricultura, filtración de agua y la industria.",
        aboutInfo: `
            Nuestra empresa tiene como objetivo proporcionar soluciones modernas a los problemas de los agricultores, elevar el costo y la calidad de la producción, y obtener productos naturales sin recurrir al uso excesivo de fertilizantes químicos, lo que a su vez daña el suelo y el medio ambiente.
            <br><br>
            * Desde 2018, nuestra empresa ha realizado docenas de experimentos de laboratorio y de campo para diferentes usos de la toba volcánica en colaboración con numerosos establecimientos de investigación y universidades (Bagdad, Samawa, Salah Al Din, Koufah y Al Anbar). Se realizaron muchos estudios para tesis de maestría y doctorado.
            <br><br>
            * Estos estudios demostraron el éxito de la utilización de la toba volcánica en los experimentos de laboratorio en diferentes campos. Luego, pasamos a experimentos de campo con agricultores y empresas agrícolas especializadas, que produjeron resultados idénticos a los estudios locales e internacionales, y en algunos casos, incluso superaron los resultados esperados.
        `,
        productsTitle: "Nuestros Productos",
        productsDesc: "Ofrecemos zeolita en diferentes formatos: granular, polvo y en pellets.",
        productsInfo: "Nuestros productos son 100% naturales y están diseñados para satisfacer las necesidades de agricultores, industrias y proyectos ambientales.",
        benefitsTitle: "Beneficios de la Zeolita",
        benefit1: "Mejora la fertilidad del suelo.",
        benefit2: "Aumenta la retención de agua.",
        benefit3: "Reduce la contaminación ambiental.",
        benefit4: "Optimiza el uso de fertilizantes y nutrientes.",
        benefitsInfo: "La zeolita es un mineral versátil que ofrece múltiples beneficios tanto para la agricultura como para la industria y el medio ambiente.",
        contactTitle: "Contáctanos",
        contactInfo: `
            <p><strong>Sr. Husain Elayan:</strong> +964 784 158 1067</p>
            <p><strong>Ing. Ahmad Al Hamdani:</strong> +964 780 387 0016</p>
            <p><strong>Bagdad</strong></p>
        `,
        submit: "Enviar",
        rights: "Todos los derechos reservados.",
        experimentsTitle: "Experimentos de Campo",
        experimentsDesc: "Hemos realizado numerosos experimentos de campo con zeolita en diferentes cultivos, obteniendo resultados significativos en la mejora de la calidad y el rendimiento.",
        experiment1Title: "Proyecto Al-Ferdous - Patatas Lady Rosetta",
        experiment1Desc: "En este experimento, comparamos el crecimiento de patatas cultivadas con y sin zeolita. Los resultados mostraron una mejora del 170% en la calidad general de las patatas cultivadas con zeolita.",
        experiment1Image1: "Patatas con Zeolita",
        experiment1Image2: "Patatas sin Zeolita",
        experiment2Title: "Granja Rabeea - Patatas Almendra",
        experiment2Desc: "En este experimento, se cultivaron patatas Almendra con y sin zeolita. Las patatas cultivadas con zeolita mostraron una mejor forma, peso y tamaño, además de una mejora notable en los tallos y hojas.",
        experiment2Image1: "Patatas con Zeolita",
        experiment2Image2: "Patatas sin Zeolita"
    },
    en: {
        menu: "Menu",
        home: "Home",
        about: "About Us",
        products: "Our Products",
        benefits: "Benefits",
        contact: "Contact Us",
        experiments: "Experiments",
        homeTitle: "Welcome to NR-Zeo",
        homeDesc: "Experts in natural zeolite for agriculture, environment, and industry.",
        aboutTitle: "About Us",
        aboutDesc: "We are leaders in the production and export of natural zeolite, with applications in agriculture, water filtration, and industry.",
        aboutInfo: `
            Our company aims to provide modern solutions to farmers' problems, elevate production cost and quality, and acquire natural produce without resorting to excessive use of chemical fertilizers, which in turn damages the soil and the environment.
            <br><br>
            * Since 2018, our company conducted dozens of lab and field experiments for different uses for the Volcanic Tuff in cooperation with numerous research establishments and universities (Baghdad, Samawa, Salah Al Din, Koufah, and Al Anbar). Many studies were conducted for Msc. and PhD. theses.
            <br><br>
            * These studies proved the success of utilizing Volcanic Tuff in the lab experiments in different fields. Then we moved to field experiments for farmers and specialized agricultural companies, which produced identical results to the local and international studies, and in some instances, even surpassed the expected results.
        `,
        productsTitle: "Our Products",
        productsDesc: "We offer zeolite in different formats: granular, powder, and pellets.",
        productsInfo: "Our products are 100% natural and designed to meet the needs of farmers, industries, and environmental projects.",
        benefitsTitle: "Benefits of Zeolite",
        benefit1: "Improves soil fertility.",
        benefit2: "Increases water retention.",
        benefit3: "Reduces environmental pollution.",
        benefit4: "Optimizes the use of fertilizers and nutrients.",
        benefitsInfo: "Zeolite is a versatile mineral that offers multiple benefits for agriculture, industry, and the environment.",
        contactTitle: "Contact Us",
        contactInfo: `
            <p><strong>Mr. Husain Elayan:</strong> +964 784 158 1067</p>
            <p><strong>Eng. Ahmad Al Hamdani:</strong> +964 780 387 0016</p>
            <p><strong>Baghdad</strong></p>
        `,
        submit: "Submit",
        rights: "All rights reserved.",
        experimentsTitle: "Field Experiments",
        experimentsDesc: "We have conducted numerous field experiments with zeolite in different crops, achieving significant results in improving quality and yield.",
        experiment1Title: "Al-Ferdous Project - Lady Rosetta Potatoes",
        experiment1Desc: "In this experiment, we compared the growth of potatoes cultivated with and without zeolite. The results showed a 170% improvement in the overall quality of potatoes grown with zeolite.",
        experiment1Image1: "Potatoes with Zeolite",
        experiment1Image2: "Potatoes without Zeolite",
        experiment2Title: "Rabeea Farm - Almond Potatoes",
        experiment2Desc: "In this experiment, Almond potatoes were cultivated with and without zeolite. The potatoes grown with zeolite showed better shape, weight, and size, as well as a noticeable improvement in stems and leaves.",
        experiment2Image1: "Potatoes with Zeolite",
        experiment2Image2: "Potatoes without Zeolite"
    },
    ar: {
        menu: "القائمة",
        home: "الرئيسية",
        about: "من نحن",
        products: "منتجاتنا",
        benefits: "فوائد",
        contact: "اتصل بنا",
        experiments: "التجارب",
        homeTitle: "مرحبًا بكم في NR-Zeo",
        homeDesc: "خبراء في الزيوليت الطبيعي للزراعة والبيئة والصناعة.",
        aboutTitle: "من نحن",
        aboutDesc: "نحن رواد في إنتاج وتصدير الزيوليت الطبيعي، مع تطبيقات في الزراعة وترشيح المياه والصناعة.",
        aboutInfo: `
            تهدف شركتنا إلى تقديم حلول حديثة لمشاكل المزارعين، ورفع تكلفة وجودة الإنتاج، والحصول على منتجات طبيعية دون اللجوء إلى الاستخدام المفرط للأسمدة الكيميائية، مما يؤدي إلى إتلاف التربة والبيئة.
            <br><br>
            * منذ عام 2018، أجرت شركتنا العشرات من التجارب المعملية والميدانية لاستخدامات مختلفة للطف البركاني بالتعاون مع العديد من المؤسسات البحثية والجامعات (بغداد، السماوة، صلاح الدين، الكوفة، والأنبار). تم إجراء العديد من الدراسات لأطروحات الماجستير والدكتوراه.
            <br><br>
            * أثبتت هذه الدراسات نجاح استخدام الطف البركاني في التجارب المعملية في مجالات مختلفة. ثم انتقلنا إلى التجارب الميدانية مع المزارعين والشركات الزراعية المتخصصة، والتي أنتجت نتائج مطابقة للدراسات المحلية والدولية، وفي بعض الحالات، تجاوزت النتائج المتوقعة.
        `,
        productsTitle: "منتجاتنا",
        productsDesc: "نقدم الزيوليت في أشكال مختلفة: حبيبات، مسحوق، وأقراص.",
        productsInfo: "منتجاتنا طبيعية بنسبة 100٪ ومصممة لتلبية احتياجات المزارعين والصناعات والمشاريع البيئية.",
        benefitsTitle: "فوائد الزيوليت",
        benefit1: "يحسن خصوبة التربة.",
        benefit2: "يزيد من احتباس الماء.",
        benefit3: "يقلل من التلوث البيئي.",
        benefit4: "يحسن استخدام الأسمدة والعناصر الغذائية.",
        benefitsInfo: "الزيوليت هو معدن متعدد الاستخدامات يوفر فوائد متعددة للزراعة والصناعة والبيئة.",
        contactTitle: "اتصل بنا",
        contactInfo: `
            <p><strong>السيد حسين العليان:</strong> +964 784 158 1067</p>
            <p><strong>المهندس أحمد الحمداني:</strong> +964 780 387 0016</p>
            <p><strong>بغداد</strong></p>
        `,
        submit: "إرسال",
        rights: "جميع الحقوق محفوظة.",
        experimentsTitle: "التجارب الميدانية",
        experimentsDesc: "لقد أجرينا العديد من التجارب الميدانية باستخدام الزيوليت في محاصيل مختلفة، وحققنا نتائج كبيرة في تحسين الجودة والإنتاجية.",
        experiment1Title: "مشروع الفردوس - بطاطس ليدي روزيتا",
        experiment1Desc: "في هذه التجربة، قارنا نمو البطاطس المزروعة مع وبدون زيوليت. وأظهرت النتائج تحسنًا بنسبة 170٪ في الجودة العامة للبطاطس المزروعة بالزيوليت.",
        experiment1Image1: "بطاطس مع الزيوليت",
        experiment1Image2: "بطاطس بدون زيوليت",
        experiment2Title: "مزرعة الربيع - بطاطس اللوز",
        experiment2Desc: "في هذه التجربة، تمت زراعة بطاطس اللوز مع وبدون زيوليت. وأظهرت البطاطس المزروعة بالزيوليت شكلًا أفضل ووزنًا وحجمًا، بالإضافة إلى تحسن ملحوظ في السيقان والأوراق.",
        experiment2Image1: "بطاطس مع الزيوليت",
        experiment2Image2: "بطاطس بدون زيوليت"
    }
};

function setLanguage(lang) {
    // Validar idioma soportado
    if (!translations[lang]) {
        console.error(`Idioma no soportado: ${lang}`);
        return;
    }

    // Actualizar elementos traducibles
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        const content = translations[lang][key] || '';
        
        // Manejar diferentes tipos de elementos
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = content;
        } else if (element.tagName === 'OPTION') {
            element.textContent = content;
        } else if (element.tagName === 'IMG') {
            element.alt = content;
        } else {
            element.innerHTML = content;
        }
    });

    // Actualizar menú móvil
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.querySelectorAll('option').forEach(option => {
            const key = option.dataset.translate;
            option.textContent = translations[lang][key];
        });
    }
}

// 4. Navegación
function showTab(tabId) {
    // Validar existencia de la pestaña
    const tab = document.getElementById(tabId);
    if (!tab) {
        console.error(`Pestaña no encontrada: ${tabId}`);
        return;
    }

    // Ocultar todas las pestañas
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    
    // Mostrar pestaña seleccionada
    tab.classList.add('active');
    
    // Sincronizar menú móvil
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.value = `#${tabId}`;
    }
}

// 5. Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inicialización del carrusel
    showSlide(0);
    startAutoSlide();

    // Detectar idioma del navegador
    const userLang = navigator.language.slice(0, 2);
    if (translations[userLang]) {
        setLanguage(userLang);
    } else {
        setLanguage('es'); // Idioma por defecto
    }

    // Manejar cambios en el menú móvil
    document.querySelector('.mobile-menu').addEventListener('change', (e) => {
        const targetId = e.target.value.replace('#', '');
        showTab(targetId);
        window.scrollTo({
            top: document.getElementById(targetId).offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// 6. Swipe para móviles
let touchStartX = 0;
const swipeThreshold = 50;

document.querySelector('.carousel').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
}, { passive: true });

document.querySelector('.carousel').addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (Math.abs(deltaX) > swipeThreshold) {
        deltaX > 0 ? nextSlide() : prevSlide();
    }
}, { passive: true });
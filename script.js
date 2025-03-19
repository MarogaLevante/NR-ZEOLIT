let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Mostrar la primera imagen al cargar la página
showSlide(currentSlide);

// Función para mostrar la pestaña seleccionada
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// Traducciones
const translations = {
    es: {
        home: "Inicio",
        about: "Quiénes Somos",
        products: "Nuestros Productos",
        benefits: "Beneficios",
        contact: "Contáctanos",
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
        rights: "Todos los derechos reservados."
    },
    en: {
        home: "Home",
        about: "About Us",
        products: "Our Products",
        benefits: "Benefits",
        contact: "Contact Us",
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
        rights: "All rights reserved."
    },
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        products: "منتجاتنا",
        benefits: "فوائد",
        contact: "اتصل بنا",
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
        rights: "جميع الحقوق محفوظة."
    }
};

function setLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translations[language][key];
        } else {
            element.innerHTML = translations[language][key]; // Usamos innerHTML para permitir saltos de línea <br>
        }
    });
}

// Establecer el idioma por defecto al cargar la página
setLanguage('es');
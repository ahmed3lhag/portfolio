document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");

    const checkVisibility = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    };

    // التحقق عند التمرير
    window.addEventListener("scroll", checkVisibility);

    // التأكد من التأثير عند تحميل الصفحة
    checkVisibility();
});



;




document.addEventListener('DOMContentLoaded', function() {
    // Get the elements for the toggle button and the nav list
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    // Add click event to toggle the nav list visibility
    navToggle.addEventListener('click', function() {
        navList.classList.toggle('active'); // Toggle the 'active' class for the nav list
        navToggle.classList.toggle('active'); // Toggle the 'active' class for the nav toggle button
    });
});






document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const formData = new FormData(this);
    
    fetch(this.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    })
    .then(response => {
        if (response.ok) {
            alert("تم إرسال رسالتك بنجاح!");
            this.reset(); // إعادة تعيين النموذج
        } else {
            alert("حدث خطأ، حاول مرة أخرى!");
        }
    })
    .catch(error => alert("حدث خطأ، تحقق من الاتصال بالإنترنت!"));
});







// الاستماع لحدث إرسال النموذج
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل افتراضي

    // التحقق من CAPTCHA
    var recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length == 0) {
        alert("يرجى إكمال CAPTCHA.");
        return; // إذا لم يكمل المستخدم التحقق، لا يتم إرسال النموذج
    }

    // جمع البيانات المرسلة من النموذج
    const formData = new FormData(this);
    formData.append('g-recaptcha-response', recaptchaResponse); // إضافة CAPTCHA إلى البيانات المرسلة

    // إرسال البيانات عبر EmailJS
    emailjs.sendForm('your-service-id', 'your-template-id', formData)
    .then(function(response) {
        alert('تم إرسال الرسالة بنجاح!');
    }, function(error) {
        alert('حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة لاحقاً.');
    });
});

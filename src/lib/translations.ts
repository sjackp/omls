import { Translations } from '@/types';

export const translations: Record<'en' | 'ar', Translations> = {
  en: {
    languageName: "العربية",
    header: {
      navLinks: [
        { href: "#about", label: "About Us" },
        { href: "#programs", label: "Programs" },
        { href: "#why-us", label: "Why Choose Us" },
        { href: "#contact", label: "Contact" },
      ],
      enroll: "Enroll Now",
    },
    hero: {
      title: "Excellence in Education, Foundation for Life.",
      subtitle: "Nurturing bright minds within a vibrant, supportive, and inspiring community.",
      cta: "Start Your Journey",
    },
    about: {
      title: "Welcome to OM EL-Mo'mneen Language School",
      p1: "Established with a vision to provide world-class education, OM EL-Mo'mneen Language School blends rigorous academic programs with a focus on character development and multilingual proficiency. Our mission is to empower students to become critical thinkers, compassionate leaders, and global citizens.",
      p2: "We believe in a holistic approach, where learning extends beyond the classroom. Through a rich tapestry of extracurricular activities, sports, and arts, we ensure the well-rounded development of every child in a safe and nurturing environment."
    },
    programs: {
      title: "Our Academic Programs",
      subtitle: "Tailored stages of learning designed for academic and personal growth.",
      items: [
        { title: "Kindergarten", description: "A playful, inquiry-based start to a lifelong love of learning. Ages 3-5." },
        { title: "Primary School", description: "Building strong foundations in literacy, numeracy, and critical thinking. Grades 1-6." },
        { title: "Preparatory & Secondary", description: "Preparing students for higher education and future careers with a challenging curriculum. Grades 7-12." },
      ]
    },
    whyUs: {
      title: "Why Choose OM EL-Mo'mneen",
      subtitle: "Discover the advantages that make our school a premier choice for education.",
      features: [
        { title: "Expert Faculty", description: "Dedicated and experienced educators who are experts in their fields." },
        { title: "Holistic Curriculum", description: "Balanced approach to academics, arts, and athletics for well-rounded development." },
        { title: "Safe & Modern Campus", description: "State-of-the-art facilities designed for safety, collaboration, and innovation." },
      ]
    },
    testimonials: {
      title: "What Our Families Say",
      items: [
        { name: "The Hassan Family", quote: "OM EL-Mo'mneen has been a second home for our children. The teachers are incredibly supportive, and the bilingual program is outstanding. We've seen our kids blossom academically and socially." },
        { name: "The Youssef Family", quote: "The focus on character building alongside academics is what sets this school apart. Our daughter has become so much more confident and curious since she joined. We couldn't be happier." }
      ]
    },
    footer: {
      contactTitle: "OM EL-Mo'mneen Language School",
      address: "Nasr City, Cairo, Egypt",
      phone: "Phone: +20 100 123 4567",
      email: "Email: info@elomda-schools.edu.eg",
      linksTitle: "Quick Links",
      link1: "About Us",
      link2: "Programs",
      link3: "Admissions",
      ctaTitle: "Ready to Join Us?",
      ctaDescription: "Take the first step towards an exceptional education for your child.",
      ctaButton: "Enroll Today",
      copyright: "OM EL-Mo'mneen Language School. All Rights Reserved."
    },
    modal: {
      title: "Enroll Today",
      subtitle: "Join the OM EL-Mo'mneen family and unlock your child's potential.",
      parentName: "Parent's Name",
      parentPlaceholder: "e.g., Ahmed Mostafa",
      childName: "Child's Name",
      childPlaceholder: "e.g., Fatima Ahmed",
      grade: "Grade/Year",
      gradePlaceholder: "e.g., Grade 3, Year 2",
      department: "Department (Qesm)",
      departmentPlaceholder: "Select department",
      departmentArabic: "Arabic",
      departmentLanguages: "Languages",
      email: "Email Address",
      emailPlaceholder: "you@example.com",
      phone: "Phone Number",
      phonePlaceholder: "01xxxxxxxxx",
      submit: "Submit Application",
      successMessage: "Thank you for registering! We will be in touch shortly."
    }
  },
  ar: {
    languageName: "English",
    header: {
      navLinks: [
        { href: "#about", label: "من نحن" },
        { href: "#programs", label: "برامجنا" },
        { href: "#why-us", label: "لماذا نحن" },
        { href: "#contact", label: "تواصل معنا" },
      ],
      enroll: "سجل الآن",
    },
    hero: {
      title: "التميز في التعليم، أساس للحياة.",
      subtitle: "نرعى العقول اللامعة في مجتمع نابض بالحياة وداعم وملهم.",
      cta: "ابدأ رحلتك",
    },
    about: {
      title: "مرحباً بكم في مدارس أم المؤمنين للغات",
      p1: "تأسست مدارس أم المؤمنين للغات برؤية تهدف إلى توفير تعليم عالمي المستوى، حيث تمزج بين البرامج الأكاديمية الصارمة والتركيز على تنمية الشخصية والكفاءة متعددة اللغات. مهمتنا هي تمكين الطلاب ليصبحوا مفكرين نقديين وقادة رحماء ومواطنين عالميين.",
      p2: "نحن نؤمن بنهج شمولي، حيث يمتد التعلم إلى ما هو أبعد من الفصول الدراسية. من خلال نسيج غني من الأنشطة اللاصفية والرياضة والفنون، نضمن التنمية الشاملة لكل طفل في بيئة آمنة ورعاية.",
    },
    programs: {
      title: "برامجنا الأكاديمية",
      subtitle: "مراحل تعليمية مصممة خصيصًا للنمو الأكاديمي والشخصي.",
      items: [
        { title: "رياض الأطفال", description: "بداية مرحة قائمة على الاستقصاء لحب التعلم مدى الحياة. الأعمار 3-5 سنوات." },
        { title: "المدرسة الابتدائية", description: "بناء أسس قوية في القراءة والكتابة والحساب والتفكير النقدي. الصفوف 1-6." },
        { title: "الإعدادي والثانوي", description: "إعداد الطلاب للتعليم العالي والمهن المستقبلية بمنهج دراسي مليء بالتحديات. الصفوف 7-12." },
      ]
    },
    whyUs: {
      title: "لماذا تختار مدارس أم المؤمنين",
      subtitle: "اكتشف المزايا التي تجعل مدرستنا الخيار الأول للتعليم.",
      features: [
        { title: "هيئة تدريس خبيرة", description: "معلمون متفانون وذوي خبرة وهم خبراء في مجالاتهم." },
        { title: "منهج شمولي", description: "نهج متوازن بين الجوانب الأكاديمية والفنية والرياضية لتنمية متكاملة." },
        { title: "حرم جامعي آمن وحديث", description: "مرافق على أحدث طراز مصممة للسلامة والتعاون والابتكار." },
      ]
    },
    testimonials: {
      title: "ماذا تقول عائلاتنا",
      items: [
        { name: "عائلة حسن", quote: "كانت مدارس أم المؤمنين بيتًا ثانيًا لأطفالنا. المعلمون داعمون بشكل لا يصدق، والبرنامج ثنائي اللغة رائع. لقد رأينا أطفالنا يزدهرون أكاديميًا واجتماعيًا." },
        { name: "عائلة يوسف", quote: "التركيز على بناء الشخصية إلى جانب التفوق الأكاديمي هو ما يميز هذه المدرسة. أصبحت ابنتنا أكثر ثقة وفضولًا منذ انضمامها. لا يمكننا أن نكون أكثر سعادة." }
      ]
    },
    footer: {
      contactTitle: "مدارس أم المؤمنين للغات",
      address: "مدينة نصر، القاهرة، مصر",
      phone: "الهاتف: 4567 123 100 20+",
      email: "البريد الإلكتروني: info@elomda-schools.edu.eg",
      linksTitle: "روابط سريعة",
      link1: "من نحن",
      link2: "برامجنا",
      link3: "القبول والتسجيل",
      ctaTitle: "هل أنت مستعد للانضمام إلينا؟",
      ctaDescription: "اتخذ الخطوة الأولى نحو تعليم استثنائي لطفلك.",
      ctaButton: "سجل اليوم",
      copyright: "مدارس أم المؤمنين للغات. جميع الحقوق محفوظة."
    },
    modal: {
      title: "سجل اليوم",
      subtitle: "انضم إلى عائلة مدارس أم المؤمنين وأطلق العنان لإمكانيات طفلك.",
      parentName: "اسم ولي الأمر",
      parentPlaceholder: "مثال: أحمد مصطفى",
      childName: "اسم الطالب",
      childPlaceholder: "مثال: فاطمة أحمد",
      grade: "الصف/السنة الدراسية",
      gradePlaceholder: "مثال: الصف الثالث، السنة الثانية",
      department: "القسم",
      departmentPlaceholder: "اختر القسم",
      departmentArabic: "عربي",
      departmentLanguages: "لغات",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@example.com",
      phone: "رقم الهاتف",
      phonePlaceholder: "01xxxxxxxxx",
      submit: "إرسال الطلب",
      successMessage: "شكراً لتسجيلك! سنتواصل معك قريباً."
    }
  }
};

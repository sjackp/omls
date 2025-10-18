import React, { useState, useEffect } from 'react';

// Helper to combine CSS classes
const cn = (...classes) => classes.filter(Boolean).join(' ');

// --- ICONS (Inline SVGs to replicate lucide-react) ---

const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

const GraduationCapIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const BookOpenIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
);

const ShieldCheckIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const UsersIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

// --- Language Content ---
const translations = {
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
            title: "Welcome to El-Omda Language Schools",
            p1: "Established with a vision to provide world-class education, El-Omda Language Schools blend rigorous academic programs with a focus on character development and multilingual proficiency. Our mission is to empower students to become critical thinkers, compassionate leaders, and global citizens.",
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
            title: "Why Choose El-Omda",
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
                { name: "The Hassan Family", quote: "El-Omda has been a second home for our children. The teachers are incredibly supportive, and the bilingual program is outstanding. We've seen our kids blossom academically and socially." },
                { name: "The Youssef Family", quote: "The focus on character building alongside academics is what sets this school apart. Our daughter has become so much more confident and curious since she joined. We couldn't be happier." }
            ]
        },
        footer: {
            contactTitle: "El-Omda Language Schools",
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
            copyright: "El-Omda Language Schools. All Rights Reserved."
        },
        modal: {
            title: "Enroll Today",
            subtitle: "Join the El-Omda family and unlock your child's potential.",
            parentName: "Parent's Name",
            parentPlaceholder: "e.g., Ahmed Mostafa",
            childName: "Child's Name",
            childPlaceholder: "e.g., Fatima Ahmed",
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
            title: "مرحباً بكم في مدارس العمدة للغات",
            p1: "تأسست مدارس العمدة للغات برؤية تهدف إلى توفير تعليم عالمي المستوى، حيث تمزج بين البرامج الأكاديمية الصارمة والتركيز على تنمية الشخصية والكفاءة متعددة اللغات. مهمتنا هي تمكين الطلاب ليصبحوا مفكرين نقديين وقادة رحماء ومواطنين عالميين.",
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
            title: "لماذا تختار مدارس العمدة",
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
                { name: "عائلة حسن", quote: "كانت مدارس العمدة بيتًا ثانيًا لأطفالنا. المعلمون داعمون بشكل لا يصدق، والبرنامج ثنائي اللغة رائع. لقد رأينا أطفالنا يزدهرون أكاديميًا واجتماعيًا." },
                { name: "عائلة يوسف", quote: "التركيز على بناء الشخصية إلى جانب التفوق الأكاديمي هو ما يميز هذه المدرسة. أصبحت ابنتنا أكثر ثقة وفضولًا منذ انضمامها. لا يمكننا أن نكون أكثر سعادة." }
            ]
        },
        footer: {
            contactTitle: "مدارس العمدة للغات",
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
            copyright: "مدارس العمدة للغات. جميع الحقوق محفوظة."
        },
        modal: {
            title: "سجل اليوم",
            subtitle: "انضم إلى عائلة العمدة وأطلق العنان لإمكانيات طفلك.",
            parentName: "اسم ولي الأمر",
            parentPlaceholder: "مثال: أحمد مصطفى",
            childName: "اسم الطالب",
            childPlaceholder: "مثال: فاطمة أحمد",
            email: "البريد الإلكتروني",
            emailPlaceholder: "you@example.com",
            phone: "رقم الهاتف",
            phonePlaceholder: "01xxxxxxxxx",
            submit: "إرسال الطلب",
            successMessage: "شكراً لتسجيلك! سنتواصل معك قريباً."
        }
    }
};


// --- UI Components (shadcn/ui inspired) ---

const Button = ({ variant = 'default', size = 'default', className, children, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-600/90",
    destructive: "bg-red-500 text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-gray-200 text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return (
    <button className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props}>
      {children}
    </button>
  );
};

const Card = ({ className, children }) => (
  <div className={cn("rounded-xl border bg-white text-card-foreground shadow-lg transition-transform duration-300 hover:scale-105", className)}>
    {children}
  </div>
);

const CardHeader = ({ className, children }) => <div className={cn("flex flex-col space-y-1.5 p-6", className)}>{children}</div>;
const CardTitle = ({ className, children }) => <h3 className={cn("text-2xl font-semibold leading-none tracking-tight text-gray-800", className)}>{children}</h3>;
const CardDescription = ({ className, children }) => <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>;
const CardContent = ({ className, children }) => <div className={cn("p-6 pt-0", className)}>{children}</div>;
const CardFooter = ({ className, children }) => <div className={cn("flex items-center p-6 pt-0", className)}>{children}</div>;

const Input = ({ className, ...props }) => (
    <input className={cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)} {...props} />
);

const Label = ({ className, ...props }) => (
    <label className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)} {...props} />
);


// --- Registration Modal Component ---
const RegistrationModal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-md m-4 transform transition-all duration-300 scale-95 opacity-0 animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col space-y-1.5 p-6 border-b">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-800">{content.title}</h3>
                    <p className="text-sm text-gray-500">{content.subtitle}</p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); onClose(); alert(content.successMessage); }} className="p-6 space-y-4">
                     <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="parentName">{content.parentName}</Label>
                        <Input type="text" id="parentName" placeholder={content.parentPlaceholder} required />
                    </div>
                     <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="childName">{content.childName}</Label>
                        <Input type="text" id="childName" placeholder={content.childPlaceholder} required />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="email">{content.email}</Label>
                        <Input type="email" id="email" placeholder={content.emailPlaceholder} required />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="phone">{content.phone}</Label>
                        <Input type="tel" id="phone" placeholder={content.phonePlaceholder} required />
                    </div>
                    <div className="flex items-center pt-4">
                        <Button type="submit" className="w-full" size="lg">{content.submit}</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};


// --- Page Sections ---

const Header = ({ onRegisterClick, onLanguageChange, language, content }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLangButtonClick = () => {
        onLanguageChange(language === 'en' ? 'ar' : 'en');
    };

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <a href="#" className="flex items-center gap-2">
                    <GraduationCapIcon className="h-8 w-8 text-blue-600" />
                    <span className="text-xl font-bold text-gray-800">El-Omda Schools</span>
                </a>
                <nav className="hidden md:flex gap-6 items-center">
                    {content.navLinks.map(link => (
                        <a key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <Button onClick={handleLangButtonClick} variant="outline" size="sm">
                        {translations[language].languageName}
                    </Button>
                </nav>
                <div className="flex items-center gap-2 md:hidden">
                    <Button onClick={handleLangButtonClick} variant="outline" size="sm">
                         {translations[language].languageName}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <MenuIcon className="h-6 w-6" />
                    </Button>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <Button onClick={onRegisterClick}>
                        {content.enroll}
                    </Button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <nav className="flex flex-col px-4 py-4 space-y-2">
                         {content.navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-gray-700 hover:bg-gray-100 p-2 rounded-md">
                                {link.label}
                            </a>
                        ))}
                        <Button onClick={() => { onRegisterClick(); setIsMenuOpen(false); }} className="w-full mt-2">{content.enroll}</Button>
                    </nav>
                </div>
            )}
        </header>
    );
};

const Hero = ({ onRegisterClick, content }) => (
  <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
    <div className="absolute inset-0 bg-black/50 z-10"></div>
    <img 
      src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
      alt="Modern school building"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-20 container mx-auto px-4 animate-fade-in-up">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
        {content.title}
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-md">
        {content.subtitle}
      </p>
      <div className="mt-8">
        <Button onClick={onRegisterClick} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform transition hover:scale-105">
          {content.cta}
        </Button>
      </div>
    </div>
  </section>
);


const About = ({ content }) => (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">{content.title}</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {content.p1}
                    </p>
                    <p className="mt-4 text-gray-600">
                        {content.p2}
                    </p>
                </div>
                 <div className="rounded-xl overflow-hidden shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                        alt="Happy students graduating"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
);

const Programs = ({ content }) => {
    return (
        <section id="programs" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">{content.title}</h2>
                     <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">{content.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.items.map((program, index) => (
                        <Card key={program.title} className="overflow-hidden flex flex-col">
                            <img src={["https://images.unsplash.com/photo-1576765689493-5452331904b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"][index]} alt={program.title} className="w-full h-48 object-cover" />
                            <CardHeader>
                                <CardTitle>{program.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-gray-600">{program.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhyUs = ({ content }) => {
    const icons = [
        <UsersIcon className="h-8 w-8 text-blue-600"/>,
        <BookOpenIcon className="h-8 w-8 text-blue-600"/>,
        <ShieldCheckIcon className="h-8 w-8 text-blue-600"/>
    ];
    return (
        <section id="why-us" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">{content.title}</h2>
                     <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">{content.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {content.features.map((feature, index) => (
                        <div key={feature.title} className="p-8 bg-white rounded-xl shadow-lg">
                            <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                                {icons[index]}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                            <p className="mt-2 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Testimonials = ({ content }) => {
    const avatars = ["https://i.pravatar.cc/150?img=5", "https://i.pravatar.cc/150?img=8"];
    return (
         <section id="testimonials" className="py-16 md:py-24 bg-blue-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{content.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {content.items.map((t, index) => (
                        <div key={t.name} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                            <p className="italic text-lg">"{t.quote}"</p>
                            <div className="flex items-center mt-4">
                                <img src={avatars[index]} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white/50" />
                                <div className="ml-4">
                                    <p className="font-bold">{t.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const Footer = ({ onRegisterClick, content }) => (
    <footer id="contact" className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">{content.contactTitle}</h3>
                    <p className="text-sm">{content.address}</p>
                    <p className="text-sm mt-1">{content.phone}</p>
                    <p className="text-sm mt-1">{content.email}</p>
                </div>
                 <div>
                    <h3 className="text-lg font-bold text-white mb-2">{content.linksTitle}</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#about" className="hover:text-white">{content.link1}</a></li>
                        <li><a href="#programs" className="hover:text-white">{content.link2}</a></li>
                        <li><a href="#why-us" className="hover:text-white">{content.link3}</a></li>
                    </ul>
                </div>
                <div>
                     <h3 className="text-lg font-bold text-white mb-2">{content.ctaTitle}</h3>
                     <p className="text-sm mb-4">{content.ctaDescription}</p>
                     <Button onClick={onRegisterClick} className="bg-blue-600 hover:bg-blue-700 text-white">{content.ctaButton}</Button>
                </div>
            </div>
             <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} {content.copyright}</p>
            </div>
        </div>
    </footer>
);

// --- Main App Component ---

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [language, setLanguage] = useState('en');
    
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const handleLanguageChange = (lang) => setLanguage(lang);

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }, [language]);

    const content = translations[language];

    // Style tag to inject Arabic font. In a real app, this would be in the main index.html or CSS file.
    const fontStyle = `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
        body[dir="rtl"] {
            font-family: 'Cairo', sans-serif;
        }
    `;

    return (
        <>
        <style>{fontStyle}</style>
        <div className={cn("bg-white text-gray-700 antialiased", language === 'ar' && 'font-cairo')}>
            <Header 
                onRegisterClick={handleOpenModal} 
                onLanguageChange={handleLanguageChange}
                language={language}
                content={content.header}
            />
            <main>
                <Hero onRegisterClick={handleOpenModal} content={content.hero} />
                <About content={content.about} />
                <Programs content={content.programs} />
                <WhyUs content={content.whyUs} />
                <Testimonials content={content.testimonials} />
            </main>
            <Footer onRegisterClick={handleOpenModal} content={content.footer} />
            <RegistrationModal isOpen={isModalOpen} onClose={handleCloseModal} content={content.modal} />
        </div>
        </>
    );
}




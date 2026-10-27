const resumeUrl = new URL('../assets/resume.pdf', import.meta.url).href;
const profileImage = new URL('../assets/images/profile.png', import.meta.url).href;
const aligolpourImage = new URL('../assets/images/projects/aligolpour.png', import.meta.url).href;
const imanImage = new URL('../assets/images/projects/iman.png', import.meta.url).href;
const midwiferyImage = new URL('../assets/images/projects/midwifery.png', import.meta.url).href;
const modernsazehImage = new URL('../assets/images/projects/modernsazeh.png', import.meta.url).href;


export const profile = {
  name: 'سحر عشقی',
  title: 'توسعه‌دهنده فرانت‌اند',
  location: 'ایران، گیلان',
  email: 'sahareshghi77@gmail.com',
  github: 'https://github.com/sahar-eshghi',
  linkedin: 'https://www.linkedin.com/in/sahar-eshghii/',
  resumeUrl,
  image: profileImage,
  typewriterTexts: [
    'توسعه‌دهنده فرانت‌اند',
    'طراح رابط کاربری مدرن',
    'عاشق تجربه کاربری خوب',
  ],
  bio: 'طراحی وب سایت های مدرن، ریسپانسیو و سئو محور با تمرکز بر زیبایی، عملکرد و تجربه کاربری.',
  stats: [
    { value: '+1', label: 'سال تجربه' },
    { value: '+5', label: 'پروژه انجام‌شده' },
    { value: '+5', label: 'همکاری موفق' },
  ],
};

export const navItems = [
  { id: 'hero', label: 'خانه' },
  { id: 'skills', label: 'مهارت‌ها' },
  { id: 'experience', label: 'سوابق' },
  { id: 'projects', label: 'پروژه‌ها' },
  { id: 'contact', label: 'تماس' },
];

export const skillTags = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js',
  'Tailwind CSS', 'Vite', 'Git', 'Figma', 'REST API', 'PWA', 'تست نویسی',
];

export const skillBars = [
  { name: 'توسعه فرانت‌اند', level: 80 },
  { name: 'طراحی واکنش‌گرا', level: 85 },
  { name: 'جاوااسکریپت و تایپ‌اسکریپت', level: 80 },
  { name: 'بهینه‌سازی عملکرد', level: 85 },
  { name: 'دسترسی‌پذیری وب', level: 75 },
  { name: 'کار تیمی و چابک', level: 90 },
];

export const experiences = [
  {
    period: '۱۴۰1 — اکنون',
    role: 'حسابدار ',
    company: 'پلاس',
    description: 'با توانایی انجام امور مالی، ثبت و بررسی اسناد حسابداری، تهیه گزارش‌های مالی و ترجمه متون با دقت و رعایت اصول نگارشی. دارای مهارت در سازمان‌دهی اطلاعات، مدیریت امور اداری و برقراری ارتباط مؤثر.',
    tags: [],
  },
  {
    period: '1385 — اکنون',
    role: 'مترجم زبان انگلیسی ',
    company: 'private',
    description: 'مترجم تخصصی و عمومی با سابقهٔ طولانی در ترجمهٔ دقیق و روان متون تخصصی و عمومی، با رعایت اصول نگارشی، امانت‌داری در انتقال مفهوم و تحویل به‌موقع.',
    tags: [],
  },
];

const svgFont = 'Vazirmatn, Tahoma, sans-serif';

function projectImage(title, color1, color2) {
  return (
    'data:image/svg+xml,' +
    encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${color1}"/><stop offset="100%" style="stop-color:${color2}"/></linearGradient></defs><rect fill="url(#g)" width="400" height="240"/><text x="200" y="125" text-anchor="middle" fill="white" font-family="${svgFont}" font-size="20">${title}</text></svg>`)
  );
}

export const projects = [
  {
    title: 'پروژه نمونه اول',
    description: 'طراحی وب‌سایت کلینیک جراحی و زیبایی دکتر مجید علی‌گل‌پور با رویکردی لوکس، مدرن و واکنش‌گرا.',
    image: aligolpourImage,
    tags: ['React', 'TypeScript'],
    link: 'https://dr-aligolpour.ir',
  },
  {
    title: 'پروژه نمونه دوم',
    description: 'دفتر ایمان، دفتر املاک و مشاورهٔ حقوقی ملکی در لاهیجان، با خدماتی مثل خرید، فروش، رهن و اجاره، تنظیم قرارداد و بررسی اسناد ملکی.',
    image: imanImage,
    tags: ['React', 'TypeScript'],
    link: 'https://dr-aligolpour.ir',
  },
  {
    title: 'پروژه نمونه سوم',
    description: 'کلینیک مامایی، مرکزی تخصصی برای مراقبت از سلامت زنان در دوران بارداری، زایمان و پس از زایمان، با خدماتی مثل مشاوره، آموزش و پیگیری مادر و نوزاد.',
    image: midwiferyImage,
    tags: ['React', 'TypeScript'],
    link: 'https://dr-aligolpour.ir',
  },
  {
    title: 'پروژه نمونه چهارم',
    description: 'املاک مدرن سازه، مشاور املاک با رویکرد حرفه‌ای و مدرن برای خرید، فروش، رهن، اجارهٔ ملک و پیگیری امور ملکی.',
    image: modernsazehImage,
    tags: ['React', 'TypeScript'],
    link: 'https://dr-aligolpour.ir',
  },
];


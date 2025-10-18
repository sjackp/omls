# El-Omda Language Schools Website

A modern, responsive website for El-Omda Language Schools built with Next.js 14, TypeScript, and Tailwind CSS. Features bilingual support (English/Arabic) with RTL layout support.

## 🚀 Features

- **Bilingual Support**: Full English and Arabic language support
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with Tailwind CSS and custom components
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized with Next.js 14 and Image optimization
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Form Validation**: Client-side validation with error handling
- **Smooth Scrolling**: Smooth navigation between sections

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: Custom SVG icons
- **Forms**: Custom form components with validation
- **Images**: Next.js Image optimization

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── sections/         # Page sections
│   └── forms/            # Form components
├── lib/                  # Utility functions and contexts
├── types/                # TypeScript type definitions
└── styles/               # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd omda-school
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Language Support

The website supports two languages:

- **English (en)**: Default language
- **Arabic (ar)**: Full RTL support with Cairo font

Language switching is available in the header navigation.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb', // Blue
      secondary: '#6b7280', // Gray
    }
  }
}
```

### Fonts
- **English**: Inter (Google Fonts)
- **Arabic**: Cairo (Google Fonts)

### Content
All content is managed through the translations system in `src/lib/translations.ts`.

## 📝 Form Handling

The registration form includes:
- Real-time validation
- Error handling
- Success messages
- Form state management

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
npm run start
```

## 🔧 Development

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add it to the main page in `src/app/page.tsx`
3. Add translations if needed

### Adding New Languages

1. Add new language to `src/lib/translations.ts`
2. Update the language context
3. Add font support if needed

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, please contact the development team or create an issue in the repository.

---

Built with ❤️ for El-Omda Language Schools

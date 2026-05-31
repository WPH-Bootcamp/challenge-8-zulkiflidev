/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 *
 * Best Practices:
 * - Gunakan PascalCase untuk interface names
 * - Export semua interfaces agar bisa digunakan di file lain
 * - Group related interfaces bersama
 * - Add comments untuk explain complex types
 */

// ==========================================
// UI Component Types
// ==========================================

/**
 * Button variant types
 * Gunakan ini untuk Button component
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline';

/**
 * Example: Button Props
 * Uncomment dan sesuaikan dengan kebutuhan
 */
// export interface ButtonProps {
//   variant?: ButtonVariant;
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
// }

// ==========================================
// Section Data Types
// ==========================================

/**
 * TODO: Define interfaces untuk data yang digunakan di sections
 *
 * Contoh:
 * - ServiceItem untuk services section
 * - TeamMember untuk team section
 * - Testimonial untuk testimonials section
 * - dll.
 */

/**
 * Example: Service/Product Item
 */
// export interface ServiceItem {
//   id: number;
//   title: string;
//   description: string;
//   icon?: string;
//   image?: string;
// }

/**
 * Our Process (Section)
 */
export interface OurProcess {
  id: number;
  title: string;
  description: string;
}

/**
 * Smart IT Solutions (Section)
 */
export interface SmartITSolutions {
  id: number;
  title: string;
  description: string;
  icon: string;
}

/**
 * Build For Your Industry (Section)
 */
export interface BuildForYourIndustry {
  id: number;
  title: string;
  description: string;
  imageName: string;
}

/**
 * End-to-End Solutions (Section)
 */
export interface EndToEndStat {
  id: number;
  title: string;
  description: string;
}


/**
 * User Review (Section)
 */
export interface UserReview {
  id: number;
  score: number;
  review: string;
  authorName: string;
  authorRole: string;
  imageName: string;
}


/**
 * Portfolio / Projects (Section)
 */
export interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  imageName: string;
}

/**
 * User Review (Section)
 */
export interface FAQ {
  id: number;
  question: string;
  answer: string;
}



/**
 * Example: Team Member
 */
// export interface TeamMember {
//   id: number;
//   name: string;
//   position: string;
//   bio?: string;
//   image: string;
//   socialLinks?: {
//     linkedin?: string;
//     twitter?: string;
//     github?: string;
//   };
// }


/**
 * Example: Testimonial
 */
// export interface Testimonial {
//   id: number;
//   name: string;
//   position: string;
//   company: string;
//   message: string;
//   avatar?: string;
//   rating?: number;
// }

// ==========================================
// Navigation Types
// ==========================================

/**
 * Navigation menu item
 */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean; //jika true, maka ini adalah link keluar (external)  
}

/**
 * Social media link item
 */
export interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

// ==========================================
// Form Types (if needed)
// ==========================================

/**
 * Contact form data
 */
// export interface ContactFormData {
//   name: string;
//   email: string;
//   message: string;
// }

// ==========================================
// TODO: Add more types as needed!
// ==========================================

/**
 * Tips:
 * 1. Define types berdasarkan data yang kamu perlukan
 * 2. Lihat design Figma untuk understand data structure
 * 3. Make types reusable across components
 * 4. Use optional properties (?) untuk data yang tidak selalu ada
 * 5. Consider creating separate files jika types terlalu banyak
 *    Example: types/components.ts, types/data.ts, etc.
 */

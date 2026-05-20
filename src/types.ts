export interface PracticeArea {
  id: string;
  title: string;
  iconName: string; // Lucide icon name, dynamically resolved
  shortDesc: string;
  fullDesc: string;
  casesSummary: string;
  whyChooseUs: string[];
  processTimeline: string[];
  relatedCaseTypes: string[];
  caseExamples: {
    title: string;
    amount: string;
    description: string;
  }[];
}

export interface CaseResult {
  id: string;
  title: string;
  amount: string;
  category: string;
  summary: string;
  location: string;
  disclaimer?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  rating: number;
  caseType: string;
  text: string;
  isFeatured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "injury" | "consultation" | "costs" | "timeline" | "class-actions" | "insurance";
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[]; // List of paragraphs for high fidelity rendering
  publishDate: string;
  author: string;
  readTime: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

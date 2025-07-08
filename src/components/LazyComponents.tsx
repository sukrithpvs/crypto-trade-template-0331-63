
import { lazy } from 'react';

// Lazy load heavy components
export const LazyHowWeWorkSection = lazy(() => import('./HowWeWorkSection'));
export const LazyBenefitsSection = lazy(() => import('./BenefitsSection'));
export const LazyStatsSection = lazy(() => import('./StatsSection'));
export const LazyBlogPreview = lazy(() => import('./BlogPreview'));
export const LazyFAQSection = lazy(() => import('./FAQSection'));
export const LazyCTASection = lazy(() => import('./CTASection'));

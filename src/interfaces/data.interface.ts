// Types for CTA buttons
export type TCtaButtons = {
    text: string;
    link: string;
  };
  
  // Types for hero
  export type THero = {
    headline: string;
    subheadline: string;
    ctaButtons: TCtaButtons[];
  };
  
  // Types for features
  export type TFeatures = {
    title: string;
    description: string;
    icon: string;
  };
  
  // Types for testimonials
  export type TTestimonials = {
    name: string;
    feedback: string;
    avatar: string; // Corrected spelling from "avater" to "avatar"
  };
  
  // Types for pricing
  export type TPricing = {
    plan: string;
    price: string;
    features: string[];
  };
  
  // Types for UI data
  export type TUiData = {
    hero: THero;
    features: TFeatures[];
    testimonials: TTestimonials[];
    pricing: TPricing[];
  };
  
  // Correctly define the props type for the component
  export type TUiDataProps = {
    data: TUiData;
  };
// Types for ctaButtons
export type TCtaButtons = {
    text: string;
    link: string;
}


// Types for hero
export type THero = {
    headline: string;
    subheading: string;
    ctaButtons: TCtaButtons [];
}



// Types for features
export type TFeatures = {
    title: string;
    description: string;
    icon: string;
}


// Types for testimonials
export type TTestimonials = {
    name: string;
    feedback: string;
    avater: string;
}

// Types for priceing
export type TPricing = {
    plan: string;
    price: string;
    features: string[];
}

// Types for ui data
 export type TUiData  = {
    hero: THero;
    features: TFeatures[];
    testimonials: TTestimonials[];
    pricing: TPricing[];
}

export type TUiDataProps = {
    props: TUiData
}
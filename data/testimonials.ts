export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo: string | null;
  logo: string | null;
  result: string;
  project: string;
}

/**
 * No real client testimonials exist yet. Kept as a typed, empty array so
 * the <Testimonials> component can render real quotes the moment they
 * exist, without fabricating any in the meantime.
 */
export const testimonials: Testimonial[] = [];

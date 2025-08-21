import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is ArtisanLane?",
      answer: "ArtisanLane is a premium coffee subscription service that connects you with unique, high-quality coffees from artisanal roasters around the world. We use a combination of expert curation and AI technology to match you with coffees you'll love."
    },
    {
      question: "How does the subscription work?",
      answer: "You choose your preferred subscription plan, and we'll send you a curated selection of coffee at your desired frequency (e.g., every 2 or 4 weeks). You can pause, skip, or cancel your subscription at any time through your account page."
    },
    {
      question: "Can I choose the coffee I receive?",
      answer: "Our subscriptions are designed to help you discover new coffees. While you can't select specific bags for your subscription order, you can use our AI Recommender and provide feedback to help us tailor future shipments to your taste. You can also purchase individual bags of coffee from our shop at any time."
    },
    {
      question: "How does the AI Recommender work?",
      answer: "Our AI Recommender analyzes your taste preferences based on a short quiz and your ratings of coffees you've tried. It then predicts which coffees from our collection you are most likely to enjoy, personalizing your coffee discovery journey."
    },
    {
      question: "Where do you source your coffee from?",
      answer: "We partner with a network of independent, small-batch coffee roasters who are committed to ethical sourcing and exceptional quality. We feature coffees from all major growing regions across the globe."
    },
    {
      question: "What are your shipping policies?",
      answer: "We offer free standard shipping on all subscription orders within the continental United States. Orders for individual bags of coffee ship for a flat rate, with free shipping on orders over $50."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Frequently Asked Questions</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Find answers to common questions about our service.
            </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

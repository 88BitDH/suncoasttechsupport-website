import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does your remote-first support work?",
    answer: "We start with a free 15-minute consultation to determine whether remote or in-home support is the best fit. Many issues can be resolved remotely, which is faster and more cost-effective. If hands-on help is needed, we'll confirm that before scheduling an in-home visit. This approach is perfect for homeowners, work-from-home professionals, and short-term rental / Airbnb businesses.",
  },
  {
    question: "How quickly can you come to my home?",
    answer: "We usually have appointments available within 24-48 hours. For urgent issues, we often have same-day availability. Just give us a call and we'll do our best to fit you in.",
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Clearwater, Clearwater Beach, Palm Harbor, Dunedin, Safety Harbor, Largo, and surrounding Pinellas County communities. If you're not sure if we cover your area, just ask!",
  },
  {
    question: "Do I need to prepare anything before you arrive?",
    answer: "Nope! Just be home and have your computer accessible. If you have any passwords written down, have those handy. We'll take care of everything else.",
  },
  {
    question: "What if you can't fix my problem?",
    answer: "If we can't solve your issue during our visit, you don't pay. We'll be upfront about what's possible before we start any work.",
  },
  {
    question: "Are you really veteran-owned?",
    answer: "Yes! Our founder is a Desert Storm Army veteran with over 20 years of enterprise IT experience. We bring that same commitment to service and integrity to every home visit.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards and electronic payments. Cash and checks are not accepted. Payment is due at the end of your service visit. If multiple visits are required, this will be explained in advance during your consultation.",
  },
  {
    question: "Do you offer ongoing or monthly support?",
    answer: "Yes. Monthly support options are available after your first service visit.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-display-md md:text-display-lg text-foreground mb-4">
            Common Questions
          </h2>
          <p className="text-body-md text-muted-foreground">
            Everything you need to know before booking your visit.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

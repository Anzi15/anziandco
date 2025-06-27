import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Faq = {
    question: string;
    answer: string;
};

const defaultFaqs: Faq[] = [
    {
        question: "What is your service about?",
        answer: "We streamline SMB trade, making it easier and faster than ever.",
    },
    {
        question: "How can I contact support?",
        answer: "You can reach out to us anytime using the contact button above.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a free trial for all new users.",
    },
];

type FAQProps = {
    faqs?: Faq[];
};

function FAQ({ faqs = defaultFaqs }: FAQProps) {
    return (
        <div className="w-full py-20 lg:py-40 px-4">
            <div className="container mx-auto"></div>
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="flex gap-10 flex-col">
                        <div className="flex gap-4 flex-col">
                            <div>
                                <Badge variant="outline">FAQ</Badge>
                          </div>
<div className="flex gap-2 flex-col">
  <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
    Your Journey to Digital Success Begins Here
  </h4>
  <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
    Running a small business is challenging enough. Say goodbye to outdated and time-consuming processes. We’re here to simplify and accelerate your business operations, helping you focus on growth and success.
  </p>
</div>

                            <div className="">
                                <Link href="https://api.whatsapp.com/send/?phone=923248226367&text=Hey%2C+just+got+your+number+from+your+website+can+you+help+with+me...&type=phone_number&app_absent=0" className="" target="_blank">
                                <Button className="gap-4" variant="outline">
                                    Any questions? Reach out <PhoneCall className="w-4 h-4" />
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={"index-" + index}>
                                <AccordionTrigger className="text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-left">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
    );
}

export { FAQ };

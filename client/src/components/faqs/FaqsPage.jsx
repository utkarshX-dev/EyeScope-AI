import faqsData from "./faqsData";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FaqsPage() {
    return (
        <section className="max-w-2xl mx-auto py-16 px-4">
            <h1
                className="text-4xl sm:text-5xl font-extrabold mb-12 text-center tracking-tight"
                style={{
                    background: "linear-gradient(90deg, #0d6efd 0%, #228be6 60%, #66d9ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                }}
            >
                Frequently Asked Questions
            </h1>
            <div className="space-y-6">
                {faqsData.map((faq, index) => (
                    <Accordion
                        key={index}
                        className="!bg-background/80 !rounded-2xl !shadow-lg !border !border-border !transition-all !duration-200 hover:!shadow-xl"
                        disableGutters
                        elevation={0}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="text-blue-500" />}
                            className="!text-primary !font-semibold !text-lg !rounded-2xl !px-6 !py-4 !transition-all !duration-200 hover:!bg-muted/40"
                        >
                            <span className="flex items-center gap-2">
                                <span className="inline-block w-2 h-2 rounded-full bg-blue-500/80 mr-2" />
                                {faq.question}
                            </span>
                        </AccordionSummary>
                        <AccordionDetails className="!text-base !text-muted-foreground !bg-muted/10 !rounded-xl !px-6 !py-4">
                            {faq.answer}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </section>
    );
}

export default FaqsPage;
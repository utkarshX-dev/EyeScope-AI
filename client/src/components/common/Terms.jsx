import React from "react";

export default function Terms() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-foreground">
      <div className="bg-background border border-border rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center tracking-tight">Terms &amp; Conditions</h1>
        <p className="mb-6 text-muted-foreground text-base text-center">
          Please read these Terms and Conditions carefully. Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms.
        </p>
        <ol className="list-decimal list-inside space-y-6 text-base leading-relaxed">
          <li>
            <span className="font-semibold">Use of Service:</span> EyeScope AI is provided for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </li>
          <li>
            <span className="font-semibold">User Responsibilities:</span> You agree to use EyeScope AI in accordance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account and any activity that occurs under your account.
          </li>
          <li>
            <span className="font-semibold">Privacy:</span> We are committed to protecting your privacy. Please review our <a href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</a> to understand how we collect, use, and safeguard your information.
          </li>
          <li>
            <span className="font-semibold">Intellectual Property:</span> All content, features, and functionality on EyeScope AI, including text, graphics, logos, and software, are the exclusive property of EyeScope AI and its licensors.
          </li>
          <li>
            <span className="font-semibold">Limitation of Liability:</span> EyeScope AI and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
          </li>
          <li>
            <span className="font-semibold">Modifications:</span> We reserve the right to modify or replace these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the service after any changes constitutes acceptance of those changes.
          </li>
          <li>
            <span className="font-semibold">Governing Law:</span> These Terms are governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions.
          </li>
          <li>
            <span className="font-semibold">Contact Us:</span> If you have any questions about these Terms, please contact us at <a href="mailto:support@eyescope.ai" className="underline hover:text-primary transition-colors">support@eyescope.ai</a>.
          </li>
        </ol>
        <div className="mt-10 text-center text-sm text-muted-foreground">
          Last updated: July 2025
        </div>
      </div>
    </section>
  );
}

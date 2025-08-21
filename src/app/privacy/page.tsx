export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto prose prose-lg">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Privacy Policy</h1>
        <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>
          ArtisanLane ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2 className="text-2xl font-headline font-bold mt-8">Information We Collect</h2>
        <p>
          We may collect personal information from you in a variety of ways, including when you register on the site, place an order, subscribe to our newsletter, or fill out a form. This information may include your name, email address, mailing address, phone number, and credit card information.
        </p>

        <h2 className="text-2xl font-headline font-bold mt-8">How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Process your transactions and manage your subscription.</li>
          <li>Personalize your experience and recommend products.</li>
          <li>Improve our website and customer service.</li>
          <li>Send periodic emails regarding your order or other products and services.</li>
        </ul>

        <h2 className="text-2xl font-headline font-bold mt-8">Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
        </p>

        <h2 className="text-2xl font-headline font-bold mt-8">Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, so long as those parties agree to keep this information confidential.
        </p>

        <h2 className="text-2xl font-headline font-bold mt-8">Changes to This Policy</h2>
        <p>
          We reserve the right to make changes to this Privacy Policy at any time. We will notify you about significant changes by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site.
        </p>
      </div>
    </div>
  )
}

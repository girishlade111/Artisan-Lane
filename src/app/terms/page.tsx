export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto prose prose-lg">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Terms of Service</h1>
        <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <h2 className="text-2xl font-headline font-bold mt-8">1. Agreement to Terms</h2>
        <p>
          By using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>

        <h2 className="text-2xl font-headline font-bold mt-8">2. Subscriptions and Billing</h2>
        <p>
          When you purchase a subscription, you authorize us to charge your payment method on a recurring basis. You can manage or cancel your subscription at any time from your account page. Prices for our products are subject to change without notice.
        </p>

        <h2 className="text-2xl font-headline font-bold mt-8">3. User Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
        </p>

        <h2 className="text-2xl font-headline font-bold mt-8">4. Prohibited Conduct</h2>
        <p>
          You agree not to use the service for any unlawful purpose or to solicit others to perform or participate in any unlawful acts.
        </p>

        <h2 className="text-2xl font-headline font-bold mt-8">5. Limitation of Liability</h2>
        <p>
          In no case shall ArtisanLane, our directors, employees, or affiliates be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.
        </p>

        <h2 className="text-2xl font-headline font-bold mt-8">6. Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions.
        </p>
      </div>
    </div>
  )
}

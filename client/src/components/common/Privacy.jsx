import { Link } from "react-router-dom";
import {
  Lock,
  ShieldCheck,
  Trash2,
  UserCheck,
  CloudOff,
  Globe,
  FileText,
  AlertTriangle,
  Cookie,
  Database,
  Image as LucideImage,
  Server,
  Users,
  ArrowRightLeft,
  Eye,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-10">
      <h1 className="text-4xl font-extrabold tracking-tight text-center mb-2">
        Privacy Policy
      </h1>
      <p className="text-lg leading-relaxed text-center mb-8">
        <span className="inline-flex items-center gap-2 font-semibold">
          <ShieldCheck className="inline w-6 h-6 text-primary" />
          Your privacy and medical data security are our top priorities.
        </span>
        <br />
        Learn how we protect your retinal images and personal information at
        EyeScope AI.
      </p>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" /> Overview
        </h2>
        <p>
          This Privacy Policy explains how we collect, use, protect, and handle
          your personal information and medical data when you use EyeScope AI.
          We are committed to maintaining the highest standards of data
          protection and medical privacy.
        </p>
      </section>

      {/* Information We Collect */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Database className="w-6 h-6 text-primary" /> Information We Collect
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-1 flex items-center gap-2">
              <LucideImage className="w-5 h-5 text-primary" /> Medical
              Information
            </h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>
                <Eye className="inline w-4 h-4 mr-1 text-primary" />
                Retinal Images: Digital images you upload for analysis
              </li>
              <li>
                <Server className="inline w-4 h-4 mr-1 text-primary" />
                Analysis Results: Disease detection and classification results
              </li>
              <li>
                <Users className="inline w-4 h-4 mr-1 text-primary" />
                Medical Recommendations: Treatment suggestions and next steps
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-1 flex items-center gap-2">
              <Server className="w-5 h-5 text-primary" /> Technical Information
            </h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Upload timestamps and session data</li>
              <li>System performance metrics</li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-muted-foreground mt-2">
          <span className="font-semibold">Important:</span> We{" "}
          <span className="font-bold text-red-600">DO NOT</span> collect or
          store personally identifiable information such as names, addresses, or
          medical record numbers unless explicitly provided by you.
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <UserCheck className="w-6 h-6 text-primary" /> How We Use Your
          Information
        </h2>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            <Eye className="inline w-4 h-4 mr-1 text-primary" />
            Medical Analysis: Processing retinal images to detect diseases
          </li>
          <li>
            <Users className="inline w-4 h-4 mr-1 text-primary" />
            Treatment Recommendations: Providing appropriate medical guidance
            and next steps
          </li>
          <li>
            <Server className="inline w-4 h-4 mr-1 text-primary" />
            Service Improvement: Enhancing our AI algorithms and diagnostic
            accuracy
          </li>
          <li>
            <ShieldCheck className="inline w-4 h-4 mr-1 text-primary" />
            Quality Assurance: Ensuring the reliability and safety of our
            analysis system
          </li>
        </ul>
      </section>

      {/* Data Protection & Security */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Lock className="w-6 h-6 text-primary" /> Data Protection &amp;
          Security
        </h2>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            <Lock className="inline w-4 h-4 mr-1 text-primary" />
            Encryption: All data is encrypted in transit and at rest using
            AES-256 encryption
          </li>
          <li>
            <Server className="inline w-4 h-4 mr-1 text-primary" />
            Secure Storage: Images are stored in HIPAA-compliant, secure cloud
            infrastructure
          </li>
          <li>
            <ShieldCheck className="inline w-4 h-4 mr-1 text-primary" />
            Access Control: Only authorized personnel can access your data
          </li>
          <li>
            <UserCheck className="inline w-4 h-4 mr-1 text-primary" />
            Data Anonymization: Uploaded images are automatically anonymized
          </li>
          <li>
            <Trash2 className="inline w-4 h-4 mr-1 text-primary" />
            Automatic Deletion: Images are deleted after 30 days unless you
            request otherwise
          </li>
        </ul>
      </section>

      {/* Data Retention & Deletion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Trash2 className="w-6 h-6 text-primary" /> Data Retention &amp;
          Deletion
        </h2>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            <span className="font-semibold">Automatic Deletion:</span> Uploaded
            images and results are deleted after 30 days from upload.
          </li>
          <li>
            <span className="font-semibold">Manual Deletion:</span> You can
            request immediate deletion of your data at any time by contacting
            our support team. Requests are processed within 48 hours.
          </li>
          <li>
            <span className="font-semibold">Research Data:</span> Anonymous,
            non-identifiable data may be retained for research purposes to
            improve our diagnostic algorithms. This data cannot be traced back
            to individual users.
          </li>
        </ul>
      </section>

      {/* Your Rights & Choices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <UserCheck className="w-6 h-6 text-primary" /> Your Rights &amp;
          Choices
        </h2>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            <Eye className="inline w-4 h-4 mr-1 text-primary" />
            Access: Request copies of your uploaded images and analysis results
          </li>
          <li>
            <Trash2 className="inline w-4 h-4 mr-1 text-primary" />
            Deletion: Request immediate deletion of your data
          </li>
          <li>
            <AlertTriangle className="inline w-4 h-4 mr-1 text-primary" />
            Correction: Request correction of any inaccurate information
          </li>
          <li>
            <ArrowRightLeft className="inline w-4 h-4 mr-1 text-primary" />
            Portability: Request transfer of your data to another service
          </li>
          <li>
            <CloudOff className="inline w-4 h-4 mr-1 text-primary" />
            Opt-out: Withdraw consent for data processing at any time
          </li>
        </ul>
      </section>

      {/* Information Sharing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <CloudOff className="w-6 h-6 text-primary" /> Information Sharing
        </h2>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            <span className="font-bold text-red-600">DO NOT</span> sell, trade,
            or rent your personal medical information to third parties.
          </li>
          <li>
            <span className="font-semibold">Medical Professionals:</span> With
            your explicit consent, we may share results with your healthcare
            provider.
          </li>
          <li>
            <span className="font-semibold">Legal Requirements:</span> When
            required by law or court order.
          </li>
          <li>
            <span className="font-semibold">Emergency Situations:</span> To
            protect your health and safety in critical situations.
          </li>
          <li>
            <span className="font-semibold">Service Providers:</span> With
            trusted partners who help us operate our service (under strict
            confidentiality agreements).
          </li>
        </ul>
      </section>

      {/* Medical Disclaimer */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" /> Medical Disclaimer
        </h2>
        <p>
          <span className="font-semibold">Important Medical Disclaimer:</span>{" "}
          EyeScope AI is designed to assist in medical diagnosis but should{" "}
          <span className="font-bold text-red-600">NOT</span> be used as a
          substitute for professional medical advice, diagnosis, or treatment.
          Always consult with qualified healthcare professionals for medical
          decisions.
        </p>
      </section>

      {/* Cookies & Tracking */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Cookie className="w-6 h-6 text-primary" /> Cookies &amp; Tracking
        </h2>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Essential Cookies: Required for basic site functionality</li>
          <li>Analytics: Anonymous usage statistics to improve our service</li>
          <li>Session Management: To maintain your upload session</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          You can disable cookies in your browser settings, but this may affect
          site functionality.
        </p>
      </section>

      {/* International Data Transfers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" /> International Data
          Transfers
        </h2>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            Your data may be processed in countries with different privacy laws.
            We ensure adequate protection through:
          </li>
          <li>Standard contractual clauses</li>
          <li>Adequacy decisions by regulatory authorities</li>
          <li>Certified data protection frameworks</li>
        </ul>
      </section>

      <div className="text-center pt-8">
        <Link to="/" className="text-primary font-semibold hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

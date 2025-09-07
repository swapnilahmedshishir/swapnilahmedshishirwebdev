import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Phone,
  MapPin,
  Mail,
  MessageSquare,
  User,
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// Floating Input Component
const FloatingInput = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
      <Icon className="w-5 h-5 text-gray-400" />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border border-gray-700/30 backdrop-blur-sm text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
    />
  </div>
);

// Floating Textarea Component
const FloatingTextarea = ({ value, onChange }) => (
  <div className="relative">
    <div className="absolute left-4 top-4">
      <MessageSquare className="w-5 h-5 text-gray-400" />
    </div>
    <textarea
      placeholder="Your Message"
      rows="5"
      value={value}
      onChange={onChange}
      required
      className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border border-gray-700/30 backdrop-blur-sm text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
    />
  </div>
);

// Contact Info Card Component
const ContactInfoCard = ({
  icon: Icon,
  title,
  content,
  color,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`group p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 ${className}`}
  >
    <div className="flex items-center gap-4">
      <div
        className={`p-3 rounded-xl bg-gradient-to-br ${color} bg-opacity-10 border ${color.replace(
          "text",
          "border"
        )} border-opacity-20 group-hover:${color.replace(
          "text",
          "bg"
        )} group-hover:bg-opacity-10 transition-all duration-300`}
      >
        <Icon
          className={`w-6 h-6 ${color} group-hover:scale-110 transition-transform`}
        />
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-gray-400 mt-1">{content}</p>
      </div>
    </div>
  </motion.div>
);

// Status Message Component
const StatusMessage = ({ status, type }) => (
  <AnimatePresence>
    {status && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`p-4 rounded-xl border ${
          type === "success"
            ? "bg-green-500/10 border-green-500/30 text-green-400"
            : "bg-red-500/10 border-red-500/30 text-red-400"
        } backdrop-blur-sm flex items-center gap-3`}
      >
        {type === "success" ? (
          <CheckCircle className="w-5 h-5" />
        ) : (
          <AlertCircle className="w-5 h-5" />
        )}
        <span>{status}</span>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [statusType, setStatusType] = useState("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append("access_key", "a2674604-2c40-496c-bede-23e96cd36f5d");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully! I'll get back to you soon.");
        setStatusType("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(result.message || "There was an error sending your message.");
        setStatusType("error");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      setStatusType("error");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "swapnilahmedshishir2018@gmail.com",
      color: "text-purple-400",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Wari, Dhaka-1203, Bangladesh",
      color: "text-blue-400",
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      content: "+880 1602-555023",
      color: "text-green-400",
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Typically within 24 hours",
      color: "text-amber-400",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0B1221] to-[#131C30] text-white relative overflow-hidden py-16 md:py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse-medium"></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-fast"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have a project in mind or want to discuss potential opportunities?
            I'm always open to new challenges and collaborations.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 text-lg">
                Feel free to reach out through any of these channels. I'm
                looking forward to hearing from you!
              </p>
            </div>

            {/* Updated Grid Layout - First card spans 2 columns on medium devices */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className={index === 0 ? "md:col-span-2" : ""}>
                  <ContactInfoCard {...info} />
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-amber-400" />
                <h4 className="font-semibold text-white">Quick Response</h4>
              </div>
              <p className="text-gray-400 text-sm">
                I prioritize all incoming messages and strive to respond within
                24 hours. For urgent matters, feel free to call or WhatsApp
                directly.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm shadow-2xl shadow-blue-500/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    icon={User}
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                  <FloatingInput
                    icon={Mail}
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <FloatingInput
                  icon={MessageSquare}
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />

                <FloatingTextarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Status Message */}
              <StatusMessage status={status} type={statusType} />
            </div>

            {/* Privacy Note */}
            <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/20">
              <p className="text-gray-400 text-sm text-center">
                Your information is secure and will only be used to respond to
                your inquiry.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

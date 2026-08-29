import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Flame,
  FileCheck2,
  Activity,
  ChevronRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Globe,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: ShieldCheck,
    image: "/images/process-safety.jpg",
    title: "Process Safety",
    slug: "/services/process-safety",
    description:
      "Systematic identification, evaluation and management of process hazards throughout the lifecycle of industrial facilities.",
    items: [
      "PHA",
      "HAZOP Studies",
      "HAZOP Revalidation",
      "HAZID",
      "What-If Analysis",
      "FMEA",
    ],
  },
  {
    number: "02",
    icon: Activity,
    image: "/images/risk-engineering.jpg",
    title: "Risk Engineering",
    slug: "/services/risk-engineering",
    description:
      "Engineering-based risk assessment methodologies designed to reduce major accident risk and strengthen safety barriers.",
    items: [
      "QRA",
      "LOPA",
      "SIL Verification",
      "Facility Siting",
      "Fire & Explosion Risk",
      "Bow Tie Analysis",
    ],
  },
  {
    number: "03",
    icon: Flame,
    image: "/images/fire-protection.jpg",
    title: "Fire Protection",
    slug: "/services/fire-protection",
    description:
      "Engineering assessment and planning of fire protection and emergency response systems for industrial facilities.",
    items: [
      "Fire Protection Review",
      "Fire Water Demand",
      "Fire & Gas Mapping",
      "Emergency Planning",
    ],
  },
  {
    number: "04",
    icon: FileCheck2,
    image: "/images/iso-consultancy.jpg",
    title: "ISO Consultancy",
    slug: "/services/iso-consultancy",
    description:
      "Management-system consultancy helping organizations implement, improve and maintain internationally recognized standards.",
    items: [
      "ISO 9001",
      "ISO 14001",
      "ISO 45001",
      "QHSE Documentation",
      "Internal Audits",
      "Certification Support",
    ],
  },
  {
    number: "05",
    icon: Factory,
    image: "/images/compliance-engineering.jpg",
    title: "Compliance & Engineering",
    slug: "/services/compliance-engineering",
    description:
      "Practical engineering support for regulatory compliance, asset integrity and operational risk management.",
    items: [
      "Compliance Audits",
      "Mechanical Integrity",
      "Management of Change",
      "Safety Training",
    ],
  },
];

const industries = [
  {
    number: "01",
    title: "Oil & Gas",
    description:
      "Safety and risk engineering solutions for upstream, midstream and downstream operations.",
  },
  {
    number: "02",
    title: "Petrochemical",
    description:
      "Process safety and risk assessment for complex petrochemical facilities.",
  },
  {
    number: "03",
    title: "Chemical",
    description:
      "Hazard identification and risk management for chemical processing environments.",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Engineering safety and compliance solutions for manufacturing operations.",
  },
  {
    number: "05",
    title: "Energy & Utilities",
    description:
      "Risk-based engineering support for critical energy and utility infrastructure.",
  },
  {
    number: "06",
    title: "Infrastructure",
    description:
      "Safety, compliance and risk engineering for infrastructure projects.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Define objectives, systems, hazards and project context.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Identify credible scenarios and evaluate associated risk.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Develop practical safeguards, controls and recommendations.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Support implementation, verification and continuous improvement.",
  },
];

const whyUs = [
  {
    number: "01",
    title: "Engineering-led thinking",
  },
  {
    number: "02",
    title: "Risk-based decision making",
  },
  {
    number: "03",
    title: "Standards & compliance focus",
  },
  {
    number: "04",
    title: "Practical implementation support",
  },
];

export default function Home() {
  return (
    <main>
      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="navbar">
        <div className="container nav-inner">
          <a href="/" className="brand" aria-label="Rising Solution Home">
            <span className="brand-mark">R</span>

            <span>
              <strong>RISING</strong>
              <small>SOLUTION</small>
            </span>
          </a>

          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#process">Approach</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-cta">
            Get in Touch
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="hero">
        <div className="hero-overlay" />

        <div className="container hero-content">
          <div className="hero-tag">
            <span />
            ENGINEERING • SAFETY • RISK
          </div>

          <h1>
            Engineering
            <br />
            <em>Safer Industries.</em>
          </h1>

          <p>
            Professional Process Safety, Risk Management, Fire Protection,
            ISO Consultancy and Engineering Compliance solutions for
            safety-critical industries.
          </p>

          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              Explore Services
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-outline">
              Discuss Your Project
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>01</strong>
              <span>Process Safety</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Risk Engineering</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Fire Protection</span>
            </div>

            <div>
              <strong>04</strong>
              <span>ISO & Compliance</span>
            </div>
          </div>
        </div>

        <div className="hero-coordinate">
          ENGINEERING • RISK • SAFETY
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section id="about" className="section about">
        <div className="container about-grid">
          <div>
            <div className="eyebrow">01 / WHO WE ARE</div>

            <h2>
              Engineering decisions
              <br />
              <span>built around safety.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p className="lead">
              Rising Solution is a professional engineering consultancy
              specializing in Process Safety Management, Risk Assessment,
              Fire Protection, ISO Certification, Compliance Audits and
              Industrial Safety Solutions.
            </p>

            <p>
              We help organizations identify hazards, understand risk,
              strengthen safeguards and improve operational resilience while
              aligning with international standards and accepted engineering
              practices.
            </p>

            <div className="about-points">
              <div>
                <CheckCircle2 size={18} />
                <span>Risk-based engineering methodology</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>International engineering practices</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Practical recommendations</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Lifecycle-focused safety thinking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">02 / OUR EXPERTISE</div>

              <h2>
                Engineering
                <br />
                <span>services.</span>
              </h2>
            </div>

            <p>
              From hazard identification to compliance assurance, our
              services address critical safety and engineering challenges
              across industrial operations.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <a
                  href={service.slug}
                  className="service-card"
                  key={service.number}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className="service-image">
                    <img
                      src={service.image}
                      alt={`${service.title} engineering service`}
                      loading="lazy"
                    />

                    <div className="service-image-overlay" />

                    <div className="service-image-number">
                      {service.number}
                    </div>

                    <div className="service-image-icon">
                      <Icon size={25} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="service-top">
                    <span>{service.number}</span>

                    <Icon
                      className="service-main-icon"
                      size={27}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="service-items">
                    {service.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="service-link">
                    Explore Service
                    <ChevronRight size={16} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING IMAGE BREAK
      ========================================================= */}

      <section className="image-break">
        <div className="container image-break-content">
          <div className="eyebrow">ENGINEERING WITH PURPOSE</div>

          <h2>
            Turning technical
            <br />
            <span>risk into informed action.</span>
          </h2>

          <p>
            Good engineering is not simply about identifying problems.
            It is about understanding consequences, evaluating safeguards
            and creating practical paths toward safer operations.
          </p>

          <a href="#contact" className="btn btn-primary">
            Talk to Our Team
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}

      <section id="industries" className="section industries">
        <div className="container">
          <div className="eyebrow">03 / INDUSTRIES</div>

          <div className="industry-heading">
            <h2>
              Built for
              <br />
              <span>high-consequence environments.</span>
            </h2>

            <p>
              Our engineering approach is designed for industries where
              operational reliability, process safety and compliance are
              fundamental business requirements.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map((industry) => (
              <a
                href="#contact"
                className="industry-card"
                key={industry.number}
                aria-label={`Discuss ${industry.title} solutions`}
              >
                <span>{industry.number}</span>

                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

                <ArrowRight size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section id="process" className="section process">
        <div className="container">
          <div className="eyebrow">04 / OUR APPROACH</div>

          <h2>
            A structured approach to
            <br />
            <span>engineering risk.</span>
          </h2>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div className="process-step" key={step.number}>
                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY RISING SOLUTION
      ========================================================= */}

      <section className="why-us">
        <div className="container why-grid">
          <div>
            <div className="eyebrow">05 / WHY RISING SOLUTION</div>

            <h2>
              Technical depth.
              <br />
              <span>Practical outcomes.</span>
            </h2>
          </div>

          <div className="why-list">
            {whyUs.map((item) => (
              <a
                href="#contact"
                key={item.number}
                aria-label={item.title}
              >
                <span>{item.number}</span>

                <strong>{item.title}</strong>

                <ArrowRight size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section id="contact" className="cta">
        <div className="container">
          <div className="eyebrow">06 / START A CONVERSATION</div>

          <h2>
            Have an engineering
            <br />
            <span>challenge?</span>
          </h2>

          <p>
            Tell us about your facility, project or safety challenge.
            Our team can help define the right engineering scope.
          </p>

          <div className="contact-details">
            {/* CONTACT NUMBERS */}

            <div className="contact-group">
              <h3>Contact Numbers</h3>

              <a href="tel:+61468491994">
                <Phone size={15} />
                <span>
                  <small>Australia</small>
                  +61 468 491 994
                </span>
              </a>

              <a href="tel:+966563904599">
                <Phone size={15} />
                <span>
                  <small>Saudi Arabia</small>
                  +966 56 390 4599
                </span>
              </a>

              <a href="tel:+923343068658">
                <Phone size={15} />
                <span>
                  <small>Pakistan</small>
                  +92 334 306 8658
                </span>
              </a>
            </div>

            {/* EMAIL */}

            <div className="contact-group">
              <h3>Email</h3>

              <a href="mailto:info@risingsolution.com.pk">
                <Mail size={15} />
                <span>info@risingsolution.com.pk</span>
              </a>

              <a href="mailto:risi_solution@gmail.com">
                <Mail size={15} />
                <span>risi_solution@gmail.com</span>
              </a>
            </div>

            {/* WEBSITE */}

            <div className="contact-group">
              <h3>Website</h3>

              <a
                href="https://www.risingsolution.com.pk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={15} />
                <span>www.risingsolution.com.pk</span>
              </a>
            </div>

            {/* OFFICES */}

            <div className="contact-group">
              <h3>Offices</h3>

              <div className="office">
                <strong>
                  <MapPin size={15} />
                  Australia Office
                </strong>

                <span>
                  Griffiths Ct, Dandenong North,
                  <br />
                  Melbourne, VIC 3175, Australia
                </span>
              </div>

              <div className="office">
                <strong>
                  <MapPin size={15} />
                  Pakistan Office
                </strong>

                <span>
                  A-86, Gulistana-e-Johar, Block 3,
                  <br />
                  Karachi, Pakistan
                </span>
              </div>
            </div>
          </div>

          <div className="cta-actions">
            <a
              href="mailto:info@risingsolution.com.pk"
              className="btn btn-primary"
            >
              Contact Rising Solution
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer>
        <div className="container footer-grid">
          {/* COMPANY */}

          <div>
            <a
              href="/"
              className="brand footer-brand"
              aria-label="Rising Solution Home"
            >
              <span className="brand-mark">R</span>

              <span>
                <strong>RISING</strong>
                <small>SOLUTION</small>
              </span>
            </a>

            <p>
              Engineering Safer Industries Through Innovation & Excellence.
            </p>
          </div>

          {/* CONTACT */}

          <div>
            <h4>Contact</h4>

            <a href="tel:+61468491994">
              <Phone size={15} />
              +61 468 491 994
            </a>

            <a href="tel:+966563904599">
              <Phone size={15} />
              +966 56 390 4599
            </a>

            <a href="tel:+923343068658">
              <Phone size={15} />
              +92 334 306 8658
            </a>

            <a href="mailto:info@risingsolution.com.pk">
              <Mail size={15} />
              info@risingsolution.com.pk
            </a>

            <a href="mailto:risi_solution@gmail.com">
              <Mail size={15} />
              risi_solution@gmail.com
            </a>
          </div>

          {/* OFFICES */}

          <div>
            <h4>Offices</h4>

            <div className="footer-office">
              <strong>Australia</strong>

              <span>
                Griffiths Ct, Dandenong North,
                <br />
                Melbourne, VIC 3175
              </span>
            </div>

            <div className="footer-office">
              <strong>Pakistan</strong>

              <span>
                A-86, Gulistana-e-Johar,
                <br />
                Block 3, Karachi
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h4>Quick Links</h4>

            <a href="#about">About</a>

            <a href="#services">Services</a>

            <a href="#industries">Industries</a>

            <a href="#process">Approach</a>

            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 Rising Solution. All Rights Reserved.
          </span>

          <span>
            Process Safety • Risk • Engineering
          </span>
        </div>
      </footer>
    </main>
  );
}
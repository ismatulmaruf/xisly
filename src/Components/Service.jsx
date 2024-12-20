import { Link } from "react-router-dom";

const ServiceArea = () => {
  return (
    <section className="service-area z-index section-padding bg-black px-4 md:px-12 lg:px-20 py-10">
      <div className="container mx-auto">
        <div className="section-title-wrap mb-12">
          <div className="paragraph-regular text-white text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Services we offer
            </h2>
          </div>
        </div>
        <div className="service-item-wrap space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group service-item border border-gray-700 rounded-lg p-4 md:p-6 lg:p-8 overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="service-heading text-yellow-400 text-xl md:text-2xl font-bold flex justify-between items-center cursor-pointer">
                <span>{service.title}</span>
                <span className="main-color">{`0${index + 1}`}</span>
              </div>
              <div className="service-content hidden group-hover:flex flex-col md:flex-row md:space-x-6 mt-4 animate-fade-in items-center justify-center">
                <div className="service-text flex-grow">
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="primary-button bg-yellow-500 text-black py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition-all"
                  >
                    Learn more
                  </Link>
                </div>

                <div className="service-thumbnail w-full md:w-1/3 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// const services = [
//   {
//     title: "UX Design",
//     description:
//       "Exceptional UX isn't just design; it's a journey that builds trust, forges loyalty, and makes your brand unforgettable. UX design goes beyond aesthetics to ensure every interaction with your product feels intuitive and delightful. From user research and wireframing to prototyping and testing, we craft seamless experiences that enhance usability and increase user satisfaction. A well-executed UX design not only boosts engagement but also ensures that your audience develops a genuine connection with your brand.",
//     image:
//       "https://cdn.prod.website-files.com/643f7373d3f6653157617339/65841184a35d6d13a2dbd247_mvp.webp",
//     link: "/services/ui-ux-design",
//   },
//   {
//     title: "Branding",
//     description:
//       "Effective branding isn't just about logos and colors; it's about creating a lasting impression that distinguishes your business. We help you define your brand's voice, story, and values. Through strategic design and messaging, we craft a brand identity that resonates with your target audience and sets you apart in the marketplace. Whether you're launching a new business or revitalizing an existing brand, our approach ensures consistency across all platforms, fostering recognition and trust.",
//     image:
//       "https://cdn.prod.website-files.com/643f7373d3f6653157617339/65b8f91a1c17b21ef98c4a4a_branding.webp",
//     link: "/services/brand-design",
//   },
//   {
//     title: "Webflow",
//     description:
//       "In today's digital landscape, a well-structured website is essential. Webflow enables us to build scalable, high-performance websites. With Webflow, we create dynamic, visually stunning websites that are fully customizable and responsive. By combining design and development in one platform, Webflow allows for faster iteration and seamless integration with CMS, e-commerce, and third-party tools. This empowers businesses to launch and manage their websites effortlessly, while maintaining full control over design, content, and performance.",
//     image:
//       "https://cdn.prod.website-files.com/643f7373d3f6653157617339/65224148d4a92133be256fb4_Mobile%20App.webp",
//     link: "/services/webflow-design-development",
//   },
//   {
//     title: "SaaS Design",
//     description:
//       "SaaS UX design matters most because it directly impacts user satisfaction, adoption, and retention. Our SaaS design services focus on delivering seamless user experiences that maximize functionality while maintaining simplicity. We understand that SaaS products need to be intuitive, scalable, and user-friendly, which is why we prioritize ease of use and user-centered design. Whether you’re building a dashboard or a complex workflow, we ensure that your SaaS application delights users and encourages long-term engagement.",
//     image:
//       "https://cdn.prod.website-files.com/643f7373d3f6653157617339/658411f2108d42fc5ff614a5_Frame%201171277531.webp",
//     link: "/services/saas-design",
//   },
//   {
//     title: "Web Design",
//     description:
//       "Our professional web design solutions are creative and functional to create stunning websites. We combine creativity and functionality to build websites that don’t just look good but also work flawlessly. Our web design process is focused on understanding your business goals, user needs, and the latest design trends. By using responsive design techniques, we ensure that your website looks great and performs excellently across all devices, from mobile phones to desktops, while driving conversions and engagement.",
//     image:
//       "https://cdn.prod.website-files.com/643f7373d3f6653157617339/6584124ada6fd855afc906de_Frame%201171277531.webp",
//     link: "/services/mvp-development",
//   },
// ];

const services = [
  {
    title: "Web Development",
    description:
      "Build responsive and high-performing websites that meet the latest industry standards. Our web development services focus on delivering scalable, secure, and optimized solutions tailored to your needs. From front-end design to back-end functionality, we ensure your website stands out while offering a seamless user experience.",
    image:
      "https://cdn.prod.website-files.com/643f7373d3f6653157617339/65841184a35d6d13a2dbd247_mvp.webp",
    link: "/services/web-development",
  },
  {
    title: "App Development",
    description:
      "Create powerful mobile applications for iOS, Android, and cross-platforms. We specialize in designing user-friendly apps with robust functionality to provide an unparalleled experience for your users. Whether it's a mobile game, utility, or enterprise-level application, we deliver results that align with your business goals.",
    image:
      "https://cdn.prod.website-files.com/643f7373d3f6653157617339/65b8f91a1c17b21ef98c4a4a_branding.webp",
    link: "/services/app-development",
  },
  {
    title: "Software Development",
    description:
      "Develop custom software solutions tailored to your business requirements. Our expertise includes enterprise software, desktop applications, and cloud-based systems. From idea to deployment, we ensure that your software is efficient, scalable, and aligned with your objectives, streamlining processes and driving innovation.",
    image:
      "https://cdn.prod.website-files.com/643f7373d3f6653157617339/65224148d4a92133be256fb4_Mobile%20App.webp",
    link: "/services/software-development",
  },
  {
    title: "SaaS Development",
    description:
      "Transform your vision into a successful SaaS product with our expert development services. We design scalable, secure, and feature-rich solutions tailored to meet the needs of your users. Whether it's a subscription-based service or a complex SaaS platform, we ensure a seamless experience that drives growth and engagement.",
    image:
      "https://cdn.prod.website-files.com/643f7373d3f6653157617339/658411f2108d42fc5ff614a5_Frame%201171277531.webp",
    link: "/services/saas-development",
  },
  {
    title: "API Management",
    description:
      "Streamline your workflows and integrations with our API management services. From developing custom APIs to optimizing and maintaining existing ones, we ensure your systems communicate efficiently. Our solutions enable scalability, security, and ease of use, empowering your business with seamless connectivity.",
    image:
      "https://cdn.prod.website-files.com/643f7373d3f6653157617339/6584124ada6fd855afc906de_Frame%201171277531.webp",
    link: "/services/api-management",
  },
  {
    title: "Cyber Security",
    description:
      "Protect your digital assets with our comprehensive cybersecurity solutions. From vulnerability assessments to implementing robust defenses, we help safeguard your systems, data, and users against cyber threats. Stay secure with our proactive monitoring and cutting-edge security practices.",
    image:
      "https://cdn.prod.website-files.com/643f7373d3f6653157617339/658411f2108d42fc5ff614a5_Frame%201171277531.webp",
    link: "/services/cyber-security",
  },
  {
    title: "Learning",
    description:
      "Empower your team with our learning and training solutions. We provide tailored courses, workshops, and materials designed to upskill your workforce in areas such as technology, software usage, and cybersecurity. Foster growth and innovation within your organization with our expertise.",
    image:
      "https://cdn.prod.website-files.com/643f7373d3f6653157617339/6584124ada6fd855afc906de_learning.webp",
    link: "/services/learning",
  },
];

export default ServiceArea;

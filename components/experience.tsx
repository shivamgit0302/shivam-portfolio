"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Aimedis",
    location: "Dubai",
    period: "June 2022 - Present",
    responsibilities: [
      "Architected and built scalable REST APIs in Next.js and Django to connect 3D metaverse functionalities with web platforms, following SDLC and Agile methods for efficient development cycles.",
      "Designed and implemented database schemas and optimized queries for PostgreSQL to ensure high performance and data integrity.",
      "Integrated Stripe and MetaMask for a credit-based system, allowing users to top-up using traditional and cryptocurrency payments, enhancing payment flexibility.",
      "Built a real-time chat backend with Agora on AWS and implemented a pixel streaming solution on AWS GPU instances.",
      "Collaborated with frontend developers to ensure seamless integration between backend systems and user interfaces.",
    ],
    technologies:
      "JavaScript, Next.js, React.js, Python, Django, Node.js, AWS EC2, Route 53, Load balancers, Postgres",
  },
  {
    title: "Software Engineer",
    company: "Baryons Software Solutions",
    location: "Bangalore",
    period: "March 2020 - June 2022",
    responsibilities: [
      "Developed robust server applications and APIs using Python, Django, and Django Rest Framework to power various client applications.",
      "Designed and optimized database schemas and queries for MySQL and MongoDB to ensure efficient data storage and retrieval.",
      "Maintained and troubleshot Django projects, ensuring timely delivery within Agile sprint cycles.",
      "Contributed to frontend development using JavaScript, jQuery, and AJAX to enhance user experience and functionality.",
    ],
    technologies:
      "Python, Django, Django Rest Framework, JavaScript, jQuery, AJAX, Nginx, MySQL, MongoDB",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've worked with.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 border-b">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center">
                        <Briefcase className="h-5 w-5 text-primary mr-2" />
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center text-sm text-muted-foreground">
                      <span className="font-medium">{exp.company}</span>
                      <span className="hidden md:block mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-3">
                      Responsibilities:
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t">
                      <h4 className="text-lg font-semibold mb-2">
                        Technologies:
                      </h4>
                      <p className="text-muted-foreground">
                        {exp.technologies}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

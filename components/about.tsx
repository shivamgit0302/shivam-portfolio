"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary bg-muted">
              {/* Using an avatar illustration from DiceBear API */}
              <Image
                src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Alexander&beardProbability=80&eyesColor[]&glasses=dark02,dark03,dark04,dark05,dark06,dark07,light01,light02,light03,light04,light05,light06,light07,dark01&glassesProbability=25&hair[]"
                alt="Shivam Tiwari Avatar"
                fill
                className="object-cover p-2"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Software Engineer</h3>
                <p className="text-muted-foreground mb-4">
                  I'm a passionate Software Engineer with over 4 years of
                  experience, specializing in backend development. Currently
                  working at Aimedis in Dubai, I excel in building robust server
                  applications using Django, Python, Node.js, and various
                  database technologies, while also being proficient in frontend
                  development with React and Next.js.
                </p>
                <p className="text-muted-foreground mb-4">
                  My core expertise includes designing and implementing RESTful
                  APIs, optimizing database performance, and architecting
                  scalable backend systems. I complement these backend skills
                  with the ability to create clean, functional user interfaces
                  that deliver great user experiences.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="font-medium">Name:</p>
                    <p className="text-muted-foreground">Shivam Tiwari</p>
                  </div>
                  <div>
                    <p className="font-medium">Location:</p>
                    <p className="text-muted-foreground">Dubai, UAE</p>
                  </div>
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p className="text-muted-foreground">+971544769043</p>
                    <p className="text-muted-foreground">+919554694437</p>
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-muted-foreground break-all">
                      shivamtiwari100@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

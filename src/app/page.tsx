"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import styles from "../../styles/home.module.scss";

const ServiceItem = ({ service, frame, setFrame, stylesClass, zIndex }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "tween",
      stiffness: 260,
      damping: 20,
    }}
    whileHover={{ scale: 2.5, rotate: 360 }}
    onMouseOver={() => setFrame(true)}
    onMouseOut={() => setFrame(false)}
    style={{ zIndex: zIndex }}
  >
    {frame ? (
      <div className={`${styles.flower} ${stylesClass}`}>
        <p className="text-[8px] text-white font-bold max-w-[180px]">
          {service.description}
        </p>
      </div>
    ) : (
      <div className={`${styles.flower} ${stylesClass}`}>
        <p className="text-lg text-white font-bold">{service.title}</p>
      </div>
    )}
  </motion.div>
);

export default function Home() {
  const [frameOne, setFrameOne] = useState(false);
  const [frameTwo, setFrameTwo] = useState(false);
  const [frameThree, setFrameThree] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);

  const services = [
    {
      title: "Research & Analysis",
      description:
        "Through a network of researchers and experts, we specialize in comprehensive research and analysis services designed to empower our clients with critical insights and strategic clarity. We conduct quantitative and qualitative research on political settlements, security landscape, local governance, and elections. By leveraging data-driven methodologies, we uncover actionable insights that guide informed decision-making and drive success.",
    },
    {
      title: "Data & Visualization",
      description:
        "Transforming raw data into actionable insights is at the heart of what we do. Our data analysis experts excel in cleaning, processing, and analyzing complex datasets, employing advanced statistical techniques and predictive modeling. Through captivating visualizations such as interactive dashboards, charts, and graphs, we simplify complex information, enabling our clients to grasp insights quickly and make informed decisions with confidence.",
    },
    {
      title: "Stakeholder Mapping",
      description:
        "Understanding and engaging stakeholders effectively is crucial in today's interconnected business landscape. We specialize in stakeholder mapping services that identify key individuals, organizations, and communities relevant to your initiatives. By analyzing their interests, influence, and relationships, we help you anticipate reactions, align strategies, and cultivate meaningful partnerships.",
    },
  ];

  return (
    <div className="px-2 text-black">
      <main className="flex flex-1 flex-col md:flex-row gap-x-[-20px] items-center py-2">
        <ServiceItem
          service={services[0]}
          frame={frameOne}
          setFrame={(state) => {
            setFrameOne(state);
            setHoveredIndex(state ? 0 : null);
          }}
          stylesClass={styles.flower1}
          zIndex={hoveredIndex === 0 ? 1 : 0}
        />
        <ServiceItem
          service={services[1]}
          frame={frameTwo}
          setFrame={(state) => {
            setFrameTwo(state);
            setHoveredIndex(state ? 1 : null);
          }}
          stylesClass={styles.flower2}
          zIndex={hoveredIndex === 1 ? 1 : 0}
        />
        <ServiceItem
          service={services[2]}
          frame={frameThree}
          setFrame={(state) => {
            setFrameThree(state);
            setHoveredIndex(state ? 2 : null);
          }}
          stylesClass={styles.flower3}
          zIndex={hoveredIndex === 2 ? 1 : 0}
        />
      </main>
    </div>
  );
}

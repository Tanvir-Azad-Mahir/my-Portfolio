import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  GraduationCap,
  FlaskConical,
  ExternalLink,
  Sparkles,
  Sun,
  Moon,
  Menu,
  X,
  ScanText,
  Cpu,
  Database,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaJava,
} from "react-icons/fa";

import {
  SiPython,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiJavascript,
  SiCplusplus,
  SiPhp,
  SiHtml5,
  SiCss,
  SiGit,
  SiKaggle,
  SiRaspberrypi,
} from "react-icons/si";


// ============================================================
// PROJECTS
// ============================================================

const projects = [
  {
    number: "01",
    title: "Handwritten Prescription Recognition",
    category: "Deep Learning · OCR",
    description:
      "A handwriting-recognition pipeline for medical prescriptions using OCR-based text detection, image preprocessing, and CNN + BiLSTM + CTC sequence recognition.",
    tech: ["Python", "EasyOCR", "OpenCV", "CNN", "BiLSTM", "CTC"],
    href:
      "https://github.com/Tanvir-Azad-Mahir/handwritten_recognition_system",
    icon: ScanText,
  },

  {
    number: "02",
    title: "Smart Factory Safety",
    category: "AI · IoT · Computer Vision",
    description:
      "An intelligent factory safety and navigation system combining sensors, ESP32, Raspberry Pi and computer vision for monitoring, access control and worker rerouting.",
    tech: ["Python", "ESP32", "Raspberry Pi", "OpenCV", "IoT"],
    href: "https://github.com/Tanvir-Azad-Mahir/Smart-Factory",
    icon: Cpu,
  },

  {
    number: "03",
    title: "Ticketron",
    category: "Full-Stack · Database",
    description:
      "A railway ticket management platform with authentication, train search, seat booking, refunds, printable tickets and a complete administrative CRUD system.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    href:
      "https://github.com/Tanvir-Azad-Mahir/Ticketron-A-rainway-ticket-management-system",
    icon: Database,
  },
];


// ============================================================
// TECH STACK
// ============================================================

const technologies = [
  {
    name: "Python",
    category: "Programming",
    icon: SiPython,
  },
  {
    name: "TensorFlow",
    category: "Deep Learning",
    icon: SiTensorflow,
  },
  {
    name: "Keras",
    category: "Deep Learning",
    icon: SiKeras,
  },
  {
    name: "OpenCV",
    category: "Computer Vision",
    icon: SiOpencv,
  },
  {
    name: "Pandas",
    category: "Data",
    icon: SiPandas,
  },
  {
    name: "NumPy",
    category: "Data",
    icon: SiNumpy,
  },
  {
    name: "JavaScript",
    category: "Programming",
    icon: SiJavascript,
  },
  {
    name: "C++",
    category: "Programming",
    icon: SiCplusplus,
  },
  {
    name: "Java",
    category: "Programming",
    icon: FaJava,
  },
  {
    name: "PHP",
    category: "Web",
    icon: SiPhp,
  },
  {
    name: "MySQL",
    category: "Database",
    icon: SiMysql,
  },
  {
    name: "Supabase",
    category: "Backend",
    icon: SiSupabase,
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: SiFirebase,
  },
  {
    name: "Raspberry Pi",
    category: "IoT",
    icon: SiRaspberrypi,
  },
  {
    name: "Git",
    category: "Tools",
    icon: SiGit,
  },
  {
    name: "HTML5",
    category: "Web",
    icon: SiHtml5,
  },
  {
    name: "CSS3",
    category: "Web",
    icon: SiCss,
  },
];


// ============================================================
// ANIMATION
// ============================================================

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};


// ============================================================
// SECTION LABEL
// ============================================================

function SectionLabel({
  children,
  number,
}: {
  children: ReactNode;
  number: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="text-xs font-bold tracking-[0.22em] text-emerald-600 dark:text-emerald-300">
        {number}
      </span>

      <div className="h-px w-8 bg-black/20 dark:bg-white/20" />

      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45 dark:text-white/45">
        {children}
      </span>
    </div>
  );
}


// ============================================================
// APP
// ============================================================

function App() {
  const year = new Date().getFullYear();

  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);


  // ============================================================
  // THEME
  // ============================================================

  useEffect(() => {
    const savedTheme = localStorage.getItem("tanvir-theme");

    if (savedTheme === "light") {
      setDarkMode(false);
    }

    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);


  function toggleTheme() {
    setDarkMode((previous) => {
      const nextTheme = !previous;

      localStorage.setItem(
        "tanvir-theme",
        nextTheme ? "dark" : "light"
      );

      return nextTheme;
    });
  }


  return (
    <div className={darkMode ? "dark" : ""}>
      <main
        className="
          min-h-screen overflow-x-hidden
          bg-[#f5f5ef]
          text-[#111713]
          transition-colors duration-500

          dark:bg-[#060806]
          dark:text-[#f3f3eb]
        "
      >

        {/* ================================================== */}
        {/* BACKGROUND */}
        {/* ================================================== */}

        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -left-32 -top-32
              h-[500px] w-[500px]
              rounded-full
              bg-emerald-400/20
              blur-[140px]

              dark:bg-emerald-500/[0.08]
            "
          />

          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -right-40 top-[30%]
              h-[500px] w-[500px]
              rounded-full
              bg-cyan-300/20
              blur-[150px]

              dark:bg-cyan-400/[0.05]
            "
          />

        </div>


        <div className="relative z-10">

          {/* ================================================== */}
          {/* NAVBAR */}
          {/* ================================================== */}

          <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">

            <nav
              className="
                mx-auto flex max-w-7xl items-center justify-between
                rounded-2xl
                border border-black/[0.08]
                bg-white/75
                px-5 py-3
                shadow-xl shadow-black/[0.03]
                backdrop-blur-xl

                dark:border-white/[0.08]
                dark:bg-[#0a0d0b]/80
                dark:shadow-black/20
              "
            >

              {/* LOGO */}

              <a
                href="#home"
                className="flex items-center gap-3 font-semibold tracking-tight"
              >
                <div
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-xl
                    bg-emerald-600
                    text-xs font-bold text-white

                    dark:bg-emerald-300
                    dark:text-black
                  "
                >
                  TA
                </div>

                <span className="hidden sm:block">
                  Tanvir Azad
                </span>
              </a>


              {/* DESKTOP NAV */}

              <div className="hidden items-center gap-8 text-sm md:flex">

                {[
                  ["About", "#about"],
                  ["Stack", "#stack"],
                  ["Work", "#work"],
                  ["Research", "#research"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="
                      text-black/55
                      transition
                      hover:text-black

                      dark:text-white/55
                      dark:hover:text-white
                    "
                  >
                    {label}
                  </a>
                ))}

              </div>


              {/* RIGHT CONTROLS */}

              <div className="flex items-center gap-2">

                {/* THEME */}

                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-black/10
                    bg-black/[0.03]
                    transition
                    hover:bg-black/[0.07]

                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:hover:bg-white/[0.08]
                  "
                >
                  {darkMode ? (
                    <Sun size={17} />
                  ) : (
                    <Moon size={17} />
                  )}
                </button>


                {/* CONTACT */}

                <a
                  href="mailto:tanvirazadmahir@gmail.com"
                  className="
                    hidden
                    items-center gap-2
                    rounded-full
                    bg-[#101411]
                    px-5 py-2.5
                    text-sm font-semibold
                    text-white
                    transition
                    hover:bg-emerald-600

                    sm:flex

                    dark:bg-[#f3f3eb]
                    dark:text-black
                    dark:hover:bg-emerald-300
                  "
                >
                  Let's talk

                  <ArrowUpRight size={15} />
                </a>


                {/* MOBILE MENU */}

                <button
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-black/10

                    md:hidden

                    dark:border-white/10
                  "
                >
                  {mobileMenu ? (
                    <X size={18} />
                  ) : (
                    <Menu size={18} />
                  )}
                </button>

              </div>

            </nav>


            {/* MOBILE MENU */}

            {mobileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                  mx-auto mt-2
                  max-w-7xl
                  rounded-2xl
                  border border-black/[0.08]
                  bg-white/95
                  p-5
                  shadow-xl
                  backdrop-blur-xl

                  md:hidden

                  dark:border-white/[0.08]
                  dark:bg-[#0c100d]/95
                "
              >
                <div className="flex flex-col gap-4">

                  {[
                    ["About", "#about"],
                    ["Tech Stack", "#stack"],
                    ["Work", "#work"],
                    ["Research", "#research"],
                    ["Contact", "#contact"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMobileMenu(false)}
                      className="
                        text-sm
                        text-black/60

                        dark:text-white/60
                      "
                    >
                      {label}
                    </a>
                  ))}

                </div>
              </motion.div>
            )}

          </header>


          {/* ================================================== */}
          {/* HERO */}
          {/* ================================================== */}

          <section
            id="home"
            className="
              relative
              flex min-h-screen
              items-center
              px-5 pb-14 pt-32
              sm:px-8
              md:px-12
              lg:px-16
            "
          >

            <div
              className="
                mx-auto
                grid w-full max-w-7xl
                gap-14
                lg:grid-cols-[1.2fr_0.8fr]
                lg:items-center
              "
            >

              {/* HERO LEFT */}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={reveal}
              >

                <div
                  className="
                    mb-7
                    inline-flex
                    items-center gap-2
                    rounded-full
                    border border-black/10
                    bg-white/60
                    px-4 py-2
                    text-xs
                    text-black/55

                    dark:border-white/10
                    dark:bg-white/[0.035]
                    dark:text-white/55
                  "
                >
                  <span
                    className="
                      h-2 w-2
                      rounded-full
                      bg-emerald-500
                      shadow-[0_0_12px_rgba(16,185,129,0.6)]
                    "
                  />

                  Based in Dhaka, Bangladesh
                </div>


                <p
                  className="
                    mb-5
                    text-xs font-bold
                    uppercase
                    tracking-[0.28em]
                    text-emerald-600

                    sm:text-sm

                    dark:text-emerald-300
                  "
                >
                  AI · Machine Learning · Intelligent Systems
                </p>


                <h1
                  className="
                    max-w-5xl
                    text-[18vw]
                    font-semibold
                    leading-[0.82]
                    tracking-[-0.075em]

                    sm:text-[12vw]
                    md:text-[9vw]
                    lg:text-[7vw]
                    xl:text-[6.5rem]
                  "
                >
                  Tanvir

                  <br />

                  <span
                    className="
                      text-black/25

                      dark:text-white/25
                    "
                  >
                    Azad.
                  </span>
                </h1>


                <p
                  className="
                    mt-9
                    max-w-2xl
                    text-base
                    leading-relaxed
                    text-black/55

                    sm:text-lg
                    md:text-xl

                    dark:text-white/55
                  "
                >
                  Computer Science undergraduate creating systems across{" "}

                  <span
                    className="
                      font-medium
                      text-black

                      dark:text-white
                    "
                  >
                    machine learning
                  </span>
                  ,{" "}

                  <span
                    className="
                      font-medium
                      text-black

                      dark:text-white
                    "
                  >
                    computer vision
                  </span>
                  , NLP and intelligent software.
                </p>


                <div className="mt-9 flex flex-wrap gap-3">

                  <a
                    href="#work"
                    className="
                      group
                      flex items-center gap-3
                      rounded-full
                      bg-emerald-600
                      px-6 py-3
                      text-sm font-semibold
                      text-white
                      transition

                      hover:bg-emerald-700

                      dark:bg-emerald-300
                      dark:text-black
                      dark:hover:bg-emerald-200
                    "
                  >
                    Explore my work

                    <ArrowUpRight
                      size={17}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </a>


                  <a
                    href="https://github.com/Tanvir-Azad-Mahir"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      rounded-full
                      border border-black/10
                      bg-white/40
                      px-6 py-3
                      text-sm
                      text-black/70
                      transition

                      hover:border-black/25
                      hover:bg-white

                      dark:border-white/10
                      dark:bg-white/[0.02]
                      dark:text-white/70
                      dark:hover:border-white/30
                    "
                  >
                    <FaGithub />

                    GitHub
                  </a>

                </div>

              </motion.div>


              {/* HERO CARD */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border border-black/[0.07]
                    bg-white/70
                    p-7
                    shadow-[0_30px_100px_rgba(0,0,0,0.08)]
                    backdrop-blur

                    dark:border-white/[0.08]
                    dark:bg-[#0d100e]
                    dark:shadow-black/20
                  "
                >

                  <div
                    className="
                      absolute
                      right-[-40px]
                      top-[-40px]
                      h-52 w-52
                      rounded-full
                      bg-emerald-400/20
                      blur-[70px]

                      dark:bg-emerald-300/[0.08]
                    "
                  />


                  <div className="relative">

                    <div className="mb-20 flex items-center justify-between">

                      <span
                        className="
                          text-xs
                          uppercase
                          tracking-[0.22em]
                          text-black/35

                          dark:text-white/35
                        "
                      >
                        Current direction
                      </span>

                      <Sparkles
                        size={19}
                        className="
                          text-emerald-600

                          dark:text-emerald-300
                        "
                      />

                    </div>


                    <h2
                      className="
                        text-3xl
                        font-medium
                        leading-tight
                        tracking-[-0.04em]

                        sm:text-4xl
                      "
                    >
                      Teaching machines

                      <br />

                      <span
                        className="
                          text-black/25

                          dark:text-white/25
                        "
                      >
                        to understand.
                      </span>
                    </h2>


                    <div className="mt-10 grid grid-cols-2 gap-3">

                      {[
                        "Computer Vision",
                        "Deep Learning",
                        "NLP",
                        "AI Research",
                      ].map((item) => (

                        <div
                          key={item}
                          className="
                            rounded-2xl
                            border border-black/[0.06]
                            bg-black/[0.025]
                            p-4
                            text-sm
                            text-black/55

                            dark:border-white/[0.07]
                            dark:bg-white/[0.025]
                            dark:text-white/55
                          "
                        >
                          {item}
                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </section>


          {/* ================================================== */}
          {/* ABOUT */}
          {/* ================================================== */}

          <section
            id="about"
            className="
              border-t border-black/[0.07]
              px-5 py-24

              sm:px-8
              md:px-12
              lg:px-16 lg:py-36

              dark:border-white/[0.07]
            "
          >

            <div className="mx-auto max-w-7xl">

              <SectionLabel number="01">
                About
              </SectionLabel>


              <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  variants={reveal}
                  className="
                    max-w-sm
                    text-sm
                    leading-7
                    text-black/45

                    dark:text-white/40
                  "
                >
                  I work at the intersection of software engineering,
                  data and artificial intelligence — particularly systems
                  capable of understanding visual and sequential information.
                </motion.p>


                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  variants={reveal}
                >

                  <h2
                    className="
                      max-w-4xl
                      text-3xl
                      font-medium
                      leading-[1.05]
                      tracking-[-0.045em]

                      sm:text-4xl
                      md:text-5xl
                      lg:text-6xl
                    "
                  >
                    Building intelligent systems where{" "}

                    <span
                      className="
                        text-black/25

                        dark:text-white/25
                      "
                    >
                      research meets real-world engineering.
                    </span>

                  </h2>


                  <div
                    className="
                      mt-10
                      grid gap-7
                      border-t border-black/[0.08]
                      pt-8

                      sm:grid-cols-2

                      dark:border-white/[0.08]
                    "
                  >

                    <p
                      className="
                        text-sm leading-7
                        text-black/50

                        dark:text-white/50
                      "
                    >
                      My work spans deep learning, computer vision,
                      OCR, NLP, model development and data workflows.
                    </p>


                    <p
                      className="
                        text-sm leading-7
                        text-black/50

                        dark:text-white/50
                      "
                    >
                      I currently study Computer Science & Engineering
                      at United International University while developing
                      projects and research around intelligent computing.
                    </p>

                  </div>

                </motion.div>

              </div>

            </div>

          </section>


          {/* ================================================== */}
          {/* TECH STACK */}
          {/* ================================================== */}

          <section
            id="stack"
            className="
              px-5 pb-24

              sm:px-8
              md:px-12
              lg:px-16 lg:pb-36
            "
          >

            <div className="mx-auto max-w-7xl">

              <SectionLabel number="02">
                Technology Stack
              </SectionLabel>


              <div className="mb-12 max-w-3xl">

                <h2
                  className="
                    text-4xl
                    font-medium
                    tracking-[-0.05em]

                    sm:text-5xl
                    md:text-6xl
                  "
                >
                  Tools behind

                  <br />

                  <span
                    className="
                      text-black/25

                      dark:text-white/25
                    "
                  >
                    the experiments.
                  </span>
                </h2>

              </div>


              <div
                className="
                  grid grid-cols-2
                  gap-3

                  sm:grid-cols-3
                  md:grid-cols-4
                  lg:grid-cols-6
                "
              >

                {technologies.map((tech, index) => {

                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      initial={{
                        opacity: 0,
                        y: 20,
                        scale: 0.97,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        margin: "-60px",
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.03,
                      }}
                      whileHover={{
                        y: -5,
                      }}
                      className="
                        group
                        rounded-[1.4rem]
                        border border-black/[0.07]
                        bg-white/60
                        p-5
                        transition
                        shadow-sm

                        hover:border-emerald-500/30
                        hover:shadow-xl

                        dark:border-white/[0.07]
                        dark:bg-[#0c0f0d]
                        dark:hover:border-emerald-300/25
                      "
                    >

                      <Icon
                        className="
                          mb-8
                          h-8 w-8
                          text-emerald-600
                          transition-transform
                          duration-300

                          group-hover:scale-110

                          dark:text-emerald-300
                        "
                      />


                      <h3
                        className="
                          text-sm
                          font-semibold
                        "
                      >
                        {tech.name}
                      </h3>


                      <p
                        className="
                          mt-1
                          text-[10px]
                          uppercase
                          tracking-[0.16em]
                          text-black/35

                          dark:text-white/30
                        "
                      >
                        {tech.category}
                      </p>

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </section>


          {/* ================================================== */}
          {/* WORK */}
          {/* ================================================== */}

          <section
            id="work"
            className="
              border-t border-black/[0.07]
              px-5 py-24

              sm:px-8
              md:px-12
              lg:px-16 lg:py-36

              dark:border-white/[0.07]
            "
          >

            <div className="mx-auto max-w-7xl">

              <SectionLabel number="03">
                Selected Work
              </SectionLabel>


              <h2
                className="
                  mb-16
                  text-4xl
                  font-medium
                  tracking-[-0.05em]

                  sm:text-5xl
                  md:text-6xl
                "
              >
                Projects solving

                <br />

                <span
                  className="
                    text-black/25

                    dark:text-white/25
                  "
                >
                  real technical problems.
                </span>
              </h2>


              <div className="space-y-3">

                {projects.map((project, index) => {

                  const Icon = project.icon;

                  return (
                    <motion.a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      key={project.title}
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        margin: "-80px",
                      }}
                      transition={{
                        duration: 0.65,
                        delay: index * 0.08,
                      }}
                      className="
                        group
                        grid gap-7
                        rounded-[1.7rem]
                        border border-black/[0.07]
                        bg-white/60
                        p-6
                        transition duration-500

                        hover:-translate-y-1
                        hover:border-emerald-500/25
                        hover:bg-white

                        md:grid-cols-[80px_1fr_1.15fr_55px]
                        md:items-center
                        md:p-8

                        dark:border-white/[0.07]
                        dark:bg-[#0b0e0c]
                        dark:hover:border-emerald-300/20
                        dark:hover:bg-[#101411]
                      "
                    >

                      <div>

                        <span
                          className="
                            text-xs
                            tracking-[0.2em]
                            text-black/25

                            dark:text-white/25
                          "
                        >
                          {project.number}
                        </span>


                        <div
                          className="
                            mt-5
                            flex h-11 w-11
                            items-center justify-center
                            rounded-xl
                            bg-emerald-500/10
                            text-emerald-600

                            dark:bg-emerald-300/[0.07]
                            dark:text-emerald-300
                          "
                        >
                          <Icon size={19} />
                        </div>

                      </div>


                      <div>

                        <p
                          className="
                            mb-2
                            text-xs
                            uppercase
                            tracking-[0.17em]
                            text-emerald-600

                            dark:text-emerald-300/70
                          "
                        >
                          {project.category}
                        </p>


                        <h3
                          className="
                            text-xl
                            font-semibold
                            tracking-[-0.03em]

                            sm:text-2xl
                          "
                        >
                          {project.title}
                        </h3>

                      </div>


                      <div>

                        <p
                          className="
                            text-sm
                            leading-6
                            text-black/45

                            dark:text-white/40
                          "
                        >
                          {project.description}
                        </p>


                        <div className="mt-4 flex flex-wrap gap-2">

                          {project.tech.map((item) => (

                            <span
                              key={item}
                              className="
                                rounded-full
                                border border-black/[0.07]
                                px-3 py-1
                                text-[10px]
                                text-black/40

                                dark:border-white/[0.07]
                                dark:text-white/35
                              "
                            >
                              {item}
                            </span>

                          ))}

                        </div>

                      </div>


                      <div
                        className="
                          flex h-11 w-11
                          items-center justify-center
                          rounded-full
                          border border-black/10
                          transition

                          group-hover:bg-emerald-600
                          group-hover:text-white

                          dark:border-white/[0.08]
                          dark:group-hover:bg-emerald-300
                          dark:group-hover:text-black
                        "
                      >
                        <ArrowUpRight size={18} />
                      </div>

                    </motion.a>
                  );
                })}

              </div>

            </div>

          </section>


          {/* ================================================== */}
          {/* RESEARCH */}
          {/* ================================================== */}

          <section
            id="research"
            className="
              px-5 pb-24

              sm:px-8
              md:px-12
              lg:px-16 lg:pb-36
            "
          >

            <div className="mx-auto max-w-7xl">

              <div
                className="
                  overflow-hidden
                  rounded-[2rem]
                  bg-emerald-950
                  text-white
                  shadow-2xl
                "
              >

                <div
                  className="
                    grid
                    lg:grid-cols-[0.8fr_1.2fr]
                  "
                >

                  <div
                    className="
                      relative
                      min-h-[340px]
                      overflow-hidden
                      border-b border-white/10
                      p-8

                      lg:border-b-0
                      lg:border-r
                      lg:p-10
                    "
                  >

                    <div
                      className="
                        absolute
                        -bottom-24 -left-20
                        h-80 w-80
                        rounded-full
                        bg-emerald-300/20
                        blur-[100px]
                      "
                    />


                    <div className="relative flex h-full flex-col justify-between">

                      <FlaskConical
                        size={30}
                        className="text-emerald-300"
                      />


                      <div>

                        <p
                          className="
                            mb-3
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            text-white/40
                          "
                        >
                          Ongoing Research
                        </p>


                        <h2
                          className="
                            text-4xl
                            font-medium
                            tracking-[-0.05em]
                          "
                        >
                          Responsible

                          <br />

                          AI systems.
                        </h2>

                      </div>

                    </div>

                  </div>


                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                    }}
                    variants={reveal}
                    className="p-8 lg:p-12"
                  >

                    <span
                      className="
                        inline-flex
                        rounded-full
                        border border-emerald-300/20
                        bg-emerald-300/10
                        px-3 py-1
                        text-[10px]
                        uppercase
                        tracking-[0.18em]
                        text-emerald-300
                      "
                    >
                      Research
                    </span>


                    <h3
                      className="
                        mt-8
                        max-w-xl
                        text-2xl
                        font-medium
                        leading-tight
                        tracking-[-0.03em]

                        sm:text-3xl
                        md:text-4xl
                      "
                    >
                      A Grounded Ethical Speech-to-Speech
                      Controversial AI Framework
                    </h3>


                    <p
                      className="
                        mt-6
                        max-w-xl
                        text-sm
                        leading-7
                        text-white/50
                      "
                    >
                      Exploring responsible speech-to-speech artificial
                      intelligence with emphasis on grounding,
                      trustworthy generation and ethical handling of
                      sensitive or controversial content.
                    </p>


                    <div
                      className="
                        mt-10
                        flex items-center gap-3
                        text-sm
                        text-white/50
                      "
                    >
                      <span
                        className="
                          h-2 w-2
                          rounded-full
                          bg-amber-300
                        "
                      />

                      Research in progress
                    </div>

                  </motion.div>

                </div>

              </div>

            </div>

          </section>


          {/* ================================================== */}
          {/* EDUCATION */}
          {/* ================================================== */}

          <section
            className="
              border-t border-black/[0.07]
              px-5 py-24

              sm:px-8
              md:px-12
              lg:px-16 lg:py-36

              dark:border-white/[0.07]
            "
          >

            <div className="mx-auto max-w-7xl">

              <SectionLabel number="04">
                Education
              </SectionLabel>


              <div className="grid gap-14 lg:grid-cols-2">

                <div>

                  <GraduationCap
                    size={31}
                    className="
                      mb-8
                      text-emerald-600

                      dark:text-emerald-300
                    "
                  />


                  <h2
                    className="
                      text-4xl
                      font-medium
                      tracking-[-0.05em]

                      sm:text-5xl
                    "
                  >
                    Learning by

                    <br />

                    <span
                      className="
                        text-black/25

                        dark:text-white/25
                      "
                    >
                      building.
                    </span>
                  </h2>

                </div>


                <div
                  className="
                    divide-y divide-black/[0.08]
                    border-y border-black/[0.08]

                    dark:divide-white/[0.08]
                    dark:border-white/[0.08]
                  "
                >

                  {[
                    [
                      "BSc in Computer Science & Engineering",
                      "United International University, Dhaka",
                      "2023 — Ongoing",
                    ],
                    [
                      "Higher School Certificate",
                      "Willes Little Flower School & College",
                      "2021 — 2022",
                    ],
                    [
                      "Senior School Certificate",
                      "National Ideal School & College",
                      "2010 — 2020",
                    ],
                  ].map(([title, place, date]) => (

                    <div
                      key={title}
                      className="
                        grid gap-3
                        py-7

                        sm:grid-cols-[1fr_auto]
                      "
                    >

                      <div>

                        <h3 className="font-semibold">
                          {title}
                        </h3>


                        <p
                          className="
                            mt-1
                            text-sm
                            text-black/45

                            dark:text-white/40
                          "
                        >
                          {place}
                        </p>

                      </div>


                      <span
                        className="
                          text-xs
                          text-black/35

                          dark:text-white/30
                        "
                      >
                        {date}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </section>


          {/* ================================================== */}
          {/* CERTIFICATIONS */}
          {/* ================================================== */}

          <section
            className="
              px-5 pb-24

              sm:px-8
              md:px-12
              lg:px-16 lg:pb-36
            "
          >

            <div className="mx-auto max-w-7xl">

              <SectionLabel number="05">
                Certifications
              </SectionLabel>


              <div className="grid gap-3 md:grid-cols-2">

                {[
                  {
                    title: "Pandas",
                    description: "Data manipulation & analysis",
                    href:
                      "https://www.kaggle.com/learn/certification/tanvirazadmahir01/pandas",
                  },

                  {
                    title: "Data Visualization",
                    description: "Visual analysis & data storytelling",
                    href:
                      "https://www.kaggle.com/learn/certification/tanvirazadmahir01/data-visualization",
                  },
                ].map((certificate) => (

                  <a
                    key={certificate.title}
                    href={certificate.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      flex items-center justify-between
                      rounded-[1.6rem]
                      border border-black/[0.07]
                      bg-white/60
                      p-6
                      transition

                      hover:-translate-y-1
                      hover:border-emerald-500/30
                      hover:bg-white
                      hover:shadow-xl

                      dark:border-white/[0.07]
                      dark:bg-white/[0.025]
                      dark:hover:border-emerald-300/30
                    "
                  >

                    <div className="flex items-center gap-4">

                      <div
                        className="
                          flex h-11 w-11
                          items-center justify-center
                          rounded-xl
                          bg-emerald-500/10
                          text-emerald-600

                          dark:bg-emerald-300/10
                          dark:text-emerald-300
                        "
                      >
                        <SiKaggle size={21} />
                      </div>


                      <div>

                        <span
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.2em]
                            text-emerald-600

                            dark:text-emerald-300
                          "
                        >
                          Kaggle Learn
                        </span>


                        <h3
                          className="
                            mt-1
                            text-lg
                            font-semibold
                          "
                        >
                          {certificate.title}
                        </h3>


                        <p
                          className="
                            mt-1
                            text-xs
                            text-black/40

                            dark:text-white/35
                          "
                        >
                          {certificate.description}
                        </p>

                      </div>

                    </div>


                    <ExternalLink
                      size={17}
                      className="
                        text-black/30
                        transition

                        group-hover:text-emerald-600

                        dark:text-white/30
                        dark:group-hover:text-emerald-300
                      "
                    />

                  </a>

                ))}

              </div>

            </div>

          </section>


          {/* ================================================== */}
          {/* CONTACT */}
          {/* ================================================== */}

          <section
            id="contact"
            className="
              px-5 pb-5

              sm:px-8
              md:px-12
              lg:px-16
            "
          >

            <div
              className="
                mx-auto
                max-w-7xl
                overflow-hidden
                rounded-[2.2rem]
                bg-[#101713]
                text-white

                dark:bg-[#eef1e8]
                dark:text-[#101310]
              "
            >

              <div
                className="
                  grid
                  lg:grid-cols-[1.3fr_0.7fr]
                "
              >

                <div className="p-8 sm:p-10 lg:p-14">

                  <span
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-white/40

                      dark:text-black/40
                    "
                  >
                    Have an idea?
                  </span>


                  <h2
                    className="
                      mt-6
                      max-w-3xl
                      text-5xl
                      font-semibold
                      leading-[0.92]
                      tracking-[-0.065em]

                      sm:text-6xl
                      md:text-7xl
                      lg:text-8xl
                    "
                  >
                    Let's build

                    <br />

                    something smart.
                  </h2>


                  <a
                    href="mailto:tanvirazadmahir@gmail.com"
                    className="
                      group
                      mt-10
                      inline-flex
                      items-center gap-3
                      rounded-full
                      bg-emerald-300
                      px-6 py-3
                      text-sm
                      font-semibold
                      text-black

                      dark:bg-[#101310]
                      dark:text-white
                    "
                  >
                    Start a conversation

                    <ArrowUpRight
                      size={17}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </a>

                </div>


                <div
                  className="
                    flex flex-col
                    justify-between
                    border-t border-white/10
                    p-8

                    lg:border-l
                    lg:border-t-0
                    lg:p-10

                    dark:border-black/10
                  "
                >

                  <div>

                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-white/40

                        dark:text-black/40
                      "
                    >
                      Contact
                    </p>


                    <div className="mt-7 space-y-4">

                      <a
                        href="mailto:tanvirazadmahir@gmail.com"
                        className="
                          flex items-center gap-3
                          text-sm
                          text-white/65

                          dark:text-black/65
                        "
                      >
                        <Mail size={16} />

                        tanvirazadmahir@gmail.com
                      </a>


                      <div
                        className="
                          flex items-center gap-3
                          text-sm
                          text-white/65

                          dark:text-black/65
                        "
                      >
                        <MapPin size={16} />

                        Dhaka, Bangladesh
                      </div>

                    </div>

                  </div>


                  <div className="mt-16 flex gap-3">

                    <a
                      href="https://github.com/Tanvir-Azad-Mahir"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-full
                        border border-white/15
                        transition

                        hover:bg-white
                        hover:text-black

                        dark:border-black/15
                        dark:hover:bg-black
                        dark:hover:text-white
                      "
                    >
                      <FaGithub />
                    </a>


                    <a
                      href="https://linkedin.com/in/tanvir-azad-0600aa276"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-full
                        border border-white/15
                        transition

                        hover:bg-white
                        hover:text-black

                        dark:border-black/15
                        dark:hover:bg-black
                        dark:hover:text-white
                      "
                    >
                      <FaLinkedin />
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* ================================================== */}
          {/* FOOTER */}
          {/* ================================================== */}

          <footer
            className="
              px-5 py-10

              sm:px-8
              md:px-12
              lg:px-16
            "
          >

            <div
              className="
                mx-auto
                flex max-w-7xl
                flex-col gap-4
                text-xs
                text-black/35

                sm:flex-row
                sm:items-center
                sm:justify-between

                dark:text-white/30
              "
            >

              <p>
                © {year} Tanvir Azad.
              </p>


              <div className="flex gap-5">

                <a
                  href="https://github.com/Tanvir-Azad-Mahir"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    transition

                    hover:text-black

                    dark:hover:text-white
                  "
                >
                  GitHub
                </a>


                <a
                  href="https://linkedin.com/in/tanvir-azad-0600aa276"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    transition

                    hover:text-black

                    dark:hover:text-white
                  "
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </footer>

        </div>

      </main>
    </div>
  );
}

export default App;
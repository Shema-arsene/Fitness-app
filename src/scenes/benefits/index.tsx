import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "@/shared/type"
import { motion } from "framer-motion"
import HeaderText from "@/shared/HeaderText"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
  {
    id: 1,
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod consectetur modi unde itaque eius dignissimos architecto nisi voluptate maxime omnis a dolorum ipsa.",
  },
  {
    id: 2,
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100.s of diverse classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod consectetur modi unde itaque eius dignissimos architecto nisi voluptate maxime omnis a dolorum ipsa.",
  },
  {
    id: 3,
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and pro trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod consectetur modi unde itaque eius dignissimos architecto nisi voluptate maxime omnis a dolorum ipsa.",
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.5 },
  },
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={`${SelectedPage.Benefits}`}
      className="mx-auto h-fit w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        className="div"
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HeaderText>More than Just a Gym.</HeaderText>
          <p className="my-5 text-sm md:w-3/5">
            We provide world class equipments, trainers and classes to get you
            the ultimate fitness goals with ease. We provide true care into each
            and every member.
          </p>
        </motion.div>

        {/* Benefits */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex items-center justify-between gap-8 mt-5"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics & Description */}
        <section className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto md:w-1/2"
          />

          {/* Description */}
          <div className="md:w-1/2">
            {/* Title */}
            <div className="relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"
              >
                <div>
                  <HeaderText>
                    Millions of happy Members Getting{" "}
                    <span className="text-primary-500">Fit</span>
                  </HeaderText>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            {/* <motion.div></motion.div> */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="my-5"
            >
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla
              nec. Consequat sed facilisis dui sit egestas ultrices tellus.
              Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci
              diam odio.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.9, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mb-5"
            >
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </motion.p>

            {/* Button */}
            <div className="relative mt-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 1.2, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] 
                              before:content-sparkles"
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </section>
  )
}

export default Benefits

import HeaderText from "@/shared/HeaderText"
import { SelectedPage } from "@/shared/type"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-500 px-5 py-3 
                        placeholder-gray-300 border-2 border-[#FF6B66] focus:border-2 focus:border-red-500 focus:outline-none`
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const handleSubmit = async (e: any) => {
    const isValid = await trigger()

    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section
      id={`${SelectedPage.ContactUs}`}
      className="mx-auto w-5/6 pt-24 pb-32"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5"
        >
          <HeaderText>
            <span className="text-primary-500">Join Now</span> to get in shape
          </HeaderText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus optio et vero.Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Repellendus optio et vero.
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={handleSubmit}
              action="https://formsubmit.co/0c68ed31656630f9fcc8d4a0f8c16f33"
              method="POST"
            >
              {/* Name */}
              <input
                type="text"
                placeholder="NAME"
                className={inputStyles}
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "The name is too long."}
                </p>
              )}

              {/* Email */}
              <input
                type="email"
                placeholder="EMAIL"
                className={inputStyles}
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Enter a valid e-mail."}
                </p>
              )}

              {/* Message */}
              <textarea
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                className={inputStyles}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text primary-500 duration-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "The message is too long."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition 
                            duration-500 hover:text-white hover:bg-[#5e0000] cursor-pointer"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <div
              className="md:before:content-evolvetext w-full 
                            before:absolute before:-bottom:20 before:-right-10 before:z-[-1]"
            >
              <img
                src={ContactUsPageGraphic}
                alt="contact-us-page-image"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs

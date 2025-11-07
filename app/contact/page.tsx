"use client";
import CommonHeroBanner from "@/components/CommonHeroBanner";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
// 

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string | null;
  email?: string | null;
  message?: string | null;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove error message when the user starts typing
    setErrors({
      ...errors,
      [name]: null,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    if (!formData.name) {
      newErrors.name = "*Required";
    }
    if (!formData.email) {
      newErrors.email = "*Required";
    }
    if (!formData.message) {
      newErrors.message = "*Required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_EMAIL_API!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_TOKEN!}`
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setErrors({});
        toast("Email sent", {
          type: "success",
        });
      }else{
        toast("Something went wrong", {type: "error"});
      }
    } catch (error: Error | unknown) {
      console.log(
        "Error submitting form:",
        error instanceof Error ? error.message : error
      );
      toast("Something went wrong", {type: "error"});
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CommonHeroBanner title="Contact" subtitle="Get in touch with us!" />
      <section className="text-[var(--color-light-text)]" 
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true">
        <div className="mx-auto pt-[50px] md:pt-[80px] pb-[50px] md:pb-[80px] px-5 md:px-10 lg:px-10 xl:px-[80px]">
          <div className="text-center max-w-full md:max-w-[590px] mx-auto">
            <h2 className="font-serif text-[24px] md:text-[40px] 2xl:text-[47px] leading-[1.2] text-center mb-[30px] lg:mb-[40px] xl:mb-[40px] 2xl:mb-[50px]">
              Contact Us
            </h2>
            <form
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto text-left"
            >
              {/* Name Field */}
              <div className="mb-[20px] md:mb-[24px] 2xl:mb-[30px]">
                <label
                  className="text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] text-[var(--color-light-text)]"
                  htmlFor="name"
                >
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-[5px] lg:mt-[9px] px-[16px] md:px-[18px] 2xl:px-[20px] py-[10px] md:py-[12px] 2xl:py-[15px] w-full border border-(--Livse-peach) rounded-lg focus:outline-none focus-visible:none focus-visible:none text-[16px] md:text-[18px] 2xl:text-[20px] bg-white placeholder-[#99867a] ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-[16px] md:text-[18px] 2xl:text-[20px] mt-2">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-[20px] md:mb-[24px] 2xl:mb-[30px]">
                <label
                  className="text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] text-[var(--color-light-text)]"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-[5px] lg:mt-[9px] px-[16px] md:px-[18px] 2xl:px-[20px] py-[10px] md:py-[12px] 2xl:py-[15px] w-full border border-(--Livse-peach) rounded-lg focus:outline-none focus-visible:none focus-visible:none text-[16px] md:text-[18px] 2xl:text-[20px] bg-white placeholder-[#99867a] ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="example@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-[16px] md:text-[18px] 2xl:text-[20px] mt-2">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="mb-[20px] md:mb-[24px] 2xl:mb-[30px]">
                <div className="flex flex-wrap gap-0">
                  <label
                    className="text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] text-[var(--color-light-text)]"
                    htmlFor="message"
                  >
                    Message*
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-[5px] lg:mt-[9px] px-[16px] md:px-[18px] 2xl:px-[20px] py-[10px] md:py-[12px] 2xl:py-[15px] w-full border border-(--Livse-peach) rounded-lg focus:outline-none focus-visible:none focus-visible:none text-[16px] md:text-[18px] 2xl:text-[20px] bg-white placeholder-[#99867a] ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Your Message"
                    rows={6}
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-[16px] md:text-[18px] 2xl:text-[20px] mt-2">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className={`rounded-full border-0 bg-(--Livsee-emerald) text-(--Livsee-champagne) font-semibold text-[16px] md:text-[16px] 2xl:text-[20px] px-5 md:px-6 2xl:px-[27px] py-[8.5px] md:py-[9.5px] 2xl:py-[10.5px] hover:border-[#507360] hover:text-white hover:bg-[#507360] transition-colors duration-300 cursor-pointer ${
                    loading
                      ? "bg-(--Livsee-emerald) cursor-not-allowed opacity-50 hover:cursor-not-allowed hover:bg-(--Livsee-emerald)"
                      : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

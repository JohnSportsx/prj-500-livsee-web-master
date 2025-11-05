"use client";
import CommonHeroBanner from "@/components/CommonHeroBanner";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
import { useDropzone } from "react-dropzone";
import CloudUp from "@/public/images/Icons_ui/line-md--cloud-up.svg"

interface FormData {
  customerType: string;
  email: string;
  requestType: string;
  propertyWebsite: string;
  subject: string;
  comments: string;
  attachment: File | null;
}

interface FormErrors {
  customerType?: string | null;
  email?: string | null;
  requestType?: string | null;
  propertyWebsite?: string | null;
  subject?: string | null;
  comments?: string | null;
  attachment?: string | null;
}

export default function Support() {
  const [formData, setFormData] = useState<FormData>({
    customerType: "",
    email: "",
    requestType: "",
    propertyWebsite: "",
    subject: "",
    comments: "",
    attachment: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    const newErrors: FormErrors = {};

    if (!formData.customerType) {
      newErrors.customerType = "*Required";
    }
    if (!formData.email) {
      newErrors.email = "*Required";
    }
    if (!formData.requestType) {
      newErrors.requestType = "*Required";
    }
    if (!formData.propertyWebsite) {
      newErrors.propertyWebsite = "*Required";
    }
    if (!formData.subject) {
      newErrors.subject = "*Required";
    }
    if (!formData.comments) {
      newErrors.comments = "*Required";
    }

    // Validate attachment
    if (!formData.attachment) {
      newErrors.attachment = "*Required";
    } else if (
      !["doc", "pdf", "jpg", "png"].includes(
        formData.attachment.name.split(".").pop()?.toLowerCase() || ""
      )
    ) {
      newErrors.attachment =
        "*Invalid file type. Please upload a .doc, .pdf, .jpg, or .png file.";
    }

    // Optionally, you can add a file size validation (for example, 10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (formData.attachment && formData.attachment.size > maxSize) {
      newErrors.attachment = "*File size is too large. Max size is 10MB.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);
  };

  // Handle drag-and-drop file selection
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Validate file type and size
    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    if (!["doc", "pdf", "jpg", "png"].includes(ext)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        attachment:
          "*Invalid file type. Please upload a .doc, .pdf, .jpg, or .png file.",
      }));
      return;
    }

    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        attachment: "*File size is too large. Max size is 10MB.",
      }));
      return;
    }

    setFormData({
      ...formData,
      attachment: file,
    });
    setErrors((prevErrors) => ({ ...prevErrors, attachment: null }));
  };

  // Initialize useDropzone for drag and drop
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
  });

  return (
    <>
      <CommonHeroBanner title="Support" subtitle="How can Livsee help you?" />
      <section className="text-[var(--color-light-text)]">
        <div className="mx-auto pt-[50px] pb-[50px] px-5 md:px-10 lg:px-10 xl:px-[100px]">
          <div className="text-center max-w-full md:max-w-[590px] mx-auto">
            <h2 className="font-serif text-[24px] md:text-[40px] 2xl:text-[47px] leading-[1.2] text-center mb-[30px] lg:mb-[40px] xl:mb-[40px] 2xl:mb-[50px]">
              Submit a Request
            </h2>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto text-left">
              {/* Type of Customer */}
              <div className="mb-[20px] md:mb-[24px] 2xl:mb-[30px]">
                <label
                  className="text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] text-[var(--color-light-text)]"
                  htmlFor="customerType"
                >
                  Type of Customer*
                </label>
                <div className="relative inline-block w-full mt-[9]">
                  <select
                    name="customerType"
                    value={formData.customerType}
                    onChange={handleChange}
                    className={`block appearance-none px-[16px] md:px-[18px] 2xl:px-[20px] py-[10px] md:py-[12px] 2xl:py-[15px] w-full border border-(--Livse-peach) rounded-lg focus:outline-none text-[16px] md:text-[18px] 2xl:text-[20px] bg-white ${
                      errors.customerType ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Make a Selection</option>
                    <option value="new">New Customer</option>
                    <option value="returning">Returning Customer</option>
                  </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-[16px] md:px-[18px] 2xl:px-[20px] text-(--color-light-text)">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-[18px] md:h-[22px] 2xl:h-[24px] w-[18px] md:w-[22px] 2xl:w-[24px]" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16l-7 -7M12 16l7 -7" />
                    </svg>
                  </div>
                  </div>
                {errors.customerType && (
                  <p className="text-red-500 text-[16px] md:text-[18px] 2xl:text-[20px] mt-2">
                    {errors.customerType}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mb-[20px] md:mb-[24px] 2xl:mb-[30px]">
                <label
                  className="text-[16px] md:text-[18px] 2xl:text-[20px]"
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
                  <p className="text-red-500 text-[16px] md:text-[18px] 2xl:text-[20px] mt-2">{errors.email}</p>
                )}
              </div>

              {/* Type of Request */}
              <div className="mb-[20px] md:mb-[24px] 2xl:mb-[30px]">
                <label
                  className="text-[16px] md:text-[18px] 2xl:text-[20px]"
                  htmlFor="requestType"
                >
                  Type of Request*
                </label>
                <div className="relative inline-block w-full mt-[9]">
                  <select
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleChange}
                    className={`block appearance-none px-[16px] md:px-[18px] 2xl:px-[20px] py-[10px] md:py-[12px] 2xl:py-[15px] w-full border border-(--Livse-peach) rounded-lg focus:outline-none text-[16px] md:text-[18px] 2xl:text-[20px] bg-white ${
                      errors.requestType ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Make a Selection</option>
                    <option value="inquiry">Inquiry</option>
                    <option value="support">Support</option>
                  </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-[16px] md:px-[18px] 2xl:px-[20px] text-(--color-light-text)">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-[18px] md:h-[22px] 2xl:h-[24px] w-[18px] md:w-[22px] 2xl:w-[24px]" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16l-7 -7M12 16l7 -7" />
                    </svg>
                  </div>
                </div>
                {errors.requestType && (
                  <p className="text-red-500 text-[16px] md:text-[18px] 2xl:text-[20px] mt-2">{errors.requestType}</p>
                )}
              </div>

              {/* Property Website */}
              <div className="mb-[20px] md:mb-[24px] 2xl:mb-[30px]">
                <label htmlFor="propertyWebsite">
                  Property Website*
                </label>
                <input
                  type="text"
                  name="propertyWebsite"
                  value={formData.propertyWebsite}
                  onChange={handleChange}
                  className={`mt-[5px] lg:mt-[9px] px-[16px] md:px-[18px] 2xl:px-[20px] py-[10px] md:py-[12px] 2xl:py-[15px] w-full border border-(--Livse-peach) rounded-lg focus:outline-none focus-visible:none focus-visible:none text-[16px] md:text-[18px] 2xl:text-[20px] bg-white placeholder-[#99867a] ${
                    errors.propertyWebsite ? "border-red-500" : ""
                  }`}
                  placeholder="Enter a website URL or 'NA' if not applicable"
                />
                {errors.propertyWebsite && (
                  <p className="text-red-500 text-[16px] md:text-[18px] 2xl:text-[20px] mt-2">{errors.propertyWebsite}</p>
                )}
              </div>

              {/* Subject */}
              <div className="mb-[20px] md:mb-[24px] 2xl:mb-[30px]">
                <label htmlFor="subject">Subject*</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`mt-[5px] lg:mt-[9px] px-[16px] md:px-[18px] 2xl:px-[20px] py-[10px] md:py-[12px] 2xl:py-[15px] w-full border border-(--Livse-peach) rounded-lg focus:outline-none focus-visible:none focus-visible:none text-[16px] md:text-[18px] 2xl:text-[20px] bg-white placeholder-[#99867a] ${
                    errors.subject ? "border-red-500" : ""
                  }`}
                  placeholder="Subject of Request"
                />
                {errors.subject && (
                  <p className="text-red-500 text-[16px] md:text-[18px] 2xl:text-[20px] mt-2">{errors.subject}</p>
                )}
              </div>

              {/* Comments */}
              <div className="mb-[20px] md:mb-[24px] 2xl:mb-[30px]">
                <div className="flex flex-wrap gap-0">
                <label htmlFor="comments">Comments*</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className={`mt-[5px] lg:mt-[9px] px-[16px] md:px-[18px] 2xl:px-[20px] py-[10px] md:py-[12px] 2xl:py-[15px] w-full border border-(--Livse-peach) rounded-lg focus:outline-none focus-visible:none focus-visible:none text-[16px] md:text-[18px] 2xl:text-[20px] placeholder-[#99867a] bg-white ${
                    errors.comments ? "border-red-500" : ""
                  }`}
                  placeholder="Details of your request"
                  rows={6}
                />
                </div>
                {errors.comments && (
                  <p className="text-red-500 text-[16px] md:text-[18px] 2xl:text-[20px] mt-2">{errors.comments}</p>
                )}
              </div>

              {/* Attachments */}
              <div className="mb-[20px] md:mb-[24px] 2xl:mb-[30px]">
                <label htmlFor="attachment">Attachments*</label>
                <div
                  {...getRootProps()}
                  className="mt-[5px] bg-white p-[21px] w-full border border-(--Livse-peach) rounded-lg cursor-pointer"
                >
                  <input {...getInputProps()} />
                  <div className="text-center">
                    <Image
                      src={CloudUp.src}
                      alt="Upload Icon"
                      width={56}
                      height={56}
                      className="mx-auto mb-2 w-14 lg-w-16"
                    />
                    <span className="text-[14px] md:text-[16px] text-(--Livsee-emerald)">
                      <u className="font-semibold">Add a File</u>, or Drag and
                      Drop a file here
                    </span>
                    <p className="text-[14px] md:text-[16px] text-(--Livsee-emerald)">
                      Format must be .doc, .pdf, .jpg, .png
                    </p>
                  </div>
                  {formData.attachment && (
                    <div className="mt-2 text-center text-[16px] md:text-[20px]">
                      <span>{formData.attachment.name}</span>
                    </div>
                  )}
                </div>
                {errors.attachment && (
                  <p className="text-red-500 text-[16px] md:text-[18px] 2xl:text-[20px] mt-2">{errors.attachment}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="rounded-full border-2 bg-(--Livsee-emerald) text-(--Livsee-champagne) font-semibold text-[16px] md:text-[16px] 2xl:text-[20px] px-5 md:px-6 2xl:px-[27px] py-[8.5px] md:py-[9.5px] 2xl:py-[10.5px] hover:border-(--Livsee-emerald) hover:text-(--Livsee-emerald) hover:bg-transparent transition-colors duration-300 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

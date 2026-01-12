"use client";
import { useState, useTransition } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { CircleX, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/_actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contact_info } from "@/data/contact";
import ContactInfo from "../common/contact/ContactInfo";
import SectionTitle from "../common/global/SectionTitle";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";
import Footer from "../common/contact/Footer";
import { useServiceContext } from "@/context/ServiceContext";
import { services } from "@/data/services";
import styles from "../../styles.module.css";
import { Spotlight } from "../motion-primitives/spotlight";
import Button from "../common/global/Button";
import { Magnetic } from "../motion-primitives/magnetic";
import FormResponse from "../common/contact/FormResponse";
const { spinner } = styles;

const Contact = () => {
  const { isGetService, setIsGetService, serviceIdx } = useServiceContext();

  const sendEmailSchema = z.object({
    email: z.string().email({
      message: "This email is invalid",
    }),
    subject: z.string().min(isGetService ? 0 : 8, {
      message: "subject at least has 8 characters",
    }),
    message: z.string().min(12, {
      message: "Message at least has 12 characters",
    }),
  });

  const [formResponse, setFormResponse] = useState<{
    error: boolean;
    message: string;
  } | null>(null);

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof sendEmailSchema>>({
    resolver: zodResolver(sendEmailSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitHandler = (values: z.infer<typeof sendEmailSchema>) => {
    setFormResponse(null);
    startTransition(() => {
      const { email, message, subject } = values;
      sendEmail(
        email,
        message,
        isGetService
          ? `I am looking for ( ${services[serviceIdx].service} ) service`
          : subject
      )
        .then((res) => {
          setFormResponse(res);
        })
        .catch((message) => setFormResponse({ error: true, message: message }));
    });
  };

  return (
    <section id="contact">
      <MaxWidthWrapper>
        <SectionTitle
          title="Let's Talk!"
          description="Contact me now & get in touch !"
        />

        <div className=" p-[1px] rad bg-[var(--border)] transition-opacity">
          <Spotlight size={1000} className="background-gradient" />
          <div className="relative grid lg:grid-cols-12 lg:p-16 p-8 gap-16 size-full rad bg-[var(--bg-primary)] dark:bg-[var(--bg-secondary)]">
            <div className="lg:order-2 lg:col-span-8">
              <Form {...form}>
                <form
                  className="space-y-8"
                  onSubmit={form.handleSubmit(submitHandler)}
                >
                  <div className="space-y-8">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="md:col-span-1 col-span-2">
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your Email"
                              type="text"
                              disabled={isPending}
                              autoComplete="on"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="relative md:col-span-1 col-span-2">
                          {isGetService ? (
                            <CircleX
                              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-red-500 hover:opacity-50 duration"
                              onClick={() => setIsGetService(false)}
                              strokeWidth={1.5}
                            />
                          ) : null}
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your Subject"
                              type="text"
                              disabled={isPending || isGetService}
                              autoComplete="on"
                              value={
                                isGetService
                                  ? `I am looking for ( ${services[serviceIdx].service} ) service`
                                  : field.value
                              }
                              onChange={field.onChange}
                            />
                          </FormControl>
                          {isGetService ? null : <FormMessage />}
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Your Message"
                              disabled={isPending}
                              autoComplete="on"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormResponse
                    error={formResponse?.error}
                    message={formResponse?.message}
                  />

                  <div className="md:w-70">
                    <Button
                      type="submit"
                      className="flex-center md:w-60 w-full py-14 group !rounded-full"
                      variant="primary"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <span className={spinner}></span>
                      ) : (
                        <Magnetic>
                          <div className="flex-center">
                            <span className="group-hover:scale-90 duration-200">
                              Send Message
                            </span>
                            <Send
                              size={18}
                              className="ml-1 group-hover:scale-110 group-hover:ml-2 group-hover:translate-y-[-2px] duration-200"
                            />
                          </div>
                        </Magnetic>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            <div className="grid gap-8 order-1 lg:grid-cols-1 md:grid-cols-2 lg:col-span-4">
              {contact_info.map((item, i) => (
                <ContactInfo key={i} {...item} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </MaxWidthWrapper>
    </section>
  );
};

export default Contact;

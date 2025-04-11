"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-pink-800 via-pink-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              We're here to answer your questions and help you leverage data for your business success
            </p>
          </div>
        </div>
      </section>

      <div className="container max-w-[800px] px-4 py-12 md:py-16 lg:py-20 mx-auto">
        <div className="space-y-8">
          {/* Introduction Text */}
          <div className="text-center space-y-4">
            <p className="text-lg text-white/80 leading-relaxed">
              Does your company have a project that requires data analytics expertise? Please feel free to send an
              email. I would love to answer your questions or requests. We can help with one time projects or ongoing
              efforts to make a shift towards a more data driven culture. We can help guide your executives and teams to
              better use data as a tool in their decision process.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-background/30 backdrop-blur-sm p-6 rounded-lg border border-pink-900/20 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2>
            <p className="text-sm text-white/70 mb-6">
              Fields marked with an <span className="text-primary">*</span> are required
            </p>

            {isSubmitted ? (
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-green-400 mb-2">Thank You!</h3>
                <p className="text-green-300">
                  Your message has been received. We'll get back to you within 24-48 hours.
                </p>
                <Button
                  className="mt-4 bg-primary hover:bg-primary/80 text-white transition-colors"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-background/20 border-pink-800/30 text-white focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-background/20 border-pink-800/30 text-white focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="bg-background/20 border-pink-800/30 text-white focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 transition-all transform hover:scale-105 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


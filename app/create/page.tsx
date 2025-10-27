"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Plus, X } from "lucide-react"

const POLL_TYPES = [
  { id: "single", label: "Single Choice", description: "One answer per voter" },
  { id: "multiple", label: "Multiple Choice", description: "Multiple answers allowed" },
  { id: "ranking", label: "Ranking", description: "Rank options by preference" },
  { id: "scale", label: "Scale", description: "Rate on a scale (1-10)" },
]

const CATEGORIES = [
  "Governance",
  "Research",
  "Trends",
  "Finance",
  "Development",
  "Sustainability",
  "Community",
  "Other",
]

const DURATIONS = [
  { value: "1h", label: "1 Hour" },
  { value: "24h", label: "1 Day" },
  { value: "7d", label: "1 Week" },
  { value: "30d", label: "1 Month" },
  { value: "custom", label: "Custom" },
]

export default function CreatePoll() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    pollType: "single",
    category: "Governance",
    duration: "7d",
    options: ["", ""],
    isPrivate: false,
    requiresReputation: false,
    minReputation: 0,
    incentive: 0,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...formData.options]
    newOptions[index] = value
    setFormData((prev) => ({
      ...prev,
      options: newOptions,
    }))
  }

  const addOption = () => {
    setFormData((prev) => ({
      ...prev,
      options: [...prev.options, ""],
    }))
  }

  const removeOption = (index: number) => {
    if (formData.options.length > 2) {
      setFormData((prev) => ({
        ...prev,
        options: prev.options.filter((_, i) => i !== index),
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) {
      newErrors.title = "Poll title is required"
    }
    if (formData.title.length > 200) {
      newErrors.title = "Title must be less than 200 characters"
    }

    if (formData.description.length > 1000) {
      newErrors.description = "Description must be less than 1000 characters"
    }

    const filledOptions = formData.options.filter((opt) => opt.trim())
    if (filledOptions.length < 2) {
      newErrors.options = "At least 2 options are required"
    }

    if (formData.requiresReputation && formData.minReputation < 0) {
      newErrors.minReputation = "Minimum reputation cannot be negative"
    }

    if (formData.incentive < 0) {
      newErrors.incentive = "Incentive cannot be negative"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Log the poll data (in a real app, this would be sent to a server)
    console.log("[v0] Poll created:", {
      ...formData,
      options: formData.options.filter((opt) => opt.trim()),
      createdAt: new Date().toISOString(),
    })

    setSubmitted(true)

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        title: "",
        description: "",
        pollType: "single",
        category: "Governance",
        duration: "7d",
        options: ["", ""],
        isPrivate: false,
        requiresReputation: false,
        minReputation: 0,
        incentive: 0,
      })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className="flex h-screen bg-[#0A0E14]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <Link href="/dashboard">
                <Button variant="ghost" size="icon" className="text-[#A0AEC0] hover:text-white">
                  <ArrowLeft size={20} />
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-white">Create New Poll</h1>
                <p className="text-[#A0AEC0] mt-1">Design your custom poll with privacy and incentives</p>
              </div>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-[#00D4AA]/10 border border-[#00D4AA] rounded-lg">
                <p className="text-[#00D4AA] font-semibold">✓ Poll created successfully! Redirecting...</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <Card className="bg-[#1E2330] border-[#2D3748] p-6">
                <h2 className="text-xl font-bold text-white mb-6">Basic Information</h2>

                <div className="space-y-4">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Poll Title <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g., What is your preferred voting method?"
                      className="bg-[#0A0E14] border-[#2D3748] text-white placeholder:text-[#718096]"
                      maxLength={200}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.title && <span className="text-red-500 text-sm">{errors.title}</span>}
                      <span className="text-[#718096] text-sm ml-auto">{formData.title.length}/200</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Provide context and details about your poll..."
                      className="w-full bg-[#0A0E14] border border-[#2D3748] rounded-md px-3 py-2 text-white placeholder:text-[#718096] focus:outline-none focus:border-[#00D4AA] resize-none"
                      rows={4}
                      maxLength={1000}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
                      <span className="text-[#718096] text-sm ml-auto">{formData.description.length}/1000</span>
                    </div>
                  </div>

                  {/* Category & Poll Type */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full bg-[#0A0E14] border border-[#2D3748] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#00D4AA]"
                      >
                        {CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Duration</label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full bg-[#0A0E14] border border-[#2D3748] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#00D4AA]"
                      >
                        {DURATIONS.map((dur) => (
                          <option key={dur.value} value={dur.value}>
                            {dur.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Poll Type */}
              <Card className="bg-[#1E2330] border-[#2D3748] p-6">
                <h2 className="text-xl font-bold text-white mb-6">Poll Type</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {POLL_TYPES.map((type) => (
                    <label
                      key={type.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-smooth ${
                        formData.pollType === type.id
                          ? "border-[#00D4AA] bg-[#00D4AA]/5"
                          : "border-[#2D3748] bg-[#0A0E14] hover:border-[#00D4AA]/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="pollType"
                        value={type.id}
                        checked={formData.pollType === type.id}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span className="font-semibold text-white">{type.label}</span>
                      <p className="text-sm text-[#A0AEC0] mt-1">{type.description}</p>
                    </label>
                  ))}
                </div>
              </Card>

              {/* Poll Options */}
              <Card className="bg-[#1E2330] border-[#2D3748] p-6">
                <h2 className="text-xl font-bold text-white mb-6">Poll Options</h2>

                <div className="space-y-3">
                  {formData.options.map((option, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        placeholder={`Option ${index + 1}`}
                        className="bg-[#0A0E14] border-[#2D3748] text-white placeholder:text-[#718096]"
                      />
                      {formData.options.length > 2 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeOption(index)}
                          className="text-red-500 hover:bg-red-500/10"
                        >
                          <X size={20} />
                        </Button>
                      )}
                    </div>
                  ))}

                  {errors.options && <span className="text-red-500 text-sm">{errors.options}</span>}

                  <Button
                    type="button"
                    variant="outline"
                    onClick={addOption}
                    className="w-full border-[#2D3748] text-[#00D4AA] hover:bg-[#00D4AA]/10 bg-transparent"
                  >
                    <Plus size={18} className="mr-2" />
                    Add Option
                  </Button>
                </div>
              </Card>

              {/* Privacy & Incentives */}
              <Card className="bg-[#1E2330] border-[#2D3748] p-6">
                <h2 className="text-xl font-bold text-white mb-6">Privacy & Incentives</h2>

                <div className="space-y-4">
                  {/* Privacy Toggle */}
                  <div className="flex items-center justify-between p-4 bg-[#0A0E14] rounded-lg border border-[#2D3748]">
                    <div>
                      <p className="font-semibold text-white">Private Poll</p>
                      <p className="text-sm text-[#A0AEC0]">Hide poll from public marketplace</p>
                    </div>
                    <input
                      type="checkbox"
                      name="isPrivate"
                      checked={formData.isPrivate}
                      onChange={handleInputChange}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </div>

                  {/* Reputation Requirement */}
                  <div className="flex items-center justify-between p-4 bg-[#0A0E14] rounded-lg border border-[#2D3748]">
                    <div>
                      <p className="font-semibold text-white">Require Minimum Reputation</p>
                      <p className="text-sm text-[#A0AEC0]">Only allow voters with certain reputation</p>
                    </div>
                    <input
                      type="checkbox"
                      name="requiresReputation"
                      checked={formData.requiresReputation}
                      onChange={handleInputChange}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </div>

                  {formData.requiresReputation && (
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Minimum Reputation Score</label>
                      <Input
                        type="number"
                        name="minReputation"
                        value={formData.minReputation}
                        onChange={handleInputChange}
                        placeholder="e.g., 1000"
                        className="bg-[#0A0E14] border-[#2D3748] text-white placeholder:text-[#718096]"
                        min="0"
                      />
                      {errors.minReputation && <span className="text-red-500 text-sm">{errors.minReputation}</span>}
                    </div>
                  )}

                  {/* Incentive */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Incentive (ALGO)</label>
                    <Input
                      type="number"
                      name="incentive"
                      value={formData.incentive}
                      onChange={handleInputChange}
                      placeholder="e.g., 10"
                      className="bg-[#0A0E14] border-[#2D3748] text-white placeholder:text-[#718096]"
                      min="0"
                      step="0.1"
                    />
                    <p className="text-sm text-[#A0AEC0] mt-1">Reward voters with ALGO tokens</p>
                    {errors.incentive && <span className="text-red-500 text-sm">{errors.incentive}</span>}
                  </div>
                </div>
              </Card>

              {/* Submit Buttons */}
              <div className="flex gap-4 justify-end">
                <Link href="/dashboard">
                  <Button variant="outline" className="border-[#2D3748] text-white hover:bg-[#2D3748] bg-transparent">
                    Cancel
                  </Button>
                </Link>
                <Button
                  type="submit"
                  className="bg-[#00D4AA] text-black hover:bg-[#00B894] font-semibold px-8"
                  disabled={submitted}
                >
                  {submitted ? "Creating..." : "Create Poll"}
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

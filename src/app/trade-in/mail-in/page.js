"use client";

import { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "Mail-In | SnowSwap",
};

export default function MailInForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // STEP 1 state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // STEP 2 state
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState(null);

  const step1Valid = name.trim() !== "" && email.trim() !== "";
  const step2Valid = brand.trim() !== "" && size.trim() !== "" && image;

  if (submitted) {
    return (
      <main className="mx-auto max-w-xl px-6 py-16 text-center">
        <h1 className="text-3xl font-extrabold">Thank you for your trade-in</h1>
        <p className="mt-4 text-gray-700">We’ve received your information. You’ll get an email once we have received and reviewed your item.</p>

        <Link href="/" className="mt-10 inline-block rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white hover:bg-gray-800">
          Back to home
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-3xl font-extrabold">Mail-in your gear</h1>

      <p className="mt-4 text-gray-700">Fill out the form below to start your trade-in.</p>

      <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-gray-500">Step {step} of 2</p>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="mt-6 space-y-4">
          <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" />

          <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" />

          {!step1Valid && <p className="text-sm text-red-600">Please fill out all fields before continuing.</p>}

          <button
            onClick={() => step1Valid && setStep(2)}
            disabled={!step1Valid}
            className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold text-white
              ${step1Valid ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"}`}
          >
            Continue
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="mt-6 space-y-4">
          <input type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} required className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" />

          <input type="text" placeholder="Size" value={size} onChange={(e) => setSize(e.target.value)} required className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" />

          {/* Product image upload (more clear + still simple) */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">Product image</p>

            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) => setImage(e.target.files[0])}
              className="w-fit cursor-pointer rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold
                         file:border-0 file:bg-transparent file:text-gray-900 hover:file:text-gray-700"
            />

            <p className="text-xs text-gray-500">Please upload a clear photo of the product you want to trade in.</p>

            {image && (
              <p className="text-xs text-gray-600">
                Selected file: <span className="font-semibold">{image.name}</span>
              </p>
            )}
          </div>

          {!step2Valid && <p className="text-sm text-red-600">Please fill out all fields and upload an image.</p>}

          <div className="mt-6 flex gap-3">
            <button onClick={() => setStep(1)} className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold">
              Back
            </button>

            <button
              onClick={() => step2Valid && setSubmitted(true)}
              disabled={!step2Valid}
              className={`w-full rounded-xl px-4 py-3 text-sm font-semibold text-white
                ${step2Valid ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"}`}
            >
              Send trade-in
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

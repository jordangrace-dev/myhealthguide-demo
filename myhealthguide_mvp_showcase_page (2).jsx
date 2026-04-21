import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Activity,
  Moon,
  Heart,
  Footprints,
  ClipboardList,
  BellRing,
  Stethoscope,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pages = [
  {
    id: "signals",
    title: "Signals",
    icon: Activity,
    tag: "Track less, learn more",
    description:
      "Sleep, mood, and activity are simple enough to log consistently, but meaningful enough to support real clinical insight. Instead of tracking everything, users focus on the signals that reflect how they are actually doing.",
    bullets: [
      "Simple daily check-ins",
      "Personalized over time",
      "Clinical value without overload",
    ],
    screen: (
      <div className="h-full w-full bg-[#F7F4EF] p-4">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <div className="text-2xl font-semibold text-slate-800">Daily Signals</div>
            <div className="mt-1 text-xs italic text-[#8B8A84]">
              A few quick signals each day build a clearer picture over time.
            </div>
          </div>
          <div className="rounded-full bg-[#ECE6DD] px-3 py-1 text-[10px] text-[#8B8A84]">
            0 of 3 logged
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl border border-[#C9D7E3] bg-white p-3">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#6BA8D6]">
              <Moon className="h-4 w-4" /> Sleep
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-[#6E6C66]">
              <div className="rounded-xl border bg-[#F7F4EF] py-2">Restful</div>
              <div className="rounded-xl border bg-[#F7F4EF] py-2">OK</div>
              <div className="rounded-xl border bg-[#F7F4EF] py-2">Poor</div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E6C98D] bg-white p-3">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#C7972E]">
              <Heart className="h-4 w-4" /> Mood
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-[#6E6C66]">
              <div className="rounded-xl border bg-[#F7F4EF] py-2">Good</div>
              <div className="rounded-xl border bg-[#F7F4EF] py-2">Neutral</div>
              <div className="rounded-xl border bg-[#F7F4EF] py-2">Low</div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#B9D0B4] bg-white p-3">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#6E9A5D]">
              <Footprints className="h-4 w-4" /> Activity
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-[#6E6C66]">
              <div className="rounded-xl border bg-[#F7F4EF] py-2">Active</div>
              <div className="rounded-xl border bg-[#F7F4EF] py-2">Light</div>
              <div className="rounded-xl border bg-[#F7F4EF] py-2">Sedentary</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "insight",
    title: "Insight",
    icon: BellRing,
    tag: "Patterns, surfaced gently",
    description:
      "Insight gives users something back for their effort. Instead of a wall of data, it turns repeated entries into plain-language observations that feel personal, calm, and worth coming back for.",
    bullets: [
      "Early pattern recognition",
      "Easy to understand",
      "Encourages reflection",
    ],
    screen: (
      <div className="h-full w-full bg-[#F7F4EF] p-4">
        <div className="text-3xl font-semibold text-slate-800">Insights</div>
        <div className="mt-4 rounded-2xl border bg-[#F1EEE9] p-4">
          <div className="text-lg font-medium text-slate-700">Keep logging to build useful insights.</div>
          <div className="mt-2 text-sm text-[#9A968D]">Your insights are still forming.</div>
        </div>
        <div className="mt-4 rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-[#ECE6DD]">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#88A776]">What we noticed</div>
          <div className="mt-3 text-xl font-medium leading-7 text-slate-800">Your signals are being tracked.</div>
          <div className="mt-3 text-sm leading-6 text-[#66645F]">
            You have been logging consistently. Keep going — patterns take a little time to emerge.
          </div>
          <div className="my-4 h-px bg-[#ECE6DD]" />
          <div className="flex flex-wrap gap-2 text-xs text-[#6E6C66]">
            <div className="rounded-full border bg-[#F7F4EF] px-3 py-2">Feels accurate</div>
            <div className="rounded-full border bg-[#F7F4EF] px-3 py-2">Not sure</div>
            <div className="rounded-full border bg-[#F7F4EF] px-3 py-2">Doesn't seem right</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "medications",
    title: "Medications",
    icon: ClipboardList,
    tag: "Support for daily routines",
    description:
      "Medication support stays practical and easy to use. Users can review medications, manage reminders, and take quick actions without the page feeling cluttered or clinical.",
    bullets: [
      "Organized medication view",
      "Quick reminder controls",
      "Supports adherence with less friction",
    ],
    screen: (
      <div className="h-full w-full bg-[#F7F4EF] p-4">
        <div className="mb-4 flex items-start justify-between">
          <div className="text-3xl font-semibold text-slate-800">Medications</div>
          <div className="rounded-full bg-[#7C9B6C] px-4 py-2 text-xs font-semibold text-white">+ Add New Med</div>
        </div>
        <div className="rounded-[2rem] border border-[#E7B79D] bg-white p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xl font-semibold text-slate-800">Lisinopril</div>
              <div className="text-sm text-[#8B8A84]">10mg</div>
            </div>
            <div className="rounded-xl bg-[#F7E2D9] px-3 py-2 text-xs font-semibold text-[#D26648]">Remove</div>
          </div>
          <div className="mt-4 rounded-xl bg-[#F1EEE9] px-4 py-3 text-sm text-[#66645F]">Take with water</div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-[#5C5A55]">
            <div className="rounded-xl border bg-white py-3">Taken</div>
            <div className="rounded-xl border bg-white py-3">Delayed</div>
            <div className="rounded-xl border bg-white py-3">Skipped</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "visit",
    title: "Visit",
    icon: Stethoscope,
    tag: "Bring something useful to care",
    description:
      "Visit prep turns daily engagement into something tangible. It helps users organize recent information into a clearer, more personalized summary they can actually use in a care conversation.",
    bullets: [
      "Visible clinical value",
      "Personalized summary building",
      "Easier appointment preparation",
    ],
    screen: (
      <div className="h-full w-full bg-[#F7F4EF] p-4">
        <div className="text-3xl font-semibold text-slate-800">Visit</div>
        <div className="mt-4 rounded-[2rem] bg-[#476B3F] p-5 text-white">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DDE7D4]">Your Next Visit</div>
          <div className="mt-3 text-3xl font-semibold leading-none">April 21 2026</div>
          <div className="mt-2 text-lg">1 pm</div>
          <div className="mt-1 text-sm text-[#DDE7D4]">We have started organizing your recent activity for this visit.</div>
          <div className="mt-5 rounded-2xl bg-white px-4 py-4 text-center text-lg font-semibold text-[#35542E]">View visit summary</div>
        </div>
      </div>
    ),
  },
];

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[480px] w-[250px] rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl">
      <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
      <div className="h-full w-full overflow-hidden rounded-[2rem] bg-[#F7F4EF]">
        {children}
      </div>
    </div>
  );
}

export default function MyHealthGuideShowcase() {
  const [index, setIndex] = useState(0);
  const active = pages[index];

  const visibleCards = useMemo(() => {
    return pages.map((page, i) => ({ ...page, offset: i - index }));
  }, [index]);

  const next = () => setIndex((prev) => (prev + 1) % pages.length);
  const prev = () => setIndex((prev) => (prev - 1 + pages.length) % pages.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F4EF] via-[#EFF3EE] to-white text-slate-900">
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="mb-8 rounded-[2rem] border border-[#E5EBE3] bg-white px-6 py-6 shadow-sm">
          <div className="text-center text-3xl font-semibold text-[#476B3F] md:text-4xl">
            Welcome to the myHealthGuide Experience
          </div>
          <div className="mt-4 flex justify-center">
            <div className="rounded-full bg-[#E8F0E4] px-4 py-2 text-sm font-medium text-[#476B3F]">
              ease of use · clinical value · personalized insights
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[560px_minmax(320px,1fr)] gap-8 items-start">
          <Card className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-[#476B3F]">Interactive page carousel</div>
                <div className="text-sm text-slate-500">Use the arrows to rotate through the experience</div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={next} className="rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative flex h-[520px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#EEF2F0] to-[#F7F4EF]">
              {visibleCards.map((page) => {
                const Icon = page.icon;
                const abs = Math.abs(page.offset);
                const isActive = page.offset === 0;
                if (abs > 2) return null;

                return (
                  <motion.div
                    key={page.id}
                    animate={{
                      x: page.offset * 120,
                      scale: isActive ? 1 : 0.84,
                      rotateY: page.offset * -22,
                      opacity: abs === 2 ? 0.16 : abs === 1 ? 0.5 : 1,
                      zIndex: 10 - abs,
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 24 }}
                    className="absolute"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="mb-3 flex items-center justify-center gap-2 text-sm font-medium text-slate-600">
                      <Icon className="h-4 w-4" /> {page.title}
                    </div>
                    <PhoneFrame>{page.screen}</PhoneFrame>
                  </motion.div>
                );
              })}
            </div>
          </Card>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-xl">
                <CardHeader className="pb-3">
                  <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-[#E8F0E4] px-3 py-1 text-sm font-medium text-[#476B3F]">
                    <active.icon className="h-4 w-4" /> {active.title}
                  </div>
                  <CardTitle className="text-3xl leading-tight text-slate-900">{active.tag}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-base leading-7 text-slate-600">{active.description}</p>
                  <div className="grid gap-3">
                    {active.bullets.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-[#F8FAF8] px-4 py-4 text-sm text-slate-700 ring-1 ring-[#E5EBE3]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8">
          <Card className="rounded-[2rem] border border-slate-900 bg-black shadow-sm">
            <CardContent className="p-6">
              <div className="text-xl font-semibold text-white">Join the beta</div>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                Try a calmer, easier way to track what matters, discover more personal insights, and bring something more useful into care conversations.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Button className="w-full rounded-2xl bg-[#7C9B6C] py-6 text-lg font-semibold text-white hover:opacity-90">
                  Download Beta App
                </Button>
                <Button className="w-full rounded-2xl bg-[#C97A5A] py-5 text-base text-white hover:opacity-90">
                  Download Beta Test Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

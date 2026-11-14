<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  ArrowRight,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Store,
  Sun,
  CheckCircle2,
  MapPin,
  PhoneCall,
} from 'lucide-vue-next'
import TravelerPhoneSimulator from '@/components/TravelerPhoneSimulator.vue'
import PartnerAdminShowcase from '@/components/PartnerAdminShowcase.vue'
import HybridModelExplorer from '@/components/HybridModelExplorer.vue'
import {
  HERO_STATS,
  MISSION_PILLARS,
  TRAVELER_VERTICALS,
  PARTNER_ROLES,
  ECOSYSTEM_STEPS,
  WHY_CHOOSE_ROAMCEYLON,
} from '@/data/roamCeylonData'

const craftShowcase = [
  {
    name: 'Pure Ceylon Tea',
    region: 'Nuwara Eliya & Hatton',
    image: '/assets/tea.png',
    tag: 'Highland Estates',
  },
  {
    name: 'Ambalangoda Kolam Masks',
    region: 'Southern Coast Artisans',
    image: '/assets/mask.png',
    tag: 'Hand-Carved Heritage',
  },
  {
    name: 'True Ceylon Cinnamon',
    region: 'Galle & Matara Gardens',
    image: '/assets/cinnamon.png',
    tag: 'Estate Harvest',
  },
  {
    name: 'Handloom Silk & Scarves',
    region: 'Kandy & Dumbara',
    image: '/assets/scarf.png',
    tag: 'Village Weavers',
  },
]
</script>

<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-[#092618] via-[#0F3D26] to-[#134D30] text-white"
    >
      <!-- Subtle decorative backdrop -->
      <div
        class="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#FFD26B]/10 blur-3xl"
      />
      <div
        class="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#2E7D32]/20 blur-3xl"
      />

      <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div class="grid items-center gap-12 lg:grid-cols-12">
          <!-- Hero Left Copy -->
          <div class="lg:col-span-7">
            <div
              class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFD26B]/30 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#FFD26B] backdrop-blur-sm"
            >
              <Sparkles class="h-3.5 w-3.5" />
              Made in Sri Lanka by IdeaTech
            </div>

            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore Sri Lanka
              <span class="block text-[#FFD26B]">Like a Trusted Local Friend</span>
            </h1>

            <p class="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-50/90 sm:text-xl">
              <strong>RoamCeylon</strong> brings personalized trip planning, verified boutique stays,
              guided local tours, handmade village crafts, and one-tap emergency help into one warm,
              easy-to-use mobile app — connected directly with local businesses through
              <strong>RoamCeylon Admin</strong>.
            </p>

            <div class="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#traveler-app"
                class="inline-flex items-center gap-2 rounded-full bg-[#FFD26B] px-7 py-3.5 text-sm font-bold text-[#092618] shadow-lg transition hover:bg-[#ffe094]"
              >
                Explore the Traveler App
                <ArrowRight class="h-4 w-4" />
              </a>
              <a
                href="#partner-app"
                class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                For Local Business Owners
              </a>
              <a
                href="#smart-planner"
                class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#FFD26B] underline decoration-[#FFD26B]/40 underline-offset-4 transition hover:text-white"
              >
                Try the Smart Trip Matcher
              </a>
            </div>

            <!-- Hero Quick Highlights -->
            <div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div
                v-for="stat in HERO_STATS"
                :key="stat.label"
                class="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm"
              >
                <div class="text-2xl font-extrabold text-[#FFD26B]">{{ stat.value }}</div>
                <div class="mt-1 text-xs font-semibold text-white">{{ stat.label }}</div>
                <div class="mt-1 text-[11px] leading-snug text-emerald-100/75">
                  {{ stat.detail }}
                </div>
              </div>
            </div>
          </div>

          <!-- Hero Right Visual Collage -->
          <div class="lg:col-span-5">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              <div
                class="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2.5 shadow-2xl backdrop-blur-md"
              >
                <img
                  src="/assets/homepage-hero.png"
                  alt="RoamCeylon Sri Lanka travel showcase featuring scenic coast, wildlife, and local culture"
                  class="h-72 w-full rounded-2xl object-cover sm:h-80"
                />
                <div class="mt-3 grid grid-cols-3 gap-2.5">
                  <div class="overflow-hidden rounded-xl bg-[#092618]/60">
                    <img
                      src="/assets/sigiriya-treetops.png"
                      alt="Sigiriya rock fortress rising above green treetops"
                      class="h-24 w-full object-cover"
                    />
                  </div>
                  <div class="overflow-hidden rounded-xl bg-[#092618]/60">
                    <img
                      src="/assets/galle-surfer.png"
                      alt="Sunny waves on Sri Lanka southern coast"
                      class="h-24 w-full object-cover"
                    />
                  </div>
                  <div class="overflow-hidden rounded-xl bg-[#092618]/60">
                    <img
                      src="/assets/elephant.png"
                      alt="Wild Sri Lankan elephant in natural sanctuary"
                      class="h-24 w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <!-- Floating badge -->
              <div
                class="mt-4 flex items-center gap-3 rounded-2xl border border-[#FFD26B]/30 bg-[#092618]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:absolute sm:-bottom-5 sm:-left-6 sm:mt-0"
              >
                <img
                  src="/assets/ai-avatar.png"
                  alt="RoamCeylon Smart Travel Guide"
                  class="h-10 w-10 rounded-full border border-[#FFD26B]/50 object-cover"
                />
                <div>
                  <div class="text-xs font-bold text-[#FFD26B]">Two Apps, One Island Community</div>
                  <div class="text-xs text-emerald-100">
                    For curious travelers &amp; verified Sri Lankan hosts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section id="mission" class="bg-[#FBFAF6] py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <div
            class="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold tracking-wide text-[#0F3D26] uppercase"
          >
            <HeartHandshake class="h-3.5 w-3.5" />
            Our Mission
          </div>
          <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-[#092618] sm:text-4xl">
            From Travel Dreams to Effortless Island Memories
          </h2>
          <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Travelers often fall in love with photos of Sri Lanka online, only to struggle with
            confusing bus routes, unpredictable monsoon seasons, or hard-to-find authentic shops.
            RoamCeylon closes that gap while helping family-run stays and rural artisans thrive.
          </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-2">
          <article
            v-for="pillar in MISSION_PILLARS"
            :key="pillar.id"
            class="flex flex-col justify-between rounded-3xl border border-emerald-900/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div>
              <div class="flex items-center justify-between gap-3">
                <span
                  class="rounded-full bg-[#FFD26B]/30 px-3 py-1 text-xs font-bold text-[#092618]"
                >
                  {{ pillar.tag }}
                </span>
                <span class="text-xs font-semibold text-emerald-800">
                  {{ pillar.highlight }}
                </span>
              </div>
              <h3 class="mt-4 text-xl font-bold text-[#092618]">
                {{ pillar.title }}
              </h3>
              <div class="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                <p>
                  <strong class="text-slate-800">The challenge:</strong>
                  {{ pillar.problem }}
                </p>
                <p>
                  <strong class="text-[#0F3D26]">How RoamCeylon helps:</strong>
                  {{ pillar.solution }}
                </p>
              </div>
            </div>
          </article>
        </div>

        <!-- Seasonal & Eco Story Strip -->
        <div
          class="mt-10 grid items-center gap-8 rounded-3xl bg-[#0F3D26] p-8 text-white lg:grid-cols-12"
        >
          <div class="lg:col-span-7">
            <div class="flex items-center gap-2 text-xs font-bold tracking-wider text-[#FFD26B] uppercase">
              <Sun class="h-4 w-4" />
              Always Sunny Somewhere on the Island
            </div>
            <h3 class="mt-2 text-2xl font-bold sm:text-3xl">
              Smart Seasonal Guidance &amp; Fair Village Commerce
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-emerald-50/90 sm:text-base">
              Sri Lanka has two monsoon seasons, meaning one coast is bathed in sunshine almost
              every month of the year. RoamCeylon gently steers you toward clear skies — West &amp;
              South beaches from November to April, and the peaceful East Coast from May to
              September — while spotlighting community homestays, eco-sanctuaries, and small craft
              workshops.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-3 lg:col-span-5">
            <div class="overflow-hidden rounded-2xl bg-white/10 p-1.5">
              <img
                src="/assets/bentota.png"
                alt="Golden Bentota beachfront in sunny season"
                class="h-32 w-full rounded-xl object-cover"
              />
              <p class="px-1.5 py-1.5 text-center text-xs font-medium text-[#FFD26B]">
                South &amp; West (Nov – Apr)
              </p>
            </div>
            <div class="overflow-hidden rounded-2xl bg-white/10 p-1.5">
              <img
                src="/assets/tea-fortress.png"
                alt="Misty highland tea country and scenic hillscapes"
                class="h-32 w-full rounded-xl object-cover"
              />
              <p class="px-1.5 py-1.5 text-center text-xs font-medium text-[#FFD26B]">
                Cool Highlands Year-Round
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Traveler App Section -->
    <section id="traveler-app" class="border-t border-emerald-900/10 bg-white py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <div
            class="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold tracking-wide text-[#092618] uppercase"
          >
            <Compass class="h-3.5 w-3.5" />
            The Traveler App — RoamCeylon
          </div>
          <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-[#092618] sm:text-4xl">
            Everything You Need in One Pocket Companion
          </h2>
          <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Tap through the interactive phone preview below to see how travelers discover sights,
            chat with the Smart Trip Planner, shop local Sri Lankan crafts, and stay protected with
            instant emergency numbers.
          </p>
        </div>

        <!-- Interactive Phone Showcase (Full Width) -->
        <div
          class="mt-12 rounded-3xl border border-emerald-900/10 bg-[#FBFAF6] p-6 shadow-sm sm:p-8 lg:p-10"
        >
          <TravelerPhoneSimulator />
        </div>

        <!-- 5 Traveler Verticals + Emergency Safety Net (Balanced 3-Column Grid) -->
        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="vertical in TRAVELER_VERTICALS"
            :key="vertical.id"
            class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-[#FBFAF6] p-6 transition hover:border-emerald-700/30 hover:bg-white hover:shadow-md"
          >
            <div>
              <div class="flex items-center justify-between gap-2">
                <span
                  class="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
                  :style="{ backgroundColor: vertical.bgTint, color: vertical.color }"
                >
                  {{ vertical.badge }}
                </span>
              </div>
              <h3 class="mt-3 text-lg font-bold text-[#092618]">
                {{ vertical.title }}
              </h3>
              <p class="mt-1 text-xs font-medium text-slate-600">
                {{ vertical.subtitle }}
              </p>

              <ul class="mt-4 space-y-2">
                <li
                  v-for="highlight in vertical.highlights"
                  :key="highlight"
                  class="flex items-start gap-2 text-xs leading-relaxed text-slate-700"
                >
                  <CheckCircle2 class="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0F3D26]" />
                  <span>{{ highlight }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-5 border-t border-slate-200/80 pt-3">
              <p class="text-[11px] font-semibold tracking-wide text-slate-500 uppercase">
                Traveler Favorites
              </p>
              <div class="mt-2 flex flex-wrap gap-1.5">
                <span
                  v-for="tag in vertical.popularFor"
                  :key="tag"
                  class="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Emergency Direct Assurance Card (6th Card in Grid) -->
          <div
            class="flex flex-col justify-between rounded-3xl border border-red-200 bg-red-50/80 p-6 transition hover:shadow-md"
          >
            <div>
              <div class="flex items-center justify-between gap-3">
                <span
                  class="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-900"
                >
                  24/7 Safety Net
                </span>
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white"
                >
                  <PhoneCall class="h-5 w-5" />
                </div>
              </div>
              <h3 class="mt-3 text-lg font-bold text-red-950">
                One-Tap Sri Lanka Emergency Dialling
              </h3>
              <p class="mt-2 text-xs leading-relaxed text-red-900/90 sm:text-sm">
                Works even when you have limited mobile signal: instant buttons for Police
                (<strong>119</strong>), Suwa Seriya Ambulance (<strong>1990</strong>), Fire
                &amp; Rescue (<strong>110</strong>), and Tourist Police (<strong>1331</strong>).
              </p>
            </div>
            <div class="mt-5 border-t border-red-200/80 pt-4">
              <RouterLink
                to="/privacy-policy"
                class="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-bold text-red-900 shadow-sm ring-1 ring-red-200 transition hover:bg-red-100"
              >
                Safety &amp; Privacy Info
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Authentic Marketplace Strip -->
        <div class="mt-20">
          <div class="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p class="text-xs font-bold tracking-wider text-[#0F3D26] uppercase">
                RoamCeylon Local Marketplace
              </p>
              <h3 class="mt-1 text-2xl font-bold text-[#092618]">
                Authentic Crafts Straight from Sri Lankan Workshops
              </h3>
            </div>
            <p class="max-w-md text-sm text-slate-600">
              Every item comes directly from a verified Sri Lankan maker — zero middlemen markups,
              clear pricing, and real stories behind every piece.
            </p>
          </div>

          <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="item in craftShowcase"
              :key="item.name"
              class="group overflow-hidden rounded-3xl border border-slate-200 bg-[#FBFAF6] transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div class="h-44 overflow-hidden bg-emerald-950/5">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="p-4">
                <span
                  class="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-[#0F3D26]"
                >
                  {{ item.tag }}
                </span>
                <h4 class="mt-2 font-bold text-[#092618]">{{ item.name }}</h4>
                <p class="mt-1 flex items-center gap-1 text-xs text-slate-500">
                  <MapPin class="h-3.5 w-3.5 text-emerald-700" />
                  {{ item.region }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Smart Trip Planner / AI Section -->
    <section
      id="smart-planner"
      class="border-t border-emerald-900/10 bg-gradient-to-b from-[#092618] to-[#0F3D26] py-20 text-white sm:py-24"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-[#FFD26B]/40 bg-white/10 px-4 py-1 text-xs font-bold tracking-wide text-[#FFD26B] uppercase"
          >
            <Sparkles class="h-3.5 w-3.5" />
            Smart Trip Concierge
          </div>
          <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            How Our Smart Recommendation Guide Plans Your Trip
          </h2>
          <p class="mt-4 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
            Instead of showing every tourist the exact same crowded checklist, RoamCeylon listens to
            your travel style, matches you with places locals love for that time of year, and
            organizes your days around realistic Sri Lankan travel times — always keeping you in
            complete control.
          </p>
        </div>

        <div class="mt-12">
          <HybridModelExplorer />
        </div>
      </div>
    </section>

    <!-- Partner / Admin App Section -->
    <section id="partner-app" class="bg-[#FBFAF6] py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <div
            class="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold tracking-wide text-[#0F3D26] uppercase"
          >
            <Store class="h-3.5 w-3.5" />
            For Local Businesses — RoamCeylon Admin
          </div>
          <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-[#092618] sm:text-4xl">
            Empowering Hotels, Guides, Activity Hosts &amp; Craft Shops
          </h2>
          <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            RoamCeylon Admin gives Sri Lankan hospitality owners an easy-to-learn control center on
            web and mobile. Each partner completes a quick three-step verification (ID check,
            business license, and a quick live selfie) to earn a Verified Trust Badge visible to
            travelers.
          </p>
        </div>

        <!-- Interactive Partner Dashboard Showcase -->
        <div class="mt-12">
          <PartnerAdminShowcase />
        </div>

        <!-- 4 Partner Roles -->
        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="role in PARTNER_ROLES"
            :key="role.id"
            class="flex flex-col justify-between rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm"
          >
            <div>
              <span
                class="inline-block rounded-full bg-[#092618] px-3 py-1 text-[11px] font-bold text-[#FFD26B]"
              >
                {{ role.badge }}
              </span>
              <h3 class="mt-4 text-lg font-bold text-[#092618]">
                {{ role.title }}
              </h3>
              <p class="mt-1 text-xs font-semibold text-emerald-700">
                {{ role.tagline }}
              </p>
              <p class="mt-3 text-sm leading-relaxed text-slate-600">
                {{ role.description }}
              </p>

              <ul class="mt-4 space-y-2 border-t border-slate-100 pt-4">
                <li
                  v-for="feat in role.features"
                  :key="feat"
                  class="flex items-start gap-2 text-xs text-slate-700"
                >
                  <ShieldCheck class="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0F3D26]" />
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-5 flex flex-wrap gap-1.5">
              <span
                v-for="cap in role.capabilities"
                :key="cap"
                class="rounded-full bg-[#FBFAF6] px-2.5 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-slate-200"
              >
                {{ cap }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How the Ecosystem Connects -->
    <section id="how-it-works" class="border-t border-emerald-900/10 bg-white py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-xs font-bold tracking-wider text-[#0F3D26] uppercase">
            How Everything Connects
          </p>
          <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-[#092618] sm:text-4xl">
            From Dreaming at Home to Supporting Local Communities
          </h2>
          <p class="mt-4 text-base text-slate-600">
            See how RoamCeylon and RoamCeylon Admin work together smoothly in five everyday steps.
          </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-5">
          <div
            v-for="item in ECOSYSTEM_STEPS"
            :key="item.step"
            class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-[#FBFAF6] p-6"
          >
            <div>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-black text-[#0F3D26]/30">{{ item.step }}</span>
                <span
                  class="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-[#0F3D26]"
                >
                  {{ item.actor }}
                </span>
              </div>
              <h3 class="mt-4 text-base font-bold text-[#092618]">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-xs leading-relaxed text-slate-600">
                {{ item.summary }}
              </p>
            </div>
            <div class="mt-4 border-t border-slate-200/80 pt-3">
              <p class="text-[11px] font-semibold text-[#0F3D26]">
                {{ item.outcome }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose RoamCeylon -->
    <section id="why-roamceylon" class="border-t border-emerald-900/10 bg-[#FBFAF6] py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-xs font-bold tracking-wider text-[#0F3D26] uppercase">
            Thoughtfully Crafted Experience
          </p>
          <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-[#092618] sm:text-4xl">
            Built for Real Sri Lankan Roads, Coasts &amp; Communities
          </h2>
          <p class="mt-4 text-base text-slate-600">
            Designed from the ground up for travelers exploring the island and the local hosts who
            welcome them.
          </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="card in WHY_CHOOSE_ROAMCEYLON"
            :key="card.title"
            class="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm"
          >
            <span
              class="inline-block rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold text-[#092618]"
            >
              {{ card.tag }}
            </span>
            <h3 class="mt-3 text-lg font-bold text-[#092618]">
              {{ card.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">
              {{ card.summary }}
            </p>
            <ul class="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
              <li
                v-for="hl in card.highlights"
                :key="hl"
                class="flex items-center gap-2 text-xs font-medium text-slate-700"
              >
                <CheckCircle2 class="h-3.5 w-3.5 shrink-0 text-[#0F3D26]" />
                <span>{{ hl }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Privacy & Trust CTA Banner -->
    <section class="bg-[#092618] py-16 text-white">
      <div
        class="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"
      >
        <div class="max-w-2xl">
          <div class="flex items-center gap-3">
            <img
              src="/assets/roamceylon-mark.png"
              alt="RoamCeylon emblem"
              class="h-11 w-11 rounded-2xl border border-white/20 bg-white/10 p-1 object-contain"
            />
            <div>
              <p class="text-xs font-bold tracking-wider text-[#FFD26B] uppercase">
                Transparent &amp; Privacy-First
              </p>
              <h2 class="text-2xl font-extrabold sm:text-3xl">
                Your Location &amp; Personal Details Stay in Your Hands
              </h2>
            </div>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-emerald-100/90 sm:text-base">
            We explain every app permission in plain English, never sell your personal information,
            and let you delete your account and data whenever you choose.
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <RouterLink
            to="/privacy-policy"
            class="inline-flex items-center gap-2 rounded-full bg-[#FFD26B] px-6 py-3 text-sm font-bold text-[#092618] transition hover:bg-[#ffe094]"
          >
            Read Plain-Language Privacy Policy
            <ArrowRight class="h-4 w-4" />
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

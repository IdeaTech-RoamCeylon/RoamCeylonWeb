<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowLeft, Mail, ShieldCheck, Trash2, Lock, FileText } from 'lucide-vue-next'
import { PERMISSIONS_TABLE } from '@/data/roamCeylonData'

const lastUpdated = 'November 14, 2026'
const effectiveDate = 'May 1, 2026'
</script>

<template>
  <div class="bg-[#FBFAF6] py-12 sm:py-16">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <!-- Top Back Link -->
      <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-4 py-2 text-sm font-semibold text-[#092618] shadow-sm transition hover:bg-emerald-50"
        >
          <ArrowLeft class="h-4 w-4" />
          Back to RoamCeylon Home
        </RouterLink>
        <a
          href="/privacy-policy.html"
          class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F3D26] underline decoration-emerald-700/40 underline-offset-4 hover:text-[#092618]"
        >
          <FileText class="h-3.5 w-3.5" />
          Printable / Standalone Version
        </a>
      </div>

      <!-- Header Card -->
      <header class="rounded-3xl bg-[#092618] p-8 text-white shadow-lg sm:p-10">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-[#FFD26B]/40 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wide text-[#FFD26B] uppercase"
        >
          <ShieldCheck class="h-3.5 w-3.5" />
          Plain-Language Privacy Promise
        </div>
        <h1 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          RoamCeylon &amp; RoamCeylon Admin Privacy Policy
        </h1>
        <p class="mt-3 text-sm leading-relaxed text-emerald-100/90 sm:text-base">
          Published by <strong>IdeaTech (Pvt) Ltd</strong> (Maharagama, Sri Lanka). We wrote this
          policy in clear, everyday language so every traveler and local business partner knows
          exactly what information is collected, why it is needed, and how you stay in control.
        </p>
        <div
          class="mt-6 flex flex-wrap gap-6 border-t border-white/15 pt-5 text-xs text-emerald-100"
        >
          <span><strong class="text-[#FFD26B]">Effective Date:</strong> {{ effectiveDate }}</span>
          <span><strong class="text-[#FFD26B]">Last Updated:</strong> {{ lastUpdated }}</span>
          <span><strong class="text-[#FFD26B]">Applies To:</strong> Traveler App, Partner App &amp; Website</span>
        </div>
      </header>

      <!-- Quick Summary Cards -->
      <div class="mt-8 grid gap-4 sm:grid-cols-3">
        <div class="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
          <Lock class="h-5 w-5 text-[#0F3D26]" />
          <h2 class="mt-3 text-sm font-bold text-[#092618]">We Never Sell Your Data</h2>
          <p class="mt-1 text-xs leading-relaxed text-slate-600">
            Your contact details, saved trips, and location are never sold to advertisers or third-party
            brokers.
          </p>
        </div>
        <div class="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
          <ShieldCheck class="h-5 w-5 text-[#0F3D26]" />
          <h2 class="mt-3 text-sm font-bold text-[#092618]">Only Shared to Fulfill Your Trip</h2>
          <p class="mt-1 text-xs leading-relaxed text-slate-600">
            Booking details are shared only with the verified hotel, guide, activity host, or artisan shop
            you choose to book with.
          </p>
        </div>
        <div class="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
          <Trash2 class="h-5 w-5 text-[#0F3D26]" />
          <h2 class="mt-3 text-sm font-bold text-[#092618]">Delete Anytime (30 Days)</h2>
          <p class="mt-1 text-xs leading-relaxed text-slate-600">
            Delete your account right inside the app or by emailing us — all personal records are
            removed within 30 days.
          </p>
        </div>
      </div>

      <!-- Main Policy Body -->
      <article
        class="mt-8 space-y-10 rounded-3xl border border-emerald-900/10 bg-white p-7 text-slate-700 shadow-sm sm:p-10"
      >
        <!-- 1 -->
        <section>
          <h2 class="text-xl font-bold text-[#092618]">1. Who This Policy Applies To</h2>
          <p class="mt-3 text-sm leading-relaxed sm:text-base">
            This Privacy Policy explains how <strong>IdeaTech (Pvt) Ltd</strong> (“IdeaTech”,
            “we”, “our”) collects, uses, stores, and protects personal information across:
          </p>
          <ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
            <li>
              <strong>RoamCeylon</strong> — our mobile app for travelers exploring Sri Lanka.
            </li>
            <li>
              <strong>RoamCeylon Admin</strong> — our companion app and portal for verified hotels,
              tour guides, activity hosts, and craft shops.
            </li>
            <li>
              <strong>The RoamCeylon Website</strong> — our informational site and online support
              pages.
            </li>
          </ul>
        </section>

        <!-- 2 -->
        <section>
          <h2 class="text-xl font-bold text-[#092618]">2. Information We Collect</h2>
          <p class="mt-3 text-sm leading-relaxed sm:text-base">
            We only ask for information needed to run your bookings, personalize your itinerary, and
            keep both travelers and Sri Lankan partners safe:
          </p>
          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl bg-[#FBFAF6] p-4 ring-1 ring-slate-200">
              <h3 class="text-sm font-bold text-[#092618]">For Travelers (RoamCeylon App)</h3>
              <ul class="mt-2 list-disc space-y-1.5 pl-4 text-xs leading-relaxed text-slate-600">
                <li>Name, email address, phone number, and optional profile photo.</li>
                <li>Trip interests, preferred travel pace, saved places, and booking history.</li>
                <li>
                  Your location (only when you turn it on) for finding nearby attractions, shops,
                  or emergency support.
                </li>
                <li>Messages or reviews you send to stays, guides, shops, or our support team.</li>
              </ul>
            </div>
            <div class="rounded-2xl bg-[#FBFAF6] p-4 ring-1 ring-slate-200">
              <h3 class="text-sm font-bold text-[#092618]">
                For Local Business Partners (RoamCeylon Admin)
              </h3>
              <ul class="mt-2 list-disc space-y-1.5 pl-4 text-xs leading-relaxed text-slate-600">
                <li>Business owner name, contact phone, and email.</li>
                <li>
                  Three-step identity check documents: National ID or Passport, business
                  registration certificate, and a live verification selfie.
                </li>
                <li>Property photos, room rates, product catalogs, tour schedules, and availability.</li>
              </ul>
            </div>
          </div>
          <p class="mt-3 text-xs leading-relaxed text-slate-500">
            We also keep basic app stability records (such as crash reports and device type) so we
            can fix bugs quickly and keep the app running smoothly on all phones.
          </p>
        </section>

        <!-- 3 -->
        <section>
          <h2 class="text-xl font-bold text-[#092618]">3. Device Permissions You Control</h2>
          <p class="mt-3 text-sm leading-relaxed sm:text-base">
            Both apps only request device permissions when you use a feature that needs them. You
            can turn any permission off at any time in your phone settings:
          </p>
          <div class="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
              <thead class="bg-[#FBFAF6] text-[#092618]">
                <tr>
                  <th class="px-4 py-3 font-bold">Permission</th>
                  <th class="px-4 py-3 font-bold">Used In</th>
                  <th class="px-4 py-3 font-bold">Why We Ask For It</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white">
                <tr v-for="row in PERMISSIONS_TABLE" :key="row.permission">
                  <td class="px-4 py-3 font-semibold text-[#092618]">{{ row.permission }}</td>
                  <td class="px-4 py-3 text-slate-600">{{ row.app }}</td>
                  <td class="px-4 py-3 text-slate-600">{{ row.purpose }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- 4 -->
        <section>
          <h2 class="text-xl font-bold text-[#092618]">4. How We Use Your Information</h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              <strong>Fulfill bookings &amp; orders:</strong> Confirm hotel rooms, guided tours, activities,
              and handmade craft purchases with local businesses.
            </li>
            <li>
              <strong>Personalize trip suggestions:</strong> Suggest sunny coasts for your travel
              month, scenic stops that match your pace, and nearby artisans.
            </li>
            <li>
              <strong>Verify business partners:</strong> Confirm every partner business is real and
              trustworthy before awarding a Verified Trust Badge.
            </li>
            <li>
              <strong>Customer care &amp; safety:</strong> Respond to help requests, prevent fraud,
              and provide one-tap access to official Sri Lankan emergency hotlines.
            </li>
          </ul>
        </section>

        <!-- 5 -->
        <section>
          <h2 class="text-xl font-bold text-[#092618]">
            5. How Our Smart Trip Planner Handles Your Information
          </h2>
          <p class="mt-3 text-sm leading-relaxed sm:text-base">
            When you use the Smart Trip Planner, your chosen travel style, travel month, and saved
            destinations are used purely to build your personalized itinerary.
          </p>
          <div class="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 text-sm">
            <ul class="list-disc space-y-1.5 pl-5 text-emerald-950">
              <li>
                Private documents (partner ID cards, business licenses, selfies), passwords, and
                payment details are <strong>never</strong> shared with our trip recommendation tool.
              </li>
              <li>
                You are always in charge — trip suggestions are helpful starting points that you
                can freely edit, rearrange, or ignore.
              </li>
            </ul>
          </div>
        </section>

        <!-- 6 -->
        <section>
          <h2 class="text-xl font-bold text-[#092618]">6. Who We Share Information With</h2>
          <p class="mt-3 text-sm leading-relaxed sm:text-base">
            We <strong>never sell or rent</strong> your personal information to marketing companies.
            We only share essential details when needed to complete your request:
          </p>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              <strong>Verified Hosts, Shops &amp; Guides:</strong> Only the name, contact info, and
              booking details required so the partner you booked can welcome you or ship your craft
              order.
            </li>
            <li>
              <strong>Trusted Payment &amp; Cloud Providers:</strong> Partners who help process
              payments, deliver notifications, and store records safely under strict confidentiality
              agreements.
            </li>
            <li>
              <strong>Legal Compliance:</strong> If required by valid Sri Lankan law enforcement or
              court order.
            </li>
          </ul>
        </section>

        <!-- 7 -->
        <section>
          <h2 class="text-xl font-bold text-[#092618]">7. How We Protect Your Information</h2>
          <p class="mt-3 text-sm leading-relaxed sm:text-base">
            We protect your account and business records using strong encryption whenever data
            travels between your phone and our secure servers, as well as encrypted storage for
            sensitive files like business verification documents. Only authorized IdeaTech staff who
            specifically review partner applications or assist with customer support can view
            protected records.
          </p>
        </section>

        <!-- 8 -->
        <section id="account-deletion">
          <h2 class="text-xl font-bold text-[#092618]">
            8. How Long We Keep Data &amp; How to Delete Your Account
          </h2>
          <p class="mt-3 text-sm leading-relaxed sm:text-base">
            We keep your profile and saved trips for as long as your account stays active. You can
            delete your account and personal information at any time in two easy ways:
          </p>
          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-slate-200 bg-[#FBFAF6] p-5">
              <p class="text-xs font-bold tracking-wide text-[#0F3D26] uppercase">Option A</p>
              <h3 class="mt-1 text-base font-bold text-[#092618]">Delete Inside the App</h3>
              <p class="mt-2 text-xs leading-relaxed text-slate-600">
                Open <strong>RoamCeylon</strong> or <strong>RoamCeylon Admin</strong>, go to
                <strong>Settings &rarr; Account &rarr; Delete Account</strong>, and confirm your
                request.
              </p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-[#FBFAF6] p-5">
              <p class="text-xs font-bold tracking-wide text-[#0F3D26] uppercase">Option B</p>
              <h3 class="mt-1 text-base font-bold text-[#092618]">Request Deletion by Email</h3>
              <p class="mt-2 text-xs leading-relaxed text-slate-600">
                Email
                <a
                  href="mailto:ideatech.project.team@gmail.com?subject=Account%20Deletion%20Request"
                  class="font-semibold text-[#0F3D26] underline"
                >
                  ideatech.project.team@gmail.com
                </a>
                from your registered email address with the subject
                <strong>“Account Deletion Request”</strong>.
              </p>
            </div>
          </div>
          <p class="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Once confirmed, your profile, saved itineraries, and personal preferences are permanently
            deleted within <strong>30 days</strong>. Where Sri Lankan tax and accounting rules
            require us to keep completed payment invoices for up to 5 years, those financial records
            are separated from your personal profile and safely removed once the legal period ends.
          </p>
        </section>

        <!-- 9 -->
        <section>
          <h2 class="text-xl font-bold text-[#092618]">9. Your Privacy Rights</h2>
          <p class="mt-3 text-sm leading-relaxed sm:text-base">
            Under Sri Lanka’s <strong>Personal Data Protection Act (PDPA No. 9 of 2022)</strong> and
            international privacy standards, you have the right to:
          </p>
          <ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
            <li>Ask for a copy of the personal details we hold about you.</li>
            <li>Correct inaccurate profile or business information.</li>
            <li>Request permanent deletion of your account and personal records.</li>
            <li>Withdraw optional permissions (such as location or marketing alerts) anytime.</li>
          </ul>
        </section>

        <!-- 10 -->
        <section>
          <h2 class="text-xl font-bold text-[#092618]">10. Children &amp; Youth Safety</h2>
          <p class="mt-3 text-sm leading-relaxed sm:text-base">
            The <strong>RoamCeylon</strong> Traveler App is designed for general travel planning and
            is not directed at children under 13 years of age. The <strong>RoamCeylon Admin</strong>
            Partner App is strictly for adults aged 18 and older operating legitimate hospitality or
            craft businesses.
          </p>
        </section>

        <!-- 11 -->
        <section>
          <h2 class="text-xl font-bold text-[#092618]">11. Updates to This Policy</h2>
          <p class="mt-3 text-sm leading-relaxed sm:text-base">
            If we make meaningful changes to how we handle your privacy, we will update the “Last
            Updated” date at the top of this page and notify active app users in advance.
          </p>
        </section>

        <!-- 12 -->
        <section class="rounded-2xl bg-[#092618] p-6 text-white sm:p-8">
          <h2 class="text-xl font-bold text-[#FFD26B]">12. Contact IdeaTech Privacy &amp; Support</h2>
          <p class="mt-2 text-sm text-emerald-100">
            Have a question about your data, bookings, or account deletion? Our local team in Sri
            Lanka is happy to help.
          </p>
          <div class="mt-5 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <p class="text-xs font-semibold text-[#FFD26B] uppercase">Email Support</p>
              <p class="mt-1 flex items-center gap-2">
                <Mail class="h-4 w-4 text-[#FFD26B]" />
                <a href="mailto:ideatech.project.team@gmail.com" class="underline hover:text-[#FFD26B]">
                  ideatech.project.team@gmail.com
                </a>
              </p>
              <p class="mt-1 flex items-center gap-2">
                <Mail class="h-4 w-4 text-[#FFD26B]" />
                <a href="mailto:ideatech.project.team@gmail.com" class="underline hover:text-[#FFD26B]">
                  ideatech.project.team@gmail.com
                </a>
              </p>
            </div>
            <div>
              <p class="text-xs font-semibold text-[#FFD26B] uppercase">Registered Office</p>
              <p class="mt-1 text-emerald-50">
                IdeaTech (Pvt) Ltd (Reg: PV 00339204)<br />
                21/1, Wijerama Lane, Dewananda Road,<br />
                Nawinna, Maharagama, Sri Lanka<br />
                Tel: 011 2 802 421 / 077 524 7435
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

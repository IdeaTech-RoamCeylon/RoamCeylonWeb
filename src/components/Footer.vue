<template>
  <footer class="bg-[#092618] text-white border-t border-emerald-800/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        <!-- Brand Column -->
        <div class="lg:col-span-4 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-2xl bg-white p-1 flex items-center justify-center">
              <img src="/assets/logo.png" alt="RoamCeylon Logo" class="w-full h-full object-contain" />
            </div>
            <div>
              <h3 class="font-display text-xl font-extrabold text-white">RoamCeylon</h3>
              <p class="text-xs text-[#EAD26B] font-semibold">IdeaTech (Pvt) Ltd · Concept to Reality</p>
            </div>
          </div>
          <p class="text-sm text-emerald-100/80 leading-relaxed">
            Sri Lanka’s all-in-one travel companion uniting smart AI trip planning, verified boutique stays, local guided tours, authentic island crafts, and 24/7 emergency help.
          </p>
          <div class="flex flex-wrap gap-2 pt-1">
            <span class="inline-flex items-center rounded-lg bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-semibold text-[#EAD26B]">
              RoamCeylon Traveler App
            </span>
            <span class="inline-flex items-center rounded-lg bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-semibold text-emerald-200">
              RoamCeylon Partner App
            </span>
          </div>
        </div>

        <!-- Ecosystem Links -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#EAD26B]">Explore</h4>
          <ul class="space-y-2 text-sm text-emerald-100/80">
            <li><RouterLink to="/#mission" class="hover:text-white transition-colors">Our Mission &amp; Purpose</RouterLink></li>
            <li><RouterLink to="/#traveler-app" class="hover:text-white transition-colors">RoamCeylon Traveler App</RouterLink></li>
            <li><RouterLink to="/#admin-app" class="hover:text-white transition-colors">RoamCeylon Partner App</RouterLink></li>
            <li><RouterLink to="/#how-it-works" class="hover:text-white transition-colors">How It Works</RouterLink></li>
            <li><RouterLink to="/#ai-model" class="hover:text-white transition-colors">Smart Trip Assistant</RouterLink></li>
            <li><RouterLink to="/#tech-stack" class="hover:text-white transition-colors">Why Choose RoamCeylon</RouterLink></li>
          </ul>
        </div>

        <!-- Legal & Safety -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#EAD26B]">Trust &amp; Legal</h4>
          <ul class="space-y-2 text-sm text-emerald-100/80">
            <li>
              <RouterLink to="/privacy-policy" class="hover:text-white transition-colors">
                Privacy Policy
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/privacy-policy#retention-deletion" class="hover:text-white transition-colors">
                Account Deletion Guide
              </RouterLink>
            </li>
            <li>
              <a href="/privacy-policy.html" class="hover:text-white transition-colors">
                Printable Policy Page
              </a>
            </li>
            <li>
              <RouterLink to="/privacy-policy#your-rights" class="hover:text-white transition-colors">
                Your Privacy Rights
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#EAD26B]">IdeaTech (Pvt) Ltd</h4>
          <div class="space-y-2 text-sm text-emerald-100/80">
            <p class="leading-relaxed">
              21/1, Wijerama Lane, Dewananda Road, Nawinna, Maharagama, Sri Lanka
            </p>
            <p>
              <a href="mailto:support@roamceylon.com" class="text-white hover:text-[#EAD26B] underline underline-offset-4">
                support@roamceylon.com
              </a>
            </p>
            <p>
              <a href="mailto:privacy@roamceylon.com" class="text-white hover:text-[#EAD26B] underline underline-offset-4">
                privacy@roamceylon.com
              </a>
            </p>
            <p class="text-xs text-emerald-200/75">
              Tel: 011 2 802 421 / 077 524 7435
            </p>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
        <p>&copy; {{ currentYear }} IdeaTech (Pvt) Ltd (RoamCeylon &amp; RoamCeylon Admin). All rights reserved.</p>
        <p>Crafted with pride in Sri Lanka for travelers and local communities.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const currentYear = new Date().getFullYear();
</script>

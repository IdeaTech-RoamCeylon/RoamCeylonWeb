<template>
  <div class="space-y-12">
    <!-- Top Role Switcher -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-5 space-y-4">
        <div class="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-300 px-3.5 py-1.5 text-xs font-bold text-[#092618]">
          <BriefcaseBusiness class="w-3.5 h-3.5" />
          RoamCeylon Admin Partner App
        </div>
        <h3 class="font-display text-2xl sm:text-3xl font-extrabold text-[#092618] tracking-tight">
          Built for Every Sri Lankan Tourism Business
        </h3>
        <p class="text-sm sm:text-base text-slate-700 leading-relaxed">
          Whether you run a family guesthouse, guide cultural tours, host surf lessons, or craft authentic local goods, RoamCeylon Admin gives you your own simple workspace on Android, iOS, or Web.
        </p>

        <!-- Role Selector Tabs -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 pt-2">
          <button
            v-for="role in PARTNER_ROLES"
            :key="role.id"
            type="button"
            class="text-left rounded-2xl p-4 border transition-all duration-200 flex items-center justify-between gap-3"
            :class="
              selectedRoleId === role.id
                ? 'bg-[#092618] text-white border-[#092618] shadow-lg'
                : 'bg-white text-[#092618] border-slate-200 shadow-sm hover:border-emerald-700/40 hover:bg-emerald-50/60'
            "
            @click="selectedRoleId = role.id"
          >
            <div class="flex items-center gap-3 min-w-0">
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                :class="
                  selectedRoleId === role.id
                    ? 'bg-[#FFD26B] text-[#092618]'
                    : 'bg-emerald-100 text-[#0F3D26]'
                "
              >
                <component :is="roleIcons[role.id]" class="w-5 h-5" />
              </div>
              <div class="min-w-0">
                <p class="font-bold text-sm sm:text-base truncate">{{ role.title }}</p>
                <p
                  class="text-[11px]"
                  :class="selectedRoleId === role.id ? 'text-[#FFD26B] font-semibold' : 'text-slate-600 font-medium'"
                >
                  {{ role.badge }}
                </p>
              </div>
            </div>
            <ChevronRight
              class="w-4 h-4 shrink-0"
              :class="selectedRoleId === role.id ? 'text-[#FFD26B]' : 'text-slate-400'"
            />
          </button>
        </div>
      </div>

      <!-- Active Partner Detail Card -->
      <div class="lg:col-span-7">
        <div class="rounded-3xl bg-white text-zinc-900 p-6 sm:p-8 shadow-xl border border-emerald-900/10 space-y-6">
          <div class="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-100 pb-5">
            <div>
              <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-[#0F3D26]">
                <component :is="roleIcons[activeRole.id]" class="w-3.5 h-3.5" />
                {{ activeRole.badge }}
              </span>
              <h4 class="font-display text-2xl font-extrabold text-zinc-900 mt-2.5">
                {{ activeRole.title }} Dashboard
              </h4>
              <p class="text-sm text-emerald-800 font-semibold mt-0.5">{{ activeRole.tagline }}</p>
            </div>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="feat in activeRole.features"
                :key="feat"
                class="rounded-lg bg-zinc-100 px-2.5 py-1 text-[11px] font-semibold text-zinc-700"
              >
                {{ feat }}
              </span>
            </div>
          </div>

          <p class="text-sm sm:text-base text-slate-700 leading-relaxed">
            {{ activeRole.description }}
          </p>

          <!-- Capabilities -->
          <div class="space-y-2.5">
            <p class="text-xs font-bold uppercase tracking-wider text-zinc-500">
              What You Can Manage From Your Phone
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="cap in activeRole.capabilities"
                :key="cap"
                class="rounded-2xl bg-[#F4F8F5] border border-emerald-900/10 p-3.5 flex items-start gap-2.5"
              >
                <CheckCircle2 class="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span class="text-xs sm:text-sm text-zinc-700 leading-snug">{{ cap }}</span>
              </div>
            </div>
          </div>

          <!-- Instant Alerts Callout -->
          <div class="rounded-2xl bg-[#092618] text-white p-4 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <BellRing class="w-5 h-5 text-[#EAD26B] shrink-0" />
              <p class="text-xs sm:text-sm text-emerald-100">
                <strong>Instant Partner Alerts:</strong> Never miss a new booking, traveler inquiry, or account approval notice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Grid: 3-Step Partner Verification + Platform Quality & Care -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- 3-Step Partner Verification -->
      <div class="lg:col-span-6 rounded-3xl bg-[#092618] text-white border border-emerald-900 shadow-lg p-6 sm:p-7 space-y-5">
        <div class="flex items-center justify-between gap-3">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#FFD26B]">
              Trusted Badge Program
            </span>
            <h4 class="font-display text-xl font-extrabold text-white mt-1">
              Simple 3-Step Partner Verification
            </h4>
          </div>
          <ShieldCheck class="w-8 h-8 text-[#FFD26B] shrink-0" />
        </div>
        <p class="text-sm text-emerald-50/95 leading-relaxed">
          To keep travelers safe and help genuine Sri Lankan businesses stand out, every partner completes a quick one-time verification right inside the app before their listings go live.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="rounded-2xl bg-white/10 border border-white/15 p-4 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-[#FFD26B] text-[#092618] flex items-center justify-center font-extrabold text-xs">
              01
            </div>
            <p class="font-bold text-sm text-white">ID or Passport</p>
            <p class="text-xs text-emerald-50/95 leading-relaxed">
              Snap or upload your National ID Card (NIC) or Passport securely.
            </p>
          </div>
          <div class="rounded-2xl bg-white/10 border border-white/15 p-4 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-[#FFD26B] text-[#092618] flex items-center justify-center font-extrabold text-xs">
              02
            </div>
            <p class="font-bold text-sm text-white">Business License</p>
            <p class="text-xs text-emerald-50/95 leading-relaxed">
              Share your Business Registration or Tourism Authority license.
            </p>
          </div>
          <div class="rounded-2xl bg-white/10 border border-white/15 p-4 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-[#FFD26B] text-[#092618] flex items-center justify-center font-extrabold text-xs">
              03
            </div>
            <p class="font-bold text-sm text-white">Quick Selfie Check</p>
            <p class="text-xs text-emerald-50/95 leading-relaxed">
              Take a quick live photo to confirm your identity matches your ID.
            </p>
          </div>
        </div>
      </div>

      <!-- Platform Quality & Support Monitoring -->
      <div class="lg:col-span-6 rounded-3xl bg-[#092618] text-white border border-emerald-900 shadow-lg p-6 sm:p-7 space-y-5">
        <div class="flex items-center justify-between gap-3">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#FFD26B]">
              Dedicated Operations Portal
            </span>
            <h4 class="font-display text-xl font-extrabold text-white mt-1">
              Around-the-Clock Quality &amp; Reliability Care
            </h4>
          </div>
          <HeartHandshake class="w-8 h-8 text-[#FFD26B] shrink-0" />
        </div>
        <p class="text-sm text-emerald-50/95 leading-relaxed">
          Behind both mobile apps, our RoamCeylon Operations Team watches over trip planner accuracy, booking reliability, and traveler feedback every single day so your vacation runs smoothly.
        </p>

        <div class="grid grid-cols-3 gap-3">
          <div class="rounded-2xl bg-white/10 border border-white/15 p-3.5">
            <p class="text-[11px] text-[#FFD26B] font-semibold">Fast Planner</p>
            <p class="font-display text-lg font-extrabold text-white mt-1">Seconds</p>
            <p class="text-[10px] text-emerald-50 mt-0.5">To craft your itinerary</p>
          </div>
          <div class="rounded-2xl bg-white/10 border border-white/15 p-3.5">
            <p class="text-[11px] text-[#FFD26B] font-semibold">Verified Hosts</p>
            <p class="font-display text-lg font-extrabold text-emerald-200 mt-1">Manual Check</p>
            <p class="text-[10px] text-emerald-50 mt-0.5">Every partner reviewed</p>
          </div>
          <div class="rounded-2xl bg-white/10 border border-white/15 p-3.5">
            <p class="text-[11px] text-[#FFD26B] font-semibold">Quality First</p>
            <p class="font-display text-lg font-extrabold text-white mt-1">Live Feedback</p>
            <p class="text-[10px] text-emerald-50 mt-0.5">Continuously improved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  BedDouble,
  BellRing,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Compass,
  HeartHandshake,
  MountainSnow,
  ShieldCheck,
  Store,
} from 'lucide-vue-next';
import { PARTNER_ROLES, type PartnerRole } from '@/data/roamCeylonData';

const selectedRoleId = ref<PartnerRole['id']>('hotel_manager');

const roleIcons = {
  hotel_manager: BedDouble,
  tour_guide: Compass,
  activity_provider: MountainSnow,
  shop_partner: Store,
};

const activeRole = computed(
  () => PARTNER_ROLES.find((r) => r.id === selectedRoleId.value) ?? PARTNER_ROLES[0],
);
</script>

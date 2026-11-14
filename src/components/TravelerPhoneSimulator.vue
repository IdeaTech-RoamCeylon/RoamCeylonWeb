<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    <!-- Left: Interactive Screen Selector & Feature Notes -->
    <div class="lg:col-span-5 lg:pr-2 space-y-5">
      <div class="inline-flex items-center gap-2 rounded-full bg-[#092618] px-3.5 py-1.5 text-xs font-bold text-[#EAD26B]">
        <Smartphone class="w-3.5 h-3.5" />
        Interactive Traveler App Preview
      </div>

      <h3 class="font-display text-2xl sm:text-3xl font-extrabold text-[#092618] tracking-tight">
        Tap Through the RoamCeylon Traveler App
      </h3>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed">
        See how easy it is to plan your entire Sri Lankan holiday, book stays and tours, discover authentic local shops, and access one-tap emergency help.
      </p>

      <!-- Screen Switcher Buttons -->
      <div class="space-y-3">
        <button
          v-for="screen in screens"
          :key="screen.id"
          type="button"
          class="w-full text-left rounded-2xl border p-4 transition-all duration-200 flex items-start gap-3.5"
          :class="
            activeScreen === screen.id
              ? 'bg-[#092618] border-[#092618] text-white shadow-md shadow-emerald-950/15'
              : 'bg-white border-slate-200 text-[#092618] shadow-sm hover:border-emerald-700/40 hover:bg-emerald-50/50'
          "
          @click="activeScreen = screen.id"
        >
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            :class="
              activeScreen === screen.id
                ? 'bg-[#FFD26B] text-[#092618]'
                : 'bg-emerald-100 text-[#0F3D26]'
            "
          >
            <component :is="screen.icon" class="w-5 h-5" />
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-3">
              <span class="font-bold text-sm sm:text-base">{{ screen.label }}</span>
              <span
                class="shrink-0 whitespace-nowrap text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                :class="
                  activeScreen === screen.id
                    ? 'bg-[#FFD26B]/20 text-[#FFD26B]'
                    : 'bg-emerald-100 text-[#0F3D26]'
                "
              >
                {{ screen.tag }}
              </span>
            </div>
            <p
              class="text-xs mt-1.5 leading-relaxed"
              :class="activeScreen === screen.id ? 'text-emerald-50/90' : 'text-slate-600'"
            >
              {{ screen.caption }}
            </p>
          </div>
        </button>
      </div>
    </div>

    <!-- Right: Realistic Phone Frame -->
    <div class="lg:col-span-7 flex justify-center">
      <div class="relative w-full max-w-[385px]">
        <!-- Soft Glow -->
        <div
          class="absolute -inset-4 bg-gradient-to-br from-[#FFD26B]/30 via-emerald-500/15 to-[#092618]/20 rounded-[3.2rem] blur-2xl pointer-events-none"
        ></div>

        <!-- Phone Bezel -->
        <div
          class="relative rounded-[2.8rem] bg-[#121714] p-3 shadow-2xl ring-1 ring-white/15"
        >
          <!-- Top Dynamic Notch -->
          <div class="flex items-center justify-between px-6 pt-1 pb-2 text-[11px] font-semibold text-white/80">
            <span>9:41</span>
            <div class="w-24 h-5 rounded-full bg-black flex items-center justify-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-[9px] text-zinc-400 font-semibold">RoamCeylon</span>
            </div>
            <span class="text-[10px] text-emerald-300">5G · 100%</span>
          </div>

          <!-- Inner Viewport -->
          <div class="rounded-[2.1rem] bg-[#FBFAF6] text-zinc-900 overflow-hidden h-[610px] flex flex-col">
            <!-- Scrollable Screen Content -->
            <div class="flex-1 overflow-y-auto p-3.5 space-y-3.5">
              <!-- SCREEN 1: HOME -->
              <template v-if="activeScreen === 'home'">
                <div class="rounded-2xl bg-[#FFD26B] px-4 py-3.5">
                  <p class="text-lg font-extrabold text-[#343434] tracking-tight">
                    Hi Traveler, Good Morning!
                  </p>
                  <p class="text-[11px] font-semibold text-[#5E4A16] mt-0.5">
                    Sri Lanka welcomes you · Everything ready
                  </p>
                </div>

                <!-- Active Booking Card -->
                <div class="rounded-2xl bg-white p-3.5 border border-zinc-100 shadow-sm">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="inline-flex items-center gap-1.5 rounded-full bg-[#FFF8F0] px-2.5 py-0.5 text-[10px] font-extrabold text-[#4F4633]">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      CONFIRMED TRIP
                    </span>
                    <span class="text-xs font-bold text-zinc-800">18 Nov</span>
                  </div>
                  <p class="text-sm font-extrabold text-zinc-900">Sigiriya Sky &amp; Heritage Escape</p>
                  <p class="text-[11px] text-zinc-500 mt-0.5 flex items-center gap-1">
                    <MapPin class="w-3 h-3 text-[#A87C00]" />
                    Colombo Fort Pickup · Verified Guide
                  </p>
                </div>

                <!-- AI Card -->
                <div class="rounded-3xl bg-white overflow-hidden border border-zinc-100 shadow-sm">
                  <div class="p-4 space-y-2.5">
                    <span class="inline-flex items-center gap-1 rounded-full bg-[#8CF27F] px-2.5 py-1 text-[10px] font-extrabold tracking-wider text-[#132014]">
                      <Sparkles class="w-3 h-3" />
                      AI TRAVEL ASSISTANT
                    </span>
                    <h4 class="text-lg font-extrabold leading-tight text-zinc-900">
                      AI Powered Full Trip Planning
                    </h4>
                    <p class="text-xs text-zinc-500 leading-relaxed">
                      Personalize your Sri Lankan escape. Our assistant picks routes, stays, and hidden gems in seconds.
                    </p>
                    <button
                      type="button"
                      class="w-full rounded-full bg-gradient-to-r from-[#FFD94D] to-[#FFD13A] py-2.5 text-xs font-black text-zinc-900 shadow-sm hover:brightness-95 transition"
                      @click="activeScreen = 'planner'"
                    >
                      Plan My Entire Trip with AI →
                    </button>
                  </div>
                  <img
                    src="/assets/homepage-hero.png"
                    alt="Sri Lanka Tea Plantations"
                    class="w-full h-36 object-cover"
                  />
                </div>

                <!-- Essentials 2x2 Grid -->
                <div>
                  <p class="text-[10px] font-extrabold tracking-widest text-[#1A7A1B] uppercase">
                    CURATED SELECTION
                  </p>
                  <p class="text-sm font-extrabold text-zinc-900 mb-2">
                    Explore Essentials Individually
                  </p>
                  <div class="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      class="rounded-2xl bg-[#cff6d5] p-3 text-center hover:scale-[1.02] transition"
                      @click="activeScreen = 'planner'"
                    >
                      <div class="w-10 h-10 mx-auto rounded-xl bg-[#99efb6] text-[#1A6A3B] flex items-center justify-center mb-1.5">
                        <Building2 class="w-5 h-5" />
                      </div>
                      <span class="text-xs font-extrabold text-[#1A6A3B]">Hotel &amp; Stays</span>
                    </button>
                    <button
                      type="button"
                      class="rounded-2xl bg-[#dfe9f4] p-3 text-center hover:scale-[1.02] transition"
                      @click="activeScreen = 'marketplace'"
                    >
                      <div class="w-10 h-10 mx-auto rounded-xl bg-[#c7e1fb] text-[#125D8D] flex items-center justify-center mb-1.5">
                        <ShoppingBag class="w-5 h-5" />
                      </div>
                      <span class="text-xs font-extrabold text-[#125D8D]">Market Place</span>
                    </button>
                    <button
                      type="button"
                      class="rounded-2xl bg-[#f5f7db] p-3 text-center hover:scale-[1.02] transition"
                      @click="activeScreen = 'planner'"
                    >
                      <div class="w-10 h-10 mx-auto rounded-xl bg-[#e6e8b8] text-[#5B600A] flex items-center justify-center mb-1.5">
                        <Compass class="w-5 h-5" />
                      </div>
                      <span class="text-xs font-extrabold text-[#5B600A]">Tour Packages</span>
                    </button>
                    <button
                      type="button"
                      class="rounded-2xl bg-[#f2e1d2] p-3 text-center hover:scale-[1.02] transition"
                      @click="activeScreen = 'planner'"
                    >
                      <div class="w-10 h-10 mx-auto rounded-xl bg-[#f9d1ac] text-[#B14B17] flex items-center justify-center mb-1.5">
                        <Mountain class="w-5 h-5" />
                      </div>
                      <span class="text-xs font-extrabold text-[#B14B17]">Activities &amp; Spots</span>
                    </button>
                  </div>
                </div>

                <!-- Trending Sigiriya -->
                <div class="relative rounded-3xl overflow-hidden h-44 bg-zinc-900">
                  <img
                    src="/assets/trending-sigiriya.png"
                    alt="The Golden Fortress Sigiriya"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent p-4 flex flex-col justify-end">
                    <span class="self-start rounded-full bg-[#A87C00] px-2.5 py-0.5 text-[10px] font-extrabold text-white mb-1">
                      TRENDING
                    </span>
                    <p class="text-base font-extrabold text-white">The Golden Fortress</p>
                    <p class="text-[11px] text-white/85">Explore the heights of Sigiriya this season.</p>
                  </div>
                </div>
              </template>

              <!-- SCREEN 2: AI TRIP PLANNER -->
              <template v-else-if="activeScreen === 'planner'">
                <div class="flex items-center justify-between bg-white rounded-2xl p-3 border border-zinc-100">
                  <div class="flex items-center gap-2.5">
                    <img src="/assets/ai-avatar.png" alt="AI Avatar" class="w-9 h-9 rounded-full bg-emerald-50 p-0.5" />
                    <div>
                      <p class="text-xs font-extrabold text-zinc-900">AI Trip Planner</p>
                      <p class="text-[10px] text-emerald-700 font-semibold">3 Days · Moderate Pace · LKR 50k</p>
                    </div>
                  </div>
                  <span class="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-900">
                    Saved Offline
                  </span>
                </div>

                <!-- Day Selector Tabs -->
                <div class="flex gap-2">
                  <button
                    v-for="day in [1, 2, 3]"
                    :key="day"
                    type="button"
                    class="flex-1 py-2 rounded-xl text-xs font-bold transition"
                    :class="
                      selectedDay === day
                        ? 'bg-[#092618] text-[#FFD26B]'
                        : 'bg-white text-zinc-600 border border-zinc-200'
                    "
                    @click="selectedDay = day"
                  >
                    Day {{ day }}
                  </button>
                </div>

                <!-- Day Itinerary Cards -->
                <div class="space-y-2.5">
                  <div
                    v-for="act in currentPlannerActivities"
                    :key="act.title"
                    class="rounded-2xl bg-white border border-zinc-200/80 p-3 shadow-sm space-y-2"
                  >
                    <div class="flex items-center justify-between gap-2">
                      <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {{ act.time }} · {{ act.category }}
                      </span>
                      <span class="text-[10px] font-semibold text-zinc-500">{{ act.cost }}</span>
                    </div>
                    <div class="flex gap-2.5 items-center">
                      <img :src="act.image" :alt="act.title" class="w-12 h-12 rounded-xl object-cover shrink-0" />
                      <div class="min-w-0">
                        <p class="text-xs font-extrabold text-zinc-900 truncate">{{ act.title }}</p>
                        <p class="text-[11px] text-zinc-500 leading-snug line-clamp-2">{{ act.reason }}</p>
                      </div>
                    </div>
                    <div
                      v-if="act.positiveHistory"
                      class="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[10px] font-bold text-amber-800"
                    >
                      ✨ Matched to places you loved before
                    </div>
                  </div>
                </div>

                <!-- Feedback Widget -->
                <div class="rounded-2xl bg-[#092618] text-white p-3.5 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-[#EAD26B]">How does this plan look?</span>
                    <span class="text-[10px] text-emerald-200">Personalizes future trips</span>
                  </div>
                  <div class="flex gap-2">
                    <button
                      type="button"
                      class="flex-1 rounded-xl py-1.5 text-xs font-bold transition flex items-center justify-center gap-1.5"
                      :class="plannerFeedback === 'up' ? 'bg-[#8CF27F] text-[#092618]' : 'bg-white/10 text-white hover:bg-white/20'"
                      @click="plannerFeedback = 'up'"
                    >
                      <ThumbsUp class="w-3.5 h-3.5" /> Love It
                    </button>
                    <button
                      type="button"
                      class="flex-1 rounded-xl py-1.5 text-xs font-bold transition flex items-center justify-center gap-1.5"
                      :class="plannerFeedback === 'down' ? 'bg-rose-400 text-zinc-950' : 'bg-white/10 text-white hover:bg-white/20'"
                      @click="plannerFeedback = 'down'"
                    >
                      <ThumbsDown class="w-3.5 h-3.5" /> Adjust
                    </button>
                  </div>
                  <p v-if="plannerFeedback !== 'none'" class="text-[10px] text-emerald-200/90">
                    Thanks! We’ve saved your preference to make your next itinerary even better.
                  </p>
                </div>
              </template>

              <!-- SCREEN 3: MARKETPLACE -->
              <template v-else-if="activeScreen === 'marketplace'">
                <div class="bg-white rounded-2xl p-3 border border-zinc-100">
                  <p class="text-sm font-extrabold text-zinc-900">Local Treasures &amp; Souvenirs</p>
                  <p class="text-[11px] text-zinc-500">
                    Handcrafted artifacts, Ceylon tea &amp; authentic spices from verified local shops.
                  </p>
                </div>

                <!-- Filter Chips -->
                <div class="flex gap-1.5 overflow-x-auto pb-1">
                  <button
                    v-for="tab in marketTabs"
                    :key="tab"
                    type="button"
                    class="px-3 py-1.5 rounded-full text-[11px] font-bold shrink-0 transition"
                    :class="
                      activeMarketTab === tab
                        ? 'bg-[#092618] text-[#FFD26B]'
                        : 'bg-white border border-zinc-200 text-zinc-600'
                    "
                    @click="activeMarketTab = tab"
                  >
                    {{ tab }}
                  </button>
                </div>

                <!-- Products Grid -->
                <div class="grid grid-cols-2 gap-2.5">
                  <div
                    v-for="item in filteredMarketItems"
                    :key="item.name"
                    class="rounded-2xl bg-white border border-zinc-200/80 overflow-hidden shadow-sm flex flex-col"
                  >
                    <img :src="item.image" :alt="item.name" class="w-full h-24 object-cover" />
                    <div class="p-2.5 flex-1 flex flex-col justify-between">
                      <div>
                        <div class="flex items-center justify-between text-[10px] font-bold text-[#125D8D]">
                          <span>{{ item.category }}</span>
                          <span>★ {{ item.rating }}</span>
                        </div>
                        <p class="text-xs font-extrabold text-zinc-900 mt-0.5 leading-snug">
                          {{ item.name }}
                        </p>
                      </div>
                      <p class="text-[11px] font-bold text-emerald-800 mt-1.5">{{ item.price }}</p>
                    </div>
                  </div>
                </div>
              </template>

              <!-- SCREEN 4: EMERGENCY -->
              <template v-else-if="activeScreen === 'emergency'">
                <div class="rounded-2xl bg-rose-50 border border-rose-200 p-3.5 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-rose-700 uppercase">
                      <Navigation class="w-3.5 h-3.5" /> Your Current Location
                    </span>
                    <span class="text-[10px] font-semibold text-rose-700">Updated Live</span>
                  </div>
                  <p class="text-sm font-extrabold text-zinc-900">Ella, Badulla District</p>
                  <p class="text-xs text-zinc-600 font-medium">6.8722° N, 81.0470° E</p>
                </div>

                <div class="grid grid-cols-2 gap-2.5">
                  <div
                    v-for="svc in emergencyServices"
                    :key="svc.number"
                    class="rounded-2xl p-3 border border-black/5 space-y-1.5"
                    :style="{ backgroundColor: svc.bg }"
                  >
                    <p class="text-[10px] font-extrabold tracking-wider" :style="{ color: svc.color }">
                      {{ svc.agency }}
                    </p>
                    <p class="text-sm font-extrabold text-zinc-900">{{ svc.name }}</p>
                    <div class="flex items-center justify-between pt-1">
                      <span class="text-lg font-black" :style="{ color: svc.color }">
                        {{ svc.number }}
                      </span>
                      <span
                        class="w-7 h-7 rounded-full flex items-center justify-center text-white"
                        :style="{ backgroundColor: svc.color }"
                      >
                        <Phone class="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                <div class="rounded-2xl bg-white border border-zinc-200 p-3 text-[11px] text-zinc-600 leading-relaxed">
                  Built for instant peace of mind: read your exact district and map coordinates straight off the screen while calling Sri Lankan emergency services in one tap.
                </div>
              </template>
            </div>

            <!-- Persistent Bottom Navigation Bar -->
            <div class="bg-white border-t border-zinc-200/80 px-2 py-2 grid grid-cols-4 gap-1">
              <button
                type="button"
                class="rounded-xl py-1.5 flex flex-col items-center gap-0.5 text-[10px] font-bold uppercase transition"
                :class="activeScreen === 'home' ? 'bg-[#FFE06B] text-zinc-950' : 'text-zinc-500'"
                @click="activeScreen = 'home'"
              >
                <Home class="w-4 h-4" />
                Home
              </button>
              <button
                type="button"
                class="rounded-xl py-1.5 flex flex-col items-center gap-0.5 text-[10px] font-bold uppercase transition"
                :class="activeScreen === 'planner' ? 'bg-[#FFE06B] text-zinc-950' : 'text-zinc-500'"
                @click="activeScreen = 'planner'"
              >
                <Compass class="w-4 h-4" />
                Planner
              </button>
              <button
                type="button"
                class="rounded-xl py-1.5 flex flex-col items-center gap-0.5 text-[10px] font-bold uppercase transition"
                :class="activeScreen === 'marketplace' ? 'bg-[#FFE06B] text-zinc-950' : 'text-zinc-500'"
                @click="activeScreen = 'marketplace'"
              >
                <ShoppingBag class="w-4 h-4" />
                Market
              </button>
              <button
                type="button"
                class="rounded-xl py-1.5 flex flex-col items-center gap-0.5 text-[10px] font-bold uppercase transition"
                :class="activeScreen === 'emergency' ? 'bg-rose-100 text-rose-800' : 'text-zinc-500'"
                @click="activeScreen = 'emergency'"
              >
                <ShieldAlert class="w-4 h-4" />
                SOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  Building2,
  Compass,
  Home,
  MapPin,
  Mountain,
  Navigation,
  Phone,
  ShieldAlert,
  ShoppingBag,
  Smartphone,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-vue-next';

type ScreenId = 'home' | 'planner' | 'marketplace' | 'emergency';

const activeScreen = ref<ScreenId>('home');
const selectedDay = ref<number>(1);
const plannerFeedback = ref<'none' | 'up' | 'down'>('none');
const activeMarketTab = ref<string>('Best Sellers');

const screens = [
  {
    id: 'home' as ScreenId,
    label: 'Traveler Home Screen',
    tag: 'Dashboard',
    caption: 'Warm greeting, active trip status card, instant AI planner shortcut, 4 travel categories, and trending spots.',
    icon: Home,
  },
  {
    id: 'planner' as ScreenId,
    label: 'Smart AI Trip Planner',
    tag: 'Itineraries',
    caption: 'Day-by-day plans tailored to your budget, saved offline, with clear recommendations and quick rating feedback.',
    icon: Sparkles,
  },
  {
    id: 'marketplace' as ScreenId,
    label: 'Local Treasures Marketplace',
    tag: 'Artisans',
    caption: 'Browse verified local shops for pure Ceylon tea, spices, Ambalangoda masks, and handwoven gifts.',
    icon: ShoppingBag,
  },
  {
    id: 'emergency' as ScreenId,
    label: 'Sri Lanka Emergency Safety Net',
    tag: '1-Tap SOS',
    caption: 'Shows your current street and coordinates clearly alongside instant buttons for 119, 1990, 110, and 1331.',
    icon: ShieldAlert,
  },
];

const plannerDays: Record<
  number,
  { time: string; category: string; title: string; cost: string; reason: string; image: string; positiveHistory?: boolean }[]
> = {
  1: [
    {
      time: '06:30 AM',
      category: 'Heritage',
      title: 'Sigiriya Lion Rock Sunrise Climb',
      cost: 'LKR 10,800',
      reason: 'Scheduled early in the morning for cooler weather and clear panoramic views.',
      image: '/assets/sigiriya-treetops.png',
      positiveHistory: true,
    },
    {
      time: '02:00 PM',
      category: 'Wildlife',
      title: 'Minneriya Elephant Gathering Jeep Safari',
      cost: 'LKR 16,500',
      reason: 'Timed for the afternoon elephant gathering along the Minneriya lake shore.',
      image: '/assets/elephant.png',
    },
  ],
  2: [
    {
      time: '09:00 AM',
      category: 'Tea Country',
      title: 'Nuwara Eliya Ceylon Tea Estate Tasting',
      cost: 'LKR 4,500',
      reason: 'Relaxed hill-country tasting featuring fresh single-origin Ceylon tea.',
      image: '/assets/tea-fortress.png',
      positiveHistory: true,
    },
    {
      time: '04:00 PM',
      category: 'Scenic',
      title: 'Ella Nine Arches & Ridge Walk',
      cost: 'Free Entry',
      reason: 'Arrives right before golden hour for views of the valley and hill-country train.',
      image: '/assets/homepage-hero.png',
    },
  ],
  3: [
    {
      time: '08:00 AM',
      category: 'Coast',
      title: 'Galle Fort & Weligama Surf Session',
      cost: 'LKR 8,200',
      reason: 'Ideal morning waves on the South Coast paired with a walk through historic Galle Fort.',
      image: '/assets/galle-surfer.png',
      positiveHistory: true,
    },
    {
      time: '03:30 PM',
      category: 'Relaxation',
      title: 'Bentota River Mangrove & Beach Sunset',
      cost: 'LKR 6,000',
      reason: 'Unwind at sunset with a peaceful mangrove boat tour and local beachside dinner.',
      image: '/assets/bentota.png',
    },
  ],
};

const currentPlannerActivities = computed(() => plannerDays[selectedDay.value] ?? plannerDays[1]);

const marketTabs = ['Best Sellers', 'Tea', 'Gifts', 'Spices'];

const marketItems = [
  {
    name: 'Pure Ceylon Alba Cinnamon',
    category: 'Spices',
    rating: '4.9',
    price: 'LKR 3,400',
    image: '/assets/cinnamon.png',
  },
  {
    name: 'Ambalangoda Kolam Mask',
    category: 'Gifts',
    rating: '5.0',
    price: 'LKR 9,800',
    image: '/assets/mask.png',
  },
  {
    name: 'Highland Handloom Scarf',
    category: 'Gifts',
    rating: '4.8',
    price: 'LKR 4,600',
    image: '/assets/scarf.png',
  },
  {
    name: 'Nuwara Eliya Silver Tips',
    category: 'Tea',
    rating: '4.9',
    price: 'LKR 5,200',
    image: '/assets/tea.png',
  },
];

const filteredMarketItems = computed(() => {
  if (activeMarketTab.value === 'Best Sellers') return marketItems;
  return marketItems.filter((item) => item.category === activeMarketTab.value);
});

const emergencyServices = [
  { name: 'Police', number: '119', agency: 'SRI LANKA POLICE', color: '#2F69FF', bg: '#E8EFFF' },
  { name: 'Ambulance', number: '1990', agency: 'SUWA SERIYA', color: '#D32F2F', bg: '#FFEBEE' },
  { name: 'Fire', number: '110', agency: 'FIRE SERVICE', color: '#E65100', bg: '#FFF3E0' },
  { name: 'Pethikola', number: '1331', agency: 'TOURIST SUPPORT', color: '#2E7D32', bg: '#E8F5E9' },
];
</script>

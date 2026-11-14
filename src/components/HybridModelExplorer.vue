<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
    <!-- Left: How Our Smart Assistant Helps -->
    <div class="lg:col-span-5 rounded-3xl bg-white border border-zinc-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
      <div class="space-y-4">
        <div class="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-[#0F3D26]">
          <Sparkles class="w-4 h-4" />
          Personal Trip Concierge
        </div>
        <h3 class="font-display text-2xl font-extrabold text-zinc-900">
          Built on Real Sri Lankan Travel Wisdom — Not Generic Guesses
        </h3>
        <p class="text-sm text-zinc-600 leading-relaxed">
          Ordinary travel chatbots often suggest impossible driving routes or closed attractions. RoamCeylon’s Smart Planner checks verified local details, travel pace, seasonal weather, and what you’ve rated highly before.
        </p>
        <ul class="space-y-3 text-sm text-zinc-700">
          <li class="flex items-start gap-2.5">
            <Check class="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
            <span><strong>Matches Your Pace:</strong> Choose Relaxed, Moderate, or Fast days so you never feel rushed from city to city.</span>
          </li>
          <li class="flex items-start gap-2.5">
            <Check class="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
            <span><strong>Respects Your Budget:</strong> Plans come with clear estimated costs for stays, tickets, food, and activities.</span>
          </li>
          <li class="flex items-start gap-2.5">
            <Check class="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
            <span><strong>Gets Smarter With You:</strong> Rate any plan with a thumbs-up or stars, and RoamCeylon automatically personalizes future suggestions.</span>
          </li>
        </ul>
      </div>

      <div class="rounded-2xl bg-[#FBFAF6] border border-zinc-200 p-4 space-y-1.5">
        <p class="text-xs font-extrabold text-[#0F3D26]">Privacy Promise on Your Travel Ideas</p>
        <p class="text-xs text-zinc-600 leading-relaxed">
          Only your trip preferences (like dates, destination, and interests) are used to craft itineraries — your personal passwords, phone number, and private IDs are never shared.
        </p>
      </div>
    </div>

    <!-- Right: Interactive Trip Style Matcher -->
    <div class="lg:col-span-7 rounded-3xl bg-[#092618] text-white p-6 sm:p-8 shadow-xl border border-emerald-800 space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <span class="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-[#EAD26B]">
            <Compass class="w-3.5 h-3.5" />
            Try the Smart Trip Matcher
          </span>
          <h3 class="font-display text-2xl font-extrabold text-white mt-2">
            See How RoamCeylon Tailors Your Ideal Sri Lanka Escape
          </h3>
        </div>
      </div>

      <!-- Interactive Pickers -->
      <div class="space-y-4 rounded-2xl bg-black/25 border border-white/10 p-4 sm:p-5">
        <div class="space-y-2">
          <p class="text-xs font-bold uppercase tracking-wider text-emerald-200/80">1. Choose Your Travel Vibe</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              v-for="vibe in travelVibes"
              :key="vibe.id"
              type="button"
              class="rounded-xl px-3 py-2 text-xs font-bold transition text-center"
              :class="
                selectedVibe === vibe.id
                  ? 'bg-[#FFD26B] text-[#092618]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              "
              @click="selectedVibe = vibe.id"
            >
              {{ vibe.label }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-2">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-200/80">2. Travel Pace</p>
            <div class="flex gap-2">
              <button
                v-for="p in paces"
                :key="p"
                type="button"
                class="flex-1 rounded-xl py-2 text-xs font-bold transition"
                :class="
                  selectedPace === p
                    ? 'bg-[#8CF27F] text-[#092618]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                "
                @click="selectedPace = p"
              >
                {{ p }}
              </button>
            </div>
          </div>

          <div class="space-y-2">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-200/80">3. When Are You Visiting?</p>
            <div class="flex gap-2">
              <button
                v-for="s in seasons"
                :key="s.id"
                type="button"
                class="flex-1 rounded-xl py-2 text-xs font-bold transition"
                :class="
                  selectedSeason === s.id
                    ? 'bg-[#8CF27F] text-[#092618]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                "
                @click="selectedSeason = s.id"
              >
                {{ s.label }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Generated Sample Recommendation Card -->
      <div class="rounded-2xl bg-white text-zinc-900 p-5 flex flex-col sm:flex-row gap-4 items-center">
        <img
          :src="activeRecommendation.image"
          :alt="activeRecommendation.title"
          class="w-full sm:w-36 h-36 rounded-2xl object-cover shrink-0"
        />
        <div class="space-y-2 flex-1">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-extrabold text-[#0F3D26]">
              Recommended For You · {{ selectedPace }} Pace
            </span>
            <span class="text-xs font-bold text-amber-700">✨ {{ activeRecommendation.matchLabel }}</span>
          </div>
          <h4 class="font-display text-lg font-extrabold text-zinc-900">
            {{ activeRecommendation.title }}
          </h4>
          <p class="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            {{ activeRecommendation.description }}
          </p>
          <p class="text-xs font-semibold text-emerald-800">
            Weather Tip: {{ seasonTip }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Check, Compass, Sparkles } from 'lucide-vue-next';

const selectedVibe = ref<'culture' | 'beach' | 'wildlife' | 'tea'>('culture');
const selectedPace = ref<'Relaxed' | 'Balanced' | 'Fast'>('Balanced');
const selectedSeason = ref<'dec-apr' | 'may-sep'>('dec-apr');

const travelVibes = [
  { id: 'culture' as const, label: 'Culture & Forts' },
  { id: 'beach' as const, label: 'Beaches & Surf' },
  { id: 'wildlife' as const, label: 'Safari & Nature' },
  { id: 'tea' as const, label: 'Tea & Mountains' },
];

const paces: ('Relaxed' | 'Balanced' | 'Fast')[] = ['Relaxed', 'Balanced', 'Fast'];

const seasons = [
  { id: 'dec-apr' as const, label: 'Dec – Apr' },
  { id: 'may-sep' as const, label: 'May – Sep' },
];

const recommendations = {
  culture: {
    title: 'Sigiriya Lion Rock & Polonnaruwa Heritage Trail',
    matchLabel: 'Top Cultural Match',
    image: '/assets/sigiriya-treetops.png',
    description:
      'Early-morning climb up Sigiriya Rock Fortress followed by village artisan visits and boutique eco-lodge stays in the Cultural Triangle.',
  },
  beach: {
    title: 'Galle Fort Ramparts & Golden Coast Surf Escape',
    matchLabel: 'Coastal Favorite',
    image: '/assets/galle-surfer.png',
    description:
      'Enjoy morning surf sessions, sunset walks along historic Dutch ramparts, and relaxed beachfront cafés.',
  },
  wildlife: {
    title: 'Minneriya & Yala Wildlife Jeep Expedition',
    matchLabel: 'Nature Explorer',
    image: '/assets/elephant.png',
    description:
      'Guided 4x4 safaris with verified naturalists to spot wild Sri Lankan elephants, exotic birds, and scenic wetlands.',
  },
  tea: {
    title: 'Nuwara Eliya Tea Estates & Ella Scenic Ridge',
    matchLabel: 'Highland Retreat',
    image: '/assets/tea-fortress.png',
    description:
      'Tour misty tea plantations, taste single-origin Ceylon tea, and take in sweeping highland views along scenic mountain trails.',
  },
};

const activeRecommendation = computed(() => recommendations[selectedVibe.value]);

const seasonTip = computed(() => {
  if (selectedSeason.value === 'dec-apr') {
    return 'Ideal sunshine along Sri Lanka’s South & West Coasts (Galle, Bentota, Mirissa) and crisp highland mornings.';
  }
  return 'Peak sunshine on Sri Lanka’s East Coast (Trincomalee, Pasikudah, Arugam Bay) plus great Cultural Triangle visibility.';
});
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-emerald-950/10 glass-surface transition-all duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-18 py-3">
        <!-- Brand -->
        <RouterLink to="/" class="flex items-center gap-3 group shrink-0">
          <div
            class="w-11 h-11 rounded-2xl bg-white shadow-sm ring-1 ring-emerald-950/10 flex items-center justify-center p-1 overflow-hidden group-hover:scale-105 transition-transform"
          >
            <img
              src="/assets/logo.png"
              alt="RoamCeylon Logo"
              class="w-full h-full object-contain"
            />
          </div>
          <div class="leading-tight">
            <div class="flex items-center gap-2">
              <span class="font-display font-extrabold text-lg tracking-tight text-[#092618]">
                RoamCeylon
              </span>
              <span
                class="hidden sm:inline-flex items-center rounded-full bg-[#092618] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#EAD26B]"
              >
                IdeaTech
              </span>
            </div>
            <p class="text-[11px] font-medium text-zinc-500">
              Your Sri Lanka Travel Companion
            </p>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1">
          <RouterLink
            v-for="item in navLinks"
            :key="item.label"
            :to="item.to"
            class="px-3.5 py-2 rounded-xl text-sm font-semibold text-zinc-700 hover:text-[#0F3D26] hover:bg-emerald-950/5 transition-colors"
            :class="{
              'bg-[#092618] text-[#EAD26B] hover:bg-[#092618] hover:text-[#EAD26B]':
                item.to === '/privacy-policy' && route.path === '/privacy-policy',
            }"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <!-- Right CTA -->
        <div class="hidden md:flex items-center gap-3">
          <RouterLink
            to="/privacy-policy"
            class="inline-flex items-center gap-1.5 rounded-xl border border-emerald-900/15 bg-white px-3.5 py-2 text-xs font-bold text-[#0F3D26] hover:bg-emerald-50 transition-colors"
          >
            <ShieldCheck class="w-4 h-4 text-emerald-700" />
            Privacy &amp; Safety
          </RouterLink>
          <RouterLink
            to="/#traveler-app"
            class="inline-flex items-center gap-1.5 rounded-xl bg-[#092618] px-4 py-2 text-xs font-bold text-[#FFD26B] shadow-sm hover:bg-[#145334] transition-colors"
          >
            <Smartphone class="w-4 h-4" />
            Try App Preview
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          class="lg:hidden inline-flex items-center justify-center p-2 rounded-xl text-zinc-700 hover:bg-emerald-950/5"
          :aria-expanded="mobileOpen"
          aria-label="Toggle navigation menu"
          @click="mobileOpen = !mobileOpen"
        >
          <X v-if="mobileOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Drawer -->
      <div
        v-if="mobileOpen"
        class="lg:hidden pb-5 pt-2 border-t border-zinc-200/70 space-y-1.5"
      >
        <RouterLink
          v-for="item in navLinks"
          :key="item.label"
          :to="item.to"
          class="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-zinc-800 hover:bg-emerald-950/5"
          @click="mobileOpen = false"
        >
          {{ item.label }}
        </RouterLink>
        <div class="pt-2 flex flex-col gap-2">
          <RouterLink
            to="/#traveler-app"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#092618] px-4 py-2.5 text-sm font-bold text-[#FFD26B]"
            @click="mobileOpen = false"
          >
            <Smartphone class="w-4 h-4" />
            Try Interactive App Preview
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Menu, X, ShieldCheck, Smartphone } from 'lucide-vue-next';

const route = useRoute();
const mobileOpen = ref(false);

const navLinks = [
  { label: 'Our Mission', to: '/#mission' },
  { label: 'Traveler App', to: '/#traveler-app' },
  { label: 'Partner App', to: '/#admin-app' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Smart Planner', to: '/#ai-model' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
];
</script>

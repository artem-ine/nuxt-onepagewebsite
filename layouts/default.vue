<script setup lang="ts">
import { ref, watch } from 'vue';
import { components } from "~/slices";

const { locale, setLocale } = useI18n();
const prismic = usePrismic();

// Create a ref for the page data
const page = ref(null);

// Fetch the page data function
const fetchNavigation = async () => {
  const result = await prismic.client.getSingle("navigation", { lang: locale.value });
  page.value = result;
};

// Initially fetch the navigation data when the component is mounted
fetchNavigation();

// Watch the locale and refetch the page data when the locale changes
watch(locale, () => {
  fetchNavigation();
});

</script>

<template>
  <div>
    <button v-for="(alt, i) in page?.alternate_languages" :key="i" @click="setLocale(alt.lang)">
      {{alt.lang}}
    </button>
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    /> 
    <slot />
  </div>
</template>

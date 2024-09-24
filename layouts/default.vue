<script setup lang="ts">
import { components } from "~/slices";

const { locale, setLocale } = useI18n()
const prismic = usePrismic();
const { data: page } = useAsyncData("[navigation]", () =>
  prismic.client.getSingle("navigation", { lang: locale.value }),
);

</script>

<template>
    <div>
      <button v-for="(alt, i) in page?.alternate_languages" :key="i" @click="setLocale(alt.lang)">{{alt.lang}}</button>
    </div>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  /> 
  <slot />
</template>
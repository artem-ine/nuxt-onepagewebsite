<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("[navigation]", () =>
  prismic.client.getSingle("navigation"),
);

const { locale, setLocale } = useI18n()

</script>

<template>
      <div>
      <button @click="setLocale('en-us')">en</button>
      <button @click="setLocale('fr-fr')">fr</button>
    </div>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
  <slot />
</template>
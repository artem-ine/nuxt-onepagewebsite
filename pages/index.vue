<script setup lang="ts">
import { components } from "~/slices";

const { locale } = useI18n()
const prismic = usePrismic();
const { data: page } = useAsyncData("[home]", () =>
  prismic.client.getSingle("home", { lang: locale.value }),
);

useHead({
  title: "nuxt-onepagewebsite",
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description,
    },
  ],
});


</script>

<template>
  <div>
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>
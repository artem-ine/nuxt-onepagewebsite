<script setup lang="ts">
import { components } from "~/slices";

const { locale } = useI18n()
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(`${locale.value}/${route.params.uid}` as string, () =>
  prismic.client.getByUID('article', route.params.uid as string, { lang: locale.value })
)

</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
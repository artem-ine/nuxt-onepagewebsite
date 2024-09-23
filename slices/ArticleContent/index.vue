<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ArticleTitleSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  class="article">
  <span class="title">{{ slice.primary.article_title }}</span>
  <PrismicRichText :field="slice.primary.article_description" class="description" />
  <PrismicImage :field="slice.primary.article_image" :imgix-params="{ sat: -30 }" class="article-image" />
  {{ slice.primary.article_date }}
  </section>
</template>


<style>
.article{
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article-image{
  width: 100%
}
</style>